// SEM-3 Practice Book aggregator
const PRACTICE_BOOK_SEM3 = {};
if (typeof SEM3_UNIT_1 !== "undefined") PRACTICE_BOOK_SEM3.unit1 = SEM3_UNIT_1;
if (typeof SEM3_UNIT_2 !== "undefined") PRACTICE_BOOK_SEM3.unit2 = SEM3_UNIT_2;
if (typeof SEM3_UNIT_3 !== "undefined") PRACTICE_BOOK_SEM3.unit3 = SEM3_UNIT_3;
if (typeof SEM3_UNIT_4 !== "undefined") PRACTICE_BOOK_SEM3.unit4 = SEM3_UNIT_4;
if (typeof SEM3_UNIT_5 !== "undefined") PRACTICE_BOOK_SEM3.unit5 = SEM3_UNIT_5;
function getAllSem3MCQs() {
  const out = [];
  Object.keys(PRACTICE_BOOK_SEM3).forEach(function (k) {
    if (PRACTICE_BOOK_SEM3[k] && PRACTICE_BOOK_SEM3[k].mcqs) out.push.apply(out, PRACTICE_BOOK_SEM3[k].mcqs);
  });
  return out;
}
console.log("✅ SEM-3 Practice Book loaded:", getAllSem3MCQs().length, "MCQs");
