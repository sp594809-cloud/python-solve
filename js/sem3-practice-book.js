const PRACTICE_BOOK_SEM3 = {
  unit1: SEM3_UNIT_1,
  unit2: SEM3_UNIT_2,
  unit3: SEM3_UNIT_3,
  unit4: SEM3_UNIT_4,
  unit5: SEM3_UNIT_5,
  unit6: SEM3_UNIT_6,
  unit7: SEM3_UNIT_7,
  unit8: SEM3_UNIT_8,
  unit9: SEM3_UNIT_9,
  unit10: SEM3_UNIT_10
};
function getAllSem3MCQs() { return Object.values(PRACTICE_BOOK_SEM3).flatMap(unit => unit.mcqs); }
