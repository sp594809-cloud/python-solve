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

Chapter 3 is completed first as requested. Other chapters are not yet published as solved. The extracted full-book source is preserved in `data/questions-source.json` for subsequent chapters.
