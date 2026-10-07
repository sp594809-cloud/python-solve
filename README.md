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

## Study experience

The dashboard indexes 1,946 questions in seven available subject collections, with semester and chapter navigation, cross-subject search, saved questions, Done/Revise/Doubt status, and five- or ten-question practice sessions. MCQs are scored after submission; written questions are self-checked. Progress, report drafts and recent practice results are stored only on the current device. Reporters can open a prefilled GitHub issue and submit it themselves.

Mathematics source images now retain the full PDF table width, actual row borders and continuation fragments. Small screens can scroll the complete row; a full-page viewer offers 150% and 200% zoom. Rebuild these assets with `python3 maths/tools/build_source_images.py` (PyMuPDF and Pillow). This command preserves all mathematical answers and steps.

Coverage labels reflect the loaded banks: Python I available bank, Python III Chapters 1–10, Mathematics I Chapters 6–8, FSD Chapters 1–2, Software Engineering MCQs Chapters 1–5, Probability Chapters 3–4, and Digital Electronics Chapters 4–5. Other chapters are not claimed complete.

Faculty review records are maintained in `study/faculty-reviews.json`. Leave it empty until a faculty member has actually checked a question. Each accepted record needs `questionKey`, `facultyName`, ISO `date`, and an HTTPS `evidenceUrl` linking to the documented review. The build validates records and displays review attribution only for matching questions.

Run `node build-ui.mjs` to rebuild the catalogue and distribution. With jsdom installed, run `node scripts/verify-study-experience.cjs` for navigation, saved progress, practice, reporting, reader and packaged-asset checks. Functional checks passed; browser layout QA was unavailable in the managed environment.

Digital Electronics Chapters 4–5 are at `de/`: 204 worked solutions (Q334–Q537), original PDF rows, K-maps, PI charts, truth tables, universal-gate circuits and BCD examples. Rebuild and verification instructions are in `de/README.md`.
