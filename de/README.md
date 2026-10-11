# Digital Electronics — Chapters 4 and 5

204 solutions: Q334–Q463 (Chapter 4), Q464–Q537 (Chapter 5), from the LJIET Semester III 2026 practice book.

Each answer has an exam writing outline, a common mistake and a closed-book recall check. Worked answers include canonical literal expansion, Gray-order K-maps with coloured selected groups and edge-wrap markers, prime-implicant charts, marked Quine–McCluskey rounds, connected gate diagrams with an exact netlist, and arithmetic truth tables with output maps. Full circuits also show the two-half-circuit construction. Ripple-carry and BCD diagrams explicitly connect the carry and correction paths. The five-/nine-NAND half-/full-adder designs reuse their XOR complement wires.

`de/revision.html` provides an eight-hour revision plan, worked method examples, formula checks and links to representative questions. The seven distinct T2 reference PDFs are linked there. The Unit 4 PB reference warns that its numbering differs; match expressions and question text, not old question numbers. The wording and generated diagrams here are original; faculty scans are not redistributed. Source typos and Q533's input-order ambiguity remain identified. Answers are independently derived and have not been reviewed by faculty.

## Build

Install SymPy in the Python environment, then run:

```sh
python de/tools/build_solutions.py
node build-ui.mjs
```

The committed `source.json` is the transcribed input. `extract_source.py` documents source provenance; it is not a regeneration command. `exam_style.py` generates the exam outlines, canonical expansion and SVG diagrams.

The builder verifies all care rows for simplified SOP/POS functions and universal-gate circuits, half/full adder/subtractor truth tables, and all 200 valid BCD digit pairs with carry. It reports 3,531 checks. Q459's four-NOR realization and Q463's four three-input NAND realization retain their independently checked constrained implementations.

## Verify

With jsdom installed:

```sh
node scripts/verify-de.cjs
```

Checks cover all 204 answers and exam outlines, selected-group coverage and forbidden cells, arithmetic maps, SVG dimensions, revision links and reference count, reveal behaviour, chapter navigation, search, bookmarks, dashboard links and packaged assets. Representative source pages and six generated map/circuit SVGs were rendered and visually inspected. Full browser layout testing was unavailable locally because the browser download failed; this is distinct from the passing DOM interaction and diagram checks.
