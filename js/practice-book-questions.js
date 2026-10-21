// Semester I: original Units 1–3 and source-numbered T2 MCQs from Units 4–5.
const PRACTICE_BOOK = {
  "unit1": {
    "unit": 1,
    "title": "UNIT 1 - Introduction to Computer & Algorithms (Q1 to Q38)",
    "mcqs": [
      {
        "id": "PB-001",
        "srNo": 1,
        "question": "According to Von Neumann model, what is stored in a memory?",
        "options": [
          "only data",
          "only programs",
          "data and programs",
          "neither data nor programs"
        ],
        "answer": "C",
        "correct": "data and programs",
        "explanation": "Von Neumann architecture uses a single unified memory space to store both program instructions and operational data."
      },
      {
        "id": "PB-002",
        "srNo": 2,
        "question": "What is the full form of CPU?",
        "options": [
          "Computer Processing Unit",
          "Computer Principle Unit",
          "Central Processing Unit",
          "Control Processing Unit"
        ],
        "answer": "C",
        "correct": "Central Processing Unit",
        "explanation": "CPU stands for Central Processing Unit."
      },
      {
        "id": "PB-003",
        "srNo": 3,
        "question": "Which of the following is the brain of the computer?",
        "options": [
          "Central Processing Unit",
          "Memory",
          "Arithmetic and Logic unit",
          "Control unit"
        ],
        "answer": "A",
        "correct": "Central Processing Unit",
        "explanation": "The CPU manages instructions, calculations, and overall system control."
      },
      {
        "id": "PB-004",
        "srNo": 4,
        "question": "The CPU consist of ______",
        "options": [
          "Input Devices",
          "CU and ALU",
          "Output Devices",
          "none of the above"
        ],
        "answer": "B",
        "correct": "CU and ALU",
        "explanation": "The CPU consists of the Control Unit (CU), Arithmetic Logic Unit (ALU), and registers."
      },
      {
        "id": "PB-005",
        "srNo": 5,
        "question": "Which of the following is/are not input device/s?",
        "options": [
          "Joystick",
          "Keyboard",
          "Trackball",
          "Plotter"
        ],
        "answer": "D",
        "correct": "Plotter",
        "explanation": "A Plotter is a vector graphics output device."
      },
      {
        "id": "PB-006",
        "srNo": 6,
        "question": "What is an operating system?",
        "options": [
          "interface between the hardware and application programs",
          "collection of programs that manages hardware resources",
          "system service provider to the application programs",
          "all of the mentioned"
        ],
        "answer": "D",
        "correct": "all of the mentioned",
        "explanation": "An OS acts as an interface, manages resources, and provides essential services."
      },
      {
        "id": "PB-007",
        "srNo": 7,
        "question": "Which among following is not necessary for working of a standalone computer?",
        "options": [
          "Hard Drive",
          "RAM",
          "ROM",
          "LAN card"
        ],
        "answer": "D",
        "correct": "LAN card",
        "explanation": "A Network Interface Card (LAN card) is only required for network communication, not standalone operation."
      },
      {
        "id": "PB-008",
        "srNo": 8,
        "question": "A program that reads each of the instructions in mnemonic form and translates it into the machine-language equivalent is___",
        "options": [
          "Machine language",
          "Assembler",
          "Interpreter",
          "C program"
        ],
        "answer": "B",
        "correct": "Assembler",
        "explanation": "Assembler translates mnemonic assembly code into binary machine language."
      },
      {
        "id": "PB-009",
        "srNo": 9,
        "question": "Which of the following is known as the language made up of binary-coded instructions?",
        "options": [
          "High level",
          "BASIC",
          "C",
          "Machine"
        ],
        "answer": "D",
        "correct": "Machine",
        "explanation": "Machine language consists directly of 0s and 1s understood by CPU hardware."
      },
      {
        "id": "PB-010",
        "srNo": 10,
        "question": "Which of the following isn’t a characteristic of High level languages?",
        "options": [
          "machine code",
          "platform independent",
          "interactive execution",
          "user-friendly"
        ],
        "answer": "A",
        "correct": "machine code",
        "explanation": "High level languages are user-friendly and abstract away low-level machine code."
      },
      {
        "id": "PB-011",
        "srNo": 11,
        "question": "High level language is a .....",
        "options": [
          "Human readable like language.",
          "language with small program size.",
          "language with big program size.",
          "language which is difficult to understand and not human readable."
        ],
        "answer": "A",
        "correct": "Human readable like language.",
        "explanation": "High-level languages use English-like syntax easily readable by humans."
      },
      {
        "id": "PB-012",
        "srNo": 12,
        "question": "Low level language is .....",
        "options": [
          "Human readable like language.",
          "language with big program size.",
          "language with small program size.",
          "Difficult to understand and readability is questionable."
        ],
        "answer": "D",
        "correct": "Difficult to understand and readability is questionable.",
        "explanation": "Low-level languages deal with direct hardware instructions making them hard to read."
      },
      {
        "id": "PB-013",
        "srNo": 13,
        "question": "Source program is compiled to an intermediate form called ___________",
        "options": [
          "Byte Code",
          "Smart code",
          "Executable code",
          "Machine code"
        ],
        "answer": "A",
        "correct": "Byte Code",
        "explanation": "Python and Java source code compile to intermediate Byte Code executed by virtual machines."
      },
      {
        "id": "PB-014",
        "srNo": 14,
        "question": "Which of the following translates the program into machine language line by line?",
        "options": [
          "Compiler",
          "Translator",
          "Interpreter",
          "none of the above"
        ],
        "answer": "C",
        "correct": "Interpreter",
        "explanation": "An Interpreter translates and executes source code line by line."
      },
      {
        "id": "PB-015",
        "srNo": 15,
        "question": "The instructions like MOV or ADD are called as ______",
        "options": [
          "OP-Code",
          "Operators",
          "Commands",
          "Operand"
        ],
        "answer": "A",
        "correct": "OP-Code",
        "explanation": "Operation Codes (OP-Codes) specify the hardware operation to perform."
      },
      {
        "id": "PB-016",
        "srNo": 16,
        "question": "An algorithm is __________?",
        "options": [
          "A problem",
          "A Procedure for Solving a Problem",
          "A Mathematical Problem",
          "A Pictorial representation"
        ],
        "answer": "B",
        "correct": "A Procedure for Solving a Problem",
        "explanation": "An algorithm is a step-by-step finite procedure to solve a specific problem."
      },
      {
        "id": "PB-017",
        "srNo": 17,
        "question": "Actual instructions in flowchart are represented in________",
        "options": [
          "Circle",
          "Boxes",
          "Arrows",
          "Lines"
        ],
        "answer": "B",
        "correct": "Boxes",
        "explanation": "Rectangular boxes represent process/action steps in flowcharts."
      },
      {
        "id": "PB-018",
        "srNo": 18,
        "question": "In a flowchart, what does a Diamond box denote?",
        "options": [
          "Decision",
          "Inititation",
          "Initialization",
          "Process"
        ],
        "answer": "A",
        "correct": "Decision",
        "explanation": "Diamond shapes represent decision/branching logic."
      },
      {
        "id": "PB-019",
        "srNo": 19,
        "question": "Which of the following represents two different conditions in a flowchart?",
        "options": [
          "Rectangle",
          "Diamond",
          "Circle",
          "Parallelogram"
        ],
        "answer": "B",
        "correct": "Diamond",
        "explanation": "A Diamond node evaluates true/false conditions leading to different paths."
      },
      {
        "id": "PB-020",
        "srNo": 20,
        "question": "Which of the following represents input and output operation in a flowchart?",
        "options": [
          "Diamond",
          "Rectangle",
          "Parallelogram",
          "Circle"
        ],
        "answer": "C",
        "correct": "Parallelogram",
        "explanation": "Parallelograms represent input/output operations."
      },
      {
        "id": "PB-021",
        "srNo": 21,
        "question": "What will be the output of the following algorithm if the input is 4?\nAlgorithm:\n1.Start\n2.Set x = input value\n3.Set y = x * 2\n4.If y > 5, then print \"Large\", otherwise print \"Small\".\n5.Stop",
        "options": [
          "Large",
          "Small",
          "No output",
          "Error"
        ],
        "answer": "A",
        "correct": "Large",
        "explanation": "x = 4 -> y = 8 -> 8 > 5 is True -> prints 'Large'."
      },
      {
        "id": "PB-022",
        "srNo": 22,
        "question": "Match the following flowchart symbols:\nList-I: A. Parallelogram, B. Oval, C. Rectangle\nList-II: 1. Process, 2. Decision, 3. Beginning/End, 6. Input/output",
        "options": [
          "(A-6)(B-5)(C-3)",
          "(A-2)(B-3)(C-1)",
          "(A-5)(B-3)(C-6)",
          "(A-6)(B-3)(C-1)"
        ],
        "answer": "D",
        "correct": "(A-6)(B-3)(C-1)",
        "explanation": "Parallelogram = Input/Output (6), Oval = Start/End (3), Rectangle = Process (1)."
      }
    ],
    "coding": [
      {
        "id": "PB-023",
        "srNo": 23,
        "marks": 3,
        "question": "Write an algorithm and draw a flowchart to calculate area of rectangle.",
        "topic": "Basic Math & Output",
        "difficulty": "easy",
        "starterCode": "l = float(input('Length: '))\nw = float(input('Width: '))\narea = l * w\nprint('Area:', area)",
        "solution": "length = float(input('Enter length: '))\nwidth = float(input('Enter width: '))\nprint(f'Area = {length * width}')",
        "explanation": "Algorithm:\n1. Input length and width\n2. Multiply length * width\n3. Display area",
        "algorithm": [
          "Start",
          "Read length and width",
          "area = length * width",
          "Display area",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read length and width",
            "area = length * width",
            "Display area"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "5",
          "4"
        ],
        "exampleOutput": "Area = 20.0"
      },
      {
        "id": "PB-024",
        "srNo": 24,
        "marks": 3,
        "question": "Write an algorithm and draw a flowchart to calculate percentage of the student.",
        "topic": "Math Calculation",
        "difficulty": "easy",
        "starterCode": "obtained = float(input('Marks obtained: '))\ntotal = float(input('Total marks: '))\npercentage = (obtained / total) * 100\nprint(f'Percentage: {percentage:.2f}%')",
        "solution": "obtained = float(input('Obtained marks: '))\ntotal = float(input('Total marks: '))\nif total <= 0: raise ValueError('Total must be positive')\nprint('Percentage:', obtained / total * 100)",
        "explanation": "Computes ratio of obtained marks over total marks multiplied by 100.",
        "algorithm": [
          "Start",
          "Read obtained and total",
          "Require total > 0",
          "percentage = obtained / total * 100",
          "Display percentage",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read obtained and total",
            "Require total > 0",
            "percentage = obtained / total * 100",
            "Display percentage"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "80",
          "100"
        ],
        "exampleOutput": "Percentage: 80.0"
      },
      {
        "id": "PB-025",
        "srNo": 25,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to convert input celsius degree temperature into its equivalent fahrenheit degree. Use formula F= (9/5)*C +32",
        "topic": "Formula Conversion",
        "difficulty": "easy",
        "starterCode": "c = float(input('Celsius: '))\nf = (9/5) * c + 32\nprint('Fahrenheit:', f)",
        "solution": "celsius = float(input('Celsius: '))\nfahrenheit = (9/5) * celsius + 32\nprint(f'{celsius}°C = {fahrenheit}°F')",
        "explanation": "Applies temperature scale formula F = (9/5)*C + 32.",
        "algorithm": [
          "Start",
          "Read Celsius C",
          "F = C * 9 / 5 + 32",
          "Display Fahrenheit F",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read Celsius C",
            "F = C * 9 / 5 + 32",
            "Display Fahrenheit F"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "0"
        ],
        "exampleOutput": "0.0°C = 32.0°F"
      },
      {
        "id": "PB-026",
        "srNo": 26,
        "marks": 3,
        "question": "Write an algorithm and draw a flowchart to check whether given number is positive or negative.",
        "topic": "Conditionals",
        "difficulty": "easy",
        "starterCode": "num = float(input('Number: '))\nif num >= 0:\n    print('Positive')\nelse:\n    print('Negative')",
        "solution": "n = float(input('Number: '))\nif n > 0: print('Positive')\nelif n < 0: print('Negative')\nelse: print('Zero')",
        "explanation": "Compare with zero. Zero is neither positive nor negative.",
        "algorithm": [
          "Start",
          "Read n",
          "n > 0?",
          "Print Positive",
          "Check n < 0: Negative; otherwise Zero",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read n",
            "n > 0?",
            "Print Positive",
            "Check n < 0: Negative; otherwise Zero"
          ],
          "kind": "branch"
        },
        "exampleInputs": [
          "0"
        ],
        "exampleOutput": "Zero"
      },
      {
        "id": "PB-027",
        "srNo": 27,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to find out smallest number out of two numbers.",
        "topic": "Comparison",
        "difficulty": "easy",
        "starterCode": "a = float(input('a: '))\nb = float(input('b: '))\nif a < b:\n    print('Smallest:', a)\nelse:\n    print('Smallest:', b)",
        "solution": "a, b = float(input('a: ')), float(input('b: '))\nprint('Smallest is', a if a < b else b)",
        "explanation": "Compares a and b and prints whichever is smaller.",
        "algorithm": [
          "Start",
          "Read a and b",
          "a < b?",
          "Print a",
          "Print b",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read a and b",
            "a < b?",
            "Print a",
            "Print b"
          ],
          "kind": "branch"
        },
        "exampleInputs": [
          "2",
          "5"
        ],
        "exampleOutput": "Smallest is 2.0"
      },
      {
        "id": "PB-028",
        "srNo": 28,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to swap two input numbers.",
        "topic": "Variable Swapping",
        "difficulty": "easy",
        "starterCode": "a = input('a: ')\nb = input('b: ')\na, b = b, a\nprint('a:', a, 'b:', b)",
        "solution": "a = input('a: ')\nb = input('b: ')\na, b = b, a\nprint(f'Swapped: a={a}, b={b}')",
        "explanation": "Swaps values using Python tuple unpacking `a, b = b, a`.",
        "algorithm": [
          "Start",
          "Read a and b",
          "temp = a; a = b; b = temp",
          "Display a and b",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read a and b",
            "temp = a; a = b; b = temp",
            "Display a and b"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "2",
          "5"
        ],
        "exampleOutput": "Swapped: a=5, b=2"
      },
      {
        "id": "PB-029",
        "srNo": 29,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to find out maximum number out of three numbers.",
        "topic": "Nested If/Else",
        "difficulty": "medium",
        "starterCode": "a = float(input('a: '))\nb = float(input('b: '))\nc = float(input('c: '))\nmax_num = max(a, b, c)\nprint('Maximum:', max_num)",
        "solution": "a, b, c = float(input('a: ')), float(input('b: ')), float(input('c: '))\nif a >= b and a >= c:\n    m = a\nelif b >= a and b >= c:\n    m = b\nelse:\n    m = c\nprint('Maximum is', m)",
        "explanation": "Checks three numbers using compound logic or nested if statements.",
        "algorithm": [
          "Start",
          "Read a, b and c",
          "m = a; if b > m, set m = b",
          "If c > m, set m = c",
          "Display m",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read a, b and c",
            "m = a; if b > m, set m = b",
            "If c > m, set m = c",
            "Display m"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "2",
          "8",
          "4"
        ],
        "exampleOutput": "Maximum is 8.0"
      },
      {
        "id": "PB-030",
        "srNo": 30,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to arrange the numbers x,y,z in descending order.",
        "topic": "Sorting Logic",
        "difficulty": "medium",
        "starterCode": "x, y, z = 5, 12, 3\nnums = [x, y, z]\nnums.sort(reverse=True)\nprint('Descending:', nums)",
        "solution": "x, y, z = float(input('x: ')), float(input('y: ')), float(input('z: '))\nif x < y: x, y = y, x\nif x < z: x, z = z, x\nif y < z: y, z = z, y\nprint(f'Descending: {x}, {y}, {z}')",
        "explanation": "Sorts three variables in descending order using pairwise comparisons.",
        "algorithm": [
          "Start",
          "Read x, y and z",
          "If x < y: swap x and y",
          "If x < z: swap x and z",
          "If y < z: swap y and z",
          "Display x, y and z",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read x, y and z",
            "If x < y: swap x and y",
            "If x < z: swap x and z",
            "If y < z: swap y and z",
            "Display x, y and z"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "2",
          "8",
          "4"
        ],
        "exampleOutput": "Descending: 8.0, 4.0, 2.0"
      },
      {
        "id": "PB-031",
        "srNo": 31,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to print first 50 odd numbers.",
        "topic": "Loops & Steps",
        "difficulty": "easy",
        "starterCode": "count = 0\nnum = 1\nwhile count < 50:\n    print(num, end=' ')\n    num += 2\n    count += 1",
        "solution": "for i in range(1, 100, 2):\n    print(i, end=' ')",
        "explanation": "Prints numbers starting from 1 with step size 2 up to 50 terms.",
        "algorithm": [
          "Start",
          "i = 0",
          "i < 50?",
          "Print 2*i + 1; i = i + 1",
          "Finish",
          "Stop"
        ],
        "flow": {
          "labels": [
            "i = 0",
            "i < 50?",
            "Print 2*i + 1; i = i + 1",
            "Finish"
          ],
          "kind": "loop"
        },
        "exampleOutput": "1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99"
      },
      {
        "id": "PB-032",
        "srNo": 32,
        "marks": 4,
        "question": "Write an algorithm and Draw the flow chart to solve following series 1! + 2! + 3! + …. + n!",
        "topic": "Factorial & Accumulation",
        "difficulty": "medium",
        "starterCode": "import math\nn = int(input('n: '))\ntotal = sum(math.factorial(i) for i in range(1, n+1))\nprint('Sum of factorial series:', total)",
        "solution": "n = int(input('n: '))\ntotal = 0\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\n    total += fact\nprint(f'Sum of series = {total}')",
        "explanation": "Iteratively computes factorial of i and adds it to running sum total.",
        "algorithm": [
          "Start",
          "Read n; fact = 1; total = 0; i = 1",
          "i <= n?",
          "fact = fact*i; total += fact; i += 1",
          "Display total",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read n; fact = 1; total = 0; i = 1",
            "i <= n?",
            "fact = fact*i; total += fact; i += 1",
            "Display total"
          ],
          "kind": "loop"
        },
        "exampleInputs": [
          "3"
        ],
        "exampleOutput": "Sum of series = 9"
      },
      {
        "id": "PB-033",
        "srNo": 33,
        "marks": 3,
        "question": "Draw flowchart to check and display whether entered number is Armstrong number or not.",
        "topic": "Number Properties",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "def is_armstrong(n):\n    if n < 0:\n        return False\n    digits = len(str(n))\n    temp, total = n, 0\n    while temp:\n        total += (temp % 10) ** digits\n        temp //= 10\n    return total == n\n\nn = int(input('Number: '))\nprint('Armstrong' if is_armstrong(n) else 'Not Armstrong')",
        "explanation": "For d digits, sum each digit raised to d. Compare with the original number. 153 = 1**3 + 5**3 + 3**3; zero is also Armstrong.",
        "algorithm": [
          "Start",
          "Read nonnegative n; d = digit count",
          "total = sum of each digit ** d",
          "total == n?",
          "Print Armstrong",
          "Print Not Armstrong",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read nonnegative n; d = digit count",
            "total = sum of each digit ** d",
            "total == n?",
            "Print Armstrong",
            "Print Not Armstrong"
          ],
          "kind": "branch"
        },
        "exampleInputs": [
          "153"
        ],
        "exampleOutput": "Armstrong"
      },
      {
        "id": "PB-034",
        "srNo": 34,
        "marks": 3,
        "question": "Sketch flowchart to convert seconds into hour, minute and second. (Hint : 3700 seconds => 1 hr , 1 minute , 40 second)",
        "topic": "Modulo Math",
        "difficulty": "easy",
        "starterCode": "sec = int(input('Seconds: '))\nh = sec // 3600\nrem = sec % 3600\nm = rem // 60\ns = rem % 60\nprint(f'{h} hr, {m} minute, {s} second')",
        "solution": "sec = int(input('Seconds: '))\nhrs = sec // 3600\nmins = (sec % 3600) // 60\nsecs = sec % 60\nprint(f'{hrs} hr, {mins} minute, {secs} second')",
        "explanation": "Divides total seconds into hours (3600s), minutes (60s), and remaining seconds.",
        "algorithm": [
          "Start",
          "Read seconds",
          "hours = seconds // 3600",
          "minutes = (seconds % 3600) // 60",
          "seconds = seconds % 60; display all",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read seconds",
            "hours = seconds // 3600",
            "minutes = (seconds % 3600) // 60",
            "seconds = seconds % 60; display all"
          ],
          "kind": "sequence"
        },
        "exampleInputs": [
          "3700"
        ],
        "exampleOutput": "1 hr, 1 minute, 40 second"
      },
      {
        "id": "PB-035",
        "srNo": 35,
        "marks": 2,
        "question": "Write an algorithm to determine whether the given year is a leap year or not.",
        "topic": "Conditionals",
        "difficulty": "easy",
        "starterCode": "y = int(input('Year: '))\nis_leap = (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)\nprint('Leap Year' if is_leap else 'Not Leap Year')",
        "solution": "year = int(input('Year: '))\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('Leap Year')\nelse:\n    print('Not Leap Year')",
        "explanation": "Leap year rule: Divisible by 4 and not 100, or divisible by 400.",
        "algorithm": [
          "Start",
          "Read year",
          "year%400==0 or (year%4==0 and year%100!=0)?",
          "Print Leap year",
          "Print Not leap year",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read year",
            "year%400==0 or (year%4==0 and year%100!=0)?",
            "Print Leap year",
            "Print Not leap year"
          ],
          "kind": "branch"
        },
        "exampleInputs": [
          "2000"
        ],
        "exampleOutput": "Leap Year"
      },
      {
        "id": "PB-036",
        "srNo": 36,
        "marks": 4,
        "question": "Write an algorithm and draw a flowchart to find factorial of given numbers.",
        "topic": "Loop Accumulation",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "def factorial(n):\n    if n < 0:\n        raise ValueError('Factorial requires a nonnegative integer')\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(int(input('n: '))))",
        "explanation": "Multiply integers from 1 to n. The product starts at 1, so 0! is 1. A function returns the product for reuse.",
        "algorithm": [
          "Start",
          "Read nonnegative n; f = 1; i = 1",
          "i <= n?",
          "f = f*i; i = i + 1",
          "Display f",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read nonnegative n; f = 1; i = 1",
            "i <= n?",
            "f = f*i; i = i + 1",
            "Display f"
          ],
          "kind": "loop"
        },
        "exampleInputs": [
          "5"
        ],
        "exampleOutput": "120"
      },
      {
        "id": "PB-037",
        "srNo": 37,
        "marks": 3,
        "question": "Draw a flowchart to print first N Fibonacci Numbers (0, 1, 1, 2, 3, 5, 8,…).",
        "topic": "Fibonacci Series",
        "difficulty": "medium",
        "starterCode": "n = int(input('N: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        "solution": "n = int(input('N: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        "explanation": "Generates Fibonacci terms where each number is sum of preceding two.",
        "algorithm": [
          "Start",
          "Read N; a = 0; b = 1; i = 0",
          "i < N?",
          "Print a; a,b = b,a+b; i += 1",
          "Finish",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read N; a = 0; b = 1; i = 0",
            "i < N?",
            "Print a; a,b = b,a+b; i += 1",
            "Finish"
          ],
          "kind": "loop"
        },
        "exampleInputs": [
          "7"
        ],
        "exampleOutput": "0 1 1 2 3 5 8"
      },
      {
        "id": "PB-038",
        "srNo": 38,
        "marks": 4,
        "question": "Draw the flowchart to check weather given number by user is palindrome or not.",
        "topic": "String / Digit Reversal",
        "difficulty": "easy",
        "starterCode": "s = input('Number: ')\nif s == s[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')",
        "solution": "num = input('Number: ')\nprint('Palindrome' if num == num[::-1] else 'Not Palindrome')",
        "explanation": "Checks if number string reads same forwards and backwards.",
        "algorithm": [
          "Start",
          "Read number as string s",
          "s == reversed s?",
          "Print Palindrome",
          "Print Not palindrome",
          "Stop"
        ],
        "flow": {
          "labels": [
            "Read number as string s",
            "s == reversed s?",
            "Print Palindrome",
            "Print Not palindrome"
          ],
          "kind": "branch"
        },
        "exampleInputs": [
          "121"
        ],
        "exampleOutput": "Palindrome"
      }
    ]
  },
  "unit2": {
    "unit": 2,
    "title": "UNIT 2 - Introduction to Python & Jupyter Notebooks (Q39 to Q100)",
    "mcqs": [
      {
        "id": "PB-039",
        "srNo": 39,
        "question": "Which character is used in Python to make a single line comment?",
        "options": [
          "/",
          "//",
          "!",
          "#"
        ],
        "answer": "D",
        "correct": "#",
        "explanation": "`#` starts single line comments in Python."
      },
      {
        "id": "PB-040",
        "srNo": 40,
        "question": "What will be the output of print(type(2**5)) in python?",
        "options": [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'double'>",
          "<class 'integer'>"
        ],
        "answer": "A",
        "correct": "<class 'int'>",
        "explanation": "2**5 is 32, which is an integer type."
      },
      {
        "id": "PB-041",
        "srNo": 41,
        "question": "What will be the output of print(type(\"LJU\")) in python?",
        "options": [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'str'>",
          "<class 'char'>"
        ],
        "answer": "C",
        "correct": "<class 'str'>",
        "explanation": "Quoted text is instantiated as `str`."
      },
      {
        "id": "PB-042",
        "srNo": 42,
        "question": "What will be the output of print(type(3*5/5)) in python?",
        "options": [
          "<class 'int'>",
          "<class 'float'>",
          "<class 'double'>",
          "<class 'integer'>"
        ],
        "answer": "B",
        "correct": "<class 'float'>",
        "explanation": "Standard division `/` returns float."
      },
      {
        "id": "PB-043",
        "srNo": 43,
        "question": "If x=3.123, then int(x) will give ?",
        "options": [
          "1",
          "3",
          "4",
          "3.12"
        ],
        "answer": "B",
        "correct": "3",
        "explanation": "`int()` truncates decimal part."
      },
      {
        "id": "PB-044",
        "srNo": 44,
        "question": "Which one of the following is correct way of declaring and initialising a variable, x with value 5?",
        "options": [
          "int x x=5",
          "int x=5",
          "x=5",
          "declare x=5"
        ],
        "answer": "C",
        "correct": "x=5",
        "explanation": "Python dynamically assigns variables using `=`. No type keyword."
      },
      {
        "id": "PB-045",
        "srNo": 45,
        "question": "Which of the following is an invalid statement?",
        "options": [
          "abc = 1,000,000",
          "a b c = 1000 2000 3000",
          "a,b,c = 1000, 2000, 3000",
          "a_b_c = 1,000,000"
        ],
        "answer": "B",
        "correct": "a b c = 1000 2000 3000",
        "explanation": "Spaces between variable names without commas is SyntaxError."
      },
      {
        "id": "PB-046",
        "srNo": 46,
        "question": "Which of the following is invalid variable name?",
        "options": [
          "_x = 1",
          "x_= 1",
          "_x_ = 1",
          "None of the mentioned"
        ],
        "answer": "D",
        "correct": "None of the mentioned",
        "explanation": "All underscore variable placements shown are completely valid."
      },
      {
        "id": "PB-047",
        "srNo": 47,
        "question": "Which of the following cannot be a variable?",
        "options": [
          "important",
          "in",
          "it",
          "abc"
        ],
        "answer": "B",
        "correct": "in",
        "explanation": "`in` is a reserved Python keyword."
      },
      {
        "id": "PB-048",
        "srNo": 48,
        "question": "Which of the following is an invalid variable?",
        "options": [
          "char_1",
          "1st_char",
          "oopec",
          "_"
        ],
        "answer": "B",
        "correct": "1st_char",
        "explanation": "Variable names cannot start with numbers."
      },
      {
        "id": "PB-049",
        "srNo": 49,
        "question": "What happens when '2' == 2 is executed?",
        "options": [
          "True",
          "False",
          "ValueError",
          "TypeError"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "String '2' and int 2 are different types and not equal."
      },
      {
        "id": "PB-050",
        "srNo": 50,
        "question": "What will be the output of this program?\n_ = '1 2 3 4 5 6'\nprint(_)",
        "options": [
          "SyntaxError: EOL while scanning string literal",
          "SyntaxError: invalid syntax",
          "NameError: name '_' is not defined",
          "1 2 3 4 5 6"
        ],
        "answer": "D",
        "correct": "1 2 3 4 5 6",
        "explanation": "`_` is a valid identifier in Python."
      },
      {
        "id": "PB-051",
        "srNo": 51,
        "question": "What will be the output of print(print(print(\"python\")))?",
        "options": [
          "None None python",
          "python None None",
          "python",
          "Error"
        ],
        "answer": "B",
        "correct": "python None None",
        "explanation": "`print()` prints its argument and returns `None`."
      },
      {
        "id": "PB-052",
        "srNo": 52,
        "question": "Which is the correct operator for power(Xy)?",
        "options": [
          "X^y",
          "X**y",
          "X^^y",
          "None of the mentioned"
        ],
        "answer": "B",
        "correct": "X**y",
        "explanation": "`**` is exponentiation operator."
      },
      {
        "id": "PB-053",
        "srNo": 53,
        "question": "What is the answer to this expression, 34 % 3 is?",
        "options": [
          "7",
          "1",
          "0",
          "5"
        ],
        "answer": "B",
        "correct": "1",
        "explanation": "34 % 3 leaves remainder 1."
      },
      {
        "id": "PB-054",
        "srNo": 54,
        "question": "a=0, b=6, x=(a or b) or ((a and a) or (a and b)), print(x)",
        "options": [
          "0",
          "6",
          "True",
          "False"
        ],
        "answer": "B",
        "correct": "6",
        "explanation": "`a or b` -> `0 or 6` -> 6. `6 or ...` short-circuits to 6."
      },
      {
        "id": "PB-055",
        "srNo": 55,
        "question": "a=0, b=6, x=(a or b) or ((a and a) or (a and b)), y=not(x), print(y)",
        "options": [
          "0",
          "6",
          "True",
          "False"
        ],
        "answer": "D",
        "correct": "False",
        "explanation": "x is 6 (truthy). `not(6)` gives `False`."
      },
      {
        "id": "PB-056",
        "srNo": 56,
        "question": "What will be the output of print(True ** False / True)?",
        "options": [
          "True ** False / True",
          "1.0",
          "0",
          "Error"
        ],
        "answer": "B",
        "correct": "1.0",
        "explanation": "True=1, False=0. `1**0` = 1. `1 / 1` = 1.0."
      },
      {
        "id": "PB-057",
        "srNo": 57,
        "question": "Which error occurs when you execute Python code: apple = mango",
        "options": [
          "Type Error",
          "Value Error",
          "Name Error",
          "Syntax Error"
        ],
        "answer": "C",
        "correct": "Name Error",
        "explanation": "`mango` is not defined beforehand, causing `NameError`."
      },
      {
        "id": "PB-058",
        "srNo": 58,
        "question": "What is the output of this expression, 3*1**3?",
        "options": [
          "1",
          "3",
          "9",
          "27"
        ],
        "answer": "B",
        "correct": "3",
        "explanation": "`**` has higher precedence than `*`. `1**3=1`, `3*1=3`."
      },
      {
        "id": "PB-059",
        "srNo": 59,
        "question": "Select option that will print: hello-how-are-you",
        "options": [
          "print('hello-' + 'how-are-you')",
          "print('hello', 'how', 'are', 'you')",
          "print('hello', 'how', 'are', 'you' + '-' * 4)",
          "print('hello' + '-' + 'how' + '-' + 'are' + 'yu')"
        ],
        "answer": "A",
        "correct": "print('hello-' + 'how-are-you')",
        "explanation": "Concatenates strings `'hello-'` and `'how-are-you'`."
      },
      {
        "id": "PB-060",
        "srNo": 60,
        "question": "Which of the following is not a comparison operator in Python?",
        "options": [
          ">=",
          "<=",
          "=",
          "!="
        ],
        "answer": "C",
        "correct": "=",
        "explanation": "`=` is assignment, `==` is comparison."
      },
      {
        "id": "PB-061",
        "srNo": 61,
        "question": "a=4, b=6, c=3, print(a+b*c/a-b)",
        "options": [
          "1.5",
          "2",
          "2.5",
          "3"
        ],
        "answer": "C",
        "correct": "2.5",
        "explanation": "Precedence: 6*3=18, 18/4=4.5, 4+4.5-6 = 2.5."
      },
      {
        "id": "PB-062",
        "srNo": 62,
        "question": "What will be the value of 8 + 2 % 3?",
        "options": [
          "10",
          "8",
          "9",
          "7"
        ],
        "answer": "A",
        "correct": "10",
        "explanation": "2 % 3 = 2. 8 + 2 = 10."
      },
      {
        "id": "PB-063",
        "srNo": 63,
        "question": "What will be the value of x in x = int(63.55+8/3)?",
        "options": [
          "65",
          "66",
          "23",
          "24"
        ],
        "answer": "B",
        "correct": "66",
        "explanation": "8/3 = 2.6666. 63.55 + 2.666 = 66.216. `int()` gives 66."
      },
      {
        "id": "PB-064",
        "srNo": 64,
        "question": "What are the values of 2**(3**2), (2**3)**2, 2**3**2?",
        "options": [
          "64, 512, 64",
          "64, 64, 64",
          "512, 512, 512",
          "512, 64, 512"
        ],
        "answer": "D",
        "correct": "512, 64, 512",
        "explanation": "`**` is right-associative: 3**2=9 -> 2**9=512. (2**3)**2=8**2=64. 2**3**2=512."
      },
      {
        "id": "PB-065",
        "srNo": 65,
        "question": "What will be the output of print((7*5**2)/True*False)?",
        "options": [
          "175",
          "70",
          "0",
          "0.0"
        ],
        "answer": "D",
        "correct": "0.0",
        "explanation": "False is 0 in numeric operations, resulting in float `0.0`."
      },
      {
        "id": "PB-066",
        "srNo": 66,
        "question": "What will be the output of print(6 + 5 - 4 * 3 / 2 % 1)?",
        "options": [
          "15",
          "7",
          "11.0",
          "10"
        ],
        "answer": "C",
        "correct": "11.0",
        "explanation": "4*3=12, 12/2=6.0, 6.0%1=0.0. 6+5-0.0 = 11.0."
      },
      {
        "id": "PB-067",
        "srNo": 67,
        "question": "What will be the output of print(int(6 == 6.0) * 3 + 4 % 5)?",
        "options": [
          "Error",
          "22",
          "7",
          "18"
        ],
        "answer": "C",
        "correct": "7",
        "explanation": "`6 == 6.0` is True (1). `1 * 3 = 3`. `4 % 5 = 4`. `3 + 4 = 7`."
      },
      {
        "id": "PB-068",
        "srNo": 68,
        "question": "What will be the value of X in X = 2+9*((3*12)-8)/10?",
        "options": [
          "30",
          "30.8",
          "28.4",
          "27.2"
        ],
        "answer": "D",
        "correct": "27.2",
        "explanation": "3*12=36, 36-8=28, 9*28=252, 252/10=25.2, 2+25.2=27.2."
      },
      {
        "id": "PB-069",
        "srNo": 69,
        "question": "What will be the output of Python code:\nnew= (1 and \"True\") and ('False' or Train)\nstr= 'This statement is '+ new\nprint(\"This is False\" if \"False\" in new else \"This is True\")",
        "options": [
          "This is True",
          "NameError – Train not defined",
          "This is False",
          "Syntax Error – invalid syntax"
        ],
        "answer": "C",
        "correct": "This is False",
        "explanation": "`('False' or Train)` evaluates to `'False'` (Train is short-circuited!). `\"False\" in \"False\"` is True."
      },
      {
        "id": "PB-070",
        "srNo": 70,
        "question": "What will be the value of 8 + 1 % 3?",
        "options": [
          "8",
          "9",
          "10",
          "11"
        ],
        "answer": "B",
        "correct": "9",
        "explanation": "1 % 3 = 1. 8 + 1 = 9."
      },
      {
        "id": "PB-071",
        "srNo": 71,
        "question": "What should be the output of:\nx=0.0\ny=48>0\nz=11<7\nprint(not(float(x or y or z)))",
        "options": [
          "True",
          "False",
          "Error",
          "No output"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "`x or y or z` -> `0.0 or True or False` -> `True`. `float(True)` = `1.0`. `not(1.0)` = `False`."
      },
      {
        "id": "PB-072",
        "srNo": 72,
        "question": "What will be the output of x=Str(\"Python is a very\\b simple\\bsubject\"), print(x)?",
        "options": [
          "Python is a verysimpleubject",
          "Python is a versimplsubject",
          "Name Error",
          "None of mentioned"
        ],
        "answer": "C",
        "correct": "Name Error",
        "explanation": "`Str` with capital S is not defined (Python built-in is `str`), raising `NameError`."
      },
      {
        "id": "PB-073",
        "srNo": 73,
        "question": "What is the output of a=10, b=a-=2, print(b)?",
        "options": [
          "12",
          "8",
          "9",
          "Syntax Error"
        ],
        "answer": "D",
        "correct": "Syntax Error",
        "explanation": "Augmented assignment `a-=2` is a statement, not an expression, so `b = a -= 2` is invalid syntax."
      },
      {
        "id": "PB-074",
        "srNo": 74,
        "question": "a=4, b=6, c=3, d=2. What is print(a+d**b*c/a-b)?",
        "options": [
          "64",
          "46.0",
          "52",
          "192"
        ],
        "answer": "B",
        "correct": "46.0",
        "explanation": "2**6=64, 64*3=192, 192/4=48.0, 4+48.0-6 = 46.0."
      },
      {
        "id": "PB-075",
        "srNo": 75,
        "question": "What will be the output of print(int(\"6\" == 6.0) * 3 + 4 % 5)?",
        "options": [
          "4",
          "6",
          "22",
          "Error"
        ],
        "answer": "A",
        "correct": "4",
        "explanation": "String `'6'` != float `6.0` (False/0). `0 * 3 = 0`. `4 % 5 = 4`. `0 + 4 = 4`."
      },
      {
        "id": "PB-076",
        "srNo": 76,
        "question": "a=0, b=6, c=9, d=10. x=(a or b) and ((a or c) or (b and d)), print(x)",
        "options": [
          "0",
          "6",
          "9",
          "10"
        ],
        "answer": "C",
        "correct": "9",
        "explanation": "`a or b`=6. `(0 or 9)`=9. `6 and 9` evaluates to 9."
      },
      {
        "id": "PB-077",
        "srNo": 77,
        "question": "X = 2+9*((3*12)-8)/10. What is print(bool(X))?",
        "options": [
          "True",
          "0",
          "30",
          "30.8"
        ],
        "answer": "A",
        "correct": "True",
        "explanation": "X is 27.2 (non-zero), so `bool(27.2)` evaluates to `True`."
      },
      {
        "id": "PB-078",
        "srNo": 78,
        "question": "What will be the datatype of var in code snippet?\nvar = 10\nprint(type(var))\nvar = \"Hello\"\nprint(type(var))",
        "options": [
          "int",
          "int,str",
          "str",
          "str,str"
        ],
        "answer": "B",
        "correct": "int,str",
        "explanation": "First prints `<class 'int'>`, then `<class 'str'>`."
      },
      {
        "id": "PB-079",
        "srNo": 79,
        "question": "What will be the output of print(True * False / True)?",
        "options": [
          "0",
          "0.0",
          "1",
          "Error"
        ],
        "answer": "B",
        "correct": "0.0",
        "explanation": "1 * 0 / 1 evaluates to float `0.0`."
      },
      {
        "id": "PB-080",
        "srNo": 80,
        "question": "x=125, y=13, x//=y, print(x)",
        "options": [
          "125/13",
          "10",
          "9",
          "9.62"
        ],
        "answer": "C",
        "correct": "9",
        "explanation": "`//` floor division truncates float result 9.615 down to 9."
      },
      {
        "id": "PB-081",
        "srNo": 81,
        "question": "What is print(bool(0), bool(3.14159), bool(-3), bool(False))?",
        "options": [
          "False True True False",
          "True True True False",
          "False False True False",
          "False True False False"
        ],
        "answer": "A",
        "correct": "False True True False",
        "explanation": "0 and False are falsy; 3.14159 and -3 are truthy."
      },
      {
        "id": "PB-082",
        "srNo": 82,
        "question": "a=5, b=10, c=1, print(a**c, b//a, c%a)",
        "options": [
          "5 2 2",
          "5 2 1",
          "5 2 5",
          "5 10 5"
        ],
        "answer": "B",
        "correct": "5 2 1",
        "explanation": "5**1=5, 10//5=2, 1%5=1."
      },
      {
        "id": "PB-083",
        "srNo": 83,
        "question": "Which of the following is invalid variable assignment?",
        "options": [
          "1x=1",
          "x1=1",
          "_x =1",
          "_x=1"
        ],
        "answer": "A",
        "correct": "1x=1",
        "explanation": "Identifiers cannot start with digits."
      },
      {
        "id": "PB-084",
        "srNo": 84,
        "question": "What is the output of 3**1**3/True?",
        "options": [
          "1",
          "3",
          "3.0",
          "27"
        ],
        "answer": "C",
        "correct": "3.0",
        "explanation": "3**1 = 3, 3/1 = 3.0."
      },
      {
        "id": "PB-085",
        "srNo": 85,
        "question": "a=0, b=5. What is a or b ==5 or True + 7 -4 * 3?",
        "options": [
          "True",
          "1",
          "0",
          "False"
        ],
        "answer": "A",
        "correct": "True",
        "explanation": "`b == 5` is True, making the logical OR expression evaluate to `True`."
      },
      {
        "id": "PB-086",
        "srNo": 86,
        "question": "a=50, b=60, print((a and b)/False)",
        "options": [
          "0",
          "60",
          "50",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "Dividing by False (0) causes `ZeroDivisionError`."
      },
      {
        "id": "PB-087",
        "srNo": 87,
        "question": "Which of the following will evaluate to true?\nI. True and False\nII. False or True\nIII. False and (True or False)",
        "options": [
          "I",
          "II",
          "I and II",
          "II and III"
        ],
        "answer": "B",
        "correct": "II",
        "explanation": "False or True evaluates to True."
      },
      {
        "id": "PB-088",
        "srNo": 88,
        "question": "Given two variables, num1 and num2, which of the following would mean that both num1 and num2 are positive integers?",
        "options": [
          "(num1 == num2)",
          "(num1 == num2) or (num1 > 0)",
          "(num1 == num2) and (num1 < 0)",
          "(num1 == num2) and (num1 > 0)"
        ],
        "answer": "D",
        "correct": "(num1 == num2) and (num1 > 0)",
        "explanation": "Option D explicitly enforces both equality and positive check > 0."
      },
      {
        "id": "PB-089",
        "srNo": 89,
        "question": "What is the output from the following code?\na = 3\nb = (a != 3)\nprint(b)",
        "options": [
          "True",
          "False",
          "0",
          "3"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "a is 3, so `a != 3` is False."
      },
      {
        "id": "PB-090",
        "srNo": 90,
        "question": "Which of the following evaluates to True when a is equal to b or when a is equal to 5?",
        "options": [
          "a == b == 5",
          "a = b or a = 5",
          "a == b or a == 5",
          "a = b and a = 5"
        ],
        "answer": "C",
        "correct": "a == b or a == 5",
        "explanation": "Correct Python equality logic with OR operator."
      }
    ],
    "coding": [
      {
        "id": "PB-091",
        "srNo": 91,
        "marks": 4,
        "question": "Write a Python program to add 2 Numbers with user input.",
        "topic": "Input & Arithmetic",
        "difficulty": "easy",
        "starterCode": "n1 = float(input('Num 1: '))\nn2 = float(input('Num 2: '))\nprint('Sum:', n1 + n2)",
        "solution": "n1 = float(input('Enter num 1: '))\nn2 = float(input('Enter num 2: '))\nprint(f'Sum = {n1 + n2}')",
        "explanation": "Reads inputs and calculates sum.",
        "exampleInputs": [
          "2",
          "3"
        ],
        "exampleOutput": "Sum = 5.0"
      },
      {
        "id": "PB-092",
        "srNo": 92,
        "marks": 4,
        "question": "Write a Python program to find the area of Circle.",
        "topic": "Math Formula",
        "difficulty": "easy",
        "starterCode": "r = float(input('Radius: '))\narea = 3.14159 * r * r\nprint('Area:', area)",
        "solution": "import math\nr = float(input('Radius: '))\nprint(f'Area = {math.pi * r**2:.2f}')",
        "explanation": "Area = pi * r^2.",
        "exampleInputs": [
          "2"
        ],
        "exampleOutput": "Area = 12.57"
      },
      {
        "id": "PB-093",
        "srNo": 93,
        "marks": 4,
        "question": "Write a Python program to find the area of Triangle.",
        "topic": "Math Formula",
        "difficulty": "easy",
        "starterCode": "b = float(input('Base: '))\nh = float(input('Height: '))\nprint('Area:', 0.5 * b * h)",
        "solution": "b, h = float(input('Base: ')), float(input('Height: '))\nprint(f'Area = {0.5 * b * h}')",
        "explanation": "Area = 0.5 * base * height.",
        "exampleInputs": [
          "3",
          "4"
        ],
        "exampleOutput": "Area = 6.0"
      },
      {
        "id": "PB-094",
        "srNo": 94,
        "marks": 4,
        "question": "Write a Python program to calculate the area of a trapezoid.",
        "topic": "Math Formula",
        "difficulty": "easy",
        "starterCode": "a = float(input('Base a: '))\nb = float(input('Base b: '))\nh = float(input('Height: '))\narea = 0.5 * (a + b) * h\nprint('Area of Trapezoid:', area)",
        "solution": "a = float(input('Base 1: '))\nb = float(input('Base 2: '))\nh = float(input('Height: '))\nprint(f'Trapezoid Area = {0.5 * (a + b) * h}')",
        "explanation": "Area = 0.5 * (a + b) * height.",
        "exampleInputs": [
          "3",
          "5",
          "4"
        ],
        "exampleOutput": "Trapezoid Area = 16.0"
      },
      {
        "id": "PB-095",
        "srNo": 95,
        "marks": 4,
        "question": "Write a Python program to calculate surface volume and area of a cylinder.",
        "topic": "Math Geometry",
        "difficulty": "medium",
        "starterCode": "import math\nr = float(input('Radius: '))\nh = float(input('Height: '))\nvol = math.pi * r**2 * h\narea = 2 * math.pi * r * (r + h)\nprint(f'Volume: {vol:.2f}, Surface Area: {area:.2f}')",
        "solution": "import math\nr, h = float(input('Radius: ')), float(input('Height: '))\nv = math.pi * r**2 * h\nsa = 2 * math.pi * r * (r + h)\nprint(f'Volume={v:.2f}, Area={sa:.2f}')",
        "explanation": "Applies 3D cylinder surface area and volume formulas.",
        "exampleInputs": [
          "2",
          "3"
        ],
        "exampleOutput": "Volume=37.70, Area=62.83"
      },
      {
        "id": "PB-096",
        "srNo": 96,
        "marks": 7,
        "question": "Write a Python program to convert Fahrenheit to Celsius and vice versa.",
        "topic": "Interactive Converter",
        "difficulty": "medium",
        "starterCode": "choice = input('1: F->C, 2: C->F : ')\nval = float(input('Enter value: '))\nif choice == '1':\n    print(f'Celsius: {(val-32)*5/9:.2f}')\nelse:\n    print(f'Fahrenheit: {(val*9/5)+32:.2f}')",
        "solution": "c = input('Choose (1) F to C or (2) C to F: ')\nv = float(input('Val: '))\nif c == '1': print((v-32)*5/9)\nelse: print((v*9/5)+32)",
        "explanation": "Converts temperature based on user selection.",
        "exampleInputs": [
          "1",
          "32"
        ],
        "exampleOutput": "0.0"
      },
      {
        "id": "PB-097",
        "srNo": 97,
        "marks": 7,
        "question": "Write a python code to demonstrate calculator functionality.",
        "topic": "Calculator Logic",
        "difficulty": "medium",
        "starterCode": "op = input('Select (+, -, *, /): ')\na = float(input('a: '))\nb = float(input('b: '))\nif op == '+': res = a + b\nelif op == '-': res = a - b\nelif op == '*': res = a * b\nelif op == '/': res = a / b if b != 0 else 'Division by Zero'\nprint('Result:', res)",
        "solution": "a, op, b = float(input('a: ')), input('op: '), float(input('b: '))\nif op=='+': print(a+b)\nelif op=='-': print(a-b)\nelif op=='*': print(a*b)\nelif op=='/': print(a/b if b!=0 else 'Err')",
        "explanation": "Implements basic arithmetic calculator.",
        "exampleInputs": [
          "8",
          "/",
          "2"
        ],
        "exampleOutput": "4.0"
      },
      {
        "id": "PB-098",
        "srNo": 98,
        "marks": 7,
        "question": "Write a python program to convert Days into Years, Months and Days. (Ex: if input of Days = 370 then output will be, years=1, months=0 and days = 5).",
        "topic": "Integer Division & Modulo",
        "difficulty": "medium",
        "starterCode": "d = int(input('Days: '))\ny = d // 365\nrem = d % 365\nm = rem // 30\ndays = rem % 30\nprint(f'years={y}, months={m} and days = {days}')",
        "solution": "d = int(input('Days: '))\nprint(f'years={d//365}, months={(d%365)//30} and days={d%365%30}')",
        "explanation": "Uses floor division and modulo arithmetic.",
        "exampleInputs": [
          "370"
        ],
        "exampleOutput": "years=1, months=0 and days=5"
      },
      {
        "id": "PB-099",
        "srNo": 99,
        "marks": 7,
        "question": "Write a Python program to convert hours into minutes and seconds (Ex : input of hours = 6 then output will be, minutes = 360 and seconds = 21600 ).",
        "topic": "Time Unit Conversion",
        "difficulty": "easy",
        "starterCode": "h = float(input('Hours: '))\nm = h * 60\ns = h * 3600\nprint(f'minutes = {int(m)} and seconds = {int(s)}')",
        "solution": "h = float(input('Hours: '))\nprint(f'minutes = {int(h*60)} and seconds = {int(h*3600)}')",
        "explanation": "1 hr = 60 mins = 3600 secs.",
        "exampleInputs": [
          "6"
        ],
        "exampleOutput": "minutes = 360 and seconds = 21600"
      },
      {
        "id": "PB-100",
        "srNo": 100,
        "marks": 4,
        "question": "Write a Python program to find an integer exponent x such that a^x = n.\nInput: a = 2 : n = 1024 => Output: 10\nInput: a = 3 : n = 81 => Output: 4",
        "topic": "Loops / Logarithmic Search",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "a = int(input('Base a (at least 2): '))\nn = int(input('Target n (positive): '))\nif a < 2 or n < 1:\n    print('Use a >= 2 and n >= 1.')\nelse:\n    x, value = 0, 1\n    while value < n:\n        value *= a\n        x += 1\n    print(x if value == n else 'No nonnegative integer exponent')",
        "explanation": "Start at a**0 = 1 and multiply by a until reaching or passing n. Requiring a >= 2 prevents an infinite loop. This exercise assumes a nonnegative exponent.",
        "exampleInputs": [
          "2",
          "1024"
        ],
        "exampleOutput": "10"
      }
    ]
  },
  "unit3": {
    "unit": 3,
    "title": "UNIT 3 - Conditional Execution & Iterations (Q101 to Q210)",
    "mcqs": [
      {
        "id": "PB-101",
        "srNo": 101,
        "question": "What does the following code print?\nif 4 + 5 == 10:\n    print(\"TRUE\")\nelse:\n    print(\"FALSE\")\nprint(\"TRUE\")",
        "options": [
          "TRUE",
          "TRUE FALSE",
          "FALSE\nTRUE",
          "TRUE TRUE"
        ],
        "answer": "C",
        "correct": "FALSE\nTRUE",
        "explanation": "4+5 != 10, so else prints FALSE. Next outer print prints TRUE."
      },
      {
        "id": "PB-102",
        "srNo": 102,
        "question": "What does the following code print?\nx = -10\nif x < 0:\n    print(\"The negative number \", x, \" is not valid here.\")\nprint(\"This is always printed\")",
        "options": [
          "This is always printed",
          "The negative number -10 is not valid here.\nThis is always printed",
          "The negative number -10 is not valid here",
          "Error"
        ],
        "answer": "B",
        "correct": "The negative number -10 is not valid here.\nThis is always printed",
        "explanation": "x < 0 is True, so both prints execute sequentially."
      },
      {
        "id": "PB-103",
        "srNo": 103,
        "question": "Which of the following is true about the code below?\nx = 3\nif (x > 2):\n    x = x * 2\n    if (x > 4):\n        x = 0\nprint(x)",
        "options": [
          "x will always equal 0 after this code executes for any value of x",
          "if x is greater than 2, the value in x will be doubled after this code executes",
          "if x is greater than 2, x will equal 0 after this code executes",
          "None of mentioned"
        ],
        "answer": "C",
        "correct": "if x is greater than 2, x will equal 0 after this code executes",
        "explanation": "For x > 2, x becomes 2*x (which is > 4), so x is set to 0."
      },
      {
        "id": "PB-104",
        "srNo": 104,
        "question": "Which one of the following is a valid Python if statement?",
        "options": [
          "if a>=2 :",
          "if (a >= 2)",
          "if (a => 22)",
          "if a >= 22"
        ],
        "answer": "A",
        "correct": "if a>=2 :",
        "explanation": "Python `if` statements end with a colon `:`."
      },
      {
        "id": "PB-105",
        "srNo": 105,
        "question": "What keyword would you use to add an alternative condition to an if statement?",
        "options": [
          "else if",
          "elseif",
          "elif",
          "None of the above"
        ],
        "answer": "C",
        "correct": "elif",
        "explanation": "Python uses `elif` keyword."
      },
      {
        "id": "PB-106",
        "srNo": 106,
        "question": "Which statement will check if a is equal to b?",
        "options": [
          "if a = b:",
          "if a == b:",
          "if a === c:",
          "if a == b"
        ],
        "answer": "B",
        "correct": "if a == b:",
        "explanation": "`==` tests equality and requires colon `:`."
      },
      {
        "id": "PB-107",
        "srNo": 107,
        "question": "Given nested structure:\nx = 0; a = 0; b = -5\nif a > 0:\n    if b < 0: x = x + 5\n    elif a > 5: x = x + 4\n    else: x = x + 3\nelse: x = x + 4\nprint(x)",
        "options": [
          "2",
          "0",
          "3",
          "4"
        ],
        "answer": "D",
        "correct": "4",
        "explanation": "a > 0 is False, so outer `else` runs: x = 0 + 4 = 4."
      },
      {
        "id": "PB-108",
        "srNo": 108,
        "question": "Given nested structure:\nx = 2; a = 5; b = 5\nif a > 0:\n    if b < 0: x = x + 5\n    elif a > 5: x = x + 4\n    else: x = x + 3\nelse: x = x + 2\nprint(x)",
        "options": [
          "0",
          "5",
          "2",
          "3"
        ],
        "answer": "B",
        "correct": "5",
        "explanation": "a=5 (>0). b=5 (not <0). a>5 is False. Runs `else: x = 2 + 3 = 5`."
      },
      {
        "id": "PB-109",
        "srNo": 109,
        "question": "a, b = 12, 5\nif a + b:\n    print('True')\nelse:\n    print('False')",
        "options": [
          "False",
          "True",
          "Can't predict",
          "None of these"
        ],
        "answer": "B",
        "correct": "True",
        "explanation": "17 is truthy, so prints 'True'."
      },
      {
        "id": "PB-110",
        "srNo": 110,
        "question": "Which of the following is not used as loop in Python?",
        "options": [
          "for loop",
          "while loop",
          "do-while loop",
          "None of the above"
        ],
        "answer": "C",
        "correct": "do-while loop",
        "explanation": "Python does not have native do-while loops."
      },
      {
        "id": "PB-111",
        "srNo": 111,
        "question": "A loop becomes infinite loop if a condition never becomes _______.",
        "options": [
          "True",
          "False",
          "Null",
          "Both A and C"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "Loops continue while condition is True."
      },
      {
        "id": "PB-112",
        "srNo": 112,
        "question": "If else statement is used with while loop, else executes when condition becomes ____.",
        "options": [
          "True",
          "False",
          "Infinite",
          "Null"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "`while-else` executes when loop condition turns False naturally."
      },
      {
        "id": "PB-113",
        "srNo": 113,
        "question": "Python allows using one loop inside another loop known as?",
        "options": [
          "switch",
          "foreach",
          "nested",
          "forall"
        ],
        "answer": "C",
        "correct": "nested",
        "explanation": "Nested loop."
      },
      {
        "id": "PB-114",
        "srNo": 114,
        "question": "n=7, c=0, while(n): if(n>5): c=c+n-1, n=n-1 else: break, print(n), print(c)",
        "options": [
          "4 16",
          "5 11",
          "6 7",
          "5 10"
        ],
        "answer": "B",
        "correct": "5 11",
        "explanation": "n=7: c=0+6=6, n=6. n=6: c=6+5=11, n=5. n=5: break. Prints n=5, c=11."
      },
      {
        "id": "PB-115",
        "srNo": 115,
        "question": "How many times will loop run? i=2; while(i>0): i=i-1",
        "options": [
          "2",
          "3",
          "1",
          "0"
        ],
        "answer": "A",
        "correct": "2",
        "explanation": "i=2 -> i=1 -> i=0. Runs 2 times."
      },
      {
        "id": "PB-116",
        "srNo": 116,
        "question": "How many times will the condition be checked? i=2; while(i>0): i=i-1",
        "options": [
          "2",
          "3",
          "1",
          "0"
        ],
        "answer": "B",
        "correct": "3",
        "explanation": "Checked at i=2 (True), i=1 (True), i=0 (False). 3 total checks."
      },
      {
        "id": "PB-117",
        "srNo": 117,
        "question": "var = 10, for i in range(10): for j in range(2, 10, 1): if var % 2 == 0: continue var += 1 else: var += 1, print(var)",
        "options": [
          "20",
          "21",
          "10",
          "30"
        ],
        "answer": "B",
        "correct": "21",
        "explanation": "Outer for-else block executes after loop completion adding 1 to reach 21."
      },
      {
        "id": "PB-118",
        "srNo": 118,
        "question": "for i in range(0,2,-1): print(\"Hello\")",
        "options": [
          "Hello",
          "Hello Hello",
          "No Output",
          "Error"
        ],
        "answer": "C",
        "correct": "No Output",
        "explanation": "Step -1 cannot go from 0 up to 2."
      },
      {
        "id": "PB-119",
        "srNo": 119,
        "question": "Which of the following is a valid for loop in Python?",
        "options": [
          "for(i=0; i < n; i++)",
          "for i in range(0,5):",
          "for i in range(0,5)",
          "for i in range(5)"
        ],
        "answer": "B",
        "correct": "for i in range(0,5):",
        "explanation": "Ends with colon `:`."
      },
      {
        "id": "PB-120",
        "srNo": 120,
        "question": "Which sequence is generated by range(5, 0, -2)?",
        "options": [
          "5 4 3 2 1 0 -1",
          "5 4 3 2 1 0",
          "5 3 1",
          "None of the above"
        ],
        "answer": "C",
        "correct": "5 3 1",
        "explanation": "Decrements by 2: 5, 3, 1."
      },
      {
        "id": "PB-121",
        "srNo": 121,
        "question": "for num in range(-2,-5,-1): print(num, end=\", \")",
        "options": [
          "-2, -1, -3, -4",
          "-2, -1, 0, 1, 2, 3,",
          "-2, -1, 0",
          "-2, -3, -4,"
        ],
        "answer": "D",
        "correct": "-2, -3, -4,",
        "explanation": "Generates -2, -3, -4."
      },
      {
        "id": "PB-122",
        "srNo": 122,
        "question": "x = 12; for i in x: print(i)",
        "options": [
          "12",
          "12 12",
          "Error",
          "None of the above"
        ],
        "answer": "C",
        "correct": "Error",
        "explanation": "`TypeError: 'int' object is not iterable`."
      },
      {
        "id": "PB-123",
        "srNo": 123,
        "question": "x = 0; for i in range(10): for j in range(-1, -10, -1): x += 1; print(x)",
        "options": [
          "99",
          "90",
          "100",
          "101"
        ],
        "answer": "B",
        "correct": "90",
        "explanation": "10 * 9 iterations = 90."
      },
      {
        "id": "PB-124",
        "srNo": 124,
        "question": "for num in range(2,-5,-1): print(num, end=\", \")",
        "options": [
          "2, 1, 0,",
          "2, 1, 0, -1, -2, -3, -4, -5,",
          "2, 1, 0, -1, -2, -3, -4,",
          "None of these"
        ],
        "answer": "C",
        "correct": "2, 1, 0, -1, -2, -3, -4,",
        "explanation": "Generates 2 down to -4."
      },
      {
        "id": "PB-125",
        "srNo": 125,
        "question": "x = 0; while (x < 100): x += 2; print(x)",
        "options": [
          "101",
          "99",
          "None of above, infinite loop",
          "100"
        ],
        "answer": "D",
        "correct": "100",
        "explanation": "Loop stops when x reaches 100."
      },
      {
        "id": "PB-126",
        "srNo": 126,
        "question": "nested loop: for num in range(10, 14): for i in range(2, num): if num%i == 1: print(num); break",
        "options": [
          "11 12 13 14",
          "10 11 12 13",
          "9 10 11 12",
          "12 13 14 15"
        ],
        "answer": "B",
        "correct": "10 11 12 13",
        "explanation": "Prints 10, 11, 12, 13."
      },
      {
        "id": "PB-127",
        "srNo": 127,
        "question": "i = 1; while True: if i%3 == 0: break; print(i); i += 1",
        "options": [
          "1 2",
          "1 2 3",
          "Error",
          "None of these"
        ],
        "answer": "A",
        "correct": "1 2",
        "explanation": "Prints 1 then 2. Breaks when i=3."
      },
      {
        "id": "PB-128",
        "srNo": 128,
        "question": "i = 1; while True: if i%2 == 0: break; print(i); i += 2",
        "options": [
          "1 2",
          "1 2 3 4...",
          "1 3 5 7 9 11...",
          "None"
        ],
        "answer": "D",
        "correct": "1 3 5 7 9 11...",
        "explanation": "i remains odd (1,3,5...) so `i%2==0` is never True, creating infinite odd sequence."
      },
      {
        "id": "PB-129",
        "srNo": 129,
        "question": "i = 2; while True: if i%3 == 0: break; print(i); i += 2",
        "options": [
          "2 4 6 8 10..",
          "2 4",
          "2 3",
          "Error"
        ],
        "answer": "B",
        "correct": "2 4",
        "explanation": "Prints 2, 4. When i=6 (divisible by 3), breaks."
      },
      {
        "id": "PB-130",
        "srNo": 130,
        "question": "i = 1; while False: if i%2 == 0: break; print(i); i += 2",
        "options": [
          "1",
          "1 3 5 7..",
          "1 2 3 4..",
          "None of these"
        ],
        "answer": "D",
        "correct": "None of these",
        "explanation": "while condition is False, so loop never runs (no output)."
      },
      {
        "id": "PB-131",
        "srNo": 131,
        "question": "True = False; while True: print(True); break",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "Assigning to reserved keyword `True` is a SyntaxError."
      },
      {
        "id": "PB-132",
        "srNo": 132,
        "question": "for i in range(0): print(i)",
        "options": [
          "0",
          "No output",
          "Error",
          "None of mentioned"
        ],
        "answer": "B",
        "correct": "No output",
        "explanation": "range(0) is empty."
      },
      {
        "id": "PB-133",
        "srNo": 133,
        "question": "for i in range(2.0): print(i)",
        "options": [
          "0.0 1.0",
          "1",
          "Error",
          "None of mentioned"
        ],
        "answer": "C",
        "correct": "Error",
        "explanation": "`TypeError: 'float' object cannot be interpreted as an integer`."
      },
      {
        "id": "PB-134",
        "srNo": 134,
        "question": "for i in range(int(2.0)): print(i)",
        "options": [
          "0.0 1.0",
          "0 1",
          "Error",
          "None of mentioned"
        ],
        "answer": "B",
        "correct": "0 1",
        "explanation": "`int(2.0)` is 2. Prints 0 then 1."
      },
      {
        "id": "PB-135",
        "srNo": 135,
        "question": "for i in range(float('inf')): print(i)",
        "options": [
          "0.0 0.1 0.2...",
          "0 1 2 3...",
          "0.0 1.0 2.0...",
          "None of mentioned"
        ],
        "answer": "D",
        "correct": "None of mentioned",
        "explanation": "Raises `TypeError: 'float' object cannot be interpreted as an integer`."
      },
      {
        "id": "PB-136",
        "srNo": 136,
        "question": "for i in range(5): if i == 5: break else: print(i) else: print(\"Here\")",
        "options": [
          "0 1 2 3 4 Here",
          "0 1 2 3 4 5 Here",
          "0 1 2 3 4",
          "1 2 3 4 5"
        ],
        "answer": "A",
        "correct": "0 1 2 3 4 Here",
        "explanation": "Prints 0 to 4, then for-else prints 'Here'."
      },
      {
        "id": "PB-137",
        "srNo": 137,
        "question": "for i in range(10): if i == 5: break else: print(i) else: print(\"Here\")",
        "options": [
          "0 1 2 3 4 Here",
          "0 1 2 3 4 5 Here",
          "0 1 2 3 4",
          "1 2 3 4 5"
        ],
        "answer": "C",
        "correct": "0 1 2 3 4",
        "explanation": "Breaks at i=5 so for-else is skipped."
      },
      {
        "id": "PB-138",
        "srNo": 138,
        "question": "x = 2; for i in range(x): x -= 2; print(x)",
        "options": [
          "0 1 2 3 4",
          "0 -2",
          "0",
          "Error"
        ],
        "answer": "B",
        "correct": "0 -2",
        "explanation": "Loop runs 2 times: i=0 -> x=0; i=1 -> x=-2."
      },
      {
        "id": "PB-139",
        "srNo": 139,
        "question": "x = 2; for i in range(x): x += 1; print(x)",
        "options": [
          "0 1 2 3 4..",
          "0 1",
          "3 4",
          "0 1 2 3"
        ],
        "answer": "C",
        "correct": "3 4",
        "explanation": "i=0 -> x=3; i=1 -> x=4."
      },
      {
        "id": "PB-140",
        "srNo": 140,
        "question": "i = 0; while i < 5: print(i); i += 1; if i == 3: break else: print(0); print(0)",
        "options": [
          "0 1 2 0",
          "0 1 2 2 0",
          "Error",
          "None of these"
        ],
        "answer": "A",
        "correct": "0 1 2 0",
        "explanation": "Prints 0, 1, 2. At i=3 breaks. Outer print(0) runs."
      },
      {
        "id": "PB-141",
        "srNo": 141,
        "question": "i = 0; while i < 3: print(i); i += 1 else: print(0); print(0)",
        "options": [
          "0 1 2 0",
          "0 1 2 3 0",
          "0 1 2 0",
          "Error"
        ],
        "answer": "C",
        "correct": "0 1 2 0",
        "explanation": "Prints 0, 1, 2 then while-else prints 0."
      },
      {
        "id": "PB-142",
        "srNo": 142,
        "question": "x = 2; for i in range(x): x -= 2; print(x)",
        "options": [
          "0 1 2 3 4..",
          "0 -2",
          "0",
          "error"
        ],
        "answer": "B",
        "correct": "0 -2",
        "explanation": "Prints 0 then -2."
      },
      {
        "id": "PB-143",
        "srNo": 143,
        "question": "The continue statement can be used in?",
        "options": [
          "while loop",
          "for loop",
          "do-while",
          "Both A and B"
        ],
        "answer": "D",
        "correct": "Both A and B",
        "explanation": "Works in both for and while loops."
      },
      {
        "id": "PB-144",
        "srNo": 144,
        "question": "int(\"Enter value of x:\") for in range[0, 10]: print(\"They are equal\") else: print(\"They are unequal\")",
        "options": [
          "They are unequal",
          "They are equal",
          "0,1,2,3,4,5,6,7,8,9",
          "SyntaxError"
        ],
        "answer": "D",
        "correct": "SyntaxError",
        "explanation": "Malformed for loop syntax."
      },
      {
        "id": "PB-145",
        "srNo": 145,
        "question": "a = 5; b = 5.0; print('yes') if (a == b) else 'no'",
        "options": [
          "yes",
          "no",
          "ZeroError",
          "SyntaxError"
        ],
        "answer": "A",
        "correct": "yes",
        "explanation": "5 == 5.0 is True."
      },
      {
        "id": "PB-146",
        "srNo": 146,
        "question": "a = b = 0 if (a = b): print(0) else: print('otherwise')",
        "options": [
          "yes",
          "0",
          "ZeroError",
          "SyntaxError"
        ],
        "answer": "D",
        "correct": "SyntaxError",
        "explanation": "Assignment `a = b` inside if condition is invalid syntax."
      },
      {
        "id": "PB-147",
        "srNo": 147,
        "question": "Step = 3; for e in range(0, Step): if e%2==0: print('hello') else: print('goodbye')",
        "options": [
          "3",
          "NameError",
          "ZeroError",
          "SyntaxError"
        ],
        "answer": "B",
        "correct": "NameError",
        "explanation": "Variable name `step` in `range(0, step)` is lowercase, but `Step = 3` is capitalized (case-sensitive)."
      },
      {
        "id": "PB-148",
        "srNo": 148,
        "question": "x = 123; for i in x: print(i)",
        "options": [
          "1 2 3",
          "123",
          "TypeError",
          "KeyError"
        ],
        "answer": "C",
        "correct": "TypeError",
        "explanation": "Integers are not iterable."
      },
      {
        "id": "PB-149",
        "srNo": 149,
        "question": "theSum = 0; for count in range(2, 11, 2): theSum += count; print(theSum)",
        "options": [
          "25",
          "20",
          "30",
          "23"
        ],
        "answer": "C",
        "correct": "30",
        "explanation": "2 + 4 + 6 + 8 + 10 = 30."
      },
      {
        "id": "PB-150",
        "srNo": 150,
        "question": "a = True, b = False, c = False\nif not a or b: print(1)\nelif not a or not b and c: print(2)\nelif not a or b or not b and a: print(3)\nelse: print(4)",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "C",
        "correct": "3",
        "explanation": "`not b and a` evaluates to `True and True = True`, matching 3rd condition."
      },
      {
        "id": "PB-151",
        "srNo": 151,
        "question": "var = 10; for i in range(5): for j in range(2, 3, 1): if var%2 == 0: break; var += 1; var+=1 else: var+=1; print(var)",
        "options": [
          "19",
          "20",
          "21",
          "14"
        ],
        "answer": "B",
        "correct": "20",
        "explanation": "Nested loop variable modifications evaluate to 20."
      },
      {
        "id": "PB-152",
        "srNo": 152,
        "question": "A=70\nif A>90: print('Grade A')\nelif A>70 and A<90: print('Grade B')\nelif A>50 and A<70: print('Grade C')\nelif A>35 and A<50: print('Grade D')\nelse: print('Fail')",
        "options": [
          "Grade A",
          "Grade B",
          "Grade C",
          "Fail"
        ],
        "answer": "D",
        "correct": "Fail",
        "explanation": "70 is not strictly > 70, so all elifs fail down to else."
      },
      {
        "id": "PB-153",
        "srNo": 153,
        "question": "seconds=3650\nif seconds>=3600: hour=seconds//3600; seconds %= 3600; print(hour,\"hours\",end=\" \")\nif seconds>=60: minute=seconds//60; seconds %= 60; print(minute,\"minutes\",end=\" \")\nif seconds>0: print(seconds,\"seconds\")",
        "options": [
          "1 hours 50 seconds",
          "1 hours 0 minutes 50 seconds",
          "1 hours 50 minutes",
          "0 hours 0 minutes 3650 seconds"
        ],
        "answer": "A",
        "correct": "1 hours 50 seconds",
        "explanation": "3650s = 1 hr (remaining 50s). 50s is < 60, so minutes skip. Prints `1 hours 50 seconds`."
      },
      {
        "id": "PB-154",
        "srNo": 154,
        "question": "A=0\nfor i in range(4):\n    if i%2==0: pass\n    else: continue\n    break\n    A+=1\nprint(A)",
        "options": [
          "4",
          "3",
          "2",
          "0"
        ],
        "answer": "D",
        "correct": "0",
        "explanation": "At i=0 (even), `pass` runs then `break` immediately terminates loop before `A+=1`. A remains 0."
      },
      {
        "id": "PB-155",
        "srNo": 155,
        "question": "count = 0\nwhile(True):\n    if count % 3 == 0: print(count, end = \" \")\n    if(count > 15): break\n    count += 1",
        "options": [
          "0 3 6 9 12 15",
          "0 1 2 3",
          "0 3 6 9",
          "0 3 6 9 12"
        ],
        "answer": "A",
        "correct": "0 3 6 9 12 15",
        "explanation": "Prints multiples of 3 up to 15."
      },
      {
        "id": "PB-156",
        "srNo": 156,
        "question": "a = True, b = False, c = True\nif not a or b: print (\"a\")\nelif not a or not b and c: print (\"b\")\nelif not a or b or not b and a: print (\"c\")\nelse: print (\"d\")",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answer": "B",
        "correct": "b",
        "explanation": "`not b and c` -> `True and True` -> True. Prints \"b\"."
      },
      {
        "id": "PB-157",
        "srNo": 157,
        "question": "if 5 + 5 == 10: print(\"TRUE\") else: print(\"FALSE\"); print(\"TRUE\")",
        "options": [
          "TRUE",
          "FALSE",
          "TRUE FALSE",
          "TRUE TRUE"
        ],
        "answer": "D",
        "correct": "TRUE TRUE",
        "explanation": "Prints TRUE in if block, then outer print prints TRUE."
      },
      {
        "id": "PB-158",
        "srNo": 158,
        "question": "for num in range(26, 30): for i in range(2, num): if num%i == 1: print(num, end=','); break",
        "options": [
          "26,27,28",
          "26,27,28,29",
          "26,27,28,29,",
          "27,29"
        ],
        "answer": "C",
        "correct": "26,27,28,29,",
        "explanation": "Prints all numbers with trailing comma."
      },
      {
        "id": "PB-159",
        "srNo": 159,
        "question": "var = 10; for i in range(10): for j in range(2, 10, 1): if var % 2 == 0: var += 1; continue; var+=1 else: var+=1; print(var)",
        "options": [
          "20",
          "21",
          "30",
          "31"
        ],
        "answer": "D",
        "correct": "31",
        "explanation": "Var updates inside loop evaluate to 31."
      },
      {
        "id": "PB-160",
        "srNo": 160,
        "question": "a=5, b=7, c=2\nif a>b: a,b = b,a\nif a>c: a,c = c,a\nif b>c: b,c = c,b\nprint(a,b,c,end=\",\")",
        "options": [
          "2,5,7",
          "7,5,2",
          "2 5 7,",
          "7 5 2,"
        ],
        "answer": "C",
        "correct": "2 5 7,",
        "explanation": "Sorts 3 numbers ascending: 2 5 7,"
      },
      {
        "id": "PB-161",
        "srNo": 161,
        "question": "x = 0; for i in range(1,10): for j in range(-1, -10, -1): x += 1; print(x)",
        "options": [
          "81",
          "90",
          "80",
          "99"
        ],
        "answer": "A",
        "correct": "81",
        "explanation": "9 * 9 = 81 total increments."
      },
      {
        "id": "PB-162",
        "srNo": 162,
        "question": "x = 0; while (x < 100): x+=3; print(x)",
        "options": [
          "98",
          "99",
          "100",
          "102"
        ],
        "answer": "D",
        "correct": "102",
        "explanation": "Increments by 3. 99 + 3 = 102."
      },
      {
        "id": "PB-163",
        "srNo": 163,
        "question": "if (9 < 0) and (0 < -9): print(\"hello\")\nelif (9 > 0) or False: print(\"good\")\nelse: print(\"bad\")",
        "options": [
          "IndentationError",
          "hello",
          "good",
          "bad"
        ],
        "answer": "C",
        "correct": "good",
        "explanation": "`9 > 0` is True, so elif block prints \"good\"."
      },
      {
        "id": "PB-164",
        "srNo": 164,
        "question": "c=1, s=0; while c<=8: c=c-1; s=s+c; c=c+2; print(s)",
        "options": [
          "28",
          "30",
          "21",
          "35"
        ],
        "answer": "A",
        "correct": "28",
        "explanation": "Loop accumulates sum s = 28."
      },
      {
        "id": "PB-165",
        "srNo": 165,
        "question": "x=0; while x<10: if x%3==0: x+=5; continue; if x%2==0: x+=14 else: x+=1 else: x+=1; print(x)",
        "options": [
          "10",
          "11",
          "12",
          "0"
        ],
        "answer": "C",
        "correct": "12",
        "explanation": "x becomes 12."
      },
      {
        "id": "PB-166",
        "srNo": 166,
        "question": "val = 154; while(not(val)): val**=2 else: val//=2; print(val)",
        "options": [
          "77",
          "11",
          "154",
          "11858"
        ],
        "answer": "A",
        "correct": "77",
        "explanation": "154 // 2 = 77."
      },
      {
        "id": "PB-167",
        "srNo": 167,
        "question": "n=10, i=1; while(i<=n): k=0; if(n%i==0): j=1; while(j<=i): if(i%j==0): k=k+1; j=j+1; if(k==2): print(i,end=\" \"); i=i+1",
        "options": [
          "2 5",
          "10",
          "100",
          "20"
        ],
        "answer": "A",
        "correct": "2 5",
        "explanation": "Prints prime factors of 10: 2 and 5."
      },
      {
        "id": "PB-168",
        "srNo": 168,
        "question": "i,j=1,4; while True: if(i%7==0 or j%9==0): break; i+=1; j+=1; print(i,j)",
        "options": [
          "5 9",
          "6 7",
          "6 9",
          "7 9"
        ],
        "answer": "C",
        "correct": "6 9",
        "explanation": "Breaks when j=9 (i=6, j=9). Prints 6 9."
      },
      {
        "id": "PB-169",
        "srNo": 169,
        "question": "n=5, c=0; while(n): if(n>5): c=c+n-1; n=n-1 else: c=c+n-1; break; print(n, c)",
        "options": [
          "5 4",
          "5 0",
          "5 1 1",
          "4 0"
        ],
        "answer": "A",
        "correct": "5 4",
        "explanation": "n=5 -> c=0+4=4 -> break. Prints 5 4."
      },
      {
        "id": "PB-170",
        "srNo": 170,
        "question": "for x in range(0,15): if(x%3==0): continue if(x%5==0): continue if(x%7==0): break print(x,end=\" \")",
        "options": [
          "1 2 4",
          "0 1 2 4",
          "0 1 2 3 4 5 6",
          "1 2 3 4 5 6"
        ],
        "answer": "A",
        "correct": "1 2 4",
        "explanation": "Skips multiples of 3 and 5. Breaks at x=7. Prints 1 2 4."
      },
      {
        "id": "PB-171",
        "srNo": 171,
        "question": "for i in range (1,11): sum=0; sum+=i; print(sum)",
        "options": [
          "10",
          "11",
          "55",
          "0"
        ],
        "answer": "A",
        "correct": "10",
        "explanation": "sum is reset to 0 in each loop iteration! At last step (i=10), sum=10."
      },
      {
        "id": "PB-172",
        "srNo": 172,
        "question": "n=6; for i in range(4,n,1): if i==5: break else: print(n)",
        "options": [
          "no output",
          "4",
          "5",
          "n"
        ],
        "answer": "A",
        "correct": "no output",
        "explanation": "i=4 (runs), i=5 breaks loop before for-else can execute."
      },
      {
        "id": "PB-173",
        "srNo": 173,
        "question": "n=1; for i in range(1,n,1): print(\"hello\") else: print(\"hi\")",
        "options": [
          "hi",
          "hello",
          "no output",
          "value errror"
        ],
        "answer": "A",
        "correct": "hi",
        "explanation": "range(1,1) is empty, for-else executes immediately printing \"hi\"."
      },
      {
        "id": "PB-174",
        "srNo": 174,
        "question": "for i in range(1,11): x=0; x+=i; while(x<15): if i%2==0: x+=1 else: x+=2; print(x)",
        "options": [
          "15",
          "17",
          "16",
          "14"
        ],
        "answer": "A",
        "correct": "15",
        "explanation": "Loop terminates when x reaches 15."
      },
      {
        "id": "PB-175",
        "srNo": 175,
        "question": "x=10; if x<15: print(\"h\",end=\" \") elif x>12: print(\"i\",end=\" \") else: print(\"student\",end=\" \"); if x<9: print(\"name\",end=\" \") else: print(\"Name\",end=\"\")",
        "options": [
          "h Name",
          "H name",
          "hi",
          "hi name"
        ],
        "answer": "A",
        "correct": "h Name",
        "explanation": "First if prints \"h \". Second if-else prints \"Name\". Result: \"h Name\"."
      },
      {
        "id": "PB-176",
        "srNo": 176,
        "question": "x=0, count=0; while x<15: if x%2==0: x+=1; continue if x%3==0: x+=1; continue if count==5: break count+=1; print(x,count)",
        "options": [
          "1 5",
          "1 5 5",
          "5",
          "0"
        ],
        "answer": "A",
        "correct": "1 5",
        "explanation": "Prints 1 5."
      },
      {
        "id": "PB-177",
        "srNo": 177,
        "question": "x=0, count=0; for x in range(10): while x<15: if x<0: pass elif x%2==0: x+=1; continue elif x%3==0: x+=1; continue elif count==5: break count+=1; print(x,count)",
        "options": [
          "11 5",
          "10 5",
          "16 5",
          "14 5"
        ],
        "answer": "A",
        "correct": "11 5",
        "explanation": "Prints 11 5."
      }
    ],
    "coding": [
      {
        "id": "PB-178",
        "srNo": 178,
        "marks": 3,
        "question": "Write a program to determine a given number is 'odd' or 'even' and print \"Number is ODD\" or \"Number is Even\".",
        "topic": "Odd/Even Check",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = int(input('Enter number: '))\nif n % 2 == 0:\n    print('Number is Even')\nelse:\n    print('Number is ODD')",
        "explanation": "An integer is even when its remainder modulo 2 is zero; otherwise it is odd.",
        "exampleInputs": [
          "7"
        ],
        "exampleOutput": "Number is ODD"
      },
      {
        "id": "PB-179",
        "srNo": 179,
        "marks": 3,
        "question": "Write a program to check if the input number is positive, negative or zero.",
        "topic": "Sign Check",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = float(input('Enter number: '))\nif n > 0:\n    print('Positive')\nelif n < 0:\n    print('Negative')\nelse:\n    print('Zero')",
        "explanation": "Compare against zero in three branches: greater, less and equal.",
        "exampleInputs": [
          "-3"
        ],
        "exampleOutput": "Negative"
      },
      {
        "id": "PB-180",
        "srNo": 180,
        "marks": 7,
        "question": "Write a program to find the maximum number among the three input numbers.",
        "topic": "Max of 3",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "a = float(input('a: '))\nb = float(input('b: '))\nc = float(input('c: '))\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)",
        "explanation": "A candidate is greatest when it is at least as large as both other values. >= correctly handles ties.",
        "exampleInputs": [
          "4",
          "9",
          "5"
        ],
        "exampleOutput": "9.0"
      },
      {
        "id": "PB-181",
        "srNo": 181,
        "marks": 3,
        "question": "Write a Python Program to Compute the product of the odd digits in a given number, 0 if there are not any odd digits.\nExample:\nInput: 123456789 => Output: 945\nInput: 2468 => Output: 0\nInput: 123547 => Output: 105",
        "topic": "Digit Product",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "n = abs(int(input('Integer: ')))\nproduct, found = 1, False\nwhile n:\n    digit = n % 10\n    if digit % 2 != 0:\n        product *= digit\n        found = True\n    n //= 10\nprint(product if found else 0)",
        "explanation": "Multiply only odd digits, and separately track whether any existed. If none exists, return 0 rather than the initial product 1. 123456789 gives 945.",
        "exampleInputs": [
          "123456789"
        ],
        "exampleOutput": "945"
      },
      {
        "id": "PB-182",
        "srNo": 182,
        "marks": 7,
        "question": "Write a program to check if year is a leap year or not (Nested If).",
        "topic": "Nested If Leap Year",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "year = int(input('Year: '))\nif year % 4 == 0:\n    if year % 100 == 0:\n        if year % 400 == 0:\n            print('Leap year')\n        else:\n            print('Not a leap year')\n    else:\n        print('Leap year')\nelse:\n    print('Not a leap year')",
        "explanation": "Nested conditions: multiples of 4 are leap years, except century years unless divisible by 400.",
        "exampleInputs": [
          "2000"
        ],
        "exampleOutput": "Leap year"
      },
      {
        "id": "PB-183",
        "srNo": 183,
        "marks": 4,
        "question": "Write a program to find sum of first N natural numbers given by user.",
        "topic": "Sum Accumulation",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = int(input('N: '))\nif n < 0: raise ValueError('Use a nonnegative integer')\ntotal = 0\nfor i in range(1, n + 1): total += i\nprint('Sum =', total)",
        "explanation": "Accumulate natural numbers 1 through N. For N=10, the sum is 55; for N=0 it is zero.",
        "exampleInputs": [
          "10"
        ],
        "exampleOutput": "Sum = 55"
      },
      {
        "id": "PB-184",
        "srNo": 184,
        "marks": 4,
        "question": "Write a program to find average of first N natural numbers given by user.",
        "topic": "Average Formula",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = int(input('N: '))\nif n < 1: raise ValueError('Use a positive integer')\ntotal = 0\nfor i in range(1, n + 1): total += i\nprint('Average =', total / n)",
        "explanation": "Divide the sum 1 through N by N. For N=10, average is 5.5; N must be positive.",
        "exampleInputs": [
          "10"
        ],
        "exampleOutput": "Average = 5.5"
      },
      {
        "id": "PB-185",
        "srNo": 185,
        "marks": 4,
        "question": "Write a python program to read three numbers (a,b,c) and check how many numbers between 'a' and 'b' are divisible by 'c'.",
        "topic": "Range Divisibility",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "a = int(input('a: '))\nb = int(input('b: '))\nc = int(input('Divisor: '))\nif c == 0:\n    print('Divisor cannot be zero')\nelse:\n    count = 0\n    for number in range(a + 1, b):\n        if number % c == 0:\n            count += 1\n    print(count)",
        "explanation": "Between means endpoints excluded here. Use range(a, b + 1) if your teacher includes both endpoints. Remainder zero means divisible.",
        "exampleInputs": [
          "1",
          "10",
          "2"
        ],
        "exampleOutput": "4"
      },
      {
        "id": "PB-186",
        "srNo": 186,
        "marks": 4,
        "question": "Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.",
        "topic": "Loop Filtering",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for n in range(7):\n    if n == 3 or n == 6:\n        continue\n    print(n)",
        "explanation": "continue skips 3 and 6; output is 0, 1, 2, 4, 5 on separate lines.",
        "exampleOutput": "0\n1\n2\n4\n5"
      },
      {
        "id": "PB-187",
        "srNo": 187,
        "marks": 4,
        "question": "Write a Python program to print the multiplication table of given number by user.",
        "topic": "Multiplication Table",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = int(input('Number: '))\nfor i in range(1, 11):\n    print(n, 'x', i, '=', n * i)",
        "explanation": "Multiply the number by 1 through 10.",
        "exampleInputs": [
          "7"
        ],
        "exampleOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
      },
      {
        "id": "PB-188",
        "srNo": 188,
        "marks": 4,
        "question": "Write a program to find the factorial of a number provided by the user.",
        "topic": "Factorial",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "def factorial(n):\n    if n < 0:\n        raise ValueError('Factorial requires a nonnegative integer')\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(int(input('n: '))))",
        "explanation": "Multiply integers from 1 to n. The product starts at 1, so 0! is 1. A function returns the product for reuse.",
        "exampleInputs": [
          "5"
        ],
        "exampleOutput": "120"
      },
      {
        "id": "PB-189",
        "srNo": 189,
        "marks": 4,
        "question": "Write a python program to display the Fibonacci sequence up to n-th term.",
        "topic": "Fibonacci Sequence",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "n = int(input('Number of terms: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
        "explanation": "Each next term is the sum of the previous two. For 7 terms: 0 1 1 2 3 5 8.",
        "exampleInputs": [
          "7"
        ],
        "exampleOutput": "0 1 1 2 3 5 8"
      },
      {
        "id": "PB-190",
        "srNo": 190,
        "marks": 4,
        "question": "Write a program to take 10 values from keyboard using loop and print their average on the screen.",
        "topic": "Loop Accumulator",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "total = 0\nfor i in range(10):\n    total += float(input('Value: '))\nprint('Average =', total / 10)",
        "explanation": "Accumulate exactly ten values, then divide by ten.",
        "exampleInputs": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ],
        "exampleOutput": "Average = 5.5"
      },
      {
        "id": "PB-191",
        "srNo": 191,
        "marks": 4,
        "question": "Write a program to reverse a number.",
        "topic": "Number Reversal",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "n = int(input('Integer: '))\nsign = -1 if n < 0 else 1\nn = abs(n)\nreverse = 0\nwhile n:\n    reverse = reverse * 10 + n % 10\n    n //= 10\nprint(sign * reverse)",
        "explanation": "Take the last digit with % 10 and append it to the reversed number. Integer reversal removes leading zeros.",
        "exampleInputs": [
          "12340"
        ],
        "exampleOutput": "4321"
      },
      {
        "id": "PB-192",
        "srNo": 192,
        "marks": 4,
        "question": "Write a program to check whether a number is Armstrong number or not.",
        "topic": "Armstrong Check",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "def is_armstrong(n):\n    if n < 0:\n        return False\n    digits = len(str(n))\n    temp, total = n, 0\n    while temp:\n        total += (temp % 10) ** digits\n        temp //= 10\n    return total == n\n\nn = int(input('Number: '))\nprint('Armstrong' if is_armstrong(n) else 'Not Armstrong')",
        "explanation": "For d digits, sum each digit raised to d. Compare with the original number. 153 = 1**3 + 5**3 + 3**3; zero is also Armstrong.",
        "exampleInputs": [
          "153"
        ],
        "exampleOutput": "Armstrong"
      },
      {
        "id": "PB-193",
        "srNo": 193,
        "marks": 4,
        "question": "Write a program to check if a number is prime or not.",
        "topic": "Prime Check",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "def is_prime(n):\n    if n < 2:\n        return False\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            return False\n        d += 1\n    return True\n\nn = int(input('Number: '))\nprint('Prime' if is_prime(n) else 'Not prime')",
        "explanation": "Try divisors up to the square root. Any composite number has at least one divisor in this range; 0 and 1 are not prime.",
        "exampleInputs": [
          "17"
        ],
        "exampleOutput": "Prime"
      },
      {
        "id": "PB-194",
        "srNo": 194,
        "marks": 4,
        "question": "Write a program to print prime numbers between given interval from user.",
        "topic": "Prime Interval",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "def is_prime(n):\n    if n < 2:\n        return False\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            return False\n        d += 1\n    return True\n\na = int(input('Start: '))\nb = int(input('End: '))\nfor n in range(a, b + 1):\n    if is_prime(n):\n        print(n, end=' ')",
        "explanation": "Apply the prime test to every integer in the inclusive interval.",
        "exampleInputs": [
          "1",
          "20"
        ],
        "exampleOutput": "2 3 5 7 11 13 17 19"
      },
      {
        "id": "PB-195",
        "srNo": 195,
        "marks": 4,
        "question": "Draw a pattern using a python program:\n*\n* *\n* * *\n* * * *",
        "topic": "Star Pattern 1",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*', end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "* \n* * \n* * * \n* * * *"
      },
      {
        "id": "PB-196",
        "srNo": 196,
        "marks": 4,
        "question": "Draw a pattern:\n* * * *\n* * *\n* *\n*",
        "topic": "Star Pattern 2",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for row in range(4, 0, -1):\n    print('* ' * row)",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "* * * * \n* * * \n* * \n*"
      },
      {
        "id": "PB-197",
        "srNo": 197,
        "marks": 4,
        "question": "Draw a pattern using a python program:\n1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1",
        "topic": "Number Pattern 1",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for row in range(5, 0, -1):\n    for col in range(1, row + 1):\n        print(col, end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "1 2 3 4 5 \n1 2 3 4 \n1 2 3 \n1 2 \n1"
      },
      {
        "id": "PB-198",
        "srNo": 198,
        "marks": 3,
        "question": "Draw a pattern using a python program:\n1\n1 2\n1 2 3\n1 2 3 4",
        "topic": "Number Pattern 2",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for row in range(1, 5):\n    for col in range(1, row + 1):\n        print(col, end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "1 \n1 2 \n1 2 3 \n1 2 3 4"
      },
      {
        "id": "PB-199",
        "srNo": 199,
        "marks": 3,
        "question": "Draw a pattern using a python program:\n1\n2 2\n3 3 3\n4 4 4 4",
        "topic": "Repeated Digit Pattern",
        "difficulty": "easy",
        "starterCode": "",
        "solution": "for row in range(1, 5):\n    for col in range(row):\n        print(row, end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "1 \n2 2 \n3 3 3 \n4 4 4 4"
      },
      {
        "id": "PB-200",
        "srNo": 200,
        "marks": 4,
        "question": "Draw a pattern using a python program:\n*\n# #\n* * *\n# # # #",
        "topic": "Alternating Pattern",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*' if row % 2 else '#', end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "* \n# # \n* * * \n# # # #"
      },
      {
        "id": "PB-201",
        "srNo": 201,
        "marks": 4,
        "question": "Draw a pattern using a python program:\n1\n0 1\n1 0 1\n0 1 0 1",
        "topic": "Binary Toggle Pattern",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "for row in range(1, 5):\n    for col in range(row):\n        print((row + col) % 2, end=' ')\n    print()",
        "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
        "exampleOutput": "1 \n0 1 \n1 0 1 \n0 1 0 1"
      },
      {
        "id": "PB-202",
        "srNo": 202,
        "marks": 9,
        "question": "Gross Pay, Annual Income and Income Tax Calculator:\nWrite a Python Program to make the gross pay, annual income and income tax calculator using following data:\nGross Pay = Basic Pay + HRA + DRA + Other Allowances + TA - Professional Tax - EPF.\nBasic Pay: A=60000, B=50000, C=40000, D=30000, E=20000, F=10000.\nOther Allowances: A=8000, B=7000, C=6000, D=5000, E=4000, F=3000.\nHRA: City Tier 1 = 30%, Tier 2 = 20%, Tier 3 = 10% of Basic.\nDRA = 50% of Basic, TA = 900, Prof Tax = 200, EPF = 11% of Basic.\nAnnual Income = Gross Pay * 12.\nTax Slabs (AY 2022-23):\nUp to 2.5L: 0%\n2.5L to 5L: 5%\n5L to 7.5L: 10% (+12,500)\n7.5L to 10L: 15% (+37,500)\n10L to 12.5L: 20% (+75,000)\n12.5L to 15L: 25% (+1,25,000)\nAbove 15L: 30% (+1,87,500)",
        "topic": "Complete Payroll & Tax App",
        "difficulty": "hard",
        "starterCode": "grade = input('Grade (A-F): ').upper()\ncity = int(input('City Tier (1-3): '))\n\nbasics = {'A':60000, 'B':50000, 'C':40000, 'D':30000, 'E':20000, 'F':10000}\nothers = {'A':8000, 'B':7000, 'C':6000, 'D':5000, 'E':4000, 'F':3000}\n\nbasic = basics.get(grade, 10000)\nother = others.get(grade, 3000)\nhra = basic * (0.3 if city==1 else (0.2 if city==2 else 0.1))\ndra = basic * 0.5\nta = 900\npt = 200\nepf = basic * 0.11\n\ngross = basic + hra + dra + other + ta - pt - epf\nannual = gross * 12\n\nif annual <= 250000: tax = 0\nelif annual <= 500000: tax = (annual - 250000) * 0.05\nelif annual <= 750000: tax = 12500 + (annual - 500000) * 0.10\nelif annual <= 1000000: tax = 37500 + (annual - 750000) * 0.15\nelif annual <= 1250000: tax = 75000 + (annual - 1000000) * 0.20\nelif annual <= 1500000: tax = 125000 + (annual - 1250000) * 0.25\nelse: tax = 187500 + (annual - 1500000) * 0.30\n\nprint(f'Gross Pay: {gross:.1f}')\nprint(f'Annual Income: {annual:.1f}')\nprint(f'Income Tax: {tax:.1f}')",
        "solution": "grade = input('Grade: ').upper()\ncity = int(input('City Tier: '))\nbasics = {'A':60000,'B':50000,'C':40000,'D':30000,'E':20000,'F':10000}\nothers = {'A':8000,'B':7000,'C':6000,'D':5000,'E':4000,'F':3000}\nbasic = basics[grade]\nother = others[grade]\nhra = basic * (0.3 if city==1 else 0.2 if city==2 else 0.1)\ngross = basic + hra + basic*0.5 + other + 900 - 200 - basic*0.11\nannual = gross * 12\nif annual <= 250000: t = 0\nelif annual <= 500000: t = (annual-250000)*0.05\nelif annual <= 750000: t = 12500 + (annual-500000)*0.10\nelif annual <= 1000000: t = 37500 + (annual-750000)*0.15\nelif annual <= 1250000: t = 75000 + (annual-1000000)*0.20\nelif annual <= 1500000: t = 125000 + (annual-1250000)*0.25\nelse: t = 187500 + (annual-1500000)*0.30\nprint(f'Gross: {gross:.1f}, Annual: {annual:.1f}, Tax: {t:.1f}')",
        "explanation": "Computes full monthly payroll and applies progressive AY 22-23 tax brackets.",
        "exampleInputs": [
          "A",
          "1"
        ],
        "exampleOutput": "Gross: 110100.0, Annual: 1321200.0, Tax: 142800.0"
      },
      {
        "id": "PB-203",
        "srNo": 203,
        "marks": 5,
        "question": "Write a python program to print all numbers between 1 and 100 (including 1 and 100) that are both, Disarium and Harshad numbers.\n- Disarium: sum of digits raised to position equals number (175 => 1^1 + 7^2 + 5^3 = 175).\n- Harshad: divisible by sum of digits (18 => 1+8=9, 18%9==0).",
        "topic": "Number Theory",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "for n in range(1, 101):\n    disarium, digit_sum = 0, 0\n    for position, digit in enumerate(str(n), 1):\n        disarium += int(digit) ** position\n        digit_sum += int(digit)\n    if disarium == n and n % digit_sum == 0:\n        print(n, end=' ')",
        "explanation": "Disarium uses digit positions starting at 1; Harshad means divisible by the digit sum. Print only numbers passing both tests.",
        "exampleOutput": "1 2 3 4 5 6 7 8 9"
      },
      {
        "id": "PB-204",
        "srNo": 204,
        "marks": 6,
        "question": "Ask user to enter 10 test scores. If score > 100, give warning and re-ask. Output:\n- Highest & Lowest scores\n- Average of scores\n- Second largest score\n- Average after dropping two lowest scores.",
        "topic": "Input Validation & Data Analysis",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "total = 0\nlargest = second = None\nsmallest = second_smallest = None\ncount = 0\nwhile count < 10:\n    score = float(input('Test score (0-100): '))\n    if score < 0 or score > 100:\n        print('Invalid score; enter again')\n        continue\n    total += score\n    if largest is None or score > largest:\n        second, largest = largest, score\n    elif second is None or score > second:\n        second = score\n    if smallest is None or score < smallest:\n        second_smallest, smallest = smallest, score\n    elif second_smallest is None or score < second_smallest:\n        second_smallest = score\n    count += 1\nprint('Highest:', largest)\nprint('Lowest:', smallest)\nprint('Average:', total / 10)\nprint('Second largest:', second)\nprint('Average after dropping two lowest:', (total - smallest - second_smallest) / 8)",
        "explanation": "Track the two largest and two smallest observations using scalar variables. Repeated scores count as separate observations. No list or sorting is used.",
        "exampleInputs": [
          "80",
          "65",
          "98",
          "70",
          "93",
          "130",
          "95",
          "50",
          "40",
          "75",
          "72"
        ],
        "exampleOutput": "Invalid score; enter again\nHighest: 98.0\nLowest: 40.0\nAverage: 73.8\nSecond largest: 95.0\nAverage after dropping two lowest: 81.0"
      },
      {
        "id": "PB-205",
        "srNo": 205,
        "marks": 5,
        "question": "Write a program to encode a number by changing digits: 0-8 increment by +1 (0->1, 1->2...8->9) and 9 replaces with 0.\nExample:\nInput: 31590218 => Output: 42601329\nInput: 9259 => Output: 0360",
        "topic": "Digit Encoding",
        "difficulty": "medium",
        "starterCode": "s = input('Input number: ')\nencoded = ''.join(str((int(d) + 1) % 10) for d in s)\nprint('The number after encoding is:', encoded)",
        "solution": "digits = input('Nonnegative integer digits: ')\nif not digits.isdecimal(): raise ValueError('Use decimal digits')\nprint(''.join(str((int(c)+1)%10) for c in digits))",
        "explanation": "This Semester I statement shows leading zeros, so return a string: 9259 becomes 0360. The Semester III integer-output variant produces 360.",
        "exampleInputs": [
          "9259"
        ],
        "exampleOutput": "0360"
      },
      {
        "id": "PB-206",
        "srNo": 206,
        "marks": 6,
        "question": "Write a program to implement calculator for the date of Easter (1900-2099):\na = year % 19, b = year % 4, c = year % 7\nd = (19 * a + 24) % 30\ne = (2 * b + 4 * c + 6 * d + 5) % 7\ndateofeaster = 22 + d + e\nIf dateofeaster > 31, date is in April (day = dateofeaster - 31). If year is 1954, 1981, 2049, or 2076, subtract 7 from date.",
        "topic": "Algorithm Implementation",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "year = int(input('Year (1900-2099): '))\nif not 1900 <= year <= 2099:\n    raise ValueError('Year outside the specified range')\na, b, c = year % 19, year % 4, year % 7\nd = (19 * a + 24) % 30\ne = (2 * b + 4 * c + 6 * d + 5) % 7\nday = 22 + d + e\nif year in (1954, 1981, 2049, 2076):\n    day -= 7\nmonth = 3\nif day > 31:\n    day -= 31\n    month = 4\nprint(f'{year:04d}-{month:02d}-{day:02d}')",
        "explanation": "Follow the supplied algorithm, apply its exceptional-year correction, and convert dates beyond March 31 to April. 2022 gives 2022-04-17.",
        "exampleInputs": [
          "2022"
        ],
        "exampleOutput": "2022-04-17"
      },
      {
        "id": "PB-207",
        "srNo": 207,
        "marks": 4,
        "question": "Write a Python program to compute the greatest common divisor (GCD) of two positive integers.",
        "topic": "Euclidean GCD Algorithm",
        "difficulty": "medium",
        "starterCode": "",
        "solution": "a = abs(int(input('a: ')))\nb = abs(int(input('b: ')))\nwhile b:\n    a, b = b, a % b\nprint('GCD =', a)",
        "explanation": "Euclid’s algorithm replaces (a, b) with (b, a % b) until the remainder is zero.",
        "exampleInputs": [
          "15",
          "10"
        ],
        "exampleOutput": "GCD = 5"
      },
      {
        "id": "PB-208",
        "srNo": 208,
        "marks": 4,
        "question": "Write a python program that prompts user to enter numbers and stops only when user enters \"QUIT\". Print sum, average, min, max (No built-in min/max functions!).\nInput: 4, 1, 5, \"QUIT\" => Sum=10, Average=3.333, Minimum=1, Maximum=5",
        "topic": "Sentinel Loop & Aggregates",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "total, count = 0, 0\nminimum = maximum = None\nwhile True:\n    value = input('Number or QUIT: ')\n    if value == 'QUIT':\n        break\n    number = float(value)\n    total += number\n    count += 1\n    if minimum is None or number < minimum: minimum = number\n    if maximum is None or number > maximum: maximum = number\nif count:\n    print('Sum:', total, 'Average:', total / count)\n    print('Minimum:', minimum, 'Maximum:', maximum)\nelse:\n    print('No numbers entered')",
        "explanation": "Use scalar accumulators and compare each new value with the current minimum and maximum. Avoid division by zero when no values are entered.",
        "exampleInputs": [
          "4",
          "1",
          "5",
          "QUIT"
        ],
        "exampleOutput": "Sum: 10.0 Average: 3.3333333333333335\nMinimum: 1.0 Maximum: 5.0"
      },
      {
        "id": "PB-209",
        "srNo": 209,
        "marks": 6,
        "question": "Hotel Room Rent Calculator:\nStudio ($/Night): Jan-Apr=50, May-Aug=70, Sep-Dec=80\nApartment ($/Night): Jan-Apr=60, May-Aug=80, Sep-Dec=90\nDiscounts:\nStudio (>3 nights in Jan-Apr: 20%, >3 nights in May-Aug: 10%, >3 nights in Sep-Dec: 5%).\nStudio (>7 nights in Jan-Apr: 30%, >7 nights in May-Aug: 20%, >7 nights in Sep-Dec: 10%).\nApartment (>7 nights any month: 10% discount).\nInput: Month=May, Nights=5 => Studio = $315, Apartment = $400",
        "topic": "Business Decision Logic",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "month = int(input('Month (1-12): '))\nnights = int(input('Nights (1-30): '))\nif not 1 <= month <= 12 or not 1 <= nights <= 30:\n    raise ValueError('Invalid month or nights')\nif month <= 4:\n    studio, apartment = 50, 60\n    discount = 0.30 if nights > 7 else 0.20 if nights > 3 else 0\nelif month <= 8:\n    studio, apartment = 70, 80\n    discount = 0.20 if nights > 7 else 0.10 if nights > 3 else 0\nelse:\n    studio, apartment = 80, 90\n    discount = 0.10 if nights > 7 else 0.05 if nights > 3 else 0\nprint('Studio rent:', studio * nights * (1 - discount))\nprint('Apartment rent:', apartment * nights * (0.90 if nights > 7 else 1))",
        "explanation": "Apply the month band first, then the studio discount by stay length. Apartments get 10% off only for more than 7 nights. May for 5 nights gives studio 315 and apartment 400 dollars.",
        "exampleInputs": [
          "5",
          "5"
        ],
        "exampleOutput": "Studio rent: 315.0\nApartment rent: 400"
      },
      {
        "id": "PB-210",
        "srNo": 210,
        "marks": 5,
        "question": "Prompt user for numbers until user enters \"stop\". Print minimum even, maximum even, average of even numbers, minimum odd, maximum odd, average of odd numbers (No built-in lists/min/max allowed!).\nInput: -1, -5, 9, 2, 4, 6, \"stop\" => for even: 6 2 4.0 (max, min, avg), for odd: 9 -5 1.0 (max, min, avg).",
        "topic": "Complex Sentinel Aggregation",
        "difficulty": "hard",
        "starterCode": "",
        "solution": "even_sum = odd_sum = even_count = odd_count = 0\neven_min = even_max = odd_min = odd_max = None\nwhile True:\n    value = input('Integer or stop: ')\n    if value == 'stop': break\n    n = int(value)\n    if n % 2 == 0:\n        even_sum += n\n        even_count += 1\n        if even_min is None or n < even_min: even_min = n\n        if even_max is None or n > even_max: even_max = n\n    else:\n        odd_sum += n\n        odd_count += 1\n        if odd_min is None or n < odd_min: odd_min = n\n        if odd_max is None or n > odd_max: odd_max = n\nif even_count: print('Even max, min, average:', even_max, even_min, even_sum / even_count)\nelse: print('No even numbers')\nif odd_count: print('Odd max, min, average:', odd_max, odd_min, odd_sum / odd_count)\nelse: print('No odd numbers')",
        "explanation": "Keep separate scalar totals, counts and extrema for even and odd numbers. Negative odd numbers also have a nonzero remainder modulo 2.",
        "exampleInputs": [
          "-1",
          "-5",
          "9",
          "2",
          "4",
          "6",
          "stop"
        ],
        "exampleOutput": "Even max, min, average: 6 2 4.0\nOdd max, min, average: 9 -5 1.0"
      }
    ]
  },
  "unit4": {
    "unit": 4,
    "title": "UNIT 4 - Functions, Scoping and Abstraction (T2 MCQs)",
    "mcqs": [
      {
        "id": "PB-T2-001",
        "srNo": 1,
        "question": "What is the output of the following function call?\ndef fun1(name, age=20):\n    print(name, age)\nfun1('Emma', 25)",
        "options": [
          "Emma 25",
          "Emma 20",
          "Emma, 25",
          "Emma, 20"
        ],
        "answer": "A",
        "correct": "Emma 25",
        "explanation": "The supplied age 25 overrides the default 20. print separates name and age with a space.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def fun1(name, age=20):\n    print(name, age)\nfun1('Emma', 25)",
          "output": "Emma 25"
        }
      },
      {
        "id": "PB-T2-002",
        "srNo": 2,
        "question": "What will be the output of the following Python code?\na=10\nb=20\ndef change():\n    global b\n    a=45\n    b=56\nchange()\nprint(a)\nprint(b)",
        "options": [
          "10\n56",
          "45\n56",
          "10\n20",
          "Syntax Error"
        ],
        "answer": "A",
        "correct": "10\n56",
        "explanation": "a=45 is local to change(), so global a stays 10. global b makes b=56 update the global value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "a=10\nb=20\ndef change():\n    global b\n    a=45\n    b=56\nchange()\nprint(a)\nprint(b)",
          "output": "10\n56"
        }
      },
      {
        "id": "PB-T2-003",
        "srNo": 3,
        "question": "What will be the output of the following Python code?\ndef display(b, n):\n    while n > 0:\n        print(b,end=\"\")\n        n=n-1\ndisplay('z',3)",
        "options": [
          "zzz",
          "zz",
          "An exception is executed",
          "Infinite Loop"
        ],
        "answer": "A",
        "correct": "zzz",
        "explanation": "The loop runs for n=3, 2, 1. Each iteration prints z without a newline, giving zzz.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def display(b, n):\n    while n > 0:\n        print(b,end=\"\")\n        n=n-1\ndisplay('z',3)",
          "output": "zzz"
        }
      },
      {
        "id": "PB-T2-004",
        "srNo": 4,
        "question": "What will be the output of the following Python code?\ndef fun(x,y,z):\n    return x + y + z\nprint(fun(2,30,400))",
        "options": [
          "432",
          "24000",
          "430",
          "No output"
        ],
        "answer": "A",
        "correct": "432",
        "explanation": "The function returns 2 + 30 + 400 = 432.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def fun(x,y,z):\n    return x + y + z\nprint(fun(2,30,400))",
          "output": "432"
        }
      },
      {
        "id": "PB-T2-005",
        "srNo": 5,
        "question": "What will be the output of the following Python code?\ndef func():\n    global value\n    value = \"Local\"\nvalue = \"Global\"\nfunc()\nprint(value)",
        "options": [
          "Local",
          "Global",
          "None",
          "Error"
        ],
        "answer": "A",
        "correct": "Local",
        "explanation": "global value makes the assignment inside func change the global string to Local.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def func():\n    global value\n    value = \"Local\"\nvalue = \"Global\"\nfunc()\nprint(value)",
          "output": "Local"
        }
      },
      {
        "id": "PB-T2-006",
        "srNo": 6,
        "question": "What will be the output of the following Python code?\ndef say(message, times = 1):\n    print(message * times)\nsay('Hello')\nsay('World', 5)",
        "options": [
          "Hello\nWorldWorldWorldWorldWorld",
          "Hello\nWorld 5",
          "Hello\nWorld,World,World,World,World",
          "Hello HelloHelloHelloHelloHello"
        ],
        "answer": "A",
        "correct": "Hello\nWorldWorldWorldWorldWorld",
        "explanation": "The first call uses times=1. The second repeats World five times without separators.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def say(message, times = 1):\n    print(message * times)\nsay('Hello')\nsay('World', 5)",
          "output": "Hello\nWorldWorldWorldWorldWorld"
        }
      },
      {
        "id": "PB-T2-007",
        "srNo": 7,
        "question": "What will be the output of the following Python code?\ndef sub(a,b):\n    print(a-b)\nsub(100,200)\nsub(200,100)",
        "options": [
          "-100\n100",
          "100\n100",
          "100\n-100",
          "-100\n-100"
        ],
        "answer": "A",
        "correct": "-100\n100",
        "explanation": "100−200 is −100; 200−100 is 100. Each call prints on a separate line.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def sub(a,b):\n    print(a-b)\nsub(100,200)\nsub(200,100)",
          "output": "-100\n100"
        }
      },
      {
        "id": "PB-T2-008",
        "srNo": 8,
        "question": "What will be the output of the following Python code?\nx = 50\ndef func(x):\n    print('x is', x)\n    x = 2\n    print('Changed local x to', x)\nfunc(x)\nprint('x is now', x)",
        "options": [
          "x is 50\nChanged local x to 2\nx is now 50",
          "x is 50\nChanged local x to 2\nx is now 2",
          "x is 50\nChanged local x to 2\nx is now 100",
          "None of the mentioned"
        ],
        "answer": "A",
        "correct": "x is 50\nChanged local x to 2\nx is now 50",
        "explanation": "The parameter x is local. Assigning 2 changes only that local variable; the outer x remains 50.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "x = 50\ndef func(x):\n    print('x is', x)\n    x = 2\n    print('Changed local x to', x)\nfunc(x)\nprint('x is now', x)",
          "output": "x is 50\nChanged local x to 2\nx is now 50"
        }
      },
      {
        "id": "PB-T2-009",
        "srNo": 9,
        "question": "What will be the output of the following Python code?\ndef C2F(c):\n    return c * 9/5 + 32\nprint(C2F(100))\nprint(C2F(0))",
        "options": [
          "212\n32",
          "212.0\n32.0",
          "567\n98",
          "None of the mentioned"
        ],
        "answer": "B",
        "correct": "212.0\n32.0",
        "explanation": "The / operator produces a float: 100×9/5+32 = 212.0 and 0×9/5+32 = 32.0.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 1,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def C2F(c):\n    return c * 9/5 + 32\nprint(C2F(100))\nprint(C2F(0))",
          "output": "212.0\n32.0"
        }
      },
      {
        "id": "PB-T2-010",
        "srNo": 10,
        "question": "What will be the output of the following Python code?\ndef function1(var1=5, var2=7):\n    var2=9\n    var1=3\n    print (var1, \" \", var2)\nfunction1(10,12)",
        "options": [
          "5 7",
          "3 9",
          "10 12",
          "Error"
        ],
        "answer": "B",
        "correct": "3 9",
        "explanation": "The body overwrites both supplied arguments with 3 and 9. Option B shows the values; the literal space plus print separators actually produce three spaces between them.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def function1(var1=5, var2=7):\n    var2=9\n    var1=3\n    print (var1, \" \", var2)\nfunction1(10,12)",
          "output": "3   9"
        }
      },
      {
        "id": "PB-T2-011",
        "srNo": 11,
        "question": "What will be the output of the following Python code?\ndef maximum(x, y):\n    if x > y:\n        return x\n    elif x == y:\n        return 'The numbers are equal'\n    else:\n        return y\nprint(maximum(2, 3))",
        "options": [
          "2",
          "3",
          "The numbers are equal",
          "None of the mentioned"
        ],
        "answer": "B",
        "correct": "3",
        "explanation": "2 is smaller than 3, so the else branch returns y, which is 3.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def maximum(x, y):\n    if x > y:\n        return x\n    elif x == y:\n        return 'The numbers are equal'\n    else:\n        return y\nprint(maximum(2, 3))",
          "output": "3"
        }
      },
      {
        "id": "PB-T2-012",
        "srNo": 12,
        "question": "What will be the output of the following Python code?\ndef power(x, y=2):\n    r = 1\n    for i in range(y):\n        r = r * x\n    return r\nprint(power(3))\nprint(power(3,3))",
        "options": [
          "212\n32",
          "9\n27",
          "567\n98",
          "None of the mentioned"
        ],
        "answer": "B",
        "correct": "9\n27",
        "explanation": "With default y=2, the loop multiplies by 3 twice to give 9. With y=3, it gives 27.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def power(x, y=2):\n    r = 1\n    for i in range(y):\n        r = r * x\n    return r\nprint(power(3))\nprint(power(3,3))",
          "output": "9\n27"
        }
      },
      {
        "id": "PB-T2-013",
        "srNo": 13,
        "question": "What will be the output of the following Python code?\nx = 50\ndef func():\n    global x\n    print('x is', x)\n    x = 2\n    print('Changed global x to', x)\nfunc()\nprint('Value of x is', x)",
        "options": [
          "x is 50\nChanged global x to 2\nValue of x is 50",
          "x is 50\nChanged global x to 2\nValue of x is 2",
          "x is 50\nChanged global x to 50\nValue of x is 50",
          "None of the mentioned"
        ],
        "answer": "B",
        "correct": "x is 50\nChanged global x to 2\nValue of x is 2",
        "explanation": "global x makes the assignment update the outer x. Both subsequent messages therefore use 2.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "x = 50\ndef func():\n    global x\n    print('x is', x)\n    x = 2\n    print('Changed global x to', x)\nfunc()\nprint('Value of x is', x)",
          "output": "x is 50\nChanged global x to 2\nValue of x is 2"
        }
      },
      {
        "id": "PB-T2-014",
        "srNo": 14,
        "question": "What is the output of the add() function call?\ndef add(a, b):\n    return a+5, b+5\nresult = add(3, 2)\nprint(result)",
        "options": [
          "15",
          "8",
          "(8,7)",
          "Syntax Error"
        ],
        "answer": "C",
        "correct": "(8,7)",
        "explanation": "Returning two comma-separated values packs them into a tuple: (3+5, 2+5) = (8, 7).",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def add(a, b):\n    return a+5, b+5\nresult = add(3, 2)\nprint(result)",
          "output": "(8, 7)"
        }
      },
      {
        "id": "PB-T2-015",
        "srNo": 15,
        "question": "What will be the output of the following Python code?\ndef change(i = 1, j = 2):\n    i = i + j\n    j = j + 1\n    print(i, j)\nchange(j = 1, i = 2)",
        "options": [
          "1 2",
          "3 3",
          "3 2",
          "An exception is thrown because\nof conflicting values"
        ],
        "answer": "C",
        "correct": "3 2",
        "explanation": "Keyword arguments set i=2 and j=1. Then i becomes 3 and j becomes 2.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def change(i = 1, j = 2):\n    i = i + j\n    j = j + 1\n    print(i, j)\nchange(j = 1, i = 2)",
          "output": "3 2"
        }
      },
      {
        "id": "PB-T2-016",
        "srNo": 16,
        "question": "What will be the output of the following Python code?\ndef cube(x):\n    return x*x*x\nx = cube(3)\nprint(x)",
        "options": [
          "9",
          "3",
          "27",
          "30"
        ],
        "answer": "C",
        "correct": "27",
        "explanation": "cube(3) returns 3×3×3 = 27.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def cube(x):\n    return x*x*x\nx = cube(3)\nprint(x)",
          "output": "27"
        }
      },
      {
        "id": "PB-T2-017",
        "srNo": 17,
        "question": "What will be the output of the following Python code?\ndef func(a, b=5, c=10):\n    print('a is', a, 'and b is', b, 'and c is', c)\nfunc(3, 7)\nfunc(25, c = 24)\nfunc(c = 50, a = 100)",
        "options": [
          "a is 7 and b is 3 and c is 10\na is 25 and b is 5 and c is 24\na is 5 and b is 100 and c is 50",
          "a is 3 and b is 7 and c is 10\na is 5 and b is 25 and c is 24\na is 50 and b is 100 and c is 5",
          "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50",
          "None of the mentioned"
        ],
        "answer": "C",
        "correct": "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50",
        "explanation": "Positional arguments bind left to right; named arguments bind by name. Unspecified b and c retain defaults 5 and 10.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def func(a, b=5, c=10):\n    print('a is', a, 'and b is', b, 'and c is', c)\nfunc(3, 7)\nfunc(25, c = 24)\nfunc(c = 50, a = 100)",
          "output": "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50"
        }
      },
      {
        "id": "PB-T2-018",
        "srNo": 18,
        "question": "What will be the output of the following Python code?\ndef function1(var1,var2=5):\n    var1=2\n    var3=var1*var2\n    return var3\nvar1=3\nprint(function1(var1,var2))",
        "options": [
          "10",
          "15",
          "Error as var2 is not defined while\ncalling the function",
          "Does not give any error as var2 is\na default argument"
        ],
        "answer": "C",
        "correct": "Error as var2 is not defined while\ncalling the function",
        "explanation": "Arguments are evaluated in the caller before the call. var2 is undefined there; a default parameter does not create a global variable.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 2,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def function1(var1,var2=5):\n    var1=2\n    var3=var1*var2\n    return var3\nvar1=3\nprint(function1(var1,var2))",
          "output": "",
          "error": "NameError: name 'var2' is not defined."
        }
      },
      {
        "id": "PB-T2-019",
        "srNo": 19,
        "question": "What will be the output of the following Python code?\ndef printMax(a, b):\n    if a > b:\n        print(a, 'is maximum')\n    elif a == b:\n        print(a, 'is equal to', b)\n    else:\n        print(b, 'is maximum')\nprintMax(3, 4)",
        "options": [
          "3",
          "4",
          "4 is maximum",
          "None of the mentioned"
        ],
        "answer": "C",
        "correct": "4 is maximum",
        "explanation": "3 < 4, so the else branch prints 4 is maximum.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def printMax(a, b):\n    if a > b:\n        print(a, 'is maximum')\n    elif a == b:\n        print(a, 'is equal to', b)\n    else:\n        print(b, 'is maximum')\nprintMax(3, 4)",
          "output": "4 is maximum"
        }
      },
      {
        "id": "PB-T2-020",
        "srNo": 20,
        "question": "What will be the output of the following Python code?\ni=0\ndef change(i):\n    i=i+1\n    return i\nchange(1)\nprint(i)",
        "options": [
          "1",
          "Nothing is displayed",
          "0",
          "An exception is thrown"
        ],
        "answer": "C",
        "correct": "0",
        "explanation": "change modifies its local parameter and returns 2, but that return value is ignored. Global i stays 0.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "i=0\ndef change(i):\n    i=i+1\n    return i\nchange(1)\nprint(i)",
          "output": "0"
        }
      },
      {
        "id": "PB-T2-021",
        "srNo": 21,
        "question": "What is the output of the following function call?\ndef fun1(num):\n    return num + 25\nfun1(5)\nprint(num)",
        "options": [
          "25",
          "5",
          "30",
          "NameError"
        ],
        "answer": "D",
        "correct": "NameError",
        "explanation": "num exists only as a parameter inside fun1. Referencing it outside the function raises NameError.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "def fun1(num):\n    return num + 25\nfun1(5)\nprint(num)",
          "output": "",
          "error": "NameError: name 'num' is not defined."
        }
      },
      {
        "id": "PB-T2-022",
        "srNo": 22,
        "question": "What will be the last line of the output of the following Python code if test_fib(6) is called?\ndef fib(x):\n    global num_fib_calls\n    num_fib_calls += 1\n    if x == 0 or x == 1:\n        return 1\n    else:\n        return fib(x-1) + fib(x-2)\ndef test_fib(n):\n    for i in range(n+1):\n        global num_fib_calls\n        num_fib_calls = 0\n        print('fib of', i, '=', fib(i))\n    print('fib called', num_fib_calls, 'times.')",
        "options": [
          "fib called 5 times",
          "fib called 10 times",
          "fib called 20 times",
          "fib called 25 times"
        ],
        "answer": "D",
        "correct": "fib called 25 times",
        "explanation": "Count every call, including the initial one: C(0)=C(1)=1 and C(n)=1+C(n−1)+C(n−2). Thus C(6)=25. The counter resets before each new Fibonacci calculation. The trace explicitly calls test_fib(6), as requested.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "def fib(x):\n    global num_fib_calls\n    num_fib_calls += 1\n    if x == 0 or x == 1:\n        return 1\n    else:\n        return fib(x-1) + fib(x-2)\ndef test_fib(n):\n    for i in range(n+1):\n        global num_fib_calls\n        num_fib_calls = 0\n        print('fib of', i, '=', fib(i))\n    print('fib called', num_fib_calls, 'times.')\ntest_fib(6)",
          "output": "fib of 0 = 1\nfib of 1 = 1\nfib of 2 = 2\nfib of 3 = 3\nfib of 4 = 5\nfib of 5 = 8\nfib of 6 = 13\nfib called 25 times."
        }
      },
      {
        "id": "PB-T2-023",
        "srNo": 23,
        "question": "What will be the output of the following Python code?\ndef f(p, q, r):\n    global s\n    p = 10\n    q = 20\n    r = 30\n    s = 40\n    print(p,q,r,s)\np,q,r,s = 1,2,3,4\nf(5,10,15)",
        "options": [
          "10 20 30 40",
          "10 20 30 4",
          "1 2 3 40",
          "1 2 3 4"
        ],
        "answer": "A",
        "correct": "10 20 30 40",
        "explanation": "p, q and r are local parameters overwritten with 10, 20 and 30. global s updates s to 40, and the function prints all four values.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def f(p, q, r):\n    global s\n    p = 10\n    q = 20\n    r = 30\n    s = 40\n    print(p,q,r,s)\np,q,r,s = 1,2,3,4\nf(5,10,15)",
          "output": "10 20 30 40"
        }
      },
      {
        "id": "PB-T2-024",
        "srNo": 24,
        "question": "If number of arguments in function definition and function call does not match, then which type\nof error is returned?",
        "options": [
          "NameError",
          "ImportError",
          "funError",
          "TypeError"
        ],
        "answer": "D",
        "correct": "TypeError",
        "explanation": "A call that supplies too many arguments or omits required arguments raises TypeError. Defaults and variable-length parameters can allow different argument counts.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "D",
        "marks": 1.0
      },
      {
        "id": "PB-T2-025",
        "srNo": 25,
        "question": "What will be the output of the following Python code?\ndef power(x, y=3):\n    r = 1\n    for i in range(y):\n        r = r * x\n    return r\nprint(power(3),end=\"\")\nprint(power(3,3))",
        "options": [
          "33",
          "99",
          "2727",
          "927"
        ],
        "answer": "C",
        "correct": "2727",
        "explanation": "Both calls calculate 3 cubed, which is 27. end=\"\" joins the outputs into 2727.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "C",
        "marks": 0.5,
        "trace": {
          "code": "def power(x, y=3):\n    r = 1\n    for i in range(y):\n        r = r * x\n    return r\nprint(power(3),end=\"\")\nprint(power(3,3))",
          "output": "2727"
        }
      },
      {
        "id": "PB-T2-026",
        "srNo": 26,
        "question": "Select which is true for Python function:\ni) A function is a code block that only executes when called and always returns a value.\nii) A function only executes when it is called and we can reuse it in a program.\niii) Python doesn’t support nested function",
        "options": [
          "only i",
          "only ii",
          "I & ii",
          "I & iii"
        ],
        "answer": "C",
        "correct": "I & ii",
        "explanation": "Ordinary function bodies run when called and can be reused. A function without an explicit return returns None. Nested functions are supported, so statement iii is false.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 3,
        "sourceAnswer": "C",
        "marks": 1.0
      },
      {
        "id": "PB-T2-027",
        "srNo": 27,
        "question": "What will be the output of the following Python code?\ndef function1(var1=7,var2=5):\n    var1=2\n    var3=var1*var2\n    return var3\nvar2=6\nvar1=3\nprint(function1(var1,var2))",
        "options": [
          "12",
          "10",
          "18",
          "25"
        ],
        "answer": "A",
        "correct": "12",
        "explanation": "The passed var2 is 6. The function replaces var1 with 2 and returns 2×6 = 12.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "A",
        "marks": 0.5,
        "trace": {
          "code": "def function1(var1=7,var2=5):\n    var1=2\n    var3=var1*var2\n    return var3\nvar2=6\nvar1=3\nprint(function1(var1,var2))",
          "output": "12"
        }
      },
      {
        "id": "PB-T2-028",
        "srNo": 28,
        "question": "What will be the output of the following Python code?\ndef fun(a=5,b=10,c):\n    print(a**2,b//a,c**1)\nfun(20,c=30)",
        "options": [
          "400 1 5",
          "25 2 5",
          "400 2 30",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "A required positional parameter c cannot follow parameters with defaults. The function definition raises SyntaxError before it can be called.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "D",
        "marks": 0.5,
        "trace": {
          "code": "def fun(a=5,b=10,c):\n    print(a**2,b//a,c**1)\nfun(20,c=30)",
          "output": "",
          "error": "SyntaxError: parameter without a default follows parameter with a default"
        }
      },
      {
        "id": "PB-T2-029",
        "srNo": 29,
        "question": "What will be the output of the following python code?\ncar=20\nbike=10\ncycle=30\ndef new_Pur():\n    global bike,cycle\n    car=30\n    bike=20\n    cycle=50\nnew_Pur()\nprint(car+10,\" \",bike+5,\" \",cycle+5)",
        "options": [
          "30 15 35",
          "30 25 55",
          "30 25 35",
          "20 25 55"
        ],
        "answer": "B",
        "correct": "30 25 55",
        "explanation": "car is assigned locally, leaving global car=20. Global bike and cycle become 20 and 50. The printed values are 30, 25 and 55; the explicit spaces add extra spacing.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "B",
        "marks": 0.5,
        "trace": {
          "code": "car=20\nbike=10\ncycle=30\ndef new_Pur():\n    global bike,cycle\n    car=30\n    bike=20\n    cycle=50\nnew_Pur()\nprint(car+10,\" \",bike+5,\" \",cycle+5)",
          "output": "30   25   55"
        }
      },
      {
        "id": "PB-T2-030",
        "srNo": 30,
        "question": "What will be the output of the following Python code?\ndef f():\n    print(x,end=\" \")\n    return y\ndef f():\n    print(y,end=\" \")\n    return\nx=5\ny=4\nprint(f())",
        "options": [
          "4 None",
          "54",
          "45",
          "5"
        ],
        "answer": "A",
        "correct": "4 None",
        "explanation": "The second definition replaces the first f. It prints y=4 and its bare return produces None, which the outer print displays.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "def f():\n    print(x,end=\" \")\n    return y\ndef f():\n    print(y,end=\" \")\n    return\nx=5\ny=4\nprint(f())",
          "output": "4 None"
        }
      }
    ],
    "coding": []
  },
  "unit5": {
    "unit": 5,
    "title": "UNIT 5 - Strings and Tuples (T2 MCQs)",
    "mcqs": [
      {
        "id": "PB-T2-044",
        "srNo": 44,
        "question": "What arithmetic operators cannot be used with strings?",
        "options": [
          "-",
          "+",
          "*",
          "All of the mentioned"
        ],
        "answer": "A",
        "correct": "-",
        "explanation": "Strings support concatenation with + and repetition with an integer using *. Subtraction with - is not supported.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "A",
        "marks": 1.0
      },
      {
        "id": "PB-T2-045",
        "srNo": 45,
        "question": "Name the function which is used to find length of string.",
        "options": [
          "length( )",
          "len( )",
          "slen( )",
          "strlen( )"
        ],
        "answer": "B",
        "correct": "len( )",
        "explanation": "len(string) returns the number of characters in the string.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 4,
        "sourceAnswer": "B",
        "marks": 1.0
      },
      {
        "id": "PB-T2-046",
        "srNo": 46,
        "question": "What will be the output of above Python code?\nstr1=\"6/4\"\nprint(\"str1\")",
        "options": [
          "1",
          "6/4",
          "str1",
          "1.5"
        ],
        "answer": "C",
        "correct": "str1",
        "explanation": "Quotes make \"str1\" a literal string. The variable value 6/4 is never printed or evaluated.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "str1=\"6/4\"\nprint(\"str1\")",
          "output": "str1"
        }
      },
      {
        "id": "PB-T2-047",
        "srNo": 47,
        "question": "What will be the output of below Python code?\nstr1=\"Programming\"\nprint(str1[3:8])",
        "options": [
          "ogram",
          "gramm",
          "rammin",
          "ogramming"
        ],
        "answer": "B",
        "correct": "gramm",
        "explanation": "The slice includes indices 3 through 7 of Programming, producing gramm. The stop index 8 is excluded.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "str1=\"Programming\"\nprint(str1[3:8])",
          "output": "gramm"
        }
      },
      {
        "id": "PB-T2-048",
        "srNo": 48,
        "question": "What will the below Python code will return?\nstr1=\"save paper,save trees\"\nstr1.find(\"save\")",
        "options": [
          "It returns the first index position\nof the last occurance of \"save\" in\nthe given\nstring str1.",
          "It returns the first index position\nof the first occurance of \"save\" in\nthe given string str1.",
          "It returns the last index position of\nthe last occurance of \"save\" in the\ngiven string str1.",
          "It returns the last index position\nof the first occurance of \"save\" in\nthe given\nstring str1."
        ],
        "answer": "B",
        "correct": "It returns the first index position\nof the first occurance of \"save\" in\nthe given string str1.",
        "explanation": "find returns the start index of the first matching substring, or −1 if absent. Here the first save starts at index 0. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "str1 = 'save paper,save trees'\nprint(str1.find('save'))",
          "output": "0"
        }
      },
      {
        "id": "PB-T2-049",
        "srNo": 49,
        "question": "Which of the following will give \"Aryan\" as output?\nstr1=\"Vishv,Aryan,Devarsh\"",
        "options": [
          "print(str1[-9:-12])",
          "print(str1[-12:-7])",
          "print(str1[-13:-6])",
          "print(str1[-13:-8])"
        ],
        "answer": "D",
        "correct": "print(str1[-13:-8])",
        "explanation": "The string has 18 characters. Negative indices −13 and −8 map to indices 5 and 10, so the slice is Aryan.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "D",
        "marks": 1.0
      },
      {
        "id": "PB-T2-050",
        "srNo": 50,
        "question": "What will following Python code return?\nstr1=\"LJ University\"\nprint(len(str1))",
        "options": [
          "13",
          "12",
          "11",
          "14"
        ],
        "answer": "A",
        "correct": "13",
        "explanation": "LJ has 2 characters, the space counts as 1, and University has 10: total 13.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "str1=\"LJ University\"\nprint(len(str1))",
          "output": "13"
        }
      },
      {
        "id": "PB-T2-051",
        "srNo": 51,
        "question": "What will be the output of the following Python statement?\n\"abcdef\"[2:8]",
        "options": [
          "cde",
          "cdef",
          "bcdef",
          "def"
        ],
        "answer": "B",
        "correct": "cdef",
        "explanation": "The slice starts at index 2. A stop beyond the string length is clipped, so the value is cdef. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "print('abcdef'[2:8])",
          "output": "cdef"
        }
      },
      {
        "id": "PB-T2-052",
        "srNo": 52,
        "question": "What will be the output of the following Python statement?\nprint('new'  'line')",
        "options": [
          "Error",
          "Output equivalent to print\n‘new\\nline’",
          "new line",
          "newline"
        ],
        "answer": "D",
        "correct": "newline",
        "explanation": "Adjacent string literals are concatenated by Python, with no inserted space or newline.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "print('new'  'line')",
          "output": "newline"
        }
      },
      {
        "id": "PB-T2-053",
        "srNo": 53,
        "question": "What will be the output of the following Python code?\nstr1=\"hello world\"\nstr1[::-1]",
        "options": [
          "hello",
          "world",
          "dlrow olleh",
          "hello world"
        ],
        "answer": "C",
        "correct": "dlrow olleh",
        "explanation": "A slice with step −1 reverses the entire string. In a script, a bare expression needs print to display its value. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "str1 = 'hello world'\nprint(str1[::-1])",
          "output": "dlrow olleh"
        }
      },
      {
        "id": "PB-T2-054",
        "srNo": 54,
        "question": "What will be the output of the following Python code?\nx = 'abcd'\nfor i in range(len(x)):\n    i.upper()\nprint (x)",
        "options": [
          "a b c d",
          "0 1 2 3",
          "error",
          "None of mentioned"
        ],
        "answer": "C",
        "correct": "error",
        "explanation": "range(len(x)) produces integers. The first integer has no upper method, so AttributeError occurs before print.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "x = 'abcd'\nfor i in range(len(x)):\n    i.upper()\nprint (x)",
          "output": "",
          "error": "AttributeError: 'int' object has no attribute 'upper'"
        }
      },
      {
        "id": "PB-T2-055",
        "srNo": 55,
        "question": "What will be the output of the following Python code?\nprint('abcd1234'.isalnum())",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "answer": "A",
        "correct": "True",
        "explanation": "Every character is a letter or digit and the string is nonempty, so isalnum() returns True.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "print('abcd1234'.isalnum())",
          "output": "True"
        }
      },
      {
        "id": "PB-T2-056",
        "srNo": 56,
        "question": "Select the correct output of the following String operations.\nstr1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.count(sub, 5))",
        "options": [
          "5",
          "7",
          "6",
          "4"
        ],
        "answer": "C",
        "correct": "6",
        "explanation": "count searches from index 5 to the end and counts non-overlapping occurrences. Six occurrences of is remain.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "str1 = \"my isname isisis jameis isis bond\"\nsub = \"is\"\nprint(str1.count(sub, 5))",
          "output": "6"
        }
      },
      {
        "id": "PB-T2-057",
        "srNo": 57,
        "question": "What is the output of the following string comparison.\nprint(\"John\" > \"Jhon\")\nprint(\"Emma\" < \"Emm\")",
        "options": [
          "True\nTrue",
          "True\nFalse",
          "False\nTrue",
          "False\nFalse"
        ],
        "answer": "B",
        "correct": "True\nFalse",
        "explanation": "Comparison is lexicographic: o is greater than h, so John > Jhon. Emm is a prefix of Emma, making the longer string greater, not smaller.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "print(\"John\" > \"Jhon\")\nprint(\"Emma\" < \"Emm\")",
          "output": "True\nFalse"
        }
      },
      {
        "id": "PB-T2-058",
        "srNo": 58,
        "question": "Select the correct output of the following String operations.\nstr1 = 'Welcome'\nprint (str1[:6] + 'LJIET')",
        "options": [
          "WelcoLJIET",
          "Welcome LJIET",
          "WelcomeLJIET",
          "WelcomLJIET"
        ],
        "answer": "D",
        "correct": "WelcomLJIET",
        "explanation": "str1[:6] is Welcom. Concatenating LJIET gives WelcomLJIET without a space.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "str1 = 'Welcome'\nprint (str1[:6] + 'LJIET')",
          "output": "WelcomLJIET"
        }
      },
      {
        "id": "PB-T2-059",
        "srNo": 59,
        "question": "Guess the correct output of the following code?\nstr1 = \"LJIET\"\nprint(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])",
        "options": [
          "JIE LJIET T LJIE LJIE",
          "JIE LJIET T LJI LJI",
          "JIE LJIET T LJIET LJIET",
          "JIE LJIET T LJIE LJI"
        ],
        "answer": "A",
        "correct": "JIE LJIET T LJIE LJIE",
        "explanation": "The five slices are JIE, LJIET, T, LJIE and LJIE. print separates them with spaces.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "str1 = \"LJIET\"\nprint(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])",
          "output": "JIE LJIET T LJIE LJIE"
        }
      },
      {
        "id": "PB-T2-060",
        "srNo": 60,
        "question": "Which of the following is a Python tuple?",
        "options": [
          "[1, 2, 3]",
          "(1, 2, 3)",
          "{1, 2, 3}",
          "{}"
        ],
        "answer": "B",
        "correct": "(1, 2, 3)",
        "explanation": "Comma-separated values in parentheses create a tuple. The other options are a list, a set and an empty dictionary.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0
      },
      {
        "id": "PB-T2-061",
        "srNo": 61,
        "question": "Which of the following creates a tuple?",
        "options": [
          "tuple1=(5)*2",
          "tuple1=(\"a\",\"b\")",
          "tuple1[2]=(\"a\",\"b\")",
          "None of the above"
        ],
        "answer": "B",
        "correct": "tuple1=(\"a\",\"b\")",
        "explanation": "(\"a\", \"b\") creates a two-element tuple. Parentheses around the integer 5 do not make it a tuple.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0
      },
      {
        "id": "PB-T2-062",
        "srNo": 62,
        "question": "What type will be printed when the following code executes?\naTuple = (\"Orange\")\nprint (type(aTuple))",
        "options": [
          "list",
          "tuple",
          "array",
          "str"
        ],
        "answer": "D",
        "correct": "str",
        "explanation": "Parentheses alone do not create a tuple. A one-element tuple needs a trailing comma, such as (\"Orange\",). The printed type is <class 'str'>.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "aTuple = (\"Orange\")\nprint (type(aTuple))",
          "output": "<class 'str'>"
        }
      },
      {
        "id": "PB-T2-063",
        "srNo": 63,
        "question": "What will the following code return?\ndef practice(tup):\n    a, b, c = tup\n    return b\naTuple = \"Orange\", 30, \"White\"\npractice(aTuple)",
        "options": [
          "Orange",
          "30",
          "White",
          "(\"Orange\", 30, \"White\")"
        ],
        "answer": "B",
        "correct": "30",
        "explanation": "Unpacking assigns Orange to a, 30 to b and White to c. The function returns b, so the value is 30. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def practice(tup):\n    a, b, c = tup\n    return b\naTuple = ('Orange', 30, 'White')\nprint(practice(aTuple))",
          "output": "30"
        }
      },
      {
        "id": "PB-T2-064",
        "srNo": 64,
        "question": "Suppose t = (1, 2, 4, 3), which of the following is incorrect?",
        "options": [
          "print(t[3])",
          "t[3] = 45",
          "print(max(t))",
          "print(len(t))"
        ],
        "answer": "B",
        "correct": "t[3] = 45",
        "explanation": "Tuples are immutable, so assigning to t[3] raises TypeError. Indexing, max and len are valid.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "B",
        "marks": 1.0
      },
      {
        "id": "PB-T2-065",
        "srNo": 65,
        "question": "What will be the output of the following Python code?\nt=(1,2,4,3)\nt[1:3]",
        "options": [
          "(1, 2)",
          "(1, 2, 4)",
          "(2, 4)",
          "(2, 4, 3)"
        ],
        "answer": "C",
        "correct": "(2, 4)",
        "explanation": "Indices 1 and 2 contain 2 and 4. The stop index 3 is excluded. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "t = (1, 2, 4, 3)\nprint(t[1:3])",
          "output": "(2, 4)"
        }
      },
      {
        "id": "PB-T2-066",
        "srNo": 66,
        "question": "What will be the output of the following Python code?\nt=(1,2,4,3)\nt[1:-1]",
        "options": [
          "(1, 2)",
          "(1, 2, 4)",
          "(2, 4)",
          "(2, 4, 3)"
        ],
        "answer": "C",
        "correct": "(2, 4)",
        "explanation": "Stop −1 refers to the final element, which is excluded. The middle two elements are (2, 4). The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "t = (1, 2, 4, 3)\nprint(t[1:-1])",
          "output": "(2, 4)"
        }
      },
      {
        "id": "PB-T2-067",
        "srNo": 67,
        "question": "What will be the output of the following Python code?\nt = (4,6)\n2*t",
        "options": [
          "(4,6, 4, 6)",
          "[4,6,4,6]",
          "(4,4,6,6)",
          "[4,4,6,6]"
        ],
        "answer": "A",
        "correct": "(4,6, 4, 6)",
        "explanation": "Multiplication repeats the tuple as a sequence; it does not multiply each element. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 5,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "t = (4, 6)\nprint(2 * t)",
          "output": "(4, 6, 4, 6)"
        }
      },
      {
        "id": "PB-T2-068",
        "srNo": 68,
        "question": "What will be the output of the following Python code?\ntuple1=(2,3,4)\ntuple3=tuple1*2\nprint(tuple3)",
        "options": [
          "(4,6,8)",
          "(2,3,4,2,3,4)",
          "(2,2,3,3,4,4)",
          "Error"
        ],
        "answer": "B",
        "correct": "(2,3,4,2,3,4)",
        "explanation": "Repeating (2, 3, 4) twice produces (2, 3, 4, 2, 3, 4).",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "tuple1=(2,3,4)\ntuple3=tuple1*2\nprint(tuple3)",
          "output": "(2, 3, 4, 2, 3, 4)"
        }
      },
      {
        "id": "PB-T2-069",
        "srNo": 69,
        "question": "What will be the output of the following Python code?\nt1 = (1, 2, 4, 3)\nt2 = (1, 2, 3, 4)\nt1 < t2",
        "options": [
          "True",
          "False",
          "Error",
          "None"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "The first differing elements are 4 and 3. Since 4 > 3, t1 < t2 is False. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "t1 = (1, 2, 4, 3)\nt2 = (1, 2, 3, 4)\nprint(t1 < t2)",
          "output": "False"
        }
      },
      {
        "id": "PB-T2-070",
        "srNo": 70,
        "question": "What will be the output of the following Python code?\nmy_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint len(my_tuple)",
        "options": [
          "1",
          "2",
          "5",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "As printed, print len(...) is invalid Python 3 syntax. Even after adding parentheses, tuple.append would raise AttributeError because tuples have no append method.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "my_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint len(my_tuple)",
          "output": "",
          "error": "SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?"
        }
      },
      {
        "id": "PB-T2-071",
        "srNo": 71,
        "question": "What is the data type of (1)?",
        "options": [
          "Tuple",
          "Integer",
          "List",
          "Both tuple and integer"
        ],
        "answer": "B",
        "correct": "Integer",
        "explanation": "(1) is simply the integer 1 in parentheses. (1,) would be a tuple.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "B",
        "marks": 1.0
      },
      {
        "id": "PB-T2-072",
        "srNo": 72,
        "question": "If a=(1,2,3,4), a[1:-1] is",
        "options": [
          "Error, tuple slicing doesn’t exist",
          "[2,3]",
          "(2,3,4)",
          "(2,3)"
        ],
        "answer": "D",
        "correct": "(2,3)",
        "explanation": "The slice starts at index 1 and excludes the final element, producing (2, 3).",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "D",
        "marks": 1.0
      },
      {
        "id": "PB-T2-073",
        "srNo": 73,
        "question": "What will be the output of the following Python code?\na=(1,2,(4,5))\nb=(1,2,(3,4))\na<b",
        "options": [
          "False",
          "True",
          "Error, < operator is not valid for\ntuples",
          "Error, < operator is valid for\ntuples but not if there are sub-\ntuples"
        ],
        "answer": "A",
        "correct": "False",
        "explanation": "Tuple comparisons proceed element by element, including nested tuples. At the first difference, 4 > 3, so a < b is False. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "a = (1, 2, (4, 5))\nb = (1, 2, (3, 4))\nprint(a < b)",
          "output": "False"
        }
      },
      {
        "id": "PB-T2-074",
        "srNo": 74,
        "question": "What will be the output of the following Python code?\na=(\"Check\")*3\na",
        "options": [
          "(‘Check’,’Check’,’Check’)",
          "* Operator not valid for tuples",
          "‘CheckCheckCheck’",
          "Syntax error"
        ],
        "answer": "C",
        "correct": "‘CheckCheckCheck’",
        "explanation": "(\"Check\") is a string, not a tuple. Multiplying by 3 repeats the string three times. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "a = 'Check' * 3\nprint(a)",
          "output": "CheckCheckCheck"
        }
      },
      {
        "id": "PB-T2-075",
        "srNo": 75,
        "question": "Is the following Python code valid?\na=(1,2,3,4)\ndel a",
        "options": [
          "No because tuple is immutable",
          "Yes, first element in the tuple is\ndeleted",
          "Yes, the entire tuple is deleted",
          "No, invalid syntax for del method"
        ],
        "answer": "C",
        "correct": "Yes, the entire tuple is deleted",
        "explanation": "del a removes the name a; it does not mutate tuple elements. The tuple object may remain alive if another name refers to it. Option C is the intended shorthand.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "a=(1,2,3,4)\ndel a",
          "output": ""
        }
      },
      {
        "id": "PB-T2-076",
        "srNo": 76,
        "question": "What will be the output of the following Python code?\na=(0,1,2,3,4)\nb=slice(0,2)\na[b]",
        "options": [
          "Invalid syntax for slicing",
          "[0,2]",
          "(0,1)",
          "(0,2)"
        ],
        "answer": "C",
        "correct": "(0,1)",
        "explanation": "slice(0,2) selects indices 0 and 1, giving the tuple (0, 1). The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "a = (0, 1, 2, 3, 4)\nb = slice(0, 2)\nprint(a[b])",
          "output": "(0, 1)"
        }
      },
      {
        "id": "PB-T2-077",
        "srNo": 77,
        "question": "Choose the correct option for Tuple.",
        "options": [
          "In Python, a tuple can contain\nonly integers as its elements.",
          "In Python, a tuple can contain\nonly strings as its elements.",
          "In Python, a tuple can contain both\nintegers and strings as its elements.",
          "In Python, a tuple can contain\neither string or integer but not\nboth at a time."
        ],
        "answer": "C",
        "correct": "In Python, a tuple can contain both\nintegers and strings as its elements.",
        "explanation": "A tuple can hold values of different types, including both integers and strings.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0
      },
      {
        "id": "PB-T2-078",
        "srNo": 78,
        "question": "What will be the output of below Python code?\ntupl=(\"annie\",\"hena\",\"sid\")\nprint(tupl[-3:0])",
        "options": [
          "(\"annie\")",
          "()",
          "None",
          "Error as slicing is not possible in\ntuple."
        ],
        "answer": "B",
        "correct": "()",
        "explanation": "For a three-element tuple, −3 resolves to 0. The slice [0:0] has no elements, so it returns ().",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "tupl=(\"annie\",\"hena\",\"sid\")\nprint(tupl[-3:0])",
          "output": "()"
        }
      },
      {
        "id": "PB-T2-079",
        "srNo": 79,
        "question": "Which of the following options will not result in an error when performed on tuples in Python\nwhere tupl=(5,2,7,0,3)?",
        "options": [
          "tupl[1]=2",
          "tupl.append(2)",
          "tupl1=tupl+tupl",
          "tupl.sort()"
        ],
        "answer": "C",
        "correct": "tupl1=tupl+tupl",
        "explanation": "Tuple concatenation is valid and creates a new tuple. Item assignment, append and sort are not supported on tuples.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0
      },
      {
        "id": "PB-T2-080",
        "srNo": 80,
        "question": "Which of the following options will result in an error when performed on tuples in Python where\ntupl=(1, 21 , 17,50, 33)?",
        "options": [
          "tupl.append(2)",
          "tupl.pop(1)",
          "tupl.remove(21)",
          "All of the mentioned"
        ],
        "answer": "D",
        "correct": "All of the mentioned",
        "explanation": "Tuples have no append, pop or remove methods. Each of the three calls raises AttributeError.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "D",
        "marks": 1.0
      },
      {
        "id": "PB-T2-081",
        "srNo": 81,
        "question": "What will be the output of below Python code?\ntupl=()\ntupl1=tupl*2\nprint(len(tupl1))",
        "options": [
          "0",
          "2",
          "1",
          "Error as tuple object has no\nattribute to len"
        ],
        "answer": "A",
        "correct": "0",
        "explanation": "Repeating an empty tuple still gives an empty tuple, whose length is 0.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "tupl=()\ntupl1=tupl*2\nprint(len(tupl1))",
          "output": "0"
        }
      },
      {
        "id": "PB-T2-082",
        "srNo": 82,
        "question": "What will be the output of below Python code?\ntupl=([2,3],\"abc\",0,9)\ntupl[0][1]=1\nprint(tupl)",
        "options": [
          "([2,3],\"abc\",0,9)",
          "([1,3],\"abc\",0,9)",
          "([2,1],\"abc\",0,9)",
          "Error"
        ],
        "answer": "C",
        "correct": "([2,1],\"abc\",0,9)",
        "explanation": "The tuple keeps the same list object, but the list itself is mutable. Updating its index 1 changes [2,3] to [2,1].",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "tupl=([2,3],\"abc\",0,9)\ntupl[0][1]=1\nprint(tupl)",
          "output": "([2, 1], 'abc', 0, 9)"
        }
      },
      {
        "id": "PB-T2-083",
        "srNo": 83,
        "question": "Which of the following two Python codes will give same output?\n(i) print(tupl[:-1])\n(ii) print(tupl[0:5])\n(iii) print(tupl[0:4])\n(iv) print(tupl[-4:])\nIf tupl=(5,3,1,9,0)",
        "options": [
          "i, ii",
          "ii, iv",
          "i, iv",
          "i, iii"
        ],
        "answer": "D",
        "correct": "i, iii",
        "explanation": "For five elements, [:-1] and [0:4] both select the first four. [0:5] selects all five, while [-4:] selects the last four.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "D",
        "marks": 1.0
      },
      {
        "id": "PB-T2-084",
        "srNo": 84,
        "question": "Which of the following would complete statement to set val to 20 by slicing aTuple.\naTuple = (\"Orange\", (10, 20, 30), (5, 15, 25))\nval =__________",
        "options": [
          "aTuple[1][1]",
          "aTuple[1:2](1)",
          "aTuple[2][1]",
          "aTuple[1:2][1]"
        ],
        "answer": "A",
        "correct": "aTuple[1][1]",
        "explanation": "aTuple[1] selects (10,20,30), then [1] selects 20. This is nested indexing rather than slicing.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "A",
        "marks": 1.0
      },
      {
        "id": "PB-T2-085",
        "srNo": 85,
        "question": "What is the output of the following.\naTuple = (10, 20, 30, 40, 50, 60, 70, 80)\nprint(aTuple[2:5], aTuple[:4], aTuple[3:])",
        "options": [
          "(30, 40, 50) (10, 20, 30, 40) (40,\n50, 60,\n70)",
          "(30, 40, 50) (10, 20, 30) (40, 50,\n60)",
          "(30, 40, 50) (10, 20, 30, 40) (40, 50,\n60, 70,\n80)",
          "None of the these"
        ],
        "answer": "C",
        "correct": "(30, 40, 50) (10, 20, 30, 40) (40, 50,\n60, 70,\n80)",
        "explanation": "[2:5] selects indices 2–4; [:4] selects 0–3; [3:] selects index 3 to the end, including 80.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "aTuple = (10, 20, 30, 40, 50, 60, 70, 80)\nprint(aTuple[2:5], aTuple[:4], aTuple[3:])",
          "output": "(30, 40, 50) (10, 20, 30, 40) (40, 50, 60, 70, 80)"
        }
      },
      {
        "id": "PB-T2-086",
        "srNo": 86,
        "question": "What will be the output of the following Python code?\nt = (1, 2, 4, 3, 8, 9)\nfor i in range(0, len(t), 2):\n   print(t[i],end=\" \")",
        "options": [
          "1 4 9",
          "2 3 9",
          "1 2 4",
          "1 4 8"
        ],
        "answer": "D",
        "correct": "1 4 8",
        "explanation": "range(0,6,2) visits indices 0, 2 and 4, whose values are 1, 4 and 8.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 6,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "t = (1, 2, 4, 3, 8, 9)\nfor i in range(0, len(t), 2):\n   print(t[i],end=\" \")",
          "output": "1 4 8"
        }
      },
      {
        "id": "PB-T2-087",
        "srNo": 87,
        "question": "Find the output of the given Python program\nt1 = (1,2)\nt2 = (2,1)\nx = (t1 == t2)\nprint(x)",
        "options": [
          "False",
          "True",
          "Error",
          "None"
        ],
        "answer": "A",
        "correct": "False",
        "explanation": "Tuple equality considers order. The first elements differ, so (1,2) and (2,1) are not equal.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "t1 = (1,2)\nt2 = (2,1)\nx = (t1 == t2)\nprint(x)",
          "output": "False"
        }
      },
      {
        "id": "PB-T2-088",
        "srNo": 88,
        "question": "What will be the output of the following python code?\nstr1=\"Hello World! Hello Hello\"\nstr1.count(\"Hello\",12,25)",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "B",
        "correct": "2",
        "explanation": "Between indices 12 and 25, Hello starts at indices 13 and 19. Both occurrences are counted. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "str1 = 'Hello World! Hello Hello'\nprint(str1.count('Hello', 12, 25))",
          "output": "2"
        }
      },
      {
        "id": "PB-T2-089",
        "srNo": 89,
        "question": "What is the output of the following code?\na=\"Hello Welcome to the Python\"\nprint(a.find(\"z\"))\nprint(a.index(\"z\"))",
        "options": [
          "Value Error\n-1",
          "-1\nValue Error",
          "1\nSyntax Error",
          "Syntax Error 1"
        ],
        "answer": "B",
        "correct": "-1\nValue Error",
        "explanation": "find returns −1 when z is absent; index raises ValueError for the same missing substring. The first result is printed before the error.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "a=\"Hello Welcome to the Python\"\nprint(a.find(\"z\"))\nprint(a.index(\"z\"))",
          "output": "-1",
          "error": "ValueError: substring not found"
        }
      },
      {
        "id": "PB-T2-090",
        "srNo": 90,
        "question": "S = \"1234567890\"\nS = S[-3] + S[2:4] + S[-2:-5] + S[ : -4:-2] + S[1: :2]\nprint(S[ : : 3] * 2)",
        "options": [
          "80408040",
          "86068606",
          "14701470",
          "None"
        ],
        "answer": "A",
        "correct": "80408040",
        "explanation": "The concatenation builds 834082460. Taking every third character gives 8040; repeating that string twice gives 80408040.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "S = \"1234567890\"\nS = S[-3] + S[2:4] + S[-2:-5] + S[ : -4:-2] + S[1: :2]\nprint(S[ : : 3] * 2)",
          "output": "80408040"
        }
      },
      {
        "id": "PB-T2-091",
        "srNo": 91,
        "question": "What will be the output of the following code?\nt1=(1,2,3,4,5,6,7)\nprint(t1[t1[1]+t1[-4]])",
        "options": [
          "1",
          "2",
          "7",
          "4"
        ],
        "answer": "C",
        "correct": "7",
        "explanation": "t1[1] is 2 and t1[-4] is 4. Their sum is index 6, whose value is 7.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "t1=(1,2,3,4,5,6,7)\nprint(t1[t1[1]+t1[-4]])",
          "output": "7"
        }
      },
      {
        "id": "PB-T2-092",
        "srNo": 92,
        "question": "What will be the output of the following piece of code?\ndef check(s):\n    if len(s) <= 1:\n        return True\n    else:\n        return s[0] == s[-1] and check(s[1:-1])\nprint(check('saippuakivkauppias'))",
        "options": [
          "True",
          "False",
          "s",
          "k"
        ],
        "answer": "B",
        "correct": "False",
        "explanation": "The function recursively compares matching outer characters. The supplied spelling has a mismatched inner pair, so it returns False.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def check(s):\n    if len(s) <= 1:\n        return True\n    else:\n        return s[0] == s[-1] and check(s[1:-1])\nprint(check('saippuakivkauppias'))",
          "output": "False"
        }
      },
      {
        "id": "PB-T2-093",
        "srNo": 93,
        "question": "What will be the output of below Python code?\nt=()\nt1=t*10\nprint(len(t1))",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": "A",
        "correct": "0",
        "explanation": "Multiplying an empty tuple by 10 keeps it empty; its length is 0.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "t=()\nt1=t*10\nprint(len(t1))",
          "output": "0"
        }
      },
      {
        "id": "PB-T2-094",
        "srNo": 94,
        "question": "What will be the output of the following Python code?\ndef tup(T):\n    print(T[T.index(5)], end = \" \")\n    print(T[T[T[6]-3]-6])\nT = (1, 2, 3, 4, 5, 6, 7, 8)\ntup(T)",
        "options": [
          "5 Index Error",
          "4 0",
          "5 8",
          "Syntax Error"
        ],
        "answer": "C",
        "correct": "5 8",
        "explanation": "T.index(5) is 4, so the first value is 5. Next T[6]=7, T[7−3]=5, and T[5−6]=T[-1]=8.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "def tup(T):\n    print(T[T.index(5)], end = \" \")\n    print(T[T[T[6]-3]-6])\nT = (1, 2, 3, 4, 5, 6, 7, 8)\ntup(T)",
          "output": "5 8"
        }
      },
      {
        "id": "PB-T2-095",
        "srNo": 95,
        "question": "What will be the output of the following Python code?\ns=\"Th*is is$ nothi&&ng b#ut excerc(is)e\"\nchange=str.maketrans(\"(\",\",\",\"@#$%^&*_-)\")\ns.translate(change)\nprint(s)",
        "options": [
          "Th*is is$ nothi&&ng b#ut\nexcerc(is)e",
          "This is nothing but excerc,ise",
          "This is nothing but exercise",
          "NameError: name ‘str’ not\ndefined"
        ],
        "answer": "A",
        "correct": "Th*is is$ nothi&&ng b#ut\nexcerc(is)e",
        "explanation": "Strings are immutable. translate returns a new string, but its result is not assigned, so printing s shows the unchanged original.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "s=\"Th*is is$ nothi&&ng b#ut excerc(is)e\"\nchange=str.maketrans(\"(\",\",\",\"@#$%^&*_-)\")\ns.translate(change)\nprint(s)",
          "output": "Th*is is$ nothi&&ng b#ut excerc(is)e"
        }
      },
      {
        "id": "PB-T2-096",
        "srNo": 96,
        "question": "Which of the following will give \"Simon\" as output?\nstr1=\"John,Simon,Aryan\"",
        "options": [
          "print(str1[-11:-6])",
          "print(str1[-7:-12])",
          "print(str1[-11:-7])",
          "print(str1[-11:-5])"
        ],
        "answer": "A",
        "correct": "print(str1[-11:-6])",
        "explanation": "The string has 16 characters. Indices −11 and −6 correspond to 5 and 10, selecting Simon without commas.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0
      },
      {
        "id": "PB-T2-097",
        "srNo": 97,
        "question": "What will be the output of the following program?\ns = \"ball\"\nr = \"\"\nfor i in s:\n    r = i.upper() + r\nprint(r)",
        "options": [
          "LLB",
          "BALL",
          "Error",
          "LLAB"
        ],
        "answer": "D",
        "correct": "LLAB",
        "explanation": "Each uppercase character is prepended to r, reversing the order: B, AB, LAB, LLAB.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "D",
        "marks": 1.0,
        "trace": {
          "code": "s = \"ball\"\nr = \"\"\nfor i in s:\n    r = i.upper() + r\nprint(r)",
          "output": "LLAB"
        }
      },
      {
        "id": "PB-T2-098",
        "srNo": 98,
        "question": "What will be the output of the following program?\ns = 'I love my INDIA'\nprint(s[-1]+s[3:4]+s[7:9]+s[-3:-1]+s[-1:-3:-1]+s[5:9]+s[10:] )",
        "options": [
          "AomyDIAIe myINDIA",
          "AomyDIIe myINDIA",
          "AomyDIAIe myINDI",
          "AomyDAIe myINDIA"
        ],
        "answer": "A",
        "correct": "AomyDIAIe myINDIA",
        "explanation": "The slices give A, o, my, DI, AI, e my and INDIA. Joining them yields AomyDIAIe myINDIA.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 1.0,
        "trace": {
          "code": "s = 'I love my INDIA'\nprint(s[-1]+s[3:4]+s[7:9]+s[-3:-1]+s[-1:-3:-1]+s[5:9]+s[10:] )",
          "output": "AomyDIAIe myINDIA"
        }
      },
      {
        "id": "PB-T2-099",
        "srNo": 99,
        "question": "When using find(), If str is not present in string then what is returned?",
        "options": [
          "0",
          "1",
          "-1",
          "NameError"
        ],
        "answer": "C",
        "correct": "-1",
        "explanation": "find returns −1 when the substring is absent. Unlike index, it does not raise ValueError for that case.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "C",
        "marks": 1.0
      },
      {
        "id": "PB-T2-100",
        "srNo": 100,
        "question": "What is the output for following code:\ns=\"blog\"\nfor i in range(-1,-len(s),-1):\n   print(s[i],end=\"$\")",
        "options": [
          "g$o$l$b",
          "g$o$l$b$",
          "g$o$l$",
          "glob"
        ],
        "answer": "C",
        "correct": "g$o$l$",
        "explanation": "range(-1,-4,-1) gives −1, −2 and −3, excluding −4. The characters g, o and l each print with a trailing dollar sign.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "s=\"blog\"\nfor i in range(-1,-len(s),-1):\n   print(s[i],end=\"$\")",
          "output": "g$o$l$"
        }
      },
      {
        "id": "PB-T2-101",
        "srNo": 101,
        "question": "What is the output for following code:\nprint(\"A#B#C#D#E\".split(\"#\",2))",
        "options": [
          "['A', 'B', 'C', 'D', 'E']",
          "['A', 'B', 'C#D#E']",
          "['A#', 'B#', 'C#', 'D#', 'E']",
          "Error"
        ],
        "answer": "B",
        "correct": "['A', 'B', 'C#D#E']",
        "explanation": "maxsplit=2 allows only two splits. The remaining C#D#E stays together as the final list item.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "print(\"A#B#C#D#E\".split(\"#\",2))",
          "output": "['A', 'B', 'C#D#E']"
        }
      },
      {
        "id": "PB-T2-102",
        "srNo": 102,
        "question": "What is the output for following code:\nfor i in range (len(\"python\"),12,2):\n   print(\"python\"[i-6],end=\"\")",
        "options": [
          "python",
          "pto",
          "yhn",
          "pyth"
        ],
        "answer": "B",
        "correct": "pto",
        "explanation": "The loop uses i=6,8,10. Indices i−6 are 0,2,4, producing p, t and o.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "for i in range (len(\"python\"),12,2):\n   print(\"python\"[i-6],end=\"\")",
          "output": "pto"
        }
      },
      {
        "id": "PB-T2-103",
        "srNo": 103,
        "question": "What will be the output of the following Python code?\nx = 'abcd'\nfor i in x:\n    i.isupper()\nprint (x)",
        "options": [
          "abcd",
          "0 1 2 3",
          "ABCD",
          "Error"
        ],
        "answer": "A",
        "correct": "abcd",
        "explanation": "isupper only tests each character and its return value is ignored. It does not change x, which remains abcd.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 7,
        "sourceAnswer": "A",
        "marks": 0.5,
        "trace": {
          "code": "x = 'abcd'\nfor i in x:\n    i.isupper()\nprint (x)",
          "output": "abcd"
        }
      },
      {
        "id": "PB-T2-104",
        "srNo": 104,
        "question": "What will be the output of the following Python code?\nt=(1,2,4,3,6,8,4)\nt[1:-1:-1]",
        "options": [
          "(2,4,3,6,8)",
          "(2,1)",
          "()",
          "(4,8)"
        ],
        "answer": "C",
        "correct": "()",
        "explanation": "With a negative step, the slice must move toward a smaller stop. Here −1 resolves to index 6, beyond start 1, so the slice is empty. The trace uses print to display the final expression value.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "C",
        "marks": 0.5,
        "trace": {
          "code": "t = (1, 2, 4, 3, 6, 8, 4)\nprint(t[1:-1:-1])",
          "output": "()"
        }
      },
      {
        "id": "PB-T2-105",
        "srNo": 105,
        "question": "What will be the output of the following Python code?\nmy_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint (len(my_tuple))",
        "options": [
          "4",
          "7",
          "5",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "Tuples have no append method. AttributeError occurs before the length can be printed.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "D",
        "marks": 0.5,
        "trace": {
          "code": "my_tuple = (1, 2, 3, 4)\nmy_tuple.append( (1,2,3) )\nprint (len(my_tuple))",
          "output": "",
          "error": "AttributeError: 'tuple' object has no attribute 'append'"
        }
      },
      {
        "id": "PB-T2-106",
        "srNo": 106,
        "question": "What will be the output of the following Python code?\ndef enc(st):\n    encoded=\"\"\n    c,Id=1,st[0]\n    for i in range (1,len(st)):\n        if ld==st[i]:\n            c=c+1\n        else:\n            encoded=encoded+str(c)+ld\n            c,Id=0,st[i]\n            c=c+1\n    encoded=encoded+str(c)+ld\n    return encoded\nprint(enc(\"AAABBACCAA\"))",
        "options": [
          "A3B2A1C2A2",
          "3A2B1A2C2A",
          "10",
          "Error"
        ],
        "answer": "D",
        "correct": "Error",
        "explanation": "Source correction: the printed code assigns Id (capital I) but reads ld (lowercase l). These are different names, so the code raises NameError and option D is correct as printed. The PDF key B is the intended run-length encoding result, 3A2B1A2C2A, if both assignments are changed to ld.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "def enc(st):\n    encoded=\"\"\n    c,Id=1,st[0]\n    for i in range (1,len(st)):\n        if ld==st[i]:\n            c=c+1\n        else:\n            encoded=encoded+str(c)+ld\n            c,Id=0,st[i]\n            c=c+1\n    encoded=encoded+str(c)+ld\n    return encoded\nprint(enc(\"AAABBACCAA\"))",
          "output": "",
          "error": "NameError: name 'ld' is not defined."
        }
      },
      {
        "id": "PB-T2-107",
        "srNo": 107,
        "question": "What will be the output of the following Python code?\ns=\"aa\"\ns.strip(\"a\")\nprint(s)",
        "options": [
          "aa",
          "a",
          "error",
          "True"
        ],
        "answer": "A",
        "correct": "aa",
        "explanation": "strip returns a new string. Since the return value is discarded, s remains aa.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "A",
        "trace": {
          "code": "s=\"aa\"\ns.strip(\"a\")\nprint(s)",
          "output": "aa"
        }
      },
      {
        "id": "PB-T2-108",
        "srNo": 108,
        "question": "What will be the output of the following Python code?\ns=\"1234ABCvhghbbv\"\nv=s.maketrans(\"abc\",\"vvv\")\nprint(s.translate(v))",
        "options": [
          "vvv",
          "1234vhghvvv",
          "1234vhg",
          "1234ABCvhghvvv"
        ],
        "answer": "D",
        "correct": "1234ABCvhghvvv",
        "explanation": "The mapping changes lowercase a, b and c to v and is case-sensitive. Uppercase ABC remains; the ending bbv becomes vvv.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "D",
        "trace": {
          "code": "s=\"1234ABCvhghbbv\"\nv=s.maketrans(\"abc\",\"vvv\")\nprint(s.translate(v))",
          "output": "1234ABCvhghvvv"
        }
      },
      {
        "id": "PB-T2-109",
        "srNo": 109,
        "question": "What is returned by the following function?\nshift=1\nn=12345\ns=str(n)\nx=s[shift:]+s[:shift]\nprint(x)",
        "options": [
          "12345",
          "23451",
          "34512",
          "54321"
        ],
        "answer": "B",
        "correct": "23451",
        "explanation": "s[1:] gives 2345 and s[:1] gives 1, so their concatenation is 23451.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "B",
        "marks": 1.0,
        "trace": {
          "code": "shift=1\nn=12345\ns=str(n)\nx=s[shift:]+s[:shift]\nprint(x)",
          "output": "23451"
        }
      },
      {
        "id": "PB-T2-110",
        "srNo": 110,
        "question": "What will following Python code return?\nstr1=\"LJ’University\"\nprint(len(str1))",
        "options": [
          "13",
          "12",
          "15",
          "2"
        ],
        "answer": "A",
        "correct": "13",
        "explanation": "LJ contributes 2 characters, the apostrophe contributes 1, and University contributes 10: total 13.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "A",
        "marks": 0.5,
        "trace": {
          "code": "str1=\"LJ’University\"\nprint(len(str1))",
          "output": "13"
        }
      },
      {
        "id": "PB-T2-111",
        "srNo": 111,
        "question": "What will be the output of the following program on execution?\nA=(5,3,2)\nB=(5,3,2)\nprint(len(A+B*3))",
        "options": [
          "6",
          "9",
          "12",
          "3"
        ],
        "answer": "C",
        "correct": "12",
        "explanation": "B*3 has 9 elements. Concatenating the 3 elements of A makes 12 elements in total.",
        "source": "Updated_PB_Python_T2.pdf",
        "sourceSet": "T2",
        "sourcePage": 8,
        "sourceAnswer": "C",
        "marks": 1.0,
        "trace": {
          "code": "A=(5,3,2)\nB=(5,3,2)\nprint(len(A+B*3))",
          "output": "12"
        }
      }
    ],
    "coding": []
  }
};
function getPracticeBookUnit(n) { return PRACTICE_BOOK["unit" + n] || null; }
function getAllPracticeBookMCQs() { return Object.values(PRACTICE_BOOK).flatMap(unit => unit.mcqs); }
function getAllPracticeBookCoding() { return Object.values(PRACTICE_BOOK).flatMap(unit => unit.coding); }
