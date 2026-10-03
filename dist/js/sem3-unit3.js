// Full SEM III unit 3; question numbers match the 2026 source PDF.
var SEM3_UNIT_3 = {
  "unit": 3,
  "title": "Unit 3 — Functions",
  "mcqs": [
    {
      "id": "S3-186",
      "srNo": 186,
      "question": "What is the output of the following function call?\ndef fun1(name, age=20):\n  print(name, age)\nfun1('Emma', 25)",
      "marks": 1.0,
      "sourcePage": 16,
      "options": [
        "Emma 25",
        "Emma 20",
        "Emma, 25",
        "Emma, 20"
      ],
      "answer": "A",
      "correct": "Emma 25",
      "trace": {
        "code": "def fun1(name, age=20):\n  print(name, age)\nfun1('Emma', 25)",
        "output": "Emma 25\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-187",
      "srNo": 187,
      "question": "What will be the output of the following Python code?\na=10\nb=20\ndef change():\n  global b\n  a=45\n  b=56\nchange()\nprint(a)\nprint(b)",
      "marks": 1.0,
      "sourcePage": 16,
      "options": [
        "10\n56",
        "45\n56",
        "10\n20",
        "Syntax Error"
      ],
      "answer": "A",
      "correct": "10\n56",
      "trace": {
        "code": "a=10\nb=20\ndef change():\n  global b\n  a=45\n  b=56\nchange()\nprint(a)\nprint(b)",
        "output": "10\n56\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-188",
      "srNo": 188,
      "question": "What will be the output of the following Python code?\ndef display(b, n):\n  while n > 0:\n    print(b,end=\"\")\n    n=n-1\ndisplay('z',3)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "zzz",
        "zz",
        "An exception is executed",
        "Infinite Loop"
      ],
      "answer": "A",
      "correct": "zzz",
      "trace": {
        "code": "def display(b, n):\n  while n > 0:\n    print(b,end=\"\")\n    n=n-1\ndisplay('z',3)",
        "output": "zzz",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-189",
      "srNo": 189,
      "question": "What will be the output of the following Python code?\ndef fun(x,y,z):\n  return x + y + z\nprint(fun(2,30,400))",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "432",
        "24000",
        "430",
        "No output"
      ],
      "answer": "A",
      "correct": "432",
      "trace": {
        "code": "def fun(x,y,z):\n  return x + y + z\nprint(fun(2,30,400))",
        "output": "432\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-190",
      "srNo": 190,
      "question": "What will be the output of the following Python code?\ndef func():\n  global value\n  value = \"Local\"\nvalue = \"Global\"\nfunc()\nprint(value)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "Local",
        "Global",
        "None",
        "Error"
      ],
      "answer": "A",
      "correct": "Local",
      "trace": {
        "code": "def func():\n  global value\n  value = \"Local\"\nvalue = \"Global\"\nfunc()\nprint(value)",
        "output": "Local\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-191",
      "srNo": 191,
      "question": "What will be the output of the following Python code?\ndef say(message, times = 1):\n  print(message * times)\nsay('Hello')\nsay('World', 5)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "Hello\nWorldWorldWorldWorldWorld",
        "Hello\nWorld 5",
        "Hello\nWorld,World,World,World,World",
        "Hello\nHelloHelloHelloHelloHello"
      ],
      "answer": "A",
      "correct": "Hello\nWorldWorldWorldWorldWorld",
      "trace": {
        "code": "def say(message, times = 1):\n  print(message * times)\nsay('Hello')\nsay('World', 5)",
        "output": "Hello\nWorldWorldWorldWorldWorld\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-192",
      "srNo": 192,
      "question": "What will be the output of the following Python code?\ndef sub(a,b):\n  print(a-b)\nsub(100,200)\nsub(200,100)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "-100\n100",
        "100\n100",
        "100\n-100",
        "-100\n-100"
      ],
      "answer": "A",
      "correct": "-100\n100",
      "trace": {
        "code": "def sub(a,b):\n  print(a-b)\nsub(100,200)\nsub(200,100)",
        "output": "-100\n100\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-193",
      "srNo": 193,
      "question": "What will be the output of the following Python code?\nx = 50\ndef func(x):\n  print('x is', x)\n  x = 2\n  print('Changed local x to', x)\nfunc(x)\nprint('x is now', x)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "x is 50\nChanged local x to 2\nx is now 50",
        "x is 50\nChanged local x to 2\nx is now 2",
        "x is 50\nChanged local x to 2\nx is now 100",
        "None of the mentioned"
      ],
      "answer": "A",
      "correct": "x is 50\nChanged local x to 2\nx is now 50",
      "trace": {
        "code": "x = 50\ndef func(x):\n  print('x is', x)\n  x = 2\n  print('Changed local x to', x)\nfunc(x)\nprint('x is now', x)",
        "output": "x is 50\nChanged local x to 2\nx is now 50\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-194",
      "srNo": 194,
      "question": "What will be the output of the following Python code?\ndef C2F(c):\n  return c * 9/5 + 32\nprint(C2F(100))\nprint(C2F(0))",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "212\n32",
        "212.0\n32.0",
        "567\n98",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "212.0\n32.0",
      "trace": {
        "code": "def C2F(c):\n  return c * 9/5 + 32\nprint(C2F(100))\nprint(C2F(0))",
        "output": "212.0\n32.0\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-195",
      "srNo": 195,
      "question": "What will be the output of the following Python code?\ndef function1(var1=5, var2=7):\n  var2=9\n  var1=3\n  print (var1, \" \", var2)\nfunction1(10,12)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "5 7",
        "3 9",
        "10 12",
        "Error"
      ],
      "answer": "B",
      "correct": "3 9",
      "trace": {
        "code": "def function1(var1=5, var2=7):\n  var2=9\n  var1=3\n  print (var1, \" \", var2)\nfunction1(10,12)",
        "output": "3   9\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-196",
      "srNo": 196,
      "question": "What will be the output of the following Python code?\ndef maximum(x, y):\n  if x > y:\n    return x\n  elif x == y:\n    return 'The numbers are equal'\n  else:\n    return y\nprint(maximum(2, 3))",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "2",
        "3",
        "The numbers are equal",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "3",
      "trace": {
        "code": "def maximum(x, y):\n  if x > y:\n    return x\n  elif x == y:\n    return 'The numbers are equal'\n  else:\n    return y\nprint(maximum(2, 3))",
        "output": "3\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-197",
      "srNo": 197,
      "question": "What will be the output of the following Python code?\ndef power(x, y=2):\n  r = 1\n  for i in range(y):\n    r = r * x\n  return r\nprint(power(3))\nprint(power(3,3))",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "212\n32",
        "9\n27",
        "567\n98",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "9\n27",
      "trace": {
        "code": "def power(x, y=2):\n  r = 1\n  for i in range(y):\n    r = r * x\n  return r\nprint(power(3))\nprint(power(3,3))",
        "output": "9\n27\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-198",
      "srNo": 198,
      "question": "What will be the output of the following Python code?\nx = 50\ndef func():\n  global x\n  print('x is', x)\n  x = 2\n  print('Changed global x to', x)\nfunc()\nprint('Value of x is', x)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "x is 50\nChanged global x to 2\nValue of x is 50",
        "x is 50\nChanged global x to 2\nValue of x is 2",
        "x is 50\nChanged global x to 50\nValue of x is 50",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "x is 50\nChanged global x to 2\nValue of x is 2",
      "trace": {
        "code": "x = 50\ndef func():\n  global x\n  print('x is', x)\n  x = 2\n  print('Changed global x to', x)\nfunc()\nprint('Value of x is', x)",
        "output": "x is 50\nChanged global x to 2\nValue of x is 2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-199",
      "srNo": 199,
      "question": "What is the output of the add() function call?\ndef add(a, b):\n  return a+5, b+5\nresult = add(3, 2)\nprint(result)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "15",
        "8",
        "(8,7)",
        "Syntax Error"
      ],
      "answer": "C",
      "correct": "(8,7)",
      "trace": {
        "code": "def add(a, b):\n  return a+5, b+5\nresult = add(3, 2)\nprint(result)",
        "output": "(8, 7)\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-200",
      "srNo": 200,
      "question": "What will be the output of the following Python code?\ndef change(i = 1, j = 2):\n  i = i + j\n  j = j + 1\n  print(i, j)\nchange(j = 1, i = 2)",
      "marks": 1.0,
      "sourcePage": 17,
      "options": [
        "1 2",
        "3 3",
        "3 2",
        "An exception is thrown because of conflicting values"
      ],
      "answer": "C",
      "correct": "3 2",
      "trace": {
        "code": "def change(i = 1, j = 2):\n  i = i + j\n  j = j + 1\n  print(i, j)\nchange(j = 1, i = 2)",
        "output": "3 2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-201",
      "srNo": 201,
      "question": "What will be the output of the following Python code?\ndef cube(x):\n  return x*x*x\nx = cube(3)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "9",
        "3",
        "27",
        "30"
      ],
      "answer": "C",
      "correct": "27",
      "trace": {
        "code": "def cube(x):\n  return x*x*x\nx = cube(3)\nprint(x)",
        "output": "27\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-202",
      "srNo": 202,
      "question": "What will be the output of the following Python code?\ndef func(a, b=5, c=10):\n  print('a is', a, 'and b is', b, 'and c is', c)\nfunc(3, 7)\nfunc(25, c = 24)\nfunc(c = 50, a = 100)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "a is 7 and b is 3 and c is 10\na is 25 and b is 5 and c is 24\na is 5 and b is 100 and c is 50",
        "a is 3 and b is 7 and c is 10\na is 5 and b is 25 and c is 24\na is 50 and b is 100 and c is 5",
        "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50",
        "None of the mentioned"
      ],
      "answer": "C",
      "correct": "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50",
      "trace": {
        "code": "def func(a, b=5, c=10):\n  print('a is', a, 'and b is', b, 'and c is', c)\nfunc(3, 7)\nfunc(25, c = 24)\nfunc(c = 50, a = 100)",
        "output": "a is 3 and b is 7 and c is 10\na is 25 and b is 5 and c is 24\na is 100 and b is 5 and c is 50\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-203",
      "srNo": 203,
      "question": "What will be the output of the following Python code?\ndef function1(var1,var2=5):\n  var1=2\n  var3=var1*var2\n  return var3\nvar1=3\nprint(function1(var1,var2))",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "10",
        "15",
        "Error as var2 is not defined while calling the function",
        "Does not give any error as var2 is a default argument"
      ],
      "answer": "C",
      "correct": "Error as var2 is not defined while calling the function",
      "trace": {
        "code": "def function1(var1,var2=5):\n  var1=2\n  var3=var1*var2\n  return var3\nvar1=3\nprint(function1(var1,var2))",
        "output": "",
        "error": "NameError: name 'var2' is not defined"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-204",
      "srNo": 204,
      "question": "What will be the output of the following Python code?\ndef printMax(a, b):\n  if a > b:\n    print(a, 'is maximum')\n  elif a == b:\n    print(a, 'is equal to', b)\n  else:\n    print(b, 'is maximum')\nprintMax(3, 4)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "3",
        "4",
        "4 is maximum",
        "None of the mentioned"
      ],
      "answer": "C",
      "correct": "4 is maximum",
      "trace": {
        "code": "def printMax(a, b):\n  if a > b:\n    print(a, 'is maximum')\n  elif a == b:\n    print(a, 'is equal to', b)\n  else:\n    print(b, 'is maximum')\nprintMax(3, 4)",
        "output": "4 is maximum\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-205",
      "srNo": 205,
      "question": "What will be the output of the following Python code?\ni=0\ndef change(i):\n  i=i+1\n  return i\nchange(1)\nprint(i)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "1",
        "Nothing is displayed",
        "0",
        "An exception is thrown"
      ],
      "answer": "C",
      "correct": "0",
      "trace": {
        "code": "i=0\ndef change(i):\n  i=i+1\n  return i\nchange(1)\nprint(i)",
        "output": "0\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-206",
      "srNo": 206,
      "question": "What is the output of the following function call?\ndef fun1(num):\n  return num + 25\nfun1(5)\nprint(num)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "25",
        "5",
        "30",
        "NameError"
      ],
      "answer": "D",
      "correct": "NameError",
      "trace": {
        "code": "def fun1(num):\n  return num + 25\nfun1(5)\nprint(num)",
        "output": "",
        "error": "NameError: name 'num' is not defined"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-207",
      "srNo": 207,
      "question": "What will be the last line of the output of the following Python code if test_fib(6) is called?\ndef fib(x):\n  global num_fib_calls\n  num_fib_calls += 1\n  if x == 0 or x == 1:\n    return 1\n  else:\n    return fib(x-1) + fib(x-2)\ndef test_fib(n):\n  for i in range(n+1):\n    global num_fib_calls\n    num_fib_calls = 0\n    print('fib of', i, '=', fib(i))\n    print('fib called', num_fib_calls, 'times.')",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "fib called 5 times",
        "fib called 10 times",
        "fib called 20 times",
        "fib called 25 times"
      ],
      "answer": "D",
      "correct": "fib called 25 times",
      "explanation": "Let calls(0)=calls(1)=1 and calls(n)=1+calls(n-1)+calls(n-2). This gives 1,1,3,5,9,15,25 for n=0 through 6."
    },
    {
      "id": "S3-208",
      "srNo": 208,
      "question": "What will be the output of the following Python code?\ndef f(p, q, r):\n  global s\n  p = 10\n  q = 20\n  r = 30\n  s = 40\n  print(p,q,r,s)\np,q,r,s = 1,2,3,4\nf(5,10,15)",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "10 20 30 40",
        "10 20 30 4",
        "1 2 3 40",
        "1 2 3 4"
      ],
      "answer": "A",
      "correct": "10 20 30 40",
      "trace": {
        "code": "def f(p, q, r):\n  global s\n  p = 10\n  q = 20\n  r = 30\n  s = 40\n  print(p,q,r,s)\np,q,r,s = 1,2,3,4\nf(5,10,15)",
        "output": "10 20 30 40\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-209",
      "srNo": 209,
      "question": "If number of arguments in function definition and function call does not match, then which type of error is returned?",
      "marks": 1.0,
      "sourcePage": 18,
      "options": [
        "NameError",
        "ImportError",
        "funError",
        "TypeError"
      ],
      "answer": "D",
      "correct": "TypeError",
      "explanation": "Missing required positional arguments or excess positional arguments normally cause TypeError. Defaults and *args can make differing counts valid."
    },
    {
      "id": "S3-210",
      "srNo": 210,
      "question": "What will be the output of the following Python code?\ndef power(x, y=3):\n  r = 1\n  for i in range(y):\n    r = r * x\n  return r\nprint(power(3),end=\" \")\nprint(power(3,3))",
      "marks": 0.5,
      "sourcePage": 18,
      "options": [
        "3 3",
        "9 9",
        "27 27",
        "9 27"
      ],
      "answer": "C",
      "correct": "27 27",
      "trace": {
        "code": "def power(x, y=3):\n  r = 1\n  for i in range(y):\n    r = r * x\n  return r\nprint(power(3),end=\" \")\nprint(power(3,3))",
        "output": "27 27\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-211",
      "srNo": 211,
      "question": "What will be the output of the following Python code?\ndef function1(var1=7,var2=5):\n  var1=2\n  var3=var1*var2\n  return var3\nvar2=6\nvar1=3\nprint(function1(var1,var2))",
      "marks": 0.5,
      "sourcePage": 18,
      "options": [
        "12",
        "10",
        "18",
        "25"
      ],
      "answer": "A",
      "correct": "12",
      "trace": {
        "code": "def function1(var1=7,var2=5):\n  var1=2\n  var3=var1*var2\n  return var3\nvar2=6\nvar1=3\nprint(function1(var1,var2))",
        "output": "12\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-212",
      "srNo": 212,
      "question": "What will be the output of the following Python code?\ndef fun(a=5,b=10,c):\n  print(a**2,b//a,c**1)\nfun(20,c=30)",
      "marks": 0.5,
      "sourcePage": 19,
      "options": [
        "400 1 5",
        "25 2 5",
        "400 2 30",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "explanation": "A required parameter c cannot follow parameters with defaults in this positional signature. Python rejects the function definition with SyntaxError."
    },
    {
      "id": "S3-213",
      "srNo": 213,
      "question": "What will be the output of the following python code?\ncar=20\nbike=10\ncycle=30\ndef new_Pur():\n  global bike,cycle\n  car=30\n  bike=20\n  cycle=50\nnew_Pur()\nprint(car+10,\" \",bike+5,\" \",cycle+5)",
      "marks": 0.5,
      "sourcePage": 19,
      "options": [
        "30 15 35",
        "30 25 55",
        "30 25 35",
        "20 25 55"
      ],
      "answer": "B",
      "correct": "30 25 55",
      "trace": {
        "code": "car=20\nbike=10\ncycle=30\ndef new_Pur():\n  global bike,cycle\n  car=30\n  bike=20\n  cycle=50\nnew_Pur()\nprint(car+10,\" \",bike+5,\" \",cycle+5)",
        "output": "30   25   55\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-214",
      "srNo": 214,
      "question": "What will be the output of the following Python code?\ndef f():\n  print(x,end=\" \")\n  return y\ndef f():\n  print(y,end=\" \")\n  return\nx=5\ny=4\nprint(f())",
      "marks": 1.0,
      "sourcePage": 19,
      "options": [
        "4 None",
        "5 4",
        "4 5",
        "5"
      ],
      "answer": "A",
      "correct": "4 None",
      "trace": {
        "code": "def f():\n  print(x,end=\" \")\n  return y\ndef f():\n  print(y,end=\" \")\n  return\nx=5\ny=4\nprint(f())",
        "output": "4 None\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    }
  ],
  "coding": [
    {
      "id": "S3-C215",
      "srNo": 215,
      "question": "Create a pair of functions to convert Fahrenheit to Celsius temperature values and vice versa. Where C = (F - 32) * (5 / 9)",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def to_celsius(f):\n    return (f - 32) * 5 / 9\ndef to_fahrenheit(c):\n    return c * 9 / 5 + 32\nprint(to_celsius(float(input('Fahrenheit: '))))\nprint(to_fahrenheit(float(input('Celsius: '))))",
      "explanation": "Each function returns a conversion. 32 F is 0 C and 100 C is 212 F.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "32",
        "100"
      ],
      "exampleOutput": "0.0\n212.0"
    },
    {
      "id": "S3-C216",
      "srNo": 216,
      "question": "Write a Python function to calculate the factorial of a given number.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def factorial(n):\n    if n < 0:\n        raise ValueError('Factorial requires a nonnegative integer')\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(int(input('n: '))))",
      "explanation": "Multiply integers from 1 to n. The product starts at 1, so 0! is 1. A function returns the product for reuse.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "5"
      ],
      "exampleOutput": "120"
    },
    {
      "id": "S3-C217",
      "srNo": 217,
      "question": "Write a Python function to check whether a number is in a given range.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def in_range(n, start, end):\n    return start <= n <= end\nn = float(input('Number: '))\na = float(input('Start: '))\nb = float(input('End: '))\nprint(in_range(n, a, b))",
      "explanation": "This solution includes both endpoints. Use start <= n < end for Python range-style bounds.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "1",
        "5"
      ],
      "exampleOutput": "True"
    },
    {
      "id": "S3-C218",
      "srNo": 218,
      "question": "Write a Python function to display the Fibonacci sequence till the given user input n.",
      "marks": 4.0,
      "sourcePage": 19,
      "solution": "def fibonacci(n):\n    a, b = 0, 1\n    while a <= n:\n        print(a, end=' ')\n        a, b = b, a + b\nfibonacci(int(input('Maximum value: ')))",
      "explanation": "Here till n means terms whose value does not exceed n. Both occurrences of 1 are printed; for 10: 0 1 1 2 3 5 8.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "10"
      ],
      "exampleOutput": "0 1 1 2 3 5 8"
    },
    {
      "id": "S3-C219",
      "srNo": 219,
      "question": "Write a Python function to find the Max of TWO numbers.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def maximum(a, b):\n    return a if a >= b else b\nprint(maximum(float(input('First: ')), float(input('Second: '))))",
      "explanation": "Compare the two values and return the larger one.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "2",
        "5"
      ],
      "exampleOutput": "5.0"
    },
    {
      "id": "S3-C220",
      "srNo": 220,
      "question": "Write a Python program to accept two numbers and check it for odd or even number",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def parity(n):\n    return 'Even' if n % 2 == 0 else 'Odd'\nfor _ in range(2):\n    n = int(input('Number: '))\n    print(n, parity(n))",
      "explanation": "Call the parity function once for each of the two numbers.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "4"
      ],
      "exampleOutput": "3 Odd\n4 Even"
    },
    {
      "id": "S3-C221",
      "srNo": 221,
      "question": "Write a Python program to check whether the given no is Armstrong or not using user defined function.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def is_armstrong(n):\n    if n < 0:\n        return False\n    digits = len(str(n))\n    temp, total = n, 0\n    while temp:\n        total += (temp % 10) ** digits\n        temp //= 10\n    return total == n\n\nn = int(input('Number: '))\nprint('Armstrong' if is_armstrong(n) else 'Not Armstrong')",
      "explanation": "For d digits, sum each digit raised to d. Compare with the original number. 153 = 1**3 + 5**3 + 3**3; zero is also Armstrong.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "153"
      ],
      "exampleOutput": "Armstrong"
    },
    {
      "id": "S3-C222",
      "srNo": 222,
      "question": "Write a python program to demonstarte a function to print the number 1 to 5.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def show_numbers():\n    for n in range(1, 6):\n        print(n)\nshow_numbers()",
      "explanation": "Define the function, then call it; defining alone does not print anything.",
      "topic": "Functions",
      "starterCode": "",
      "exampleOutput": "1\n2\n3\n4\n5"
    },
    {
      "id": "S3-C223",
      "srNo": 223,
      "question": "Write a Python Program to demonstarte a Simple Calculator using python functions",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def add(a, b): return a + b\ndef subtract(a, b): return a - b\ndef multiply(a, b): return a * b\ndef divide(a, b):\n    if b == 0: raise ValueError('Cannot divide by zero')\n    return a / b\n\na = float(input('First: '))\nb = float(input('Second: '))\nop = input('Operator + - * /: ')\noperations = {'+':add, '-':subtract, '*':multiply, '/':divide}\nif op in operations: print(operations[op](a, b))\nelse: print('Invalid operator')",
      "explanation": "Store function references in a dispatch dictionary. Select a function by operator and call it with the operands.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "8",
        "2",
        "/"
      ],
      "exampleOutput": "4.0"
    },
    {
      "id": "S3-C224",
      "srNo": 224,
      "question": "Write a Python program to demonstrate the function of finding sum and average of first n natural numbers.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def sum_average(n):\n    if n < 1: raise ValueError('n must be positive')\n    total = n * (n + 1) // 2\n    return total, total / n\nprint('Sum and average:', sum_average(int(input('n: '))))",
      "explanation": "The sum 1 + ... + n is n(n+1)/2; average is the sum divided by n.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "10"
      ],
      "exampleOutput": "Sum and average: (55, 5.5)"
    },
    {
      "id": "S3-C225",
      "srNo": 225,
      "question": "Write a Python program to demonstrate the function of finding multiplication of first n natural numbers.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def factorial(n):\n    if n < 0:\n        raise ValueError('Factorial requires a nonnegative integer')\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(int(input('n: '))))",
      "explanation": "Multiply integers from 1 to n. The product starts at 1, so 0! is 1. A function returns the product for reuse.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "5"
      ],
      "exampleOutput": "120"
    },
    {
      "id": "S3-C226",
      "srNo": 226,
      "question": "Write a Python program to find reverse of given number using user defined function.",
      "marks": 3.0,
      "sourcePage": 19,
      "solution": "def reverse_number(n):\n    sign = -1 if n < 0 else 1\n    n, result = abs(n), 0\n    while n:\n        result = result * 10 + n % 10\n        n //= 10\n    return sign * result\nprint(reverse_number(int(input('Number: '))))",
      "explanation": "Place the arithmetic reversal in a reusable function.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "12340"
      ],
      "exampleOutput": "4321"
    },
    {
      "id": "S3-C227",
      "srNo": 227,
      "question": "Write your own python program for computing square roots that implements Newton’s Method. Use of inbuilt function,\nmath library or x**0.5 is not allowed.\nNewton Method is a category of guess-and-check approach. You first guess what the square root might be and then see\nhow close your guess is. You can use this information to make another guess and continue guessing until you have found the\nsquare root (or a close approximation to it). Suppose x is the number we want the root of and guess is the current guessed\nanswer. The guess can be improved by using (guess+ x/guess)/2 as the next guess.\nThe program should -\n1. Prompt the user for the value to find the square root of (x) and the number of times to improve the guess.\n2. Starting with a guess value of x/2, your program should loop the specified number of times applying Newton’s method\nand report the final value of guess.",
      "marks": 5.0,
      "sourcePage": 19,
      "solution": "x = float(input('Number: '))\niterations = int(input('Number of improvements: '))\nif x < 0 or iterations < 0:\n    raise ValueError('Use nonnegative values')\nif x == 0:\n    guess = 0\nelse:\n    guess = x / 2\n    for _ in range(iterations):\n        guess = (guess + x / guess) / 2\nprint('Approximate square root:', guess)",
      "explanation": "Apply Newton’s update exactly the requested number of times starting at x/2. Handle zero separately so x/guess does not divide by zero. No square-root library or exponent is used.",
      "topic": "Functions",
      "starterCode": "",
      "exampleInputs": [
        "9",
        "10"
      ],
      "exampleOutput": "Approximate square root: 3.0"
    }
  ]
};
