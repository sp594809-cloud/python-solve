# Probability & Stochastic Processes practice book

Chapter 3 (Q205–Q280) contains 76 complete worked solutions. Open `index.html` using a local HTTP server, or visit `/probability/` in the deployed Learning Hub.

The page uses a fixed white background, black text, original question numbers, accessible solution disclosure, previous/next controls and a mobile question selector. Question links use hashes such as `#q253`. The original PDF is included with page links.

All Chapter 3 tables were checked against rendered source pages. Solutions use population standard deviation and grouped interpolation. Notes identify the PDF's truncated answers for Q213 and Q228, the incompatible integer-frequency inputs of Q248, and the edge modal-class convention in Q272.

Recalculate chapter content:

```sh
python3 probability/tools/build_chapter3.py
python3 probability/tools/verify_chapter3.py
```

After regeneration, update `data/chapter-3.js` from `data/chapter-3.json` with the `window.PROBABILITY_CHAPTER_3 = ...;` wrapper.

Chapters 4–6 are also available: Chapter 4 covers correlation and regression (Q281–Q344), Chapter 5 covers binomial and Poisson distributions (Q345–Q429), and Chapter 6 covers normal and exponential distributions (Q430–Q507).

Regenerate Chapters 5–6 and their share images with `python3 probability/tools/build_chapters5_6.py` (PyMuPDF and Pillow). Run `node build-ui.mjs` after regenerating to update the dashboard and distribution.
