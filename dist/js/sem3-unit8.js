// Full SEM III unit 8; question numbers match the 2026 source PDF.
var SEM3_UNIT_8 = {
  "unit": 8,
  "title": "Unit 8 — Classes and exceptions",
  "mcqs": [
    {
      "id": "S3-506",
      "srNo": 506,
      "question": "Which is not a feature of OOP in general definitions?",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "Efficient Code",
        "Code reusability",
        "Modularity",
        "Duplicate data"
      ],
      "answer": "D",
      "correct": "Duplicate data",
      "explanation": "Encapsulation, inheritance and polymorphism are OOP features. Duplicating data is not an OOP objective."
    },
    {
      "id": "S3-507",
      "srNo": 507,
      "question": "_____ represents an entity in the real world with its identity and behaviour.",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "A method",
        "An object",
        "A class",
        "An operator"
      ],
      "answer": "B",
      "correct": "An object",
      "explanation": "An object is an instance with identity, state (attributes) and behavior (methods)."
    },
    {
      "id": "S3-508",
      "srNo": 508,
      "question": "What will be the output of the following Python code?\nclass test:\n   def __init__(self,a=\"Hello World\"):\n    self.a=a\n   def display(self):\n    print(self.a)\nobj=test()\nobj.display()",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "The program has an error because constructor\ncan’t have default arguments",
        "Nothing is displayed",
        "“Hello World” is displayed",
        "The program has an error display function doesn’t have\nparameters"
      ],
      "answer": "C",
      "correct": "“Hello World” is displayed",
      "trace": {
        "code": "class test:\n   def __init__(self,a=\"Hello World\"):\n    self.a=a\n   def display(self):\n    print(self.a)\nobj=test()\nobj.display()",
        "output": "Hello World\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-509",
      "srNo": 509,
      "question": "What will be the output of the following Python code?\nclass test:\n   def __init__(self,a):\n    self.a=a\n   def display(self):\n    print(self.a)\nobj=test()\nobj.display()",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "Runs normally, doesn’t display anything",
        "Displays 0, which is the automatic default value",
        "Error as one argument is required while creating the object",
        "Error as display function requires additional argument"
      ],
      "answer": "C",
      "correct": "Error as one argument is required while creating the object",
      "trace": {
        "code": "class test:\n   def __init__(self,a):\n    self.a=a\n   def display(self):\n    print(self.a)\nobj=test()\nobj.display()",
        "output": "",
        "error": "TypeError: test.__init__() missing 1 required positional argument: 'a'"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-510",
      "srNo": 510,
      "question": "What is Instantiation in terms of OOP terminology?",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "Deleting an instance of class",
        "Modifying an instance of class",
        "Copying an instance of class",
        "Creating an instance of class"
      ],
      "answer": "D",
      "correct": "Creating an instance of class",
      "explanation": "Instantiation means creating an object from a class, normally by calling ClassName(...)."
    },
    {
      "id": "S3-511",
      "srNo": 511,
      "question": "Which of the following Python code creates an empty class?",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "class A:\nreturn",
        "class A:\npass",
        "class A:",
        "It is not possible to create an empty class"
      ],
      "answer": "B",
      "correct": "class A:\npass",
      "explanation": "pass is a placeholder that supplies the required class body without adding behavior."
    },
    {
      "id": "S3-512",
      "srNo": 512,
      "question": "Which of the following is False with respect Python code?\nclass Student:\n def __init__(self,id,age):\n  self.id=id\n  self.age=age\nstd=Student(1,20)",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "\"std\" is the reference variable for object\nStudent(1,20)",
        "id and age are called the parameters",
        "Every class must have a constructor",
        "None of the above"
      ],
      "answer": "C",
      "correct": "Every class must have a constructor",
      "explanation": "A class does not have to define its own __init__; it may use an inherited initializer."
    },
    {
      "id": "S3-513",
      "srNo": 513,
      "question": "What will be the output of below Python code?\nclass Student:\n def __init__(self,name,id):\n  self.name=name\n  self.id=id\n  print(self.id)\nstd=Student(\"Simon\",1)\nstd.id=2\nprint(std.id)",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "1\n1",
        "1\n2",
        "2\n1",
        "2\n2"
      ],
      "answer": "B",
      "correct": "1\n2",
      "trace": {
        "code": "class Student:\n def __init__(self,name,id):\n  self.name=name\n  self.id=id\n  print(self.id)\nstd=Student(\"Simon\",1)\nstd.id=2\nprint(std.id)",
        "output": "1\n2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-514",
      "srNo": 514,
      "question": "What will be the output of below Python code?\nclass A():\n def __init__(self,count=100):\n self.count=count\nobj1=A()\nobj2=A(102)\nprint(obj1.count)\nprint(obj2.count)",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "100\n100",
        "100\n102",
        "102\n102",
        "Error"
      ],
      "answer": "B",
      "correct": "100\n102",
      "explanation": "The first object uses the default count 100; the second explicitly supplies 102."
    },
    {
      "id": "S3-515",
      "srNo": 515,
      "question": "Which of the following is correct?\nclass A:\n  def __init__(self):\n    self.count=5\n    self.count=count+1\na=A()\nprint(a.count)",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "5",
        "6",
        "0",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "trace": {
        "code": "class A:\n  def __init__(self):\n    self.count=5\n    self.count=count+1\na=A()\nprint(a.count)",
        "output": "",
        "error": "NameError: name 'count' is not defined"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-516",
      "srNo": 516,
      "question": "What will be the output of below Python code?\nclass A:\n  def __init__(self,num):\n   num=3\n   self.num=num\n  def change(self):\n   self.num=7\na=A(5)\nprint(a.num)\na.change()\nprint(a.num)",
      "marks": 1.0,
      "sourcePage": 40,
      "options": [
        "5\n5",
        "5\n7",
        "3\n3",
        "3\n7"
      ],
      "answer": "D",
      "correct": "3\n7",
      "trace": {
        "code": "class A:\n  def __init__(self,num):\n   num=3\n   self.num=num\n  def change(self):\n   self.num=7\na=A(5)\nprint(a.num)\na.change()\nprint(a.num)",
        "output": "3\n7\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-517",
      "srNo": 517,
      "question": "What will be the output of the following code?                                                   class\nPoint:\n  def __init__(self):\n    self.x = 0\n    self.y = 0\np = Point()\nq = Point()\nprint(\"Nothing seems to have happened with the points\")",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "p\nq\nNothing seems to have happened with the points",
        "Nothing seems to have happened with the points",
        "<__main__.Point object>\n<__main__.Point object>\nNothing seems to have happened with the points",
        "(0,0)\n(0,0)\nNothing seems to have happened with the points"
      ],
      "answer": "B",
      "correct": "Nothing seems to have happened with the points",
      "explanation": "Two Point instances are created successfully. The explicit print writes the literal message; constructors need not produce output."
    },
    {
      "id": "S3-518",
      "srNo": 518,
      "question": "What will be the output of the following snippet?                                              class\nPoint:\n  def __init__(self):\n    self.x = 0\n    self.y = 0\np = Point()\nq = Point()\nprint(p)\nprint(q)\nprint(p is q)",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "<__main__.Point object>\n<__main__.Point object>\nTrue",
        "FALSE",
        "<__main__.Point object>\n<__main__.Point object>\nFalse",
        "(0,0)\n(0,0)\nFalse"
      ],
      "answer": "C",
      "correct": "<__main__.Point object>\n<__main__.Point object>\nFalse",
      "explanation": "Printing each ordinary instance gives its object representation, typically with a memory address. p is q is False because the two instances have different identities."
    },
    {
      "id": "S3-519",
      "srNo": 519,
      "question": "Will this program will print last statement?\ntry:\n  items = ['a', 'b']\n  third = items[1]\n  print(\"This won't print\")\nexcept Exception:\n  print(\"got an error\")\nprint(\"continuing\")",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "This won't print\ngot an error\ncontinuing",
        "got an error\ncontinuing",
        "This won't print\ncontinuing",
        "continuing"
      ],
      "answer": "C",
      "correct": "This won't print\ncontinuing",
      "explanation": "Index 1 exists and is b, so no exception occurs. Despite its wording, the first message is printed, followed by continuing."
    },
    {
      "id": "S3-520",
      "srNo": 520,
      "question": "What will be the output of this following snippet?\ntry:\n  items = ['a', 'b']\n  third = items[2]\n  print(\"This won't print\")\nexcept Exception as e:\n  print(\"got an error\")\n  print(e)\nprint(\"continuing\")",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "This won't print\ngot an error\ncontinuing",
        "got an error\ncontinuing",
        "got an error\nlist index out of range\ncontinuing",
        "continuing"
      ],
      "answer": "C",
      "correct": "got an error\nlist index out of range\ncontinuing",
      "explanation": "Index 2 is outside a two-item list. The except block prints the error and execution resumes at continuing."
    },
    {
      "id": "S3-521",
      "srNo": 521,
      "question": "Sanjeev has written a program for the file which already exists to read the content from the file. Indicate the line number if\nerror exists in the given below code:\na=False #Line 1\nwhile not a: #Line 2\n  try: #Line 3\n    f_n = input(\"Enter file name\") #Line 4\n    i_f = open(f_n, 'r') #Line 5\n  except: #Line 6\n    print(\"Input file not found\") #Line 7",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "No error",
        "Line 1",
        "Line 2",
        "Line 3"
      ],
      "answer": "A",
      "correct": "No error",
      "explanation": "The loop can retry file opening; a becomes True when the existing file opens successfully. There is no error in the stated scenario."
    },
    {
      "id": "S3-522",
      "srNo": 522,
      "question": "What will be output of the following code?\nA=25\nB=40\ntry:\n  L=[]\n  for i in range(2):\n    L.append(A)\n  print(L[3])\n  L.append(C)\n  iff len(L)<5:\n    print(L)\n  C=34\nexcept IndexError:\n  print(\"Not in range\")\nexcept NameError:\n  print(\"Not defined\")\nexcept SyntaxError:\n  print(\"Write properly\")",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "Write properly",
        "Not in range",
        "Both A&B",
        "SyntaxError"
      ],
      "answer": "D",
      "correct": "SyntaxError",
      "trace": {
        "code": "A=25\nB=40\ntry:\n  L=[]\n  for i in range(2):\n    L.append(A)\n  print(L[3])\n  L.append(C)\n  iff len(L)<5:\n    print(L)\n  C=34\nexcept IndexError:\n  print(\"Not in range\")\nexcept NameError:\n  print(\"Not defined\")\nexcept SyntaxError:\n  print(\"Write properly\")",
        "output": "",
        "error": "SyntaxError: invalid Python syntax"
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-523",
      "srNo": 523,
      "question": "When  will the else part of try-except-else be executed?",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "always",
        "when an exception occurs",
        "when no exception occurs",
        "when an exception occurs in to except block"
      ],
      "answer": "C",
      "correct": "when no exception occurs",
      "explanation": "The else suite executes only if the try suite completes without an exception."
    },
    {
      "id": "S3-524",
      "srNo": 524,
      "question": "When  is the finally block executed?",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "when there is no exception",
        "when there is an exception",
        "only if some condition that has been specified is satisfied",
        "always"
      ],
      "answer": "D",
      "correct": "always",
      "explanation": "finally executes when control leaves the try statement, whether it succeeds or raises an exception, under normal interpreter execution."
    },
    {
      "id": "S3-525",
      "srNo": 525,
      "question": "What will be the output of the following Python code?\ndef foo():\n  try:\n    return 1\n  finally:\n    return 2\nk = foo()\nprint(k)",
      "marks": 1.0,
      "sourcePage": 41,
      "options": [
        "1",
        "2",
        "3",
        "Error, there is more than one return statement in a single try-\nfinally block"
      ],
      "answer": "B",
      "correct": "2",
      "trace": {
        "code": "def foo():\n  try:\n    return 1\n  finally:\n    return 2\nk = foo()\nprint(k)",
        "output": "2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-526",
      "srNo": 526,
      "question": "What will be the output of the following Python code?\ndef foo():\n  try:\n    print(1)\n  finally:\n    print(2)\nk = foo()\nprint(k)",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "1\n2\nNone",
        "2\n2",
        "1",
        "2"
      ],
      "answer": "A",
      "correct": "1\n2\nNone",
      "trace": {
        "code": "def foo():\n  try:\n    print(1)\n  finally:\n    print(2)\nk = foo()\nprint(k)",
        "output": "1\n2\nNone\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-527",
      "srNo": 527,
      "question": "What will be the output of the following Python code?\ndef getMonth(m):\n  if m<1 or m>12:\n    raise ValueError(\"Invalid\")\n  print(m)\ngetMonth(6)",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "ValueError",
        "Invalid",
        "6",
        "ValueError(“Invalid”)"
      ],
      "answer": "C",
      "correct": "6",
      "trace": {
        "code": "def getMonth(m):\n  if m<1 or m>12:\n    raise ValueError(\"Invalid\")\n  print(m)\ngetMonth(6)",
        "output": "6\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-528",
      "srNo": 528,
      "question": "Which of the following blocks will be executed whether an exception is thrown or not?",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "except",
        "else",
        "finally",
        "assert"
      ],
      "answer": "C",
      "correct": "finally",
      "explanation": "finally is the cleanup suite that runs for both successful and exceptional paths."
    },
    {
      "id": "S3-529",
      "srNo": 529,
      "question": "What will be the output of below Python code?\nf=open(\"sample2.txt\",'w')\nf.write(\"Hello World\")\nf.close()\ntry:\n  m=5\n  f=open(\"sample2.txt\")\n  print(m)\n  print(f.read())\n  L=[1,2,3]\n  L[100]\nexcept FileNotFoundError:\n  print(\"File not found\")\nexcept NameError:\n  print(\"Variable not found\")\nexcept Exception:\n  print(\"List index out of range\")",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "5\nHello World\nFile not found",
        "5\nhello world\nList out index of range",
        "5\nHello World\nList out index of range",
        "Hello World\n5\nList index out of range"
      ],
      "answer": "C",
      "correct": "5\nHello World\nList out index of range",
      "explanation": "The program prints m=5 and the file contents, then index 100 raises IndexError and invokes its matching handler."
    },
    {
      "id": "S3-530",
      "srNo": 530,
      "question": "What will be the output of the following code?\ntry:\n  a=5\n  print(a)\n  print(b\nexcept:\n     print(\"This is python\")",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "SyntaxError: invalid syntax",
        "NameError",
        "This is python",
        "AttributeError"
      ],
      "answer": "A",
      "correct": "SyntaxError: invalid syntax",
      "trace": {
        "code": "a=5\n  print(a)\n  print(b\nexcept:\n     print(\"This is python\")",
        "output": "",
        "error": "SyntaxError: invalid Python syntax"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-531",
      "srNo": 531,
      "question": "What will be the output of the following Python code?\nclass Employee:\n  empcount=0\n  def __init__(self,name):\n    self.name=name\n    Employee.empcount+=1\n  def display_count_emp(self):\n    print(\"There are\",Employee.empcount,\"employees\")\nemp1=Employee(\"s1\")\nemp2=Employee(\"h1\")\nemp3=Employee(\"s1\")\nemp2.display_count_emp()",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "There are 3 employees",
        "There are 2 employees",
        "There are 1 employees",
        "There are 0 employees"
      ],
      "answer": "A",
      "correct": "There are 3 employees",
      "trace": {
        "code": "class Employee:\n  empcount=0\n  def __init__(self,name):\n    self.name=name\n    Employee.empcount+=1\n  def display_count_emp(self):\n    print(\"There are\",Employee.empcount,\"employees\")\nemp1=Employee(\"s1\")\nemp2=Employee(\"h1\")\nemp3=Employee(\"s1\")\nemp2.display_count_emp()",
        "output": "There are 3 employees\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-532",
      "srNo": 532,
      "question": "What will be the output of the following Python code?\ndef simple():\n  for i in range(10):\n    if(i%2==0):\n      yield i\nfor i in simple():\n  print(i,end=\",\")",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "yield",
        "0,2,4,6,8,",
        "10",
        "[0,2,4,6,8,]"
      ],
      "answer": "B",
      "correct": "0,2,4,6,8,",
      "trace": {
        "code": "def simple():\n  for i in range(10):\n    if(i%2==0):\n      yield i\nfor i in simple():\n  print(i,end=\",\")",
        "output": "0,2,4,6,8,",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. // is floor division and % gives the remainder. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-533",
      "srNo": 533,
      "question": "What will be the output of the following Python code?\nclass test:\ndef __init__(self,a):\n  self.a=\"python\"\ndef display(self):\n  print(self.a)\nobj=test()\nobj.display()",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "Runs normally, doesn’t display anything",
        "Displays 0, which is the automatic default value",
        "Error as one argument is required while creating the object",
        "Error as display function requires additional argument"
      ],
      "answer": "C",
      "correct": "Error as one argument is required while creating the object",
      "explanation": "The constructor requires a; calling test() without that argument raises TypeError before display runs."
    },
    {
      "id": "S3-534",
      "srNo": 534,
      "question": "What type of error is returned by the following code?\nfor value in [“one”,”two”,”three”]:\n  x = 0\n  print(float(value)\n  print(1/x)",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "NameError",
        "ValueError",
        "TypeError",
        "None of these"
      ],
      "answer": "D",
      "correct": "None of these",
      "explanation": "The print(float(value) line is missing a closing parenthesis, causing SyntaxError before any runtime conversion or division. Hence None of these is the supplied correct option."
    },
    {
      "id": "S3-535",
      "srNo": 535,
      "question": "Which of the following is correct?\nclass A:\ndef __init__(self):\n  self.count=5\n  self.count=self.count+1\na=A()\nprint(A.count)",
      "marks": 1.0,
      "sourcePage": 42,
      "options": [
        "5",
        "6",
        "0",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "explanation": "count is assigned to self on an instance, not to class A. Accessing A.count raises AttributeError."
    }
  ],
  "coding": [
    {
      "id": "S3-C536",
      "srNo": 536,
      "question": "Write a Python class named Student with two attributes student_name, marks. Modify the attribute values of the said class\nand print the original and modified values of the said attributes.",
      "marks": 4.0,
      "sourcePage": 42,
      "solution": "class Student:\n    def __init__(self, name, marks):\n        self.student_name, self.marks = name, marks\ns = Student('Krish', 80)\nprint(s.student_name, s.marks)\ns.student_name, s.marks = 'Patel', 95\nprint(s.student_name, s.marks)",
      "explanation": "The constructor initializes instance attributes; assignment modifies this student’s attributes.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "Krish 80\nPatel 95"
    },
    {
      "id": "S3-C537",
      "srNo": 537,
      "question": "Write a Python class named Rectangle constructed by a length and width and a method which will compute the area of a\nrectangle.",
      "marks": 4.0,
      "sourcePage": 43,
      "solution": "class Rectangle:\n    def __init__(self, length, width):\n        self.length, self.width = length, width\n    def area(self): return self.length * self.width\nprint(Rectangle(5, 4).area())",
      "explanation": "Store dimensions on the instance; the area method multiplies them. Output is 20.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "20"
    },
    {
      "id": "S3-C538",
      "srNo": 538,
      "question": "Write a Python class named Circle constructed by a radius and two methods which will compute the area and the perimeter\nof a circle.",
      "marks": 4.0,
      "sourcePage": 43,
      "solution": "import math\nclass Circle:\n    def __init__(self, radius):\n        if radius < 0: raise ValueError('Negative radius')\n        self.radius = radius\n    def area(self): return math.pi * self.radius**2\n    def perimeter(self): return 2 * math.pi * self.radius\nc = Circle(float(input('Radius: ')))\nprint('Area:', c.area(), 'Perimeter:', c.perimeter())",
      "explanation": "Area is pi*r² and circumference is 2*pi*r.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "2"
      ],
      "exampleOutput": "Area: 12.566370614359172 Perimeter: 12.566370614359172"
    },
    {
      "id": "S3-C539",
      "srNo": 539,
      "question": "Write a python program to demonstrate the use of try-except-else in Exception handling",
      "marks": 3.0,
      "sourcePage": 43,
      "solution": "try:\n    n = int(input('Integer: '))\n    result = 10/n\nexcept ValueError: print('Not an integer')\nexcept ZeroDivisionError: print('Cannot divide by zero')\nelse: print('Result:', result)",
      "explanation": "except handles a matching error; else runs only when the try block succeeds.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "2"
      ],
      "exampleOutput": "Result: 5.0"
    },
    {
      "id": "S3-C540",
      "srNo": 540,
      "question": "Write a python program to demonstrate the use of raise in Exception handling",
      "marks": 3.0,
      "sourcePage": 43,
      "solution": "try:\n    age = int(input('Age: '))\n    if age < 0: raise ValueError('Age cannot be negative')\n    print('Age:', age)\nexcept ValueError as error: print(error)",
      "explanation": "raise deliberately creates an exception when a business rule is violated.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "19"
      ],
      "exampleOutput": "Age: 19"
    },
    {
      "id": "S3-C541",
      "srNo": 541,
      "question": "Write a python program to demonstrate the use of custom exceptions in Exception handling.",
      "marks": 3.0,
      "sourcePage": 43,
      "solution": "class InvalidAgeError(Exception):\n    pass\ntry:\n    age = int(input('Age: '))\n    if age < 0: raise InvalidAgeError('Age cannot be negative')\n    print(age)\nexcept (InvalidAgeError, ValueError) as error: print(error)",
      "explanation": "Derive a custom error from Exception, raise it for invalid input and catch it by type.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "19"
      ],
      "exampleOutput": "19"
    },
    {
      "id": "S3-C542",
      "srNo": 542,
      "question": "Write a program to build a simple Student Management System using Object Oriented Programming in Python which can\nperform the following operations:\naccept-This method takes details from the user like name, roll number, and marks for two different subjects.\ndisplay-This method displays the details of every student.\nsearch-This method searches for a particular student from the list of students. This method will ask the user for roll number\nand then search according to the roll number\ndelete-This method deletes the record of a particular student with a matching roll number.\nupdate-This method updates the roll number of the student. This method will ask for the old roll number and new roll\nnumber. It will replace the old roll number with a new roll number.\nThe following instructions need to be considered while making a program.\n1. Give class name as Student\n2. Include methods name as accept, display, search, delete and update. (1 mark for each correct method to be formed).\n3. Also form constructor with __init__ () method (2 marks for forming constructor).\n4. 2 marks for correct object prepared like after deletion of one roll no of student it should update the list with new roll no.\nand should display it.\nThe example is just for understanding but logic should be for any n number of students.For Example:\nList of Students\nName : A\nRollNo : 1\nMarks1 : 100\nMarks2 : 100\nName : B\nRollNo : 2\nMarks1 : 90\nMarks2 : 90\nName : C\nRollNo : 3\nMarks1 : 80\nMarks2 : 80\nStudent Found,\nName : B\nRollNo : 2\nMarks1 : 90\nMarks2 : 90\nList after deletion\nName : A\nRollNo : 1\nMarks1 : 100\nMarks2 : 100\nName : C\nRollNo : 3\nMarks1 : 80\nMarks2 : 80\nList after updation\nName : A\nRollNo : 1\nMarks1 : 100\nMarks2 : 100\nName : C\nRollNo : 2\nMarks1 : 80\nMarks2 : 80",
      "marks": 9.0,
      "sourcePage": 43,
      "solution": "class Student:\n    def __init__(self): self.students = []\n    def accept(self):\n        name = input('Name: ')\n        roll = int(input('Roll number: '))\n        if self.search(roll) is not None: raise ValueError('Duplicate roll number')\n        self.students.append({'name':name, 'roll':roll, 'marks1':float(input('Marks 1: ')), 'marks2':float(input('Marks 2: '))})\n    def display(self):\n        for student in self.students: print(student)\n    def search(self, roll):\n        return next((s for s in self.students if s['roll'] == roll), None)\n    def delete(self, roll):\n        student = self.search(roll)\n        if student is None: return False\n        self.students.remove(student)\n        return True\n    def update(self, old, new):\n        student = self.search(old)\n        if student is None or self.search(new) is not None: return False\n        student['roll'] = new\n        return True\n\nrecords = Student()\nfor _ in range(int(input('Number of students: '))): records.accept()\nrecords.display()\nprint('Found:', records.search(int(input('Search roll: '))))\nprint('Deleted:', records.delete(int(input('Delete roll: '))))\nrecords.display()\nprint('Updated:', records.update(int(input('Old roll: ')), int(input('New roll: '))))\nrecords.display()",
      "explanation": "The Student manager holds all records. Search returns a matching record or None; delete and update report success. Reject duplicate roll numbers so each record stays identifiable.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "A",
        "1",
        "100",
        "100",
        "B",
        "2",
        "90",
        "90",
        "C",
        "3",
        "80",
        "80",
        "2",
        "2",
        "3",
        "2"
      ],
      "exampleOutput": "{'name': 'A', 'roll': 1, 'marks1': 100.0, 'marks2': 100.0}\n{'name': 'B', 'roll': 2, 'marks1': 90.0, 'marks2': 90.0}\n{'name': 'C', 'roll': 3, 'marks1': 80.0, 'marks2': 80.0}\nFound: {'name': 'B', 'roll': 2, 'marks1': 90.0, 'marks2': 90.0}\nDeleted: True\n{'name': 'A', 'roll': 1, 'marks1': 100.0, 'marks2': 100.0}\n{'name': 'C', 'roll': 3, 'marks1': 80.0, 'marks2': 80.0}\nUpdated: True\n{'name': 'A', 'roll': 1, 'marks1': 100.0, 'marks2': 100.0}\n{'name': 'C', 'roll': 2, 'marks1': 80.0, 'marks2': 80.0}"
    },
    {
      "id": "S3-C543",
      "srNo": 543,
      "question": "You own a pizzeria named Olly’s Pizzas and want to create a Python program to handle the customers and revenue. Create\nthe following classes with the following methods:\nClass Pizza containing\n1. init method: to initialize the size (small, medium, large), toppings (corn, tomato, onion, capsicum, mushroom, olives,\nbroccoli), cheese (mozzarella, feta, cheddar). Note: One pizza can have only one size but many toppings and cheese. (1.5\nmarks)\nThrow custom exceptions if the selects toppings or cheese not available in lists given above. (1 mark)\n2. price method: to calculate the prize of the pizza in the following way:\nsmall = 50, medium = 100, large = 200\nEach topping costs 20 rupees extra, except broccoli, olives and mushroom, which are exotic and so cost 50 rupees each.\nEach type of cheese costs an extra 50 rupees. (1.5 marks)\nClass Order containing\n1. init method: to initialize the name, customerid of the customer who placed the order (0.5 marks)\n2. order method: to allow the customer to select pizzas with choice of toppings and cheese (1 mark)\n3. bill method: to generate details about each pizza ordered by the customer and the total cost of the order. (2 marks)\n*Note: A customer can get multiple pizzas in one order.\n1.5 marks for creating appropriate objects of these classes and writing correct output.",
      "marks": 9.0,
      "sourcePage": 43,
      "solution": "class InvalidPizzaError(Exception): pass\nclass Pizza:\n    def __init__(self, size, toppings, cheese):\n        if size not in ('small','medium','large'): raise InvalidPizzaError('Invalid size')\n        if any(t not in ('corn','tomato','onion','capsicum','mushroom','olives','broccoli') for t in toppings): raise InvalidPizzaError('Invalid topping')\n        if any(c not in ('mozzarella','feta','cheddar') for c in cheese): raise InvalidPizzaError('Invalid cheese')\n        self.size, self.toppings, self.cheese = size, toppings, cheese\n    def price(self):\n        base = {'small':50, 'medium':100, 'large':200}[self.size]\n        return base + sum(50 if t in ('broccoli','olives','mushroom') else 20 for t in self.toppings) + 50*len(self.cheese)\nclass Order:\n    def __init__(self, name, customerid):\n        self.name, self.customerid, self.pizzas = name, customerid, []\n    def order(self, pizza): self.pizzas.append(pizza)\n    def bill(self):\n        print(self.name, self.customerid)\n        for p in self.pizzas: print(p.size, p.toppings, p.cheese, p.price())\n        print('Total:', sum(p.price() for p in self.pizzas))\norder = Order('Krish', 1)\norder.order(Pizza('small', ['corn'], ['mozzarella']))\norder.order(Pizza('large', ['olives','onion'], ['feta']))\norder.bill()",
      "explanation": "Each pizza validates its options and computes its own price. An order contains multiple Pizza objects; the sample total is 440 rupees.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "Krish 1\nsmall ['corn'] ['mozzarella'] 120\nlarge ['olives', 'onion'] ['feta'] 320\nTotal: 440"
    },
    {
      "id": "S3-C544",
      "srNo": 544,
      "question": "Write a class called WordPlay. It should have a constructor that holds a list of words. The user of the class should pass the\nlist of words through constructor, which user wants to use for the class. The class should have following methods:\nwords_with_length(length) — returns a list of all the words of length length\nstarts_with(char1) — returns a list of all the words that start with char1\nends_with(char2) — returns a list of all the words that end with char2\npalindromes() — returns a list of all the palindromes in the list\nonly(str1) — returns a list of the words that contain only those letters in str1\navoids(str2) — returns a list of the words that contain none of the letters in str2\nMake Required object for WordPlay class and test all the methods.\nFor Example:\nIf input list entered by user is: ['apple', 'banana', 'find', 'dictionary', 'set', 'tuple', 'list', 'malayalam', 'nayan', 'grind', 'apricot']\nwords_with_length (5) should return ['apple', 'tuple', 'nayan', 'grind']\nstarts_with ('a') should return ['apple', 'apricot']\nends_with ('d') should return ['find', 'grind']\npalindromes () should return ['malayalam', 'nayan']\nonly ('bna') should return ['banana']\navoids ('amkd') should return ['set', 'tuple', 'list']",
      "marks": 9.0,
      "sourcePage": 44,
      "solution": "class WordPlay:\n    def __init__(self, words): self.words = words\n    def words_with_length(self, length): return [w for w in self.words if len(w) == length]\n    def starts_with(self, char1): return [w for w in self.words if w.startswith(char1)]\n    def ends_with(self, char2): return [w for w in self.words if w.endswith(char2)]\n    def palindromes(self): return [w for w in self.words if w == w[::-1]]\n    def only(self, str1): return [w for w in self.words if all(c in str1 for c in w)]\n    def avoids(self, str2): return [w for w in self.words if all(c not in str2 for c in w)]\nw = WordPlay(input('Words: ').split())\nprint(w.words_with_length(5))\nprint(w.starts_with('a'))\nprint(w.ends_with('d'))\nprint(w.palindromes())\nprint(w.only('bna'))\nprint(w.avoids('amkd'))",
      "explanation": "Each method filters the stored words using the named condition. only requires every character to belong to the allowed set; avoids requires no forbidden character.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "apple banana find dictionary set tuple list malayalam nayan grind apricot"
      ],
      "exampleOutput": "['apple', 'tuple', 'nayan', 'grind']\n['apple', 'apricot']\n['find', 'grind']\n['malayalam', 'nayan']\n['banana']\n['set', 'tuple', 'list']"
    },
    {
      "id": "S3-C545",
      "srNo": 545,
      "question": "Write a python program that has class store which keeps record of code and price of each product. Display a menu of all\nproducts to the user and prompt him to enter the quantity of each item required. generate a bill and display total amount.\nSample Output:\nenter no of items: 3\nenter code of item: milk\nenter cost of item: 30\nenter code of item: apple\nenter cost of item: 35\nenter code of item: gems\nenter cost of item: 40\nItem Code Price\nmilk 30\napple 35\ngems 40\nEnter quantity of each item:\nEnter quantity of milk : 2\nEnter quantity of apple : 3\nEnter quantity of gems : 4\n************************Bill**********************\nITEM PRICE QUANTITY SUBTOTAL\nmilk 30 2 60\napple 35 3 105\ngems 40 4 160\n**************************************\nTotal= 325",
      "marks": 9.0,
      "sourcePage": 44,
      "solution": "class Store:\n    def __init__(self): self.products = {}\n    def add(self, code, price): self.products[code] = price\n    def menu(self):\n        for code, price in self.products.items(): print(code, price)\n    def bill(self):\n        total = 0\n        print('ITEM PRICE QUANTITY SUBTOTAL')\n        for code, price in self.products.items():\n            quantity = int(input('Quantity of ' + code + ': '))\n            if quantity < 0: raise ValueError('Negative quantity')\n            subtotal = price * quantity\n            print(code, price, quantity, subtotal)\n            total += subtotal\n        print('Total:', total)\nstore = Store()\nfor _ in range(int(input('Number of items: '))):\n    store.add(input('Code: '), float(input('Price: ')))\nstore.menu()\nstore.bill()",
      "explanation": "A dictionary stores each product code and price; multiply by quantities and accumulate subtotals. The given example totals 325.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "milk",
        "30",
        "apple",
        "35",
        "gems",
        "40",
        "2",
        "3",
        "4"
      ],
      "exampleOutput": "milk 30.0\napple 35.0\ngems 40.0\nITEM PRICE QUANTITY SUBTOTAL\nmilk 30.0 2 60.0\napple 35.0 3 105.0\ngems 40.0 4 160.0\nTotal: 325.0"
    },
    {
      "id": "S3-C546",
      "srNo": 546,
      "question": "Write a python program that has a class Point with attributes as the x and y co-ordinates.\n1. Add a method ‘distance from origin’ to class Point which returns the distance of the given point from origin. The equation\nis\n2. Add a method ‘translate’ to class Point, which returns a new position of point after translation\n3. Add a method ‘reflect_x’ to class Point, which returns a new point which is the reflection of the point about the x-axis.\n4. Add a method ‘distance’ to return distance of the given point with respect to the other point. The formula for calculating\ndistance between A(x1,y1) and B(x2,y2) is\nAfter creating class blueprint run the following test case -\nTest Case – Point (1,2)\nDistance from origin - 2.23\nTranslate method - point (1,2) translated by (1,1) increment will be at (2,3) now\nReflect_x Method - Point (2,3) after given reflection will be at (2,-3)\nDistance Method - distance between point (2,-3) and (3,4) is 1.41",
      "marks": 9.0,
      "sourcePage": 44,
      "solution": "import math\nclass Point:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def distance_from_origin(self): return math.hypot(self.x, self.y)\n    def translate(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        return self\n    def reflect_x(self): return Point(self.x, -self.y)\n    def distance(self, other): return math.hypot(self.x-other.x, self.y-other.y)\n    def __repr__(self): return f'Point({self.x}, {self.y})'\n\np = Point(1, 2)\nprint(p.distance_from_origin())\nprint(p.translate(1, 1))\nreflection = p.reflect_x()\nprint(reflection)\nprint(reflection.distance(Point(3, 4)))",
      "explanation": "Translation adds offsets; reflection negates y. The PDF’s distance example is wrong: (2,-3) to (3,4) is sqrt(50), approximately 7.071, not 1.41.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "2.23606797749979\nPoint(2, 3)\nPoint(2, -3)\n7.0710678118654755"
    },
    {
      "id": "S3-C547",
      "srNo": 547,
      "question": "A possible collection of classes which can be used to represent a music collection (for example, inside a music player),\nfocusing on how they would be related by composition. You should include classes for songs, artists, albums and playlists.\nFor simplicity you can assume that any song or album has a single “artist” value (which could represent more than one\nperson), but you should include compilation albums (which contain songs by a selection of different artists). The “artist” of a\ncompilation album can be a special value like “Various Artists”. You can also assume that each song is associated with a\nsingle album, but that multiple copies of the same song (which are included in different albums) can exist.\nWrite a simple implementation of this model which clearly shows how the different classes are composed. Write some\nexample code to show how you would use your classes to create an album and add all its songs to a playlist. Class Album\nshould have a method to add track, class Artist should have methods to add album and add song, class Playlist should also\nhave a method to add song.",
      "marks": 9.0,
      "sourcePage": 44,
      "solution": "class Artist:\n    def __init__(self, name): self.name, self.albums, self.songs = name, [], []\n    def add_album(self, album): self.albums.append(album)\n    def add_song(self, song): self.songs.append(song)\nclass Song:\n    def __init__(self, title, artist): self.title, self.artist, self.album = title, artist, None\nclass Album:\n    def __init__(self, title, artist): self.title, self.artist, self.tracks = title, artist, []\n    def add_track(self, song):\n        song.album = self\n        self.tracks.append(song)\nclass Playlist:\n    def __init__(self, name): self.name, self.songs = name, []\n    def add_song(self, song): self.songs.append(song)\na = Artist('Artist A')\nb = Artist('Artist B')\nalbum = Album('Compilation', Artist('Various Artists'))\ns1, s2 = Song('Song One', a), Song('Song Two', b)\na.add_song(s1)\nb.add_song(s2)\nalbum.add_track(s1)\nalbum.add_track(s2)\nalbum.artist.add_album(album)\nplaylist = Playlist('Favorites')\nfor song in album.tracks: playlist.add_song(song)\nfor song in playlist.songs: print(song.title, song.artist.name, song.album.title)",
      "explanation": "Composition means objects contain or reference other objects. Compilation tracks retain their individual artists while the album artist is Various Artists.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "Song One Artist A Compilation\nSong Two Artist B Compilation"
    },
    {
      "id": "S3-C548",
      "srNo": 548,
      "question": "Stacks and Queues. Write a class SQ that defines a data structure that can behave as both a queue (FIFO) or a stack (LIFO),\nThere are five methods that should be implemented:\n1. make a constructor with a valid parameter\n2. shift() returns the first element and removes it from the list. Also, use the custom(raise) exception in this method.\n3. unshift() \"pushes\" a new element to the front or head of the list\n4. push() adds a new element to the end of a list\n5. pop() returns the last element and removes it from the list\n6. remove() returns the maximum element of the list and removes it from the list.\n7. Create the object and call all methods of the SQ class.",
      "marks": 9.0,
      "sourcePage": 45,
      "solution": "class EmptySQError(Exception): pass\nclass SQ:\n    def __init__(self, values): self.values = list(values)\n    def shift(self):\n        if not self.values: raise EmptySQError('Empty queue')\n        return self.values.pop(0)\n    def unshift(self, value): self.values.insert(0, value)\n    def push(self, value): self.values.append(value)\n    def pop(self):\n        if not self.values: raise EmptySQError('Empty stack')\n        return self.values.pop()\n    def remove(self):\n        if not self.values: raise EmptySQError('Empty collection')\n        value = max(self.values)\n        self.values.remove(value)\n        return value\nsq = SQ([1, 3, 2])\nprint(sq.shift())\nsq.unshift(4)\nsq.push(5)\nprint(sq.pop())\nprint(sq.remove())\nprint(sq.values)",
      "explanation": "shift removes the first item (FIFO), pop removes the last (LIFO), and remove deletes one maximum. Raise custom errors for empty operations.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "1\n5\n4\n[3, 2]"
    },
    {
      "id": "S3-C549",
      "srNo": 549,
      "question": "You need to create a class called Atm. It should have methods to create the pin, to change the pin, to check balance, to\nwithdraw money, to deposit money. Also, you need to create method called menu to choose from the above given\noperations which you want to perform.\ncreate_pin Method:\nAsk user to enter the pin to create a new pin. Also ask user to initialize the balance of your account.\nchange_pin Method:\nPin Validation is required before changing the pin. If Pin entered is wrong then message should be displayed “Enter correct\npin”. if Pin is correct then update the Old Pin with New Pin.\ncheck_balance Method:\nPin Validation is required for checking the balance. It should display the current balance of account.\nwithdraw Method:\nPin Validation is required before withdrawing money. It should ask user for amount to withdraw. It should also display the\ninsufficient fund message if withdraw amount is higher than balance else balance should be updated after withdraw.\ndeposit Method:\nPin Validation is required before deposit of money. It should ask user for amount to deposit. balance should be updated\nafter deposit.\nAfter completion of every method it should ask for choice(menu() method) to perform new operation. If you don’t want any\noperation to perform then you can choose choice of exit to come out from the program",
      "marks": 9.0,
      "sourcePage": 45,
      "solution": "class Atm:\n    def __init__(self): self.pin, self.balance = None, 0\n    def authenticate(self):\n        if self.pin is None or input('PIN: ') != self.pin:\n            print('Enter correct pin')\n            return False\n        return True\n    def create_pin(self):\n        if self.pin is not None:\n            print('PIN already exists; use change PIN')\n            return\n        pin = input('New PIN: ')\n        balance = float(input('Initial balance: '))\n        if balance < 0: raise ValueError('Negative balance')\n        self.pin, self.balance = pin, balance\n    def change_pin(self):\n        if self.authenticate(): self.pin = input('New PIN: ')\n    def check_balance(self):\n        if self.authenticate(): print(self.balance)\n    def withdraw(self):\n        if not self.authenticate(): return\n        amount = float(input('Amount: '))\n        if amount <= 0: print('Use a positive amount')\n        elif amount > self.balance: print('Insufficient funds')\n        else: self.balance -= amount\n    def deposit(self):\n        if not self.authenticate(): return\n        amount = float(input('Amount: '))\n        if amount <= 0: print('Use a positive amount')\n        else: self.balance += amount\n    def menu(self):\n        actions = {'1':self.create_pin, '2':self.change_pin, '3':self.check_balance, '4':self.withdraw, '5':self.deposit}\n        while True:\n            choice = input('1 Create PIN, 2 Change PIN, 3 Balance, 4 Withdraw, 5 Deposit, 0 Exit: ')\n            if choice == '0': break\n            if choice in actions: actions[choice]()\n            else: print('Invalid choice')\nAtm().menu()",
      "explanation": "Use an iterative menu instead of recursive calls. Validate the PIN before operations and reject negative transactions or overdrafts. This is a local exam simulation.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "1234",
        "1000",
        "3",
        "1234",
        "5",
        "1234",
        "500",
        "4",
        "1234",
        "200",
        "3",
        "1234",
        "0"
      ],
      "exampleOutput": "1000.0\n1300.0"
    },
    {
      "id": "S3-C550",
      "srNo": 550,
      "question": "Bank Account class:\nCreate a Python class called BankAccount which represents a bank account,\nhaving as attributes: accountNumber (numeric type), name\n(name of the account owner as string type), balance.\nCreate a constructor with parameters: accountNumber, name, balance.\nCreate a Deposit() method which manages the deposit actions.\nCreate a Withdrawal() method which manages withdrawals actions.\nCreate a display() method to display account details.\nGive the complete code for the BankAccount class.\nCreate the object and call all methods of the BankAccount class.",
      "marks": 3.0,
      "sourcePage": 45,
      "solution": "class BankAccount:\n    def __init__(self, accountNumber, name, balance):\n        if balance < 0: raise ValueError('Negative opening balance')\n        self.accountNumber, self.name, self.balance = accountNumber, name, balance\n    def Deposit(self, amount):\n        if amount <= 0: raise ValueError('Positive amount required')\n        self.balance += amount\n    def Withdrawal(self, amount):\n        if amount <= 0 or amount > self.balance: raise ValueError('Invalid amount or insufficient funds')\n        self.balance -= amount\n    def display(self): print(self.accountNumber, self.name, self.balance)\na = BankAccount(123, 'Krish', 1000)\na.display()\na.Deposit(500)\na.Withdrawal(200)\na.display()",
      "explanation": "Store account details as instance attributes and update balance through validated methods. The example ends with 1300.",
      "topic": "Classes and exceptions",
      "starterCode": "",
      "exampleOutput": "123 Krish 1000\n123 Krish 1300"
    }
  ]
};
