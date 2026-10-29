# OnePush

A study site for **North Creek APUSH, Unit 1: American Democracy (1607–2012)**. It follows the class study guide lesson by lesson and is built so someone with no APUSH background can work through the whole unit in a couple of days.

## What's inside

- **25 lessons**, in course order. They cover the Thirteen Colonies through the Reagan Revolution, plus a Start Here lesson and an exam-skills workshop. Each lesson has short sections and plain-English explanations, along with:
  - quick checks, sorting, put-in-order and flip-card activities, and think-then-reveal prompts
  - built-in diagrams: Atlantic trade, checks and balances, federalism, voter turnout, the pillars of Jim Crow, the New Deal's three R's, trust in government, and the six party systems
  - historical images, maps and election results
  - "Connect the dots," "On the exam" and "Common mistake" callouts that link the lessons together
  - a five-question lesson check at the end
- **Question bank**: 308 AP-style multiple-choice questions rated Easy, Medium, Hard or Challenge and tagged by AP skill. Many are built around a source, and every answer choice has an explanation. You can filter by lesson, difficulty, skill or status (unanswered, incorrect, bookmarked, flagged), and choose Tutor mode or Exam mode. Keyboard shortcuts: A–D to pick, Enter to check, X plus a letter to cross out.
- **SAQ practice**: 54 short-answer prompts, every one built on a source. 26 come from the class warm-ups (the SPY and C-E-E tasks in the lesson slides), converted to three-part SAQ format. Each comes with a scoring guide, sample answers and self-scoring.
- **AI SAQ grader**: scores each SAQ part (0 or 1) against that part's scoring guide using AP rubric rules (task verb, specific and accurate evidence, the right time period), and explains what to fix. It runs entirely on your own computer, either in the browser with [WebLLM](https://github.com/mlc-ai/web-llm) and WebGPU (default: Qwen 2.5 7B, downloaded once and cached) or through [Ollama](https://ollama.com). Your writing is never sent to a server. AI scores pre-fill the score buttons, and you can override them. Like a real AP reader, it accepts evidence taken from the source or a well-explained general development of the period, not only named events and people. Date-range checks are done in code rather than by the model.
- **Vocab & Dates**: 237 study-guide terms and 22 Forever Dates. Includes spaced-repetition flashcards, a glossary, a match game and a date drill.
- **Four practice unit tests**: 24 stimulus-based MCQs plus 3 SAQs each, timed, with a question navigator and flags. None of these questions appear in the question bank. Results come with a breakdown by lesson and a rough AP-score estimate.
- **Analytics**: accuracy over time, mastery by lesson (weighted by difficulty), results by difficulty and by AP skill, SAQ part scores, an activity calendar, practice-test history, and written insights about what to study next.
- **Your data**: progress saves automatically to `localStorage`. Use **Export** and **Import** on the Data & Settings page to back it up or move it to another device.
- Also: search with ⌘K or Ctrl K, light and dark themes, a test-date countdown and a daily study plan.

## Run it

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

The practice questions are original and written in AP style; they are not official College Board items. Passages labeled "written for practice" are original interpretations, not quotations from real historians. Historical images come from Wikimedia Commons and are public domain; the electoral maps are by Wikimedia contributors under CC BY-SA. The warm-up SAQ images come from the class slides: the Nast cartoons and the 1863 draft-riot engraving are public domain, and the 1974 Herblock cartoon is © The Herb Block Foundation, included for classroom study.
