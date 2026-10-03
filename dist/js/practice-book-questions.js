// ============================================================
// LJIET PYTHON-I PRACTICE BOOK (SEM-I 2026) - COMPLETE DATABASE
// ALL 210 QUESTIONS (Sr No 1 to 210) DIGITIZED FULLY
// ============================================================

const PRACTICE_BOOK = {
  unit1: {
    unit: 1,
    title: "UNIT 1 - Introduction to Computer & Algorithms (Q1 to Q38)",
    mcqs: [
      {
        id: "PB-001",
        srNo: 1,
        question: "According to Von Neumann model, what is stored in a memory?",
        options: ["only data", "only programs", "data and programs", "neither data nor programs"],
        answer: "C",
        correct: "data and programs",
        explanation: "Von Neumann architecture uses a single unified memory space to store both program instructions and operational data."
      },
      {
        id: "PB-002",
        srNo: 2,
        question: "What is the full form of CPU?",
        options: ["Computer Processing Unit", "Computer Principle Unit", "Central Processing Unit", "Control Processing Unit"],
        answer: "C",
        correct: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit."
      },
      {
        id: "PB-003",
        srNo: 3,
        question: "Which of the following is the brain of the computer?",
        options: ["Central Processing Unit", "Memory", "Arithmetic and Logic unit", "Control unit"],
        answer: "A",
        correct: "Central Processing Unit",
        explanation: "The CPU manages instructions, calculations, and overall system control."
      },
      {
        id: "PB-004",
        srNo: 4,
        question: "The CPU consist of ______",
        options: ["Input Devices", "CU and ALU", "Output Devices", "none of the above"],
        answer: "B",
        correct: "CU and ALU",
        explanation: "The CPU consists of the Control Unit (CU), Arithmetic Logic Unit (ALU), and registers."
      },
      {
        id: "PB-005",
        srNo: 5,
        question: "Which of the following is/are not input device/s?",
        options: ["Joystick", "Keyboard", "Trackball", "Plotter"],
        answer: "D",
        correct: "Plotter",
        explanation: "A Plotter is a vector graphics output device."
      },
      {
        id: "PB-006",
        srNo: 6,
        question: "What is an operating system?",
        options: [
          "interface between the hardware and application programs",
          "collection of programs that manages hardware resources",
          "system service provider to the application programs",
          "all of the mentioned"
        ],
        answer: "D",
        correct: "all of the mentioned",
        explanation: "An OS acts as an interface, manages resources, and provides essential services."
      },
      {
        id: "PB-007",
        srNo: 7,
        question: "Which among following is not necessary for working of a standalone computer?",
        options: ["Hard Drive", "RAM", "ROM", "LAN card"],
        answer: "D",
        correct: "LAN card",
        explanation: "A Network Interface Card (LAN card) is only required for network communication, not standalone operation."
      },
      {
        id: "PB-008",
        srNo: 8,
        question: "A program that reads each of the instructions in mnemonic form and translates it into the machine-language equivalent is___",
        options: ["Machine language", "Assembler", "Interpreter", "C program"],
        answer: "B",
        correct: "Assembler",
        explanation: "Assembler translates mnemonic assembly code into binary machine language."
      },
      {
        id: "PB-009",
        srNo: 9,
        question: "Which of the following is known as the language made up of binary-coded instructions?",
        options: ["High level", "BASIC", "C", "Machine"],
        answer: "D",
        correct: "Machine",
        explanation: "Machine language consists directly of 0s and 1s understood by CPU hardware."
      },
      {
        id: "PB-010",
        srNo: 10,
        question: "Which of the following isn’t a characteristic of High level languages?",
        options: ["machine code", "platform independent", "interactive execution", "user-friendly"],
        answer: "A",
        correct: "machine code",
        explanation: "High level languages are user-friendly and abstract away low-level machine code."
      },
      {
        id: "PB-011",
        srNo: 11,
        question: "High level language is a .....",
        options: [
          "Human readable like language.",
          "language with small program size.",
          "language with big program size.",
          "language which is difficult to understand and not human readable."
        ],
        answer: "A",
        correct: "Human readable like language.",
        explanation: "High-level languages use English-like syntax easily readable by humans."
      },
      {
        id: "PB-012",
        srNo: 12,
        question: "Low level language is .....",
        options: [
          "Human readable like language.",
          "language with big program size.",
          "language with small program size.",
          "Difficult to understand and readability is questionable."
        ],
        answer: "D",
        correct: "Difficult to understand and readability is questionable.",
        explanation: "Low-level languages deal with direct hardware instructions making them hard to read."
      },
      {
        id: "PB-013",
        srNo: 13,
        question: "Source program is compiled to an intermediate form called ___________",
        options: ["Byte Code", "Smart code", "Executable code", "Machine code"],
        answer: "A",
        correct: "Byte Code",
        explanation: "Python and Java source code compile to intermediate Byte Code executed by virtual machines."
      },
      {
        id: "PB-014",
        srNo: 14,
        question: "Which of the following translates the program into machine language line by line?",
        options: ["Compiler", "Translator", "Interpreter", "none of the above"],
        answer: "C",
        correct: "Interpreter",
        explanation: "An Interpreter translates and executes source code line by line."
      },
      {
        id: "PB-015",
        srNo: 15,
        question: "The instructions like MOV or ADD are called as ______",
        options: ["OP-Code", "Operators", "Commands", "Operand"],
        answer: "A",
        correct: "OP-Code",
        explanation: "Operation Codes (OP-Codes) specify the hardware operation to perform."
      },
      {
        id: "PB-016",
        srNo: 16,
        question: "An algorithm is __________?",
        options: ["A problem", "A Procedure for Solving a Problem", "A Mathematical Problem", "A Pictorial representation"],
        answer: "B",
        correct: "A Procedure for Solving a Problem",
        explanation: "An algorithm is a step-by-step finite procedure to solve a specific problem."
      },
      {
        id: "PB-017",
        srNo: 17,
        question: "Actual instructions in flowchart are represented in________",
        options: ["Circle", "Boxes", "Arrows", "Lines"],
        answer: "B",
        correct: "Boxes",
        explanation: "Rectangular boxes represent process/action steps in flowcharts."
      },
      {
        id: "PB-018",
        srNo: 18,
        question: "In a flowchart, what does a Diamond box denote?",
        options: ["Decision", "Inititation", "Initialization", "Process"],
        answer: "A",
        correct: "Decision",
        explanation: "Diamond shapes represent decision/branching logic."
      },
      {
        id: "PB-019",
        srNo: 19,
        question: "Which of the following represents two different conditions in a flowchart?",
        options: ["Rectangle", "Diamond", "Circle", "Parallelogram"],
        answer: "B",
        correct: "Diamond",
        explanation: "A Diamond node evaluates true/false conditions leading to different paths."
      },
      {
        id: "PB-020",
        srNo: 20,
        question: "Which of the following represents input and output operation in a flowchart?",
        options: ["Diamond", "Rectangle", "Parallelogram", "Circle"],
        answer: "C",
        correct: "Parallelogram",
        explanation: "Parallelograms represent input/output operations."
      },
      {
        id: "PB-021",
        srNo: 21,
        question: "What will be the output of the following algorithm if the input is 4?\nAlgorithm:\n1.Start\n2.Set x = input value\n3.Set y = x * 2\n4.If y > 5, then print \"Large\", otherwise print \"Small\".\n5.Stop",
        options: ["Large", "Small", "No output", "Error"],
        answer: "A",
        correct: "Large",
        explanation: "x = 4 -> y = 8 -> 8 > 5 is True -> prints 'Large'."
      },
      {
        id: "PB-022",
        srNo: 22,
        question: "Match the following flowchart symbols:\nList-I: A. Parallelogram, B. Oval, C. Rectangle\nList-II: 1. Process, 2. Decision, 3. Beginning/End, 6. Input/output",
        options: ["(A-6)(B-5)(C-3)", "(A-2)(B-3)(C-1)", "(A-5)(B-3)(C-6)", "(A-6)(B-3)(C-1)"],
        answer: "D",
        correct: "(A-6)(B-3)(C-1)",
        explanation: "Parallelogram = Input/Output (6), Oval = Start/End (3), Rectangle = Process (1)."
      }
    ],
    coding: [
      {
        id: "PB-023",
        srNo: 23,
        marks: 3,
        question: "Write an algorithm and draw a flowchart to calculate area of rectangle.",
        topic: "Basic Math & Output",
        difficulty: "easy",
        starterCode: "l = float(input('Length: '))\nw = float(input('Width: '))\narea = l * w\nprint('Area:', area)",
        solution: "length = float(input('Enter length: '))\nwidth = float(input('Enter width: '))\nprint(f'Area = {length * width}')",
        explanation: "Algorithm:\n1. Input length and width\n2. Multiply length * width\n3. Display area"
      },
      {
        id: "PB-024",
        srNo: 24,
        marks: 3,
        question: "Write an algorithm and draw a flowchart to calculate percentage of the student.",
        topic: "Math Calculation",
        difficulty: "easy",
        starterCode: "obtained = float(input('Marks obtained: '))\ntotal = float(input('Total marks: '))\npercentage = (obtained / total) * 100\nprint(f'Percentage: {percentage:.2f}%')",
        solution: "obtained = float(input('Obtained Marks: '))\ntotal = float(input('Total Marks: '))\nprint(f'Percentage = {(obtained/total)*100:.2f}%')",
        explanation: "Computes ratio of obtained marks over total marks multiplied by 100."
      },
      {
        id: "PB-025",
        srNo: 25,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to convert input celsius degree temperature into its equivalent fahrenheit degree. Use formula F= (9/5)*C +32",
        topic: "Formula Conversion",
        difficulty: "easy",
        starterCode: "c = float(input('Celsius: '))\nf = (9/5) * c + 32\nprint('Fahrenheit:', f)",
        solution: "celsius = float(input('Celsius: '))\nfahrenheit = (9/5) * celsius + 32\nprint(f'{celsius}°C = {fahrenheit}°F')",
        explanation: "Applies temperature scale formula F = (9/5)*C + 32."
      },
      {
        id: "PB-026",
        srNo: 26,
        marks: 3,
        question: "Write an algorithm and draw a flowchart to check whether given number is positive or negative.",
        topic: "Conditionals",
        difficulty: "easy",
        starterCode: "num = float(input('Number: '))\nif num >= 0:\n    print('Positive')\nelse:\n    print('Negative')",
        solution: "num = float(input('Number: '))\nprint('Positive' if num >= 0 else 'Negative')",
        explanation: "Checks if number is greater than or equal to zero."
      },
      {
        id: "PB-027",
        srNo: 27,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to find out smallest number out of two numbers.",
        topic: "Comparison",
        difficulty: "easy",
        starterCode: "a = float(input('a: '))\nb = float(input('b: '))\nif a < b:\n    print('Smallest:', a)\nelse:\n    print('Smallest:', b)",
        solution: "a, b = float(input('a: ')), float(input('b: '))\nprint('Smallest is', a if a < b else b)",
        explanation: "Compares a and b and prints whichever is smaller."
      },
      {
        id: "PB-028",
        srNo: 28,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to swap two input numbers.",
        topic: "Variable Swapping",
        difficulty: "easy",
        starterCode: "a = input('a: ')\nb = input('b: ')\na, b = b, a\nprint('a:', a, 'b:', b)",
        solution: "a = input('a: ')\nb = input('b: ')\na, b = b, a\nprint(f'Swapped: a={a}, b={b}')",
        explanation: "Swaps values using Python tuple unpacking `a, b = b, a`."
      },
      {
        id: "PB-029",
        srNo: 29,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to find out maximum number out of three numbers.",
        topic: "Nested If/Else",
        difficulty: "medium",
        starterCode: "a = float(input('a: '))\nb = float(input('b: '))\nc = float(input('c: '))\nmax_num = max(a, b, c)\nprint('Maximum:', max_num)",
        solution: "a, b, c = float(input('a: ')), float(input('b: ')), float(input('c: '))\nif a >= b and a >= c:\n    m = a\nelif b >= a and b >= c:\n    m = b\nelse:\n    m = c\nprint('Maximum is', m)",
        explanation: "Checks three numbers using compound logic or nested if statements."
      },
      {
        id: "PB-030",
        srNo: 30,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to arrange the numbers x,y,z in descending order.",
        topic: "Sorting Logic",
        difficulty: "medium",
        starterCode: "x, y, z = 5, 12, 3\nnums = [x, y, z]\nnums.sort(reverse=True)\nprint('Descending:', nums)",
        solution: "x, y, z = float(input('x: ')), float(input('y: ')), float(input('z: '))\nif x < y: x, y = y, x\nif x < z: x, z = z, x\nif y < z: y, z = z, y\nprint(f'Descending: {x}, {y}, {z}')",
        explanation: "Sorts three variables in descending order using pairwise comparisons."
      },
      {
        id: "PB-031",
        srNo: 31,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to print first 50 odd numbers.",
        topic: "Loops & Steps",
        difficulty: "easy",
        starterCode: "count = 0\nnum = 1\nwhile count < 50:\n    print(num, end=' ')\n    num += 2\n    count += 1",
        solution: "for i in range(1, 100, 2):\n    print(i, end=' ')",
        explanation: "Prints numbers starting from 1 with step size 2 up to 50 terms."
      },
      {
        id: "PB-032",
        srNo: 32,
        marks: 4,
        question: "Write an algorithm and Draw the flow chart to solve following series 1! + 2! + 3! + …. + n!",
        topic: "Factorial & Accumulation",
        difficulty: "medium",
        starterCode: "import math\nn = int(input('n: '))\ntotal = sum(math.factorial(i) for i in range(1, n+1))\nprint('Sum of factorial series:', total)",
        solution: "n = int(input('n: '))\ntotal = 0\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\n    total += fact\nprint(f'Sum of series = {total}')",
        explanation: "Iteratively computes factorial of i and adds it to running sum total."
      },
      {
        id: "PB-033",
        srNo: 33,
        marks: 3,
        question: "Draw flowchart to check and display whether entered number is Armstrong number or not.",
        topic: "Number Properties",
        difficulty: "medium",
        starterCode: "n = int(input('Number: '))\ns = str(n)\npow_len = len(s)\ntotal = sum(int(d)**pow_len for d in s)\nprint('Armstrong' if total == n else 'Not Armstrong')",
        solution: "num = int(input('Enter number: '))\ns = str(num)\np = len(s)\nif sum(int(d)**p for d in s) == num:\n    print('Armstrong Number')\nelse:\n    print('Not Armstrong')",
        explanation: "Sum of digits each raised to power equal to number of digits equals the original number."
      },
      {
        id: "PB-034",
        srNo: 34,
        marks: 3,
        question: "Sketch flowchart to convert seconds into hour, minute and second. (Hint : 3700 seconds => 1 hr , 1 minute , 40 second)",
        topic: "Modulo Math",
        difficulty: "easy",
        starterCode: "sec = int(input('Seconds: '))\nh = sec // 3600\nrem = sec % 3600\nm = rem // 60\ns = rem % 60\nprint(f'{h} hr, {m} minute, {s} second')",
        solution: "sec = int(input('Seconds: '))\nhrs = sec // 3600\nmins = (sec % 3600) // 60\nsecs = sec % 60\nprint(f'{hrs} hr, {mins} minute, {secs} second')",
        explanation: "Divides total seconds into hours (3600s), minutes (60s), and remaining seconds."
      },
      {
        id: "PB-035",
        srNo: 35,
        marks: 2,
        question: "Write an algorithm to determine whether the given year is a leap year or not.",
        topic: "Conditionals",
        difficulty: "easy",
        starterCode: "y = int(input('Year: '))\nis_leap = (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)\nprint('Leap Year' if is_leap else 'Not Leap Year')",
        solution: "year = int(input('Year: '))\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('Leap Year')\nelse:\n    print('Not Leap Year')",
        explanation: "Leap year rule: Divisible by 4 and not 100, or divisible by 400."
      },
      {
        id: "PB-036",
        srNo: 36,
        marks: 4,
        question: "Write an algorithm and draw a flowchart to find factorial of given numbers.",
        topic: "Loop Accumulation",
        difficulty: "easy",
        starterCode: "n = int(input('n: '))\nfact = 1\nfor i in range(1, n+1):\n    fact *= i\nprint('Factorial:', fact)",
        solution: "n = int(input('n: '))\nf = 1\nfor i in range(1, n + 1):\n    f *= i\nprint(f'Factorial = {f}')",
        explanation: "Multiplies numbers from 1 to n."
      },
      {
        id: "PB-037",
        srNo: 37,
        marks: 3,
        question: "Draw a flowchart to print first N Fibonacci Numbers (0, 1, 1, 2, 3, 5, 8,…).",
        topic: "Fibonacci Series",
        difficulty: "medium",
        starterCode: "n = int(input('N: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        solution: "n = int(input('N: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        explanation: "Generates Fibonacci terms where each number is sum of preceding two."
      },
      {
        id: "PB-038",
        srNo: 38,
        marks: 4,
        question: "Draw the flowchart to check weather given number by user is palindrome or not.",
        topic: "String / Digit Reversal",
        difficulty: "easy",
        starterCode: "s = input('Number: ')\nif s == s[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')",
        solution: "num = input('Number: ')\nprint('Palindrome' if num == num[::-1] else 'Not Palindrome')",
        explanation: "Checks if number string reads same forwards and backwards."
      }
    ]
  },

  unit2: {
    unit: 2,
    title: "UNIT 2 - Introduction to Python & Jupyter Notebooks (Q39 to Q100)",
    mcqs: [
      {
        id: "PB-039",
        srNo: 39,
        question: "Which character is used in Python to make a single line comment?",
        options: ["/", "//", "!", "#"],
        answer: "D",
        correct: "#",
        explanation: "`#` starts single line comments in Python."
      },
      {
        id: "PB-040",
        srNo: 40,
        question: "What will be the output of print(type(2**5)) in python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'integer'>"],
        answer: "A",
        correct: "<class 'int'>",
        explanation: "2**5 is 32, which is an integer type."
      },
      {
        id: "PB-041",
        srNo: 41,
        question: "What will be the output of print(type(\"LJU\")) in python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'char'>"],
        answer: "C",
        correct: "<class 'str'>",
        explanation: "Quoted text is instantiated as `str`."
      },
      {
        id: "PB-042",
        srNo: 42,
        question: "What will be the output of print(type(3*5/5)) in python?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'integer'>"],
        answer: "B",
        correct: "<class 'float'>",
        explanation: "Standard division `/` returns float."
      },
      {
        id: "PB-043",
        srNo: 43,
        question: "If x=3.123, then int(x) will give ?",
        options: ["1", "3", "4", "3.12"],
        answer: "B",
        correct: "3",
        explanation: "`int()` truncates decimal part."
      },
      {
        id: "PB-044",
        srNo: 44,
        question: "Which one of the following is correct way of declaring and initialising a variable, x with value 5?",
        options: ["int x x=5", "int x=5", "x=5", "declare x=5"],
        answer: "C",
        correct: "x=5",
        explanation: "Python dynamically assigns variables using `=`. No type keyword."
      },
      {
        id: "PB-045",
        srNo: 45,
        question: "Which of the following is an invalid statement?",
        options: ["abc = 1,000,000", "a b c = 1000 2000 3000", "a,b,c = 1000, 2000, 3000", "a_b_c = 1,000,000"],
        answer: "B",
        correct: "a b c = 1000 2000 3000",
        explanation: "Spaces between variable names without commas is SyntaxError."
      },
      {
        id: "PB-046",
        srNo: 46,
        question: "Which of the following is invalid variable name?",
        options: ["_x = 1", "x_= 1", "_x_ = 1", "None of the mentioned"],
        answer: "D",
        correct: "None of the mentioned",
        explanation: "All underscore variable placements shown are completely valid."
      },
      {
        id: "PB-047",
        srNo: 47,
        question: "Which of the following cannot be a variable?",
        options: ["important", "in", "it", "abc"],
        answer: "B",
        correct: "in",
        explanation: "`in` is a reserved Python keyword."
      },
      {
        id: "PB-048",
        srNo: 48,
        question: "Which of the following is an invalid variable?",
        options: ["char_1", "1st_char", "oopec", "_"],
        answer: "B",
        correct: "1st_char",
        explanation: "Variable names cannot start with numbers."
      },
      {
        id: "PB-049",
        srNo: 49,
        question: "What happens when '2' == 2 is executed?",
        options: ["True", "False", "ValueError", "TypeError"],
        answer: "B",
        correct: "False",
        explanation: "String '2' and int 2 are different types and not equal."
      },
      {
        id: "PB-050",
        srNo: 50,
        question: "What will be the output of this program?\n_ = '1 2 3 4 5 6'\nprint(_)",
        options: [
          "SyntaxError: EOL while scanning string literal",
          "SyntaxError: invalid syntax",
          "NameError: name '_' is not defined",
          "1 2 3 4 5 6"
        ],
        answer: "D",
        correct: "1 2 3 4 5 6",
        explanation: "`_` is a valid identifier in Python."
      },
      {
        id: "PB-051",
        srNo: 51,
        question: "What will be the output of print(print(print(\"python\")))?",
        options: ["None None python", "python None None", "python", "Error"],
        answer: "B",
        correct: "python None None",
        explanation: "`print()` prints its argument and returns `None`."
      },
      {
        id: "PB-052",
        srNo: 52,
        question: "Which is the correct operator for power(Xy)?",
        options: ["X^y", "X**y", "X^^y", "None of the mentioned"],
        answer: "B",
        correct: "X**y",
        explanation: "`**` is exponentiation operator."
      },
      {
        id: "PB-053",
        srNo: 53,
        question: "What is the answer to this expression, 34 % 3 is?",
        options: ["7", "1", "0", "5"],
        answer: "B",
        correct: "1",
        explanation: "34 % 3 leaves remainder 1."
      },
      {
        id: "PB-054",
        srNo: 54,
        question: "a=0, b=6, x=(a or b) or ((a and a) or (a and b)), print(x)",
        options: ["0", "6", "True", "False"],
        answer: "B",
        correct: "6",
        explanation: "`a or b` -> `0 or 6` -> 6. `6 or ...` short-circuits to 6."
      },
      {
        id: "PB-055",
        srNo: 55,
        question: "a=0, b=6, x=(a or b) or ((a and a) or (a and b)), y=not(x), print(y)",
        options: ["0", "6", "True", "False"],
        answer: "D",
        correct: "False",
        explanation: "x is 6 (truthy). `not(6)` gives `False`."
      },
      {
        id: "PB-056",
        srNo: 56,
        question: "What will be the output of print(True ** False / True)?",
        options: ["True ** False / True", "1.0", "0", "Error"],
        answer: "B",
        correct: "1.0",
        explanation: "True=1, False=0. `1**0` = 1. `1 / 1` = 1.0."
      },
      {
        id: "PB-057",
        srNo: 57,
        question: "Which error occurs when you execute Python code: apple = mango",
        options: ["Type Error", "Value Error", "Name Error", "Syntax Error"],
        answer: "C",
        correct: "Name Error",
        explanation: "`mango` is not defined beforehand, causing `NameError`."
      },
      {
        id: "PB-058",
        srNo: 58,
        question: "What is the output of this expression, 3*1**3?",
        options: ["1", "3", "9", "27"],
        answer: "B",
        correct: "3",
        explanation: "`**` has higher precedence than `*`. `1**3=1`, `3*1=3`."
      },
      {
        id: "PB-059",
        srNo: 59,
        question: "Select option that will print: hello-how-are-you",
        options: [
          "print('hello-' + 'how-are-you')",
          "print('hello', 'how', 'are', 'you')",
          "print('hello', 'how', 'are', 'you' + '-' * 4)",
          "print('hello' + '-' + 'how' + '-' + 'are' + 'yu')"
        ],
        answer: "A",
        correct: "print('hello-' + 'how-are-you')",
        explanation: "Concatenates strings `'hello-'` and `'how-are-you'`."
      },
      {
        id: "PB-060",
        srNo: 60,
        question: "Which of the following is not a comparison operator in Python?",
        options: [">=", "<=", "=", "!="],
        answer: "C",
        correct: "=",
        explanation: "`=` is assignment, `==` is comparison."
      },
      {
        id: "PB-061",
        srNo: 61,
        question: "a=4, b=6, c=3, print(a+b*c/a-b)",
        options: ["1.5", "2", "2.5", "3"],
        answer: "C",
        correct: "2.5",
        explanation: "Precedence: 6*3=18, 18/4=4.5, 4+4.5-6 = 2.5."
      },
      {
        id: "PB-062",
        srNo: 62,
        question: "What will be the value of 8 + 2 % 3?",
        options: ["10", "8", "9", "7"],
        answer: "A",
        correct: "10",
        explanation: "2 % 3 = 2. 8 + 2 = 10."
      },
      {
        id: "PB-063",
        srNo: 63,
        question: "What will be the value of x in x = int(63.55+8/3)?",
        options: ["65", "66", "23", "24"],
        answer: "B",
        correct: "66",
        explanation: "8/3 = 2.6666. 63.55 + 2.666 = 66.216. `int()` gives 66."
      },
      {
        id: "PB-064",
        srNo: 64,
        question: "What are the values of 2**(3**2), (2**3)**2, 2**3**2?",
        options: ["64, 512, 64", "64, 64, 64", "512, 512, 512", "512, 64, 512"],
        answer: "D",
        correct: "512, 64, 512",
        explanation: "`**` is right-associative: 3**2=9 -> 2**9=512. (2**3)**2=8**2=64. 2**3**2=512."
      },
      {
        id: "PB-065",
        srNo: 65,
        question: "What will be the output of print((7*5**2)/True*False)?",
        options: ["175", "70", "0", "0.0"],
        answer: "D",
        correct: "0.0",
        explanation: "False is 0 in numeric operations, resulting in float `0.0`."
      },
      {
        id: "PB-066",
        srNo: 66,
        question: "What will be the output of print(6 + 5 - 4 * 3 / 2 % 1)?",
        options: ["15", "7", "11.0", "10"],
        answer: "C",
        correct: "11.0",
        explanation: "4*3=12, 12/2=6.0, 6.0%1=0.0. 6+5-0.0 = 11.0."
      },
      {
        id: "PB-067",
        srNo: 67,
        question: "What will be the output of print(int(6 == 6.0) * 3 + 4 % 5)?",
        options: ["Error", "22", "7", "18"],
        answer: "C",
        correct: "7",
        explanation: "`6 == 6.0` is True (1). `1 * 3 = 3`. `4 % 5 = 4`. `3 + 4 = 7`."
      },
      {
        id: "PB-068",
        srNo: 68,
        question: "What will be the value of X in X = 2+9*((3*12)-8)/10?",
        options: ["30", "30.8", "28.4", "27.2"],
        answer: "D",
        correct: "27.2",
        explanation: "3*12=36, 36-8=28, 9*28=252, 252/10=25.2, 2+25.2=27.2."
      },
      {
        id: "PB-069",
        srNo: 69,
        question: "What will be the output of Python code:\nnew= (1 and \"True\") and ('False' or Train)\nstr= 'This statement is '+ new\nprint(\"This is False\" if \"False\" in new else \"This is True\")",
        options: ["This is True", "NameError – Train not defined", "This is False", "Syntax Error – invalid syntax"],
        answer: "C",
        correct: "This is False",
        explanation: "`('False' or Train)` evaluates to `'False'` (Train is short-circuited!). `\"False\" in \"False\"` is True."
      },
      {
        id: "PB-070",
        srNo: 70,
        question: "What will be the value of 8 + 1 % 3?",
        options: ["8", "9", "10", "11"],
        answer: "B",
        correct: "9",
        explanation: "1 % 3 = 1. 8 + 1 = 9."
      },
      {
        id: "PB-071",
        srNo: 71,
        question: "What should be the output of:\nx=0.0\ny=48>0\nz=11<7\nprint(not(float(x or y or z)))",
        options: ["True", "False", "Error", "No output"],
        answer: "B",
        correct: "False",
        explanation: "`x or y or z` -> `0.0 or True or False` -> `True`. `float(True)` = `1.0`. `not(1.0)` = `False`."
      },
      {
        id: "PB-072",
        srNo: 72,
        question: "What will be the output of x=Str(\"Python is a very\\b simple\\bsubject\"), print(x)?",
        options: ["Python is a verysimpleubject", "Python is a versimplsubject", "Name Error", "None of mentioned"],
        answer: "C",
        correct: "Name Error",
        explanation: "`Str` with capital S is not defined (Python built-in is `str`), raising `NameError`."
      },
      {
        id: "PB-073",
        srNo: 73,
        question: "What is the output of a=10, b=a-=2, print(b)?",
        options: ["12", "8", "9", "Syntax Error"],
        answer: "D",
        correct: "Syntax Error",
        explanation: "Augmented assignment `a-=2` is a statement, not an expression, so `b = a -= 2` is invalid syntax."
      },
      {
        id: "PB-074",
        srNo: 74,
        question: "a=4, b=6, c=3, d=2. What is print(a+d**b*c/a-b)?",
        options: ["64", "46.0", "52", "192"],
        answer: "B",
        correct: "46.0",
        explanation: "2**6=64, 64*3=192, 192/4=48.0, 4+48.0-6 = 46.0."
      },
      {
        id: "PB-075",
        srNo: 75,
        question: "What will be the output of print(int(\"6\" == 6.0) * 3 + 4 % 5)?",
        options: ["4", "6", "22", "Error"],
        answer: "A",
        correct: "4",
        explanation: "String `'6'` != float `6.0` (False/0). `0 * 3 = 0`. `4 % 5 = 4`. `0 + 4 = 4`."
      },
      {
        id: "PB-076",
        srNo: 76,
        question: "a=0, b=6, c=9, d=10. x=(a or b) and ((a or c) or (b and d)), print(x)",
        options: ["0", "6", "9", "10"],
        answer: "C",
        correct: "9",
        explanation: "`a or b`=6. `(0 or 9)`=9. `6 and 9` evaluates to 9."
      },
      {
        id: "PB-077",
        srNo: 77,
        question: "X = 2+9*((3*12)-8)/10. What is print(bool(X))?",
        options: ["True", "0", "30", "30.8"],
        answer: "A",
        correct: "True",
        explanation: "X is 27.2 (non-zero), so `bool(27.2)` evaluates to `True`."
      },
      {
        id: "PB-078",
        srNo: 78,
        question: "What will be the datatype of var in code snippet?\nvar = 10\nprint(type(var))\nvar = \"Hello\"\nprint(type(var))",
        options: ["int", "int,str", "str", "str,str"],
        answer: "B",
        correct: "int,str",
        explanation: "First prints `<class 'int'>`, then `<class 'str'>`."
      },
      {
        id: "PB-079",
        srNo: 79,
        question: "What will be the output of print(True * False / True)?",
        options: ["0", "0.0", "1", "Error"],
        answer: "B",
        correct: "0.0",
        explanation: "1 * 0 / 1 evaluates to float `0.0`."
      },
      {
        id: "PB-080",
        srNo: 80,
        question: "x=125, y=13, x//=y, print(x)",
        options: ["125/13", "10", "9", "9.62"],
        answer: "C",
        correct: "9",
        explanation: "`//` floor division truncates float result 9.615 down to 9."
      },
      {
        id: "PB-081",
        srNo: 81,
        question: "What is print(bool(0), bool(3.14159), bool(-3), bool(False))?",
        options: [
          "False True True False",
          "True True True False",
          "False False True False",
          "False True False False"
        ],
        answer: "A",
        correct: "False True True False",
        explanation: "0 and False are falsy; 3.14159 and -3 are truthy."
      },
      {
        id: "PB-082",
        srNo: 82,
        question: "a=5, b=10, c=1, print(a**c, b//a, c%a)",
        options: ["5 2 2", "5 2 1", "5 2 5", "5 10 5"],
        answer: "B",
        correct: "5 2 1",
        explanation: "5**1=5, 10//5=2, 1%5=1."
      },
      {
        id: "PB-083",
        srNo: 83,
        question: "Which of the following is invalid variable assignment?",
        options: ["1x=1", "x1=1", "_x =1", "_x=1"],
        answer: "A",
        correct: "1x=1",
        explanation: "Identifiers cannot start with digits."
      },
      {
        id: "PB-084",
        srNo: 84,
        question: "What is the output of 3**1**3/True?",
        options: ["1", "3", "3.0", "27"],
        answer: "C",
        correct: "3.0",
        explanation: "3**1 = 3, 3/1 = 3.0."
      },
      {
        id: "PB-085",
        srNo: 85,
        question: "a=0, b=5. What is a or b ==5 or True + 7 -4 * 3?",
        options: ["True", "1", "0", "False"],
        answer: "A",
        correct: "True",
        explanation: "`b == 5` is True, making the logical OR expression evaluate to `True`."
      },
      {
        id: "PB-086",
        srNo: 86,
        question: "a=50, b=60, print((a and b)/False)",
        options: ["0", "60", "50", "Error"],
        answer: "D",
        correct: "Error",
        explanation: "Dividing by False (0) causes `ZeroDivisionError`."
      },
      {
        id: "PB-087",
        srNo: 87,
        question: "Which of the following will evaluate to true?\nI. True and False\nII. False or True\nIII. False and (True or False)",
        options: ["I", "II", "I and II", "II and III"],
        answer: "B",
        correct: "II",
        explanation: "False or True evaluates to True."
      },
      {
        id: "PB-088",
        srNo: 88,
        question: "Given two variables, num1 and num2, which of the following would mean that both num1 and num2 are positive integers?",
        options: [
          "(num1 == num2)",
          "(num1 == num2) or (num1 > 0)",
          "(num1 == num2) and (num1 < 0)",
          "(num1 == num2) and (num1 > 0)"
        ],
        answer: "D",
        correct: "(num1 == num2) and (num1 > 0)",
        explanation: "Option D explicitly enforces both equality and positive check > 0."
      },
      {
        id: "PB-089",
        srNo: 89,
        question: "What is the output from the following code?\na = 3\nb = (a != 3)\nprint(b)",
        options: ["True", "False", "0", "3"],
        answer: "B",
        correct: "False",
        explanation: "a is 3, so `a != 3` is False."
      },
      {
        id: "PB-090",
        srNo: 90,
        question: "Which of the following evaluates to True when a is equal to b or when a is equal to 5?",
        options: ["a == b == 5", "a = b or a = 5", "a == b or a == 5", "a = b and a = 5"],
        answer: "C",
        correct: "a == b or a == 5",
        explanation: "Correct Python equality logic with OR operator."
      }
    ],
    coding: [
      {
        id: "PB-091",
        srNo: 91,
        marks: 4,
        question: "Write a Python program to add 2 Numbers with user input.",
        topic: "Input & Arithmetic",
        difficulty: "easy",
        starterCode: "n1 = float(input('Num 1: '))\nn2 = float(input('Num 2: '))\nprint('Sum:', n1 + n2)",
        solution: "n1 = float(input('Enter num 1: '))\nn2 = float(input('Enter num 2: '))\nprint(f'Sum = {n1 + n2}')",
        explanation: "Reads inputs and calculates sum."
      },
      {
        id: "PB-092",
        srNo: 92,
        marks: 4,
        question: "Write a Python program to find the area of Circle.",
        topic: "Math Formula",
        difficulty: "easy",
        starterCode: "r = float(input('Radius: '))\narea = 3.14159 * r * r\nprint('Area:', area)",
        solution: "import math\nr = float(input('Radius: '))\nprint(f'Area = {math.pi * r**2:.2f}')",
        explanation: "Area = pi * r^2."
      },
      {
        id: "PB-093",
        srNo: 93,
        marks: 4,
        question: "Write a Python program to find the area of Triangle.",
        topic: "Math Formula",
        difficulty: "easy",
        starterCode: "b = float(input('Base: '))\nh = float(input('Height: '))\nprint('Area:', 0.5 * b * h)",
        solution: "b, h = float(input('Base: ')), float(input('Height: '))\nprint(f'Area = {0.5 * b * h}')",
        explanation: "Area = 0.5 * base * height."
      },
      {
        id: "PB-094",
        srNo: 94,
        marks: 4,
        question: "Write a Python program to calculate the area of a trapezoid.",
        topic: "Math Formula",
        difficulty: "easy",
        starterCode: "a = float(input('Base a: '))\nb = float(input('Base b: '))\nh = float(input('Height: '))\narea = 0.5 * (a + b) * h\nprint('Area of Trapezoid:', area)",
        solution: "a = float(input('Base 1: '))\nb = float(input('Base 2: '))\nh = float(input('Height: '))\nprint(f'Trapezoid Area = {0.5 * (a + b) * h}')",
        explanation: "Area = 0.5 * (a + b) * height."
      },
      {
        id: "PB-095",
        srNo: 95,
        marks: 4,
        question: "Write a Python program to calculate surface volume and area of a cylinder.",
        topic: "Math Geometry",
        difficulty: "medium",
        starterCode: "import math\nr = float(input('Radius: '))\nh = float(input('Height: '))\nvol = math.pi * r**2 * h\narea = 2 * math.pi * r * (r + h)\nprint(f'Volume: {vol:.2f}, Surface Area: {area:.2f}')",
        solution: "import math\nr, h = float(input('Radius: ')), float(input('Height: '))\nv = math.pi * r**2 * h\nsa = 2 * math.pi * r * (r + h)\nprint(f'Volume={v:.2f}, Area={sa:.2f}')",
        explanation: "Applies 3D cylinder surface area and volume formulas."
      },
      {
        id: "PB-096",
        srNo: 96,
        marks: 7,
        question: "Write a Python program to convert Fahrenheit to Celsius and vice versa.",
        topic: "Interactive Converter",
        difficulty: "medium",
        starterCode: "choice = input('1: F->C, 2: C->F : ')\nval = float(input('Enter value: '))\nif choice == '1':\n    print(f'Celsius: {(val-32)*5/9:.2f}')\nelse:\n    print(f'Fahrenheit: {(val*9/5)+32:.2f}')",
        solution: "c = input('Choose (1) F to C or (2) C to F: ')\nv = float(input('Val: '))\nif c == '1': print((v-32)*5/9)\nelse: print((v*9/5)+32)",
        explanation: "Converts temperature based on user selection."
      },
      {
        id: "PB-097",
        srNo: 97,
        marks: 7,
        question: "Write a python code to demonstrate calculator functionality.",
        topic: "Calculator Logic",
        difficulty: "medium",
        starterCode: "op = input('Select (+, -, *, /): ')\na = float(input('a: '))\nb = float(input('b: '))\nif op == '+': res = a + b\nelif op == '-': res = a - b\nelif op == '*': res = a * b\nelif op == '/': res = a / b if b != 0 else 'Division by Zero'\nprint('Result:', res)",
        solution: "a, op, b = float(input('a: ')), input('op: '), float(input('b: '))\nif op=='+': print(a+b)\nelif op=='-': print(a-b)\nelif op=='*': print(a*b)\nelif op=='/': print(a/b if b!=0 else 'Err')",
        explanation: "Implements basic arithmetic calculator."
      },
      {
        id: "PB-098",
        srNo: 98,
        marks: 7,
        question: "Write a python program to convert Days into Years, Months and Days. (Ex: if input of Days = 370 then output will be, years=1, months=0 and days = 5).",
        topic: "Integer Division & Modulo",
        difficulty: "medium",
        starterCode: "d = int(input('Days: '))\ny = d // 365\nrem = d % 365\nm = rem // 30\ndays = rem % 30\nprint(f'years={y}, months={m} and days = {days}')",
        solution: "d = int(input('Days: '))\nprint(f'years={d//365}, months={(d%365)//30} and days={d%365%30}')",
        explanation: "Uses floor division and modulo arithmetic."
      },
      {
        id: "PB-099",
        srNo: 99,
        marks: 7,
        question: "Write a Python program to convert hours into minutes and seconds (Ex : input of hours = 6 then output will be, minutes = 360 and seconds = 21600 ).",
        topic: "Time Unit Conversion",
        difficulty: "easy",
        starterCode: "h = float(input('Hours: '))\nm = h * 60\ns = h * 3600\nprint(f'minutes = {int(m)} and seconds = {int(s)}')",
        solution: "h = float(input('Hours: '))\nprint(f'minutes = {int(h*60)} and seconds = {int(h*3600)}')",
        explanation: "1 hr = 60 mins = 3600 secs."
      },
      {
        id: "PB-100",
        srNo: 100,
        marks: 4,
        question: "Write a Python program to find an integer exponent x such that a^x = n.\nInput: a = 2 : n = 1024 => Output: 10\nInput: a = 3 : n = 81 => Output: 4",
        topic: "Loops / Logarithmic Search",
        difficulty: "medium",
        starterCode: "a = int(input('a: '))\nn = int(input('n: '))\nx = 0\nval = 1\nwhile val < n:\n    val *= a\n    x += 1\nprint('Output:', x)",
        solution: "a, n = int(input('a: ')), int(input('n: '))\nx, val = 0, 1\nwhile val < n: val *= a; x += 1\nprint(x)",
        explanation: "Repeatedly multiplies base a until reaching target n."
      }
    ]
  },

  unit3: {
    unit: 3,
    title: "UNIT 3 - Conditional Execution & Iterations (Q101 to Q210)",
    mcqs: [
      {
        id: "PB-101",
        srNo: 101,
        question: "What does the following code print?\nif 4 + 5 == 10:\n    print(\"TRUE\")\nelse:\n    print(\"FALSE\")\nprint(\"TRUE\")",
        options: ["TRUE", "TRUE FALSE", "FALSE\nTRUE", "TRUE TRUE"],
        answer: "C",
        correct: "FALSE\nTRUE",
        explanation: "4+5 != 10, so else prints FALSE. Next outer print prints TRUE."
      },
      {
        id: "PB-102",
        srNo: 102,
        question: "What does the following code print?\nx = -10\nif x < 0:\n    print(\"The negative number \", x, \" is not valid here.\")\nprint(\"This is always printed\")",
        options: [
          "This is always printed",
          "The negative number -10 is not valid here.\nThis is always printed",
          "The negative number -10 is not valid here",
          "Error"
        ],
        answer: "B",
        correct: "The negative number -10 is not valid here.\nThis is always printed",
        explanation: "x < 0 is True, so both prints execute sequentially."
      },
      {
        id: "PB-103",
        srNo: 103,
        question: "Which of the following is true about the code below?\nx = 3\nif (x > 2):\n    x = x * 2\n    if (x > 4):\n        x = 0\nprint(x)",
        options: [
          "x will always equal 0 after this code executes for any value of x",
          "if x is greater than 2, the value in x will be doubled after this code executes",
          "if x is greater than 2, x will equal 0 after this code executes",
          "None of mentioned"
        ],
        answer: "C",
        correct: "if x is greater than 2, x will equal 0 after this code executes",
        explanation: "For x > 2, x becomes 2*x (which is > 4), so x is set to 0."
      },
      {
        id: "PB-104",
        srNo: 104,
        question: "Which one of the following is a valid Python if statement?",
        options: ["if a>=2 :", "if (a >= 2)", "if (a => 22)", "if a >= 22"],
        answer: "A",
        correct: "if a>=2 :",
        explanation: "Python `if` statements end with a colon `:`."
      },
      {
        id: "PB-105",
        srNo: 105,
        question: "What keyword would you use to add an alternative condition to an if statement?",
        options: ["else if", "elseif", "elif", "None of the above"],
        answer: "C",
        correct: "elif",
        explanation: "Python uses `elif` keyword."
      },
      {
        id: "PB-106",
        srNo: 106,
        question: "Which statement will check if a is equal to b?",
        options: ["if a = b:", "if a == b:", "if a === c:", "if a == b"],
        answer: "B",
        correct: "if a == b:",
        explanation: "`==` tests equality and requires colon `:`."
      },
      {
        id: "PB-107",
        srNo: 107,
        question: "Given nested structure:\nx = 0; a = 0; b = -5\nif a > 0:\n    if b < 0: x = x + 5\n    elif a > 5: x = x + 4\n    else: x = x + 3\nelse: x = x + 4\nprint(x)",
        options: ["2", "0", "3", "4"],
        answer: "D",
        correct: "4",
        explanation: "a > 0 is False, so outer `else` runs: x = 0 + 4 = 4."
      },
      {
        id: "PB-108",
        srNo: 108,
        question: "Given nested structure:\nx = 2; a = 5; b = 5\nif a > 0:\n    if b < 0: x = x + 5\n    elif a > 5: x = x + 4\n    else: x = x + 3\nelse: x = x + 2\nprint(x)",
        options: ["0", "5", "2", "3"],
        answer: "B",
        correct: "5",
        explanation: "a=5 (>0). b=5 (not <0). a>5 is False. Runs `else: x = 2 + 3 = 5`."
      },
      {
        id: "PB-109",
        srNo: 109,
        question: "a, b = 12, 5\nif a + b:\n    print('True')\nelse:\n    print('False')",
        options: ["False", "True", "Can't predict", "None of these"],
        answer: "B",
        correct: "True",
        explanation: "17 is truthy, so prints 'True'."
      },
      {
        id: "PB-110",
        srNo: 110,
        question: "Which of the following is not used as loop in Python?",
        options: ["for loop", "while loop", "do-while loop", "None of the above"],
        answer: "C",
        correct: "do-while loop",
        explanation: "Python does not have native do-while loops."
      },
      {
        id: "PB-111",
        srNo: 111,
        question: "A loop becomes infinite loop if a condition never becomes _______.",
        options: ["True", "False", "Null", "Both A and C"],
        answer: "B",
        correct: "False",
        explanation: "Loops continue while condition is True."
      },
      {
        id: "PB-112",
        srNo: 112,
        question: "If else statement is used with while loop, else executes when condition becomes ____.",
        options: ["True", "False", "Infinite", "Null"],
        answer: "B",
        correct: "False",
        explanation: "`while-else` executes when loop condition turns False naturally."
      },
      {
        id: "PB-113",
        srNo: 113,
        question: "Python allows using one loop inside another loop known as?",
        options: ["switch", "foreach", "nested", "forall"],
        answer: "C",
        correct: "nested",
        explanation: "Nested loop."
      },
      {
        id: "PB-114",
        srNo: 114,
        question: "n=7, c=0, while(n): if(n>5): c=c+n-1, n=n-1 else: break, print(n), print(c)",
        options: ["4 16", "5 11", "6 7", "5 10"],
        answer: "B",
        correct: "5 11",
        explanation: "n=7: c=0+6=6, n=6. n=6: c=6+5=11, n=5. n=5: break. Prints n=5, c=11."
      },
      {
        id: "PB-115",
        srNo: 115,
        question: "How many times will loop run? i=2; while(i>0): i=i-1",
        options: ["2", "3", "1", "0"],
        answer: "A",
        correct: "2",
        explanation: "i=2 -> i=1 -> i=0. Runs 2 times."
      },
      {
        id: "PB-116",
        srNo: 116,
        question: "How many times will the condition be checked? i=2; while(i>0): i=i-1",
        options: ["2", "3", "1", "0"],
        answer: "B",
        correct: "3",
        explanation: "Checked at i=2 (True), i=1 (True), i=0 (False). 3 total checks."
      },
      {
        id: "PB-117",
        srNo: 117,
        question: "var = 10, for i in range(10): for j in range(2, 10, 1): if var % 2 == 0: continue var += 1 else: var += 1, print(var)",
        options: ["20", "21", "10", "30"],
        answer: "B",
        correct: "21",
        explanation: "Outer for-else block executes after loop completion adding 1 to reach 21."
      },
      {
        id: "PB-118",
        srNo: 118,
        question: "for i in range(0,2,-1): print(\"Hello\")",
        options: ["Hello", "Hello Hello", "No Output", "Error"],
        answer: "C",
        correct: "No Output",
        explanation: "Step -1 cannot go from 0 up to 2."
      },
      {
        id: "PB-119",
        srNo: 119,
        question: "Which of the following is a valid for loop in Python?",
        options: ["for(i=0; i < n; i++)", "for i in range(0,5):", "for i in range(0,5)", "for i in range(5)"],
        answer: "B",
        correct: "for i in range(0,5):",
        explanation: "Ends with colon `:`."
      },
      {
        id: "PB-120",
        srNo: 120,
        question: "Which sequence is generated by range(5, 0, -2)?",
        options: ["5 4 3 2 1 0 -1", "5 4 3 2 1 0", "5 3 1", "None of the above"],
        answer: "C",
        correct: "5 3 1",
        explanation: "Decrements by 2: 5, 3, 1."
      },
      {
        id: "PB-121",
        srNo: 121,
        question: "for num in range(-2,-5,-1): print(num, end=\", \")",
        options: ["-2, -1, -3, -4", "-2, -1, 0, 1, 2, 3,", "-2, -1, 0", "-2, -3, -4,"],
        answer: "D",
        correct: "-2, -3, -4,",
        explanation: "Generates -2, -3, -4."
      },
      {
        id: "PB-122",
        srNo: 122,
        question: "x = 12; for i in x: print(i)",
        options: ["12", "12 12", "Error", "None of the above"],
        answer: "C",
        correct: "Error",
        explanation: "`TypeError: 'int' object is not iterable`."
      },
      {
        id: "PB-123",
        srNo: 123,
        question: "x = 0; for i in range(10): for j in range(-1, -10, -1): x += 1; print(x)",
        options: ["99", "90", "100", "101"],
        answer: "B",
        correct: "90",
        explanation: "10 * 9 iterations = 90."
      },
      {
        id: "PB-124",
        srNo: 124,
        question: "for num in range(2,-5,-1): print(num, end=\", \")",
        options: ["2, 1, 0,", "2, 1, 0, -1, -2, -3, -4, -5,", "2, 1, 0, -1, -2, -3, -4,", "None of these"],
        answer: "C",
        correct: "2, 1, 0, -1, -2, -3, -4,",
        explanation: "Generates 2 down to -4."
      },
      {
        id: "PB-125",
        srNo: 125,
        question: "x = 0; while (x < 100): x += 2; print(x)",
        options: ["101", "99", "None of above, infinite loop", "100"],
        answer: "D",
        correct: "100",
        explanation: "Loop stops when x reaches 100."
      },
      {
        id: "PB-126",
        srNo: 126,
        question: "nested loop: for num in range(10, 14): for i in range(2, num): if num%i == 1: print(num); break",
        options: ["11 12 13 14", "10 11 12 13", "9 10 11 12", "12 13 14 15"],
        answer: "B",
        correct: "10 11 12 13",
        explanation: "Prints 10, 11, 12, 13."
      },
      {
        id: "PB-127",
        srNo: 127,
        question: "i = 1; while True: if i%3 == 0: break; print(i); i += 1",
        options: ["1 2", "1 2 3", "Error", "None of these"],
        answer: "A",
        correct: "1 2",
        explanation: "Prints 1 then 2. Breaks when i=3."
      },
      {
        id: "PB-128",
        srNo: 128,
        question: "i = 1; while True: if i%2 == 0: break; print(i); i += 2",
        options: ["1 2", "1 2 3 4...", "1 3 5 7 9 11...", "None"],
        answer: "D",
        correct: "1 3 5 7 9 11...",
        explanation: "i remains odd (1,3,5...) so `i%2==0` is never True, creating infinite odd sequence."
      },
      {
        id: "PB-129",
        srNo: 129,
        question: "i = 2; while True: if i%3 == 0: break; print(i); i += 2",
        options: ["2 4 6 8 10..", "2 4", "2 3", "Error"],
        answer: "B",
        correct: "2 4",
        explanation: "Prints 2, 4. When i=6 (divisible by 3), breaks."
      },
      {
        id: "PB-130",
        srNo: 130,
        question: "i = 1; while False: if i%2 == 0: break; print(i); i += 2",
        options: ["1", "1 3 5 7..", "1 2 3 4..", "None of these"],
        answer: "D",
        correct: "None of these",
        explanation: "while condition is False, so loop never runs (no output)."
      },
      {
        id: "PB-131",
        srNo: 131,
        question: "True = False; while True: print(True); break",
        options: ["True", "False", "None", "Error"],
        answer: "D",
        correct: "Error",
        explanation: "Assigning to reserved keyword `True` is a SyntaxError."
      },
      {
        id: "PB-132",
        srNo: 132,
        question: "for i in range(0): print(i)",
        options: ["0", "No output", "Error", "None of mentioned"],
        answer: "B",
        correct: "No output",
        explanation: "range(0) is empty."
      },
      {
        id: "PB-133",
        srNo: 133,
        question: "for i in range(2.0): print(i)",
        options: ["0.0 1.0", "1", "Error", "None of mentioned"],
        answer: "C",
        correct: "Error",
        explanation: "`TypeError: 'float' object cannot be interpreted as an integer`."
      },
      {
        id: "PB-134",
        srNo: 134,
        question: "for i in range(int(2.0)): print(i)",
        options: ["0.0 1.0", "0 1", "Error", "None of mentioned"],
        answer: "B",
        correct: "0 1",
        explanation: "`int(2.0)` is 2. Prints 0 then 1."
      },
      {
        id: "PB-135",
        srNo: 135,
        question: "for i in range(float('inf')): print(i)",
        options: ["0.0 0.1 0.2...", "0 1 2 3...", "0.0 1.0 2.0...", "None of mentioned"],
        answer: "D",
        correct: "None of mentioned",
        explanation: "Raises `TypeError: 'float' object cannot be interpreted as an integer`."
      },
      {
        id: "PB-136",
        srNo: 136,
        question: "for i in range(5): if i == 5: break else: print(i) else: print(\"Here\")",
        options: ["0 1 2 3 4 Here", "0 1 2 3 4 5 Here", "0 1 2 3 4", "1 2 3 4 5"],
        answer: "A",
        correct: "0 1 2 3 4 Here",
        explanation: "Prints 0 to 4, then for-else prints 'Here'."
      },
      {
        id: "PB-137",
        srNo: 137,
        question: "for i in range(10): if i == 5: break else: print(i) else: print(\"Here\")",
        options: ["0 1 2 3 4 Here", "0 1 2 3 4 5 Here", "0 1 2 3 4", "1 2 3 4 5"],
        answer: "C",
        correct: "0 1 2 3 4",
        explanation: "Breaks at i=5 so for-else is skipped."
      },
      {
        id: "PB-138",
        srNo: 138,
        question: "x = 2; for i in range(x): x -= 2; print(x)",
        options: ["0 1 2 3 4", "0 -2", "0", "Error"],
        answer: "B",
        correct: "0 -2",
        explanation: "Loop runs 2 times: i=0 -> x=0; i=1 -> x=-2."
      },
      {
        id: "PB-139",
        srNo: 139,
        question: "x = 2; for i in range(x): x += 1; print(x)",
        options: ["0 1 2 3 4..", "0 1", "3 4", "0 1 2 3"],
        answer: "C",
        correct: "3 4",
        explanation: "i=0 -> x=3; i=1 -> x=4."
      },
      {
        id: "PB-140",
        srNo: 140,
        question: "i = 0; while i < 5: print(i); i += 1; if i == 3: break else: print(0); print(0)",
        options: ["0 1 2 0", "0 1 2 2 0", "Error", "None of these"],
        answer: "A",
        correct: "0 1 2 0",
        explanation: "Prints 0, 1, 2. At i=3 breaks. Outer print(0) runs."
      },
      {
        id: "PB-141",
        srNo: 141,
        question: "i = 0; while i < 3: print(i); i += 1 else: print(0); print(0)",
        options: ["0 1 2 0", "0 1 2 3 0", "0 1 2 0", "Error"],
        answer: "C",
        correct: "0 1 2 0",
        explanation: "Prints 0, 1, 2 then while-else prints 0."
      },
      {
        id: "PB-142",
        srNo: 142,
        question: "x = 2; for i in range(x): x -= 2; print(x)",
        options: ["0 1 2 3 4..", "0 -2", "0", "error"],
        answer: "B",
        correct: "0 -2",
        explanation: "Prints 0 then -2."
      },
      {
        id: "PB-143",
        srNo: 143,
        question: "The continue statement can be used in?",
        options: ["while loop", "for loop", "do-while", "Both A and B"],
        answer: "D",
        correct: "Both A and B",
        explanation: "Works in both for and while loops."
      },
      {
        id: "PB-144",
        srNo: 144,
        question: "int(\"Enter value of x:\") for in range[0, 10]: print(\"They are equal\") else: print(\"They are unequal\")",
        options: ["They are unequal", "They are equal", "0,1,2,3,4,5,6,7,8,9", "SyntaxError"],
        answer: "D",
        correct: "SyntaxError",
        explanation: "Malformed for loop syntax."
      },
      {
        id: "PB-145",
        srNo: 145,
        question: "a = 5; b = 5.0; print('yes') if (a == b) else 'no'",
        options: ["yes", "no", "ZeroError", "SyntaxError"],
        answer: "A",
        correct: "yes",
        explanation: "5 == 5.0 is True."
      },
      {
        id: "PB-146",
        srNo: 146,
        question: "a = b = 0 if (a = b): print(0) else: print('otherwise')",
        options: ["yes", "0", "ZeroError", "SyntaxError"],
        answer: "D",
        correct: "SyntaxError",
        explanation: "Assignment `a = b` inside if condition is invalid syntax."
      },
      {
        id: "PB-147",
        srNo: 147,
        question: "Step = 3; for e in range(0, Step): if e%2==0: print('hello') else: print('goodbye')",
        options: ["3", "NameError", "ZeroError", "SyntaxError"],
        answer: "B",
        correct: "NameError",
        explanation: "Variable name `step` in `range(0, step)` is lowercase, but `Step = 3` is capitalized (case-sensitive)."
      },
      {
        id: "PB-148",
        srNo: 148,
        question: "x = 123; for i in x: print(i)",
        options: ["1 2 3", "123", "TypeError", "KeyError"],
        answer: "C",
        correct: "TypeError",
        explanation: "Integers are not iterable."
      },
      {
        id: "PB-149",
        srNo: 149,
        question: "theSum = 0; for count in range(2, 11, 2): theSum += count; print(theSum)",
        options: ["25", "20", "30", "23"],
        answer: "C",
        correct: "30",
        explanation: "2 + 4 + 6 + 8 + 10 = 30."
      },
      {
        id: "PB-150",
        srNo: 150,
        question: "a = True, b = False, c = False\nif not a or b: print(1)\nelif not a or not b and c: print(2)\nelif not a or b or not b and a: print(3)\nelse: print(4)",
        options: ["1", "2", "3", "4"],
        answer: "C",
        correct: "3",
        explanation: "`not b and a` evaluates to `True and True = True`, matching 3rd condition."
      },
      {
        id: "PB-151",
        srNo: 151,
        question: "var = 10; for i in range(5): for j in range(2, 3, 1): if var%2 == 0: break; var += 1; var+=1 else: var+=1; print(var)",
        options: ["19", "20", "21", "14"],
        answer: "B",
        correct: "20",
        explanation: "Nested loop variable modifications evaluate to 20."
      },
      {
        id: "PB-152",
        srNo: 152,
        question: "A=70\nif A>90: print('Grade A')\nelif A>70 and A<90: print('Grade B')\nelif A>50 and A<70: print('Grade C')\nelif A>35 and A<50: print('Grade D')\nelse: print('Fail')",
        options: ["Grade A", "Grade B", "Grade C", "Fail"],
        answer: "D",
        correct: "Fail",
        explanation: "70 is not strictly > 70, so all elifs fail down to else."
      },
      {
        id: "PB-153",
        srNo: 153,
        question: "seconds=3650\nif seconds>=3600: hour=seconds//3600; seconds %= 3600; print(hour,\"hours\",end=\" \")\nif seconds>=60: minute=seconds//60; seconds %= 60; print(minute,\"minutes\",end=\" \")\nif seconds>0: print(seconds,\"seconds\")",
        options: ["1 hours 50 seconds", "1 hours 0 minutes 50 seconds", "1 hours 50 minutes", "0 hours 0 minutes 3650 seconds"],
        answer: "A",
        correct: "1 hours 50 seconds",
        explanation: "3650s = 1 hr (remaining 50s). 50s is < 60, so minutes skip. Prints `1 hours 50 seconds`."
      },
      {
        id: "PB-154",
        srNo: 154,
        question: "A=0\nfor i in range(4):\n    if i%2==0: pass\n    else: continue\n    break\n    A+=1\nprint(A)",
        options: ["4", "3", "2", "0"],
        answer: "D",
        correct: "0",
        explanation: "At i=0 (even), `pass` runs then `break` immediately terminates loop before `A+=1`. A remains 0."
      },
      {
        id: "PB-155",
        srNo: 155,
        question: "count = 0\nwhile(True):\n    if count % 3 == 0: print(count, end = \" \")\n    if(count > 15): break\n    count += 1",
        options: ["0 3 6 9 12 15", "0 1 2 3", "0 3 6 9", "0 3 6 9 12"],
        answer: "A",
        correct: "0 3 6 9 12 15",
        explanation: "Prints multiples of 3 up to 15."
      },
      {
        id: "PB-156",
        srNo: 156,
        question: "a = True, b = False, c = True\nif not a or b: print (\"a\")\nelif not a or not b and c: print (\"b\")\nelif not a or b or not b and a: print (\"c\")\nelse: print (\"d\")",
        options: ["a", "b", "c", "d"],
        answer: "B",
        correct: "b",
        explanation: "`not b and c` -> `True and True` -> True. Prints \"b\"."
      },
      {
        id: "PB-157",
        srNo: 157,
        question: "if 5 + 5 == 10: print(\"TRUE\") else: print(\"FALSE\"); print(\"TRUE\")",
        options: ["TRUE", "FALSE", "TRUE FALSE", "TRUE TRUE"],
        answer: "D",
        correct: "TRUE TRUE",
        explanation: "Prints TRUE in if block, then outer print prints TRUE."
      },
      {
        id: "PB-158",
        srNo: 158,
        question: "for num in range(26, 30): for i in range(2, num): if num%i == 1: print(num, end=','); break",
        options: ["26,27,28", "26,27,28,29", "26,27,28,29,", "27,29"],
        answer: "C",
        correct: "26,27,28,29,",
        explanation: "Prints all numbers with trailing comma."
      },
      {
        id: "PB-159",
        srNo: 159,
        question: "var = 10; for i in range(10): for j in range(2, 10, 1): if var % 2 == 0: var += 1; continue; var+=1 else: var+=1; print(var)",
        options: ["20", "21", "30", "31"],
        answer: "D",
        correct: "31",
        explanation: "Var updates inside loop evaluate to 31."
      },
      {
        id: "PB-160",
        srNo: 160,
        question: "a=5, b=7, c=2\nif a>b: a,b = b,a\nif a>c: a,c = c,a\nif b>c: b,c = c,b\nprint(a,b,c,end=\",\")",
        options: ["2,5,7", "7,5,2", "2 5 7,", "7 5 2,"],
        answer: "C",
        correct: "2 5 7,",
        explanation: "Sorts 3 numbers ascending: 2 5 7,"
      },
      {
        id: "PB-161",
        srNo: 161,
        question: "x = 0; for i in range(1,10): for j in range(-1, -10, -1): x += 1; print(x)",
        options: ["81", "90", "80", "99"],
        answer: "A",
        correct: "81",
        explanation: "9 * 9 = 81 total increments."
      },
      {
        id: "PB-162",
        srNo: 162,
        question: "x = 0; while (x < 100): x+=3; print(x)",
        options: ["98", "99", "100", "102"],
        answer: "D",
        correct: "102",
        explanation: "Increments by 3. 99 + 3 = 102."
      },
      {
        id: "PB-163",
        srNo: 163,
        question: "if (9 < 0) and (0 < -9): print(\"hello\")\nelif (9 > 0) or False: print(\"good\")\nelse: print(\"bad\")",
        options: ["IndentationError", "hello", "good", "bad"],
        answer: "C",
        correct: "good",
        explanation: "`9 > 0` is True, so elif block prints \"good\"."
      },
      {
        id: "PB-164",
        srNo: 164,
        question: "c=1, s=0; while c<=8: c=c-1; s=s+c; c=c+2; print(s)",
        options: ["28", "30", "21", "35"],
        answer: "A",
        correct: "28",
        explanation: "Loop accumulates sum s = 28."
      },
      {
        id: "PB-165",
        srNo: 165,
        question: "x=0; while x<10: if x%3==0: x+=5; continue; if x%2==0: x+=14 else: x+=1 else: x+=1; print(x)",
        options: ["10", "11", "12", "0"],
        answer: "C",
        correct: "12",
        explanation: "x becomes 12."
      },
      {
        id: "PB-166",
        srNo: 166,
        question: "val = 154; while(not(val)): val**=2 else: val//=2; print(val)",
        options: ["77", "11", "154", "11858"],
        answer: "A",
        correct: "77",
        explanation: "154 // 2 = 77."
      },
      {
        id: "PB-167",
        srNo: 167,
        question: "n=10, i=1; while(i<=n): k=0; if(n%i==0): j=1; while(j<=i): if(i%j==0): k=k+1; j=j+1; if(k==2): print(i,end=\" \"); i=i+1",
        options: ["2 5", "10", "100", "20"],
        answer: "A",
        correct: "2 5",
        explanation: "Prints prime factors of 10: 2 and 5."
      },
      {
        id: "PB-168",
        srNo: 168,
        question: "i,j=1,4; while True: if(i%7==0 or j%9==0): break; i+=1; j+=1; print(i,j)",
        options: ["5 9", "6 7", "6 9", "7 9"],
        answer: "C",
        correct: "6 9",
        explanation: "Breaks when j=9 (i=6, j=9). Prints 6 9."
      },
      {
        id: "PB-169",
        srNo: 169,
        question: "n=5, c=0; while(n): if(n>5): c=c+n-1; n=n-1 else: c=c+n-1; break; print(n, c)",
        options: ["5 4", "5 0", "5 1 1", "4 0"],
        answer: "A",
        correct: "5 4",
        explanation: "n=5 -> c=0+4=4 -> break. Prints 5 4."
      },
      {
        id: "PB-170",
        srNo: 170,
        question: "for x in range(0,15): if(x%3==0): continue if(x%5==0): continue if(x%7==0): break print(x,end=\" \")",
        options: ["1 2 4", "0 1 2 4", "0 1 2 3 4 5 6", "1 2 3 4 5 6"],
        answer: "A",
        correct: "1 2 4",
        explanation: "Skips multiples of 3 and 5. Breaks at x=7. Prints 1 2 4."
      },
      {
        id: "PB-171",
        srNo: 171,
        question: "for i in range (1,11): sum=0; sum+=i; print(sum)",
        options: ["10", "11", "55", "0"],
        answer: "A",
        correct: "10",
        explanation: "sum is reset to 0 in each loop iteration! At last step (i=10), sum=10."
      },
      {
        id: "PB-172",
        srNo: 172,
        question: "n=6; for i in range(4,n,1): if i==5: break else: print(n)",
        options: ["no output", "4", "5", "n"],
        answer: "A",
        correct: "no output",
        explanation: "i=4 (runs), i=5 breaks loop before for-else can execute."
      },
      {
        id: "PB-173",
        srNo: 173,
        question: "n=1; for i in range(1,n,1): print(\"hello\") else: print(\"hi\")",
        options: ["hi", "hello", "no output", "value errror"],
        answer: "A",
        correct: "hi",
        explanation: "range(1,1) is empty, for-else executes immediately printing \"hi\"."
      },
      {
        id: "PB-174",
        srNo: 174,
        question: "for i in range(1,11): x=0; x+=i; while(x<15): if i%2==0: x+=1 else: x+=2; print(x)",
        options: ["15", "17", "16", "14"],
        answer: "A",
        correct: "15",
        explanation: "Loop terminates when x reaches 15."
      },
      {
        id: "PB-175",
        srNo: 175,
        question: "x=10; if x<15: print(\"h\",end=\" \") elif x>12: print(\"i\",end=\" \") else: print(\"student\",end=\" \"); if x<9: print(\"name\",end=\" \") else: print(\"Name\",end=\"\")",
        options: ["h Name", "H name", "hi", "hi name"],
        answer: "A",
        correct: "h Name",
        explanation: "First if prints \"h \". Second if-else prints \"Name\". Result: \"h Name\"."
      },
      {
        id: "PB-176",
        srNo: 176,
        question: "x=0, count=0; while x<15: if x%2==0: x+=1; continue if x%3==0: x+=1; continue if count==5: break count+=1; print(x,count)",
        options: ["1 5", "1 5 5", "5", "0"],
        answer: "A",
        correct: "1 5",
        explanation: "Prints 1 5."
      },
      {
        id: "PB-177",
        srNo: 177,
        question: "x=0, count=0; for x in range(10): while x<15: if x<0: pass elif x%2==0: x+=1; continue elif x%3==0: x+=1; continue elif count==5: break count+=1; print(x,count)",
        options: ["11 5", "10 5", "16 5", "14 5"],
        answer: "A",
        correct: "11 5",
        explanation: "Prints 11 5."
      }
    ],
    coding: [
      {
        id: "PB-178",
        srNo: 178,
        marks: 3,
        question: "Write a program to determine a given number is 'odd' or 'even' and print \"Number is ODD\" or \"Number is Even\".",
        topic: "Odd/Even Check",
        difficulty: "easy",
        starterCode: "num = int(input('Number: '))\nif num % 2 == 0:\n    print('Number is Even')\nelse:\n    print('Number is ODD')",
        solution: "n = int(input('Enter number: '))\nprint('Number is Even' if n % 2 == 0 else 'Number is ODD')",
        explanation: "Uses modulo 2 to test even/odd."
      },
      {
        id: "PB-179",
        srNo: 179,
        marks: 3,
        question: "Write a program to check if the input number is positive, negative or zero.",
        topic: "Sign Check",
        difficulty: "easy",
        starterCode: "n = float(input('Number: '))\nif n > 0: print('Positive')\nelif n < 0: print('Negative')\nelse: print('Zero')",
        solution: "n = float(input('Num: '))\nprint('Positive' if n>0 else ('Negative' if n<0 else 'Zero'))",
        explanation: "Three-way conditional branch."
      },
      {
        id: "PB-180",
        srNo: 180,
        marks: 7,
        question: "Write a program to find the maximum number among the three input numbers.",
        topic: "Max of 3",
        difficulty: "medium",
        starterCode: "a = float(input('a: '))\nb = float(input('b: '))\nc = float(input('c: '))\nif a>=b and a>=c: m = a\nelif b>=a and b>=c: m = b\nelse: m = c\nprint('Max:', m)",
        solution: "a,b,c = float(input('a: ')), float(input('b: ')), float(input('c: '))\nprint('Maximum:', max(a,b,c))",
        explanation: "Finds max using conditionals."
      },
      {
        id: "PB-181",
        srNo: 181,
        marks: 3,
        question: "Write a Python Program to Compute the product of the odd digits in a given number, 0 if there are not any odd digits.\nExample:\nInput: 123456789 => Output: 945\nInput: 2468 => Output: 0\nInput: 123547 => Output: 105",
        topic: "Digit Product",
        difficulty: "medium",
        starterCode: "s = input('Number: ')\nprod = 1\nhas_odd = False\nfor d in s:\n    val = int(d)\n    if val % 2 != 0:\n        prod *= val\n        has_odd = True\nprint(prod if has_odd else 0)",
        solution: "s = input('Num: ')\np = 1; found = False\nfor c in s:\n    if int(c)%2 != 0: p *= int(c); found = True\nprint(p if found else 0)",
        explanation: "Iterates through digits multiplying odd ones."
      },
      {
        id: "PB-182",
        srNo: 182,
        marks: 7,
        question: "Write a program to check if year is a leap year or not (Nested If).",
        topic: "Nested If Leap Year",
        difficulty: "medium",
        starterCode: "y = int(input('Year: '))\nif y % 4 == 0:\n    if y % 100 == 0:\n        if y % 400 == 0:\n            print('Leap Year')\n        else:\n            print('Not Leap Year')\n    else:\n        print('Leap Year')\nelse:\n    print('Not Leap Year')",
        solution: "y = int(input('Year: '))\nif y % 4 == 0:\n    if y % 100 == 0:\n        print('Leap Year' if y % 400 == 0 else 'Not Leap Year')\n    else: print('Leap Year')\nelse: print('Not Leap Year')",
        explanation: "Implements nested leap year decision tree."
      },
      {
        id: "PB-183",
        srNo: 183,
        marks: 4,
        question: "Write a program to find sum of first N natural numbers given by user.",
        topic: "Sum Accumulation",
        difficulty: "easy",
        starterCode: "n = int(input('N: '))\ntotal = n * (n + 1) // 2\nprint('Sum:', total)",
        solution: "n = int(input('N: '))\nprint(f'Sum = {sum(range(1, n+1))}')",
        explanation: "Sum = n*(n+1)/2."
      },
      {
        id: "PB-184",
        srNo: 184,
        marks: 4,
        question: "Write a program to find average of first N natural numbers given by user.",
        topic: "Average Formula",
        difficulty: "easy",
        starterCode: "n = int(input('N: '))\navg = (n + 1) / 2\nprint('Average:', avg)",
        solution: "n = int(input('N: '))\nprint(f'Average = {(n+1)/2}')",
        explanation: "Average = (1 + n) / 2."
      },
      {
        id: "PB-185",
        srNo: 185,
        marks: 4,
        question: "Write a python program to read three numbers (a,b,c) and check how many numbers between 'a' and 'b' are divisible by 'c'.",
        topic: "Range Divisibility",
        difficulty: "medium",
        starterCode: "a = int(input('a: '))\nb = int(input('b: '))\nc = int(input('c: '))\ncount = sum(1 for i in range(a, b+1) if i % c == 0)\nprint('Count divisible:', count)",
        solution: "a,b,c = int(input('a: ')), int(input('b: ')), int(input('c: '))\nprint('Count:', sum(1 for x in range(a, b+1) if x % c == 0))",
        explanation: "Iterates from a to b counting numbers divisible by c."
      },
      {
        id: "PB-186",
        srNo: 186,
        marks: 4,
        question: "Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.",
        topic: "Loop Filtering",
        difficulty: "easy",
        starterCode: "for i in range(7):\n    if i == 3 or i == 6:\n        continue\n    print(i, end=' ')",
        solution: "for i in range(7):\n    if i not in (3, 6): print(i, end=' ')",
        explanation: "Skips 3 and 6 using `continue` or condition."
      },
      {
        id: "PB-187",
        srNo: 187,
        marks: 4,
        question: "Write a Python program to print the multiplication table of given number by user.",
        topic: "Multiplication Table",
        difficulty: "easy",
        starterCode: "num = int(input('Number: '))\nfor i in range(1, 11):\n    print(f'{num} x {i} = {num * i}')",
        solution: "n = int(input('Num: '))\nfor i in range(1, 11): print(f'{n} x {i} = {n*i}')",
        explanation: "Prints n x 1 to n x 10."
      },
      {
        id: "PB-188",
        srNo: 188,
        marks: 4,
        question: "Write a program to find the factorial of a number provided by the user.",
        topic: "Factorial",
        difficulty: "easy",
        starterCode: "n = int(input('Number: '))\nf = 1\nfor i in range(1, n+1): f *= i\nprint('Factorial:', f)",
        solution: "import math\nn = int(input('Num: '))\nprint('Factorial:', math.factorial(n))",
        explanation: "Multiplies numbers 1 to n."
      },
      {
        id: "PB-189",
        srNo: 189,
        marks: 4,
        question: "Write a python program to display the Fibonacci sequence up to n-th term.",
        topic: "Fibonacci Sequence",
        difficulty: "medium",
        starterCode: "n = int(input('n: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        solution: "n = int(input('n: '))\na, b = 0, 1\nfor _ in range(n): print(a, end=' '); a, b = b, a+b",
        explanation: "Prints n terms of Fibonacci."
      },
      {
        id: "PB-190",
        srNo: 190,
        marks: 4,
        question: "Write a program to take 10 values from keyboard using loop and print their average on the screen.",
        topic: "Loop Accumulator",
        difficulty: "easy",
        starterCode: "total = 0\nfor i in range(10):\n    val = float(input(f'Enter value {i+1}: '))\n    total += val\nprint('Average:', total / 10)",
        solution: "tot = sum(float(input('Val: ')) for _ in range(10))\nprint(f'Average = {tot/10}')",
        explanation: "Sums 10 input values and divides by 10."
      },
      {
        id: "PB-191",
        srNo: 191,
        marks: 4,
        question: "Write a program to reverse a number.",
        topic: "Number Reversal",
        difficulty: "easy",
        starterCode: "num = input('Number: ')\nrev = num[::-1]\nprint('Reversed:', rev)",
        solution: "n = input('Number: ')\nprint('Reversed:', n[::-1])",
        explanation: "Reverses string representation of number."
      },
      {
        id: "PB-192",
        srNo: 192,
        marks: 4,
        question: "Write a program to check whether a number is Armstrong number or not.",
        topic: "Armstrong Check",
        difficulty: "medium",
        starterCode: "n = int(input('Number: '))\ns = str(n)\np = len(s)\nif sum(int(d)**p for d in s) == n:\n    print('Armstrong Number')\nelse:\n    print('Not Armstrong')",
        solution: "n = int(input('Num: '))\ns = str(n); p = len(s)\nprint('Armstrong' if sum(int(d)**p for d in s)==n else 'Not')",
        explanation: "Checks sum of digit powers."
      },
      {
        id: "PB-193",
        srNo: 193,
        marks: 4,
        question: "Write a program to check if a number is prime or not.",
        topic: "Prime Check",
        difficulty: "medium",
        starterCode: "n = int(input('Number: '))\nis_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\nprint('Prime' if is_prime else 'Not Prime')",
        solution: "n = int(input('Num: '))\nif n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1)):\n    print('Prime')\nelse: print('Not Prime')",
        explanation: "Tests divisibility up to sqrt(n)."
      },
      {
        id: "PB-194",
        srNo: 194,
        marks: 4,
        question: "Write a program to print prime numbers between given interval from user.",
        topic: "Prime Interval",
        difficulty: "medium",
        starterCode: "start = int(input('Start: '))\nend = int(input('End: '))\nfor n in range(start, end+1):\n    if n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1)):\n        print(n, end=' ')",
        solution: "s, e = int(input('Start: ')), int(input('End: '))\nfor n in range(s, e+1):\n    if n > 1 and all(n%i!=0 for i in range(2, int(n**0.5)+1)): print(n, end=' ')",
        explanation: "Prints all primes in range [start, end]."
      },
      {
        id: "PB-195",
        srNo: 195,
        marks: 4,
        question: "Draw a pattern using a python program:\n*\n* *\n* * *\n* * * *",
        topic: "Star Pattern 1",
        difficulty: "easy",
        starterCode: "for i in range(1, 5):\n    print('* ' * i)",
        solution: "for i in range(1, 5): print('* ' * i)",
        explanation: "Prints 1 to 4 stars per line."
      },
      {
        id: "PB-196",
        srNo: 196,
        marks: 4,
        question: "Draw a pattern:\n* * * *\n* * *\n* *\n*",
        topic: "Star Pattern 2",
        difficulty: "easy",
        starterCode: "for i in range(4, 0, -1):\n    print('* ' * i)",
        solution: "for i in range(4, 0, -1): print('* ' * i)",
        explanation: "Decrements stars from 4 down to 1."
      },
      {
        id: "PB-197",
        srNo: 197,
        marks: 4,
        question: "Draw a pattern using a python program:\n1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1",
        topic: "Number Pattern 1",
        difficulty: "easy",
        starterCode: "for i in range(5, 0, -1):\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()",
        solution: "for i in range(5, 0, -1):\n    print(' '.join(str(x) for x in range(1, i+1)))",
        explanation: "Decrementing number sequence per line."
      },
      {
        id: "PB-198",
        srNo: 198,
        marks: 3,
        question: "Draw a pattern using a python program:\n1\n1 2\n1 2 3\n1 2 3 4",
        topic: "Number Pattern 2",
        difficulty: "easy",
        starterCode: "for i in range(1, 5):\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()",
        solution: "for i in range(1, 5):\n    print(' '.join(str(x) for x in range(1, i+1)))",
        explanation: "Incrementing number sequence per line."
      },
      {
        id: "PB-199",
        srNo: 199,
        marks: 3,
        question: "Draw a pattern using a python program:\n1\n2 2\n3 3 3\n4 4 4 4",
        topic: "Repeated Digit Pattern",
        difficulty: "easy",
        starterCode: "for i in range(1, 5):\n    print((str(i) + ' ') * i)",
        solution: "for i in range(1, 5): print((str(i) + ' ') * i)",
        explanation: "Repeats current row number i times."
      },
      {
        id: "PB-200",
        srNo: 200,
        marks: 4,
        question: "Draw a pattern using a python program:\n*\n# #\n* * *\n# # # #",
        topic: "Alternating Pattern",
        difficulty: "medium",
        starterCode: "for i in range(1, 5):\n    ch = '*' if i % 2 != 0 else '#'\n    print((ch + ' ') * i)",
        solution: "for i in range(1, 5):\n    char = '*' if i%2!=0 else '#'\n    print((char+' ')*i)",
        explanation: "Alternates between '*' for odd rows and '#' for even rows."
      },
      {
        id: "PB-201",
        srNo: 201,
        marks: 4,
        question: "Draw a pattern using a python program:\n1\n0 1\n1 0 1\n0 1 0 1",
        topic: "Binary Toggle Pattern",
        difficulty: "medium",
        starterCode: "for i in range(1, 5):\n    for j in range(i):\n        val = 1 if (i + j) % 2 == 0 else 0\n        print(val, end=' ')\n    print()",
        solution: "for i in range(1, 5):\n    for j in range(i):\n        print(1 if (i+j)%2==0 else 0, end=' ')\n    print()",
        explanation: "Toggles 1 and 0 based on sum of row and column indices."
      },
      {
        id: "PB-202",
        srNo: 202,
        marks: 9,
        question: "Gross Pay, Annual Income and Income Tax Calculator:\nWrite a Python Program to make the gross pay, annual income and income tax calculator using following data:\nGross Pay = Basic Pay + HRA + DRA + Other Allowances + TA - Professional Tax - EPF.\nBasic Pay: A=60000, B=50000, C=40000, D=30000, E=20000, F=10000.\nOther Allowances: A=8000, B=7000, C=6000, D=5000, E=4000, F=3000.\nHRA: City Tier 1 = 30%, Tier 2 = 20%, Tier 3 = 10% of Basic.\nDRA = 50% of Basic, TA = 900, Prof Tax = 200, EPF = 11% of Basic.\nAnnual Income = Gross Pay * 12.\nTax Slabs (AY 2022-23):\nUp to 2.5L: 0%\n2.5L to 5L: 5%\n5L to 7.5L: 10% (+12,500)\n7.5L to 10L: 15% (+37,500)\n10L to 12.5L: 20% (+75,000)\n12.5L to 15L: 25% (+1,25,000)\nAbove 15L: 30% (+1,87,500)",
        topic: "Complete Payroll & Tax App",
        difficulty: "hard",
        starterCode: "grade = input('Grade (A-F): ').upper()\ncity = int(input('City Tier (1-3): '))\n\nbasics = {'A':60000, 'B':50000, 'C':40000, 'D':30000, 'E':20000, 'F':10000}\nothers = {'A':8000, 'B':7000, 'C':6000, 'D':5000, 'E':4000, 'F':3000}\n\nbasic = basics.get(grade, 10000)\nother = others.get(grade, 3000)\nhra = basic * (0.3 if city==1 else (0.2 if city==2 else 0.1))\ndra = basic * 0.5\nta = 900\npt = 200\nepf = basic * 0.11\n\ngross = basic + hra + dra + other + ta - pt - epf\nannual = gross * 12\n\nif annual <= 250000: tax = 0\nelif annual <= 500000: tax = (annual - 250000) * 0.05\nelif annual <= 750000: tax = 12500 + (annual - 500000) * 0.10\nelif annual <= 1000000: tax = 37500 + (annual - 750000) * 0.15\nelif annual <= 1250000: tax = 75000 + (annual - 1000000) * 0.20\nelif annual <= 1500000: tax = 125000 + (annual - 1250000) * 0.25\nelse: tax = 187500 + (annual - 1500000) * 0.30\n\nprint(f'Gross Pay: {gross:.1f}')\nprint(f'Annual Income: {annual:.1f}')\nprint(f'Income Tax: {tax:.1f}')",
        solution: "grade = input('Grade: ').upper()\ncity = int(input('City Tier: '))\nbasics = {'A':60000,'B':50000,'C':40000,'D':30000,'E':20000,'F':10000}\nothers = {'A':8000,'B':7000,'C':6000,'D':5000,'E':4000,'F':3000}\nbasic = basics[grade]\nother = others[grade]\nhra = basic * (0.3 if city==1 else 0.2 if city==2 else 0.1)\ngross = basic + hra + basic*0.5 + other + 900 - 200 - basic*0.11\nannual = gross * 12\nif annual <= 250000: t = 0\nelif annual <= 500000: t = (annual-250000)*0.05\nelif annual <= 750000: t = 12500 + (annual-500000)*0.10\nelif annual <= 1000000: t = 37500 + (annual-750000)*0.15\nelif annual <= 1250000: t = 75000 + (annual-1000000)*0.20\nelif annual <= 1500000: t = 125000 + (annual-1250000)*0.25\nelse: t = 187500 + (annual-1500000)*0.30\nprint(f'Gross: {gross:.1f}, Annual: {annual:.1f}, Tax: {t:.1f}')",
        explanation: "Computes full monthly payroll and applies progressive AY 22-23 tax brackets."
      },
      {
        id: "PB-203",
        srNo: 203,
        marks: 5,
        question: "Write a python program to print all numbers between 1 and 100 (including 1 and 100) that are both, Disarium and Harshad numbers.\n- Disarium: sum of digits raised to position equals number (175 => 1^1 + 7^2 + 5^3 = 175).\n- Harshad: divisible by sum of digits (18 => 1+8=9, 18%9==0).",
        topic: "Number Theory",
        difficulty: "hard",
        starterCode: "res = []\nfor n in range(1, 101):\n    s = str(n)\n    d_sum = sum(int(d)**(i+1) for i, d in enumerate(s))\n    h_sum = sum(int(d) for d in s)\n    if d_sum == n and n % h_sum == 0:\n        res.append(n)\nprint('Both Disarium & Harshad (1-100):', res)",
        solution: "for n in range(1, 101):\n    s = str(n)\n    if sum(int(d)**(i+1) for i, d in enumerate(s)) == n and n % sum(int(d) for d in s) == 0:\n        print(n, end=' ')",
        explanation: "Validates position-power digit sum and digit sum divisibility."
      },
      {
        id: "PB-204",
        srNo: 204,
        marks: 6,
        question: "Ask user to enter 10 test scores. If score > 100, give warning and re-ask. Output:\n- Highest & Lowest scores\n- Average of scores\n- Second largest score\n- Average after dropping two lowest scores.",
        topic: "Input Validation & Data Analysis",
        difficulty: "hard",
        starterCode: "scores = []\nwhile len(scores) < 10:\n    val = float(input('Enter Test Score: '))\n    if val > 100:\n        print('Entered score is more than hundred, so enter again')\n    else:\n        scores.append(val)\n\nscores.sort()\nprint('Highest Score is:', scores[-1])\nprint('Lowest Score is:', scores[0])\nprint('Average Test Score is:', sum(scores)/10)\nprint('Second Largest Score is:', scores[-2])\nprint('Average after dropping the two lowest scores:', sum(scores[2:])/8)",
        solution: "scores = []\nwhile len(scores) < 10:\n    v = float(input('Score: '))\n    if v > 100: print('Entered score is more than hundred, so enter again')\n    else: scores.append(v)\nscores.sort()\nprint(f'Highest: {scores[-1]}, Lowest: {scores[0]}, Avg: {sum(scores)/10}')\nprint(f'Second Largest: {scores[-2]}, Dropped Avg: {sum(scores[2:])/8}')",
        explanation: "Re-asks for values >100, sorts list, computes statistics."
      },
      {
        id: "PB-205",
        srNo: 205,
        marks: 5,
        question: "Write a program to encode a number by changing digits: 0-8 increment by +1 (0->1, 1->2...8->9) and 9 replaces with 0.\nExample:\nInput: 31590218 => Output: 42601329\nInput: 9259 => Output: 0360",
        topic: "Digit Encoding",
        difficulty: "medium",
        starterCode: "s = input('Input number: ')\nencoded = ''.join(str((int(d) + 1) % 10) for d in s)\nprint('The number after encoding is:', encoded)",
        solution: "s = input('Input: ')\nprint('Output:', ''.join(str((int(c)+1)%10) for c in s))",
        explanation: "Replaces each digit with `(digit + 1) % 10`."
      },
      {
        id: "PB-206",
        srNo: 206,
        marks: 6,
        question: "Write a program to implement calculator for the date of Easter (1900-2099):\na = year % 19, b = year % 4, c = year % 7\nd = (19 * a + 24) % 30\ne = (2 * b + 4 * c + 6 * d + 5) % 7\ndateofeaster = 22 + d + e\nIf dateofeaster > 31, date is in April (day = dateofeaster - 31). If year is 1954, 1981, 2049, or 2076, subtract 7 from date.",
        topic: "Algorithm Implementation",
        difficulty: "hard",
        starterCode: "yr = int(input('Year (1900-2099): '))\na = yr % 19\nb = yr % 4\nc = yr % 7\nd = (19 * a + 24) % 30\ne = (2 * b + 4 * c + 6 * d + 5) % 7\nday = 22 + d + e\nif yr in (1954, 1981, 2049, 2076):\n    day -= 7\nif day > 31:\n    print(f'{yr}-04-{day-31:02d}')\nelse:\n    print(f'{yr}-03-{day:02d}')",
        solution: "yr = int(input('Year: '))\na, b, c = yr%19, yr%4, yr%7\nd = (19*a + 24) % 30\ne = (2*b + 4*c + 6*d + 5) % 7\nday = 22 + d + e\nif yr in (1954, 1981, 2049, 2076): day -= 7\nif day > 31: print(f'{yr}-04-{day-31:02d}')\nelse: print(f'{yr}-03-{day:02d}')",
        explanation: "Implements Butcher's Easter algorithm with leap adjustments."
      },
      {
        id: "PB-207",
        srNo: 207,
        marks: 4,
        question: "Write a Python program to compute the greatest common divisor (GCD) of two positive integers.",
        topic: "Euclidean GCD Algorithm",
        difficulty: "medium",
        starterCode: "import math\na = int(input('a: '))\nb = int(input('b: '))\nprint('GCD:', math.gcd(a, b))",
        solution: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\na, b = int(input('a: ')), int(input('b: '))\nprint('GCD:', gcd(a, b))",
        explanation: "Computes GCD using Euclidean algorithm `while b: a, b = b, a % b`."
      },
      {
        id: "PB-208",
        srNo: 208,
        marks: 4,
        question: "Write a python program that prompts user to enter numbers and stops only when user enters \"QUIT\". Print sum, average, min, max (No built-in min/max functions!).\nInput: 4, 1, 5, \"QUIT\" => Sum=10, Average=3.333, Minimum=1, Maximum=5",
        topic: "Sentinel Loop & Aggregates",
        difficulty: "hard",
        starterCode: "nums = []\nwhile True:\n    inp = input('Enter number or QUIT: ')\n    if inp.upper() == 'QUIT':\n        break\n    nums.append(float(inp))\n\nif nums:\n    s = sum(nums)\n    mn = nums[0]\n    mx = nums[0]\n    for x in nums:\n        if x < mn: mn = x\n        if x > mx: mx = x\n    print(f'Sum={s:.1f}')\n    print(f'Average={s/len(nums):.3f}')\n    print(f'Minimum number={mn:.1f}')\n    print(f'Maximum number={mx:.1f}')",
        solution: "nums = []\nwhile True:\n    val = input()\n    if val.upper()=='QUIT': break\n    nums.append(float(val))\nmn = mx = nums[0]\nfor x in nums:\n    if x < mn: mn = x\n    if x > mx: mx = x\nprint(f'Sum={sum(nums)}, Average={sum(nums)/len(nums):.3f}, Minimum={mn}, Maximum={mx}')",
        explanation: "Sentinel loop accumulating values and finding min/max manually."
      },
      {
        id: "PB-209",
        srNo: 209,
        marks: 6,
        question: "Hotel Room Rent Calculator:\nStudio ($/Night): Jan-Apr=50, May-Aug=70, Sep-Dec=80\nApartment ($/Night): Jan-Apr=60, May-Aug=80, Sep-Dec=90\nDiscounts:\nStudio (>3 nights in Jan-Apr: 20%, >3 nights in May-Aug: 10%, >3 nights in Sep-Dec: 5%).\nStudio (>7 nights in Jan-Apr: 30%, >7 nights in May-Aug: 20%, >7 nights in Sep-Dec: 10%).\nApartment (>7 nights any month: 10% discount).\nInput: Month=May, Nights=5 => Studio = $315, Apartment = $400",
        topic: "Business Decision Logic",
        difficulty: "hard",
        starterCode: "m = input('Enter Month: ').capitalize()\nn = int(input('Enter Nights (up to 30): '))\n\n# Base rates\nif m in ('January', 'February', 'March', 'April'):\n    s_rate, a_rate = 50, 60\n    s_disc = 0.30 if n > 7 else (0.20 if n > 3 else 0)\nelif m in ('May', 'June', 'July', 'August'):\n    s_rate, a_rate = 70, 80\n    s_disc = 0.20 if n > 7 else (0.10 if n > 3 else 0)\nelse:\n    s_rate, a_rate = 80, 90\n    s_disc = 0.10 if n > 7 else (0.05 if n > 3 else 0)\n\na_disc = 0.10 if n > 7 else 0\n\ns_total = n * s_rate * (1 - s_disc)\na_total = n * a_rate * (1 - a_disc)\n\nprint(f'Studio Rent for {n} Nights is ${s_total:.0f}')\nprint(f'Apartment Rent for {n} Nights is ${a_total:.0f}')",
        solution: "m = input('Month: ').capitalize(); n = int(input('Nights: '))\nif m in ('January','February','March','April'): s_r, a_r = 50, 60; s_d = 0.3 if n>7 else (0.2 if n>3 else 0)\nelif m in ('May','June','July','August'): s_r, a_r = 70, 80; s_d = 0.2 if n>7 else (0.1 if n>3 else 0)\nelse: s_r, a_r = 80, 90; s_d = 0.1 if n>7 else (0.05 if n>3 else 0)\na_d = 0.1 if n>7 else 0\nprint(f'Studio: ${n*s_r*(1-s_d):.0f}, Apartment: ${n*a_r*(1-a_d):.0f}')",
        explanation: "Calculates room total after seasonal tiered discounts."
      },
      {
        id: "PB-210",
        srNo: 210,
        marks: 5,
        question: "Prompt user for numbers until user enters \"stop\". Print minimum even, maximum even, average of even numbers, minimum odd, maximum odd, average of odd numbers (No built-in lists/min/max allowed!).\nInput: -1, -5, 9, 2, 4, 6, \"stop\" => for even: 6 2 4.0 (max, min, avg), for odd: 9 -5 1.0 (max, min, avg).",
        topic: "Complex Sentinel Aggregation",
        difficulty: "hard",
        starterCode: "evens = []\nodds = []\nwhile True:\n    inp = input('enter number or q for stop: ')\n    if inp.lower() == 'stop' or inp.lower() == 'q':\n        break\n    val = int(inp)\n    if val % 2 == 0:\n        evens.append(val)\n    else:\n        odds.append(val)\n\nif evens:\n    print(f'for even {max(evens)} {min(evens)} {sum(evens)/len(evens):.1f} (max, min, avg)')\nif odds:\n    print(f'for odd {max(odds)} {min(odds)} {sum(odds)/len(odds):.1f} (max, min, avg)')",
        solution: "evens, odds = [], []\nwhile True:\n    inp = input('enter number or q for stop:')\n    if inp.lower() in ('stop', 'q'): break\n    v = int(inp)\n    if v % 2 == 0: evens.append(v)\n    else: odds.append(v)\nif evens: print(f'for even {max(evens)} {min(evens)} {sum(evens)/len(evens):.1f} (max, min, avg)')\nif odds: print(f'for odd {max(odds)} {min(odds)} {sum(odds)/len(odds):.1f} (max, min, avg)')",
        explanation: "Splits input numbers into even and odd groups, calculating min, max, and average for each group."
      }
    ]
  }
};

// Helper utilities for application
function getPracticeBookUnit(unitNum) {
  if (unitNum === 1) return PRACTICE_BOOK.unit1;
  if (unitNum === 2) return PRACTICE_BOOK.unit2;
  if (unitNum === 3) return PRACTICE_BOOK.unit3;
  return null;
}

function getAllPracticeBookMCQs() {
  return [
    ...PRACTICE_BOOK.unit1.mcqs,
    ...PRACTICE_BOOK.unit2.mcqs,
    ...PRACTICE_BOOK.unit3.mcqs
  ];
}

function getAllPracticeBookCoding() {
  return [
    ...PRACTICE_BOOK.unit1.coding,
    ...PRACTICE_BOOK.unit2.coding,
    ...PRACTICE_BOOK.unit3.coding
  ];
}
