// SEM-3 Practice Book aggregator
const PRACTICE_BOOK_SEM3 = {};
[1,2,3,4,5].forEach(function(u) {
  const key = 'SEM3_UNIT_' + u;
  if (typeof window[key] !== 'undefined') PRACTICE_BOOK_SEM3['unit' + u] = window[key];
});
function getAllSem3MCQs() {
  const out = [];
  Object.keys(PRACTICE_BOOK_SEM3).forEach(function (k) {
    if (PRACTICE_BOOK_SEM3[k] && PRACTICE_BOOK_SEM3[k].mcqs) out.push.apply(out, PRACTICE_BOOK_SEM3[k].mcqs);
  });
  return out;
}
console.log('✅ SEM-3 Practice Book loaded:', getAllSem3MCQs().length, 'MCQs');
