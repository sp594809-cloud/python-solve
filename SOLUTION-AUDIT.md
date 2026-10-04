# Solution improvements — 4 October 2026

This update improves the current Maths I Units 6–8 and P&S Chapters 3–4 banks. It does not add missing syllabus chapters or certify every answer as faculty reviewed.

## Corrections from the original P&S PDF

| Question | Correction |
| --- | --- |
| 299 | Tied ranks require Pearson correlation of average ranks. Correct coefficient is −1/√3, approximately −0.57735; choose “none of these”. |
| 315 | Re-read both printed rank rows; MOS ranks have no duplicates. Σd² = 136 and ρ = 0.8. |
| 319 | The fifth TV-hours value is 28, giving ρ ≈ −0.175758. |
| 330 | Blood pressure for E is 105, and for F is 108. Pearson r ≈ −0.127209. |
| 338 | The eighth engineering-ability score is 92. Pearson r ≈ 0.596347. |
| 337 | Replaced an incorrect check in the note with substitution of the correct means into both equations. |
| 287, 308 | The printed summaries are inconsistent with untied ranks. The formal textbook arithmetic is retained with explicit conditions; original ranks are needed to resolve the data. |
| 314 | Added the missing regression-coefficient calculation, bᵧₓ = 80/10 = 8. |

Paired examples now include calculation tables with centred sums or average ranks. Regression answers state the fitted equations and requested predictions.

## Maths

- Added 148 explicit inner-antiderivative and upper-minus-lower steps.
- Display real logarithmic primitives with absolute values, retaining domain notes.
- Q683 includes separate integration constants for intervals of fixed sign.
- Q668 explicitly covers a = 1, and Q696 covers n = 0.
- Added optional method hints and primary-source further-reading links.
- Checked 257 displayed answers independently using finite differences and SciPy quadrature at sample parameter values. Exact scope and question IDs are recorded in `maths/data/numerical-audit.json`. Remaining questions include vector identities, proofs and manually authored geometry; they are not covered by this numerical check.

## Verification

- 381 Maths reader routes and 2,052 LaTeX formulas passed the reader check.
- 36 independent numerical checks in each P&S chapter passed (72 total).
- All 282 Python programs passed syntax checks. 276 runnable programs passed sample-output checks; six Streamlit examples require a live Streamlit environment for UI verification.
- Python III Q479 sorts file paths for reproducible output. Its fixture was updated to match. Temporary-directory normalization in the test harness is limited to the randomized working directory.
- UI checks cover hints, references, hidden answers, navigation, bookmarks, progress, report drafts, search and packaged assets.
- Browser visual QA was unavailable in this environment; DOM checks do not establish visual layout across devices.

To reproduce the numerical Maths audit, install SymPy, antlr4-python3-runtime 4.11.1, NumPy and SciPy, then run `python3 scripts/verify-maths-numerically.py`. To reapply enrichment to the existing bank, run `python3 scripts/enrich-study-solutions.py`. The enrichment preserves the full-width PDF crops. P&S builder regeneration should be followed by enrichment; the old Maths augment script should not be used to recreate the current crops.
