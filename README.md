LJIET learning site.

Open the Probability & Stochastic Processes practice book: Chapter 3 (Q205–Q280) at `probability/`, then Chapter 4 (Q281–Q344) at `probability/chapter-4.html`. Both chapters have white backgrounds, black text, worked steps and navigation.


Python practice books are at `python/?book=sem1` and `python/?book=sem3`.

- Semester III: all 734 questions from the supplied 2026 FCSP-1 PDF, across 10 units (511 MCQs and 223 coding questions).
- Semester I: all 210 entries from the existing repository bank (151 MCQs and 59 code/algorithm questions). No Semester I source PDF was supplied.
- White pages, black text, searchable question numbers, expandable explanations, original figures, algorithms/flowcharts, copy/download controls, multiple-file ZIPs and locally saved study progress.
- The optional Python runner uses a disposable Pyodide Web Worker. First use needs an internet connection; NumPy and Matplotlib load as needed. Streamlit apps are downloaded and run locally.

Build the static distribution with `node build-ui.mjs`.
Validate coverage and Python syntax with `python3 scripts/verify-python-bank.py`.
For sample executions, install NumPy and Matplotlib, then run `python3 scripts/verify-python-bank.py --execute`.
Six Streamlit answers were syntax checked; their server UI requires Streamlit locally. Visual browser preview was unavailable during validation. See `python/verification.json` for the checks and limitations.

Mathematics I Chapters 6–8 are at `maths/`: all 381 questions (Q643–Q1023), 141 diagrams, original PDF question images and worked steps on handwriting-style white pages. Validate the reader with `cd maths && npm install && npm test`.
