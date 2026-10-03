// FSD-1 Practice Book aggregator (Full Stack Development with JavaScript-1)
// Source: L.J. Institute of Engineering and Technology, SEM-III 2026
const PRACTICE_BOOK_FSD1 = {};
if (typeof FSD1_UNIT_1 !== "undefined") PRACTICE_BOOK_FSD1.unit1 = FSD1_UNIT_1;
if (typeof FSD1_UNIT_2 !== "undefined") PRACTICE_BOOK_FSD1.unit2 = FSD1_UNIT_2;
if (typeof FSD1_UNIT_3 !== "undefined") PRACTICE_BOOK_FSD1.unit3 = FSD1_UNIT_3;
if (typeof FSD1_UNIT_4 !== "undefined") PRACTICE_BOOK_FSD1.unit4 = FSD1_UNIT_4;
if (typeof FSD1_UNIT_5 !== "undefined") PRACTICE_BOOK_FSD1.unit5 = FSD1_UNIT_5;
if (typeof FSD1_UNIT_6 !== "undefined") PRACTICE_BOOK_FSD1.unit6 = FSD1_UNIT_6;
if (typeof FSD1_UNIT_7 !== "undefined") PRACTICE_BOOK_FSD1.unit7 = FSD1_UNIT_7;
if (typeof FSD1_UNIT_8 !== "undefined") PRACTICE_BOOK_FSD1.unit8 = FSD1_UNIT_8;
if (typeof FSD1_UNIT_9 !== "undefined") PRACTICE_BOOK_FSD1.unit9 = FSD1_UNIT_9;
if (typeof FSD1_UNIT_10 !== "undefined") PRACTICE_BOOK_FSD1.unit10 = FSD1_UNIT_10;

function getAllFsd1MCQs() {
  const out = [];
  Object.keys(PRACTICE_BOOK_FSD1).forEach(function (k) {
    if (PRACTICE_BOOK_FSD1[k] && PRACTICE_BOOK_FSD1[k].mcqs)
      out.push.apply(out, PRACTICE_BOOK_FSD1[k].mcqs);
  });
  return out;
}
console.log("✅ FSD-1 Practice Book loaded:", getAllFsd1MCQs().length, "MCQs");
