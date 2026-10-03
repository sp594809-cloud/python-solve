// Full SEM III unit 2; question numbers match the 2026 source PDF.
var SEM3_UNIT_2 = {
  "unit": 2,
  "title": "Unit 2 — Conditions and loops",
  "mcqs": [
    {
      "id": "S3-060",
      "srNo": 60,
      "question": "What does the following code print?\nif 4 + 5 == 10:\n  print(\"TRUE\")\nelse:\n  print(\"FALSE\")\nprint(\"TRUE\")",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "TRUE",
        "TRUE\nFALSE",
        "FALSE\nTRUE",
        "TRUE\nFALSE\nTRUE"
      ],
      "answer": "C",
      "correct": "FALSE\nTRUE",
      "trace": {
        "code": "if 4 + 5 == 10:\n  print(\"TRUE\")\nelse:\n  print(\"FALSE\")\nprint(\"TRUE\")",
        "output": "FALSE\nTRUE\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-061",
      "srNo": 61,
      "question": "What does the following code print?\nx = -10\nif x < 0:\n  print(\"The negative number \", x, \" is not valid here.\")\nprint(\"This is always printed\")",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "This is always printed",
        "The negative number -10 is not valid here.\nThis is always printed",
        "The negative number -10 is not valid here",
        "It will cause an error because every if statement must have an\nelse statement."
      ],
      "answer": "B",
      "correct": "The negative number -10 is not valid here.\nThis is always printed",
      "trace": {
        "code": "x = -10\nif x < 0:\n  print(\"The negative number \", x, \" is not valid here.\")\nprint(\"This is always printed\")",
        "output": "The negative number  -10  is not valid here.\nThis is always printed\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-062",
      "srNo": 62,
      "question": "Which of the following is true about the code below?\nx = 3\nif (x > 2):\n  x = x * 2;\nif (x > 4):\n  x = 0;\nprint(x)",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "x will always equal 0 after this code executes for\nany value of x",
        "if x is greater than 2, the value in x will be doubled after\nthis code executes",
        "if x is greater than 2, x will equal 0 after this code executes",
        "None of mentioned"
      ],
      "answer": "C",
      "correct": "if x is greater than 2, x will equal 0 after this code executes",
      "trace": {
        "code": "x = 3\nif (x > 2):\n  x = x * 2;\nif (x > 4):\n  x = 0;\nprint(x)",
        "output": "0\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-063",
      "srNo": 63,
      "question": "Which one of the following is a valid Python if statement?",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "if a>=2 :",
        "if (a >= 2)",
        "if (a => 22)",
        "if a >= 22"
      ],
      "answer": "A",
      "correct": "if a>=2 :",
      "explanation": "An if statement needs a condition followed by a colon; its body must be indented."
    },
    {
      "id": "S3-064",
      "srNo": 64,
      "question": "What keyword would you use to add an alternative condition to an if statement?",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "else if",
        "elseif",
        "elif",
        "None of the above"
      ],
      "answer": "C",
      "correct": "elif",
      "explanation": "elif introduces another condition after an if. else has no condition."
    },
    {
      "id": "S3-065",
      "srNo": 65,
      "question": "Which of the following will evaluate to true?\nI. True and False\nII. False or True\nIII. False and (True or False)",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "I",
        "II",
        "I and II",
        "II and III"
      ],
      "answer": "B",
      "correct": "II",
      "explanation": "True and False is False; False or True is True; False and (...) is False. Only II is true."
    },
    {
      "id": "S3-066",
      "srNo": 66,
      "question": "Given two variables, num1 and num2, which of the following would mean that both num1 and num2 are positive integers?",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "(num1 == num2)",
        "(num1 == num2) or (num1 > 0)",
        "(num1 == num2) and (num1 < 0)",
        "(num1 == num2) and (num1 > 0)"
      ],
      "answer": "D",
      "correct": "(num1 == num2) and (num1 > 0)",
      "explanation": "Option D ensures equal positive values, so both are positive if inputs are integers. It is sufficient but unnecessarily requires equality; the general condition is num1 > 0 and num2 > 0."
    },
    {
      "id": "S3-067",
      "srNo": 67,
      "question": "What is the output from the following code?\na = 3\nb = (a != 3)\nprint(b)",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "True",
        "False",
        "0",
        "3"
      ],
      "answer": "B",
      "correct": "False",
      "trace": {
        "code": "a = 3\nb = (a != 3)\nprint(b)",
        "output": "False\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-068",
      "srNo": 68,
      "question": "Which of the following evaluates to True when a is equal to b or when a is equal to 5?",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "a == b == 5",
        "a = b or a = 5",
        "a == b or a == 5",
        "a = b and a = 5"
      ],
      "answer": "C",
      "correct": "a == b or a == 5",
      "explanation": "Use or to accept either equality: a == b or a == 5."
    },
    {
      "id": "S3-069",
      "srNo": 69,
      "question": "Which statement will check if a is equal to b?",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "if a = b:",
        "if a == b:",
        "if a === c:",
        "if a == b"
      ],
      "answer": "B",
      "correct": "if a == b:",
      "explanation": "== tests equality; = is assignment. The if header ends with a colon."
    },
    {
      "id": "S3-070",
      "srNo": 70,
      "question": "Given the nested if-else structure below, what will be the value of x after code execution completes\nx = 0\na = 0\nb = -5\nif a > 0:\n  if b < 0:\n    x = x + 5\n  elif a > 5:\n    x = x + 4\n  else:\n    x = x + 3\nelse:\n  x = x + 4\nprint(x)",
      "marks": 1.0,
      "sourcePage": 3,
      "options": [
        "2",
        "0",
        "3",
        "4"
      ],
      "answer": "D",
      "correct": "4",
      "trace": {
        "code": "x = 0\na = 0\nb = -5\nif a > 0:\n  if b < 0:\n    x = x + 5\n  elif a > 5:\n    x = x + 4\n  else:\n    x = x + 3\nelse:\n  x = x + 4\nprint(x)",
        "output": "4\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-071",
      "srNo": 71,
      "question": "Given the nested if-else below, what will be the value x when the code executed successfully\nx = 2\na = 5\nb = 5\nif a > 0:\n  if b < 0:\n    x = x + 5\n  elif a > 5:\n    x = x + 4\n  else:\n    x = x + 3\nelse:\n  x = x + 2\nprint(x)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "0",
        "5",
        "2",
        "3"
      ],
      "answer": "B",
      "correct": "5",
      "trace": {
        "code": "x = 2\na = 5\nb = 5\nif a > 0:\n  if b < 0:\n    x = x + 5\n  elif a > 5:\n    x = x + 4\n  else:\n    x = x + 3\nelse:\n  x = x + 2\nprint(x)",
        "output": "5\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-072",
      "srNo": 72,
      "question": "What is the output of the following if statement\na, b = 12, 5\nif a + b:\n  print('True')\nelse:\n print('False')",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "False",
        "True",
        "Can't predict",
        "None of these"
      ],
      "answer": "B",
      "correct": "True",
      "trace": {
        "code": "a, b = 12, 5\nif a + b:\n  print('True')\nelse:\n print('False')",
        "output": "True\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-073",
      "srNo": 73,
      "question": "Which of the following is not used as loop in Python?",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "for loop",
        "while loop",
        "do-while loop",
        "None of the above"
      ],
      "answer": "C",
      "correct": "do-while loop",
      "explanation": "Python provides for and while. It has no built-in do-while statement."
    },
    {
      "id": "S3-074",
      "srNo": 74,
      "question": "A loop becomes infinite loop if a condition never becomes ________.",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "True",
        "False",
        "Null",
        "Both A and C"
      ],
      "answer": "B",
      "correct": "False",
      "explanation": "A while loop repeats while its condition is truthy, so a condition that never becomes False can run forever."
    },
    {
      "id": "S3-075",
      "srNo": 75,
      "question": "If the else statement is used with a while loop, the else statement is executed when the condition becomes _______.",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "True",
        "False",
        "Infinite",
        "Null"
      ],
      "answer": "B",
      "correct": "False",
      "explanation": "A loop else runs on normal exhaustion, when the while condition becomes False. A break skips the loop else."
    },
    {
      "id": "S3-076",
      "srNo": 76,
      "question": "Python programming language allows to use one loop inside another loop known as?",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "switch",
        "foreach",
        "nested",
        "forall"
      ],
      "answer": "C",
      "correct": "nested",
      "explanation": "A loop inside another loop is a nested loop. The inner loop executes for each outer iteration."
    },
    {
      "id": "S3-077",
      "srNo": 77,
      "question": "What will be the output of given Python code?\nn=7\nc=0\nwhile(n):\n  if(n>5):\n    c=c+n-1\n    n=n-1\n  else:\n    break\nprint(n)\nprint(c)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "4\n16",
        "5\n11",
        "6\n7",
        "5\n10"
      ],
      "answer": "B",
      "correct": "5\n11",
      "trace": {
        "code": "n=7\nc=0\nwhile(n):\n  if(n>5):\n    c=c+n-1\n    n=n-1\n  else:\n    break\nprint(n)\nprint(c)",
        "output": "5\n11\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-078",
      "srNo": 78,
      "question": "How  many times will the loop run?\ni=2\nwhile(i>0):\n  i=i-1",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "2",
        "3",
        "1",
        "0"
      ],
      "answer": "A",
      "correct": "2",
      "explanation": "The body runs for i=2 and i=1. After the second decrement i becomes 0."
    },
    {
      "id": "S3-079",
      "srNo": 79,
      "question": "How  many times will the condition will be checked?\ni=2\nwhile(i>0):\n  i=i-1",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "2",
        "3",
        "1",
        "0"
      ],
      "answer": "B",
      "correct": "3",
      "explanation": "Test at i=2, i=1 and i=0: three condition checks but only two body executions."
    },
    {
      "id": "S3-080",
      "srNo": 80,
      "question": "What is the value of the var after the for loop completes its execution\nvar = 10\nfor i in range(10):\n  for j in range(2, 10, 1):\n    if var % 2 == 0:\n      continue\n      var += 1\n  var+=1\nelse:\n  var+=1\nprint(var)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "20",
        "21",
        "10",
        "30"
      ],
      "answer": "B",
      "correct": "21",
      "trace": {
        "code": "var = 10\nfor i in range(10):\n  for j in range(2, 10, 1):\n    if var % 2 == 0:\n      continue\n      var += 1\n  var+=1\nelse:\n  var+=1\nprint(var)",
        "output": "21\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-081",
      "srNo": 81,
      "question": "What will be the output of the following Python code?\nfor i in range(0,2,-1):\n  print(\"Hello\")",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "Hello",
        "Hello Hello",
        "No Output",
        "Error"
      ],
      "answer": "C",
      "correct": "No Output",
      "explanation": "A negative step moves downward, but start 0 is already below stop 2. The range is empty."
    },
    {
      "id": "S3-082",
      "srNo": 82,
      "question": "Which of the following is a valid for loop in Python?",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "for(i=0; i < n; i++)",
        "for i in range(0,5):",
        "for i in range(0,5)",
        "for i in range(5)"
      ],
      "answer": "B",
      "correct": "for i in range(0,5):",
      "explanation": "for requires an iteration target, in, an iterable and a final colon."
    },
    {
      "id": "S3-083",
      "srNo": 83,
      "question": "Which of the following sequences would be generated by the given line of code?\nrange (5, 0, -2)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "5 4 3 2 1 0 -1",
        "5 4 3 2 1 0",
        "5 3 1",
        "None of the above"
      ],
      "answer": "C",
      "correct": "5 3 1",
      "explanation": "Starting at 5, subtract 2 each time and stop before 0: 5, 3, 1."
    },
    {
      "id": "S3-084",
      "srNo": 84,
      "question": "What is the output of the following for loop and range() function\nfor num in range(-2,-5,-1):\n  print(num, end=\", \")",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "-2, -1, -3, -4",
        "-2, -1, 0, 1, 2, 3,",
        "-2, -1, 0",
        "-2, -3, -4,"
      ],
      "answer": "D",
      "correct": "-2, -3, -4,",
      "trace": {
        "code": "for num in range(-2,-5,-1):\n  print(num, end=\", \")",
        "output": "-2, -3, -4, ",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-085",
      "srNo": 85,
      "question": "What will be the output of the following code?\nx = 12\nfor i in x:\n  print(i)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "12",
        "1 2",
        "Error",
        "None of the above"
      ],
      "answer": "C",
      "correct": "Error",
      "trace": {
        "code": "x = 12\nfor i in x:\n  print(i)",
        "output": "",
        "error": "TypeError: 'int' object is not iterable"
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-086",
      "srNo": 86,
      "question": "What is the value of x after the following nested for loop completes its execution\nx = 0\nfor i in range(10):\n for j in range(-1, -10, -1):\n  x += 1\n  print(x)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "99",
        "90",
        "100",
        "101"
      ],
      "answer": "B",
      "correct": "90",
      "trace": {
        "code": "x = 0\nfor i in range(10):\n for j in range(-1, -10, -1):\n  x += 1\n  print(x)",
        "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-087",
      "srNo": 87,
      "question": "What is the output of the following range() function\nfor num in range(2,-5,-1):\n  print(num, end=\", \")",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "2, 1, 0,",
        "2, 1, 0, -1, -2, -3, -4, -5,",
        "2, 1, 0, -1, -2, -3, -4,",
        "None of these"
      ],
      "answer": "C",
      "correct": "2, 1, 0, -1, -2, -3, -4,",
      "trace": {
        "code": "for num in range(2,-5,-1):\n  print(num, end=\", \")",
        "output": "2, 1, 0, -1, -2, -3, -4, ",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-088",
      "srNo": 88,
      "question": "What is the value of x\nx = 0\nwhile (x < 100):\n x+=2\nprint(x)",
      "marks": 1.0,
      "sourcePage": 4,
      "options": [
        "101",
        "99",
        "None of the above, this is an infinite loop",
        "100"
      ],
      "answer": "D",
      "correct": "100",
      "trace": {
        "code": "x = 0\nwhile (x < 100):\n x+=2\nprint(x)",
        "output": "100\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-089",
      "srNo": 89,
      "question": "What is the output of the following nested loop\nfor num in range(10, 14):\n  for i in range(2, num):\n    if num%i == 1:\n     print(num)\n     break",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "11\n12\n13\n14",
        "10\n11\n12\n13",
        "9\n10\n11\n12",
        "12\n13\n14\n15"
      ],
      "answer": "B",
      "correct": "10\n11\n12\n13",
      "trace": {
        "code": "for num in range(10, 14):\n  for i in range(2, num):\n    if num%i == 1:\n     print(num)\n     break",
        "output": "10\n11\n12\n13\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-090",
      "srNo": 90,
      "question": "What will be the output of the following Python code?\ni = 1\nwhile True:\n  if i%3 == 0:\n    break\n  print(i)\n  i += 1",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "1\n2",
        "1\n2\n3",
        "Error",
        "None of these"
      ],
      "answer": "A",
      "correct": "1\n2",
      "explanation": "i=1 and 2 are printed; i=3 triggers break before the print."
    },
    {
      "id": "S3-091",
      "srNo": 91,
      "question": "What will be the output of the following Python code?\ni = 1\nwhile True:\n  if i%2 == 0:\n    break\n  print(i)\n  i += 2",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "1",
        "1\n2",
        "1\n2\n3\n4\n5\n6…",
        "1\n3\n5\n7\n9\n11 …"
      ],
      "answer": "D",
      "correct": "1\n3\n5\n7\n9\n11 …",
      "explanation": "Starting at 1 and adding 2 keeps i odd forever, so the even-number break never occurs."
    },
    {
      "id": "S3-092",
      "srNo": 92,
      "question": "What will be the output of the following Python code?\ni = 2\nwhile True:\n  if i%3 == 0:\n    break\n  print(i)\n  i += 2",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "2\n4\n6\n8\n10..",
        "2\n4",
        "2\n3",
        "Error"
      ],
      "answer": "B",
      "correct": "2\n4",
      "explanation": "Print 2 and 4. At 6, divisibility by 3 triggers break."
    },
    {
      "id": "S3-093",
      "srNo": 93,
      "question": "What will be the output of the following Python code?\ni = 1\nwhile False:\n  if i%2 == 0:\n    break\n  print(i)\n  i += 2",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "1",
        "1\n3\n5\n7..",
        "1\n2\n3\n4..",
        "None of these"
      ],
      "answer": "D",
      "correct": "None of these",
      "explanation": "while False never enters its body, so there is no output. The listed answer is the catch-all option."
    },
    {
      "id": "S3-094",
      "srNo": 94,
      "question": "What will be the output of the following Python code?\nTrue = False\nwhile True:\n  print(True)\n  break",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "True",
        "False",
        "None",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "explanation": "True is a reserved constant. Assigning to it is a SyntaxError before the loop can execute."
    },
    {
      "id": "S3-095",
      "srNo": 95,
      "question": "What will be the output of the following Python code?\nfor i in range(0):\n  print(i)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0",
        "No output",
        "Error",
        "None of mentioned"
      ],
      "answer": "B",
      "correct": "No output",
      "explanation": "range(0) is empty; its loop has no iterations."
    },
    {
      "id": "S3-096",
      "srNo": 96,
      "question": "What will be the output of the following Python code?\nfor i in range(2.0):\n  print(i)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0.0 1.0",
        "0 1",
        "Error",
        "None of mentioned"
      ],
      "answer": "C",
      "correct": "Error",
      "trace": {
        "code": "for i in range(2.0):\n  print(i)",
        "output": "",
        "error": "TypeError: 'float' object cannot be interpreted as an integer"
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-097",
      "srNo": 97,
      "question": "What will be the output of the following Python code?\nfor i in range(int(2.0)):\n  print(i)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0.0 1.0",
        "0\n1",
        "Error",
        "None of mentioned"
      ],
      "answer": "B",
      "correct": "0\n1",
      "trace": {
        "code": "for i in range(int(2.0)):\n  print(i)",
        "output": "0\n1\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-098",
      "srNo": 98,
      "question": "What will be the output of the following Python code?\nfor i in range(float('inf')):\n  print (i)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0.0 0.1 0.2 0.3 …",
        "0 1 2 3 …",
        "0.0 1.0 2.0 3.0 …",
        "None of mentioned"
      ],
      "answer": "D",
      "correct": "None of mentioned",
      "trace": {
        "code": "for i in range(float('inf')):\n  print (i)",
        "output": "",
        "error": "TypeError: 'float' object cannot be interpreted as an integer"
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-099",
      "srNo": 99,
      "question": "What will be the output of the following Python code?\nfor i in range(5):\n  if i == 5:\n    break\n  else:\n    print(i)\nelse:\n  print(\"Here\")",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0\n1\n2\n3\n4\nHere",
        "0\n1\n2\n3\n4\n5\nHere",
        "0\n1\n2\n3\n4",
        "1\n2\n3\n4\n5"
      ],
      "answer": "A",
      "correct": "0\n1\n2\n3\n4\nHere",
      "trace": {
        "code": "for i in range(5):\n  if i == 5:\n    break\n  else:\n    print(i)\nelse:\n  print(\"Here\")",
        "output": "0\n1\n2\n3\n4\nHere\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-100",
      "srNo": 100,
      "question": "What will be the output of the following Python code?\nfor i in range(10):\n  if i == 5:\n    break\n  else:\n    print(i)\nelse:\n  print(\"Here\")",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0\n1\n2\n3\n4\nHere",
        "0\n1\n2\n3\n4\n5\nHere",
        "0\n1\n2\n3\n4",
        "1\n2\n3\n4\n5"
      ],
      "answer": "C",
      "correct": "0\n1\n2\n3\n4",
      "trace": {
        "code": "for i in range(10):\n  if i == 5:\n    break\n  else:\n    print(i)\nelse:\n  print(\"Here\")",
        "output": "0\n1\n2\n3\n4\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-101",
      "srNo": 101,
      "question": "What will be the output of the following Python code snippet?\nx = 2\nfor i in range(x):\n  x -= 2\n  print (x)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0\n1\n2\n3\n4",
        "0\n-2",
        "0",
        "Error"
      ],
      "answer": "B",
      "correct": "0\n-2",
      "trace": {
        "code": "x = 2\nfor i in range(x):\n  x -= 2\n  print (x)",
        "output": "0\n-2\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-102",
      "srNo": 102,
      "question": "What will be the output of the following Python code snippet?\nx = 2\nfor i in range(x):\n  x += 1\n  print (x)",
      "marks": 1.0,
      "sourcePage": 5,
      "options": [
        "0\n1\n2\n3\n4..",
        "0\n1",
        "3\n4",
        "0\n1\n2\n3"
      ],
      "answer": "C",
      "correct": "3\n4",
      "trace": {
        "code": "x = 2\nfor i in range(x):\n  x += 1\n  print (x)",
        "output": "3\n4\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-103",
      "srNo": 103,
      "question": "What will be the output of the following Python code?\ni = 0\nwhile i < 5:\n  print(i)\n  i += 1\n  if i == 3:\n    break\nelse:\n  print(0)",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "0\n1\n2",
        "0\n1\n2\n0",
        "Error",
        "None of these"
      ],
      "answer": "A",
      "correct": "0\n1\n2",
      "trace": {
        "code": "i = 0\nwhile i < 5:\n  print(i)\n  i += 1\n  if i == 3:\n    break\nelse:\n  print(0)",
        "output": "0\n1\n2\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-104",
      "srNo": 104,
      "question": "What will be the output of the following Python code?\ni = 0\nwhile i < 3:\n  print(i)\n  i += 1\nelse:\n  print(0)",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "0\n1\n2",
        "0\n1\n2\n3\n0",
        "0\n1\n2\n0",
        "Error"
      ],
      "answer": "C",
      "correct": "0\n1\n2\n0",
      "trace": {
        "code": "i = 0\nwhile i < 3:\n  print(i)\n  i += 1\nelse:\n  print(0)",
        "output": "0\n1\n2\n0\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-105",
      "srNo": 105,
      "question": "What will be the output of the following Python code?\nx = 2\nfor i in range(x):\n  x -= 2\n  print (x)",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "0\n1\n2\n3\n4 …",
        "0\n-2",
        "0",
        "error"
      ],
      "answer": "B",
      "correct": "0\n-2",
      "trace": {
        "code": "x = 2\nfor i in range(x):\n  x -= 2\n  print (x)",
        "output": "0\n-2\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-106",
      "srNo": 106,
      "question": "The continue statement can be used in?",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "while loop",
        "for loop",
        "do-while",
        "Both A and B"
      ],
      "answer": "D",
      "correct": "Both A and B",
      "explanation": "continue skips the remainder of the current iteration in both for and while loops."
    },
    {
      "id": "S3-107",
      "srNo": 107,
      "question": "What is the output of following python code?\nint(\"Enter value of x:\")\nfor in range[0, 10]:\n  print(\"They are equal\")\nelse:\n  print( \"They are unequal\")",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "They are unequal",
        "They are equal",
        "0,1,2,3,4,5,6,7,8,9",
        "SyntaxError"
      ],
      "answer": "D",
      "correct": "SyntaxError",
      "trace": {
        "code": "for in range[0, 10]:\n  print(\"They are equal\")\nelse:\n  print( \"They are unequal\")",
        "output": "",
        "error": "SyntaxError: invalid Python syntax"
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-108",
      "srNo": 108,
      "question": "What is the output of following python code?\na = 5\nb = 5.0\nprint('yes') if (a == b) else 'no'",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "yes",
        "no",
        "ZeroError",
        "SyntaxError"
      ],
      "answer": "A",
      "correct": "yes",
      "trace": {
        "code": "a = 5\nb = 5.0\nprint('yes') if (a == b) else 'no'",
        "output": "yes\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-109",
      "srNo": 109,
      "question": "What is the output of following python code?\na = b = 0\nif (a = b):\n  print(0)\nelse:\n  print('otherwise')",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "yes",
        "0",
        "ZeroError",
        "SyntaxError"
      ],
      "answer": "D",
      "correct": "SyntaxError",
      "trace": {
        "code": "a = b = 0\nif (a = b):\n  print(0)\nelse:\n  print('otherwise')",
        "output": "",
        "error": "SyntaxError: invalid Python syntax"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-110",
      "srNo": 110,
      "question": "What is the output of following python code?\nStep = 3\nfor e in range(0, step):\n  if e%2==0:\n    print('hello')\n  else:\n    print('goodbye')",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "3",
        "NameError",
        "ZeroError",
        "SyntaxError"
      ],
      "answer": "B",
      "correct": "NameError",
      "trace": {
        "code": "Step = 3\nfor e in range(0, step):\n  if e%2==0:\n    print('hello')\n  else:\n    print('goodbye')",
        "output": "",
        "error": "NameError: name 'step' is not defined"
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-111",
      "srNo": 111,
      "question": "What will be the output of the following Python code?\nx = 123\nfor i in x:\n  print(i)",
      "marks": 0.5,
      "sourcePage": 6,
      "options": [
        "1 2 3",
        "123",
        "TypeError",
        "KeyError"
      ],
      "answer": "C",
      "correct": "TypeError",
      "trace": {
        "code": "x = 123\nfor i in x:\n  print(i)",
        "output": "",
        "error": "TypeError: 'int' object is not iterable"
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-112",
      "srNo": 112,
      "question": "What is the output of the following snippet?\ntheSum = 0\nfor count in range(2, 11, 2):\n  theSum += count\nprint(theSum)",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "25",
        "20",
        "30",
        "23"
      ],
      "answer": "C",
      "correct": "30",
      "trace": {
        "code": "theSum = 0\nfor count in range(2, 11, 2):\n  theSum += count\nprint(theSum)",
        "output": "30\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-113",
      "srNo": 113,
      "question": "What will be the output of the following snippet?\na = True\nb = False\nc = False\nif not a or b:\n  print (1)\nelif not a or not b and c:\n  print (2)\nelif not a or b or not b and a:\n  print (3)\nelse:\n  print (4)",
      "marks": 1.0,
      "sourcePage": 6,
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "C",
      "correct": "3",
      "trace": {
        "code": "a = True\nb = False\nc = False\nif not a or b:\n  print (1)\nelif not a or not b and c:\n  print (2)\nelif not a or b or not b and a:\n  print (3)\nelse:\n  print (4)",
        "output": "3\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-114",
      "srNo": 114,
      "question": "What will be the output of the following Python code?\nvar = 10\nfor i in range(5):\n   for j in range(2, 3, 1):\n     if var%2 == 0:\n       break\n     var += 1\n   var+=1\nelse:\n   var+=1\nprint(var)",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "19",
        "20",
        "21",
        "14"
      ],
      "answer": "B",
      "correct": "20",
      "trace": {
        "code": "var = 10\nfor i in range(5):\n   for j in range(2, 3, 1):\n     if var%2 == 0:\n       break\n     var += 1\n   var+=1\nelse:\n   var+=1\nprint(var)",
        "output": "20\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-115",
      "srNo": 115,
      "question": "What will be output of following code?\nA=70\nif A>90:\n  print('Grade A')\nelif A>70 and A<90:\n  print('Grade B')\nelif A>50 and A<70:\n  print('Grade C')\nelif A>35 and A<50:\n  print('Grade D')\nelse:\n  print('Fail')",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "Grade A",
        "Grade B",
        "Grade C",
        "Fail"
      ],
      "answer": "D",
      "correct": "Fail",
      "trace": {
        "code": "A=70\nif A>90:\n  print('Grade A')\nelif A>70 and A<90:\n  print('Grade B')\nelif A>50 and A<70:\n  print('Grade C')\nelif A>35 and A<50:\n  print('Grade D')\nelse:\n  print('Fail')",
        "output": "Fail\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-116",
      "srNo": 116,
      "question": "What will be output of following code?\nseconds=3650\nif seconds>=3600:\n  hour=seconds//3600\n  seconds %= 3600\n  print(hour,\"hours\",end=\" \")\nif seconds>=60:\n  minute=seconds//60\n  seconds %= 60\n  print(minute,\"minutes\",end=\" \")\nif seconds>0:\n  print(seconds,\"seconds\")",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "1 hours 50 seconds",
        "1 hours 0 minutes 50 seconds",
        "1 hours 50 minutes",
        "0 hours 0 minutes 3650 seconds"
      ],
      "answer": "A",
      "correct": "1 hours 50 seconds",
      "trace": {
        "code": "seconds=3650\nif seconds>=3600:\n  hour=seconds//3600\n  seconds %= 3600\n  print(hour,\"hours\",end=\" \")\nif seconds>=60:\n  minute=seconds//60\n  seconds %= 60\n  print(minute,\"minutes\",end=\" \")\nif seconds>0:\n  print(seconds,\"seconds\")",
        "output": "1 hours 50 seconds\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-117",
      "srNo": 117,
      "question": "What will be output of following code?\nA=0\nfor i in range(4):\n  if i%2==0:\n    pass\n  else:\n    continue\n    break\n  A+=1\nprint(A)",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "4",
        "3",
        "2",
        "0"
      ],
      "answer": "C",
      "correct": "2",
      "trace": {
        "code": "A=0\nfor i in range(4):\n  if i%2==0:\n    pass\n  else:\n    continue\n    break\n  A+=1\nprint(A)",
        "output": "2\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-118",
      "srNo": 118,
      "question": "What will be the output of the following code snippet?\ncount = 0\nwhile(True):\n  if count % 3 == 0:\n    print(count, end = \" \")\n  if(count > 15):\n    break;\n  count += 1",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "0 3 6 9 12 15",
        "0 1 2 3",
        "0 3 6 9",
        "0 3 6 9 12"
      ],
      "answer": "A",
      "correct": "0 3 6 9 12 15",
      "trace": {
        "code": "count = 0\nwhile(True):\n  if count % 3 == 0:\n    print(count, end = \" \")\n  if(count > 15):\n    break;\n  count += 1",
        "output": "0 3 6 9 12 15 ",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-119",
      "srNo": 119,
      "question": "What is the output of the following code?\na = True\nb = False\nc = True\nif not a or b:\n  print (\"a\")\nelif not a or not b and c:\n  print (\"b\")\nelif not a or b or not b and a:\n  print (\"c\")\nelse:\n  print (\"d\")",
      "marks": 1.0,
      "sourcePage": 7,
      "options": [
        "a",
        "b",
        "c",
        "d"
      ],
      "answer": "B",
      "correct": "b",
      "trace": {
        "code": "a = True\nb = False\nc = True\nif not a or b:\n  print (\"a\")\nelif not a or not b and c:\n  print (\"b\")\nelif not a or b or not b and a:\n  print (\"c\")\nelse:\n  print (\"d\")",
        "output": "b\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-120",
      "srNo": 120,
      "question": "What does the following code print?\nif 5 + 5 == 10:\n   print(\"TRUE\")\nelse:\n   print(\"FALSE\")\nprint(\"TRUE\")",
      "marks": 0.5,
      "sourcePage": 7,
      "options": [
        "TRUE",
        "FALSE",
        "TRUE\nFALSE",
        "TRUE\nTRUE"
      ],
      "answer": "D",
      "correct": "TRUE\nTRUE",
      "trace": {
        "code": "if 5 + 5 == 10:\n   print(\"TRUE\")\nelse:\n   print(\"FALSE\")\nprint(\"TRUE\")",
        "output": "TRUE\nTRUE\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-121",
      "srNo": 121,
      "question": "What is the output of the following nested loop\nfor num in range(26, 30):\n   for i in range(2, num):\n      if num%i == 1:\n       print(num, end=’,’)\n       break",
      "marks": 0.5,
      "sourcePage": 7,
      "options": [
        "26,27,28",
        "26,27,28,29",
        "26,27,28,29,",
        "27,29"
      ],
      "answer": "C",
      "correct": "26,27,28,29,",
      "trace": {
        "code": "for num in range(26, 30):\n   for i in range(2, num):\n      if num%i == 1:\n       print(num, end=',')\n       break",
        "output": "26,27,28,29,",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-122",
      "srNo": 122,
      "question": "What is the value of the var after the for loop completes its execution:\nvar = 10\nfor i in range(10):\n  for j in range(2, 10, 1):\n    if var % 2 == 0:\n      var += 1\n      continue\n  var+=1\nelse:\n  var+=1\nprint(var)",
      "marks": 1.0,
      "sourcePage": 8,
      "options": [
        "20",
        "21",
        "30",
        "31"
      ],
      "answer": "D",
      "correct": "31",
      "trace": {
        "code": "var = 10\nfor i in range(10):\n  for j in range(2, 10, 1):\n    if var % 2 == 0:\n      var += 1\n      continue\n  var+=1\nelse:\n  var+=1\nprint(var)",
        "output": "31\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-123",
      "srNo": 123,
      "question": "What should be the output of the following python code snippet:\na=5\nb=7\nc=2\nif a>b:\n  a,b = b,a\nif a>c:\n  a,c = c,a\nif b>c:\n  b,c = c,b\nprint(a,b,c,end=\",\")",
      "marks": 1.0,
      "sourcePage": 8,
      "options": [
        "2,5,7",
        "7,5,2",
        "2 5 7,",
        "7 5 2,"
      ],
      "answer": "C",
      "correct": "2 5 7,",
      "trace": {
        "code": "a=5\nb=7\nc=2\nif a>b:\n  a,b = b,a\nif a>c:\n  a,c = c,a\nif b>c:\n  b,c = c,b\nprint(a,b,c,end=\",\")",
        "output": "2 5 7,",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-124",
      "srNo": 124,
      "question": "What is the value of x after the following nested for loop completes its execution\nx = 0\nfor i in range(1,10):\n  for j in range(-1, -10, -1):\n    x += 1\n    print(x)",
      "marks": 0.5,
      "sourcePage": 8,
      "options": [
        "81",
        "90",
        "80",
        "99"
      ],
      "answer": "A",
      "correct": "81",
      "trace": {
        "code": "x = 0\nfor i in range(1,10):\n  for j in range(-1, -10, -1):\n    x += 1\n    print(x)",
        "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-125",
      "srNo": 125,
      "question": "What is the value of x\nx = 0\nwhile (x < 100):\n  x+=3\nprint(x)",
      "marks": 0.5,
      "sourcePage": 8,
      "options": [
        "98",
        "99",
        "100",
        "102"
      ],
      "answer": "D",
      "correct": "102",
      "trace": {
        "code": "x = 0\nwhile (x < 100):\n  x+=3\nprint(x)",
        "output": "102\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-126",
      "srNo": 126,
      "question": "What will be the output of the following program.\nif (9 < 0) and (0 < -9):\n  print(\"hello\")\nelif (9 > 0) or False:\n  print(\"good\")\nelse:\nprint(\"bad\")",
      "marks": 0.5,
      "sourcePage": 8,
      "options": [
        "IndentationError",
        "hello",
        "good",
        "bad"
      ],
      "answer": "A",
      "correct": "IndentationError",
      "explanation": "The print after else is not indented in the source. Python requires an indented block and raises IndentationError."
    },
    {
      "id": "S3-127",
      "srNo": 127,
      "question": "What is the output of the following code?\nc=1\ns=0\nwhile c<=8:\n  c=c-1\n  s=s+c\n  c=c+2\nprint(s)",
      "marks": 1.0,
      "sourcePage": 8,
      "options": [
        "28",
        "30",
        "21",
        "35"
      ],
      "answer": "A",
      "correct": "28",
      "trace": {
        "code": "c=1\ns=0\nwhile c<=8:\n  c=c-1\n  s=s+c\n  c=c+2\nprint(s)",
        "output": "28\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-128",
      "srNo": 128,
      "question": "What will be the output of the following program on execution?\nx=0\nwhile x<10:\n  if x%3==0:\n    x+=5\n    continue\n  if x%2==0:\n    x+=14\n  else:\n    x+=1\nelse:\n  x+=1\nprint(x)",
      "marks": 1.0,
      "sourcePage": 8,
      "options": [
        "10",
        "11",
        "12",
        "0"
      ],
      "answer": "C",
      "correct": "12",
      "trace": {
        "code": "x=0\nwhile x<10:\n  if x%3==0:\n    x+=5\n    continue\n  if x%2==0:\n    x+=14\n  else:\n    x+=1\nelse:\n  x+=1\nprint(x)",
        "output": "12\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-129",
      "srNo": 129,
      "question": "What is the output of the following code?\nval = 154\nwhile(not(val)):\n  val**=2\nelse:\n  val//=2\nprint(val)",
      "marks": 0.5,
      "sourcePage": 8,
      "options": [
        "77",
        "11",
        "154",
        "11858"
      ],
      "answer": "A",
      "correct": "77",
      "trace": {
        "code": "val = 154\nwhile(not(val)):\n  val**=2\nelse:\n  val//=2\nprint(val)",
        "output": "77\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left. // is floor division and % gives the remainder. Boolean operations short-circuit; and/or may return operand values, while not returns a boolean."
    },
    {
      "id": "S3-130",
      "srNo": 130,
      "question": "What is the output of the following code?\nn=10\ni=1\nwhile(i<=n):\n  k=0\n  if(n%i==0):\n    j=1\n    while(j<=i):\n      if(i%j==0):\n       k=k+1\n      j=j+1\n    if(k==2):\n      print(i,end=\" \")\n  i=i+1",
      "marks": 1.0,
      "sourcePage": 8,
      "options": [
        "2 5",
        "10",
        "100",
        "20"
      ],
      "answer": "A",
      "correct": "2 5",
      "trace": {
        "code": "n=10\ni=1\nwhile(i<=n):\n  k=0\n  if(n%i==0):\n    j=1\n    while(j<=i):\n      if(i%j==0):\n       k=k+1\n      j=j+1\n    if(k==2):\n      print(i,end=\" \")\n  i=i+1",
        "output": "2 5 ",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder."
    },
    {
      "id": "S3-131",
      "srNo": 131,
      "question": "What will be the output of Python code?\ni,j=1,4\nwhile True:\n  if(i%7==0 or j%9==0):\n    break\n  i+=1\n  j+=1\nprint(i,j)",
      "marks": 1.0,
      "sourcePage": 9,
      "options": [
        "5 9",
        "6 7",
        "6 9",
        "7 9"
      ],
      "answer": "C",
      "correct": "6 9",
      "explanation": "Both counters increase together. j reaches 9 when i reaches 6, so the loop ends and prints 6 9."
    },
    {
      "id": "S3-132",
      "srNo": 132,
      "question": "What will be the output of given Python code?\nn=5\nc=0\nwhile(n):\n  if(n>5):\n    c=c+n-1\n    n=n-1\n  else:\n    c=c+n-1\n    break\nprint(n, c)",
      "marks": 1.0,
      "sourcePage": 9,
      "options": [
        "5 4",
        "5 0",
        "5 11",
        "4 0"
      ],
      "answer": "A",
      "correct": "5 4",
      "trace": {
        "code": "n=5\nc=0\nwhile(n):\n  if(n>5):\n    c=c+n-1\n    n=n-1\n  else:\n    c=c+n-1\n    break\nprint(n, c)",
        "output": "5 4\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-133",
      "srNo": 133,
      "question": "What will be the output of the following program on execution?\nfor x in range(0,15):\n  if(x%3==0):\n    continue\n  if(x%5==0):\n    continue\n  if(x%7==0):\n    break\n  print(x,end=\" \")",
      "marks": 0.5,
      "sourcePage": 9,
      "options": [
        "1 2 4",
        "0 1 2 4",
        "0 1 2 3 4 5 6",
        "1 2 3 4 5 6"
      ],
      "answer": "A",
      "correct": "1 2 4",
      "trace": {
        "code": "for x in range(0,15):\n  if(x%3==0):\n    continue\n  if(x%5==0):\n    continue\n  if(x%7==0):\n    break\n  print(x,end=\" \")",
        "output": "1 2 4 ",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-134",
      "srNo": 134,
      "question": "What will be the output of the following program on execution?\nfor i in range (1,11):\n  sum=0\n  sum+=i\nprint(sum)",
      "marks": 0.5,
      "sourcePage": 9,
      "options": [
        "10",
        "11",
        "55",
        "0"
      ],
      "answer": "A",
      "correct": "10",
      "trace": {
        "code": "for i in range (1,11):\n  sum=0\n  sum+=i\nprint(sum)",
        "output": "10\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-135",
      "srNo": 135,
      "question": "What will be the output of the following program on execution?\nn=6\nfor i in range(4,n,1):\n  if i==5:\n    break\nelse:\n  print(n)",
      "marks": 0.5,
      "sourcePage": 9,
      "options": [
        "no output",
        "4",
        "5",
        "n"
      ],
      "answer": "A",
      "correct": "no output",
      "explanation": "The loop reaches i=5 and breaks. The loop else is skipped, so nothing is printed."
    },
    {
      "id": "S3-136",
      "srNo": 136,
      "question": "What will be the output of the following program on execution?\nn=1\nfor i in range(1,n,1):\n  print(\"hello\")\nelse:\n  print(\"hi\")",
      "marks": 0.5,
      "sourcePage": 9,
      "options": [
        "hi",
        "hello",
        "no output",
        "value errror"
      ],
      "answer": "A",
      "correct": "hi",
      "trace": {
        "code": "n=1\nfor i in range(1,n,1):\n  print(\"hello\")\nelse:\n  print(\"hi\")",
        "output": "hi\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-137",
      "srNo": 137,
      "question": "What will be the output of the following program on execution?\nfor i in range(1,11):\n  x=0\n  x+=i\n  while(x<15):\n    if i%2==0:\n      x+=1\n    else:\n      x+=2\nprint(x)",
      "marks": 1.0,
      "sourcePage": 9,
      "options": [
        "15",
        "17",
        "16",
        "14"
      ],
      "answer": "A",
      "correct": "15",
      "trace": {
        "code": "for i in range(1,11):\n  x=0\n  x+=i\n  while(x<15):\n    if i%2==0:\n      x+=1\n    else:\n      x+=2\nprint(x)",
        "output": "15\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-138",
      "srNo": 138,
      "question": "What will be the output of the following program on execution?\nx=10\nif x<15:\n  print(\"h\",end=\" \")\nelif x>12:\n  print(\"i\",end=\" \")\nelse:\n  print(\"student\",end=\" \")\nif x<9:\n  print(\"name\",end=\" \")\nelse:\n  print(\"Name\",end=\"\")",
      "marks": 1.0,
      "sourcePage": 9,
      "options": [
        "h Name",
        "H name",
        "hi",
        "hi name"
      ],
      "answer": "A",
      "correct": "h Name",
      "trace": {
        "code": "x=10\nif x<15:\n  print(\"h\",end=\" \")\nelif x>12:\n  print(\"i\",end=\" \")\nelse:\n  print(\"student\",end=\" \")\nif x<9:\n  print(\"name\",end=\" \")\nelse:\n  print(\"Name\",end=\"\")",
        "output": "h Name",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-139",
      "srNo": 139,
      "question": "What will be the output of the following program on execution?\nx=0\ncount=0\nwhile x<15:\n  if x%2==0:\n    x+=1\n    continue\n  if x%3==0:\n    x+=1\n    continue\n  if count==5:\n    break\n  count+=1\nprint(x,count)",
      "marks": 1.0,
      "sourcePage": 10,
      "options": [
        "1 5",
        "15 5",
        "0 5",
        "0 0"
      ],
      "answer": "A",
      "correct": "1 5",
      "trace": {
        "code": "x=0\ncount=0\nwhile x<15:\n  if x%2==0:\n    x+=1\n    continue\n  if x%3==0:\n    x+=1\n    continue\n  if count==5:\n    break\n  count+=1\nprint(x,count)",
        "output": "1 5\n",
        "error": null
      },
      "explanation": "// is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-140",
      "srNo": 140,
      "question": "What will be the output of the following program on execution?\nx=0\ncount=0\nfor x in range(10):\n  while x<15:\n    if x<0:\n      pass\n    elif x%2==0:\n      x+=1\n      continue\n    elif x%3==0:\n      x+=1\n      continue\n    elif count==5:\n      break\n    count+=1\nprint(x,count)",
      "marks": 1.0,
      "sourcePage": 10,
      "options": [
        "11 5",
        "10 5",
        "16 5",
        "14 5"
      ],
      "answer": "A",
      "correct": "11 5",
      "trace": {
        "code": "x=0\ncount=0\nfor x in range(10):\n  while x<15:\n    if x<0:\n      pass\n    elif x%2==0:\n      x+=1\n      continue\n    elif x%3==0:\n      x+=1\n      continue\n    elif count==5:\n      break\n    count+=1\nprint(x,count)",
        "output": "11 5\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-141",
      "srNo": 141,
      "question": "What is the output of the following code?\nval = 0\nfor i in range(1, 8):\n  if i % 2 == 0:\n    val += i\n    continue\n  val += 2*i\n  if val > 10:\n    break\nprint(val)",
      "marks": 1.0,
      "sourcePage": 10,
      "options": [
        "12",
        "45",
        "24",
        "78"
      ],
      "answer": "C",
      "correct": "24",
      "trace": {
        "code": "val = 0\nfor i in range(1, 8):\n  if i % 2 == 0:\n    val += i\n    continue\n  val += 2*i\n  if val > 10:\n    break\nprint(val)",
        "output": "24\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    }
  ],
  "coding": [
    {
      "id": "S3-C142",
      "srNo": 142,
      "question": "Write a program to determine a given number is ‘odd’ or ‘even’ and print the following message “Number is ODD” or\n“Number is Even”.",
      "marks": 3.0,
      "sourcePage": 10,
      "solution": "n = int(input('Enter number: '))\nif n % 2 == 0:\n    print('Number is Even')\nelse:\n    print('Number is ODD')",
      "explanation": "An integer is even when its remainder modulo 2 is zero; otherwise it is odd.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "7"
      ],
      "exampleOutput": "Number is ODD"
    },
    {
      "id": "S3-C143",
      "srNo": 143,
      "question": "Write a program to check if the input number is positive, negative or zero.",
      "marks": 3.0,
      "sourcePage": 10,
      "solution": "n = float(input('Enter number: '))\nif n > 0:\n    print('Positive')\nelif n < 0:\n    print('Negative')\nelse:\n    print('Zero')",
      "explanation": "Compare against zero in three branches: greater, less and equal.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "-3"
      ],
      "exampleOutput": "Negative"
    },
    {
      "id": "S3-C144",
      "srNo": 144,
      "question": "Write a program to find the maximum number among the three input numbers.",
      "marks": 7.0,
      "sourcePage": 10,
      "solution": "a = float(input('a: '))\nb = float(input('b: '))\nc = float(input('c: '))\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)",
      "explanation": "A candidate is greatest when it is at least as large as both other values. >= correctly handles ties.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "4",
        "9",
        "5"
      ],
      "exampleOutput": "9.0"
    },
    {
      "id": "S3-C145",
      "srNo": 145,
      "question": "Write a Python Program to calculate the sum of three given numbers, if the values are equal then return thrice their sum.\nExample:",
      "marks": 3.0,
      "sourcePage": 10,
      "figures": [
        "figures/q145-p10-1.png"
      ],
      "solution": "a = int(input())\nb = int(input())\nc = int(input())\ns = a + b + c\nif a == b == c:\n    s *= 3\nprint(s)",
      "explanation": "First add the three numbers. If all three values are equal, multiply the sum by 3. For 3,3,3 the result is 27.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "3",
        "3"
      ],
      "exampleOutput": "27"
    },
    {
      "id": "S3-C146",
      "srNo": 146,
      "question": "Write a Python Program to print all Happy Numbers between the given range entered by user. (Include both Start and End\nRange Number).\nLogic for Happy & Unhappy Number:\nOutput:\nEnter start range:1\nEnter end range:20\n1 7 10 13 19",
      "marks": 6.0,
      "sourcePage": 11,
      "figures": [
        "figures/q146-p11-1.png",
        "figures/q146-p11-2.png"
      ],
      "solution": "def is_happy(n):\n    seen = set()\n    while n != 1 and n not in seen:\n        seen.add(n)\n        total = 0\n        while n:\n            total += (n % 10) ** 2\n            n //= 10\n        n = total\n    return n == 1\nstart = int(input('Start: '))\nend = int(input('End: '))\nfor n in range(start, end + 1):\n    if n > 0 and is_happy(n): print(n, end=' ')",
      "explanation": "Repeatedly replace a number with the sum of its squared digits. Reaching 1 means happy; a repeated value means a cycle and therefore unhappy. The inclusive interval 1–20 gives 1 7 10 13 19.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "20"
      ],
      "exampleOutput": "1 7 10 13 19"
    },
    {
      "id": "S3-C147",
      "srNo": 147,
      "question": "Write a Python Program to Compute the product of the odd digits in a given number,\n0 if there are not any odd digits in a given number.\nExample:\n(1)\nInput: 123456789\nOutput: 945\n(2)\nInput: 2468\nOutput: 0\n(3)\nInput: 123547\nOutput: 105",
      "marks": 3.0,
      "sourcePage": 11,
      "solution": "n = abs(int(input('Integer: ')))\nproduct, found = 1, False\nwhile n:\n    digit = n % 10\n    if digit % 2 != 0:\n        product *= digit\n        found = True\n    n //= 10\nprint(product if found else 0)",
      "explanation": "Multiply only odd digits, and separately track whether any existed. If none exists, return 0 rather than the initial product 1. 123456789 gives 945.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "123456789"
      ],
      "exampleOutput": "945"
    },
    {
      "id": "S3-C148",
      "srNo": 148,
      "question": "Write a program to check if year is a leap year or not (Nested If).",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "year = int(input('Year: '))\nif year % 4 == 0:\n    if year % 100 == 0:\n        if year % 400 == 0:\n            print('Leap year')\n        else:\n            print('Not a leap year')\n    else:\n        print('Leap year')\nelse:\n    print('Not a leap year')",
      "explanation": "Nested conditions: multiples of 4 are leap years, except century years unless divisible by 400.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "2000"
      ],
      "exampleOutput": "Leap year"
    },
    {
      "id": "S3-C149",
      "srNo": 149,
      "question": "Write a program to find sum of first N natural numbers given by user.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "n = int(input('N: '))\nif n < 0: raise ValueError('Use a nonnegative integer')\ntotal = 0\nfor i in range(1, n + 1): total += i\nprint('Sum =', total)",
      "explanation": "Accumulate natural numbers 1 through N. For N=10, the sum is 55; for N=0 it is zero.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "10"
      ],
      "exampleOutput": "Sum = 55"
    },
    {
      "id": "S3-C150",
      "srNo": 150,
      "question": "Write a program to find average of first N natural numbers given by user.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "n = int(input('N: '))\nif n < 1: raise ValueError('Use a positive integer')\ntotal = 0\nfor i in range(1, n + 1): total += i\nprint('Average =', total / n)",
      "explanation": "Divide the sum 1 through N by N. For N=10, average is 5.5; N must be positive.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "10"
      ],
      "exampleOutput": "Average = 5.5"
    },
    {
      "id": "S3-C151",
      "srNo": 151,
      "question": "Write a python program to read three numbers (a,b,c) and check how many numbers between ‘a’ and ‘b’ are divisible by ‘c’.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "a = int(input('a: '))\nb = int(input('b: '))\nc = int(input('Divisor: '))\nif c == 0:\n    print('Divisor cannot be zero')\nelse:\n    count = 0\n    for number in range(a + 1, b):\n        if number % c == 0:\n            count += 1\n    print(count)",
      "explanation": "Between means endpoints excluded here. Use range(a, b + 1) if your teacher includes both endpoints. Remainder zero means divisible.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "10",
        "2"
      ],
      "exampleOutput": "4"
    },
    {
      "id": "S3-C152",
      "srNo": 152,
      "question": "Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "for n in range(7):\n    if n == 3 or n == 6:\n        continue\n    print(n)",
      "explanation": "continue skips 3 and 6; output is 0, 1, 2, 4, 5 on separate lines.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "0\n1\n2\n4\n5"
    },
    {
      "id": "S3-C153",
      "srNo": 153,
      "question": "Write a Python program to print the multiplication table of given number by user.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "n = int(input('Number: '))\nfor i in range(1, 11):\n    print(n, 'x', i, '=', n * i)",
      "explanation": "Multiply the number by 1 through 10.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "7"
      ],
      "exampleOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
    },
    {
      "id": "S3-C154",
      "srNo": 154,
      "question": "Write a program to find the factorial of a number provided by the user.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "def factorial(n):\n    if n < 0:\n        raise ValueError('Factorial requires a nonnegative integer')\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(int(input('n: '))))",
      "explanation": "Multiply integers from 1 to n. The product starts at 1, so 0! is 1. A function returns the product for reuse.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "5"
      ],
      "exampleOutput": "120"
    },
    {
      "id": "S3-C155",
      "srNo": 155,
      "question": "Write a python program to display the Fibonacci sequence up to n-th term.",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "n = int(input('Number of terms: '))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=' ')\n    a, b = b, a + b",
      "explanation": "Each next term is the sum of the previous two. For 7 terms: 0 1 1 2 3 5 8.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "7"
      ],
      "exampleOutput": "0 1 1 2 3 5 8"
    },
    {
      "id": "S3-C156",
      "srNo": 156,
      "question": "Write a program to take 10 values from keyboard using loop and print their average on the screen",
      "marks": 4.0,
      "sourcePage": 11,
      "solution": "total = 0\nfor i in range(10):\n    total += float(input('Value: '))\nprint('Average =', total / 10)",
      "explanation": "Accumulate exactly ten values, then divide by ten.",
      "topic": "Conditions and loops",
      "starterCode": "",
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
      "id": "S3-C157",
      "srNo": 157,
      "question": "Write a program to reverse a number.",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "n = int(input('Integer: '))\nsign = -1 if n < 0 else 1\nn = abs(n)\nreverse = 0\nwhile n:\n    reverse = reverse * 10 + n % 10\n    n //= 10\nprint(sign * reverse)",
      "explanation": "Take the last digit with % 10 and append it to the reversed number. Integer reversal removes leading zeros.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "12340"
      ],
      "exampleOutput": "4321"
    },
    {
      "id": "S3-C158",
      "srNo": 158,
      "question": "Write a program to check whether a number is Armstrong number or not.",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "def is_armstrong(n):\n    if n < 0:\n        return False\n    digits = len(str(n))\n    temp, total = n, 0\n    while temp:\n        total += (temp % 10) ** digits\n        temp //= 10\n    return total == n\n\nn = int(input('Number: '))\nprint('Armstrong' if is_armstrong(n) else 'Not Armstrong')",
      "explanation": "For d digits, sum each digit raised to d. Compare with the original number. 153 = 1**3 + 5**3 + 3**3; zero is also Armstrong.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "153"
      ],
      "exampleOutput": "Armstrong"
    },
    {
      "id": "S3-C159",
      "srNo": 159,
      "question": "Write a program to check if a number is prime or not.",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "def is_prime(n):\n    if n < 2:\n        return False\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            return False\n        d += 1\n    return True\n\nn = int(input('Number: '))\nprint('Prime' if is_prime(n) else 'Not prime')",
      "explanation": "Try divisors up to the square root. Any composite number has at least one divisor in this range; 0 and 1 are not prime.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "17"
      ],
      "exampleOutput": "Prime"
    },
    {
      "id": "S3-C160",
      "srNo": 160,
      "question": "Write a program to print prime numbers between given interval from user",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "def is_prime(n):\n    if n < 2:\n        return False\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            return False\n        d += 1\n    return True\n\na = int(input('Start: '))\nb = int(input('End: '))\nfor n in range(a, b + 1):\n    if is_prime(n):\n        print(n, end=' ')",
      "explanation": "Apply the prime test to every integer in the inclusive interval.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "20"
      ],
      "exampleOutput": "2 3 5 7 11 13 17 19"
    },
    {
      "id": "S3-C161",
      "srNo": 161,
      "question": "Draw a pattern using a python program:\n*\n* *\n* * *\n* * * *",
      "marks": 7.0,
      "sourcePage": 11,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*', end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* \n* * \n* * * \n* * * *"
    },
    {
      "id": "S3-C162",
      "srNo": 162,
      "question": "Draw a pattern:\n* * * *\n* * *\n* *\n*",
      "marks": 7.0,
      "sourcePage": 12,
      "solution": "for row in range(4, 0, -1):\n    print('* ' * row)",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* * * * \n* * * \n* * \n*"
    },
    {
      "id": "S3-C163",
      "srNo": 163,
      "question": "Draw a pattern using a python program:\n*\n* *\n* * *\n* * * *",
      "marks": 7.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*', end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* \n* * \n* * * \n* * * *"
    },
    {
      "id": "S3-C164",
      "srNo": 164,
      "question": "Draw a pattern:\n* * * *\n* * *\n* *\n*",
      "marks": 7.0,
      "sourcePage": 12,
      "solution": "for row in range(4, 0, -1):\n    print('* ' * row)",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* * * * \n* * * \n* * \n*"
    },
    {
      "id": "S3-C165",
      "srNo": 165,
      "question": "Draw a pattern using a python program:\n1 2 3 4 5\n1 2 3 4\n1 2 3\n1 2\n1",
      "marks": 7.0,
      "sourcePage": 12,
      "solution": "for row in range(5, 0, -1):\n    for col in range(1, row + 1):\n        print(col, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 2 3 4 5 \n1 2 3 4 \n1 2 3 \n1 2 \n1"
    },
    {
      "id": "S3-C166",
      "srNo": 166,
      "question": "Draw a pattern using a python program:\n1\n1 2\n1 2 3\n1 2 3 4",
      "marks": 3.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(1, row + 1):\n        print(col, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 \n1 2 \n1 2 3 \n1 2 3 4"
    },
    {
      "id": "S3-C167",
      "srNo": 167,
      "question": "Draw a pattern using a python program:\n1\n2 2\n3 3 3\n4 4 4 4",
      "marks": 3.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print(row, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 \n2 2 \n3 3 3 \n4 4 4 4"
    },
    {
      "id": "S3-C168",
      "srNo": 168,
      "question": "Draw a pattern using a python program:\n*\n# #\n* * *\n# # # #",
      "marks": 4.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*' if row % 2 else '#', end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* \n# # \n* * * \n# # # #"
    },
    {
      "id": "S3-C169",
      "srNo": 169,
      "question": "Draw a pattern using a python program:\n1\n0 1\n1 0 1\n0 1 0 1",
      "marks": 4.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print((row + col) % 2, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 \n0 1 \n1 0 1 \n0 1 0 1"
    },
    {
      "id": "S3-C170",
      "srNo": 170,
      "question": "Draw a pattern using a python program:\n1\n1 2\n1 2 3\n1 2 3 4",
      "marks": 4.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(1, row + 1):\n        print(col, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 \n1 2 \n1 2 3 \n1 2 3 4"
    },
    {
      "id": "S3-C171",
      "srNo": 171,
      "question": "Draw a pattern using a python program:\n1\n2 2\n3 3 3\n4 4 4 4",
      "marks": 4.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print(row, end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 \n2 2 \n3 3 3 \n4 4 4 4"
    },
    {
      "id": "S3-C172",
      "srNo": 172,
      "question": "Draw a pattern using a python program:\n*\n# #\n* * *\n# # # #",
      "marks": 4.0,
      "sourcePage": 12,
      "solution": "for row in range(1, 5):\n    for col in range(row):\n        print('*' if row % 2 else '#', end=' ')\n    print()",
      "explanation": "The outer loop selects the row. The inner loop prints the required number of symbols or numbers, then print() starts a new line.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "* \n# # \n* * * \n# # # #"
    },
    {
      "id": "S3-C173",
      "srNo": 173,
      "question": "Gross Pay, Annual Income and Income Tax Calculator\nWrite a Python Program to make the gross pay, annual income and income tax calculator using following data.\nThe gross pay consists of Basic Pay, House Rent Allowance (hra), Dearness Allowance (dra), other allowances and\nprofessional tax and provident fund.\nGross Pay= Basic Pay+ House Rent Allowance (hra) + Dearness Allowance (dra) +other allowances +Transport Allowance\n(TA)– Professional tax –Employees’ Provident fund (EPF)\nBasic Pay for different grade levels are indicated in table given.\nThe Professional tax remains constant and that is equal to 200 Rs. for each grade levels and each month.\nHouse Rent Allowance (hra) varies as per the city- For Class 1 Cities it is 0.3 times of Basic Pay of each grade levels, for Class\n2 Cities it is 0.2 times of Basic Pay of each grade levels, for Class 3 Cities it is 0.1 times of Basic Pay of each grade levels,\nDearness Allowance (dra)= 0.5 times of Basic Pay of each grade levels, Other allowances are given in table which varies\naccording to different grade levels, Provident Fund= 0.11 times of Basic Pay for each grade levels, Transport Allowance\nremains constant as 900 Rs. for each levels.\nFor different grade pays:\nThe gross pay calculated is only for one month.\nAfter calculating Gross Pay of each employee calculate the annual pay for employee by multiplying gross pay calculated, by\n12.\nSo, Annual Pay of an employee=Gross Pay of an employee*12\nFrom Annual Pay of an Employee Calculate the income tax as per the slabs of India Income Tax 2022-23 given below.\nTax Slabs for AY 2022-23\nInput & Output:\nEnter the grade_level (A,B,C,D,E or F:)A\ncity 1 is a tier 1 (metro), city 2 is tier 2 and city 3 is tier 3\nEnter the city (1,2 or 3)1\nGross Pay of an Employee is: 110100.0\nAnnual income of an employee is: 1321200.0\nIncome Tax to be paid by an employee is: 142800.0\nGrade/basic/other allowances: A/60000/8000; B/50000/7000; C/40000/6000; D/30000/5000; E/20000/4000; F/10000/3000. Tax slabs: up to 250000: 0; next 250000: 5%; next 250000: 10%; next 250000: 15%; next 250000: 20%; next 250000: 25%; above 1500000: 30%.",
      "marks": 9.0,
      "sourcePage": 13,
      "figures": [
        "figures/q173-p13-1.png",
        "figures/q173-p13-2.png"
      ],
      "solution": "grade = input('Grade A-F: ').upper()\ncity = int(input('City tier 1-3: '))\nif grade not in 'ABCDEF' or len(grade) != 1 or city not in (1, 2, 3):\n    raise ValueError('Invalid grade or city')\nbasic = {'A':60000, 'B':50000, 'C':40000, 'D':30000, 'E':20000, 'F':10000}[grade]\nallowance = {'A':8000, 'B':7000, 'C':6000, 'D':5000, 'E':4000, 'F':3000}[grade]\nhra = basic * {1:0.30, 2:0.20, 3:0.10}[city]\nda = basic * 0.50\npf = basic * 0.11\ngross = basic + hra + da + allowance + 900 - 200 - pf\nannual = gross * 12\nif annual <= 250000: tax = 0\nelif annual <= 500000: tax = (annual - 250000) * 0.05\nelif annual <= 750000: tax = 12500 + (annual - 500000) * 0.10\nelif annual <= 1000000: tax = 37500 + (annual - 750000) * 0.15\nelif annual <= 1250000: tax = 75000 + (annual - 1000000) * 0.20\nelif annual <= 1500000: tax = 125000 + (annual - 1250000) * 0.25\nelse: tax = 187500 + (annual - 1500000) * 0.30\nprint('Gross Pay:', gross)\nprint('Annual income:', annual)\nprint('Income Tax:', tax)",
      "explanation": "Use the historical salary and tax rules in the question. Gross includes TA 900 and professional tax 200. For grade A, city 1, correct gross is 110100, annual 1321200 and tax 142800. The PDF sample follows these amounts; they require TA and professional tax.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "A",
        "1"
      ],
      "exampleOutput": "Gross Pay: 110100.0\nAnnual income: 1321200.0\nIncome Tax: 142800.0"
    },
    {
      "id": "S3-C174",
      "srNo": 174,
      "question": "Write a python program to print all numbers between 1 and 100 (including 1 and 100) that are both, Disarium and Harshad\nnumbers.\nA number is said to be a Disarium number when the sum of its digit raised to the power of their respective positions\nbecomes equal to the number itself.\nFor example, 175 is a Disarium number as follows:\n11+ 72 + 53 = 1+ 49 + 125 = 175\nA harshad number is a number that is divisible by the sum of its digits. E.g., the number 18 is a harshad number, because the\nsum of the digits 1 and 8 is 9 (1 + 8 = 9), and 18 is divisible by 9.\nGrading scheme:\n2 marks for writing correct code for checking Disarium number\n2 marks for writing correct code for checking Harshad number\n1 mark for writing correct code for only printing those numbers that are both, Disarium and Harshad numbers.",
      "marks": 5.0,
      "sourcePage": 13,
      "solution": "for n in range(1, 101):\n    disarium, digit_sum = 0, 0\n    for position, digit in enumerate(str(n), 1):\n        disarium += int(digit) ** position\n        digit_sum += int(digit)\n    if disarium == n and n % digit_sum == 0:\n        print(n, end=' ')",
      "explanation": "Disarium uses digit positions starting at 1; Harshad means divisible by the digit sum. Print only numbers passing both tests.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "1 2 3 4 5 6 7 8 9"
    },
    {
      "id": "S3-C175",
      "srNo": 175,
      "question": "Ask the user to enter 10 test scores. Write a program to do the following:\na) If user enters score greater than 100, then give warning to user that entered score is more than 100 and take that\ninput again from user. b) Print out the highest and lowest scores.\nc) Print out the average of the scores. d) Print out the second largest score.\ne) Drop the two lowest scores and print out the average of the rest of them.\nNote: Use of Python Data structures like string, list, tuple etc. and their inbuilt function is not allowed.\nFor Ex.\nIf Input is like following:\nEnter Test Score: 80\nEnter Test Score: 65\nEnter Test Score: 98\nEnter Test Score: 70\nEnter Test Score: 93\nEnter Test Score: 130\nEntered score is more than hundred, so enter again\nEnter Test Score: 95\nEnter Test Score: 50\nEnter Test Score: 40\nEnter Test Score: 75\nEnter Test Score: 72\nOutput should be:\nHighest Score is: 98\nLowest Score is: 40\nAverage Test Score is: 73.8\nSecond Largest Score is: 95\nAverage after dropping the two lowest scores: 81.0",
      "marks": 6.0,
      "sourcePage": 13,
      "solution": "total = 0\nlargest = second = None\nsmallest = second_smallest = None\ncount = 0\nwhile count < 10:\n    score = float(input('Test score (0-100): '))\n    if score < 0 or score > 100:\n        print('Invalid score; enter again')\n        continue\n    total += score\n    if largest is None or score > largest:\n        second, largest = largest, score\n    elif second is None or score > second:\n        second = score\n    if smallest is None or score < smallest:\n        second_smallest, smallest = smallest, score\n    elif second_smallest is None or score < second_smallest:\n        second_smallest = score\n    count += 1\nprint('Highest:', largest)\nprint('Lowest:', smallest)\nprint('Average:', total / 10)\nprint('Second largest:', second)\nprint('Average after dropping two lowest:', (total - smallest - second_smallest) / 8)",
      "explanation": "Track the two largest and two smallest observations using scalar variables. Repeated scores count as separate observations. No list or sorting is used.",
      "topic": "Conditions and loops",
      "starterCode": "",
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
      "id": "S3-C176",
      "srNo": 176,
      "question": "Write a program to encode a number by changing the digits in the given positive integer by user. The rule for changing the\ndigits in number will be:\nIf the digit in number is between 0 to 8 than replace the number with 1 to 9 respectively. (incrementing each digit by +1).\nIf the digit is 9, then replace it with 0.\nTo encode a number, replace digits in following manner:\nFor example:\nInput: 31590218\nOutput: The number after encoding is: 42601329\nFor example:\nInput: 9259\nOutput: The number after encoding is: 360\nFor example:\nInput: 65217001\nOutput: The number after encoding is: 76328112\nOriginal Digit in Number New Digit after Encoding\n0 1\n1 2\n2 3\n3 4\n4 5\n5 6\n6 7\n7 8\n8 9\n9 0\nNote: Use of Python Data structures like string, list, tuple etc. and their inbuilt function is not allowed.",
      "marks": 5.0,
      "sourcePage": 14,
      "solution": "n = int(input('Nonnegative integer: '))\nif n < 0:\n    raise ValueError('Use a nonnegative integer')\nif n == 0:\n    result = 1\nelse:\n    result, place = 0, 1\n    while n:\n        digit = n % 10\n        result += ((digit + 1) % 10) * place\n        place *= 10\n        n //= 10\nprint('Encoded:', result)",
      "explanation": "Extract digits arithmetically. (digit + 1) % 10 maps 9 to 0 and all other digits to the next digit. An integer result omits leading zeros; 9259 becomes 360.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "9259"
      ],
      "exampleOutput": "Encoded: 360"
    },
    {
      "id": "S3-C177",
      "srNo": 177,
      "question": "Write a python program to swap first and last digits of a number using loop.\n(for example: input = 123456 then output=623451)",
      "marks": 5.0,
      "sourcePage": 14,
      "solution": "n = int(input('Nonnegative integer: '))\nif n < 0:\n    raise ValueError('Use a nonnegative integer')\nplace = 1\nwhile n // place >= 10:\n    place *= 10\nif place == 1:\n    print(n)\nelse:\n    first, last = n // place, n % 10\n    middle = (n % place) // 10\n    print(last * place + middle * 10 + first)",
      "explanation": "Find the highest power of ten, retain the middle digits and exchange the end digits. One-digit values remain unchanged.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "123456"
      ],
      "exampleOutput": "623451"
    },
    {
      "id": "S3-C178",
      "srNo": 178,
      "question": "Print the following pattern using loop",
      "marks": 4.0,
      "sourcePage": 14,
      "figures": [
        "figures/q178-p14-1.png"
      ],
      "solution": "n = 5\nfor row in list(range(1, n + 1)) + list(range(n - 1, 0, -1)):\n    print('* ' * row + '  ' * (2 * (n - row)) + '* ' * row)",
      "explanation": "The butterfly has 5 increasing rows followed by 4 decreasing rows. Each side has row stars; the middle gap shrinks and then expands.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleOutput": "*                 * \n* *             * * \n* * *         * * * \n* * * *     * * * * \n* * * * * * * * * * \n* * * *     * * * * \n* * *         * * * \n* *             * * \n*                 *"
    },
    {
      "id": "S3-C179",
      "srNo": 179,
      "question": "Write a program to implement the calculator for the date of Easter.\nThe following algorithm computes the date for Easter Sunday for any year between 1900 to 2099.\nAsk the user to enter a year. Compute the following:\n1. a = year % 19\n2. b = year % 4\n3. c = year % 7\n4. d = (19 * a + 24) % 30\n5. e = (2 * b + 4 * c + 6 * d + 5) % 7\n6. dateofeaster = 22 + d + e\nSpecial note: The algorithm can give a date in April. You will know that the date is in April if the calculation gives you an\nanswer greater than 31. (You’ll need to adjust) Also, if the year is one of four special years (1954, 1981, 2049, or 2076) then\nsubtract 7 from the date.\nEg:\nInput: Year : 2022\nExpected Outcome: 2022-04-17 (i.e. 17th April 2022)",
      "marks": 6.0,
      "sourcePage": 14,
      "solution": "year = int(input('Year (1900-2099): '))\nif not 1900 <= year <= 2099:\n    raise ValueError('Year outside the specified range')\na, b, c = year % 19, year % 4, year % 7\nd = (19 * a + 24) % 30\ne = (2 * b + 4 * c + 6 * d + 5) % 7\nday = 22 + d + e\nif year in (1954, 1981, 2049, 2076):\n    day -= 7\nmonth = 3\nif day > 31:\n    day -= 31\n    month = 4\nprint(f'{year:04d}-{month:02d}-{day:02d}')",
      "explanation": "Follow the supplied algorithm, apply its exceptional-year correction, and convert dates beyond March 31 to April. 2022 gives 2022-04-17.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "2022"
      ],
      "exampleOutput": "2022-04-17"
    },
    {
      "id": "S3-C180",
      "srNo": 180,
      "question": "Write a Python program to compute the greatest common divisor (GCD) of two positive integers.\nThe greatest common divisor (GCD) of two nonzero integers a and b is the greatest positive integer d such that d is a divisor\nof both a and b; that is, there are integers e and f such that a = de and b = df, and d is the largest such integer. The GCD of a\nand b is generally denoted gcd(a, b).\nFor example, the greatest common factor of 15 and 10 is 5, since both the numbers can be divided by 5.",
      "marks": 4.0,
      "sourcePage": 14,
      "solution": "a = abs(int(input('a: ')))\nb = abs(int(input('b: ')))\nwhile b:\n    a, b = b, a % b\nprint('GCD =', a)",
      "explanation": "Euclid’s algorithm replaces (a, b) with (b, a % b) until the remainder is zero.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "15",
        "10"
      ],
      "exampleOutput": "GCD = 5"
    },
    {
      "id": "S3-C181",
      "srNo": 181,
      "question": "Write a python program that prompts the user to enter numbers and stops only when the use enter “QUIT” . After this print\nsum and average of the numbers, minimum and maximum number from given numbers entered by user.\nNote: you are not allowed to use any built in structures like, list ,tuple etc. or any builtin function like min, max etc.\nFor Example: Input: 4,1,5,”QUIT”\nOutput:\nSum=10\nAverage=3.333\nMinimum number=1\nMaximum number=5",
      "marks": 4.0,
      "sourcePage": 14,
      "solution": "total, count = 0, 0\nminimum = maximum = None\nwhile True:\n    value = input('Number or QUIT: ')\n    if value == 'QUIT':\n        break\n    number = float(value)\n    total += number\n    count += 1\n    if minimum is None or number < minimum: minimum = number\n    if maximum is None or number > maximum: maximum = number\nif count:\n    print('Sum:', total, 'Average:', total / count)\n    print('Minimum:', minimum, 'Maximum:', maximum)\nelse:\n    print('No numbers entered')",
      "explanation": "Use scalar accumulators and compare each new value with the current minimum and maximum. Avoid division by zero when no values are entered.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "4",
        "1",
        "5",
        "QUIT"
      ],
      "exampleOutput": "Sum: 10.0 Average: 3.3333333333333335\nMinimum: 1.0 Maximum: 5.0"
    },
    {
      "id": "S3-C182",
      "srNo": 182,
      "question": "A hotel offers studio and apartment rooms. Calculate the total rent for the entered month and number of nights (1-30). January-April: studio $50/night, apartment $60/night. May-August: studio $70/night, apartment $80/night. September-December: studio $80/night, apartment $90/night. Studio discounts for >3 nights: 20%, 10%, 5% by season; for >7 nights: 30%, 20%, 10%. Apartment discount: 10% for >7 nights in any month. Example: May, 5 nights -> studio $315, apartment $400.",
      "marks": 6.0,
      "sourcePage": 15,
      "figures": [
        "figures/q182-p15-1.png"
      ],
      "solution": "month = int(input('Month (1-12): '))\nnights = int(input('Nights (1-30): '))\nif not 1 <= month <= 12 or not 1 <= nights <= 30:\n    raise ValueError('Invalid month or nights')\nif month <= 4:\n    studio, apartment = 50, 60\n    discount = 0.30 if nights > 7 else 0.20 if nights > 3 else 0\nelif month <= 8:\n    studio, apartment = 70, 80\n    discount = 0.20 if nights > 7 else 0.10 if nights > 3 else 0\nelse:\n    studio, apartment = 80, 90\n    discount = 0.10 if nights > 7 else 0.05 if nights > 3 else 0\nprint('Studio rent:', studio * nights * (1 - discount))\nprint('Apartment rent:', apartment * nights * (0.90 if nights > 7 else 1))",
      "explanation": "Apply the month band first, then the studio discount by stay length. Apartments get 10% off only for more than 7 nights. May for 5 nights gives studio 315 and apartment 400 dollars.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "5",
        "5"
      ],
      "exampleOutput": "Studio rent: 315.0\nApartment rent: 400"
    },
    {
      "id": "S3-C183",
      "srNo": 183,
      "question": "Write a program that enters a single digit integer number and produces all possible 6-digit numbers for which the product of\ntheir digits is equal to the entered number.\nExample: \"number\" → 2\n• 111112 → 1 * 1 * 1 * 1 * 1 * 2 = 2\n• 111121 → 1 * 1 * 1 * 1 * 2 * 1 = 2\n• 111211 → 1 * 1 * 1 * 2 * 1 * 1 = 2\n• 112111 → 1 * 1 * 2 * 1 * 1 * 1 = 2\n• 121111 → 1 * 2 * 1 * 1 * 1 * 1 = 2\n• 211111 → 2 * 1 * 1 * 1 * 1 * 1 = 2",
      "marks": 4.0,
      "sourcePage": 15,
      "solution": "target = int(input('Single digit (0-9): '))\nif not 0 <= target <= 9:\n    raise ValueError('Enter a single digit')\nfor number in range(100000, 1000000):\n    temp, product = number, 1\n    while temp:\n        product *= temp % 10\n        temp //= 10\n    if product == target:\n        print(number)",
      "explanation": "Enumerate every six-digit integer and multiply its six digits. For target 2 the six results are the placements of one 2 among five 1s. Target zero produces many results.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "2"
      ],
      "exampleOutput": "111112\n111121\n111211\n112111\n121111\n211111"
    },
    {
      "id": "S3-C184",
      "srNo": 184,
      "question": "Write a Python program that prompts the user to enter numbers and stops only when the user enters “stop”. After this,\nprint the minimum even, maximum even, average of even number, minimum odd, maximum odd, average of odd number\nfrom among all the numbers entered by the user.\nNote: You are not allowed to use any built-in structures like lists, tuples, etc. or any built-in functions like max, min, sum\nExample: input and output\nenter number or q for'stop:'-1\nenter number or q for'stop:'-5\nenter number or q for'stop:'9\nenter number or q for'stop:'2\nenter number or q for'stop:'4\nenter number or q for'stop:'6\nenter number or q for'stop:'stop\nOutput:\nfor even 6 2 4.0 (max, min, avg)\nfor odd 9 -5 1.0 (max, min, avg)",
      "marks": 5.0,
      "sourcePage": 15,
      "solution": "even_sum = odd_sum = even_count = odd_count = 0\neven_min = even_max = odd_min = odd_max = None\nwhile True:\n    value = input('Integer or stop: ')\n    if value == 'stop': break\n    n = int(value)\n    if n % 2 == 0:\n        even_sum += n\n        even_count += 1\n        if even_min is None or n < even_min: even_min = n\n        if even_max is None or n > even_max: even_max = n\n    else:\n        odd_sum += n\n        odd_count += 1\n        if odd_min is None or n < odd_min: odd_min = n\n        if odd_max is None or n > odd_max: odd_max = n\nif even_count: print('Even max, min, average:', even_max, even_min, even_sum / even_count)\nelse: print('No even numbers')\nif odd_count: print('Odd max, min, average:', odd_max, odd_min, odd_sum / odd_count)\nelse: print('No odd numbers')",
      "explanation": "Keep separate scalar totals, counts and extrema for even and odd numbers. Negative odd numbers also have a nonzero remainder modulo 2.",
      "topic": "Conditions and loops",
      "starterCode": "",
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
    },
    {
      "id": "S3-C185",
      "srNo": 185,
      "question": "You are required to write a Python program to calculate a complete travel package for a family/group of travellers, similar\nto an online travel aggregator like Trivago.\nYour program should:\nAccept the number of travellers (family/group size).\nAllow the group to select one common package by choosing:\nDestination (with base prices):\nGoa → ₹20,000\nKerala → ₹22,000\nManali → ₹18,000\nJaipur → ₹15,000\nTravel Mode:\nFlight → ₹8,000\nTrain AC → ₹3,000\nTrain Non-AC → ₹1,500\nHotel Type and Number of Nights:\n5-Star → ₹5,000 per night\n3-Star → ₹3,000 per night\nBudget → ₹1,500 per night\nMeal Plan:\nFull Meals → ₹4,000\nBreakfast Only → ₹2,000\nNo Meals → ₹0\nSightseeing Add-on → ₹3,500 if Yes, ₹0 if No\nTravel Month → If peak month (Dec or May), add 30% seasonal surcharge on (Base + Travel cost)\nCalculate Per-Person Cost:\nTotal = Base Price + Travel Cost + Hotel Cost + Food Cost + Sightseeing + Seasonal Surcharge\nApply Discounts (Per Person):\nTotal ≥ ₹50,000 → 10% discount\nTotal ≥ ₹40,000 → 7% discount\nOtherwise → No discount\nAdd GST:\nGST = 18% of total after discount\nFinal Output:\nShow detailed cost breakdown per person (Base, Travel, Hotel, Food, Sightseeing, Seasonal Surcharge, Discount, GST, Final\nPrice).\nMultiply per-person final cost by the number of travellers to display the Total Family/Group Package Price.\nNote: You are not allowed to use following built-in structures -\nstring, list, tuple, dictionary and set.\nbuilt-in functions -\nlen, min, max, sum. Also, not allowed to use any in-built module or library except math.\nInput:\n=== Trivago-style Travel Package Calculator ===\nEnter number of travelers: 3\nDestinations: 1=Goa (₹20,000), 2=Kerala (₹22,000), 3=Manali (₹18,000), 4=Jaipur (₹15,000)\nEnter destination choice (1-4): 2\nTravel Modes: 1=Flight (₹8000), 2=Train AC (₹3000), 3=Train Non-AC (₹1500)\nEnter travel choice (1-3): 1\nHotels: 1=5-Star, 2=3-Star, 3=Budget\nEnter hotel choice (1-3): 3\nEnter number of nights: 4\nFood Plan: 1=Full Meals (₹4000), 2=Breakfast Only (₹2000), 3=None (₹0)\nEnter food plan (1-3): 1\nSightseeing Add-on? (Y/N): N\nTravel Month (Jan-Dec): Dec\n--- Full Package Details ---\nDestination: Kerala\nTravel Mode: Flight\nHotel Type: Budget for 4 nights\nFood Plan: Full Meals\nSightseeing: Not Included\nTravel Month: Dec\n--- Cost Breakdown (Per Person) ---\nBase Price = 22000\nTravel Cost = 8000 Hotel Cost = 6000\nFood Cost = 4000 Sightseeing Cost = 0\nSeasonal Surcharge = 9000.0\nTotal Before Discount = 49000.0\nDiscount = 3430.0000000000005\nGST (18%) = 8202.6\nFinal Package Price Per Person = 53772.6\n=== Total Package Price for 3 Travelers = 161317.8 ===",
      "marks": 9.0,
      "sourcePage": 16,
      "solution": "travellers = int(input('Travellers: '))\ndestination = int(input('Destination: 1 Goa, 2 Kerala, 3 Manali, 4 Jaipur: '))\ntravel = int(input('Travel: 1 Flight, 2 Train AC, 3 Train Non-AC: '))\nhotel = int(input('Hotel: 1 Five-star, 2 Three-star, 3 Budget: '))\nnights = int(input('Nights: '))\nfood = int(input('Food: 1 Full, 2 Breakfast, 3 None: '))\nsightseeing = int(input('Sightseeing: 1 Yes, 0 No: '))\nmonth = int(input('Month (1-12): '))\nif travellers < 1 or nights < 1 or not 1 <= month <= 12 or not 0 <= sightseeing <= 1:\n    raise ValueError('Invalid input')\nif destination == 1: base = 20000\nelif destination == 2: base = 22000\nelif destination == 3: base = 18000\nelif destination == 4: base = 15000\nelse: raise ValueError('Invalid destination')\nif travel == 1: travel_cost = 8000\nelif travel == 2: travel_cost = 3000\nelif travel == 3: travel_cost = 1500\nelse: raise ValueError('Invalid travel mode')\nif hotel == 1: hotel_cost = 5000 * nights\nelif hotel == 2: hotel_cost = 3000 * nights\nelif hotel == 3: hotel_cost = 1500 * nights\nelse: raise ValueError('Invalid hotel')\nif food == 1: food_cost = 4000\nelif food == 2: food_cost = 2000\nelif food == 3: food_cost = 0\nelse: raise ValueError('Invalid food plan')\nsight_cost = 3500 * sightseeing\nseasonal = 0.30 * (base + travel_cost) if month == 5 or month == 12 else 0\ntotal = base + travel_cost + hotel_cost + food_cost + sight_cost + seasonal\ndiscount = total * (0.10 if total >= 50000 else 0.07 if total >= 40000 else 0)\ngst = (total - discount) * 0.18\nfinal = total - discount + gst\nprint('Base:', base, 'Travel:', travel_cost, 'Hotel:', hotel_cost)\nprint('Food:', food_cost, 'Sightseeing:', sight_cost, 'Seasonal:', seasonal)\nprint('Before discount:', total, 'Discount:', discount, 'GST:', gst)\nprint('Final per person:', round(final, 2))\nprint('Family total:', round(final * travellers, 2))",
      "explanation": "Use numeric menu choices to avoid string data processing and prohibited containers. Add seasonal surcharge only to base plus travel, then apply discount and GST in that order. The supplied Kerala example gives 53772.60 per person.",
      "topic": "Conditions and loops",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "2",
        "1",
        "3",
        "4",
        "1",
        "0",
        "12"
      ],
      "exampleOutput": "Base: 22000 Travel: 8000 Hotel: 6000\nFood: 4000 Sightseeing: 0 Seasonal: 9000.0\nBefore discount: 49000.0 Discount: 3430.0000000000005 GST: 8202.6\nFinal per person: 53772.6\nFamily total: 161317.8"
    }
  ]
};
