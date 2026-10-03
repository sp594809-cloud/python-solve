// Full SEM III unit 4; question numbers match the 2026 source PDF.
var SEM3_UNIT_4 = {
  "unit": 4,
  "title": "Unit 4 — Strings and tuples",
  "mcqs": [
    {
      "id": "S3-228",
      "srNo": 228,
      "question": "What  arithmetic operators cannot be used with strings?",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "-",
        "+",
        "*",
        "All of the mentioned"
      ],
      "answer": "A",
      "correct": "-",
      "explanation": "Strings support + concatenation and multiplication by an integer. Subtraction is not defined."
    },
    {
      "id": "S3-229",
      "srNo": 229,
      "question": "Name  the function which is used to find length of string.",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "length( )",
        "len( )",
        "slen( )",
        "strlen( )"
      ],
      "answer": "B",
      "correct": "len( )",
      "explanation": "len(string) returns its character count."
    },
    {
      "id": "S3-230",
      "srNo": 230,
      "question": "What  will be the output of above Python code?\n str1=\"6/4\"\nprint(\"str1\")",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "1",
        "6/4",
        "str1",
        "1.5"
      ],
      "answer": "C",
      "correct": "str1",
      "trace": {
        "code": "str1=\"6/4\"\nprint(\"str1\")",
        "output": "str1\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-231",
      "srNo": 231,
      "question": "What  will be the output of below Python code?\nstr1=\"Programming\"\nprint(str1[3:8])",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "ogram",
        "gramm",
        "rammin",
        "ogramming"
      ],
      "answer": "B",
      "correct": "gramm",
      "trace": {
        "code": "str1=\"Programming\"\nprint(str1[3:8])",
        "output": "gramm\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-232",
      "srNo": 232,
      "question": "What  will the below Python code will return?\nstr1=\"save paper,save trees\"\nstr1.find(\"save\")",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "It returns the first index position of the last\noccurance of \"save\" in the given string str1.",
        "It returns the first index position of the first\noccurance of \"save\" in the given string str1.",
        "It returns the last index position of the last occurance of \"save\" in\nthe given string str1.",
        "It returns the last index position of the first occurance of\n\"save\" in the given string str1."
      ],
      "answer": "B",
      "correct": "It returns the first index position of the first\noccurance of \"save\" in the given string str1.",
      "trace": {
        "code": "str1=\"save paper,save trees\"\nstr1.find(\"save\")",
        "output": "0\n",
        "error": null
      },
      "explanation": "find searches left to right and returns the starting index of the first match. Here the first save starts at index 0."
    },
    {
      "id": "S3-233",
      "srNo": 233,
      "question": "Which  of the following will give \"Aryan\" as output?\nstr1=\"Vishv,Aryan,Devarsh\"",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "print(str1[-9:-12])",
        "print(str1[-12:-7])",
        "print(str1[-13:-6])",
        "print(str1[-13:-8])"
      ],
      "answer": "D",
      "correct": "print(str1[-13:-8])",
      "explanation": "Negative slicing counts from the end. The selected slice isolates Aryan and excludes the ending comma."
    },
    {
      "id": "S3-234",
      "srNo": 234,
      "question": "What  will following Python code return?\nstr1=\"LJ University\"\nprint(len(str1))",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "13",
        "12",
        "11",
        "14"
      ],
      "answer": "A",
      "correct": "13",
      "trace": {
        "code": "str1=\"LJ University\"\nprint(len(str1))",
        "output": "13\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-235",
      "srNo": 235,
      "question": "What  will be the output of the following Python statement?\n\"abcdef\"[2:8]",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "cde",
        "cdef",
        "bcdef",
        "def"
      ],
      "answer": "B",
      "correct": "cdef",
      "explanation": "The stop index beyond the length is clipped. Starting at index 2 returns cdef."
    },
    {
      "id": "S3-236",
      "srNo": 236,
      "question": "What  will be the output of the following Python statement?\nprint('new' 'line')",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "Error",
        "Output equivalent to print ‘new\\nline’",
        "new line",
        "newline"
      ],
      "answer": "D",
      "correct": "newline",
      "trace": {
        "code": "print('new' 'line')",
        "output": "newline\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-237",
      "srNo": 237,
      "question": "What  will be the output of the following Python code?\nstr1=\"hello world\"\nstr1[::-1]",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "hello",
        "world",
        "dlrow olleh",
        "hello world"
      ],
      "answer": "C",
      "correct": "dlrow olleh",
      "trace": {
        "code": "str1=\"hello world\"\nstr1[::-1]",
        "output": "dlrow olleh\n",
        "error": null
      },
      "explanation": "Step -1 traverses the whole string backwards: dlrow olleh."
    },
    {
      "id": "S3-238",
      "srNo": 238,
      "question": "What will be the output of the following Python code?\nx = ['ab', 'cd']\nfor i in x:\n  i.upper()\nprint(x)",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "[‘ab’, ‘cd’]",
        "[‘AB’, ‘CD’]",
        "[None, None]",
        "none of the mentioned"
      ],
      "answer": "A",
      "correct": "[‘ab’, ‘cd’]",
      "trace": {
        "code": "x = ['ab', 'cd']\nfor i in x:\n  i.upper()\nprint(x)",
        "output": "['ab', 'cd']\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-239",
      "srNo": 239,
      "question": "What will be the output of the following Python code?\nx = 'abcd'\nfor i in range(len(x)):\n  i.upper()\nprint (x)",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "a b c d",
        "0 1 2 3",
        "error",
        "None of mentioned"
      ],
      "answer": "C",
      "correct": "error",
      "trace": {
        "code": "x = 'abcd'\nfor i in range(len(x)):\n  i.upper()\nprint (x)",
        "output": "",
        "error": "AttributeError: 'int' object has no attribute 'upper'"
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-240",
      "srNo": 240,
      "question": "What  will be the output of the following Python code?\nprint('abcd1234'.isalnum())",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "True",
        "False",
        "None",
        "Error"
      ],
      "answer": "A",
      "correct": "True",
      "trace": {
        "code": "print('abcd1234'.isalnum())",
        "output": "True\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-241",
      "srNo": 241,
      "question": "Select the correct output of the following String operations.\nstr1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.count(sub, 5))",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "5",
        "7",
        "6",
        "4"
      ],
      "answer": "C",
      "correct": "6",
      "trace": {
        "code": "str1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.count(sub, 5))",
        "output": "6\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-242",
      "srNo": 242,
      "question": "What  is the output of the following string comparison.\nprint(\"John\" > \"Jhon\")\nprint(\"Emma\" < \"Emm\")",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "True\nTrue",
        "True\nFalse",
        "False\nTrue",
        "False\nFalse"
      ],
      "answer": "B",
      "correct": "True\nFalse",
      "trace": {
        "code": "print(\"John\" > \"Jhon\")\nprint(\"Emma\" < \"Emm\")",
        "output": "True\nFalse\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-243",
      "srNo": 243,
      "question": " Select the correct output of the following String operations.\nstr1 = 'Welcome'\nprint (str1[:6] + 'LJIET')",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "WelcoLJIET",
        "Welcome LJIET",
        "WelcomeLJIET",
        "WelcomLJIET"
      ],
      "answer": "D",
      "correct": "WelcomLJIET",
      "trace": {
        "code": "str1 = 'Welcome'\nprint (str1[:6] + 'LJIET')",
        "output": "WelcomLJIET\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-244",
      "srNo": 244,
      "question": "Guess the correct output of the following code?\nstr1 = \"LJIET\"\nprint(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "JIE LJIET T LJIE LJIE",
        "JIE LJIET T LJI LJI",
        "JIE LJIET T LJIET LJIET",
        "JIE LJIET T LJIE LJI"
      ],
      "answer": "A",
      "correct": "JIE LJIET T LJIE LJIE",
      "trace": {
        "code": "str1 = \"LJIET\"\nprint(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])",
        "output": "JIE LJIET T LJIE LJIE\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-245",
      "srNo": 245,
      "question": "Which  of the following is a Python tuple?",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "[1, 2, 3]",
        "(1, 2, 3)",
        "{1, 2, 3}",
        "{}"
      ],
      "answer": "B",
      "correct": "(1, 2, 3)",
      "explanation": "Comma-separated values inside parentheses form a tuple; brackets form a list."
    },
    {
      "id": "S3-246",
      "srNo": 246,
      "question": "Which  of the following creates a tuple?",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "tuple1=(5)*2",
        "tuple1=(\"a\",\"b\")",
        "tuple1[2]=(\"a\",\"b\")",
        "None of the above"
      ],
      "answer": "B",
      "correct": "tuple1=(\"a\",\"b\")",
      "explanation": "The two comma-separated strings create a tuple. A single-element tuple requires a trailing comma."
    },
    {
      "id": "S3-247",
      "srNo": 247,
      "question": "What  type will be printed when the following code executes?\naTuple = (\"Orange\")\nprint (type(aTuple))",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "list",
        "tuple",
        "array",
        "str"
      ],
      "answer": "D",
      "correct": "str",
      "trace": {
        "code": "aTuple = (\"Orange\")\nprint (type(aTuple))",
        "output": "<class 'str'>\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-248",
      "srNo": 248,
      "question": "What  will the following code return?\ndef practice(tup):\n  a, b, c = tup\n  return b\naTuple = \"Orange\", 30, \"White\"\npractice(aTuple)",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "Orange",
        "30",
        "White",
        "(\"Orange\", 30, \"White\")"
      ],
      "answer": "B",
      "correct": "30",
      "trace": {
        "code": "def practice(tup):\n  a, b, c = tup\n  return b\naTuple = \"Orange\", 30, \"White\"\npractice(aTuple)",
        "output": "30\n",
        "error": null
      },
      "explanation": "Unpacking assigns Orange to a, 30 to b and White to c; return b returns 30."
    },
    {
      "id": "S3-249",
      "srNo": 249,
      "question": "Suppose t = (1, 2, 4, 3), which of the following is incorrect?",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "print(t[3])",
        "t[3] = 45",
        "print(max(t))",
        "print(len(t))"
      ],
      "answer": "B",
      "correct": "t[3] = 45",
      "explanation": "Tuple items cannot be reassigned; t[3] = 45 raises TypeError."
    },
    {
      "id": "S3-250",
      "srNo": 250,
      "question": "What  will be the output of the following Python code?\nt=(1,2,4,3)\nt[1:3]",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "(1, 2)",
        "(1, 2, 4)",
        "(2, 4)",
        "(2, 4, 3)"
      ],
      "answer": "C",
      "correct": "(2, 4)",
      "trace": {
        "code": "t=(1,2,4,3)\nt[1:3]",
        "output": "(2, 4)\n",
        "error": null
      },
      "explanation": "Slice [1:3] includes indices 1 and 2, producing (2,4)."
    },
    {
      "id": "S3-251",
      "srNo": 251,
      "question": "What  will be the output of the following Python code?\nt=(1,2,4,3)\nt[1:-1]",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "(1, 2)",
        "(1, 2, 4)",
        "(2, 4)",
        "(2, 4, 3)"
      ],
      "answer": "C",
      "correct": "(2, 4)",
      "trace": {
        "code": "t=(1,2,4,3)\nt[1:-1]",
        "output": "(2, 4)\n",
        "error": null
      },
      "explanation": "Stop -1 excludes the last element, so indices 1 and 2 yield (2,4)."
    },
    {
      "id": "S3-252",
      "srNo": 252,
      "question": "What  will be the output of the following Python code?\nt1 = (1, 2, 4, 3)\nt2 = (1, 2, 3, 4)\nt1 < t2",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "True",
        "False",
        "Error",
        "None"
      ],
      "answer": "B",
      "correct": "False",
      "trace": {
        "code": "t1 = (1, 2, 4, 3)\nt2 = (1, 2, 3, 4)\nt1 < t2",
        "output": "False\n",
        "error": null
      },
      "explanation": "Tuples compare lexicographically. At the first differing position 4 is greater than 3, so t1 < t2 is False."
    },
    {
      "id": "S3-253",
      "srNo": 253,
      "question": "What  will be the output of the following Python code?\nmy_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint len(my_tuple)",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "1",
        "2",
        "5",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "explanation": "In Python 3, print len(...) is invalid syntax. Even with print(len(...)), tuples have no append method and would raise AttributeError."
    },
    {
      "id": "S3-254",
      "srNo": 254,
      "question": "What  is the data type of (1)?",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "Tuple",
        "Integer",
        "List",
        "Both tuple and integer"
      ],
      "answer": "B",
      "correct": "Integer",
      "explanation": "Parentheses alone group an expression: (1) is int. (1,) is a one-element tuple."
    },
    {
      "id": "S3-255",
      "srNo": 255,
      "question": "If a=(1,2,3,4), a[1:-1] is _________",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "Error, tuple slicing doesn’t exist",
        "[2,3]",
        "(2,3,4)",
        "(2,3)"
      ],
      "answer": "D",
      "correct": "(2,3)",
      "explanation": "a[1:-1] takes the middle two elements and excludes the endpoints: (2,3)."
    },
    {
      "id": "S3-256",
      "srNo": 256,
      "question": "What  will be the output of the following Python code?\n a=(1,2,(4,5))\n b=(1,2,(3,4))\n a<b",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "False",
        "True",
        "Error, < operator is not valid for tuples",
        "Error, < operator is valid for tuples but not if there are sub-\ntuples"
      ],
      "answer": "A",
      "correct": "False",
      "trace": {
        "code": "a=(1,2,(4,5))\nb=(1,2,(3,4))\na<b",
        "output": "False\n",
        "error": null
      },
      "explanation": "The first two entries tie; compare nested tuples next. 4 > 3, so a < b is False."
    },
    {
      "id": "S3-257",
      "srNo": 257,
      "question": "Is the following Python code valid?\n a=(1,2,3,4)\n del a",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "No because tuple is immutable",
        "Yes, first element in the tuple is deleted",
        "Yes, the entire tuple is deleted",
        "No, invalid syntax for del method"
      ],
      "answer": "C",
      "correct": "Yes, the entire tuple is deleted",
      "explanation": "del a removes the variable binding. This differs from deleting an item, which a tuple does not allow."
    },
    {
      "id": "S3-258",
      "srNo": 258,
      "question": "What  will be the output of the following Python code?\n a=(0,1,2,3,4)\n b=slice(0,2)\n a[b]",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "Invalid syntax for slicing",
        "[0,2]",
        "(0,1)",
        "(0,2)"
      ],
      "answer": "C",
      "correct": "(0,1)",
      "trace": {
        "code": "a=(0,1,2,3,4)\nb=slice(0,2)\na[b]",
        "output": "(0, 1)\n",
        "error": null
      },
      "explanation": "slice(0,2) selects tuple indices 0 and 1, returning (0,1)."
    },
    {
      "id": "S3-259",
      "srNo": 259,
      "question": "Choose  the correct option for Tuple.",
      "marks": 1.0,
      "sourcePage": 20,
      "options": [
        "In Python, a tuple can contain only integers\nas its elements.",
        "In Python, a tuple can contain only strings as its\nelements.",
        "In Python, a tuple can contain both integers and strings as its\nelements.",
        "In Python, a tuple can contain either string or integer but\nnot both at a time."
      ],
      "answer": "C",
      "correct": "In Python, a tuple can contain both integers and strings as its\nelements.",
      "explanation": "Tuples may contain mixed types, including integers and strings; only their element bindings are immutable."
    },
    {
      "id": "S3-260",
      "srNo": 260,
      "question": "What  will be the output of below Python code?\ntupl=(\"annie\",\"hena\",\"sid\")\nprint(tupl[-3:0])",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "(\"annie\")",
        "()",
        "None",
        "Error as slicing is not possible in tuple."
      ],
      "answer": "B",
      "correct": "()",
      "trace": {
        "code": "tupl=(\"annie\",\"hena\",\"sid\")\nprint(tupl[-3:0])",
        "output": "()\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-261",
      "srNo": 261,
      "question": "Which  of the following options will not result in an error when performed on tuples in Python where\ntupl=(5,2,7,0,3)?",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "tupl[1]=2",
        "tupl.append(2)",
        "tupl1=tupl+tupl",
        "tupl.sort()"
      ],
      "answer": "C",
      "correct": "tupl1=tupl+tupl",
      "explanation": "Tuple concatenation creates a new tuple and is allowed; assigning a new tuple does not mutate the old one."
    },
    {
      "id": "S3-262",
      "srNo": 262,
      "question": "Which  of the following options will result in an error when performed on tuples in Python where tupl=(1, 21 , 17,\n50, 33)?",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "tupl.append(2)",
        "tupl.pop(1)",
        "tupl.remove(21)",
        "All of the mentioned"
      ],
      "answer": "D",
      "correct": "All of the mentioned",
      "explanation": "Tuple mutation methods and element assignments are unavailable because tuples are immutable."
    },
    {
      "id": "S3-263",
      "srNo": 263,
      "question": "What  will be the output of below Python code?\ntupl=([2,3],\"abc\",0,9)\ntupl[0][1]=1\nprint(tupl)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "([2,3],\"abc\",0,9)",
        "([1,3],\"abc\",0,9)",
        "([2,1],\"abc\",0,9)",
        "Error"
      ],
      "answer": "C",
      "correct": "([2,1],\"abc\",0,9)",
      "trace": {
        "code": "tupl=([2,3],\"abc\",0,9)\ntupl[0][1]=1\nprint(tupl)",
        "output": "([2, 1], 'abc', 0, 9)\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-264",
      "srNo": 264,
      "question": "Which  of the following two Python codes will give same output?\n(i) print(tupl[:-1])\n(ii) print(tupl[0:5])\n(iii) print(tupl[0:4])\n(iv) print(tupl[-4:])\nIf tupl=(5,3,1,9,0)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "i, ii",
        "ii, iv",
        "i, iv",
        "i, iii"
      ],
      "answer": "D",
      "correct": "i, iii",
      "explanation": "[:-1] and [0:4] both return the first four values of the five-element tuple."
    },
    {
      "id": "S3-265",
      "srNo": 265,
      "question": "Which  of the following would complete val = to set val to 20 by slicing aTuple.\naTuple = (\"Orange\", (10, 20, 30), (5, 15, 25))\nval =",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "val = aTuple[1][1]",
        "val = aTuple[1:2](1)",
        "val = aTuple[2][1]",
        "val = aTuple[1:2][1]"
      ],
      "answer": "A",
      "correct": "val = aTuple[1][1]",
      "explanation": "Index 1 selects (10,20,30); its index 1 is 20."
    },
    {
      "id": "S3-266",
      "srNo": 266,
      "question": "What  is the output of the following.\naTuple = (10, 20, 30, 40, 50, 60, 70, 80)\nprint(aTuple[2:5], aTuple[:4], aTuple[3:])",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70)",
        "(30, 40, 50) (10, 20, 30) (40, 50, 60)",
        "(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70, 80)",
        "None of the these"
      ],
      "answer": "C",
      "correct": "(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70, 80)",
      "trace": {
        "code": "aTuple = (10, 20, 30, 40, 50, 60, 70, 80)\nprint(aTuple[2:5], aTuple[:4], aTuple[3:])",
        "output": "(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70, 80)\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-267",
      "srNo": 267,
      "question": "What  will be the output of the following Python code?\nt = (1, 2, 4, 3, 8, 9)\nfor i in range(0, len(t), 2):\n  print(t[i],end=\" \")",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "1 4 9",
        "2 3 9",
        "1 2 4",
        "1 4 8"
      ],
      "answer": "D",
      "correct": "1 4 8",
      "trace": {
        "code": "t = (1, 2, 4, 3, 8, 9)\nfor i in range(0, len(t), 2):\n  print(t[i],end=\" \")",
        "output": "1 4 8 ",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-268",
      "srNo": 268,
      "question": "Find the output of the given Python program\nt1 = (1,2)\nt2 = (2,1)\nx = (t1 == t2)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "False",
        "True",
        "Error",
        "None"
      ],
      "answer": "A",
      "correct": "False",
      "trace": {
        "code": "t1 = (1,2)\nt2 = (2,1)\nx = (t1 == t2)\nprint(x)",
        "output": "False\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-269",
      "srNo": 269,
      "question": "What  will be the output of the following python code?\nstr1=\"Hello World! Hello Hello\"\nstr1.count(\"Hello\",12,25)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "B",
      "correct": "2",
      "trace": {
        "code": "str1=\"Hello World! Hello Hello\"\nstr1.count(\"Hello\",12,25)",
        "output": "2\n",
        "error": null
      },
      "explanation": "Search the slice beginning at index 12; it contains two complete Hello occurrences."
    },
    {
      "id": "S3-270",
      "srNo": 270,
      "question": "What  is the output of the following code?\na=\"Hello Welcome  to the Python\"\nprint(a.find(\"z\"))\nprint(a.index(\"z\"))",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "Value Error\n-1",
        "-1\nValue Error",
        "1\nSyntax Error",
        "Syntax Error\n1"
      ],
      "answer": "B",
      "correct": "-1\nValue Error",
      "trace": {
        "code": "a=\"Hello Welcome  to the Python\"\nprint(a.find(\"z\"))\nprint(a.index(\"z\"))",
        "output": "-1\n",
        "error": "ValueError: substring not found"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-271",
      "srNo": 271,
      "question": "S = \"1234567890\"\nS = S[-3] + S[2:4] + S[-2:-5] + S[ : -4:-2] + S[1: :2]\nprint(S[ : : 3] * 2)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "80408040",
        "86068606",
        "14701470",
        "None"
      ],
      "answer": "A",
      "correct": "80408040",
      "trace": {
        "code": "S = \"1234567890\"\nS = S[-3] + S[2:4] + S[-2:-5] + S[ : -4:-2] + S[1: :2]\nprint(S[ : : 3] * 2)",
        "output": "80408040\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-272",
      "srNo": 272,
      "question": "What  will be the output of the following code?\nt1=(1,2,3,4,5,6,7)\nprint(t1[t1[1]+t1[-4]])",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "1",
        "2",
        "7",
        "4"
      ],
      "answer": "C",
      "correct": "7",
      "trace": {
        "code": "t1=(1,2,3,4,5,6,7)\nprint(t1[t1[1]+t1[-4]])",
        "output": "7\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-273",
      "srNo": 273,
      "question": "What  will be the output of the following piece of code?\ndef check(s):\n  if len(s) <= 1:\n    return True\n  else:\n    return s[0] == s[-1] and check(s[1:-1])\nprint(check('saippuakivkauppias'))",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "True",
        "False",
        "s",
        "k"
      ],
      "answer": "B",
      "correct": "False",
      "trace": {
        "code": "def check(s):\n  if len(s) <= 1:\n    return True\n  else:\n    return s[0] == s[-1] and check(s[1:-1])\nprint(check('saippuakivkauppias'))",
        "output": "False\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-274",
      "srNo": 274,
      "question": "What  will be the output of the following Python code?\ns=\"Th*is is$ nothi&&ng b#ut excerc(is)e\"\nchange=str.maketrans(\"(\",\",\",\"@#$%^&*_-)\")\ns.translate(change)\nprint(s)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "Th*is is$ nothi&&ng b#ut excerc(is)e",
        "This is nothing but excerc,ise",
        "This is nothing but exercise",
        "NameError: name ‘str’ not defined"
      ],
      "answer": "A",
      "correct": "Th*is is$ nothi&&ng b#ut excerc(is)e",
      "trace": {
        "code": "s=\"Th*is is$ nothi&&ng b#ut excerc(is)e\"\nchange=str.maketrans(\"(\",\",\",\"@#$%^&*_-)\")\ns.translate(change)\nprint(s)",
        "output": "Th*is is$ nothi&&ng b#ut excerc(is)e\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-275",
      "srNo": 275,
      "question": "Which  of the following will give \"Simon\" as output?\nstr1=\"John,Simon,Aryan\"",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "print(str1[-11:-6])",
        "print(str1[-7:-12])",
        "print(str1[-11:-7])",
        "print(str1[-11:-5])"
      ],
      "answer": "A",
      "correct": "print(str1[-11:-6])",
      "explanation": "Convert the negative indices relative to the string end; the slice selects Simon."
    },
    {
      "id": "S3-276",
      "srNo": 276,
      "question": "What  will be the output of the following program?\ns = \"ball\"\nr = \"\"\nfor i in s:\n  r = i.upper() + r\nprint(r)",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "LLB",
        "BALL",
        "Error",
        "LLAB"
      ],
      "answer": "D",
      "correct": "LLAB",
      "trace": {
        "code": "s = \"ball\"\nr = \"\"\nfor i in s:\n  r = i.upper() + r\nprint(r)",
        "output": "LLAB\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-277",
      "srNo": 277,
      "question": "What  will be the output of the following program?\ns = 'I love my INDIA'\nprint(s[-1]+s[3:4]+s[7:9]+s[-3:-1]+s[-1:-3:-1]+s[5:9]+s[10:] )",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "AomyDIAIe myINDIA",
        "AomyDIIe myINDIA",
        "AomyDIAIe myINDI",
        "AomyDAIe myINDIA"
      ],
      "answer": "A",
      "correct": "AomyDIAIe myINDIA",
      "trace": {
        "code": "s = 'I love my INDIA'\nprint(s[-1]+s[3:4]+s[7:9]+s[-3:-1]+s[-1:-3:-1]+s[5:9]+s[10:] )",
        "output": "AomyDIAIe myINDIA\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-278",
      "srNo": 278,
      "question": "When  using find(), If str is not present in string then what is returned?",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "0",
        "1",
        "-1",
        "NameError"
      ],
      "answer": "C",
      "correct": "-1",
      "explanation": "find returns -1 when the substring is absent; index would raise ValueError instead."
    },
    {
      "id": "S3-279",
      "srNo": 279,
      "question": "What is the output for following code:\ns=\"blog\"\nfor i in range(-1,-len(s),-1):\n  print(s[i],end=\"$\")",
      "marks": 1.0,
      "sourcePage": 21,
      "options": [
        "g$o$l$b",
        "g$o$l$b$",
        "g$o$l$",
        "glob"
      ],
      "answer": "C",
      "correct": "g$o$l$",
      "trace": {
        "code": "s=\"blog\"\nfor i in range(-1,-len(s),-1):\n  print(s[i],end=\"$\")",
        "output": "g$o$l$",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-280",
      "srNo": 280,
      "question": "What is the output for following code:\nprint(\"A#B#C#D#E\".split(\"#\",2))",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "['A', 'B', 'C', 'D', 'E']",
        "['A', 'B', 'C#D#E']",
        "['A#', 'B#', 'C#', 'D#', 'E']",
        "Error"
      ],
      "answer": "B",
      "correct": "['A', 'B', 'C#D#E']",
      "trace": {
        "code": "print(\"A#B#C#D#E\".split(\"#\",2))",
        "output": "['A', 'B', 'C#D#E']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-281",
      "srNo": 281,
      "question": "What is the output for following code:\nfor i in range (len(\"python\"),12,2):\n  print(\"python\"[i-6],end=\"\")",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "python",
        "pto",
        "yhn",
        "pyth"
      ],
      "answer": "B",
      "correct": "pto",
      "trace": {
        "code": "for i in range (len(\"python\"),12,2):\n  print(\"python\"[i-6],end=\"\")",
        "output": "pto",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-282",
      "srNo": 282,
      "question": "What will be the output of the following Python code?\nx = 'abcd'\nfor i in x:\n  i.isupper()\nprint (x)",
      "marks": 0.5,
      "sourcePage": 22,
      "options": [
        "abcd",
        "0 1 2 3",
        "ABCD",
        "Error"
      ],
      "answer": "A",
      "correct": "abcd",
      "trace": {
        "code": "x = 'abcd'\nfor i in x:\n  i.isupper()\nprint (x)",
        "output": "abcd\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-283",
      "srNo": 283,
      "question": "What will be the output of the following Python code?\nt=(1,2,4,3,6,8,4)\nt[1:-1:-1]",
      "marks": 0.5,
      "sourcePage": 22,
      "options": [
        "(2,4,3,6,8)",
        "(2,1)",
        "()",
        "(4,8)"
      ],
      "answer": "C",
      "correct": "()",
      "trace": {
        "code": "t=(1,2,4,3,6,8,4)\nt[1:-1:-1]",
        "output": "()\n",
        "error": null
      },
      "explanation": "With a negative step, start must lie after stop in traversal order. Index 1 is before the resolved stop, so the slice is empty."
    },
    {
      "id": "S3-284",
      "srNo": 284,
      "question": "What will be the output of the following Python code?\nmy_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint (len(my_tuple))",
      "marks": 0.5,
      "sourcePage": 22,
      "options": [
        "4",
        "7",
        "5",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "trace": {
        "code": "my_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint (len(my_tuple))",
        "output": "",
        "error": "AttributeError: 'tuple' object has no attribute 'append'"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-285",
      "srNo": 285,
      "question": "What will be the output of the following Python code?\ndef enc(st):\n  encoded=\"\"\n  c=1\n  ld=st[0]\n  for i in range (1,len(st)):\n    if ld==st[i]:\n      c=c+1\n    else:\n      encoded=encoded+str(c)+ld\n      c=0\n      ld=st[i]\n      c=c+1\n  encoded=encoded+str(c)+ld\n  return encoded\nst=\"AAABBACCAA\"\nprint(enc(st))",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "A3B2A1C2A2",
        "3A2B1A2C2A",
        "10",
        "Error"
      ],
      "answer": "B",
      "correct": "3A2B1A2C2A",
      "trace": {
        "code": "def enc(st):\n  encoded=\"\"\n  c=1\n  ld=st[0]\n  for i in range (1,len(st)):\n    if ld==st[i]:\n      c=c+1\n    else:\n      encoded=encoded+str(c)+ld\n      c=0\n      ld=st[i]\n      c=c+1\n  encoded=encoded+str(c)+ld\n  return encoded\nst=\"AAABBACCAA\"\nprint(enc(st))",
        "output": "3A2B1A2C2A\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-286",
      "srNo": 286,
      "question": "What will be the output of the following Python code?\ns=\"aa\"\ns.strip(\"a\")\nprint(s)",
      "marks": 0,
      "sourcePage": 22,
      "options": [
        "aa",
        "a",
        "error",
        "True"
      ],
      "answer": "A",
      "correct": "aa",
      "trace": {
        "code": "s=\"aa\"\ns.strip(\"a\")\nprint(s)",
        "output": "aa\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-287",
      "srNo": 287,
      "question": "What will be the output of the following Python code?\ns=\"1234ABCvhghbbv\"\nv=s.maketrans(\"abc\",\"vvv\")\nprint(s.translate(v))",
      "marks": 0,
      "sourcePage": 22,
      "options": [
        "vvv",
        "1234vhghvvv",
        "1234vhg",
        "1234ABCvhghvvv"
      ],
      "answer": "D",
      "correct": "1234ABCvhghvvv",
      "trace": {
        "code": "s=\"1234ABCvhghbbv\"\nv=s.maketrans(\"abc\",\"vvv\")\nprint(s.translate(v))",
        "output": "1234ABCvhghvvv\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-288",
      "srNo": 288,
      "question": "What is returned by the following function?\nshift=1\nn=12345\ns=str(n)\nx=s[shift:]+s[:shift]\nprint(x)",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "12345",
        "23451",
        "34512",
        "54321"
      ],
      "answer": "B",
      "correct": "23451",
      "trace": {
        "code": "shift=1\nn=12345\ns=str(n)\nx=s[shift:]+s[:shift]\nprint(x)",
        "output": "23451\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-289",
      "srNo": 289,
      "question": "What will following Python code return?\nstr1=\"LJ’University\"\nprint(len(str1))",
      "marks": 0.5,
      "sourcePage": 22,
      "options": [
        "13",
        "12",
        "15",
        "2"
      ],
      "answer": "A",
      "correct": "13",
      "trace": {
        "code": "str1=\"LJ'University\"\nprint(len(str1))",
        "output": "13\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-290",
      "srNo": 290,
      "question": "What will be the output of below Python code?\ntupl=()\ntupl1=tupl*2\nprint(len(tupl1))",
      "marks": 0.5,
      "sourcePage": 22,
      "options": [
        "0",
        "2",
        "1",
        "10"
      ],
      "answer": "A",
      "correct": "0",
      "trace": {
        "code": "tupl=()\ntupl1=tupl*2\nprint(len(tupl1))",
        "output": "0\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-291",
      "srNo": 291,
      "question": "What will be the output of the following program on execution?\nA=(5,3,2)\nB=(5,3,2)\nprint(len(A+B*3))",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "6",
        "9",
        "12",
        "3"
      ],
      "answer": "C",
      "correct": "12",
      "trace": {
        "code": "A=(5,3,2)\nB=(5,3,2)\nprint(len(A+B*3))",
        "output": "12\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-292",
      "srNo": 292,
      "question": "Select the correct output of the following String operations.\nstr1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.find(sub,4,11))",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "10",
        "11",
        "1",
        "None of the mentioned"
      ],
      "answer": "D",
      "correct": "None of the mentioned",
      "trace": {
        "code": "str1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.find(sub,4,11))",
        "output": "-1\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-293",
      "srNo": 293,
      "question": "Select the correct output of the following String operations.\nstr1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.find(sub,4,12))",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "10",
        "11",
        "-1",
        "12"
      ],
      "answer": "A",
      "correct": "10",
      "trace": {
        "code": "str1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.find(sub,4,12))",
        "output": "10\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-294",
      "srNo": 294,
      "question": "What will be the output of the following Python code?\nS = \"1234567890\"\nS = S[-3] + S[2:4] + S[-5:-2] + S[-4:-2] + S[1:2]\nprint(S[::3] * 2)",
      "marks": 1.0,
      "sourcePage": 22,
      "options": [
        "8674086740",
        "867867",
        "860860",
        "840840"
      ],
      "answer": "B",
      "correct": "867867",
      "trace": {
        "code": "S = \"1234567890\"\nS = S[-3] + S[2:4] + S[-5:-2] + S[-4:-2] + S[1:2]\nprint(S[::3] * 2)",
        "output": "867867\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    }
  ],
  "coding": [
    {
      "id": "S3-C295",
      "srNo": 295,
      "question": "Write a Python program to check if a string is palindrome or not.",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "s = input('String: ')\nprint('Palindrome' if s == s[::-1] else 'Not palindrome')",
      "explanation": "A palindrome equals its reverse. This checks exact characters including case and spaces.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "madam"
      ],
      "exampleOutput": "Palindrome"
    },
    {
      "id": "S3-C296",
      "srNo": 296,
      "question": "Write a Python program to Find length of a string in python.",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "print(len(input('String: ')))",
      "explanation": "len counts the characters in the string.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello"
      ],
      "exampleOutput": "5"
    },
    {
      "id": "S3-C297",
      "srNo": 297,
      "question": "Write a Python function to find length of a string in python without using len function.",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "def length(s):\n    count = 0\n    for character in s:\n        count += 1\n    return count\nprint(length(input('String: ')))",
      "explanation": "Count one per character without len().",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello"
      ],
      "exampleOutput": "5"
    },
    {
      "id": "S3-C298",
      "srNo": 298,
      "question": "Write a Python function that accepts a string and calculate the number of uppercase letters and lowercase letters.",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "def count_characters(s):\n    upper = lower = digits = 0\n    for c in s:\n        if c.isupper(): upper += 1\n        elif c.islower(): lower += 1\n        elif c.isdigit(): digits += 1\n    print('Uppercase:', upper, 'Lowercase:', lower, 'Digits:', digits)\ncount_characters(input('String: '))",
      "explanation": "Character methods classify each character; spaces and symbols are ignored.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "Hello Pyth@n is 100% easy"
      ],
      "exampleOutput": "Uppercase: 2 Lowercase: 14 Digits: 3"
    },
    {
      "id": "S3-C299",
      "srNo": 299,
      "question": "Write a Python program to demonstrate the negative index in a Tuple",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "values = (10, 20, 30, 40)\nprint(values[-1])\nprint(values[-2])\nprint(values[-4])",
      "explanation": "Negative indices count backwards: -1 is the last element. Output: 40, 30, 10.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleOutput": "40\n30\n10"
    },
    {
      "id": "S3-C300",
      "srNo": 300,
      "question": "Write a program to remove I'th character from string in python.",
      "marks": 3.0,
      "sourcePage": 22,
      "solution": "s = input('String: ')\ni = int(input('Index to remove (zero-based): '))\nif 0 <= i < len(s): print(s[:i] + s[i+1:])\nelse: print('Index out of range')",
      "explanation": "Concatenate everything before and after the chosen index. Strings are immutable.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello",
        "1"
      ],
      "exampleOutput": "hllo"
    },
    {
      "id": "S3-C301",
      "srNo": 301,
      "question": "Write a program to create a string made of first,middle and last character.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s = input('String: ')\nif s: print(s[0] + s[len(s)//2] + s[-1])\nelse: print('Empty string')",
      "explanation": "Use indices 0, len(s)//2 and -1. For even lengths this chooses the right middle character.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello"
      ],
      "exampleOutput": "hlo"
    },
    {
      "id": "S3-C302",
      "srNo": 302,
      "question": "Write a program to find all occuences of a sub string in a given string by ignoring the case.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s = input('Text: ').lower()\nsub = input('Substring: ').lower()\nif not sub: raise ValueError('Substring cannot be empty')\npositions = [i for i in range(len(s) - len(sub) + 1) if s[i:i+len(sub)] == sub]\nprint('Positions:', positions)\nprint('Count:', len(positions))",
      "explanation": "Compare after converting both to lowercase. Sliding over each index also finds overlapping occurrences.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "Hello hello HELLO",
        "hello"
      ],
      "exampleOutput": "Positions: [0, 6, 12]\nCount: 3"
    },
    {
      "id": "S3-C303",
      "srNo": 303,
      "question": "Write a python program that prompts the user to enter a string and calculate the sum and average of the digits\npresent in a string.\nExample 1:\nString: \"abc123xyz\"\nSum of digits = 6\nAverage of digits = 2.0 Example 2:\nString: \"Tuesday\"\nNo digits found in the string.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "digits = [int(c) for c in input('String: ') if c in '0123456789']\nprint('Sum:', sum(digits))\nprint('Average:', sum(digits)/len(digits) if digits else 'No digits')",
      "explanation": "Extract individual decimal digits, add them, then divide by the count. Guard the no-digit case.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "abc123xyz"
      ],
      "exampleOutput": "Sum: 6\nAverage: 2.0"
    },
    {
      "id": "S3-C304",
      "srNo": 304,
      "question": "Write a program to reverse a given string",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "print(input('String: ')[::-1])",
      "explanation": "A slice with step -1 visits characters in reverse order.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello"
      ],
      "exampleOutput": "olleh"
    },
    {
      "id": "S3-C305",
      "srNo": 305,
      "question": "Write a Python program to print even length words in a string.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "for word in input('Sentence: ').split():\n    if len(word) % 2 == 0: print(word)",
      "explanation": "Split into words, then select words with an even character count.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "This is a simple test"
      ],
      "exampleOutput": "This\nis\nsimple\ntest"
    },
    {
      "id": "S3-C306",
      "srNo": 306,
      "question": "Write a Python program to Uppercase Half String from the given string.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s = input('String: ')\nmiddle = len(s)//2\nprint(s[:middle] + s[middle:].upper())",
      "explanation": "Keep the first half unchanged and uppercase the second half; an odd-length middle belongs to the second half.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "python"
      ],
      "exampleOutput": "pytHON"
    },
    {
      "id": "S3-C307",
      "srNo": 307,
      "question": "Write a Python program to capitalize the first and last character of each word in a string",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "words = input('Sentence: ').split()\nprint(' '.join(w.upper() if len(w) == 1 else w[0].upper()+w[1:-1]+w[-1].upper() for w in words))",
      "explanation": "Uppercase the two end characters of each word and retain its interior.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "python is fun"
      ],
      "exampleOutput": "PythoN IS FuN"
    },
    {
      "id": "S3-C308",
      "srNo": 308,
      "question": "Write a program to Create a string made of the middle three characters",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s = input('Odd-length string: ')\nif len(s) < 3 or len(s) % 2 == 0: print('Enter an odd length of at least 3')\nelse:\n    mid = len(s)//2\n    print(s[mid-1:mid+2])",
      "explanation": "The three middle characters are at middle-1 through middle+1.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "abcde"
      ],
      "exampleOutput": "bcd"
    },
    {
      "id": "S3-C309",
      "srNo": 309,
      "question": "Write a program to check if two strings are balanced. For example, strings s1 and s2 are balanced if all the\ncharacters in the s1 are present in s2. The character’s position doesn’t matter.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s1, s2 = input('s1: '), input('s2: ')\nprint('Balanced' if all(c in s2 for c in s1) else 'Not balanced')",
      "explanation": "Use the question’s definition: each character in s1 must occur somewhere in s2; order and multiplicity do not matter here.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello",
        "olleh"
      ],
      "exampleOutput": "Balanced"
    },
    {
      "id": "S3-C310",
      "srNo": 310,
      "question": "Write a program to Split a string on hyphens",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "print(input('Hyphen-separated string: ').split('-'))",
      "explanation": "Pass the hyphen as the separator to split().",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "a-b-c"
      ],
      "exampleOutput": "['a', 'b', 'c']"
    },
    {
      "id": "S3-C311",
      "srNo": 311,
      "question": "Write a program to print maximum and minimum elements in given Tuple.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "t = tuple(map(int, input('Tuple values: ').split()))\nif t: print('Maximum:', max(t), 'Minimum:', min(t))\nelse: print('Empty tuple')",
      "explanation": "Parse space-separated integers into a tuple and compute its extrema.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "1 4 2"
      ],
      "exampleOutput": "Maximum: 4 Minimum: 1"
    },
    {
      "id": "S3-C312",
      "srNo": 312,
      "question": "Write a Program to print even numbers from given Tuple.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "t = tuple(map(int, input('Tuple values: ').split()))\nprint(tuple(n for n in t if n % 2 == 0))",
      "explanation": "Filter the tuple by remainder zero modulo 2.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "(2, 4)"
    },
    {
      "id": "S3-C313",
      "srNo": 313,
      "question": "Write a program to print sum of even numbers and sum of odd numbers from elements given in tuple.",
      "marks": 4.0,
      "sourcePage": 23,
      "solution": "t = tuple(map(int, input('Tuple values: ').split()))\nprint('Even sum:', sum(n for n in t if n % 2 == 0))\nprint('Odd sum:', sum(n for n in t if n % 2 != 0))",
      "explanation": "Accumulate even and odd elements separately.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "Even sum: 6\nOdd sum: 4"
    },
    {
      "id": "S3-C314",
      "srNo": 314,
      "question": "Write a Python program using function to shift the decimal digits n places to the left, wrapping the extra digits around. If\nshift > the number of digits of n, then reverse the string.\nNote:\nFunction will take two parameters:\n1. The number\n2. How much shift user want\nExample:\nInput: n=12345 shift=1\nOutput: Result=23451\nInput: n=12345 shift=3\nOutput: Result=45123\nInput: n=12345 shift=5\nOutput: Result=12345\nInput: n=12345 shift=6\nOutput: Result=54321",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "def shift_digits(n, shift):\n    s = str(n)\n    if shift < 0: raise ValueError('Use a nonnegative shift')\n    if shift > len(s): return s[::-1]\n    return s[shift:] + s[:shift]\nprint(shift_digits(int(input('Nonnegative number: ')), int(input('Shift: '))))",
      "explanation": "Follow the special rule: shift greater than the digit count reverses the string. Otherwise join the trailing slice and leading slice; equal length leaves it unchanged.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "12345",
        "3"
      ],
      "exampleOutput": "45123"
    },
    {
      "id": "S3-C315",
      "srNo": 315,
      "question": "Write a Python programme that accepts a string and calculate the number of uppercase letters, lowercase letters and\nnumber of digits.\nFor example,\nInput: Hello Pyth@n is 100% easy\nOutput:\nUppercase letters : 2\nLowercase letters : 14\nDigits : 3",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "def count_characters(s):\n    upper = lower = digits = 0\n    for c in s:\n        if c.isupper(): upper += 1\n        elif c.islower(): lower += 1\n        elif c.isdigit(): digits += 1\n    print('Uppercase:', upper, 'Lowercase:', lower, 'Digits:', digits)\ncount_characters(input('String: '))",
      "explanation": "Character methods classify each character; spaces and symbols are ignored.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "Hello Pyth@n is 100% easy"
      ],
      "exampleOutput": "Uppercase: 2 Lowercase: 14 Digits: 3"
    },
    {
      "id": "S3-C316",
      "srNo": 316,
      "question": "Write a python program to check the validity of a Password.\nPrimary conditions for password validation:\n1. Minimum 8 characters.\n2. The alphabet must be between [a-z]\n3. At least one alphabet should be of Upper Case [A-Z]\n4. At least 1 number or digit between [0-9]\n5. At least 1 character from [ _ or @ or $]\nExamples:\nInput: Ram@_f1234\nOutput: Valid Password\nInput: Rama_fo$ab\nOutput: Invalid Password\nExplanation: Number is missing\nInput: Rama#fo9c\nOutput: Invalid Password\nExplanation: Must consist from _ or @ or $",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "p = input('Password: ')\nvalid = len(p) >= 8 and any('a' <= c <= 'z' for c in p) and any('A' <= c <= 'Z' for c in p) and any(c in '0123456789' for c in p) and any(c in '_@$' for c in p)\nprint('Valid Password' if valid else 'Invalid Password')",
      "explanation": "All five conditions must be true: length, lowercase, uppercase, digit and one allowed special character.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "Ram@_f1234"
      ],
      "exampleOutput": "Valid Password"
    },
    {
      "id": "S3-C317",
      "srNo": 317,
      "question": "Write a Python program to return another string similar to the input string, but with its case inverted.\nFor example, input of “Mr. Ed” will result in “mR. eD” as the output string.\nNote: Use of built in swapcase function is prohibited.",
      "marks": 3.0,
      "sourcePage": 23,
      "solution": "s = input('String: ')\nresult = ''\nfor c in s:\n    if c.isupper(): result += c.lower()\n    elif c.islower(): result += c.upper()\n    else: result += c\nprint(result)",
      "explanation": "Change the case character by character without swapcase(); preserve symbols.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "Mr. Ed"
      ],
      "exampleOutput": "mR. eD"
    },
    {
      "id": "S3-C318",
      "srNo": 318,
      "question": "Write a Python program to create a Caesar encryption.\nNote: In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar\nshift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in\nwhich each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For\nexample, with a right shift of 3, A would be replaced by D, E would become H, and so on. The method is named\nafter Julius Caesar, who used it in his private correspondence.\nFor Example:\nInput Text : LJIET ENG\nShift : 3\nCipher: OMLHW HQJ",
      "marks": 3.0,
      "sourcePage": 24,
      "solution": "def caesar(text, shift):\n    result = ''\n    for c in text:\n        if 'A' <= c <= 'Z':\n            result += chr((ord(c) - ord('A') + shift) % 26 + ord('A'))\n        elif 'a' <= c <= 'z':\n            result += chr((ord(c) - ord('a') + shift) % 26 + ord('a'))\n        else:\n            result += c\n    return result\n\ntext = input('Text: ')\nshift = int(input('Shift: '))\nprint(caesar(text, shift))",
      "explanation": "Shift alphabetic characters modulo 26; keep spaces and punctuation. LJIET ENG with shift 3 gives OMLHW HQJ.",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "LJIET ENG",
        "3"
      ],
      "exampleOutput": "OMLHW HQJ"
    },
    {
      "id": "S3-C319",
      "srNo": 319,
      "question": "Write a program to check if two strings are balanced. For example, strings s1 and s2 are balanced if all the\ncharacters in the s1 are present in s2 and length of s1 & s2 should be same. The character’s position doesn’t\nmatter.\nExample :\ns1 = hello\ns2 = olleh\nBalanced",
      "marks": 4.0,
      "sourcePage": 24,
      "solution": "s1, s2 = input('s1: '), input('s2: ')\nprint('Balanced' if len(s1) == len(s2) and all(c in s2 for c in s1) else 'Not balanced')",
      "explanation": "Apply both explicitly stated conditions: equal length and every s1 character present in s2. For an anagram test with equal character frequencies, use sorted(s1) == sorted(s2).",
      "topic": "Strings and tuples",
      "starterCode": "",
      "exampleInputs": [
        "hello",
        "olleh"
      ],
      "exampleOutput": "Balanced"
    }
  ]
};
