# Python for Internship

A complete first version of a 16-week practice course. It complements Python I and Python III practice books. It does not replace faculty review, professional work experience or a complete textbook.

## Weekly routine (15–20 hours suggested)

1. **Understand and predict — 3 hours:** read the three lesson explanations, trace examples on paper and open the official references. Write down unfamiliar terms. Predictions repeat the central concept within a week on purpose; they are not graded completion.
2. **Write and debug — 4 hours:** implement each starter, run it and inspect failed cases. Change inputs, add your own tests and explain what would break. Rebuild one function the following day without reading it.
3. **Build — 6–8 hours:** download the weekly project. Run the reference demo, then create your own version or add a meaningful feature. Keep references closed during the first attempt.
4. **Review and transfer — 2–3 hours:** write setup instructions, commit changes, explain the code to someone and try an unfamiliar requirement. Every fourth week has an independent checkpoint challenge.

The three short browser exercises introduce a week's ideas; the projects, official reading, independent variations and review supply the sustained practice. Advance at your own pace. Work submitted by copying a reference should be identified as assisted.

## Learning outcomes and project progression

| Weeks | Skills | Evidence students should create |
|---|---|---|
| 1–4 | Types, expressions, conditions, loops, collections, functions, boundary tests | Quiz, expense tool, contact book, budget planner |
| 5–8 | Exceptions, files, CSV/JSON, parameterized SQLite, classes, fixtures, tests, Git | Notes CLI, records importer, inventory tool, tested package with commits |
| 9–12 | Semantic HTML, responsive CSS, JS events, HTTP validation, FastAPI, fetch, deployment boundaries | Portfolio, local task API/dashboard, deployment instructions and device checks |
| 13–16 | Dataset inspection, leakage prevention, pipelines, baseline and held-out evaluation, retrieval attribution | Dataset report, small classifier, notes search, API + AI support-desk capstone |

## How to learn the tools

**Terminal and environments:** Open a terminal in the extracted project folder. `python --version` should report Python 3.11 or newer. Create a virtual environment with `python -m venv .venv`, activate it using the command for your OS in the project README, and install only the listed requirements. `python -m unittest` runs tests; `python -m uvicorn app:app --reload` starts the learning API. Leave that terminal running while opening its URL. Ctrl+C stops it. A virtual environment isolates project dependencies; it is not a security sandbox.

**Git:** Start with `git init`, inspect `git status`, use `git add` for intended files and `git commit -m "Describe the change"`. Make one small change at a time and inspect `git diff` before committing. Never add `.env`, tokens or private datasets. A local commit is not a GitHub upload. Students should configure their own remote and account before pushing. Each project kit includes a basic `.gitignore`.

**HTTP and frontend:** GET reads; POST creates in the task demo; PATCH marks a task done. The frontend must inspect `response.ok` and distinguish a server rejection from a successful empty response. `fetch` can also reject because of network failure. The kits serve their HTML from the Python API so the browser uses one origin. Opening the HTML as a local file does not start the API. Render arbitrary server text using `textContent`. These demos deliberately have no real accounts and no persistence.

**SQL:** A table describes columns, and each row is a record. Use SQL parameters for data instead of building query strings. Test an apostrophe in a name. The browser exercise uses an in-memory database that disappears after the run; a laptop project can add a database file once the student understands persistence and safe data handling.

**Machine learning:** Define the task and labels before collecting examples. Separate training, validation and final test data; fit preprocessing on training data. The TF-IDF + logistic regression pipeline is a real small text classifier. The supplied synthetic fixtures are tiny and only teach the workflow. Accuracy on them does not establish performance for real students or customers. Compare the majority baseline, inspect wrong predictions, collect permissioned representative data and evaluate again.

**Retrieval and LLMs:** The notes search ranks word overlap and returns stored evidence with IDs. It is lexical retrieval, not semantic embeddings, an LLM or generated reasoning. A later optional extension can use TF-IDF or embeddings and an LLM behind a server endpoint, with provider credentials kept server-side. Require source attribution, no-match behaviour, cost limits and evaluation examples. The capstone needs no API key and does not train a large language model.

## Progress and evaluation limits

- Local device drafts, explanations, hints and references persist in browser storage. Export/import supports backups; it is not cloud sync or secure assessment.
- A check runs the editor's code, not the reference. Editing invalidates the check. Successful checks after using help are marked assisted.
- Checks cover specified cases, not every possible program. Browser HTML checks inspect structure and declarations; students must test behaviour, keyboard use and responsive layout manually.
- Project completion is an explicit **self-review** with a checklist and explanation. Monthly checkpoints are suggested challenges, not automatically verified exams.
- A recommended internship review includes an unfamiliar change request, an explanation without the reference, a clean project setup, a live demo and an independent reviewer. No job or mastery guarantee is provided.

## Runtime and testing

Browser Python uses a reusable Pyodide 0.26.2 worker with fresh globals per run. SQLite and scikit-learn are loaded on demand. The runtime needs first-load internet access, uses temporary virtual files, does not run a listening FastAPI server, and has a 120-second stop/restart limit. Downloadable kits run web APIs on a laptop.

Authoring: `python internship/tools/build_course.py` then `python internship/tools/build_projects.py`.

Validation: `python internship/tools/verify_course.py` (requires FastAPI, httpx and scikit-learn in the test environment); `node internship/tools/verify_ui.cjs` (requires jsdom). Tests cover 135 Python reference cases, incomplete starters, runnable project demos, actual FastAPI routes, editable-code execution requests, local persistence, assistance, failed/stale checks, navigation cancellation, HTML isolation and project self-review rules. The same 135 reference cases are also checked in the pinned Pyodide runtime before publication. Physical device and visual browser QA are still needed.
