// Full SEM III unit 1; question numbers match the 2026 source PDF.
var SEM3_UNIT_1 = {
  "unit": 1,
  "title": "Unit 1 — Python basics, types and operators",
  "mcqs": [
    {
      "id": "S3-001",
      "srNo": 1,
      "question": "Which character is used in Python to make a single line comment?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "/",
        "//",
        "!",
        "#"
      ],
      "answer": "D",
      "correct": "#",
      "explanation": "A # begins a comment. Python ignores the remainder of that line."
    },
    {
      "id": "S3-002",
      "srNo": 2,
      "question": "What will be the output of print(type(2**5)) in python?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'double'>",
        "<class 'integer'>"
      ],
      "answer": "A",
      "correct": "<class 'int'>",
      "explanation": "2**5 is 32, an integer. type(32) therefore reports int."
    },
    {
      "id": "S3-003",
      "srNo": 3,
      "question": "What will be the output of print(type(\"LJU\")) in python?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>",
        "<class 'char'>"
      ],
      "answer": "C",
      "correct": "<class 'str'>",
      "explanation": "Text enclosed in quotes is a str. Python has no separate char type."
    },
    {
      "id": "S3-004",
      "srNo": 4,
      "question": "What will be the output of print(type(3*5/5)) in python?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'double'>",
        "<class 'integer'>"
      ],
      "answer": "B",
      "correct": "<class 'float'>",
      "explanation": "3*5 is 15; / always produces a floating-point result, so 15/5 is 3.0."
    },
    {
      "id": "S3-005",
      "srNo": 5,
      "question": "If x=3.123, then int(x) will give ?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "1",
        "3",
        "4",
        "3.12"
      ],
      "answer": "B",
      "correct": "3",
      "explanation": "int truncates the fractional part toward zero; int(3.123) is 3."
    },
    {
      "id": "S3-006",
      "srNo": 6,
      "question": "Which one of the following is correct way of declaring and initialising a variable, x with value 5?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "int x\nx=5",
        "int x=5",
        "x=5",
        "declare x=5"
      ],
      "answer": "C",
      "correct": "x=5",
      "explanation": "Python binds names with assignment and does not require a type declaration: x = 5."
    },
    {
      "id": "S3-007",
      "srNo": 7,
      "question": "Which of the following is an invalid statement?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "abc = 1,000,000",
        "a b c = 1000 2000 3000",
        "a,b,c = 1000, 2000, 3000",
        "a_b_c = 1,000,000"
      ],
      "answer": "B",
      "correct": "a b c = 1000 2000 3000",
      "explanation": "Spaces cannot separate parts of one identifier. Commas separate targets or values; a b c = ... is invalid syntax."
    },
    {
      "id": "S3-008",
      "srNo": 8,
      "question": "Which of the following is invalid?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "_x = 1",
        "__x = 1",
        "__x__ = 1",
        "None of the mentioned"
      ],
      "answer": "D",
      "correct": "None of the mentioned",
      "explanation": "Identifiers may begin with underscores; all three given assignments are valid."
    },
    {
      "id": "S3-009",
      "srNo": 9,
      "question": "Which of the following cannot be a variable?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "__in__",
        "in",
        "it",
        "__it__"
      ],
      "answer": "B",
      "correct": "in",
      "explanation": "in is a reserved keyword used for membership and iteration, so it cannot be a variable name."
    },
    {
      "id": "S3-010",
      "srNo": 10,
      "question": "Which of the following is an invalid variable?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "char_1",
        "1st_char",
        "oopec",
        "_"
      ],
      "answer": "B",
      "correct": "1st_char",
      "explanation": "An identifier may contain digits but cannot start with one; 1st_char is invalid."
    },
    {
      "id": "S3-011",
      "srNo": 11,
      "question": "What happens when '2' == 2 is executed?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "True",
        "False",
        "ValueError",
        "TypeError"
      ],
      "answer": "B",
      "correct": "False",
      "explanation": "The left operand is a string and the right operand is an integer. Equality does not convert '2' into 2, so the result is False."
    },
    {
      "id": "S3-012",
      "srNo": 12,
      "question": "What will be the output of this program?\n_ = '1 2 3 4 5 6'\nprint(_)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "SyntaxError: EOL while scanning string literal",
        "SyntaxError: invalid syntax",
        "NameError: name '_' is not defined",
        "1 2 3 4 5 6"
      ],
      "answer": "D",
      "correct": "1 2 3 4 5 6",
      "trace": {
        "code": "_ = '1 2 3 4 5 6'\nprint(_)",
        "output": "1 2 3 4 5 6\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name.",
      "note": "The PDF prints 123456 without spaces in option D. print(_) retains the spaces in the string."
    },
    {
      "id": "S3-013",
      "srNo": 13,
      "question": "What will be the output of the following program on execution?\nprint(print(print(\"python\")))",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "None\nNone\npython",
        "python\nNone\nNone",
        "python",
        "Error"
      ],
      "answer": "B",
      "correct": "python\nNone\nNone",
      "trace": {
        "code": "print(print(print(\"python\")))",
        "output": "python\nNone\nNone\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-014",
      "srNo": 14,
      "question": "Which is the correct operator for power(Xy)?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "X^y",
        "X**y",
        "X^^y",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "X**y",
      "explanation": "** means exponentiation. ^ is bitwise XOR, not power."
    },
    {
      "id": "S3-015",
      "srNo": 15,
      "question": "What is the answer to this expression, 34 % 3 is?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "7",
        "1",
        "0",
        "5"
      ],
      "answer": "B",
      "correct": "1",
      "explanation": "34 = 3*11 + 1, so the remainder is 1."
    },
    {
      "id": "S3-016",
      "srNo": 16,
      "question": "What will be the output of the following program on execution?\na=0\nb=6\nx=(a or b) or ((a and a) or (a and b))\nprint(x)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "0",
        "6",
        "True",
        "False"
      ],
      "answer": "B",
      "correct": "6",
      "trace": {
        "code": "a=0\nb=6\nx=(a or b) or ((a and a) or (a and b))\nprint(x)",
        "output": "6\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-017",
      "srNo": 17,
      "question": "What will be the output of the following program on execution?\na=0\nb=6\nx=(a or b) or ((a and a) or (a and b))\ny=not(x)\nprint(y)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "0",
        "6",
        "True",
        "False"
      ],
      "answer": "D",
      "correct": "False",
      "trace": {
        "code": "a=0\nb=6\nx=(a or b) or ((a and a) or (a and b))\ny=not(x)\nprint(y)",
        "output": "False\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-018",
      "srNo": 18,
      "question": "What will be the output of this program?\nprint(True ** False / True)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "True ** False / True",
        "1.0",
        "0",
        "Error"
      ],
      "answer": "B",
      "correct": "1.0",
      "trace": {
        "code": "print(True ** False / True)",
        "output": "1.0\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left."
    },
    {
      "id": "S3-019",
      "srNo": 19,
      "question": "Which of the following error occurs when you execute the following Python code?\napple = mango",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "Type Error",
        "Value Error",
        "Name Error",
        "Syntax Error"
      ],
      "answer": "C",
      "correct": "Name Error",
      "trace": {
        "code": "apple = mango",
        "output": "",
        "error": "NameError: name 'mango' is not defined"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-020",
      "srNo": 20,
      "question": "What is the output of this expression, 3*1**3?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "1",
        "3",
        "9",
        "27"
      ],
      "answer": "B",
      "correct": "3",
      "explanation": "Exponentiation happens first: 1**3 = 1, then 3*1 = 3."
    },
    {
      "id": "S3-021",
      "srNo": 21,
      "question": "Select option that will print:\nhello-how-are-you",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "print(‘hello-‘ + ‘how-are-you’)",
        "print(‘hello’, ‘how’, ‘are’, ‘you’)",
        "print(‘hello’, ‘how’, ‘are’, ‘you’ + ‘-‘ * 4)",
        "print(‘hello’ + ‘-‘ + ‘how’ + ‘-‘ + ‘are’ + ‘you’)"
      ],
      "answer": "A",
      "correct": "print(‘hello-‘ + ‘how-are-you’)",
      "explanation": "Concatenate 'hello-' with 'how-are-you'. Plain comma-separated print arguments use spaces unless sep is specified."
    },
    {
      "id": "S3-022",
      "srNo": 22,
      "question": "Which of the following is not a comparison operator in Python?",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        ">=",
        "<=",
        "=",
        "!="
      ],
      "answer": "C",
      "correct": "=",
      "explanation": "= assigns a value. ==, !=, <, >, <= and >= compare values."
    },
    {
      "id": "S3-023",
      "srNo": 23,
      "question": "What will be the output of the following program on execution?\na=4\nb=6\nc=3\nprint(a+b*c/a-b)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "1.5",
        "2",
        "2.5",
        "3"
      ],
      "answer": "C",
      "correct": "2.5",
      "trace": {
        "code": "a=4\nb=6\nc=3\nprint(a+b*c/a-b)",
        "output": "2.5\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-024",
      "srNo": 24,
      "question": "What will be the value of the following Python expression?\n8 + 2 % 3",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "10",
        "8",
        "9",
        "7"
      ],
      "answer": "A",
      "correct": "10",
      "explanation": "Compute 2%3 = 2 first, then 8+2 = 10."
    },
    {
      "id": "S3-025",
      "srNo": 25,
      "question": "What will be the value of x in the following Python expression?\nx = int(63.55+8/3)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "65",
        "66",
        "23",
        "24"
      ],
      "answer": "B",
      "correct": "66",
      "explanation": "8/3 is about 2.6667; 63.55 + 2.6667 = 66.2167. int truncates it to 66."
    },
    {
      "id": "S3-026",
      "srNo": 26,
      "question": "What are the values of the following Python expressions?\n 2**(3**2)\n (2**3)**2\n 2**3**2",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "64, 512, 64",
        "64, 64, 64",
        "512, 512, 512",
        "512, 64, 512"
      ],
      "answer": "D",
      "correct": "512, 64, 512",
      "explanation": "Exponentiation groups right to left: 2**(3**2)=512; (2**3)**2=64; 2**3**2=512."
    },
    {
      "id": "S3-027",
      "srNo": 27,
      "question": "What will be the output of this program?\nprint((7*5**2)/True*False)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "175.0",
        "70.0",
        "0",
        "0.0"
      ],
      "answer": "D",
      "correct": "0.0",
      "trace": {
        "code": "print((7*5**2)/True*False)",
        "output": "0.0\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left."
    },
    {
      "id": "S3-028",
      "srNo": 28,
      "question": "What will be the output of this program?\nprint(6 + 5 - 4 * 3 / 2 % 1)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "15.0",
        "7.0",
        "11.0",
        "10.0"
      ],
      "answer": "C",
      "correct": "11.0",
      "trace": {
        "code": "print(6 + 5 - 4 * 3 / 2 % 1)",
        "output": "11.0\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-029",
      "srNo": 29,
      "question": "What will be the output of this program?\nprint(int(6 == 6.0) * 3 + 4 % 5)",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "Error",
        "22",
        "7",
        "18"
      ],
      "answer": "C",
      "correct": "7",
      "trace": {
        "code": "print(int(6 == 6.0) * 3 + 4 % 5)",
        "output": "7\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-030",
      "srNo": 30,
      "question": "What will be the value of X in the following Python expression?\nX = 2+9*((3*12)-8)/10",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "30.0",
        "30.8",
        "28.4",
        "27.2"
      ],
      "answer": "D",
      "correct": "27.2",
      "explanation": "3*12=36; 36-8=28; 9*28/10=25.2; add 2 to get 27.2."
    },
    {
      "id": "S3-031",
      "srNo": 31,
      "question": "What will be the output of the following Python code?\nnew= (1 and \"True\") and ('False' or Train)\nstr= 'This statement is '+ new\nprint(\"This is False\" if \"False\" in new else \"This is True\")",
      "marks": 1.0,
      "sourcePage": 1,
      "options": [
        "This is True",
        "NameError – Train not defined",
        "This is False",
        "Syntax Error – invalid syntax"
      ],
      "answer": "C",
      "correct": "This is False",
      "trace": {
        "code": "new= (1 and \"True\") and ('False' or Train)\nstr= 'This statement is '+ new\nprint(\"This is False\" if \"False\" in new else \"This is True\")",
        "output": "This is False\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-032",
      "srNo": 32,
      "question": "What will be the value of the following Python expression?\n8 + 1 % 3",
      "marks": 0.5,
      "sourcePage": 1,
      "options": [
        "8",
        "9",
        "10",
        "11"
      ],
      "answer": "B",
      "correct": "9",
      "explanation": "1%3=1, so 8+1=9."
    },
    {
      "id": "S3-033",
      "srNo": 33,
      "question": "What should be the output of the following python code snippet:\nx=0.0\ny=48>0\nz=11<7\nprint(not(float(x or y or z)))",
      "marks": 1.0,
      "sourcePage": 2,
      "options": [
        "True",
        "False",
        "Error",
        "No output"
      ],
      "answer": "B",
      "correct": "False",
      "trace": {
        "code": "x=0.0\ny=48>0\nz=11<7\nprint(not(float(x or y or z)))",
        "output": "False\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-034",
      "srNo": 34,
      "question": "What will be the output of the following program on execution?\nx=Str(\"Python is a very\\b simple\\bsubject\")\nprint(x)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "Python is a verysimpleubject",
        "Python is a versimplsubject",
        "Name Error",
        "None of mentioned"
      ],
      "answer": "C",
      "correct": "Name Error",
      "trace": {
        "code": "x=Str(\"Python is a very\\b simple\\bsubject\")\nprint(x)",
        "output": "",
        "error": "NameError: name 'Str' is not defined"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-035",
      "srNo": 35,
      "question": "What is the output of the following assignment operator\na=10\nb=a-=2\nprint(b)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "12",
        "8",
        "9",
        "Syntax Error"
      ],
      "answer": "D",
      "correct": "Syntax Error",
      "trace": {
        "code": "a=10\nb=a-=2\nprint(b)",
        "output": "",
        "error": "SyntaxError: invalid Python syntax"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-036",
      "srNo": 36,
      "question": "What will be the output of the following program on execution?\na=4\nb=6\nc=3\nd=2\nprint(a+d**b*c/a-b)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "64.0",
        "46.0",
        "52.0",
        "192.0"
      ],
      "answer": "B",
      "correct": "46.0",
      "trace": {
        "code": "a=4\nb=6\nc=3\nd=2\nprint(a+d**b*c/a-b)",
        "output": "46.0\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left."
    },
    {
      "id": "S3-037",
      "srNo": 37,
      "question": "What will be the output of this program?\nprint(int(\"6\" == 6.0) * 3 + 4 % 5)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "4",
        "6",
        "22",
        "Error"
      ],
      "answer": "A",
      "correct": "4",
      "trace": {
        "code": "print(int(\"6\" == 6.0) * 3 + 4 % 5)",
        "output": "4\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-038",
      "srNo": 38,
      "question": "What will be the output of the following program on execution?\na=0\nb=6\nc=9\nd=10\nx=(a or b) and ((a or c) or (b and d))\nprint(x)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "0",
        "6",
        "9",
        "10"
      ],
      "answer": "C",
      "correct": "9",
      "trace": {
        "code": "a=0\nb=6\nc=9\nd=10\nx=(a or b) and ((a or c) or (b and d))\nprint(x)",
        "output": "9\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-039",
      "srNo": 39,
      "question": "What will be the value of X in the following Python expression?\nX = 2+9*((3*12)-8)/10\nprint(bool(X))",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "True",
        "0",
        "30",
        "30.8"
      ],
      "answer": "A",
      "correct": "True",
      "trace": {
        "code": "X = 2+9*((3*12)-8)/10\nprint(bool(X))",
        "output": "True\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-040",
      "srNo": 40,
      "question": "What will be the datatype of the var in the below code snippet?\nvar = 10\nprint(type(var))\nvar = \"Hello\"\nprint(type(var))",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "int",
        "int,str",
        "str",
        "str,str"
      ],
      "answer": "B",
      "correct": "int,str",
      "trace": {
        "code": "var = 10\nprint(type(var))\nvar = \"Hello\"\nprint(type(var))",
        "output": "<class 'int'>\n<class 'str'>\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-041",
      "srNo": 41,
      "question": "What will be the output of this program?\nprint(True * False / True)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "0",
        "0.0",
        "1.0",
        "Error"
      ],
      "answer": "B",
      "correct": "0.0",
      "trace": {
        "code": "print(True * False / True)",
        "output": "0.0\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-042",
      "srNo": 42,
      "question": "What is the output of the following python code:\nx=125\ny=13\nx//=y\nprint(x)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "125/13",
        "10",
        "9",
        "9.62"
      ],
      "answer": "C",
      "correct": "9",
      "trace": {
        "code": "x=125\ny=13\nx//=y\nprint(x)",
        "output": "9\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-043",
      "srNo": 43,
      "question": "What is the output of following python code:\nprint(bool(0), bool(3.14159), bool(-3), bool(False))",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "False True True False",
        "True True True False",
        "False False True False",
        "False True False False"
      ],
      "answer": "A",
      "correct": "False True True False",
      "trace": {
        "code": "print(bool(0), bool(3.14159), bool(-3), bool(False))",
        "output": "False True True False\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-044",
      "srNo": 44,
      "question": "a=5\nb=10\nc=1\nprint(a**c, b//a, c%a)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "5 2 2",
        "5 2 1",
        "5 2 5",
        "5 10 5"
      ],
      "answer": "B",
      "correct": "5 2 1",
      "trace": {
        "code": "a=5\nb=10\nc=1\nprint(a**c, b//a, c%a)",
        "output": "5 2 1\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left. // is floor division and % gives the remainder."
    },
    {
      "id": "S3-045",
      "srNo": 45,
      "question": "Which of the following is invalid?",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "1x=1",
        "x1=1",
        "__x__=1",
        "_x=1"
      ],
      "answer": "A",
      "correct": "1x=1",
      "explanation": "Variable names cannot begin with a digit. 1x is invalid; underscores are allowed."
    },
    {
      "id": "S3-046",
      "srNo": 46,
      "question": "What is the output of this expression, 3**1**3/True?",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "1",
        "3",
        "3.0",
        "27"
      ],
      "answer": "C",
      "correct": "3.0",
      "explanation": "3**1**3 is 3**(1**3)=3. True is numerically 1; true division gives 3.0."
    },
    {
      "id": "S3-047",
      "srNo": 47,
      "question": "What will be the output of the following program on execution?\na=0\nb=5\na or b ==5 or True + 7 -4 * 3",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "True",
        "1",
        "0",
        "False"
      ],
      "answer": "A",
      "correct": "True",
      "trace": {
        "code": "a=0\nb=5\na or b ==5 or True + 7 -4 * 3",
        "output": "True\n",
        "error": null
      },
      "explanation": "a is zero and thus false; b==5 is True, so or stops there and returns True."
    },
    {
      "id": "S3-048",
      "srNo": 48,
      "question": "What will be the output of the following program on execution?\na=50\nb=60\nprint((a and b)/False)",
      "marks": 0.5,
      "sourcePage": 2,
      "options": [
        "0",
        "60",
        "50",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "trace": {
        "code": "a=50\nb=60\nprint((a and b)/False)",
        "output": "",
        "error": "ZeroDivisionError: division by zero"
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    }
  ],
  "coding": [
    {
      "id": "S3-C049",
      "srNo": 49,
      "question": "Write a Python program to add 2 Numbers with user input.",
      "marks": 4.0,
      "sourcePage": 2,
      "solution": "a = float(input('Enter first number: '))\nb = float(input('Enter second number: '))\nprint('Sum =', a + b)",
      "explanation": "Convert both input strings to numbers and add them. For inputs 2 and 3 the sum is 5.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "2",
        "3"
      ],
      "exampleOutput": "Sum = 5.0"
    },
    {
      "id": "S3-C050",
      "srNo": 50,
      "question": "Write a Python program to find the area of Circle.",
      "marks": 4.0,
      "sourcePage": 2,
      "solution": "import math\nr = float(input('Enter radius: '))\nprint('Area =', math.pi * r * r)",
      "explanation": "A circle has area pi*r*r. math.pi supplies an accurate value of pi.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "2"
      ],
      "exampleOutput": "Area = 12.566370614359172"
    },
    {
      "id": "S3-C051",
      "srNo": 51,
      "question": "Write a Python program to find the area of Triangle.",
      "marks": 4.0,
      "sourcePage": 2,
      "solution": "b = float(input('Base: '))\nh = float(input('Height: '))\nprint('Area =', 0.5 * b * h)",
      "explanation": "A triangle has area base*height/2; the height must be perpendicular to the base.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "4"
      ],
      "exampleOutput": "Area = 6.0"
    },
    {
      "id": "S3-C052",
      "srNo": 52,
      "question": "Write a Python program to calculate the area of a trapezoid.",
      "marks": 4.0,
      "sourcePage": 2,
      "solution": "a = float(input('Base1: '))\nb = float(input('Base2: '))\nh = float(input('Height: '))\nprint('Area =', 0.5 * (a + b) * h)",
      "explanation": "A trapezoid has area (parallel side 1 + parallel side 2)*height/2.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "5",
        "4"
      ],
      "exampleOutput": "Area = 16.0"
    },
    {
      "id": "S3-C053",
      "srNo": 53,
      "question": "Write a Python program to calculate surface volume and area of a cylinder.",
      "marks": 4.0,
      "sourcePage": 2,
      "solution": "import math\nr = float(input('Radius: '))\nh = float(input('Height: '))\nprint('Volume =', math.pi * r * r * h)\nprint('Surface Area =', 2 * math.pi * r * (r + h))",
      "explanation": "Cylinder volume is pi*r²*h; total surface area is 2*pi*r*(r+h), including both circular ends.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "2",
        "3"
      ],
      "exampleOutput": "Volume = 37.69911184307752\nSurface Area = 62.83185307179586"
    },
    {
      "id": "S3-C054",
      "srNo": 54,
      "question": "Write a Python program to convert Fahrenheit to Celsius and vice versa.",
      "marks": 7.0,
      "sourcePage": 2,
      "solution": "choice = input('F to C or C to F? (F/C): ').upper()\nif choice == 'F':\n    f = float(input('Fahrenheit: '))\n    print('Celsius =', (f - 32) * 5 / 9)\nelse:\n    c = float(input('Celsius: '))\n    print('Fahrenheit =', c * 9 / 5 + 32)",
      "explanation": "Use C=(F-32)*5/9 for Fahrenheit to Celsius and F=C*9/5+32 in the opposite direction.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "F",
        "32"
      ],
      "exampleOutput": "Celsius = 0.0"
    },
    {
      "id": "S3-C055",
      "srNo": 55,
      "question": "Write a python code to demonstrate calculator functionality.",
      "marks": 7.0,
      "sourcePage": 2,
      "solution": "a = float(input('a: '))\nop = input('Operator (+ - * /): ')\nb = float(input('b: '))\nif op == '+': print(a + b)\nelif op == '-': print(a - b)\nelif op == '*': print(a * b)\nelif op == '/': print(a / b if b else 'Error')\nelse: print('Invalid')",
      "explanation": "Select an arithmetic operation by the operator. A zero divisor must produce an error rather than a result.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "8",
        "/",
        "2"
      ],
      "exampleOutput": "4.0"
    },
    {
      "id": "S3-C056",
      "srNo": 56,
      "question": "Write a python program to convert Days into Years, Months and Days. (Ex: if input of Days = 370 then output will be,\nyears=1, months=0 and days = 5).",
      "marks": 7.0,
      "sourcePage": 2,
      "solution": "days = int(input('Days: '))\nyears = days // 365\ndays %= 365\nmonths = days // 30\ndays %= 30\nprint(f'years={years}, months={months}, days={days}')",
      "explanation": "Use 365-day years and 30-day months as the exercise convention. Quotients give whole units; remainders give the leftover days. 370 days is 1 year, 0 months and 5 days.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "370"
      ],
      "exampleOutput": "years=1, months=0, days=5"
    },
    {
      "id": "S3-C057",
      "srNo": 57,
      "question": "Write a Python program to convert hours into minutes and seconds (Ex : input of hours = 6 then output will be, minutes =\n360 and seconds = 21600 ).",
      "marks": 7.0,
      "sourcePage": 2,
      "solution": "h = int(input('Hours: '))\nprint('minutes =', h * 60)\nprint('seconds =', h * 3600)",
      "explanation": "Multiply hours by 60 for minutes and by 3600 for seconds. Six hours gives 360 minutes and 21600 seconds.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "6"
      ],
      "exampleOutput": "minutes = 360\nseconds = 21600"
    },
    {
      "id": "S3-C058",
      "srNo": 58,
      "question": "Write a Python program to find an integer exponent x such that a^x = n.\nInput:\na = 2 : n = 1024\nOutput:\n10\nInput:\na = 3 : n = 81\nOutput:\n4",
      "marks": 4.0,
      "sourcePage": 3,
      "solution": "a = int(input('Base a (at least 2): '))\nn = int(input('Target n (positive): '))\nif a < 2 or n < 1:\n    print('Use a >= 2 and n >= 1.')\nelse:\n    x, value = 0, 1\n    while value < n:\n        value *= a\n        x += 1\n    print(x if value == n else 'No nonnegative integer exponent')",
      "explanation": "Start at a**0 = 1 and multiply by a until reaching or passing n. Requiring a >= 2 prevents an infinite loop. This exercise assumes a nonnegative exponent.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "2",
        "1024"
      ],
      "exampleOutput": "10"
    },
    {
      "id": "S3-C059",
      "srNo": 59,
      "question": "A water storage facility needs to store n liters of water using bottles of different sizes. The available bottle sizes are: 500\nliters, 200 liters, 50 liters, 10 liters, 1 liter.\nTask: Using the largest bottles first, calculate:\nNumber of 500L bottles required\nNumber of 200L bottles required\nNumber of 50L bottles required\nNumber of 10L bottles required\nNumber of 1L bottles required\nInput: water=987 litres\nOutput: 1 2 1 3 7\nExplanation:\n1 × 500L = 500L → remaining 487L\n2 × 200L = 400L → remaining 87L\n1 × 50L = 50L → remaining 37L\n3 × 10L = 30L → remaining 7L\n7 × 1L = 7L → remaining 0L\nAll water is stored using the largest bottles first, no loops or functions needed.\nNote: You are not allowed to use following built-in structures -\nstring, list, tuple, dictionary and set.\nbuilt-in functions -\nlen, min, max, sum\nAlso, not allowed to use any in-built module or library except math.\nAlso, just for this code you are not allowed to use loop like for, while, etc. or any other conditional statements like if, if..else,\nif…elif…else, etc.",
      "marks": 2.0,
      "sourcePage": 3,
      "solution": "w = int(input())\nb500 = w // 500; w %= 500\nb200 = w // 200; w %= 200\nb50 = w // 50; w %= 50\nb10 = w // 10; w %= 10\nprint(b500, b200, b50, b10, w)",
      "explanation": "Use integer division and remainder in descending bottle-size order. For 987 liters the counts are 1 2 1 3 7. No loop, conditional or container is needed.",
      "topic": "Python basics, types and operators",
      "starterCode": "",
      "exampleInputs": [
        "987"
      ],
      "exampleOutput": "1 2 1 3 7"
    }
  ]
};
