/* Built-in diagrams for lessons. Each returns an HTML/SVG string; theme colors come from CSS variables. */
window.DIAGRAMS = (() => {
  const PARTY_SYSTEMS = [
    { n: 1, y: '1792–1824', name: 'First Party System', p: ['Federalists', 'Democratic-Republicans'], d: 'Hamilton’s Federalists (strong national government, a national bank, merchants and the Northeast) against Jefferson’s Democratic-Republicans (states’ rights, strict reading of the Constitution, farmers and the South and West). The Federalists collapse after opposing the War of 1812, which leaves one party during the “Era of Good Feelings.”' },
    { n: 2, y: '1828–1854', name: 'Second Party System', p: ['Democrats', 'Whigs'], d: 'Jackson’s Democrats (the “common man,” limited government, against the national bank, for Indian Removal) against Clay’s Whigs (the American System: national bank, tariffs and roads and canals). Mass democracy arrives: conventions, campaigning, and turnout above 70%. Slavery splits the Whigs apart after the Kansas-Nebraska Act.' },
    { n: 3, y: '1854–1896', name: 'Third Party System', p: ['Republicans', 'Democrats'], d: 'The new Republican Party, which opposes slavery’s expansion, wins with Lincoln in 1860. This is the era of the Civil War and Reconstruction. Republicans dominate the North; after 1877 Democrats rebuild a “Solid South.” Gilded Age elections are extremely close, and the parties run on patronage.' },
    { n: 4, y: '1896–1932', name: 'Fourth Party System', p: ['Republicans (dominant)', 'Democrats'], d: 'McKinley’s 1896 win over the Populist-backed William Jennings Bryan begins Republican dominance, backed by business, industrial workers and the North. The Progressive Era happens here: Theodore Roosevelt, Taft and Wilson. It ends when the Great Depression destroys faith in Hoover.' },
    { n: 5, y: '1932–1968', name: 'Fifth Party System', p: ['Democrats (dominant)', 'Republicans'], d: 'FDR’s New Deal coalition of labor unions, urban immigrants, Black voters (after 1936), farmers and the white “Solid South” makes Democrats the majority party. Both parties accept a large federal role, which historians call the “liberal consensus.” Civil rights splits the coalition in the 1960s.' },
    { n: 6, y: '1968–today', name: 'Sixth Party System', p: ['Republicans', 'Democrats'], d: 'Realignment: after the Civil Rights Act and Voting Rights Act, white Southern conservatives move to the Republican Party (Goldwater 1964, Nixon’s Southern Strategy, Reagan 1980). Republicans become the party of smaller government and social conservatism, and Democrats the party of federal activism and civil rights.' }
  ];

  const D = {
    parties(b) {
      return `<div class="ps">${PARTY_SYSTEMS.map(s => `<div class="ps-row"><div class="ps-y">${s.y}</div><div class="ps-c ${b.cur === s.n ? 'cur open' : ''}" data-act="psopen"><div class="row" style="justify-content:space-between"><b>${s.n}. ${s.name}</b>${b.cur === s.n ? '<span class="chip accent">You are here</span>' : '<span class="faint" style="font-size:12px">tap for more</span>'}</div><div class="pp">${s.p.map(x => `<span class="chip">${x}</span>`).join('')}</div><div class="more">${s.d}</div></div></div>`).join('')}</div>`;
    },

    atlantic() {
      return `<svg viewBox="0 0 720 360" role="img" aria-label="Atlantic trade diagram">
        <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs>
        <rect class="dg-box" x="40" y="40" width="170" height="64" rx="12"/><text class="dg-text" x="125" y="68" text-anchor="middle" font-weight="600" font-size="15">13 Colonies</text><text class="dg-muted" x="125" y="88" text-anchor="middle" font-size="12">raw materials, food, rum</text>
        <rect class="dg-accent" x="510" y="40" width="170" height="64" rx="12"/><text class="dg-text" x="595" y="68" text-anchor="middle" font-weight="600" font-size="15">Great Britain</text><text class="dg-muted" x="595" y="88" text-anchor="middle" font-size="12">the “mother country”</text>
        <rect class="dg-box" x="510" y="250" width="170" height="64" rx="12"/><text class="dg-text" x="595" y="278" text-anchor="middle" font-weight="600" font-size="15">West Africa</text><text class="dg-muted" x="595" y="298" text-anchor="middle" font-size="12">enslaved people taken</text>
        <rect class="dg-box" x="40" y="250" width="170" height="64" rx="12"/><text class="dg-text" x="125" y="278" text-anchor="middle" font-weight="600" font-size="15">West Indies</text><text class="dg-muted" x="125" y="298" text-anchor="middle" font-size="12">sugar plantations</text>
        <path class="dg-a" d="M215 62 L505 62" stroke-width="2" marker-end="url(#ah)"/><text class="dg-text" x="360" y="52" text-anchor="middle" font-size="12.5">tobacco, rice, indigo, lumber, furs</text>
        <path class="dg-a" d="M505 88 L215 88" stroke-width="2" marker-end="url(#ah)"/><text class="dg-muted" x="360" y="108" text-anchor="middle" font-size="12.5">manufactured goods: cloth, tools, tea</text>
        <path class="dg-a" d="M600 108 L600 245" stroke-width="2" marker-end="url(#ah)"/><text class="dg-text" x="610" y="182" font-size="12.5">guns, cloth, rum</text>
        <path class="dg-a" d="M505 282 L215 282" stroke-width="2.6" marker-end="url(#ah)"/><text class="dg-text" x="360" y="272" text-anchor="middle" font-size="12.5" font-weight="600">Middle Passage: enslaved Africans</text>
        <path class="dg-a" d="M125 245 L125 108" stroke-width="2" marker-end="url(#ah)"/><text class="dg-text" x="135" y="182" font-size="12.5">sugar, molasses</text>
        <text class="dg-muted" x="360" y="345" text-anchor="middle" font-size="12">Mercantilism: colonies exist to enrich the mother country. The Navigation Acts required many goods to go through Britain.</text>
      </svg>`;
    },

    branches() {
      return `<svg viewBox="0 0 720 420" role="img" aria-label="Checks and balances">
        <defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs>
        <rect class="dg-accent" x="250" y="20" width="220" height="86" rx="14"/><text class="dg-text" x="360" y="50" text-anchor="middle" font-weight="700" font-size="16">Legislative · Congress</text><text class="dg-muted" x="360" y="72" text-anchor="middle" font-size="12.5">Article I · makes laws</text><text class="dg-muted" x="360" y="90" text-anchor="middle" font-size="12.5">House (by population) + Senate (2 per state)</text>
        <rect class="dg-box" x="20" y="290" width="220" height="86" rx="14"/><text class="dg-text" x="130" y="320" text-anchor="middle" font-weight="700" font-size="16">Executive · President</text><text class="dg-muted" x="130" y="342" text-anchor="middle" font-size="12.5">Article II · enforces laws</text><text class="dg-muted" x="130" y="360" text-anchor="middle" font-size="12.5">commander in chief, makes treaties</text>
        <rect class="dg-box" x="480" y="290" width="220" height="86" rx="14"/><text class="dg-text" x="590" y="320" text-anchor="middle" font-weight="700" font-size="16">Judicial · Courts</text><text class="dg-muted" x="590" y="342" text-anchor="middle" font-size="12.5">Article III · interprets laws</text><text class="dg-muted" x="590" y="360" text-anchor="middle" font-size="12.5">judges serve for life</text>
        <path class="dg-a" d="M250 90 L150 285" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="120" y="170" font-size="12" text-anchor="middle">override veto (2/3)</text><text class="dg-text" x="120" y="186" font-size="12" text-anchor="middle">impeach &amp; remove</text><text class="dg-text" x="120" y="202" font-size="12" text-anchor="middle">approve appointments</text>
        <path class="dg-a" d="M195 285 L285 110" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="290" y="200" font-size="12" text-anchor="middle">veto bills</text>
        <path class="dg-a" d="M470 90 L570 285" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="610" y="170" font-size="12" text-anchor="middle">approve judges</text><text class="dg-text" x="610" y="186" font-size="12" text-anchor="middle">impeach judges</text><text class="dg-text" x="610" y="202" font-size="12" text-anchor="middle">set the number of courts</text>
        <path class="dg-a" d="M525 285 L435 110" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="440" y="200" font-size="12" text-anchor="middle">strike down laws*</text>
        <path class="dg-a" d="M245 345 L475 345" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="360" y="335" font-size="12" text-anchor="middle">nominates judges</text>
        <path class="dg-a" d="M475 365 L245 365" stroke-width="1.8" marker-end="url(#ah2)"/><text class="dg-text" x="360" y="385" font-size="12" text-anchor="middle">rule executive acts unconstitutional*</text>
        <text class="dg-muted" x="360" y="412" text-anchor="middle" font-size="11.5">*Judicial review is not written in the Constitution. The Court claimed it in Marbury v. Madison (1803).</text>
      </svg>`;
    },

    federalism() {
      const col = (x, y0, items, size) => items.map((t, i) => `<text class="dg-text" x="${x}" y="${y0 + i * 27}" text-anchor="middle" font-size="${size}">${t}</text>`).join('');
      return `<svg viewBox="0 0 720 370" role="img" aria-label="Federalism Venn diagram">
        <circle cx="270" cy="200" r="150" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5" opacity=".9"/>
        <circle cx="450" cy="200" r="150" fill="var(--surface-2)" stroke="var(--line-strong)" stroke-width="1.5" opacity=".85"/>
        <text class="dg-text" x="190" y="30" text-anchor="middle" font-weight="700" font-size="15">National (enumerated)</text>
        <text class="dg-text" x="530" y="30" text-anchor="middle" font-weight="700" font-size="15">State (reserved)</text>
        <text class="dg-text" x="360" y="104" text-anchor="middle" font-weight="700" font-size="12.5">Shared</text>
        <text class="dg-muted" x="360" y="120" text-anchor="middle" font-size="11">(concurrent)</text>
        ${col(190, 128, ['Declare war', 'Coin money', 'Regulate trade', 'Make treaties', 'Post office', 'Raise an army'], 13)}
        ${col(360, 150, ['Tax', 'Borrow money', 'Make laws', 'Build roads', 'Run courts'], 12.5)}
        ${col(530, 128, ['Run elections', 'Set up schools', 'Local gov’t', 'Marriage laws', 'Police powers', 'Ratify amend.'], 13)}
        <text class="dg-muted" x="360" y="366" text-anchor="middle" font-size="11.5">10th Amendment: powers not given to the national government are reserved to the states or the people.</text>
      </svg>`;
    },

    turnout() {
      const data = [['1824', 26.9], ['1828', 57.6], ['1832', 55.4], ['1836', 57.8], ['1840', 80.2], ['1844', 78.9], ['1848', 72.7], ['1852', 69.6], ['1856', 78.9], ['1860', 81.2]];
      const W = 680, H = 260, l = 40, b = 30, t = 14, iw = W - l - 10, ih = H - t - b, bw = iw / data.length;
      return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Voter turnout 1824 to 1860">
        ${[0, 25, 50, 75, 100].map(g => `<line x1="${l}" x2="${W - 10}" y1="${t + ih * (1 - g / 100)}" y2="${t + ih * (1 - g / 100)}" stroke="var(--line)"/><text class="dg-muted" x="${l - 6}" y="${t + ih * (1 - g / 100) + 4}" font-size="11" text-anchor="end">${g}%</text>`).join('')}
        ${data.map(([y, v], i) => { const h = ih * v / 100, x = l + i * bw + bw * 0.18; return `<rect x="${x}" y="${t + ih - h}" width="${bw * 0.64}" height="${h}" rx="4" fill="${y === '1840' || y === '1828' ? 'var(--accent)' : 'var(--accent-soft)'}" stroke="var(--accent)"/><text class="dg-text" x="${x + bw * 0.32}" y="${t + ih - h - 6}" font-size="11.5" text-anchor="middle" font-weight="600">${v}</text><text class="dg-muted" x="${x + bw * 0.32}" y="${H - 10}" font-size="11.5" text-anchor="middle">${y}</text>`; }).join('')}
      </svg>`;
    },

    jimcrow() {
      const col = (x, title, items) => `<rect x="${x}" y="110" width="170" height="190" rx="10" class="dg-box"/><text class="dg-text" x="${x + 85}" y="136" text-anchor="middle" font-weight="700" font-size="15">${title}</text>${items.map((t, i) => `<text class="dg-text" x="${x + 85}" y="${170 + i * 26}" text-anchor="middle" font-size="13">${t}</text>`).join('')}`;
      return `<svg viewBox="0 0 720 380" role="img" aria-label="Pillars of Jim Crow">
        <path d="M60 100 L360 24 L660 100 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>
        <text class="dg-text" x="360" y="80" text-anchor="middle" font-weight="700" font-size="15">JIM CROW: white supremacy, about 1877–1965</text>
        ${col(80, 'Economic', ['Sharecropping', 'Peonage (debt slavery)', 'Convict leasing', 'Crop-lien system'])}
        ${col(275, 'Legal', ['Segregation laws', 'Plessy v. Ferguson (1896)', '13th Amend. loophole', 'One-drop rule'])}
        ${col(470, 'Political', ['Poll taxes', 'Literacy tests', 'Grandfather clauses', 'White primaries'])}
        <rect x="60" y="310" width="600" height="44" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.2"/>
        <text class="dg-text" x="360" y="338" text-anchor="middle" font-weight="600" font-size="14">Foundation: violence and terror (the KKK, lynching, the threat of force)</text>
      </svg>`;
    },

    threeRs() {
      const c = (t, sub, items, k) => `<div class="card pad" style="border-top:3px solid ${k}"><div class="eyebrow">${sub}</div><h3 style="font-family:var(--serif);font-weight:500;font-size:22px;margin:4px 0 10px">${t}</h3><ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.7">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
      return `<div class="grid g3">${c('Relief', 'Help people now', ['<b>WPA</b>: hired 8.5 million workers', '<b>CCC</b>: young men in conservation jobs', '<b>FERA</b>: direct cash relief to states'], 'var(--good)')}${c('Recovery', 'Fix the economy', ['<b>NRA</b>: industry codes on wages and prices', '<b>AAA</b>: paid farmers to grow less', '<b>PWA</b>: large public works projects'], 'var(--warn)')}${c('Reform', 'Prevent another crash', ['<b>FDIC</b>: insures bank deposits', '<b>SEC</b>: polices the stock market', '<b>Social Security</b>: pensions and unemployment insurance'], 'var(--accent)')}</div>`;
    },

    spectrum() {
      return `<svg viewBox="0 0 720 210" role="img" aria-label="Political spectrum">
        <defs><linearGradient id="spg" x1="0" x2="1"><stop offset="0" stop-color="#3b6fe0"/><stop offset="1" stop-color="#d0473a"/></linearGradient></defs>
        <rect x="40" y="90" width="640" height="10" rx="5" fill="url(#spg)" opacity=".85"/>
        <text class="dg-text" x="40" y="80" font-weight="700" font-size="15">Liberal</text><text class="dg-text" x="680" y="80" text-anchor="end" font-weight="700" font-size="15">Conservative</text>
        <text class="dg-muted" x="40" y="128" font-size="12.5">More government action to solve problems</text><text class="dg-muted" x="40" y="146" font-size="12.5">Social safety net, regulation of business</text><text class="dg-muted" x="40" y="164" font-size="12.5">Open to changing traditional ways of life</text>
        <text class="dg-muted" x="680" y="128" text-anchor="end" font-size="12.5">Smaller government, lower taxes</text><text class="dg-muted" x="680" y="146" text-anchor="end" font-size="12.5">Free markets, less regulation</text><text class="dg-muted" x="680" y="164" text-anchor="end" font-size="12.5">Preserve traditional values and institutions</text>
        <text class="dg-muted" x="360" y="200" text-anchor="middle" font-size="11.5">These are general tendencies, and their meanings shift over time. In the 1800s, “small government” was the Democrats’ position.</text>
      </svg>`;
    },

    trust() {
      const data = [[1958, 73], [1964, 77], [1966, 65], [1968, 62], [1970, 54], [1972, 53], [1974, 36], [1976, 33], [1978, 29], [1980, 25], [1984, 44]];
      const W = 680, H = 260, l = 40, r = 14, t = 16, b = 30, iw = W - l - r, ih = H - t - b;
      const x = y => l + iw * (y - 1956) / (1986 - 1956), y = v => t + ih * (1 - v / 100);
      const path = data.map((d, i) => (i ? 'L' : 'M') + x(d[0]).toFixed(1) + ',' + y(d[1]).toFixed(1)).join('');
      const ev = [[1965, 'Vietnam escalates'], [1971, 'Pentagon Papers'], [1974, 'Nixon resigns']];
      return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Trust in government 1958-1984">
        ${[0, 25, 50, 75, 100].map(g => `<line x1="${l}" x2="${W - r}" y1="${y(g)}" y2="${y(g)}" stroke="var(--line)"/><text class="dg-muted" x="${l - 6}" y="${y(g) + 4}" font-size="11" text-anchor="end">${g}%</text>`).join('')}
        ${ev.map(([yr, t2]) => `<line x1="${x(yr)}" x2="${x(yr)}" y1="${t}" y2="${t + ih}" stroke="var(--bad)" stroke-dasharray="3 4" opacity=".6"/><text class="dg-text" x="${x(yr) + 4}" y="${t + 12}" font-size="11.5">${t2}</text>`).join('')}
        <path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2.6"/>
        ${data.map(d => `<circle cx="${x(d[0])}" cy="${y(d[1])}" r="4" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/><text class="dg-muted" x="${x(d[0])}" y="${H - 10}" font-size="11" text-anchor="middle">${String(d[0]).slice(2)}</text>`).join('')}
        <text class="dg-text" x="${x(1958) + 8}" y="${y(73) - 8}" font-size="12" font-weight="600">73%</text><text class="dg-text" x="${x(1980)}" y="${y(25) + 18}" font-size="12" font-weight="600" text-anchor="middle">25%</text>
      </svg>`;
    },

    reconPeriods() {
      const p = (x, w, c, t, y, items) => `<rect x="${x}" y="40" width="${w}" height="210" rx="12" fill="${c}" stroke="var(--line-strong)"/><text class="dg-text" x="${x + 14}" y="66" font-weight="700" font-size="15">${t}</text><text class="dg-muted" x="${x + 14}" y="86" font-size="12.5">${y}</text>${items.map((s, i) => `<text class="dg-text" x="${x + 14}" y="${116 + i * 24}" font-size="12.5">• ${s}</text>`).join('')}`;
      return `<svg viewBox="0 0 720 270" role="img" aria-label="Three periods of Reconstruction">
        ${p(10, 225, 'var(--surface-2)', 'Presidential', '1865–1867', ['Lenient: Johnson pardons', '   most Confederates', 'Black Codes passed', 'Ex-Confederates elected', 'Freedpeople unprotected'])}
        ${p(247, 225, 'var(--accent-soft)', 'Congressional / Radical', '1867–1873', ['Military districts in South', '14th &amp; 15th Amendments', 'Freedmen’s Bureau schools', 'Black men vote and hold', '   office: Revels, 1870'])}
        ${p(484, 225, 'var(--bad-soft)', 'Retreat / “Redemption”', '1872–1877', ['KKK &amp; paramilitary terror', 'Northern fatigue; Panic', '   of 1873', 'Democrats “redeem” states', 'Compromise of 1877 ends it'])}
        <text class="dg-muted" x="360" y="20" text-anchor="middle" font-size="12">Goals and methods changed as power shifted from the President, to Congress, to Southern Democrats</text>
      </svg>`;
    },

    compromises() {
      return `<div class="cmp-wrap"><table class="cmp"><thead><tr><th></th><th>Missouri Compromise (1820)</th><th>Compromise of 1850</th><th>Kansas-Nebraska Act (1854)</th></tr></thead><tbody>
        <tr><th>Problem</th><td>Missouri wants to join as a slave state, which would upset the 11–11 Senate balance</td><td>California wants to join as a free state after the Mexican Cession</td><td>Douglas wants to organize the Nebraska territory for a transcontinental railroad</td></tr>
        <tr><th>Deal</th><td>Missouri joins as a slave state and Maine as a free one. Slavery is banned north of 36°30′ in the Louisiana Purchase.</td><td>California joins free. Popular sovereignty applies in Utah and New Mexico. A harsher Fugitive Slave Act passes. The slave trade (not slavery) ends in D.C.</td><td>Repeals the 36°30′ line. Settlers in Kansas and Nebraska vote on slavery (popular sovereignty).</td></tr>
        <tr><th>Result</th><td>Peace for about 30 years. Jefferson calls the crisis “a fire bell in the night.”</td><td>Short-term peace, but the Fugitive Slave Act enrages the North (<i>Uncle Tom’s Cabin</i>, 1852)</td><td>“Bleeding Kansas.” The Whigs collapse and the Republican Party is founded. Compromise fails.</td></tr>
      </tbody></table></div>`;
    },

    _bind(H) {
      H.psopen = el => el.classList.toggle('open');
    }
  };
  return D;
})();
