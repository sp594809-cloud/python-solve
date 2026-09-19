// SEM-3 Unit 5 MCQs
var SEM3_UNIT_5 = {
  "unit": 5,
  "title": "UNIT 5 – Lists, Dictionaries & Sets",
  "mcqs": [
    {"id": "S3-320", "srNo": 320, "question": "Commands that create a list?", "options": ["list1 = list()", "list1 = []", "list1 = list([1,2,3])", "All of the mentioned"], "answer": "D", "correct": "All of the mentioned", "explanation": "Correct answer: D) All of the mentioned"},
    {"id": "S3-321", "srNo": 321, "question": "list(\"hello\")", "options": ["['h','e','l','l','o']", "['hello']", "['llo']", "['olleh']"], "answer": "A", "correct": "['h','e','l','l','o']", "explanation": "Correct answer: A)"},
    {"id": "S3-322", "srNo": 322, "question": "len(['h','e','l','l','o'])", "options": ["5", "4", "None", "Error"], "answer": "A", "correct": "5", "explanation": "Correct answer: A) 5"},
    {"id": "S3-323", "srNo": 323, "question": "[1,3,2]*2", "options": ["[2,6,4]", "[1,3,2,1,3]", "[1,3,2,1,3,2]", "[1,3,2,3,2,1]"], "answer": "C", "correct": "[1,3,2,1,3,2]", "explanation": "Correct answer: C)"},
    {"id": "S3-324", "srNo": 324, "question": "'amir' in ['Amir','Bala','Chales']", "options": ["1", "Error", "2", "None"], "answer": "C", "correct": "2", "explanation": "Correct answer: C) 2"},
    {"id": "S3-325", "srNo": 325, "question": "len([1,2,3,4]+[5,6,7,8])", "options": ["2", "4", "5", "8"], "answer": "D", "correct": "8", "explanation": "Correct answer: D) 8"},
    {"id": "S3-328", "srNo": 328, "question": "[2,33,222,14,25][-1]", "options": ["Error", "None", "25", "2"], "answer": "C", "correct": "25", "explanation": "Correct answer: C) 25"},
    {"id": "S3-329", "srNo": 329, "question": "[2,33,222,14,25][:-1]", "options": ["[2,33,222,14]", "Error", "25", "reversed"], "answer": "A", "correct": "[2,33,222,14]", "explanation": "Correct answer: A)"},
    {"id": "S3-330", "srNo": 330, "question": "names[-1][-1] for Daman", "options": ["A", "Daman", "Error", "n"], "answer": "D", "correct": "n", "explanation": "Correct answer: D) n"},
    {"id": "S3-337", "srNo": 337, "question": "Add element to list", "options": ["list1.add(5)", "list1.append(5)", "list1.addLast(5)", "list1.addEnd(5)"], "answer": "B", "correct": "list1.append(5)", "explanation": "Correct answer: B)"},
    {"id": "S3-338", "srNo": 338, "question": "append list then len", "options": ["4", "5", "8", "12"], "answer": "B", "correct": "5", "explanation": "Correct answer: B) 5"},
    {"id": "S3-342", "srNo": 342, "question": "[3,4,5,20,5,25,1,3].count(5)", "options": ["0", "4", "1", "2"], "answer": "D", "correct": "2", "explanation": "Correct answer: D) 2"},
    {"id": "S3-343", "srNo": 343, "question": "x.extend(y) for two lists", "options": ["[1,2,3,7,8,9]", "[1,2,3,7,9]", "[7,8,9]", "[1,2,3]"], "answer": "A", "correct": "[1,2,3,7,8,9]", "explanation": "Correct answer: A)"},
    {"id": "S3-353", "srNo": 353, "question": "[1,3,4,2].sort()", "options": ["[1,2,3,4]", "[1,3,4]", "[1,2,3]", "[2,3,4]"], "answer": "A", "correct": "[1,2,3,4]", "explanation": "Correct answer: A)"},
    {"id": "S3-357", "srNo": 357, "question": "\"john\" in d dictionary", "options": ["TRUE", "FALSE", "NONE", "ERROR"], "answer": "A", "correct": "TRUE", "explanation": "Correct answer: A) TRUE"},
    {"id": "S3-358", "srNo": 358, "question": "d1==d2 different values", "options": ["TRUE", "FALSE", "NONE", "ERROR"], "answer": "B", "correct": "FALSE", "explanation": "Correct answer: B) FALSE"},
    {"id": "S3-359", "srNo": 359, "question": "d[\"john\"] when 40", "options": ["40", "45", "john", "peter"], "answer": "A", "correct": "40", "explanation": "Correct answer: A) 40"},
    {"id": "S3-361", "srNo": 361, "question": "Number of dictionary entries", "options": ["d.size()", "len(d)", "size(d)", "d.len()"], "answer": "B", "correct": "len(d)", "explanation": "Correct answer: B) len(d)"},
    {"id": "S3-367", "srNo": 367, "question": "Create a dictionary", "options": ["d={}", "d={\"john\":40}", "d={40:\"john\"}", "All of the mentioned"], "answer": "D", "correct": "All of the mentioned", "explanation": "Correct answer: D)"},
    {"id": "S3-378", "srNo": 378, "question": "Incorrect syntax for set", "options": ["set([[1,2],[3,4]])", "set([1,2,2,3,4])", "set((1,2,3,4))", "{1,2,3,4}"], "answer": "A", "correct": "set([[1,2],[3,4]])", "explanation": "Correct answer: A)"},
    {"id": "S3-379", "srNo": 379, "question": "Empty set", "options": ["{ }", "set()", "[ ]", "( )"], "answer": "B", "correct": "set()", "explanation": "Correct answer: B) set()"},
    {"id": "S3-380", "srNo": 380, "question": "s={5,6}; s*3", "options": ["Error unsupported operand for set", "{5,6,5,6,5,6}", "{5,6}", "Error duplicates"], "answer": "A", "correct": "Error unsupported operand for set", "explanation": "Correct answer: A)"},
    {"id": "S3-381", "srNo": 381, "question": "a+b for two sets", "options": ["union without error", "union with dup", "Error unsupported operand", "Error duplicate"], "answer": "C", "correct": "Error unsupported operand", "explanation": "Correct answer: C)"},
    {"id": "S3-391", "srNo": 391, "question": "lambda x: x*y with y=6, z(8)", "options": ["48", "14", "64", "None"], "answer": "A", "correct": "48", "explanation": "Correct answer: A) 48"},
    {"id": "S3-392", "srNo": 392, "question": "lambda x: x**3 ; lamb(5)", "options": ["15", "555", "125", "None"], "answer": "C", "correct": "125", "explanation": "Correct answer: C) 125"}
  ],
  "coding": []
};
console.log('SEM3 unit 5:', SEM3_UNIT_5.mcqs.length, 'MCQs');
