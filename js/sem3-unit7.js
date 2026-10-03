// Full SEM III unit 7; question numbers match the 2026 source PDF.
var SEM3_UNIT_7 = {
  "unit": 7,
  "title": "Unit 7 — Modules and directories",
  "mcqs": [
    {
      "id": "S3-490",
      "srNo": 490,
      "question": "NToW u 1se3 :a4 m7 1o6d:u3l3e i(n2 ha n4o6tmhe)r module, you must import it using an ________ statement",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "import",
        "include",
        "A AND B",
        "NONE OF THESE"
      ],
      "answer": "A",
      "correct": "import",
      "explanation": "The import statement makes a module’s definitions available to the importing code."
    },
    {
      "id": "S3-491",
      "srNo": 491,
      "question": "Which statement is correct to import all modules from the package",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "from package import all",
        "from package import *",
        "from package include all",
        "from package include *"
      ],
      "answer": "B",
      "correct": "from package import *",
      "explanation": "from package import * imports names exported by the package; which submodules are exposed depends on __all__ and the package initializer."
    },
    {
      "id": "S3-492",
      "srNo": 492,
      "question": "A Python module is a file with the _____ file extension that contains valid Python code.",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "5 .pym",
        ".pymodule",
        ".module",
        ".py"
      ],
      "answer": "D",
      "correct": ".py",
      "explanation": "Python source modules normally use the .py extension."
    },
    {
      "id": "S3-493",
      "srNo": 493,
      "question": "Which of the following returns a string that represents the present working directory?",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "os.getcwd()",
        "os.cwd()",
        "os.getpwd()",
        "os.pwd()"
      ],
      "answer": "A",
      "correct": "os.getcwd()",
      "explanation": "os.getcwd() returns the current working directory as a string."
    },
    {
      "id": "S3-494",
      "srNo": 494,
      "question": "Which of the following can be used to create a directory?",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "os.mkdir()",
        "os.creat_dir()",
        "os.create_dir()",
        "os.make_dir()"
      ],
      "answer": "A",
      "correct": "os.mkdir()",
      "explanation": "os.mkdir(path) creates one directory; os.makedirs can create missing parents."
    },
    {
      "id": "S3-495",
      "srNo": 495,
      "question": "Which of the following can be used to remove a directory?",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "os.rmdir()",
        "os.rem_dir()",
        "os.create_dir()",
        "os.make_dir()"
      ],
      "answer": "A",
      "correct": "os.rmdir()",
      "explanation": "os.rmdir removes an empty directory; it does not delete a populated directory tree."
    },
    {
      "id": "S3-496",
      "srNo": 496,
      "question": "__________is used to get the list of all files and directories in the specified directory.",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "os.rmdir()",
        "os.chdir()",
        "os.listdir()",
        "os.make_dir()"
      ],
      "answer": "C",
      "correct": "os.listdir()",
      "explanation": "os.listdir(path) lists entry names in that directory without recursively visiting subdirectories."
    },
    {
      "id": "S3-497",
      "srNo": 497,
      "question": "_______method in Python used to change the current working directory to specified path",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "os.rmdir()",
        "os.chdir()",
        "os.listdir()",
        "os.make_dir()"
      ],
      "answer": "B",
      "correct": "os.chdir()",
      "explanation": "os.chdir(path) changes the process working directory."
    },
    {
      "id": "S3-498",
      "srNo": 498,
      "question": "How  do you delete a file?",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "del(fp)",
        "fp.delete()",
        "os.remove(‘file’)",
        "os.delete(‘file’)"
      ],
      "answer": "C",
      "correct": "os.remove(‘file’)",
      "explanation": "os.remove(path) deletes the specified file. It differs from os.rmdir for empty directories."
    },
    {
      "id": "S3-499",
      "srNo": 499,
      "question": "if mymod.py file has this code\nA=100\ndef add(a,b):\n   print(\"The Sum:\",a+b)\ndef product(a,b):\n   print(\"The Product:\",a*b)\nand if we import that module as follow then what will be output?\nfrom mymod  import *\nprint(X)\nadd(10,20)\nproduct(10,20)",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "888\nThe Sum: 30",
        "888\nThe Sum: 30\nThe Product: 200",
        "error",
        "none"
      ],
      "answer": "C",
      "correct": "error",
      "explanation": "Selective from-import brings only named objects into scope. Using an unimported name raises NameError."
    },
    {
      "id": "S3-500",
      "srNo": 500,
      "question": "#mod1.py\ndef change(a):\n  b=[x*2 for x in a]\n  print(b)\n#mod2.py\ndef change(a):\n  b=[x*x for x in a]\n  print(b)\nfrom mod1 import change\nfrom mod2 import change\n#main\ns=[1,2,3]\nchange(s)",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "5 [2,4,6]",
        "[2,4,6] [1,4,9]",
        "[1, 4, 9]",
        "[1, 2, 3]"
      ],
      "answer": "C",
      "correct": "[1, 4, 9]",
      "explanation": "The second import replaces the name change with mod2.change, which squares each number: [1,4,9]."
    },
    {
      "id": "S3-501",
      "srNo": 501,
      "question": "if calc.py file has this code\ndef sum(a,b):\n  print(a+b)\ndef sub(a,b):\n  print(a-b)\ndef mul(a,b):\n  print(a*b)\ndef div(a,b):\n  print(a/b)\ndef power(a,b):\n  print(a**b)\nand if we import that module as follow then what will be output?\nimport calc\ncalc.power(5,3)\ncalc.sum(5,7)",
      "marks": 1.0,
      "sourcePage": 39,
      "options": [
        "15\n12",
        "243\n12",
        "125\n12",
        "Error"
      ],
      "answer": "C",
      "correct": "125\n12",
      "explanation": "The imported power function computes 5**3=125 and the sum call prints 12."
    }
  ],
  "coding": [
    {
      "id": "S3-C502",
      "srNo": 502,
      "question": "Write a python program to make a module which contain all the basic functions related to string and import that module in\nanother file and use that fuctions with string given by user.",
      "marks": 5.0,
      "sourcePage": 40,
      "solution": "# File: string_tools.py\ndef uppercase(s): return s.upper()\ndef lowercase(s): return s.lower()\ndef reverse(s): return s[::-1]\ndef length(s): return len(s)\n\n# File: main.py (save separately in the same folder)\nimport string_tools\ns = input('String: ')\nprint(string_tools.uppercase(s))\nprint(string_tools.lowercase(s))\nprint(string_tools.reverse(s))\nprint(string_tools.length(s))",
      "explanation": "Save the two labelled sections as separate files. Python imports the module by filename without .py.",
      "topic": "Modules and directories",
      "starterCode": "",
      "exampleInputs": [
        "Hello World"
      ],
      "exampleOutput": "HELLO WORLD\nhello world\ndlroW olleH\n11"
    },
    {
      "id": "S3-C503",
      "srNo": 503,
      "question": "Write a python program to create a directory and subdirectory. It should print the current working directory path\nand list of names of files present in the given directory.",
      "marks": 2.0,
      "sourcePage": 40,
      "solution": "from pathlib import Path\nroot = Path('demo_directory')\n(root / 'subdirectory').mkdir(parents=True, exist_ok=True)\nprint('Current directory:', Path.cwd())\nprint('Contents:', [p.name for p in root.iterdir()])",
      "explanation": "Create both directory levels and list entries. exist_ok avoids an error if they already exist.",
      "topic": "Modules and directories",
      "starterCode": "",
      "exampleOutput": "Current directory: /tmp/python-question-zjwtvgy4\nContents: ['subdirectory']"
    },
    {
      "id": "S3-C504",
      "srNo": 504,
      "question": "Write a python program to make a module named cal.py which contain all the basic functions related to calculator like\naddition, subtraction, multiplication, and division import that module in another file and use that functions with number\ninputs given by user.",
      "marks": 3.0,
      "sourcePage": 40,
      "solution": "# File: cal.py\ndef addition(a,b): return a+b\ndef subtraction(a,b): return a-b\ndef multiplication(a,b): return a*b\ndef division(a,b):\n    if b == 0: raise ValueError('Division by zero')\n    return a/b\n\n# File: main.py (save separately)\nimport cal\na, b = float(input('a: ')), float(input('b: '))\nprint(cal.addition(a,b), cal.subtraction(a,b), cal.multiplication(a,b))\ntry: print(cal.division(a,b))\nexcept ValueError as error: print(error)",
      "explanation": "Place cal.py next to main.py and call the exported functions through the module name.",
      "topic": "Modules and directories",
      "starterCode": "",
      "exampleInputs": [
        "8",
        "2"
      ],
      "exampleOutput": "10.0 6.0 16.0\n4.0"
    },
    {
      "id": "S3-C505",
      "srNo": 505,
      "question": "Write a program to create a module ‘first_word.py’, which returns the first word of any string passed. Show the working of\nthe module, by calling the module with any suitable example.\nInput: ‘This is Python Programming’\nOutput: ‘This’",
      "marks": 2.0,
      "sourcePage": 40,
      "solution": "# File: first_word.py\ndef first_word(s):\n    words = s.split()\n    return words[0] if words else ''\n\n# File: main.py (save separately)\nfrom first_word import first_word\nprint(first_word('This is Python Programming'))",
      "explanation": "The imported function returns This; an empty or whitespace-only string returns an empty string.",
      "topic": "Modules and directories",
      "starterCode": "",
      "exampleOutput": "This"
    }
  ]
};
