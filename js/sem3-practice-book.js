// ============================================================
// LJIET FCSP-1 PRACTICE BOOK – PYTHON SEM-III (ODD 2026)
// MCQs digitized from official PB_Python-I SEM III 2026
// ============================================================

const PRACTICE_BOOK_SEM3 = {
  unit1: {
    unit: 1,
    title: "UNIT 1 – Python Basics, Types & Operators",
    mcqs: [
      {
        id: "S3-001",
        srNo: 1,
        question: "Which character is used in Python to make a single line comment?",
        options: ["/", "//", "!", "#"],
        answer: "D",
        correct: "#",
        explanation: "Correct answer: D) #"
      },
      {
        id: "S3-002",
        srNo: 2,
        question: "What will be the output of print(type(2**5)) in python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'integer'>"],
        answer: "A",
        correct: "<class 'int'>",
        explanation: "Correct answer: A) <class 'int'>"
      }
    ],
    coding: []
  }
};

function getAllSem3MCQs() {
  const out = [];
  Object.keys(PRACTICE_BOOK_SEM3).forEach(function (k) {
    if (PRACTICE_BOOK_SEM3[k] && PRACTICE_BOOK_SEM3[k].mcqs) out.push.apply(out, PRACTICE_BOOK_SEM3[k].mcqs);
  });
  return out;
}
console.log('✅ SEM-3 Practice Book loaded:', getAllSem3MCQs().length, 'MCQs');
