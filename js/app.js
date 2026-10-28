/* OnePush — APUSH study app. Vanilla JS, hash routing, localStorage persistence. */
(() => {
  'use strict';

  /* ───────────────────────── Data wiring ───────────────────────── */
  const LESSONS = (window.LESSONS || []).slice().sort((a, b) => a.n - b.n);
  const LESSON = Object.fromEntries(LESSONS.map(l => [l.id, l]));
  const STIM = window.STIM || {};
  const MCQ = window.MCQ || [];
  const MCQ_BY = Object.fromEntries(MCQ.map(q => [q.id, q]));
  const SAQ = window.SAQ || [];
  const SAQ_BY = Object.fromEntries(SAQ.map(q => [q.id, q]));
  const VOCAB = window.VOCAB || [];
  const DATES = window.DATES || [];
  const TESTS = window.TESTS || [];
  const TEST_BY = Object.fromEntries(TESTS.map(t => [t.id, t]));
  const TEST_Q = {};
  TESTS.forEach(t => { t.mcq.forEach(q => { TEST_Q[q.id] = q; }); });
  const VOC_INDEX = {};
  VOCAB.forEach(v => { [v.term, ...(v.aka || [])].forEach(k => { VOC_INDEX[k.toLowerCase()] = v; }); });

  const DIFF = { e: 'Easy', m: 'Medium', h: 'Hard', c: 'Challenge' };
  const DIFF_CLS = { e: 'easy', m: 'medium', h: 'hard', c: 'challenge' };
  const DIFF_W = { e: 1, m: 1.5, h: 2.2, c: 3 };
  const SKILL = { cause: 'Causation', compare: 'Comparison', ccot: 'Continuity & Change', context: 'Contextualization', source: 'Sourcing & Analysis', claim: 'Claims & Evidence' };

  /* ───────────────────────── State ───────────────────────── */
  const KEY = 'onepush:v1';
  const blank = () => ({
    v: 1,
    created: Date.now(),
    settings: { theme: '', testDate: '', name: '', mode: 'tutor', ai: { engine: 'webllm', model: 'Qwen2.5-7B-Instruct-q4f16_1-MLC', ollamaUrl: 'http://localhost:11434', ollamaModel: 'llama3.1:8b', downloaded: false } },
    lessons: {},
    attempts: [],
    bookmarks: {},
    flags: {},
    saq: {},
    cards: {},
    tests: {},
    activity: {},
    seconds: {}
  });
  let S = load();
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && raw.v === 1) { const st = Object.assign(blank().settings, raw.settings || {}); st.ai = Object.assign(blank().settings.ai, (raw.settings || {}).ai || {}); if (st.ai.model === 'Qwen2.5-3B-Instruct-q4f16_1-MLC' && !st.ai.downloaded) st.ai.model = 'Qwen2.5-7B-Instruct-q4f16_1-MLC'; return Object.assign(blank(), raw, { settings: st }); }
    } catch (e) { /* storage unavailable or corrupt */ }
    return blank();
  }
  let saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Could not save — storage is full or blocked.'); }
    }, 120);
  }
  const today = () => dayKey(new Date());
  function dayKey(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function bump(n = 1) { const k = today(); S.activity[k] = (S.activity[k] || 0) + n; save(); renderChrome(); }
  function addSeconds(sec) { if (sec <= 0) return; const k = today(); S.seconds[k] = (S.seconds[k] || 0) + Math.min(sec, 600); save(); }

  /* ───────────────────────── Utils ───────────────────────── */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const L = i => 'ABCDE'[i];
  const PERM = {};  // stable shuffled option order per question per page view
  const perm = (key, n) => PERM[key] || (PERM[key] = shuffle([...Array(n).keys()]));
  const fmtTime = s => { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60), r = s % 60; return m + ':' + String(r).padStart(2, '0'); };
  const fmtDur = s => { if (s < 60) return Math.round(s) + 's'; const m = Math.round(s / 60); return m < 60 ? m + 'm' : Math.floor(m / 60) + 'h ' + (m % 60) + 'm'; };
  const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
  const ICON = {
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24"><path d="M6 4h12v17l-6-4-6 4z"/></svg>',
    flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    key: '<svg viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6L12 16.3 6.6 19.3l1.3-6L3.3 9.2l6.1-.6z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    exam: '<svg viewBox="0 0 24 24"><path d="M9 4h6v3H9zM6 6h12v15H6zM9 12h6M9 16h4"/></svg>',
    alert: '<svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.5M10.3 3.9 2.6 17.4A2 2 0 0 0 4.3 20.4h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
    think: '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 5v14l11-7z"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".5"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13z"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><path d="M4 7h11v13H4zM8 4h12v13"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M4 20l1.2-4.2L15.8 5.2a2 2 0 0 1 2.9 0l.1.1a2 2 0 0 1 0 2.9L8.2 18.8zM13.5 7.5l3 3"/></svg>',
    bank: '<svg viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8.5 9l2 2 4-4M8.5 15.5h7"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="#e8763a"><path d="M12 2c1 3.5 5 5.5 5 10.5A5 5 0 0 1 12 18a5 5 0 0 1-5-5.5c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z"/><path d="M12 22a6 6 0 0 1-6-6h2a4 4 0 0 0 8 0h2a6 6 0 0 1-6 6z" opacity=".35"/></svg>'
  };

  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    $('#toasts').appendChild(t); setTimeout(() => t.remove(), 2600);
  }

  /* term markup: {{Term}} or {{Term|shown text}} → hoverable vocab */
  function rich(html) {
    if (html == null) return '';
    return String(html).replace(/\{\{([^}|]+)(?:\|([^}]+))?\}\}/g, (m, term, shown) => {
      const v = VOC_INDEX[term.trim().toLowerCase()];
      const label = shown || term;
      return v ? `<span class="term" data-term="${esc(v.term)}">${label}</span>` : label;
    });
  }

  /* ───────────────────────── Question stats ───────────────────────── */
  function lastAttempts() {
    const m = {};
    for (const a of S.attempts) m[a.q] = a;
    return m;
  }
  function qStatus(id, last) { const a = (last || lastAttempts())[id]; return a ? (a.c ? 'c' : 'w') : ''; }
  function record(q, pick, ms, src) {
    const c = pick === q.a ? 1 : 0;
    S.attempts.push({ q: q.id, c, p: pick, t: Math.round(ms), ts: Date.now(), src, l: q.l, d: q.d, sk: q.sk });
    addSeconds(ms / 1000);
    bump();
    return c;
  }
  function lessonStats(lid) {
    const qs = MCQ.filter(q => q.l === lid);
    const last = lastAttempts();
    let ans = 0, right = 0;
    qs.forEach(q => { const a = last[q.id]; if (a) { ans++; right += a.c; } });
    return { total: qs.length, ans, right, acc: ans ? right / ans : null };
  }
  function mastery(lid) {
    // Difficulty-weighted accuracy of most recent attempts, scaled by how much of the lesson's bank has been tried.
    const qs = MCQ.filter(q => q.l === lid);
    if (!qs.length) return null;
    const last = lastAttempts();
    let w = 0, got = 0, n = 0;
    qs.forEach(q => { const a = last[q.id]; if (a) { n++; w += DIFF_W[q.d]; got += a.c * DIFF_W[q.d]; } });
    if (!n) return null;
    const cover = Math.min(1, n / Math.min(8, qs.length));
    return Math.round(100 * (got / w) * (0.6 + 0.4 * cover));
  }

  /* ───────────────────────── Router ───────────────────────── */
  let H = {};             // click handlers for current view, keyed by data-act
  let cleanup = [];       // teardown fns for current view (timers etc.)
  const view = $('#view');

  function teardown() { cleanup.forEach(f => { try { f(); } catch (e) { } }); cleanup = []; }
  function route() {
    teardown();
    H = {};
    const parts = location.hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean);
    const [a, b, c] = parts;
    view.classList.remove('narrow');
    $('#sidebar').classList.remove('open');
    let r = 'home';
    if (!a) viewHome();
    else if (a === 'learn' && b) { r = 'learn'; viewLesson(b, c); }
    else if (a === 'learn') { r = 'learn'; viewCourse(); }
    else if (a === 'practice' && b === 'session') { r = 'practice'; viewSession(); }
    else if (a === 'practice') { r = 'practice'; viewBank(); }
    else if (a === 'saq' && b) { r = 'saq'; viewSaq(b); }
    else if (a === 'saq') { r = 'saq'; viewSaqList(); }
    else if (a === 'vocab') { r = 'vocab'; viewVocab(b || 'cards'); }
    else if (a === 'tests' && b && c === 'review') { r = 'tests'; viewTestReview(b); }
    else if (a === 'tests' && b) { r = 'tests'; viewTest(b); }
    else if (a === 'tests') { r = 'tests'; viewTests(); }
    else if (a === 'analytics') { r = 'analytics'; viewAnalytics(); }
    else if (a === 'settings') { r = 'settings'; viewSettings(); }
    else viewHome();
    $$('#nav a').forEach(x => x.classList.toggle('active', x.dataset.route === r));
    renderChrome();
  }
  function paint(html, opts = {}) {
    view.innerHTML = `<div class="fade-in">${html}</div>`;
    if (opts.narrow) view.classList.add('narrow');
    if (!opts.keepScroll) window.scrollTo(0, 0);
  }
  view.addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (el && view.contains(el) && H[el.dataset.act]) { e.preventDefault(); H[el.dataset.act](el, e); }
    const img = e.target.closest('.figure img, .stim img');
    if (img) openLightbox(img.src);
  });
  view.addEventListener('input', e => {
    const el = e.target.closest('[data-in]');
    if (el && H[el.dataset.in]) H[el.dataset.in](el, e);
  });
  view.addEventListener('change', e => {
    const el = e.target.closest('[data-ch]');
    if (el && H[el.dataset.ch]) H[el.dataset.ch](el, e);
  });
  window.addEventListener('hashchange', route);

  function openLightbox(src) {
    const d = document.createElement('div'); d.className = 'lightbox'; d.innerHTML = `<img src="${src}" alt="">`;
    d.onclick = () => d.remove(); document.body.appendChild(d);
  }

  /* ───────────────────────── Chrome ───────────────────────── */
  function streak() {
    let n = 0; const d = new Date();
    if (!S.activity[dayKey(d)]) d.setDate(d.getDate() - 1);
    while (S.activity[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function renderChrome() {
    const st = streak();
    $('#streak').innerHTML = `${ICON.flame}<span>${st}</span><span class="muted" style="font-weight:500">day${st === 1 ? '' : 's'}</span>`;
    const done = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
    $('#sidebarFoot').innerHTML = `<div class="sf-card"><div class="row"><span class="muted">Course progress</span><b>${pct(done, LESSONS.length)}%</b></div><div class="bar good"><i style="width:${pct(done, LESSONS.length)}%"></i></div><div class="muted" style="margin-top:8px">${done} of ${LESSONS.length} lessons complete</div></div>`;
  }
  $('#themeBtn').onclick = () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nx; S.settings.theme = nx; save();
  };
  $('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
  window.addEventListener('scroll', () => $('.topbar').classList.toggle('scrolled', scrollY > 4), { passive: true });

  /* vocab tooltips */
  let tipEl = null;
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('.term');
    if (!t) { if (tipEl) { tipEl.remove(); tipEl = null; } return; }
    const v = VOC_INDEX[t.dataset.term.toLowerCase()]; if (!v) return;
    if (tipEl) tipEl.remove();
    tipEl = document.createElement('div'); tipEl.className = 'tip';
    tipEl.innerHTML = `<b>${esc(v.term)}</b>${esc(v.def)}`;
    document.body.appendChild(tipEl);
    const r = t.getBoundingClientRect();
    let x = r.left + scrollX, y = r.bottom + scrollY + 8;
    x = Math.min(x, scrollX + innerWidth - tipEl.offsetWidth - 12);
    tipEl.style.left = x + 'px'; tipEl.style.top = y + 'px';
  });

  /* ───────────────────────── Shared renderers ───────────────────────── */
  function diffChip(d) { return `<span class="chip dot diff-${DIFF_CLS[d]}">${DIFF[d]}</span>`; }
  function lessonChip(lid) { const l = LESSON[lid]; return l ? `<span class="chip">L${l.n} · ${esc(l.short || l.title)}</span>` : ''; }
  function stimHTML(q) {
    const s = typeof q.s === 'string' ? STIM[q.s] : q.s;
    if (!s) return '';
    let body = '';
    if (s.img) body += `<img src="${s.img}" alt="${esc(s.alt || '')}">`;
    if (s.table) body += s.table;
    if (s.text) body += `<div class="st">${s.text}</div>`;
    const head = s.label || s.intro;
    return `<div class="stim">${head ? `<div class="eyebrow" style="margin-bottom:8px">${esc(head)}</div>` : ''}${body}${s.src ? `<div class="ss">${s.src}</div>` : ''}</div>`;
  }
  function ring(p, size = 40, stroke = 4) {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r;
    const v = p == null ? 0 : p;
    const col = p == null ? 'var(--surface-3)' : p >= 80 ? 'var(--good)' : p >= 60 ? 'var(--warn)' : 'var(--bad)';
    return `<svg class="mastery-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="${stroke}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c * v / 100} ${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" style="font:600 ${size * 0.27}px var(--mono);fill:var(--ink-2)">${p == null ? '–' : p}</text></svg>`;
  }

  /* ════════════════════════ HOME ════════════════════════ */
  function nextLesson() {
    return LESSONS.find(l => !(S.lessons[l.id] && S.lessons[l.id].done)) || null;
  }
  function viewHome() {
    const nl = nextLesson();
    const done = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length;
    const last = lastAttempts();
    const answered = Object.keys(last).filter(id => MCQ_BY[id]).length;
    const right = Object.keys(last).filter(id => MCQ_BY[id] && last[id].c).length;
    const due = dueCards().length;
    const wrong = Object.keys(last).filter(id => MCQ_BY[id] && !last[id].c).length;
    const name = S.settings.name ? ', ' + esc(S.settings.name) : '';
    const hour = new Date().getHours();
    const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    const td = S.settings.testDate ? new Date(S.settings.testDate + 'T08:00') : null;
    const days = td ? Math.ceil((td - new Date()) / 864e5) : null;
    const plan = studyPlan(nl, due, wrong);
    const inProgress = nl && S.lessons[nl.id] && S.lessons[nl.id].sec != null;

    paint(`
      <section class="hero">
        <div class="card hero-main">
          <div class="eyebrow">${greet}${name}</div>
          <h1>${nl ? (done === 0 ? 'Learn American democracy, one lesson at a time.' : 'Pick up where you left off.') : 'You’ve finished every lesson. Now sharpen it.'}</h1>
          <p>${nl ? 'Every lesson builds on the one before it. Go in order: read, try the interactive checks, then drill the question bank for that lesson.' : 'Take a full practice test, clear your mistake queue, and keep your flashcards fresh.'}</p>
          ${nl ? `<a class="next-up" href="#/learn/${nl.id}"><div class="num">${nl.n}</div><div style="flex:1;min-width:0"><div class="eyebrow">${inProgress ? 'Continue' : 'Up next'}${nl.ap.length ? ' · AP ' + esc(nl.ap.join(', ')) : ''}</div><b style="font-size:15.5px">${esc(nl.title)}</b></div><span class="btn primary sm">${inProgress ? 'Resume' : 'Start'} ${ICON.arrowR}</span></a>` : `<div class="row"><a class="btn primary lg" href="#/tests">Take a practice test ${ICON.arrowR}</a></div>`}
          <svg class="hero-art" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 180h160M30 180V95M60 180V95M90 180V95M110 180V95M140 180V95M170 180V95M24 95h152M24 88h152L100 40z"/><circle cx="100" cy="70" r="9"/></svg>
        </div>
        <div class="card pad countdown">
          ${td ? `<div class="eyebrow">Unit test</div><div class="row" style="align-items:baseline;margin:10px 0 6px"><div class="big">${days > 0 ? days : days === 0 ? 'Today' : '—'}</div>${days > 0 ? `<div class="muted">day${days === 1 ? '' : 's'} left</div>` : ''}</div><div class="muted" style="font-size:13px">${td.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>`
        : `<div class="eyebrow">Unit test date</div><p class="muted" style="margin:8px 0 12px;font-size:14px">Set your test date to get a countdown and a pacing plan.</p><input type="date" class="input" data-ch="setDate">`}
          <div style="margin-top:18px">
            <div class="row" style="justify-content:space-between;font-size:13px;margin-bottom:6px"><span class="muted">Readiness estimate</span><b>${readiness()}%</b></div>
            <div class="bar"><i style="width:${readiness()}%"></i></div>
            <p class="faint" style="font-size:12px;margin-top:8px">Blends lesson completion, weighted MCQ accuracy, SAQ scores and practice-test results.</p>
          </div>
        </div>
      </section>

      <div class="grid g4" style="margin-top:16px">
        <div class="card stat"><div class="k">Lessons complete</div><div class="v">${done}<span class="muted" style="font-size:16px">/${LESSONS.length}</span></div><div class="s">${pct(done, LESSONS.length)}% of the unit</div></div>
        <div class="card stat"><div class="k">MCQ accuracy</div><div class="v">${answered ? pct(right, answered) + '%' : '—'}</div><div class="s">${answered} of ${MCQ.length} bank questions tried</div></div>
        <div class="card stat"><div class="k">Cards due today</div><div class="v">${due}</div><div class="s">${VOCAB.length + DATES.length} terms &amp; dates total</div></div>
        <div class="card stat"><div class="k">Study time</div><div class="v">${fmtDur(Object.values(S.seconds).reduce((a, b) => a + b, 0))}</div><div class="s">${fmtDur(S.seconds[today()] || 0)} today</div></div>
      </div>

      <div class="grid g2" style="margin-top:16px;grid-template-columns:1.3fr 1fr">
        <div class="card pad">
          <div class="card-head"><h3>Today’s plan</h3><span class="chip">${plan.filter(p => p.done).length}/${plan.length} done</span></div>
          <ul class="plan-list">${plan.map(p => `<li class="${p.done ? 'done' : ''}"><span class="tick">${p.done ? ICON.check : ''}</span><div style="flex:1"><a class="t" href="${p.href}"><b style="font-weight:550">${p.t}</b></a><div class="muted" style="font-size:13px">${p.d}</div></div></li>`).join('')}</ul>
        </div>
        <div class="card pad">
          <div class="card-head"><h3>Insights</h3><a class="btn ghost sm" href="#/analytics">All analytics ${ICON.arrowR}</a></div>
          ${insightsHTML(3)}
        </div>
      </div>

      <div class="quick-links" style="margin-top:16px">
        <a class="card ql" href="#/practice"><span class="ic">${ICON.bank}</span><b>Question bank</b><span>${MCQ.length} MCQs, 4 difficulty levels</span></a>
        <a class="card ql" href="#/saq"><span class="ic">${ICON.pen}</span><b>SAQ practice</b><span>${SAQ.length} prompts with scoring guides</span></a>
        <a class="card ql" href="#/vocab"><span class="ic">${ICON.cards}</span><b>Vocab &amp; dates</b><span>Spaced-repetition flashcards</span></a>
        <a class="card ql" href="#/tests"><span class="ic">${ICON.clock}</span><b>Unit tests</b><span>${TESTS.length} timed, AP-style exams</span></a>
      </div>
    `);
    H.setDate = el => { S.settings.testDate = el.value; save(); route(); };
  }
  function studyPlan(nl, due, wrong) {
    const t = today();
    const todays = S.attempts.filter(a => dayKey(new Date(a.ts)) === t);
    const lessonToday = LESSONS.some(l => S.lessons[l.id] && S.lessons[l.id].done && dayKey(new Date(S.lessons[l.id].done)) === t);
    const reviewedToday = Object.values(S.cards).some(c => c.last && dayKey(new Date(c.last)) === t);
    const plan = [];
    if (nl) plan.push({ t: `Lesson ${nl.n}: ${esc(nl.title)}`, d: `About ${nl.min} minutes, with interactive checks`, href: '#/learn/' + nl.id, done: lessonToday });
    plan.push({ t: 'Answer 15 bank questions', d: `${Math.min(15, todays.length)} of 15 so far today`, href: '#/practice', done: todays.length >= 15 });
    plan.push({ t: due ? `Review ${due} flashcard${due === 1 ? '' : 's'}` : 'Learn 10 new flashcards', d: 'Terms and Forever Dates, spaced out so they stick', href: '#/vocab', done: reviewedToday && !due });
    if (wrong) plan.push({ t: `Redo ${Math.min(wrong, 10)} missed question${wrong === 1 ? '' : 's'}`, d: 'Questions you got wrong last time', href: '#/practice?status=w', done: false });
    const saqToday = Object.values(S.saq).some(s => s.ts && dayKey(new Date(s.ts)) === t);
    plan.push({ t: 'Write one SAQ', d: 'Then score yourself against the rubric', href: '#/saq', done: saqToday });
    return plan;
  }
  function readiness() {
    const done = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length / Math.max(1, LESSONS.length);
    const last = lastAttempts();
    let w = 0, g = 0, n = 0;
    MCQ.forEach(q => { const a = last[q.id]; if (a) { n++; w += DIFF_W[q.d]; g += a.c * DIFF_W[q.d]; } });
    const acc = w ? g / w : 0;
    const coverage = Math.min(1, n / (MCQ.length * 0.6 || 1));
    const saqs = Object.values(S.saq).filter(s => s.score);
    let sp = 0, st = 0; saqs.forEach(s => { Object.values(s.score).forEach(v => { st++; sp += v ? 1 : 0; }); });
    const saqAcc = st ? sp / st : 0;
    const tests = Object.values(S.tests).filter(t => t.done);
    const testAcc = tests.length ? tests.reduce((a, t) => a + (t.pct || 0), 0) / tests.length / 100 : 0;
    const r = 0.3 * done + 0.35 * acc * coverage + 0.15 * saqAcc + 0.2 * testAcc;
    return Math.round(100 * r);
  }

  /* ════════════════════════ COURSE MAP ════════════════════════ */
  function viewCourse() {
    const eras = [];
    LESSONS.forEach(l => { let e = eras.find(x => x.name === l.era); if (!e) eras.push(e = { name: l.era, years: l.eraYears, items: [] }); e.items.push(l); });
    paint(`
      <div class="page-head"><div><div class="eyebrow">Unit 1</div><h1>American Democracy, 1607–2012</h1><p>How and why did American democracy develop over time? These lessons follow your class calendar and build on each other, so go in order.</p></div>
      <a class="btn" href="#/vocab/dates">${ICON.clock} Forever Dates</a></div>
      ${eras.map(e => `<section class="era"><div class="era-head"><h2>${esc(e.name)}</h2><span class="faint mono" style="font-size:12.5px">${esc(e.years || '')}</span></div><div class="lesson-list">${e.items.map(l => {
      const st = S.lessons[l.id] || {};
      const m = mastery(l.id); const ls = lessonStats(l.id);
      const cls = st.done ? 'done' : st.sec != null ? 'started' : '';
      return `<a class="card lesson-row ${cls}" href="#/learn/${l.id}"><div class="lesson-num">${st.done ? '✓' : l.n}</div><div style="min-width:0"><h3>${esc(l.title)}</h3><div class="meta">${l.sg ? `<span>Study guide ${esc(l.sg)}</span><span>·</span>` : ''}${l.ap.length ? `<span>AP ${esc(l.ap.join(', '))}</span><span>·</span>` : ''}<span>${l.min} min</span><span>·</span><span>${esc(l.years)}</span>${ls.total ? `<span>·</span><span>${ls.ans}/${ls.total} questions tried</span>` : ''}</div></div><div title="Mastery">${ring(m)}</div></a>`;
    }).join('')}</div></section>`).join('')}
    `);
  }

  /* ════════════════════════ LESSON PLAYER ════════════════════════ */
  let BLK = {};
  function viewLesson(id, secParam) {
    const l = LESSON[id];
    if (!l) return viewCourse();
    BLK = {};
    const st = S.lessons[id] || (S.lessons[id] = { sec: 0, seen: 0, checks: {} });
    const secs = MCQ.some(q => q.l === id) ? l.sections.concat([{ title: 'Lesson check', quiz: true }]) : l.sections.slice();
    let i = secParam != null ? Math.max(0, Math.min(secs.length - 1, +secParam)) : (st.done ? 0 : Math.min(st.sec || 0, secs.length - 1));
    st.sec = i; st.seen = Math.max(st.seen || 0, i); save();
    const enter = Date.now();
    cleanup.push(() => addSeconds((Date.now() - enter) / 1000));
    const idx = LESSONS.indexOf(l);
    const prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
    const sec = secs[i];

    const toc = `<aside class="toc"><div class="eyebrow">Lesson ${l.n}</div><ol>${secs.map((s, k) => `<li class="${k === i ? 'on' : k <= st.seen ? 'seen' : ''}"><button data-act="go" data-i="${k}">${k + 1}. ${esc(s.title)}</button></li>`).join('')}</ol>
      <div class="toc-nav">${prev ? `<a class="btn sm ghost" style="justify-content:flex-start" href="#/learn/${prev.id}">${ICON.arrowL} L${prev.n}</a>` : ''}${next ? `<a class="btn sm ghost" style="justify-content:flex-start" href="#/learn/${next.id}">L${next.n} ${ICON.arrowR}</a>` : ''}</div></aside>`;

    let body = '';
    if (i === 0) {
      body += `<div class="eyebrow">Lesson ${l.n}${l.sg ? ' · Study guide ' + esc(l.sg) : ''}${l.ap.length ? ' · AP Topic ' + esc(l.ap.join(' & ')) : ''} · ${esc(l.years)}</div><h1 class="lesson-title">${esc(l.title)}</h1><p class="lesson-sub">${rich(l.sub)}</p>`;
      if (l.objectives) body += `<div class="objectives"><div class="eyebrow">By the end you’ll be able to</div><ul>${l.objectives.map(o => `<li>${rich(o)}</li>`).join('')}</ul></div>`;
    }
    body += `<h2 class="section-title"><span class="n">${String(i + 1).padStart(2, '0')}</span>${esc(sec.title)}</h2>`;
    if (sec.quiz) body += lessonQuizHTML(l);
    else body += sec.blocks.map((b, k) => blockHTML(b, `${id}-${i}-${k}`, st)).join('');

    const isLast = i === secs.length - 1;
    body += `<div class="section-foot">${i > 0 ? `<button class="btn" data-act="go" data-i="${i - 1}">${ICON.arrowL} Back</button>` : '<span></span>'}
      ${isLast ? `<button class="btn primary" data-act="finish">${st.done ? 'Lesson complete ✓' : 'Finish lesson'} ${ICON.check}</button>` : `<button class="btn primary" data-act="go" data-i="${i + 1}">Continue: ${esc(secs[i + 1].title)} ${ICON.arrowR}</button>`}</div>`;

    paint(`<div class="lesson-top" style="margin-top:14px"><a class="btn ghost sm" href="#/learn">${ICON.arrowL} All lessons</a><div class="lesson-progress bar"><i style="width:${pct(i + 1, secs.length)}%"></i></div><span class="faint mono" style="font-size:12px">${i + 1}/${secs.length}</span></div>
      <div class="lesson-wrap">${toc}<article id="lessonBody">${body}</article></div>`);

    H.go = el => { location.hash = `#/learn/${id}/${el.dataset.i}`; };
    H.finish = () => {
      if (!st.done) { st.done = Date.now(); save(); bump(); }
      $('#lessonBody').innerHTML = `<div class="lesson-done card fade-in"><div class="eyebrow">Lesson ${l.n} complete</div><h2>Nice work.</h2><p class="muted" style="max-width:460px;margin:0 auto">Lock it in by practicing this lesson’s questions, or keep moving.</p>
        <div class="row" style="justify-content:center;margin-top:20px;flex-wrap:wrap"><button class="btn" data-act="drill">${ICON.target} Drill Lesson ${l.n} questions</button>${next ? `<a class="btn primary" href="#/learn/${next.id}">Next: ${esc(next.title)} ${ICON.arrowR}</a>` : `<a class="btn primary" href="#/tests">Take a practice test ${ICON.arrowR}</a>`}</div></div>`;
      renderChrome(); window.scrollTo(0, 0);
    };
    H.drill = () => startSession({ ids: shuffle(MCQ.filter(q => q.l === id).map(q => q.id)), title: `Lesson ${l.n} drill` });
    bindBlocks(st);
  }

  function lessonQuizHTML(l) {
    const pool = MCQ.filter(q => q.l === l.id);
    const pick = pool.filter(q => q.d === 'e').slice(0, 2).concat(pool.filter(q => q.d === 'm').slice(0, 2), pool.filter(q => q.d === 'h').slice(0, 1));
    if (!pick.length) return '<p class="muted">No questions yet for this lesson.</p>';
    return `<div class="prose" style="margin-bottom:18px"><p>Five questions from the bank, from easy to hard. Pick an answer to see why each option is right or wrong.</p></div>` +
      pick.map((q, k) => {
        const bid = 'quiz-' + q.id; BLK[bid] = { t: 'mcq', q };
        return `<div class="lb interact" data-bid="${bid}"><div class="interact-head">${diffChip(q.d)}<span class="faint" style="font-size:12px">Question ${k + 1} of ${pick.length}</span></div>${stimHTML(q)}<div class="prompt">${q.q}</div><div class="opts">${perm(bid, q.o.length).map((j, k) => `<button class="opt" data-act="quizpick" data-bid="${bid}" data-j="${j}"><span class="L">${L(k)}</span><span class="ot">${q.o[j]}</span></button>`).join('')}</div><div class="fb"></div></div>`;
      }).join('');
  }

  function blockHTML(b, bid, st) {
    if (typeof b === 'string') return `<div class="prose lb"><p>${rich(b)}</p></div>`;
    BLK[bid] = b;
    const done = st.checks && st.checks[bid];
    switch (b.t) {
      case 'p': return `<div class="prose lb">${[].concat(b.h).map(x => `<p>${rich(x)}</p>`).join('')}</div>`;
      case 'h': return `<h3 class="lb-h">${esc(b.h)}</h3>`;
      case 'img': return `<figure class="figure ${b.portrait ? 'portrait' : ''}"><img src="assets/img/${b.src}" alt="${esc(b.alt || b.cap || '')}" loading="lazy"><figcaption>${rich(b.cap || '')}${b.credit ? `<span class="credit">${esc(b.credit)}</span>` : ''}</figcaption></figure>`;
      case 'callout': {
        const ic = { key: ICON.key, connect: ICON.link, exam: ICON.exam, mistake: ICON.alert, think: ICON.think }[b.k] || ICON.key;
        const title = b.title || { key: 'Key idea', connect: 'Connect the dots', exam: 'On the exam', mistake: 'Common mistake', think: 'Think about it' }[b.k];
        return `<div class="lb callout ${b.k}"><span class="ci">${ic}</span><div><h4>${esc(title)}</h4><div class="cb">${[].concat(b.h).map(x => `<p>${rich(x)}</p>`).join('')}</div></div></div>`;
      }
      case 'quote': return `<blockquote class="lb quote">${b.h}<cite>${b.cite || ''}</cite></blockquote>`;
      case 'table': return `<div class="lb cmp-wrap"><table class="cmp"><thead><tr>${b.head.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map((c, k) => k === 0 ? `<th>${rich(c)}</th>` : `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>${b.cap ? `<p class="faint" style="font-size:13px;margin-top:8px">${b.cap}</p>` : ''}</div>`;
      case 'flip': return `<div class="lb">${b.title ? `<div class="interact-head"><span class="eyebrow">${esc(b.title)}</span><span class="faint" style="font-size:12px">· tap a card to flip</span></div>` : ''}<div class="flip-grid">${b.items.map(([f, k]) => `<div class="flip" data-act="flip"><div class="flip-in"><div class="flip-f">${f}<small>tap to flip</small></div><div class="flip-b">${rich(k)}</div></div></div>`).join('')}</div></div>`;
      case 'terms': return `<div class="lb vocab-inline">${b.items.map(([t, d]) => `<div class="vi"><b>${t}</b>${rich(d)}</div>`).join('')}</div>`;
      case 'timeline': return `<div class="lb tl">${b.items.map(([y, t, f]) => `<div class="tl-item ${f ? 'forever' : ''}"><div class="y">${y}</div><div class="tx">${rich(t)}</div></div>`).join('')}</div>`;
      case 'chain': return `<div class="lb">${b.title ? `<div class="eyebrow" style="margin-bottom:10px">${esc(b.title)}</div>` : ''}<div class="chain">${b.items.map(([t, d]) => `<div class="chain-step"><b>${t}</b>${rich(d)}</div>`).join('')}</div></div>`;
      case 'diagram': return `<figure class="diagram lb">${(window.DIAGRAMS && window.DIAGRAMS[b.name]) ? window.DIAGRAMS[b.name](b) : ''}${b.cap ? `<figcaption>${b.cap}</figcaption>` : ''}</figure>`;
      case 'reveal': return `<div class="lb">${b.title ? `<div class="interact-head">${ICON.think}<span class="eyebrow">${esc(b.title)}</span></div>` : ''}${b.items.map(([q, a]) => `<div class="reveal-item"><button data-act="reveal">${q}</button><div class="ra">${rich(a)}</div></div>`).join('')}</div>`;
      case 'check': return `<div class="lb interact" data-bid="${bid}"><div class="interact-head">${ICON.target}<span class="eyebrow">Quick check</span>${done ? '<span class="chip good" style="margin-left:auto">Done</span>' : ''}</div><div class="prompt">${rich(b.q)}</div><div class="opts">${perm(bid, b.o.length).map((j, k) => `<button class="opt" data-act="checkpick" data-bid="${bid}" data-j="${j}"><span class="L">${L(k)}</span><span class="ot">${b.o[j]}</span></button>`).join('')}</div><div class="fb"></div></div>`;
      case 'sort': {
        const items = shuffle(b.items.map((it, k) => ({ text: it[0], b: it[1], k })));
        return `<div class="lb interact sort" data-bid="${bid}"><div class="interact-head">${ICON.shuffle}<span class="eyebrow">Sort it</span>${done ? '<span class="chip good" style="margin-left:auto">Done</span>' : ''}</div><div class="prompt">${rich(b.prompt)}</div><p class="faint" style="font-size:12.5px;margin:-6px 0 10px">Tap an item, then tap the group it belongs in.</p><div class="sort-pool">${items.map(it => `<button class="sort-item" data-act="sortpick" data-k="${it.k}">${it.text}</button>`).join('')}</div><div class="buckets">${b.buckets.map((n, j) => `<div class="bucket" data-act="sortdrop" data-j="${j}"><h5>${n}</h5></div>`).join('')}</div><div class="row" style="margin-top:12px"><button class="btn sm primary" data-act="sortcheck">Check</button><button class="btn sm ghost" data-act="sortreset">Reset</button><span class="sort-msg muted" style="font-size:13.5px"></span></div></div>`;
      }
      case 'order': {
        let items = b.items.map((t, k) => ({ t, k }));
        do { items = shuffle(items); } while (items.length > 1 && items.every((x, k) => x.k === k));
        BLK[bid]._cur = items;
        return `<div class="lb interact order" data-bid="${bid}"><div class="interact-head">${ICON.clock}<span class="eyebrow">Put in order</span>${done ? '<span class="chip good" style="margin-left:auto">Done</span>' : ''}</div><div class="prompt">${rich(b.prompt)}</div><div class="order-list"></div><div class="row" style="margin-top:12px"><button class="btn sm primary" data-act="ordercheck">Check order</button><span class="order-msg muted" style="font-size:13.5px"></span></div></div>`;
      }
      default: return '';
    }
  }

  function renderOrder(box) {
    const b = BLK[box.dataset.bid];
    box.querySelector('.order-list').innerHTML = b._cur.map((it, k) => `<div class="order-item" data-k="${it.k}"><span class="n">${k + 1}</span><span>${rich(it.t)}</span><span class="mv"><button data-act="ordermv" data-dir="-1" data-pos="${k}" aria-label="Move up">${ICON.up}</button><button data-act="ordermv" data-dir="1" data-pos="${k}" aria-label="Move down">${ICON.down}</button></span></div>`).join('');
  }

  function markCheck(st, bid, ok) {
    st.checks = st.checks || {};
    if (st.checks[bid] == null) { st.checks[bid] = ok ? 1 : 0; bump(); }
    save();
  }

  function bindBlocks(st) {
    $$('.interact.order').forEach(renderOrder);
    H.flip = el => el.classList.toggle('on');
    H.reveal = el => el.parentElement.classList.toggle('open');
    H.checkpick = el => {
      const box = el.closest('.interact'); if (box.dataset.locked) return;
      const b = BLK[el.dataset.bid], j = +el.dataset.j, ok = j === b.a;
      box.dataset.locked = 1;
      $$('.opt', box).forEach(o => { const k = +o.dataset.j; o.classList.add('locked'); if (k === b.a) o.classList.add('right'); else if (k === j) o.classList.add('wrong'); });
      box.querySelector('.fb').innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct.' : 'Not quite. The answer is ' + L(perm(el.dataset.bid, b.o.length).indexOf(b.a)) + '.'}</b>${rich(b.x || '')}</div>`;
      markCheck(st, el.dataset.bid, ok);
    };
    H.quizpick = el => {
      const box = el.closest('.interact'); if (box.dataset.locked) return;
      const q = BLK[el.dataset.bid].q, j = +el.dataset.j;
      box.dataset.locked = 1;
      const ok = record(q, j, 30000, 'lesson');
      $$('.opt', box).forEach(o => {
        const k = +o.dataset.j; o.classList.add('locked'); if (k === q.a) o.classList.add('right'); else if (k === j) o.classList.add('wrong');
        if (q.w && q.w[k]) o.querySelector('.ot').insertAdjacentHTML('beforeend', `<span class="why">${q.w[k]}</span>`);
      });
      box.querySelector('.fb').innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct.' : 'The answer is ' + L(perm(el.dataset.bid, q.o.length).indexOf(q.a)) + '.'}</b>${q.x || ''}</div>`;
    };
    let picked = null;
    H.sortpick = el => {
      const box = el.closest('.interact');
      if (el.closest('.bucket')) { box.querySelector('.sort-pool').appendChild(el); el.classList.remove('ok', 'no'); }
      $$('.sort-item', box).forEach(x => x.classList.remove('pick'));
      if (picked === el) { picked = null; $$('.bucket', box).forEach(x => x.classList.remove('armed')); return; }
      picked = el; el.classList.add('pick'); $$('.bucket', box).forEach(x => x.classList.add('armed'));
    };
    H.sortdrop = (el, e) => {
      if (e.target.closest('.sort-item')) return;
      if (!picked || picked.closest('.interact') !== el.closest('.interact')) return;
      el.appendChild(picked); picked.classList.remove('pick'); picked = null;
      $$('.bucket', el.closest('.interact')).forEach(x => x.classList.remove('armed'));
    };
    H.sortcheck = el => {
      const box = el.closest('.interact'), b = BLK[box.dataset.bid];
      let right = 0; const total = b.items.length;
      $$('.bucket', box).forEach(bk => { $$('.sort-item', bk).forEach(it => { const ok = b.items[+it.dataset.k][1] === +bk.dataset.j; it.classList.toggle('ok', ok); it.classList.toggle('no', !ok); if (ok) right++; }); });
      const left = $$('.sort-pool .sort-item', box).length;
      box.querySelector('.sort-msg').innerHTML = left ? `${left} item${left === 1 ? '' : 's'} still unsorted.` : right === total ? `<b style="color:var(--good)">All ${total} correct.</b> ${b.x ? rich(b.x) : ''}` : `${right} of ${total} correct. Move the red ones and check again.`;
      if (!left) markCheck(st, box.dataset.bid, right === total);
    };
    H.sortreset = el => { const box = el.closest('.interact'); $$('.sort-item', box).forEach(it => { it.classList.remove('ok', 'no', 'pick'); box.querySelector('.sort-pool').appendChild(it); }); box.querySelector('.sort-msg').textContent = ''; };
    H.ordermv = el => {
      const box = el.closest('.interact'), b = BLK[box.dataset.bid];
      const p = +el.dataset.pos, d = +el.dataset.dir, q = p + d;
      if (q < 0 || q >= b._cur.length) return;
      [b._cur[p], b._cur[q]] = [b._cur[q], b._cur[p]]; renderOrder(box);
    };
    H.ordercheck = el => {
      const box = el.closest('.interact'), b = BLK[box.dataset.bid];
      let right = 0;
      $$('.order-item', box).forEach((it, k) => { const ok = +it.dataset.k === k; it.classList.toggle('ok', ok); it.classList.toggle('no', !ok); if (ok) right++; });
      const all = right === b.items.length;
      box.querySelector('.order-msg').innerHTML = all ? `<b style="color:var(--good)">Perfect order.</b> ${b.x ? rich(b.x) : ''}` : `${right} of ${b.items.length} in the right spot.`;
      markCheck(st, box.dataset.bid, all);
    };
    // diagrams may have their own handlers
    if (window.DIAGRAMS && window.DIAGRAMS._bind) window.DIAGRAMS._bind(H, view);
  }

  /* ════════════════════════ QUESTION BANK ════════════════════════ */
  let F = { lessons: [], diffs: [], skills: [], status: 'all', q: '' };
  function filtered() {
    const last = lastAttempts();
    const q = F.q.trim().toLowerCase();
    return MCQ.filter(x => {
      if (F.lessons.length && !F.lessons.includes(x.l)) return false;
      if (F.diffs.length && !F.diffs.includes(x.d)) return false;
      if (F.skills.length && !F.skills.includes(x.sk)) return false;
      const s = qStatus(x.id, last);
      if (F.status === 'new' && s) return false;
      if (F.status === 'w' && s !== 'w') return false;
      if (F.status === 'c' && s !== 'c') return false;
      if (F.status === 'bm' && !S.bookmarks[x.id]) return false;
      if (F.status === 'fl' && !S.flags[x.id]) return false;
      if (q) { const st = typeof x.s === 'string' ? STIM[x.s] : x.s; const hay = (x.q + ' ' + x.o.join(' ') + ' ' + (st && st.text || '')).toLowerCase(); if (!hay.includes(q)) return false; }
      return true;
    });
  }
  function viewBank() {
    const qs = new URLSearchParams(location.hash.split('?')[1] || '');
    if (qs.get('status')) F.status = qs.get('status');
    if (qs.get('lesson')) F.lessons = [qs.get('lesson')];
    const last = lastAttempts();
    const list = filtered();
    const cnt = { e: 0, m: 0, h: 0, c: 0 }; MCQ.forEach(q => cnt[q.d]++);
    const statusOpts = [['all', 'All'], ['new', 'Unanswered'], ['w', 'Incorrect'], ['c', 'Correct'], ['bm', 'Bookmarked'], ['fl', 'Flagged']];
    paint(`
      <div class="page-head"><div><div class="eyebrow">Practice</div><h1>Question Bank</h1><p>${MCQ.length} multiple-choice questions written in AP style. Many are stimulus-based, and every option has an explanation. Filter, then start a session.</p></div>
        <div class="row"><div class="seg" title="Tutor shows the answer after each question. Exam mode waits until the end."><button class="${S.settings.mode === 'tutor' ? 'on' : ''}" data-act="mode" data-m="tutor">Tutor mode</button><button class="${S.settings.mode === 'exam' ? 'on' : ''}" data-act="mode" data-m="exam">Exam mode</button></div></div></div>
      <div class="bank-layout">
        <aside class="card filters">
          <div class="fgroup"><input class="input" placeholder="Search questions…" value="${esc(F.q)}" data-in="search" id="bankSearch"></div>
          <div class="fgroup"><h4>Status</h4><div class="pill-toggle">${statusOpts.map(([k, n]) => `<button class="${F.status === k ? 'on' : ''}" data-act="status" data-s="${k}">${n}</button>`).join('')}</div></div>
          <div class="fgroup"><h4>Difficulty</h4><div class="checks">${Object.keys(DIFF).map(d => `<label class="check"><input type="checkbox" data-ch="diff" value="${d}" ${F.diffs.includes(d) ? 'checked' : ''}><span class="chip dot diff-${DIFF_CLS[d]}" style="border:0;background:none;padding:0">${DIFF[d]}</span><span class="c">${cnt[d]}</span></label>`).join('')}</div></div>
          <div class="fgroup"><h4>Skill</h4><div class="checks">${Object.entries(SKILL).map(([k, n]) => `<label class="check"><input type="checkbox" data-ch="skill" value="${k}" ${F.skills.includes(k) ? 'checked' : ''}>${n}<span class="c">${MCQ.filter(q => q.sk === k).length}</span></label>`).join('')}</div></div>
          <div class="fgroup"><div class="row" style="justify-content:space-between;margin-bottom:8px"><h4 style="margin:0">Lessons</h4>${F.lessons.length ? '<button class="btn ghost sm" data-act="clearL">Clear</button>' : ''}</div><div class="checks">${LESSONS.map(l => { const ls = lessonStats(l.id); return ls.total ? `<label class="check"><input type="checkbox" data-ch="les" value="${l.id}" ${F.lessons.includes(l.id) ? 'checked' : ''}><span>L${l.n} ${esc(l.short || l.title)}</span><span class="c">${ls.total}</span></label>` : ''; }).join('')}</div></div>
        </aside>
        <section>
          <div class="card pad" style="margin-bottom:14px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
            <div><b style="font-size:18px">${list.length}</b> <span class="muted">questions match</span></div><div class="spacer"></div>
            <select class="select" style="width:auto" id="sessN"><option value="10">10 questions</option><option value="20" selected>20 questions</option><option value="40">40 questions</option><option value="999">All matching</option></select>
            <button class="btn primary" data-act="start" ${list.length ? '' : 'disabled'}>${ICON.play} Start practice</button>
          </div>
          <div class="card q-table">${list.length ? list.slice(0, 150).map(q => {
      const s = qStatus(q.id, last);
      return `<div class="q-row" data-act="one" data-id="${q.id}"><span class="status-dot ${s}"></span><div style="min-width:0"><div class="qt">${q.q.replace(/<[^>]+>/g, '')}</div><div class="qm">${diffChip(q.d)}${lessonChip(q.l)}${q.sk ? `<span class="chip">${SKILL[q.sk]}</span>` : ''}${q.s ? '<span class="chip">Stimulus</span>' : ''}</div></div><div class="row">${S.bookmarks[q.id] ? `<span style="color:var(--accent)">${ICON.bookmark.replace('<svg', '<svg width="16" height="16" fill="currentColor" stroke="none"')}</span>` : ''}</div></div>`;
    }).join('') + (list.length > 150 ? `<div class="q-row muted" style="cursor:default">…and ${list.length - 150} more. Start a session to see them all.</div>` : '') : `<div class="empty"><h3>No questions match</h3><p>Try loosening the filters.</p></div>`}</div>
        </section>
      </div>`, { keepScroll: true });

    const refresh = () => { const y = scrollY; viewBank(); scrollTo(0, y); };
    H.mode = el => { S.settings.mode = el.dataset.m; save(); refresh(); };
    H.status = el => { F.status = el.dataset.s; history.replaceState(null, '', '#/practice'); refresh(); };
    H.diff = el => { F.diffs = $$('[data-ch=diff]:checked').map(x => x.value); refresh(); };
    H.skill = el => { F.skills = $$('[data-ch=skill]:checked').map(x => x.value); refresh(); };
    H.les = el => { F.lessons = $$('[data-ch=les]:checked').map(x => x.value); history.replaceState(null, '', '#/practice'); refresh(); };
    H.clearL = () => { F.lessons = []; refresh(); };
    let tm; H.search = el => { clearTimeout(tm); tm = setTimeout(() => { F.q = el.value; refresh(); const s = $('#bankSearch'); s.focus(); s.setSelectionRange(s.value.length, s.value.length); }, 220); };
    H.start = () => { const n = +$('#sessN').value; startSession({ ids: shuffle(list.map(q => q.id)).slice(0, n), title: 'Practice session' }); };
    H.one = el => startSession({ ids: [el.dataset.id], title: 'Single question' });
  }

  /* ════════════════════════ PRACTICE SESSION ════════════════════════ */
  let SESSION = null;
  function startSession({ ids, title, mode }) {
    if (!ids.length) return toast('No questions to practice.');
    SESSION = { ids, title, mode: mode || S.settings.mode, i: 0, picks: {}, times: {}, struck: {}, started: Date.now(), qStart: Date.now(), checked: {} };
    location.hash = '#/practice/session';
    if (location.hash === '#/practice/session') route();
  }
  function viewSession() {
    teardown();
    if (!SESSION) { location.hash = '#/practice'; return; }
    const ss = SESSION;
    if (ss.i >= ss.ids.length) return sessionSummary();
    const q = MCQ_BY[ss.ids[ss.i]];
    const pick = ss.picks[q.id];
    const checked = ss.checked[q.id];
    const tutor = ss.mode === 'tutor';
    const struck = ss.struck[q.id] || {};
    const order = perm('s:' + q.id, q.o.length);
    ss.qStart = Date.now();
    const optCls = j => {
      let c = 'opt';
      if (checked) { c += ' locked'; if (j === q.a) c += ' right'; else if (j === pick) c += ' wrong'; }
      else if (j === pick) c += ' sel';
      if (struck[j] && !checked) c += ' struck';
      return c;
    };
    paint(`
      <div class="session-top"><a class="btn ghost sm" href="#/practice">${ICON.arrowL} Exit</a><b style="font-size:14px">${esc(ss.title)}</b><div class="bar"><i style="width:${pct(ss.i, ss.ids.length)}%"></i></div><span class="mono faint" style="font-size:12.5px">${ss.i + 1}/${ss.ids.length}</span><span class="mono" id="qTimer" style="font-size:13px;color:var(--muted);min-width:44px;text-align:right">0:00</span></div>
      <div class="card qcard">
        <div class="q-meta">${diffChip(q.d)}${lessonChip(q.l)}${q.sk ? `<span class="chip">${SKILL[q.sk]}</span>` : ''}<span class="spacer"></span>
          <button class="btn sm bm-btn ${S.bookmarks[q.id] ? 'on' : ''}" data-act="bm">${ICON.bookmark}${S.bookmarks[q.id] ? 'Saved' : 'Save'}</button>
          <button class="btn sm flag-btn ${S.flags[q.id] ? 'on' : ''}" data-act="flag" title="Flag to revisit">${ICON.flag}</button></div>
        ${stimHTML(q)}
        <div class="q-stem">${q.q}</div>
        <div class="opts">${order.map((j, k) => `<button class="${optCls(j)}" data-act="pick" data-j="${j}" oncontextmenu="return false"><span class="L">${L(k)}</span><span class="ot">${q.o[j]}${checked && q.w && q.w[j] ? `<span class="why">${q.w[j]}</span>` : ''}</span></button>`).join('')}</div>
        ${checked ? `<div class="feedback ${pick === q.a ? 'good' : 'bad'}"><b>${pick === q.a ? 'Correct.' : 'Incorrect. The answer is ' + L(order.indexOf(q.a)) + '.'}</b>${q.x || ''}</div>` : ''}
        <div class="q-actions">
          ${!checked && tutor ? `<button class="btn primary" data-act="check" ${pick == null ? 'disabled' : ''}>Check answer</button>` : ''}
          ${(checked || !tutor) ? `<button class="btn primary" data-act="next" ${!tutor && pick == null ? 'disabled' : ''}>${ss.i === ss.ids.length - 1 ? 'Finish' : 'Next question'} ${ICON.arrowR}</button>` : ''}
          ${ss.i > 0 && !tutor ? `<button class="btn" data-act="prev">${ICON.arrowL} Previous</button>` : ''}
          <span class="spacer"></span><span class="kbd-hint">Keys: <kbd>A</kbd>–<kbd>D</kbd> pick · <kbd>Enter</kbd> ${tutor ? 'check / next' : 'next'} · right-click or <kbd>X</kbd>+letter to cross out</span>
        </div>
      </div>`, { narrow: true });

    const tEl = $('#qTimer'); const t0 = Date.now() - (ss.times[q.id] || 0);
    const iv = setInterval(() => { if (tEl) tEl.textContent = fmtTime((Date.now() - t0) / 1000); }, 500);
    cleanup.push(() => clearInterval(iv));
    const elapsed = () => Date.now() - t0;
    const doPick = j => { if (checked) return; ss.picks[q.id] = j; ss.times[q.id] = elapsed(); viewSession(); };
    const doCheck = () => { if (pick == null || checked) return; ss.times[q.id] = elapsed(); ss.checked[q.id] = true; record(q, pick, ss.times[q.id], 'bank'); viewSession(); };
    const doNext = () => {
      if (!tutor) { if (pick == null) return; ss.times[q.id] = elapsed(); }
      ss.i++; viewSession();
    };
    H.pick = (el, e) => doPick(+el.dataset.j);
    view.querySelectorAll('.opt').forEach(o => o.addEventListener('contextmenu', () => { if (checked) return; const j = +o.dataset.j; struck[j] = !struck[j]; ss.struck[q.id] = struck; viewSession(); }));
    H.check = doCheck; H.next = doNext;
    H.prev = () => { ss.i = Math.max(0, ss.i - 1); viewSession(); };
    H.bm = () => { S.bookmarks[q.id] = !S.bookmarks[q.id]; if (!S.bookmarks[q.id]) delete S.bookmarks[q.id]; save(); viewSession(); };
    H.flag = () => { S.flags[q.id] = !S.flags[q.id]; if (!S.flags[q.id]) delete S.flags[q.id]; save(); viewSession(); };
    let xMode = false;
    const kd = e => {
      if (e.target.matches('input,textarea') || e.metaKey || e.ctrlKey) return;
      const k = e.key.toLowerCase();
      if (k === 'x') { xMode = true; return; }
      const pos = 'abcd'.indexOf(k), j = order[pos];
      if (pos >= 0 && pos < q.o.length) { if (xMode && !checked) { struck[j] = !struck[j]; ss.struck[q.id] = struck; xMode = false; viewSession(); } else doPick(j); }
      else if (k === 'enter') { if (tutor && !checked) doCheck(); else doNext(); }
      xMode = false;
    };
    document.addEventListener('keydown', kd); cleanup.push(() => document.removeEventListener('keydown', kd));
  }
  function sessionSummary() {
    const ss = SESSION;
    if (ss.mode === 'exam' && !ss.recorded) { ss.ids.forEach(id => { if (ss.picks[id] != null) record(MCQ_BY[id], ss.picks[id], ss.times[id] || 0, 'bank'); }); ss.recorded = true; }
    const rows = ss.ids.map(id => ({ q: MCQ_BY[id], p: ss.picks[id], t: ss.times[id] || 0 }));
    const right = rows.filter(r => r.p === r.q.a).length;
    const avg = rows.reduce((a, r) => a + r.t, 0) / rows.length / 1000;
    const byD = {}; rows.forEach(r => { const d = byD[r.q.d] = byD[r.q.d] || [0, 0]; d[1]++; if (r.p === r.q.a) d[0]++; });
    const missed = rows.filter(r => r.p !== r.q.a);
    paint(`
      <div class="card summary-hero" style="margin-top:20px"><div class="eyebrow">${esc(ss.title)} complete</div><div class="big" style="margin:12px 0 6px">${pct(right, rows.length)}%</div><p class="muted">${right} of ${rows.length} correct · ${avg.toFixed(0)}s average per question <span class="faint">(AP pace is about 60s)</span></p>
        <div class="row" style="justify-content:center;margin-top:18px;flex-wrap:wrap">${Object.keys(DIFF).filter(d => byD[d]).map(d => `<span class="chip dot diff-${DIFF_CLS[d]}">${DIFF[d]} ${byD[d][0]}/${byD[d][1]}</span>`).join('')}</div>
        <div class="row" style="justify-content:center;margin-top:22px;flex-wrap:wrap">${missed.length ? `<button class="btn primary" data-act="retry">Retry the ${missed.length} I missed</button>` : ''}<a class="btn" href="#/practice">Back to bank</a><a class="btn ghost" href="#/analytics">See analytics</a></div></div>
      <h3 style="margin:26px 0 12px">Review</h3>
      <div class="stack">${rows.map((r, k) => `<details class="card pad"><summary style="cursor:pointer;display:flex;gap:10px;align-items:center;list-style:none"><span class="status-dot ${r.p === r.q.a ? 'c' : 'w'}"></span><b style="font-weight:550;flex:1;font-size:14.5px">${k + 1}. ${r.q.q.replace(/<[^>]+>/g, '')}</b>${diffChip(r.q.d)}</summary><div style="margin-top:14px">${stimHTML(r.q)}<div class="opts">${perm('s:' + r.q.id, r.q.o.length).map((j, k) => `<div class="opt locked ${j === r.q.a ? 'right' : j === r.p ? 'wrong' : ''}"><span class="L">${L(k)}</span><span class="ot">${r.q.o[j]}${r.q.w && r.q.w[j] ? `<span class="why">${r.q.w[j]}</span>` : ''}</span></div>`).join('')}</div><div class="explain"><h4>Explanation</h4>${r.q.x || ''}</div></div></details>`).join('')}</div>`, { narrow: true });
    H.retry = () => startSession({ ids: missed.map(r => r.q.id), title: 'Retry missed', mode: ss.mode });
  }

  /* ════════════════════════ SAQ ════════════════════════ */
  function viewSaqList() {
    const groups = {};
    SAQ.forEach(s => { const k = s.kind || 'Other'; (groups[k] = groups[k] || []).push(s); });
    paint(`
      <div class="page-head"><div><div class="eyebrow">Practice</div><h1>SAQ Practice</h1><p>Short-answer questions in the AP format: three parts (A, B, C), each worth one point. Write your answer, then reveal the scoring guide and score yourself honestly.</p></div></div>
      <div class="card pad" style="margin-bottom:20px"><div class="grid g3">
        <div><div class="eyebrow" style="margin-bottom:6px">1 · Answer the question</div><p style="font-size:14px" class="muted">Start your first sentence by directly answering the prompt. Restate its key words.</p></div>
        <div><div class="eyebrow" style="margin-bottom:6px">2 · Cite specific evidence</div><p style="font-size:14px" class="muted">Name a real law, event, person or court case. “People were upset” earns nothing; “the Stamp Act of 1765” does.</p></div>
        <div><div class="eyebrow" style="margin-bottom:6px">3 · Explain the link</div><p style="font-size:14px" class="muted">Use “because,” “which led to,” or “this shows.” Connect your evidence back to the prompt.</p></div>
      </div></div>
      ${Object.entries(groups).map(([k, arr]) => `<h3 style="margin:24px 0 10px">${esc(k)} <span class="faint" style="font-weight:400">· ${arr.length}</span></h3><div class="saq-list">${arr.map(s => {
      const r = S.saq[s.id]; const sc = r && r.score ? Object.values(r.score).filter(Boolean).length : null;
      return `<a class="card saq-row" href="#/saq/${s.id}"><div style="min-width:0"><b style="font-size:15px;font-weight:550">${esc(s.title)}</b><div class="row wrap" style="margin-top:6px;gap:6px">${diffChip(s.d)}${(s.l || []).map(lessonChip).join('')}</div></div><div>${sc != null ? `<span class="chip ${sc === 3 ? 'good' : sc >= 2 ? 'accent' : 'bad'}">${sc}/3</span>` : r ? '<span class="chip">Draft</span>' : `<span class="btn sm">Start</span>`}</div></a>`;
    }).join('')}</div>`).join('')}`);
  }
  function viewSaq(id) {
    teardown();
    const s = SAQ_BY[id];
    if (!s) return viewSaqList();
    const r = S.saq[id] || (S.saq[id] = { ans: {}, score: null, revealed: false });
    const enter = Date.now(); cleanup.push(() => addSeconds((Date.now() - enter) / 1000));
    paint(saqBody(s, r, 'saq') + `
      <div class="ai-status" id="aiStatus" hidden></div>
      <div class="row wrap" style="margin-top:22px"><button class="btn primary" data-act="aigrade">${ICON.spark} ${r.ai ? 'Re-grade with AI' : 'Grade with AI'}</button>${r.revealed ? `<button class="btn" data-act="reset">Clear my answer</button>` : `<button class="btn" data-act="reveal">Reveal scoring guide</button>`}<span class="spacer"></span>${nextSaqLink(id)}</div>
      <p class="faint" style="font-size:12px;margin-top:10px">The AI grader runs on your device and scores each part against its scoring guide using AP rubric rules. It’s a study aid: compare its reasoning with the guide, and change any score you disagree with.</p>`, { narrow: true });
    bindSaq(s, r, () => viewSaq(id));
    H.reveal = () => { r.revealed = true; r.ts = Date.now(); r.score = r.score || {}; save(); bump(); viewSaq(id); };
    H.reset = () => { S.saq[id] = { ans: {}, score: null, revealed: false }; save(); viewSaq(id); };
    H.aigrade = () => runAiGrade([{ s, r }], () => { r.revealed = true; r.ts = Date.now(); save(); if (location.hash === '#/saq/' + id) { const y = scrollY; viewSaq(id); scrollTo(0, y); } });
  }
  function aiBox(ai) {
    const m = ai.model === 'rule' ? '' : String(ai.model || '').replace(/-q4f16_1-MLC$/, '').replace(/^ollama:/, 'Ollama · ');
    return `<div class="ai-box ${ai.score ? 'good' : 'bad'}"><div class="ai-h"><span class="ai-badge">AI grader</span><b>${ai.score}/1 point</b><span class="spacer"></span><span class="faint" style="font-size:11.5px">${esc(m)}</span></div>
      ${ai.verdict ? `<p>${esc(ai.verdict)}</p>` : ''}${ai.strengths ? `<p><b>Did well:</b> ${esc(ai.strengths)}</p>` : ''}${ai.fix ? `<p><b>To ${ai.score ? 'strengthen' : 'earn the point'}:</b> ${esc(ai.fix)}</p>` : ''}</div>`;
  }
  function aiStatus(text, p) {
    const el = $('#aiStatus'); if (!el) return;
    el.hidden = false;
    el.innerHTML = `<div class="row" style="gap:10px"><span class="spin"></span><span style="flex:1;min-width:0">${esc(text)}</span>${p != null ? `<b class="mono" style="font-size:12px">${Math.round(p * 100)}%</b>` : ''}</div>${p != null ? `<div class="bar" style="margin-top:8px"><i style="width:${Math.round(p * 100)}%"></i></div>` : ''}`;
  }
  function aiReady() {
    const a = S.settings.ai;
    if (!window.Grader) { toast('The AI grader didn’t load.'); return false; }
    if (Grader.isBusy()) { toast('Already grading. Hang on.'); return false; }
    if (a.engine === 'webllm' && !Grader.hasWebGPU()) { toast('This browser lacks WebGPU. Use desktop Chrome or Edge, or switch to Ollama in Data & Settings.'); return false; }
    if (a.engine === 'webllm' && !a.downloaded && !Grader.isLoaded(a.model)) {
      const m = Grader.MODELS.find(x => x.id === a.model) || Grader.MODELS[0];
      return confirm(`The AI grader runs on your own computer. The first time, it downloads the model (${m.name}, ${m.size}) and caches it in your browser. After that it loads from the cache in seconds.\n\nNothing you write is sent anywhere. Download now?`);
    }
    return true;
  }
  function saqItems(s, ans, label) {
    return s.parts.map((p, k) => ({ key: 'abc'[k], label: (label || '') + 'abc'[k].toUpperCase(), question: p.q, rubric: p.r, sample: p.s, stim: s.stim, answer: (ans && ans['abc'[k]]) || '' }));
  }
  async function runAiGrade(groups, done) {
    // groups: [{ s, r }] — r is the stored SAQ record (gets .ai, .score, .scoreSrc)
    const items = [], owners = [];
    groups.forEach((g, gi) => saqItems(g.s, g.r.ans, groups.length > 1 ? (gi + 1) : '').forEach(it => { items.push(it); owners.push(g.r); }));
    if (!items.some(it => it.answer.trim())) return toast('Write an answer first, then grade it.');
    if (!aiReady()) return;
    aiStatus('Starting the AI grader…', null);
    let errors = 0;
    try {
      await Grader.gradeMany(S.settings.ai, items, aiStatus, (i, res, err) => {
        const r = owners[i], key = items[i].key;
        if (!res) { errors++; return; }
        r.ai = r.ai || {}; r.ai[key] = Object.assign({ ts: Date.now() }, res);
        r.score = r.score || {}; r.score[key] = res.score;
        r.scoreSrc = r.scoreSrc || {}; r.scoreSrc[key] = 'ai';
        save();
      });
      if (S.settings.ai.engine === 'webllm') { S.settings.ai.downloaded = true; save(); }
      bump();
      toast(errors ? `Graded, but ${errors} part${errors === 1 ? '' : 's'} failed. Try again.` : 'AI grading done.');
    } catch (e) {
      const el = $('#aiStatus'); if (el) el.innerHTML = `<b style="color:var(--bad)">AI grader error:</b> ${esc(e.message)}`;
      return;
    }
    done();
  }
  function nextSaqLink(id) { const i = SAQ.findIndex(x => x.id === id); const n = SAQ[i + 1]; return n ? `<a class="btn ghost" href="#/saq/${n.id}">Next SAQ ${ICON.arrowR}</a>` : ''; }
  function saqBody(s, r, ctx) {
    const stims = [].concat(s.stim || []);
    return `<div style="margin-top:16px"><a class="btn ghost sm" href="${ctx === 'saq' ? '#/saq' : 'javascript:void 0'}" ${ctx !== 'saq' ? 'hidden' : ''}>${ICON.arrowL} All SAQs</a></div>
      <div class="card qcard" style="margin-top:12px">
        <div class="q-meta">${diffChip(s.d)}<span class="chip">${esc(s.kind || 'SAQ')}</span>${(s.l || []).map(lessonChip).join('')}</div>
        <h2 style="font-family:var(--serif);font-weight:500;font-size:24px;margin-bottom:14px">${esc(s.title)}</h2>
        ${s.intro ? `<p style="margin-bottom:14px;color:var(--ink-2)">${s.intro}</p>` : ''}
        ${stims.map(st => `<div class="stim">${st.label ? `<div class="eyebrow" style="margin-bottom:8px">${esc(st.label)}</div>` : ''}${st.img ? `<img src="${st.img}" alt="">` : ''}${st.table || ''}${st.text ? `<div class="st">${st.text}</div>` : ''}${st.src ? `<div class="ss">${st.src}</div>` : ''}</div>`).join('')}
        ${s.prompt ? `<p style="font-weight:550;margin:6px 0 4px">${s.prompt}</p>` : ''}
        ${s.parts.map((p, k) => {
      const key = 'abc'[k]; const val = (r.ans && r.ans[key]) || '';
      const sc = r.score && r.score[key];
      const ai = r.ai && r.ai[key];
      const src = r.scoreSrc && r.scoreSrc[key];
      return `<div class="saq-part"><div class="pl"><b>${key.toUpperCase()}</b><div class="pq">${p.q}</div></div>
          <textarea class="input" data-in="ans" data-k="${key}" placeholder="Write 2–4 sentences. Answer, give evidence, then explain." ${r.locked ? 'readonly' : ''}>${esc(val)}</textarea><div class="wc">${val.trim() ? val.trim().split(/\s+/).length : 0} words</div>
          ${r.revealed ? `<div class="rubric"><div class="rh">Scoring guide: earns the point if it does any of these<div class="self-score"><span class="muted" style="font-weight:500;margin-right:4px">${src === 'ai' ? '<span class="ai-badge">AI</span> ' : ''}Score:</span><button class="y ${sc === 1 ? 'on' : ''}" data-act="score" data-k="${key}" data-v="1">1 pt</button><button class="n ${sc === 0 ? 'on' : ''}" data-act="score" data-k="${key}" data-v="0">0 pts</button></div></div><div class="rb"><ul>${p.r.map(x => `<li>${x}</li>`).join('')}</ul>${p.s ? `<div class="sample"><b style="font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:var(--good)">Sample 1-point answer</b><br>${p.s}</div>` : ''}</div></div>` : ''}
          ${ai ? aiBox(ai) : ''}
        </div>`;
    }).join('')}
      </div>`;
  }
  function bindSaq(s, r, rerender) {
    H.ans = el => { r.ans = r.ans || {}; r.ans[el.dataset.k] = el.value; const wc = el.nextElementSibling; if (wc) wc.textContent = (el.value.trim() ? el.value.trim().split(/\s+/).length : 0) + ' words'; save(); };
    H.score = el => { r.score = r.score || {}; r.score[el.dataset.k] = +el.dataset.v; r.scoreSrc = r.scoreSrc || {}; r.scoreSrc[el.dataset.k] = 'self'; r.ts = Date.now(); save(); const y = scrollY; rerender(); scrollTo(0, y); };
  }

  /* ════════════════════════ VOCAB & DATES ════════════════════════ */
  const ALL_CARDS = () => VOCAB.map(v => ({ id: 'v:' + v.term, front: v.term, back: v.def, why: v.why, l: v.l, kind: 'Term' }))
    .concat(DATES.map(d => ({ id: 'd:' + d.y + ':' + d.e, front: d.e, back: d.y, why: d.note, kind: 'Date', year: d.y })));
  const BOX_DAYS = [0, 1, 2, 4, 8, 16];
  function cardState(id) { return S.cards[id] || { box: 0, due: 0 }; }
  function dueCards(pool) {
    const now = Date.now();
    return (pool || ALL_CARDS()).filter(c => { const s = S.cards[c.id]; return s && s.box > 0 && s.due <= now; });
  }
  let VF = { deck: 'all', lesson: '' };
  function viewVocab(tab) {
    teardown();
    const tabs = [['cards', 'Flashcards'], ['list', 'Glossary'], ['dates', 'Forever Dates'], ['match', 'Match game'], ['drill', 'Date drill']];
    const head = `<div class="page-head"><div><div class="eyebrow">Memorize</div><h1>Vocab &amp; Dates</h1><p>${VOCAB.length} terms from your study guide and ${DATES.length} Forever Dates. Flashcards use spaced repetition: cards you know come back less often, and cards you miss come back tomorrow.</p></div></div>
      <div class="seg" style="margin-bottom:20px">${tabs.map(([k, n]) => `<button class="${tab === k ? 'on' : ''}" data-act="tab" data-t="${k}">${n}</button>`).join('')}</div>`;
    H.tab = el => { location.hash = '#/vocab/' + el.dataset.t; };
    if (tab === 'list') return vocabList(head);
    if (tab === 'dates') return datesView(head);
    if (tab === 'match') return matchGame(head);
    if (tab === 'drill') return dateDrill(head);
    return flashcards(head);
  }
  function deckPool() {
    let pool = ALL_CARDS();
    if (VF.deck === 'terms') pool = pool.filter(c => c.kind === 'Term');
    if (VF.deck === 'dates') pool = pool.filter(c => c.kind === 'Date');
    if (VF.lesson) pool = pool.filter(c => c.l === VF.lesson);
    return pool;
  }
  function flashcards(head) {
    const pool = deckPool();
    const due = dueCards(pool);
    const fresh = pool.filter(c => !S.cards[c.id]);
    const queue = due.length ? due : fresh.slice(0, 10);
    const boxes = [0, 0, 0, 0, 0, 0]; pool.forEach(c => boxes[cardState(c.id).box]++);
    let i = 0, flipped = false;
    const draw = () => {
      const c = queue[i];
      const st = c ? cardState(c.id) : null;
      $('#fcArea').innerHTML = c ? `
        <div class="fc-stage"><div class="fc ${flipped ? 'on' : ''}" data-act="fflip"><div class="fc-in">
          <div class="fc-f"><span class="fc-tag chip">${c.kind}${c.l && LESSON[c.l] ? ' · L' + LESSON[c.l].n : ''}</span><h2>${esc(c.front)}</h2><p class="faint" style="margin-top:14px;font-size:13px">${c.kind === 'Date' ? 'What year?' : 'Define it, and say why it matters'} · <kbd>Space</kbd> to flip</p></div>
          <div class="fc-b"><span class="fc-tag chip accent">${esc(c.front)}</span><div class="def" style="margin-top:22px">${c.kind === 'Date' ? `<span style="font:600 44px var(--mono);color:var(--accent)">${esc(c.back)}</span>` : esc(c.back)}</div>${c.why ? `<div class="why"><b style="color:var(--ink-2)">Why it matters:</b> ${esc(c.why)}</div>` : ''}</div>
        </div></div></div>
        <div class="fc-controls">${flipped ? `<button class="btn" data-act="grade" data-g="0" style="color:var(--bad)">Missed it <kbd>1</kbd></button><button class="btn" data-act="grade" data-g="1">Shaky <kbd>2</kbd></button><button class="btn primary" data-act="grade" data-g="2">Knew it <kbd>3</kbd></button>` : `<button class="btn primary lg" data-act="fflip">Show answer</button>`}</div>
        <p class="faint" style="text-align:center;font-size:12.5px;margin-top:12px">Card ${i + 1} of ${queue.length} · box ${st.box}/5</p>`
        : `<div class="card empty"><h3>${pool.length ? 'All caught up.' : 'No cards in this deck.'}</h3><p>${pool.length ? 'Nothing is due right now. Come back tomorrow, or study new cards.' : ''}</p>${fresh.length ? '<button class="btn primary" style="margin-top:14px" data-act="more">Study 10 new cards</button>' : ''}</div>`;
    };
    paint(head + `
      <div class="grid" style="grid-template-columns:1fr 280px;align-items:start" id="fcGrid">
        <div id="fcArea"></div>
        <aside class="card pad">
          <h4 style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:8px">Deck</h4>
          <div class="seg" style="margin-bottom:12px">${[['all', 'All'], ['terms', 'Terms'], ['dates', 'Dates']].map(([k, n]) => `<button class="${VF.deck === k ? 'on' : ''}" data-act="deck" data-d="${k}">${n}</button>`).join('')}</div>
          <select class="select" data-ch="vles"><option value="">All lessons</option>${LESSONS.map(l => `<option value="${l.id}" ${VF.lesson === l.id ? 'selected' : ''}>L${l.n} · ${esc(l.short || l.title)}</option>`).join('')}</select>
          <h4 style="font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:18px 0 8px">Memory boxes</h4>
          <div class="leitner">${boxes.map((n, k) => `<div class="lb2" title="${k === 0 ? 'Not studied yet' : 'Box ' + k}"><b>${n}</b><span>${k === 0 ? 'New' : k}</span></div>`).join('')}</div>
          <p class="faint" style="font-size:12px;margin-top:10px;line-height:1.5">Each “Knew it” moves a card up one box. Cards in boxes 1–5 come back after 1, 2, 4, 8 and 16 days. A miss sends a card back to box 1.</p>
          <div class="row" style="margin-top:14px"><span class="chip accent">${due.length} due</span><span class="chip">${fresh.length} new</span></div>
        </aside>
      </div>`);
    if (innerWidth < 860) $('#fcGrid').style.gridTemplateColumns = '1fr';
    draw();
    H.fflip = () => { flipped = !flipped; draw(); };
    H.grade = el => {
      const c = queue[i]; const g = +el.dataset.g; const s = Object.assign({}, cardState(c.id));
      s.box = g === 0 ? 1 : g === 1 ? Math.max(1, s.box) : Math.min(5, s.box + 1);
      s.due = Date.now() + (g === 0 ? 0 : BOX_DAYS[s.box] * 864e5 - 36e5);
      s.last = Date.now(); s.n = (s.n || 0) + 1; s.right = (s.right || 0) + (g === 2 ? 1 : 0);
      S.cards[c.id] = s; save(); bump();
      if (g === 0) queue.push(c);
      i++; flipped = false; draw();
    };
    H.more = () => { viewVocab('cards'); };
    H.deck = el => { VF.deck = el.dataset.d; viewVocab('cards'); };
    H.vles = el => { VF.lesson = el.value; viewVocab('cards'); };
    const kd = e => {
      if (e.target.matches('input,textarea,select')) return;
      if (e.code === 'Space') { e.preventDefault(); H.fflip(); }
      if (flipped && ['1', '2', '3'].includes(e.key)) H.grade({ dataset: { g: +e.key - 1 } });
    };
    document.addEventListener('keydown', kd); cleanup.push(() => document.removeEventListener('keydown', kd));
  }
  function vocabList(head) {
    let q = '';
    const draw = () => {
      const list = VOCAB.filter(v => (!VF.lesson || v.l === VF.lesson) && (!q || (v.term + ' ' + v.def).toLowerCase().includes(q)));
      $('#vl').innerHTML = list.map(v => { const s = cardState('v:' + v.term); return `<div class="card vcard"><b>${esc(v.term)}</b><p>${esc(v.def)}</p>${v.why ? `<p class="muted" style="font-size:12.5px"><i>Why it matters:</i> ${esc(v.why)}</p>` : ''}<div class="vm">${v.l && LESSON[v.l] ? `<a class="chip" href="#/learn/${v.l}">L${LESSON[v.l].n}</a>` : ''}<span class="box-dots">${[1, 2, 3, 4, 5].map(k => `<i class="${s.box >= k ? 'f' : ''}"></i>`).join('')}</span></div></div>`; }).join('') || '<div class="empty">No terms match.</div>';
    };
    paint(head + `<div class="row wrap" style="margin-bottom:14px"><input class="input" style="max-width:320px" placeholder="Search terms…" data-in="vq"><select class="select" style="max-width:280px" data-ch="vles2"><option value="">All lessons</option>${LESSONS.map(l => `<option value="${l.id}" ${VF.lesson === l.id ? 'selected' : ''}>L${l.n} · ${esc(l.short || l.title)}</option>`).join('')}</select></div><div class="vlist" id="vl"></div>`);
    draw();
    H.vq = el => { q = el.value.toLowerCase(); draw(); };
    H.vles2 = el => { VF.lesson = el.value; draw(); };
  }
  function datesView(head) {
    paint(head + `<div class="grid" style="grid-template-columns:1fr 300px;align-items:start" id="dg"><div class="card">${DATES.map(d => { const s = cardState('d:' + d.y + ':' + d.e); return `<div class="dt-row"><div class="yr">${esc(d.y)}</div><div class="ev">${esc(d.e)}${d.note ? `<small>${esc(d.note)}</small>` : ''}</div><span class="box-dots">${[1, 2, 3, 4, 5].map(k => `<i class="${s.box >= k ? 'f' : ''}"></i>`).join('')}</span></div>`; }).join('')}</div>
      <aside class="card pad"><h3 style="font-size:15px;margin-bottom:8px">Your teacher says: memorize these</h3><p class="muted" style="font-size:13.5px;line-height:1.55">These are the unit’s “Forever Dates.” They act as anchors: if you know 1820, 1850 and 1854, you can place almost any event about slavery’s expansion before or after them. That skill is exactly what AP questions test.</p><div class="row wrap" style="margin-top:14px"><a class="btn primary sm" href="#/vocab/drill">Date drill</a><button class="btn sm" data-act="dd">Flashcards (dates only)</button></div></aside></div>`);
    if (innerWidth < 860) $('#dg').style.gridTemplateColumns = '1fr';
    H.dd = () => { VF.deck = 'dates'; VF.lesson = ''; location.hash = '#/vocab/cards'; };
  }
  function matchGame(head) {
    const pool = shuffle(VOCAB.filter(v => !VF.lesson || v.l === VF.lesson)).slice(0, 6);
    let left = shuffle(pool), right = shuffle(pool), sel = null, matched = 0, misses = 0; const t0 = Date.now();
    paint(head + `<div class="card pad"><div class="row" style="margin-bottom:14px"><b>Match each term to its definition</b><span class="spacer"></span><select class="select" style="width:auto" data-ch="mles"><option value="">All lessons</option>${LESSONS.map(l => `<option value="${l.id}" ${VF.lesson === l.id ? 'selected' : ''}>L${l.n} · ${esc(l.short || l.title)}</option>`).join('')}</select><button class="btn sm" data-act="newgame">New round</button></div><div class="match-grid"><div class="match-col">${left.map(v => `<button class="mt" data-act="mt" data-side="L" data-t="${esc(v.term)}"><b>${esc(v.term)}</b></button>`).join('')}</div><div class="match-col">${right.map(v => `<button class="mt" data-act="mt" data-side="R" data-t="${esc(v.term)}" style="font-size:13px">${esc(v.def)}</button>`).join('')}</div></div><p class="muted" id="mmsg" style="margin-top:14px;font-size:14px"></p></div>`);
    H.mt = el => {
      if (!sel) { sel = el; el.classList.add('sel'); return; }
      if (sel === el) { sel.classList.remove('sel'); sel = null; return; }
      if (sel.dataset.side === el.dataset.side) { sel.classList.remove('sel'); sel = el; el.classList.add('sel'); return; }
      if (sel.dataset.t === el.dataset.t) { sel.classList.remove('sel'); sel.classList.add('done'); el.classList.add('done'); matched++; bump(); }
      else { misses++; [sel, el].forEach(x => { x.classList.remove('sel'); x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 350); }); }
      sel = null;
      if (matched === pool.length) $('#mmsg').innerHTML = `<b style="color:var(--good)">Cleared in ${fmtTime((Date.now() - t0) / 1000)}</b> with ${plural(misses, 'miss').replace('misss', 'misses')}.`;
    };
    H.newgame = () => viewVocab('match');
    H.mles = el => { VF.lesson = el.value; viewVocab('match'); };
  }
  function dateDrill(head) {
    const qs = shuffle(DATES).slice(0, 10);
    let i = 0, score = 0;
    const draw = () => {
      if (i >= qs.length) { $('#dd').innerHTML = `<div class="summary-hero"><div class="big">${score}/${qs.length}</div><p class="muted" style="margin-top:8px">Forever Dates correct</p><button class="btn primary" style="margin-top:16px" data-act="again">Go again</button></div>`; return; }
      const d = qs[i];
      const ny = parseInt(d.y, 10);
      let opts = [d.y];
      const cands = shuffle(DATES.map(x => x.y).filter(y => y !== d.y && Math.abs(parseInt(y, 10) - ny) < 40));
      cands.forEach(y => { if (opts.length < 4 && !opts.includes(y)) opts.push(y); });
      [ny - 4, ny + 3, ny - 2, ny + 6].forEach(y => { if (opts.length < 4 && !opts.includes(String(y))) opts.push(String(y)); });
      opts = shuffle(opts);
      $('#dd').innerHTML = `<div class="eyebrow">Question ${i + 1} of ${qs.length}</div><h2 style="font-family:var(--serif);font-weight:500;font-size:26px;margin:10px 0 18px">${esc(d.e)}</h2><div class="opts" style="grid-template-columns:repeat(2,1fr)">${opts.map(y => `<button class="opt" data-act="dpick" data-y="${y}"><span class="L">·</span><span class="ot mono" style="font-size:17px">${y}</span></button>`).join('')}</div><div class="fb"></div>`;
      H.dpick = el => {
        if ($('#dd').dataset.lock) return; $('#dd').dataset.lock = 1;
        const ok = el.dataset.y === d.y; if (ok) score++;
        $$('#dd .opt').forEach(o => { o.classList.add('locked'); if (o.dataset.y === d.y) o.classList.add('right'); else if (o === el) o.classList.add('wrong'); });
        const id = 'd:' + d.y + ':' + d.e; const s = Object.assign({}, cardState(id)); s.box = ok ? Math.min(5, Math.max(1, s.box + 1)) : 1; s.due = Date.now() + BOX_DAYS[s.box] * 864e5 - 36e5; s.last = Date.now(); S.cards[id] = s; save(); bump();
        $('#dd .fb').innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><b>${ok ? 'Correct' : 'It was ' + d.y}</b>${esc(d.note || '')}</div><button class="btn primary" style="margin-top:12px" data-act="dnext">Next ${ICON.arrowR}</button>`;
      };
    };
    paint(head + `<div class="card pad" id="dd" style="max-width:640px"></div>`);
    H.dnext = () => { delete $('#dd').dataset.lock; i++; draw(); };
    H.again = () => viewVocab('drill');
    draw();
  }

  /* ════════════════════════ UNIT TESTS ════════════════════════ */
  function viewTests() {
    paint(`
      <div class="page-head"><div><div class="eyebrow">Assess</div><h1>Practice Unit Tests</h1><p>${TESTS.length} full-length practice tests built like the real AP exam: stimulus-based multiple choice, then short-answer questions. None of these questions appear in the question bank.</p></div></div>
      <div class="test-cards">${TESTS.map((t, k) => {
      const r = S.tests[t.id];
      const status = r && r.done ? `<span class="chip good">Score ${r.pct}%</span>` : r ? '<span class="chip accent">In progress</span>' : '<span class="chip">Not started</span>';
      return `<div class="card test-card"><div class="row"><span class="eyebrow">Practice Test ${k + 1}</span><span class="spacer"></span>${status}</div><h3>${esc(t.title)}</h3><p class="muted" style="font-size:14px">${esc(t.desc)}</p>
          <div class="tm"><span>${ICON.bank.replace('<svg', '<svg width="14" height="14" style="display:inline;vertical-align:-2px;fill:none;stroke:currentColor;stroke-width:2"')} ${t.mcq.length} MCQ · ${t.mcqTime} min</span><span>${ICON.pen.replace('<svg', '<svg width="14" height="14" style="display:inline;vertical-align:-2px;fill:none;stroke:currentColor;stroke-width:2"')} ${t.saq.length} SAQ · ${t.saqTime} min</span></div>
          <div class="row" style="margin-top:auto;padding-top:8px">${r && r.done ? `<a class="btn" href="#/tests/${t.id}/review">Review results</a><button class="btn ghost" data-act="retake" data-id="${t.id}">Retake</button>` : `<a class="btn primary" href="#/tests/${t.id}">${r ? 'Resume test' : 'Start test'} ${ICON.arrowR}</a>`}</div></div>`;
    }).join('')}</div>
      <div class="card pad" style="margin-top:20px"><h3 style="font-size:15px;margin-bottom:10px">How these tests work</h3><div class="grid g3" style="font-size:14px;color:var(--ink-2)"><p><b>Section I.</b> Multiple choice in sets of 2–4 questions per source, as on the AP exam. The timer runs at about 1 minute per question. You can flag questions and jump around.</p><p><b>Section II.</b> Three SAQs: one with a secondary source (historians) and two with primary sources. Each is worth 3 points.</p><p><b>Scoring.</b> MCQs are graded automatically. You self-score SAQs against the official-style rubric. The final score weights MCQ 60% and SAQ 40%.</p></div></div>`);
    H.retake = el => { if (confirm('Clear your previous attempt and retake this test?')) { delete S.tests[el.dataset.id]; save(); location.hash = '#/tests/' + el.dataset.id; } };
  }
  function viewTest(id) {
    const t = TEST_BY[id]; if (!t) return viewTests();
    let r = S.tests[id];
    if (r && r.done) { location.hash = '#/tests/' + id + '/review'; return; }
    if (!r) {
      paint(`<div class="card pad" style="margin-top:24px;max-width:640px"><div class="eyebrow">Practice Test</div><h1 style="font-family:var(--serif);font-weight:500;font-size:32px;margin:8px 0 10px">${esc(t.title)}</h1><p class="muted">${esc(t.desc)}</p>
        <ul style="margin:18px 0;padding-left:18px;line-height:1.8"><li><b>Section I:</b> ${t.mcq.length} multiple-choice questions, ${t.mcqTime} minutes</li><li><b>Section II:</b> ${t.saq.length} short-answer questions, ${t.saqTime} minutes</li><li>The timer keeps running if you leave the page, just like a real test.</li></ul>
        <div class="row"><button class="btn primary lg" data-act="begin">Begin Section I ${ICON.arrowR}</button><a class="btn ghost" href="#/tests">Not now</a></div></div>`, { narrow: true });
      H.begin = () => { S.tests[id] = { sec: 1, i: 0, mcq: {}, flags: {}, saq: {}, start1: Date.now() }; save(); viewTest(id); };
      return;
    }
    if (r.sec === 1) return testMcq(t, r);
    return testSaq(t, r);
  }
  function testMcq(t, r) {
    teardown();
    const q = t.mcq[r.i];
    const limit = t.mcqTime * 60;
    const left = () => limit - (Date.now() - r.start1) / 1000;
    paint(`<div class="test-layout" style="margin-top:16px">
      <div class="card qcard"><div class="q-meta"><span class="eyebrow">Section I · Question ${r.i + 1} of ${t.mcq.length}</span><span class="spacer"></span><button class="btn sm flag-btn ${r.flags[r.i] ? 'on' : ''}" data-act="tflag">${ICON.flag} ${r.flags[r.i] ? 'Flagged' : 'Flag'}</button></div>
        ${q.setLabel ? `<div class="faint" style="font-size:12.5px;margin-bottom:8px">${esc(q.setLabel)}</div>` : ''}${stimHTML(q)}<div class="q-stem">${q.q}</div>
        <div class="opts">${q.o.map((o, j) => `<button class="opt ${r.mcq[r.i] === j ? 'sel' : ''}" data-act="tpick" data-j="${j}"><span class="L">${L(j)}</span><span class="ot">${o}</span></button>`).join('')}</div>
        <div class="q-actions"><button class="btn" data-act="tprev" ${r.i === 0 ? 'disabled' : ''}>${ICON.arrowL} Previous</button><button class="btn primary" data-act="tnext">${r.i === t.mcq.length - 1 ? 'Review & end section' : 'Next'} ${ICON.arrowR}</button></div></div>
      <aside class="card test-side"><div class="eyebrow">Time remaining</div><div class="timer" id="timer">${fmtTime(left())}</div><div class="muted" style="font-size:12.5px;margin-top:6px">${Object.keys(r.mcq).length}/${t.mcq.length} answered</div>
        <div class="qnav">${t.mcq.map((_, k) => `<button class="${r.mcq[k] != null ? 'ans' : ''} ${k === r.i ? 'cur' : ''} ${r.flags[k] ? 'flag' : ''}" data-act="tjump" data-k="${k}">${k + 1}</button>`).join('')}</div>
        <button class="btn sm" style="width:100%;margin-top:14px" data-act="tend">End Section I</button></aside></div>`, { keepScroll: false });
    const iv = setInterval(() => { const s = left(); const el = $('#timer'); if (el) { el.textContent = fmtTime(s); el.classList.toggle('low', s < 120); } if (s <= 0) { clearInterval(iv); toast('Time is up for Section I.'); endSec1(); } }, 500);
    cleanup.push(() => clearInterval(iv));
    const go = k => { r.i = k; save(); testMcq(t, r); };
    const endSec1 = () => { r.sec = 2; r.mcqUsed = Math.min(limit, (Date.now() - r.start1) / 1000); r.start2 = Date.now(); save(); viewTest(t.id); };
    H.tpick = el => { r.mcq[r.i] = +el.dataset.j; save(); $$('.opt').forEach((o, k) => o.classList.toggle('sel', k === +el.dataset.j)); $$('.qnav button')[r.i].classList.add('ans'); };
    H.tprev = () => go(r.i - 1);
    H.tnext = () => { if (r.i < t.mcq.length - 1) go(r.i + 1); else H.tend(); };
    H.tjump = el => go(+el.dataset.k);
    H.tflag = () => { r.flags[r.i] = !r.flags[r.i]; save(); testMcq(t, r); };
    H.tend = () => { const un = t.mcq.length - Object.keys(r.mcq).length; if (confirm(un ? `You have ${un} unanswered question${un === 1 ? '' : 's'}. End Section I anyway? You can’t come back.` : 'End Section I and move to the SAQs? You can’t come back.')) endSec1(); };
    const kd = e => { if (e.target.matches('input,textarea')) return; const j = 'abcd'.indexOf(e.key.toLowerCase()); if (j >= 0) H.tpick({ dataset: { j } }); if (e.key === 'ArrowRight') H.tnext(); if (e.key === 'ArrowLeft' && r.i > 0) H.tprev(); };
    document.addEventListener('keydown', kd); cleanup.push(() => document.removeEventListener('keydown', kd));
  }
  function testSaq(t, r) {
    teardown();
    const limit = t.saqTime * 60;
    const left = () => limit - (Date.now() - r.start2) / 1000;
    const k = r.si || 0; const s = t.saq[k];
    const rs = r.saq[k] = r.saq[k] || { ans: {} };
    paint(`<div class="test-layout" style="margin-top:16px"><div>${saqBody(s, Object.assign({}, rs, { revealed: false }), 'test')}
      <div class="row" style="margin-top:16px"><button class="btn" data-act="sprev" ${k === 0 ? 'disabled' : ''}>${ICON.arrowL} Previous SAQ</button><button class="btn primary" data-act="snext">${k === t.saq.length - 1 ? 'Submit test' : 'Next SAQ'} ${ICON.arrowR}</button></div></div>
      <aside class="card test-side"><div class="eyebrow">Section II · Time remaining</div><div class="timer" id="timer">${fmtTime(left())}</div><div class="muted" style="font-size:12.5px;margin-top:6px">Suggested: about ${Math.round(t.saqTime / t.saq.length)} minutes per SAQ.</div>
        <div class="qnav" style="grid-template-columns:repeat(3,1fr)">${t.saq.map((_, j) => `<button class="${j === k ? 'cur' : ''} ${r.saq[j] && Object.values(r.saq[j].ans || {}).some(x => x && x.trim()) ? 'ans' : ''}" data-act="sjump" data-k="${j}">${j + 1}</button>`).join('')}</div></aside></div>`);
    const iv = setInterval(() => { const sec = left(); const el = $('#timer'); if (el) { el.textContent = fmtTime(sec); el.classList.toggle('low', sec < 180); } if (sec <= 0) { clearInterval(iv); toast('Time is up.'); submit(); } }, 500);
    cleanup.push(() => clearInterval(iv));
    H.ans = el => { rs.ans[el.dataset.k] = el.value; const wc = el.nextElementSibling; if (wc) wc.textContent = (el.value.trim() ? el.value.trim().split(/\s+/).length : 0) + ' words'; save(); };
    const go = j => { r.si = j; save(); testSaq(t, r); };
    H.sprev = () => go(k - 1); H.sjump = el => go(+el.dataset.k);
    const submit = () => {
      let right = 0; t.mcq.forEach((q, j) => { const p = r.mcq[j]; if (p === q.a) right++; S.attempts.push({ q: q.id, c: p === q.a ? 1 : 0, p, t: 0, ts: Date.now(), src: 'test', l: q.l, d: q.d, sk: q.sk }); });
      r.mcqRight = right; r.saqUsed = Math.min(limit, (Date.now() - r.start2) / 1000); r.sec = 3; r.submitted = Date.now(); r.done = true; r.pct = Math.round(100 * right / t.mcq.length * 0.6); // provisional until SAQs scored
      addSeconds((r.mcqUsed || 0) + r.saqUsed); bump(); save(); location.hash = '#/tests/' + t.id + '/review';
    };
    H.snext = () => { if (k < t.saq.length - 1) go(k + 1); else if (confirm('Submit the whole test? You’ll score your SAQs on the next screen.')) submit(); };
  }
  function testScore(t, r) {
    const mcq = r.mcqRight / t.mcq.length;
    let pts = 0, max = t.saq.length * 3, scored = 0;
    t.saq.forEach((s, j) => { const sc = (r.saq[j] || {}).score || {}; Object.values(sc).forEach(v => { scored++; pts += v ? 1 : 0; }); });
    const saq = max ? pts / max : 0;
    return { mcq, saq, pts, max, scored, total: Math.round(100 * (0.6 * mcq + 0.4 * saq)) };
  }
  function apEstimate(p) { return p >= 75 ? 5 : p >= 62 ? 4 : p >= 48 ? 3 : p >= 35 ? 2 : 1; }
  function viewTestReview(id) {
    const t = TEST_BY[id]; const r = S.tests[id];
    if (!t || !r || !r.done) { location.hash = '#/tests'; return; }
    const sc = testScore(t, r); r.pct = sc.total; save();
    const byL = {}; t.mcq.forEach((q, j) => { const b = byL[q.l] = byL[q.l] || [0, 0]; b[1]++; if (r.mcq[j] === q.a) b[0]++; });
    const tab = r.tab || 'mcq';
    paint(`
      <div style="margin-top:16px"><a class="btn ghost sm" href="#/tests">${ICON.arrowL} All tests</a></div>
      <div class="card pad" style="margin-top:12px;display:grid;grid-template-columns:auto 1fr auto;gap:24px;align-items:center" id="trh">
        <div class="ap-score" title="Rough AP-scale estimate">${apEstimate(sc.total)}</div>
        <div><div class="eyebrow">${esc(t.title)} · results</div><div style="font-size:30px;font-weight:600;letter-spacing:-0.03em;margin-top:4px">${sc.total}%</div><p class="muted" style="font-size:14px">MCQ ${r.mcqRight}/${t.mcq.length} (${pct(r.mcqRight, t.mcq.length)}%) · SAQ ${sc.pts}/${sc.max}${sc.scored < sc.max ? ` <span style="color:var(--warn)">· ${sc.max - sc.scored} SAQ part${sc.max - sc.scored === 1 ? '' : 's'} not scored yet</span>` : ''} · ${fmtDur((r.mcqUsed || 0) + (r.saqUsed || 0))} total</p></div>
        <div class="faint" style="font-size:12px;max-width:180px;text-align:right">The box shows a rough AP 1–5 estimate based on this practice score.</div>
      </div>
      <div class="grid g2" style="margin-top:16px"><div class="card pad"><div class="card-head"><h3>By lesson</h3></div>${Object.entries(byL).sort((a, b) => LESSON[a[0]].n - LESSON[b[0]].n).map(([l, [g, n]]) => `<div class="hbar"><span>L${LESSON[l].n} ${esc(LESSON[l].short || LESSON[l].title)}</span><div class="bar ${g / n >= .8 ? 'good' : ''}"><i style="width:${pct(g, n)}%"></i></div><span class="pct">${g}/${n}</span></div>`).join('')}</div>
      <div class="card pad"><div class="card-head"><h3>What to do next</h3></div>${Object.entries(byL).filter(([, [g, n]]) => g / n < 0.7).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]).slice(0, 4).map(([l]) => `<div class="insight"><span class="ii">${ICON.book}</span><div><b>Review Lesson ${LESSON[l].n}: ${esc(LESSON[l].title)}</b><p>You missed several questions here. Re-read it, then drill its bank questions.</p><div class="row" style="margin-top:6px"><a class="btn sm" href="#/learn/${l}">Open lesson</a><a class="btn sm ghost" href="#/practice?lesson=${l}">Drill</a></div></div></div>`).join('') || '<p class="muted">Strong across every lesson. Try another test or the Challenge questions in the bank.</p>'}</div></div>
      <div class="seg" style="margin:22px 0 14px"><button class="${tab === 'mcq' ? 'on' : ''}" data-act="rtab" data-t="mcq">Section I review</button><button class="${tab === 'saq' ? 'on' : ''}" data-act="rtab" data-t="saq">Section II: score your SAQs</button></div>
      <div id="rv"></div>`);
    if (innerWidth < 860) $('#trh').style.gridTemplateColumns = '1fr';
    const rv = $('#rv');
    if (tab === 'mcq') {
      rv.innerHTML = `<div class="stack">${t.mcq.map((q, j) => { const p = r.mcq[j]; return `<details class="card pad"><summary style="cursor:pointer;display:flex;gap:10px;align-items:center;list-style:none"><span class="status-dot ${p === q.a ? 'c' : 'w'}"></span><b style="font-weight:550;flex:1;font-size:14.5px">${j + 1}. ${q.q.replace(/<[^>]+>/g, '')}</b>${diffChip(q.d)}${lessonChip(q.l)}</summary><div style="margin-top:14px">${stimHTML(q)}<div class="opts">${q.o.map((o, k) => `<div class="opt locked ${k === q.a ? 'right' : k === p ? 'wrong' : ''}"><span class="L">${L(k)}</span><span class="ot">${o}${q.w && q.w[k] ? `<span class="why">${q.w[k]}</span>` : ''}</span></div>`).join('')}</div>${p == null ? '<p class="muted" style="margin-top:10px">You left this blank.</p>' : ''}<div class="explain"><h4>Explanation</h4>${q.x || ''}</div></div></details>`; }).join('')}</div>`;
    } else {
      rv.innerHTML = `<div class="card pad row wrap" style="gap:12px"><div style="flex:1;min-width:220px"><b>Score your SAQs</b><p class="muted" style="font-size:13.5px;margin-top:2px">Let the on-device AI grader score all ${t.saq.length * 3} parts against the scoring guides, or score each part yourself.</p></div><button class="btn primary" data-act="aiall">${ICON.spark} Grade all with AI</button></div><div class="ai-status" id="aiStatus" hidden></div>` +
        t.saq.map((s, j) => { const rs = r.saq[j] = r.saq[j] || { ans: {} }; return `<div data-sj="${j}">${saqBody(s, Object.assign({}, rs, { revealed: true, locked: true }), 'review')}</div>`; }).join('');
      H.score = el => { const j = +el.closest('[data-sj]').dataset.sj; const rs = r.saq[j]; rs.score = rs.score || {}; rs.score[el.dataset.k] = +el.dataset.v; rs.scoreSrc = rs.scoreSrc || {}; rs.scoreSrc[el.dataset.k] = 'self'; save(); const y = scrollY; viewTestReview(id); scrollTo(0, y); };
      H.aiall = () => runAiGrade(t.saq.map((s, j) => ({ s, r: r.saq[j] = r.saq[j] || { ans: {} } })), () => { save(); if (location.hash === '#/tests/' + id + '/review') { const y = scrollY; viewTestReview(id); scrollTo(0, y); } });
    }
    H.rtab = el => { r.tab = el.dataset.t; save(); const y = scrollY; viewTestReview(id); scrollTo(0, y); };
  }

  /* ════════════════════════ ANALYTICS ════════════════════════ */
  function insights() {
    const out = [];
    const last = lastAttempts();
    const bank = S.attempts.filter(a => MCQ_BY[a.q]);
    if (!bank.length && !Object.keys(S.lessons).length) {
      out.push({ ic: ICON.book, t: 'Start at the beginning', d: 'Insights appear once you’ve done some lessons and practice questions. The course assumes no background, so begin with “Start Here.”', href: '#/learn/' + (LESSONS[0] && LESSONS[0].id), cta: 'Open Start Here' });
      return out;
    }
    const ls = LESSONS.map(l => ({ l, s: lessonStats(l.id), m: mastery(l.id) })).filter(x => x.s.ans >= 3);
    const weak = ls.filter(x => x.s.acc < 0.7).sort((a, b) => a.s.acc - b.s.acc);
    weak.slice(0, 2).forEach(x => out.push({ ic: ICON.target, t: `Weak spot: ${x.l.title}`, d: `You’re at ${Math.round(100 * x.s.acc)}% on ${x.s.ans} questions from Lesson ${x.l.n}. Re-read its key ideas, then drill just this lesson.`, href: '#/practice?lesson=' + x.l.id, cta: 'Drill lesson' }));
    const doneNoPractice = LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done && lessonStats(l.id).ans < 3);
    if (doneNoPractice.length) out.push({ ic: ICON.bank, t: `${plural(doneNoPractice.length, 'finished lesson')} with almost no practice`, d: `Reading isn’t the same as remembering. Try the bank questions for Lesson ${doneNoPractice.map(l => l.n).slice(0, 4).join(', ')}.`, href: '#/practice?lesson=' + doneNoPractice[0].id, cta: 'Practice' });
    const byD = {}; bank.forEach(a => { const d = byD[a.d] = byD[a.d] || [0, 0]; d[1]++; d[0] += a.c; });
    if (byD.e && byD.h && byD.e[1] >= 5 && byD.h[1] >= 5 && byD.e[0] / byD.e[1] - byD.h[0] / byD.h[1] > 0.3) out.push({ ic: ICON.trend, t: 'Big drop-off on hard questions', d: `${pct(byD.e[0], byD.e[1])}% on Easy vs ${pct(byD.h[0], byD.h[1])}% on Hard. Hard questions test why things happened, not just what. Focus on the “Connect the dots” callouts in each lesson.` });
    const bySk = {}; bank.forEach(a => { if (!a.sk) return; const d = bySk[a.sk] = bySk[a.sk] || [0, 0]; d[1]++; d[0] += a.c; });
    const wsk = Object.entries(bySk).filter(([, v]) => v[1] >= 5).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1])[0];
    if (wsk && wsk[1][0] / wsk[1][1] < 0.7) out.push({ ic: ICON.think, t: `Skill to build: ${SKILL[wsk[0]]}`, d: skillTip(wsk[0]) });
    const timed = bank.filter(a => a.t > 0 && a.src === 'bank');
    if (timed.length >= 10) { const avg = timed.reduce((s, a) => s + a.t, 0) / timed.length / 1000; if (avg > 75) out.push({ ic: ICON.clock, t: `Pacing: ${Math.round(avg)}s per question`, d: 'The AP exam gives about 60 seconds per MCQ. Read the question stem before the source, so you know what to look for.' }); }
    const wrong = Object.keys(last).filter(id => MCQ_BY[id] && !last[id].c).length;
    if (wrong >= 3) out.push({ ic: ICON.alert, t: `${wrong} questions in your mistake queue`, d: 'Redoing missed questions is one of the fastest ways to raise your score.', href: '#/practice?status=w', cta: 'Redo mistakes' });
    const due = dueCards().length;
    if (due) out.push({ ic: ICON.cards, t: `${plural(due, 'flashcard')} due`, d: 'Spaced review only works if you show up when cards are due.', href: '#/vocab', cta: 'Review now' });
    const strong = ls.filter(x => x.s.acc >= 0.85 && x.s.ans >= 6);
    if (strong.length) out.push({ ic: ICON.spark, t: `Strong: ${strong.slice(0, 3).map(x => 'L' + x.l.n).join(', ')}`, d: 'You’re consistently right here. Move to Challenge questions or another lesson.' });
    if (!Object.values(S.tests).some(t => t.done) && LESSONS.filter(l => S.lessons[l.id] && S.lessons[l.id].done).length >= Math.ceil(LESSONS.length * 0.6)) out.push({ ic: ICON.exam, t: 'Ready for a practice test', d: 'You’ve finished most of the unit. A timed test shows what sticks under pressure.', href: '#/tests', cta: 'Take a test' });
    return out;
  }
  function skillTip(k) {
    return {
      cause: 'Causation questions ask what led to something, or what it led to. For each event, write one cause and one effect in a single sentence.',
      compare: 'Comparison questions want similarities and differences. Practice with the side-by-side tables in each lesson, such as Federalists vs Democratic-Republicans.',
      ccot: 'Continuity-and-change questions ask what stayed the same and what changed. Track one theme, like who could vote, across several lessons.',
      context: 'Contextualization means knowing what was happening around a source. Before answering, ask what year it is and what had just happened.',
      source: 'Sourcing questions ask about the author’s point of view, purpose or audience. Ask who wrote it, when, and why.',
      claim: 'Claim questions ask which evidence supports or challenges an argument. Find the one option that is specifically on topic and from the right time period.'
    }[k];
  }
  function insightsHTML(n) {
    const list = insights().slice(0, n || 99);
    if (!list.length) return '<p class="muted">Keep going. More insights unlock as you practice.</p>';
    return list.map(x => `<div class="insight"><span class="ii">${x.ic}</span><div><b>${x.t}</b><p>${x.d}</p>${x.href ? `<a class="btn sm" style="margin-top:8px" href="${x.href}">${x.cta}</a>` : ''}</div></div>`).join('');
  }
  function viewAnalytics() {
    const bank = S.attempts;
    const last = lastAttempts();
    const lastBank = Object.values(last).filter(a => MCQ_BY[a.q]);
    const totalSec = Object.values(S.seconds).reduce((a, b) => a + b, 0);
    const acc = bank.length ? pct(bank.filter(a => a.c).length, bank.length) : null;
    // daily accuracy, last 21 days
    const days = []; for (let k = 20; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); days.push(dayKey(d)); }
    const daily = days.map(k => { const a = bank.filter(x => dayKey(new Date(x.ts)) === k); return { k, n: a.length, acc: a.length ? a.filter(x => x.c).length / a.length : null }; });
    const byD = Object.keys(DIFF).map(d => { const a = bank.filter(x => x.d === d); return { d, n: a.length, acc: a.length ? a.filter(x => x.c).length / a.length : 0 }; });
    const bySk = Object.keys(SKILL).map(s => { const a = bank.filter(x => x.sk === s); return { s, n: a.length, acc: a.length ? a.filter(x => x.c).length / a.length : 0 }; });
    const saqParts = { a: [0, 0], b: [0, 0], c: [0, 0] };
    Object.values(S.saq).forEach(r => { if (r.score) Object.entries(r.score).forEach(([k, v]) => { saqParts[k][1]++; saqParts[k][0] += v; }); });
    const tests = TESTS.map(t => ({ t, r: S.tests[t.id] })).filter(x => x.r && x.r.done);
    const cal = []; { const d = new Date(); d.setDate(d.getDate() - (7 * 17 - 1) - d.getDay()); for (let k = 0; k < 7 * 18; k++) { const kk = dayKey(d); const n = S.activity[kk] || 0; cal.push(`<i class="${n > 40 ? 'l4' : n > 20 ? 'l3' : n > 8 ? 'l2' : n > 0 ? 'l1' : ''}" title="${kk}: ${n} actions"></i>`); d.setDate(d.getDate() + 1); } }
    const cardsKnown = Object.values(S.cards).filter(c => c.box >= 3).length;

    paint(`
      <div class="page-head"><div><div class="eyebrow">Insights</div><h1>Analytics</h1><p>Where you’re strong, where you’re slipping, and what to do about it. Everything is calculated from your activity in this browser.</p></div></div>
      <div class="grid g4">
        <div class="card stat"><div class="k">Overall accuracy</div><div class="v">${acc == null ? '—' : acc + '%'}</div><div class="s">${bank.length} answers logged</div></div>
        <div class="card stat"><div class="k">Bank coverage</div><div class="v">${pct(lastBank.length, MCQ.length)}%</div><div class="s">${lastBank.length}/${MCQ.length} unique questions</div></div>
        <div class="card stat"><div class="k">Cards mastered</div><div class="v">${cardsKnown}</div><div class="s">box 3 or higher</div></div>
        <div class="card stat"><div class="k">Time studied</div><div class="v">${fmtDur(totalSec)}</div><div class="s">${streak()}-day streak</div></div>
      </div>
      <div class="grid g2" style="margin-top:16px;grid-template-columns:1.4fr 1fr">
        <div class="card pad chart-box"><div class="card-head"><h3>Accuracy &amp; volume, last 21 days</h3><span class="faint" style="font-size:12px">bars = answers · line = accuracy</span></div>${trendChart(daily)}</div>
        <div class="card pad"><div class="card-head"><h3>Insights</h3></div>${insightsHTML(5)}</div>
      </div>
      <div class="card pad" style="margin-top:16px"><div class="card-head"><h3>Mastery by lesson</h3><span class="faint" style="font-size:12px">weighted by difficulty · click to drill</span></div><div class="heat">${LESSONS.filter(l => MCQ.some(q => q.l === l.id)).map(l => {
      const m = mastery(l.id); const s = lessonStats(l.id);
      const bg = m == null ? 'var(--surface-2)' : `color-mix(in srgb, ${m >= 80 ? 'var(--good)' : m >= 60 ? 'var(--warn)' : 'var(--bad)'} ${18 + Math.round(m / 5)}%, var(--surface))`;
      return `<div class="heat-c" style="background:${bg}" data-act="hdrill" data-l="${l.id}"><span>L${l.n} · ${esc(l.short || l.title)}</span><div class="row" style="justify-content:space-between"><b>${m == null ? '—' : m}</b><span class="faint mono" style="font-size:11px">${s.ans}/${s.total}</span></div></div>`;
    }).join('')}</div></div>
      <div class="grid g3" style="margin-top:16px">
        <div class="card pad"><div class="card-head"><h3>By difficulty</h3></div>${byD.map(x => `<div class="hbar"><span class="diff-${DIFF_CLS[x.d]}" style="font-weight:550">${DIFF[x.d]}</span><div class="bar"><i style="width:${Math.round(x.acc * 100)}%;background:var(--d-${DIFF_CLS[x.d]})"></i></div><span class="pct">${x.n ? Math.round(x.acc * 100) + '%' : '—'}</span></div>`).join('')}</div>
        <div class="card pad"><div class="card-head"><h3>By AP skill</h3></div>${bySk.map(x => `<div class="hbar" style="grid-template-columns:130px 1fr 42px"><span>${SKILL[x.s]}</span><div class="bar"><i style="width:${Math.round(x.acc * 100)}%"></i></div><span class="pct">${x.n ? Math.round(x.acc * 100) + '%' : '—'}</span></div>`).join('')}</div>
        <div class="card pad"><div class="card-head"><h3>SAQ scores</h3></div>${['a', 'b', 'c'].map(k => `<div class="hbar" style="grid-template-columns:70px 1fr 42px"><span>Part ${k.toUpperCase()}</span><div class="bar good"><i style="width:${pct(saqParts[k][0], saqParts[k][1])}%"></i></div><span class="pct">${saqParts[k][1] ? pct(saqParts[k][0], saqParts[k][1]) + '%' : '—'}</span></div>`).join('')}<p class="faint" style="font-size:12px;margin-top:10px;line-height:1.5">Part C is usually the hardest because it often asks for evidence that challenges a claim, or a less obvious connection.</p></div>
      </div>
      <div class="grid g2" style="margin-top:16px">
        <div class="card pad"><div class="card-head"><h3>Activity</h3><span class="faint" style="font-size:12px">last 18 weeks</span></div><div style="overflow-x:auto"><div class="calendar">${cal.join('')}</div></div></div>
        <div class="card pad"><div class="card-head"><h3>Practice tests</h3></div>${tests.length ? tests.map(({ t, r }) => `<div class="hbar" style="grid-template-columns:1fr 120px 48px"><a href="#/tests/${t.id}/review">${esc(t.title)}</a><div class="bar"><i style="width:${r.pct}%"></i></div><span class="pct">${r.pct}%</span></div>`).join('') : '<p class="muted">No tests taken yet. <a href="#/tests" style="color:var(--accent)">Take one →</a></p>'}</div>
      </div>`);
    H.hdrill = el => { F = { lessons: [el.dataset.l], diffs: [], skills: [], status: 'all', q: '' }; location.hash = '#/practice'; };
  }
  function trendChart(daily) {
    const W = 640, Hh = 200, P = { l: 34, r: 10, t: 10, b: 24 };
    const iw = W - P.l - P.r, ih = Hh - P.t - P.b;
    const maxN = Math.max(5, ...daily.map(d => d.n));
    const bw = iw / daily.length;
    const bars = daily.map((d, k) => { const h = ih * d.n / maxN; return `<rect x="${P.l + k * bw + bw * 0.2}" y="${P.t + ih - h}" width="${bw * 0.6}" height="${h}" rx="2" fill="var(--accent-soft)" stroke="var(--accent-line)"><title>${d.k}: ${d.n} answers</title></rect>`; }).join('');
    const pts = daily.map((d, k) => d.acc == null ? null : [P.l + k * bw + bw / 2, P.t + ih * (1 - d.acc)]);
    let path = ''; pts.forEach(p => { if (p) path += (path ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); });
    const dots = pts.map((p, k) => p ? `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"><title>${daily[k].k}: ${Math.round(daily[k].acc * 100)}%</title></circle>` : '').join('');
    const grid = [0, .25, .5, .75, 1].map(g => `<line class="ax" x1="${P.l}" x2="${W - P.r}" y1="${P.t + ih * (1 - g)}" y2="${P.t + ih * (1 - g)}"/><text class="ax-t" x="${P.l - 6}" y="${P.t + ih * (1 - g) + 4}" text-anchor="end">${g * 100}</text>`).join('');
    const xl = daily.map((d, k) => k % 5 === 0 || k === daily.length - 1 ? `<text class="ax-t" x="${P.l + k * bw + bw / 2}" y="${Hh - 6}" text-anchor="middle">${d.k.slice(5).replace('-', '/')}</text>` : '').join('');
    return `<svg viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Daily accuracy chart">${grid}${bars}<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linejoin="round"/>${dots}${xl}</svg>`;
  }

  /* ════════════════════════ SETTINGS / DATA ════════════════════════ */
  function viewSettings() {
    const size = new Blob([JSON.stringify(S)]).size;
    paint(`
      <div class="page-head"><div><div class="eyebrow">Your data</div><h1>Data &amp; Settings</h1><p>Your progress saves automatically in this browser. To move it to another device or back it up, export a file and import it there.</p></div></div>
      <div class="grid g2">
        <div class="card pad"><h3 style="font-size:15px;margin-bottom:4px">Save &amp; load</h3><p class="muted" style="font-size:13.5px;margin-bottom:16px">One .json file with all lessons, answers, SAQs, flashcards and tests. About ${(size / 1024).toFixed(1)} KB.</p>
          <div class="row wrap"><button class="btn primary" data-act="export">Export progress</button><label class="btn">Import progress<input type="file" accept=".json,application/json" data-ch="import" hidden></label></div>
          <p class="faint" style="font-size:12px;margin-top:12px">Importing replaces what’s in this browser. Export first if you want a backup.</p></div>
        <div class="card pad"><h3 style="font-size:15px;margin-bottom:14px">Preferences</h3>
          <label class="label">Your first name (optional)</label><input class="input" data-in="name" value="${esc(S.settings.name)}" placeholder="For the greeting on Home">
          <label class="label" style="margin-top:14px">Unit test date</label><input type="date" class="input" data-ch="tdate" value="${esc(S.settings.testDate)}">
          <label class="label" style="margin-top:14px">Theme</label><div class="seg">${[['', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([k, n]) => `<button class="${S.settings.theme === k ? 'on' : ''}" data-act="theme" data-t="${k}">${n}</button>`).join('')}</div></div>
      </div>
      ${aiSettingsCard()}
      <div class="card pad" style="margin-top:16px"><h3 style="font-size:15px;margin-bottom:4px">Reset</h3><p class="muted" style="font-size:13.5px;margin-bottom:14px">Clear one part of your data, or everything.</p>
        <div class="row wrap"><button class="btn danger" data-act="rst" data-k="attempts">Clear MCQ history</button><button class="btn danger" data-act="rst" data-k="cards">Reset flashcards</button><button class="btn danger" data-act="rst" data-k="tests">Clear test attempts</button><button class="btn danger" data-act="rst" data-k="all">Reset everything</button></div></div>
      <div class="card pad" style="margin-top:16px"><h3 style="font-size:15px;margin-bottom:6px">About OnePush</h3><p class="muted" style="font-size:13.5px;line-height:1.6">Built for North Creek APUSH, Unit 1: American Democracy. Lessons follow the class study guide and the AP U.S. History Course and Exam Description topics it cites. Historical images are public-domain or openly licensed works from Wikimedia Commons; election maps are by Wikimedia contributors (CC BY-SA). Practice questions are original and written in AP style. They are not official College Board items.</p></div>`);
    H.export = () => {
      const blob = new Blob([JSON.stringify({ app: 'onepush', exported: new Date().toISOString(), data: S }, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `onepush-progress-${today()}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      toast('Progress exported.');
    };
    H.import = el => {
      const f = el.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const j = JSON.parse(rd.result); const d = j.data || j;
          if (d.v !== 1 || !Array.isArray(d.attempts)) throw new Error('bad');
          if (!confirm('Replace your current progress with this file?')) return;
          const st = Object.assign(blank().settings, d.settings || {}); st.ai = Object.assign(blank().settings.ai, (d.settings || {}).ai || {}); S = Object.assign(blank(), d, { settings: st }); save();
          if (S.settings.theme) document.documentElement.dataset.theme = S.settings.theme;
          toast('Progress imported.'); route();
        } catch (e) { toast('That file isn’t a valid OnePush export.'); }
      };
      rd.readAsText(f);
    };
    bindAiSettings();
    H.name = el => { S.settings.name = el.value.trim(); save(); };
    H.tdate = el => { S.settings.testDate = el.value; save(); toast('Test date saved.'); };
    H.theme = el => { S.settings.theme = el.dataset.t; save(); if (el.dataset.t) document.documentElement.dataset.theme = el.dataset.t; else delete document.documentElement.dataset.theme; viewSettings(); };
    H.rst = el => {
      const k = el.dataset.k;
      if (!confirm(k === 'all' ? 'Erase ALL progress? This can’t be undone (unless you exported).' : 'Clear this data?')) return;
      if (k === 'all') S = blank(); else if (k === 'attempts') { S.attempts = []; } else S[k] = {};
      save(); toast('Done.'); route();
    };
  }

  function aiSettingsCard() {
    const a = S.settings.ai, G = window.Grader;
    if (!G) return '';
    const m = G.MODELS.find(x => x.id === a.model) || G.MODELS[0];
    const loaded = G.isLoaded(a.model);
    return `<div class="card pad" style="margin-top:16px"><div class="row wrap" style="justify-content:space-between;margin-bottom:4px"><h3 style="font-size:15px">AI SAQ grader</h3><span class="chip ${a.engine === 'webllm' ? (loaded ? 'good' : a.downloaded ? 'accent' : '') : ''}">${a.engine === 'webllm' ? (loaded ? 'Loaded and ready' : a.downloaded ? 'Downloaded' : 'Not downloaded yet') : 'Using Ollama'}</span></div>
      <p class="muted" style="font-size:13.5px;margin-bottom:14px;max-width:720px">Scores each SAQ part (0 or 1) against its scoring guide using AP rubric rules, and explains what to fix. It runs entirely on your computer, so your writing is never sent to a server.</p>
      <label class="label">Where the model runs</label>
      <div class="seg" style="margin-bottom:14px"><button class="${a.engine === 'webllm' ? 'on' : ''}" data-act="aiEngine" data-e="webllm">In this browser</button><button class="${a.engine === 'ollama' ? 'on' : ''}" data-act="aiEngine" data-e="ollama">Ollama on this computer</button></div>
      ${a.engine === 'webllm' ? `
        ${G.hasWebGPU() ? '' : `<div class="callout mistake" style="margin-bottom:12px"><span class="ci">${ICON.alert}</span><div><h4>WebGPU isn’t available here</h4><div class="cb">The in-browser model needs WebGPU. Use a recent desktop Chrome or Edge, or switch to Ollama.</div></div></div>`}
        <label class="label">Model</label>
        <select class="select" data-ch="aiModel" style="max-width:420px">${G.MODELS.map(x => `<option value="${x.id}" ${x.id === a.model ? 'selected' : ''}>${x.name} (${x.size})</option>`).join('')}</select>
        <p class="faint" style="font-size:12px;margin-top:6px">${esc(m.note)}. The first download is cached by your browser, so later visits load it in seconds.</p>
        <div class="row wrap" style="margin-top:12px"><button class="btn" data-act="aiLoad" ${G.hasWebGPU() ? '' : 'disabled'}>${loaded ? 'Model ready ✓' : a.downloaded ? 'Load model now' : 'Download &amp; load model'}</button></div>`
        : `
        <div class="grid g2" style="gap:12px"><div><label class="label">Ollama address</label><input class="input" data-in="aiUrl" value="${esc(a.ollamaUrl)}"></div><div><label class="label">Model name</label><input class="input" data-in="aiOModel" value="${esc(a.ollamaModel)}" placeholder="llama3.1:8b"></div></div>
        <div class="row wrap" style="margin-top:12px"><button class="btn" data-act="aiTest">Test connection</button></div>
        <p class="faint" style="font-size:12.5px;margin-top:10px;line-height:1.6">Install Ollama from ollama.com, then run <code>ollama pull ${esc(a.ollamaModel || 'llama3.1:8b')}</code>. ${/^(http:\/\/(localhost|127\.0\.0\.1)|file:)/.test(location.origin) || location.protocol === 'file:' ? 'Opening OnePush from this computer works with Ollama’s default settings.' : `Because OnePush is open from <code>${esc(location.origin)}</code>, start Ollama with <code>OLLAMA_ORIGINS=${esc(location.origin)} ollama serve</code> so the browser is allowed to reach it.`}</p>`}
      <div class="ai-status" id="aiStatus" hidden></div>
      <p class="faint" style="font-size:12px;margin-top:12px">AI scores are a study aid, not an official score. Real AP readers may score differently, so check the reasoning against the scoring guide and change any score you disagree with.</p></div>`;
  }
  function bindAiSettings() {
    const a = S.settings.ai;
    H.aiEngine = el => { a.engine = el.dataset.e; save(); viewSettings(); };
    H.aiModel = el => { a.model = el.value; a.downloaded = false; save(); viewSettings(); };
    H.aiUrl = el => { a.ollamaUrl = el.value.trim(); save(); };
    H.aiOModel = el => { a.ollamaModel = el.value.trim(); save(); };
    H.aiLoad = async () => {
      if (Grader.isLoaded(a.model)) return toast('The model is already loaded.');
      try { await Grader.preload(a, aiStatus); a.downloaded = true; save(); toast('AI grader ready.'); if (location.hash === '#/settings') viewSettings(); }
      catch (e) { const el = $('#aiStatus'); if (el) { el.hidden = false; el.innerHTML = `<b style="color:var(--bad)">Couldn’t load the model:</b> ${esc(e.message)}`; } }
    };
    H.aiTest = async () => {
      aiStatus('Contacting Ollama…', null);
      try {
        const r = await Grader.testOllama(a); const el = $('#aiStatus');
        el.innerHTML = r.ok ? `<b style="color:var(--good)">Connected.</b> Found model <code>${esc(a.ollamaModel)}</code>.` : `<b style="color:var(--warn)">Connected, but <code>${esc(a.ollamaModel)}</code> isn’t installed.</b> Run <code>ollama pull ${esc(a.ollamaModel)}</code>. Installed: ${esc(r.names.join(', ') || 'none')}`;
      } catch (e) { $('#aiStatus').innerHTML = `<b style="color:var(--bad)">${esc(e.message)}</b>`; }
    };
  }

  /* ════════════════════════ COMMAND PALETTE ════════════════════════ */
  const IDX = [];
  LESSONS.forEach(l => {
    IDX.push({ k: 'Lesson', t: `L${l.n} · ${l.title}`, d: (l.sub || '').replace(/\{\{([^}|]+)(\|[^}]+)?\}\}/g, '$1'), href: '#/learn/' + l.id });
    l.sections.forEach((s, i) => IDX.push({ k: 'Section', t: s.title, d: `Lesson ${l.n}: ${l.title}`, href: `#/learn/${l.id}/${i}` }));
  });
  VOCAB.forEach(v => IDX.push({ k: 'Term', t: v.term, d: v.def, href: '#/vocab/list', term: v }));
  DATES.forEach(d => IDX.push({ k: 'Date', t: d.y + ' · ' + d.e, d: d.note || '', href: '#/vocab/dates' }));
  SAQ.forEach(s => IDX.push({ k: 'SAQ', t: s.title, d: s.kind || '', href: '#/saq/' + s.id }));
  MCQ.forEach(q => IDX.push({ k: 'Question', t: q.q.replace(/<[^>]+>/g, ''), d: (LESSON[q.l] ? 'Lesson ' + LESSON[q.l].n : '') + ' · ' + DIFF[q.d], qid: q.id }));
  const pal = $('#palette'), pin = $('#paletteInput'), pres = $('#paletteResults');
  let pSel = 0, pList = [];
  function openPalette() { pal.hidden = false; pin.value = ''; doSearch(''); setTimeout(() => pin.focus(), 10); }
  function closePalette() { pal.hidden = true; }
  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) pList = IDX.filter(x => x.k === 'Lesson').slice(0, 12);
    else {
      const words = q.split(/\s+/);
      pList = IDX.map(x => { const tt = x.t.toLowerCase(), dd = (x.d || '').toLowerCase(); if (!words.every(w => tt.includes(w) || dd.includes(w))) return null; let s = tt.startsWith(q) ? 0 : tt.includes(q) ? 1 : 2; s += { Lesson: 0, Term: 0.1, Date: 0.2, Section: 0.3, SAQ: 0.4, Question: 0.6 }[x.k]; return [s, x]; }).filter(Boolean).sort((a, b) => a[0] - b[0]).slice(0, 30).map(x => x[1]);
    }
    pSel = 0; drawPal();
  }
  function drawPal() {
    pres.innerHTML = pList.length ? pList.map((x, i) => `<div class="pr ${i === pSel ? 'on' : ''}" data-i="${i}"><span class="k">${x.k}</span><div style="min-width:0"><div class="t">${esc(x.t)}</div>${x.d ? `<div class="d">${esc(x.d)}</div>` : ''}</div></div>`).join('') : '<div class="pr-empty">Nothing found. Try a name, a law or a year.</div>';
    const on = pres.querySelector('.pr.on'); if (on) on.scrollIntoView({ block: 'nearest' });
  }
  function choose(x) {
    closePalette(); if (!x) return;
    if (x.qid) return startSession({ ids: [x.qid], title: 'Search result' });
    location.hash = x.href;
  }
  pin.addEventListener('input', () => doSearch(pin.value));
  pin.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { pSel = Math.min(pList.length - 1, pSel + 1); drawPal(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { pSel = Math.max(0, pSel - 1); drawPal(); e.preventDefault(); }
    if (e.key === 'Enter') choose(pList[pSel]);
    if (e.key === 'Escape') closePalette();
  });
  pres.addEventListener('click', e => { const r = e.target.closest('.pr'); if (r) choose(pList[+r.dataset.i]); });
  pal.addEventListener('click', e => { if (e.target === pal) closePalette(); });
  $('#searchBtn').onclick = openPalette;
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); }
    else if (e.key === '/' && pal.hidden && !e.target.matches('input,textarea,select')) { e.preventDefault(); openPalette(); }
    else if (e.key === 'Escape' && !pal.hidden) closePalette();
  });
  if (!/Mac|iPhone|iPad/.test(navigator.platform)) { const k = $('.search-trigger kbd'); if (k) k.textContent = 'Ctrl K'; }

  /* ───────────────────────── Boot ───────────────────────── */
  route();
})();
