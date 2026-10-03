// Full SEM III unit 9; question numbers match the 2026 source PDF.
var SEM3_UNIT_9 = {
  "unit": 9,
  "title": "Unit 9 — Inheritance, operators and NumPy",
  "mcqs": [
    {
      "id": "S3-551",
      "srNo": 551,
      "question": "What will be the output of the following Python code?\nclass Test:\n  def __init__(self):\n    self.x = 0\nclass Derived_Test(Test):\n  def __init__(self):\n    self.y = 1\ndef main():\n   b = Derived_Test()\n   print(b.x,b.y)\nmain()",
      "marks": 1.0,
      "sourcePage": 45,
      "options": [
        "0 1",
        "1 0",
        "Error because class B inherits A but variable x isn’t inherited",
        "Error because when object is created, argument must be passed\nlike Derived_Test(1)"
      ],
      "answer": "C",
      "correct": "Error because class B inherits A but variable x isn’t inherited",
      "trace": {
        "code": "class Test:\n  def __init__(self):\n    self.x = 0\nclass Derived_Test(Test):\n  def __init__(self):\n    self.y = 1\ndef main():\n   b = Derived_Test()\n   print(b.x,b.y)\nmain()",
        "output": "",
        "error": "AttributeError: 'Derived_Test' object has no attribute 'x'"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-552",
      "srNo": 552,
      "question": "What will be the output of the following Python code?\nclass A():\n  def disp(self):\n    print(\"A disp()\")\nclass B(A):\n  pass\nobj = B()\nobj.disp()",
      "marks": 1.0,
      "sourcePage": 45,
      "options": [
        "Invalid syntax for inheritance",
        "Error because when object is created, argument must be\npassed",
        "Nothing is printed",
        "A disp()"
      ],
      "answer": "D",
      "correct": "A disp()",
      "trace": {
        "code": "class A():\n  def disp(self):\n    print(\"A disp()\")\nclass B(A):\n  pass\nobj = B()\nobj.disp()",
        "output": "A disp()\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-553",
      "srNo": 553,
      "question": "Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write?",
      "marks": 1.0,
      "sourcePage": 45,
      "options": [
        "A.__init__(self)",
        "B.__init__(self)",
        "A.__init__(B)",
        "B.__init__(A)"
      ],
      "answer": "A",
      "correct": "A.__init__(self)",
      "explanation": "A.__init__(self) explicitly invokes the base initializer. Cooperative super().__init__() is usually preferable in an inheritance hierarchy."
    },
    {
      "id": "S3-554",
      "srNo": 554,
      "question": "What will be the output of the following Python code?\nclass Test:\n  def __init__(self):\n    self.x = 0\nclass Derived_Test(Test):\n  def __init__(self):\n    Test.__init__(self)\n    self.y = 1\ndef main():\n  b = Derived_Test()\n  print(b.x,b.y)\nmain()",
      "marks": 1.0,
      "sourcePage": 45,
      "options": [
        "Error because class B inherits A but variable x\nisn’t inherited",
        "0 0",
        "0 1",
        "Error, the syntax of the invoking method is wrong"
      ],
      "answer": "C",
      "correct": "0 1",
      "trace": {
        "code": "class Test:\n  def __init__(self):\n    self.x = 0\nclass Derived_Test(Test):\n  def __init__(self):\n    Test.__init__(self)\n    self.y = 1\ndef main():\n  b = Derived_Test()\n  print(b.x,b.y)\nmain()",
        "output": "0 1\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-555",
      "srNo": 555,
      "question": "What will be the output of the following Python code?\nclass A:\n  def one(self):\n    return self.two()\n  def two(self):\n    return 'A'\nclass B(A):\n  def two(self):\n    return 'B'\nobj1=A()\nobj2=B()\nprint(obj1.two(),obj2.two())",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "A A",
        "A B",
        "B B",
        "B A"
      ],
      "answer": "B",
      "correct": "A B",
      "trace": {
        "code": "class A:\n  def one(self):\n    return self.two()\n  def two(self):\n    return 'A'\nclass B(A):\n  def two(self):\n    return 'B'\nobj1=A()\nobj2=B()\nprint(obj1.two(),obj2.two())",
        "output": "A B\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-556",
      "srNo": 556,
      "question": "What type of inheritance is illustrated in the following Python code?\nclass A():\n  pass\nclass B():\n  pass\nclass C(A,B):\n  pass",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "Multi-level inheritance",
        "Multiple inheritance",
        "Hierarchical inheritance",
        "Single-level inheritance"
      ],
      "answer": "B",
      "correct": "Multiple inheritance",
      "explanation": "C has two direct parents A and B, which is multiple inheritance."
    },
    {
      "id": "S3-557",
      "srNo": 557,
      "question": "What type of inheritance is illustrated in the following Python code?\nclass A():\n  pass\nclass B(A):\n  pass\nclass C(B):\n  pass",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "Multi-level inheritance",
        "Multiple inheritance",
        "Hierarchical inheritance",
        "Single-level inheritance"
      ],
      "answer": "A",
      "correct": "Multi-level inheritance",
      "explanation": "A -> B -> C forms a chain of multiple inheritance levels (multilevel inheritance)."
    },
    {
      "id": "S3-558",
      "srNo": 558,
      "question": "In which of the following does the CricketFan class correctly inherit from the PartyAnimal class?",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "from party import PartyAnimal",
        "class CricketFan(PartyAnimal)",
        "an = PartyAnimal()",
        "CricketFan = PartyAnimal()"
      ],
      "answer": "B",
      "correct": "class CricketFan(PartyAnimal)",
      "explanation": "Put the base name in parentheses after the child class name; a complete class header also requires a colon."
    },
    {
      "id": "S3-559",
      "srNo": 559,
      "question": "What does single-level inheritance mean?",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "A subclass derives from a class which in turn\nderives from another class",
        "A single superclass inherits from multiple subclasses",
        "A single subclass derives from a single superclass",
        "Multiple base classes inherit a single derived class"
      ],
      "answer": "C",
      "correct": "A single subclass derives from a single superclass",
      "explanation": "Single inheritance has one direct superclass for the subclass."
    },
    {
      "id": "S3-560",
      "srNo": 560,
      "question": "What will be the output of the following Python code?\nclass A:\n  def __init__(self,x):\n    self.x = x\n  def count(self,x):\n    self.x = self.x+1\nclass B(A):\n  def __init__(self, y=0):\n    A.__init__(self, 3)\n    self.y = y\n  def count(self):\n    self.y += 1\ndef main():\n  obj = B()\n  obj.count()\n  print(obj.x, obj.y)\nmain()",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "3 0",
        "3 1",
        "0 1",
        "An exception in thrown"
      ],
      "answer": "B",
      "correct": "3 1",
      "trace": {
        "code": "class A:\n  def __init__(self,x):\n    self.x = x\n  def count(self,x):\n    self.x = self.x+1\nclass B(A):\n  def __init__(self, y=0):\n    A.__init__(self, 3)\n    self.y = y\n  def count(self):\n    self.y += 1\ndef main():\n  obj = B()\n  obj.count()\n  print(obj.x, obj.y)\nmain()",
        "output": "3 1\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-561",
      "srNo": 561,
      "question": "The child's __init__() function overrides the inheritance of the parent's __init__() function.",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "TRUE",
        "FALSE",
        "CAN BE TRUE OR FALSE",
        "CAN NOT SAY"
      ],
      "answer": "A",
      "correct": "TRUE",
      "explanation": "Defining __init__ in the child replaces the inherited initializer; call super().__init__() when parent initialization is needed."
    },
    {
      "id": "S3-562",
      "srNo": 562,
      "question": "What will be the output of the following Python code?\nclass A:\n  def test1(self):\n    print(\" test of A called \")\nclass B(A):\n  def test(self):\n    print(\" test of B called \")\nclass C(A):\n  def test(self):\n    print(\" test of C called \")\nclass D(B,C):\n  def test2(self):\n    print(\" test of D called \")\nobj=D()\nobj.test()",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "3 test of B called\ntest of C called",
        "test of C called\ntest of B called",
        "test of B called",
        "Error, both the classes from which D derives has same method\ntest()"
      ],
      "answer": "C",
      "correct": "test of B called",
      "trace": {
        "code": "class A:\n  def test1(self):\n    print(\" test of A called \")\nclass B(A):\n  def test(self):\n    print(\" test of B called \")\nclass C(A):\n  def test(self):\n    print(\" test of C called \")\nclass D(B,C):\n  def test2(self):\n    print(\" test of D called \")\nobj=D()\nobj.test()",
        "output": " test of B called \n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-563",
      "srNo": 563,
      "question": " What does the following code output?\nclass People():\n  def __init__(self, name):\n   self.name = name\n  def namePrint(self):\n   print(self.name)\n person1 = People(\"Sally\")\n person2 = People(\"Louise\")\n person1.namePrint()",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "Sally",
        "Louise",
        "Sally Louise",
        "Person1"
      ],
      "answer": "A",
      "correct": "Sally",
      "explanation": "person1 stores Sally while person2 stores Louise. Calling the first object’s namePrint prints Sally."
    },
    {
      "id": "S3-564",
      "srNo": 564,
      "question": "You cannot create object of which type of class",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "base",
        "derived",
        "abstract",
        "intermediate"
      ],
      "answer": "C",
      "correct": "abstract",
      "explanation": "A class with unimplemented abstract methods cannot be instantiated; a concrete subclass must implement them."
    },
    {
      "id": "S3-565",
      "srNo": 565,
      "question": "Which of the following best describes polymorphism?",
      "marks": 1.0,
      "sourcePage": 46,
      "options": [
        "Ability of a class to derive members of another\nclass as a part of its own definition",
        "Means of bundling instance variables and methods in\norder to restrict access to certain class members",
        "Focuses on variables and passing of variables to functions",
        "Allows for objects of different types and behaviour to be treated\nas the same general type"
      ],
      "answer": "D",
      "correct": "Allows for objects of different types and behaviour to be treated\nas the same general type",
      "explanation": "Polymorphism allows a shared interface to invoke behavior appropriate to different object types."
    },
    {
      "id": "S3-566",
      "srNo": 566,
      "question": "What will be the output of the following Python code?\nclass Demo:\n  def __init__(self):\n    self.x = 1\n  def change(self):\n    self.x = 10\nclass Demo_derived(Demo):\n  def change(self):\n    self.x=self.x+1\n    return self.x\ndef main():\n  obj = Demo_derived()\n  print(obj.change())\nmain()",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "11",
        "2",
        "1",
        "10"
      ],
      "answer": "B",
      "correct": "2",
      "trace": {
        "code": "class Demo:\n  def __init__(self):\n    self.x = 1\n  def change(self):\n    self.x = 10\nclass Demo_derived(Demo):\n  def change(self):\n    self.x=self.x+1\n    return self.x\ndef main():\n  obj = Demo_derived()\n  print(obj.change())\nmain()",
        "output": "2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-567",
      "srNo": 567,
      "question": "What will be the output of the following Python code?\nclass Demo:\n  def check(self):\n    return \" Demo's check \"\n  def display(self):\n    print(self.check())\nclass Demo_Derived(Demo):\n  def check(self):\n    return \" Derived's check \"\nDemo().display()\nDemo_Derived().display()",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "Demo’s check Derived’s check",
        "Demo’s check Demo’s check",
        "Derived’s check Demo’s check",
        "Syntax error"
      ],
      "answer": "A",
      "correct": "Demo’s check Derived’s check",
      "trace": {
        "code": "class Demo:\n  def check(self):\n    return \" Demo's check \"\n  def display(self):\n    print(self.check())\nclass Demo_Derived(Demo):\n  def check(self):\n    return \" Derived's check \"\nDemo().display()\nDemo_Derived().display()",
        "output": " Demo's check \n Derived's check \n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-568",
      "srNo": 568,
      "question": "What will be the output of the following Python code?\nclass A:\n  def one(self):\n    return self.two()\n  def two(self):\n    return 'A'\nclass B(A):\n  def two(self):\n    return 'B'\nobj2=B()\nprint(obj2.two())",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "A",
        "An exception is thrown",
        "A B",
        "B"
      ],
      "answer": "D",
      "correct": "B",
      "trace": {
        "code": "class A:\n  def one(self):\n    return self.two()\n  def two(self):\n    return 'A'\nclass B(A):\n  def two(self):\n    return 'B'\nobj2=B()\nprint(obj2.two())",
        "output": "B\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-569",
      "srNo": 569,
      "question": "What will be output for the following code?\nimport numpy as np\na = np.array([1,2,3,5,8])\nprint (a.ndim)",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "3 0",
        "1",
        "2",
        "3"
      ],
      "answer": "B",
      "correct": "1",
      "trace": {
        "code": "import numpy as np\na = np.array([1,2,3,5,8])\nprint (a.ndim)",
        "output": "1\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-570",
      "srNo": 570,
      "question": "What will be output for the following code?\n import numpy as np\na=np.array([1,2,3,4,5,6])\n print(a)",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "[1 2 3 4 5 6]",
        "array([1, 2, 3, 4, 5])",
        "(1 2 3 4 5 6)",
        "(1,2,3,4,5,6)"
      ],
      "answer": "A",
      "correct": "[1 2 3 4 5 6]",
      "explanation": "A NumPy array prints its numeric values separated by spaces rather than list commas."
    },
    {
      "id": "S3-571",
      "srNo": 571,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array(42)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "42",
        "[42]",
        "([42])",
        "int"
      ],
      "answer": "A",
      "correct": "42",
      "trace": {
        "code": "import numpy as np\narr = np.array(42)\nprint(arr)",
        "output": "42\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-572",
      "srNo": 572,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr[2])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "C",
      "correct": "3",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr[2])",
        "output": "3\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-573",
      "srNo": 573,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, -5, 4])\nprint(arr[-3])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "2",
        "1",
        "-5",
        "ERROR"
      ],
      "answer": "A",
      "correct": "2",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, -5, 4])\nprint(arr[-3])",
        "output": "2\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-574",
      "srNo": 574,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, -5, 4])\nprint(arr[-5])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "2",
        "1",
        "-5",
        "ERROR"
      ],
      "answer": "D",
      "correct": "ERROR",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, -5, 4])\nprint(arr[-5])",
        "output": "",
        "error": "IndexError: index -5 is out of bounds for axis 0 with size 4"
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-575",
      "srNo": 575,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr[2] + arr[3])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "5",
        "3",
        "7",
        "([3,4])"
      ],
      "answer": "C",
      "correct": "7",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr[2] + arr[3])",
        "output": "7\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-576",
      "srNo": 576,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0, 1])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "6",
        "2",
        "4",
        "10"
      ],
      "answer": "B",
      "correct": "2",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0, 1])",
        "output": "2\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-577",
      "srNo": 577,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[1, -3])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "4",
        "2",
        "3",
        "8"
      ],
      "answer": "D",
      "correct": "8",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[1, -3])",
        "output": "8\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-578",
      "srNo": 578,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[0, 1, 2])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "12",
        "3",
        "6",
        "9"
      ],
      "answer": "C",
      "correct": "6",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[0, 1, 2])",
        "output": "6\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-579",
      "srNo": 579,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1, 1, 2])",
      "marks": 1.0,
      "sourcePage": 47,
      "options": [
        "6",
        "3",
        "12",
        "9"
      ],
      "answer": "C",
      "correct": "12",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1, 1, 2])",
        "output": "12\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-580",
      "srNo": 580,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[1:5])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[1 2 3 4]",
        "[2 3 4 5]",
        "[1 2 3 4 5 ]",
        "[1 5]"
      ],
      "answer": "B",
      "correct": "[2 3 4 5]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[1:5])",
        "output": "[2 3 4 5]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-581",
      "srNo": 581,
      "question": "What will be output for the following code?\n import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[1:-3])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[2 3 4]",
        "[1 2 3]",
        "[5 6 7]",
        "[3 2 1]"
      ],
      "answer": "A",
      "correct": "[2 3 4]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[1:-3])",
        "output": "[2 3 4]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-582",
      "srNo": 582,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[4:])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[ 5 6 7 ]",
        "[1 2 3 4]",
        "[1 2 3 4 5]",
        "[1 5]"
      ],
      "answer": "A",
      "correct": "[ 5 6 7 ]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[4:])",
        "output": "[5 6 7]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-583",
      "srNo": 583,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[:4])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[4 5 6 7]",
        "[1 2 3 4]",
        "[1 2 3 4 5 ]",
        "[1 5]"
      ],
      "answer": "B",
      "correct": "[1 2 3 4]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7])\nprint(arr[:4])",
        "output": "[1 2 3 4]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-584",
      "srNo": 584,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1,1,0:3])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[10 11 12]",
        "[4 5 6]",
        "[[10 11 12]]",
        "[[[10 11 12]]]"
      ],
      "answer": "A",
      "correct": "[10 11 12]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1,1,0:3])",
        "output": "[10 11 12]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-585",
      "srNo": 585,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1,0:3])",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[ 7 8 9]\n[10 11 12]]",
        "[10 11 12]",
        "[[4 5 6]\n[ 7 8 9]\n[10 11 12]]",
        "[ 7 8 9]\n[10 11 12]"
      ],
      "answer": "A",
      "correct": "[[ 7 8 9]\n[10 11 12]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\nprint(arr[1,0:3])",
        "output": "[[ 7  8  9]\n [10 11 12]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-586",
      "srNo": 586,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])\nprint(arr.shape)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "(2 4)",
        "[2 4]",
        "(2, 4)",
        "2D"
      ],
      "answer": "C",
      "correct": "(2, 4)",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])\nprint(arr.shape)",
        "output": "(2, 4)\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-587",
      "srNo": 587,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]]])\nprint(arr.shape)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "(2,4)",
        "(1, 2, 4)",
        "3D",
        "(0,2,4)"
      ],
      "answer": "B",
      "correct": "(1, 2, 4)",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]]])\nprint(arr.shape)",
        "output": "(1, 2, 4)\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-588",
      "srNo": 588,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\nnewarr = arr.reshape(4, 3)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]]",
        "[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]",
        "[[[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]]]",
        "ERROR"
      ],
      "answer": "A",
      "correct": "[[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\nnewarr = arr.reshape(4, 3)\nprint(newarr)",
        "output": "[[ 1  2  3]\n [ 4  5  6]\n [ 7  8  9]\n [10 11 12]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-589",
      "srNo": 589,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\nnewarr = arr.reshape(2, 3, 2)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[[ 1 2]\n[ 3 4]\n[ 5 6]]\n[[ 7 8]\n[ 9 10]",
        "[[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]]",
        "[[ 1 2]\n[ 3 4]\n[ 5 6]]\n[[ 7 8]\n[ 9 10]",
        "[ 1 2]\n[ 3 4]\n[ 5 6]\n[ 7 8]\n[ 9 10]\n[11 12]"
      ],
      "answer": "A",
      "correct": "[[[ 1 2]\n[ 3 4]\n[ 5 6]]\n[[ 7 8]\n[ 9 10]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\nnewarr = arr.reshape(2, 3, 2)\nprint(newarr)",
        "output": "[[[ 1  2]\n  [ 3  4]\n  [ 5  6]]\n\n [[ 7  8]\n  [ 9 10]\n  [11 12]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-590",
      "srNo": 590,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\nnewarr = arr.reshape(2, 2, -1)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
        "[[[1 2 3 4]]\n[[5 6 7 8]]]",
        "[[1 2 3 4 5 6 7 8]]",
        "[[[1 2 3 4]\n[5 6 7 8]]]"
      ],
      "answer": "A",
      "correct": "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\nnewarr = arr.reshape(2, 2, -1)\nprint(newarr)",
        "output": "[[[1 2]\n  [3 4]]\n\n [[5 6]\n  [7 8]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-591",
      "srNo": 591,
      "question": "What will be output for the following code?\n import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nnewarr = arr.reshape(-1)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[1 2 3 4 5 6]",
        "6",
        "[4,5,6]",
        "[3,6]"
      ],
      "answer": "A",
      "correct": "[1 2 3 4 5 6]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nnewarr = arr.reshape(-1)\nprint(newarr)",
        "output": "[1 2 3 4 5 6]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-592",
      "srNo": 592,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\narr = np.concatenate((arr1, arr2))\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[1 2 3 4 5 6]",
        "[5,7,9]",
        "[4,10,18]",
        "[6,15]"
      ],
      "answer": "A",
      "correct": "[1 2 3 4 5 6]",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\narr = np.concatenate((arr1, arr2))\nprint(arr)",
        "output": "[1 2 3 4 5 6]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-593",
      "srNo": 593,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[1 2 5 6]\n[3 4 7 8]]",
        "[[1 2]\n[3 4]\n[5 6]\n[7 8]]",
        "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
        "ERROR"
      ],
      "answer": "A",
      "correct": "[[1 2 5 6]\n[3 4 7 8]]",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr)",
        "output": "[[1 2 5 6]\n [3 4 7 8]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-594",
      "srNo": 594,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\narr = np.concatenate((arr1, arr2), axis=0)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[1 2 5 6]\n[3 4 7 8]]",
        "[[1 2]\n[3 4]\n[5 6]\n[7 8]]",
        "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
        "ERROR"
      ],
      "answer": "B",
      "correct": "[[1 2]\n[3 4]\n[5 6]\n[7 8]]",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\narr = np.concatenate((arr1, arr2), axis=0)\nprint(arr)",
        "output": "[[1 2]\n [3 4]\n [5 6]\n [7 8]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-595",
      "srNo": 595,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=0)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[1 2]\n[3 4]\n[5 6]\n[7 8]]",
        "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
        "[[[1 2 5 6]\n[3 4 7 8]]]",
        "[1 2 3 4 5 6 7 8]"
      ],
      "answer": "B",
      "correct": "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=0)\nprint(arr)",
        "output": "[[[1 2]\n  [3 4]]\n\n [[5 6]\n  [7 8]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-596",
      "srNo": 596,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 48,
      "options": [
        "[[[1 2]\n[3 4]\n[5 6]\n[7 8]]]",
        "[[[1 2 5 6]\n[3 4 7 8]]]",
        "[[[1 2]\n[3 4]]\n[[5 6]\n[7 8]]]",
        "[[1 2]\n[3 4]\n[5 6]\n[7 8]]"
      ],
      "answer": "A",
      "correct": "[[[1 2]\n[3 4]\n[5 6]\n[7 8]]]",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr)",
        "output": "[[[1 2]\n  [3 4]\n  [5 6]\n  [7 8]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-597",
      "srNo": 597,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6])\nnewarr = np.array_split(arr, 3)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[array([1, 2]), array([3, 4]), array([5, 6])]",
        "[([1, 2]),([3, 4]),([5, 6])]",
        "(1,2) (3,4) (5,6)",
        "[1,2] [3,4] [5,6]"
      ],
      "answer": "A",
      "correct": "[array([1, 2]), array([3, 4]), array([5, 6])]",
      "explanation": "array_split divides six entries into three equal contiguous two-element arrays."
    },
    {
      "id": "S3-598",
      "srNo": 598,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6])\nnewarr = np.array_split(arr, 4)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[array([1, 2]), array([3, 4]), array([5]), array([6])]",
        "[([1, 2]),([3, 4]),([5]), ([6])]",
        "[([1, 2]),([3, 4]),([5, 6])]",
        "[array([1, 2]), array([3, 4]), array([5, 6])]"
      ],
      "answer": "A",
      "correct": "[array([1, 2]), array([3, 4]), array([5]), array([6])]",
      "explanation": "array_split allows unequal pieces: splitting six values into four chunks gives sizes 2,2,1,1."
    },
    {
      "id": "S3-599",
      "srNo": 599,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]])\nnewarr = np.array_split(arr, 3)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[array([[1, 2]]), array([[3, 4]]), array([[5, 6]]),\narray([[7, 8]]), array([[ 9, 10]]), array([[11, 12]])]",
        "[array([[1, 2],\n[3, 4]]), array([[5, 6],\n[7, 8]]), array([[ 9, 10],\n[11, 12]])]",
        "[array([[ 1, 2],\n[ 3, 4],\n[ 5, 6],\n[ 7, 8],\n[ 9, 10],\n[11, 12]])]",
        "[[ 1 2]\n[ 3 4]\n[ 5 6]\n[ 7 8]\n[ 9 10]\n[11 12]]"
      ],
      "answer": "B",
      "correct": "[array([[1, 2],\n[3, 4]]), array([[5, 6],\n[7, 8]]), array([[ 9, 10],\n[11, 12]])]",
      "explanation": "Splitting six rows into three along axis 0 gives three arrays of shape (2,2)."
    },
    {
      "id": "S3-600",
      "srNo": 600,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6])\nnewarr = np.array_split(arr, 6)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[array([1]), array([2]), array([3]), array([4]),\narray([5]), array([6])]",
        "[1 2 3 4 5 6]",
        "[[1],[2],[3],[4],[5],[6]]",
        "([1 2 3 4 5 6])"
      ],
      "answer": "A",
      "correct": "[array([1]), array([2]), array([3]), array([4]),\narray([5]), array([6])]",
      "explanation": "Splitting six values into six chunks produces six single-element arrays."
    },
    {
      "id": "S3-601",
      "srNo": 601,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 4, 4])\nx = np.where(arr == 4)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "(array([3, 5, 6], dtype=int64),)",
        "(3,5,6)",
        "[3,5,6]",
        "[3]"
      ],
      "answer": "A",
      "correct": "(array([3, 5, 6], dtype=int64),)",
      "explanation": "where(arr==4) returns a tuple containing the zero-based matching indices: 3,5,6."
    },
    {
      "id": "S3-602",
      "srNo": 602,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1, 2], [3, 4], [5, 4]])\nx = np.where(arr == 4)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "(array([1, 2], dtype=int64), array([1, 1],\ndtype=int64))",
        "(array([3, 5, 6],)",
        "[3,5,6]",
        "(([1, 2]),([1, 1]))"
      ],
      "answer": "A",
      "correct": "(array([1, 2], dtype=int64), array([1, 1],\ndtype=int64))",
      "explanation": "where on this 2D array returns row indices [1,2] and column indices [1,1]."
    },
    {
      "id": "S3-603",
      "srNo": 603,
      "question": "import numpy as np\narr = np.array([3, 2, 0, 1])\nprint(np.sort(arr))",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[0 1 2 3]",
        "[3 2 1 0]",
        "0 1 2 3",
        "3 2 1 0"
      ],
      "answer": "A",
      "correct": "[0 1 2 3]",
      "trace": {
        "code": "import numpy as np\narr = np.array([3, 2, 0, 1])\nprint(np.sort(arr))",
        "output": "[0 1 2 3]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-604",
      "srNo": 604,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[3, 2], [0, 1]])\nprint(np.sort(arr))",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[[0,1],[2,3]]",
        "[[0,1,2,3]]",
        "[[2 3]\n[0 1]]",
        "[0,1] [2,3]"
      ],
      "answer": "C",
      "correct": "[[2 3]\n[0 1]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[3, 2], [0, 1]])\nprint(np.sort(arr))",
        "output": "[[2 3]\n [0 1]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-605",
      "srNo": 605,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array(['banana', 'cherry', 'apple'])\nprint(np.sort(arr))",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "['apple' 'banana' 'cherry']",
        "'apple' 'banana' 'cherry'",
        "['apple', 'banana', 'cherry']",
        "ERROR"
      ],
      "answer": "A",
      "correct": "['apple' 'banana' 'cherry']",
      "trace": {
        "code": "import numpy as np\narr = np.array(['banana', 'cherry', 'apple'])\nprint(np.sort(arr))",
        "output": "['apple' 'banana' 'cherry']\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-606",
      "srNo": 606,
      "question": "What will be output for the following code?\n import numpy as np\narr = np.array([True, False, True])\nprint(np.sort(arr))",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[False True True]",
        "[0 1 1]",
        "[1 0 1]",
        "ERROR"
      ],
      "answer": "A",
      "correct": "[False True True]",
      "trace": {
        "code": "import numpy as np\narr = np.array([True, False, True])\nprint(np.sort(arr))",
        "output": "[False  True  True]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-607",
      "srNo": 607,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([True, False, True,0,1])\nprint(np.sort(arr))",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "[0 1 False True True]",
        "[0 0 1 1 1]",
        "[False True True 0 1]",
        "[False False True True True]"
      ],
      "answer": "B",
      "correct": "[0 0 1 1 1]",
      "trace": {
        "code": "import numpy as np\narr = np.array([True, False, True,0,1])\nprint(np.sort(arr))",
        "output": "[0 0 1 1 1]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-608",
      "srNo": 608,
      "question": "What will be output for the following code?\n import numpy as np\narr = np.array(k)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "k",
        "\"k\"",
        "[k]",
        "ERROR"
      ],
      "answer": "D",
      "correct": "ERROR",
      "trace": {
        "code": "import numpy as np\narr = np.array(k)\nprint(arr)",
        "output": "",
        "error": "NameError: name 'k' is not defined"
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-609",
      "srNo": 609,
      "question": "What will be the output of the following code?\nclass A:\n  def rk(self):\n    print(\" In class A\")\nclass B:\n  def rk(self):\n    print(\" In class B\")\nclass C(A, B):\n  def rk(self):\n    pass\nr = C()\nprint(C.__mro__)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "(<class '__main__.C'>, <class '__main__.A'>,\n<class '__main__.B'>, <class ‘object'>)",
        "(<class '__main__.A'>, <class '__main__.C'>, <class\n'__main__.B'>, <class 'object'>)",
        "(<class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>,\n<class 'object'>)",
        "D. (<class '__main__.C'>, <class '__main__.B'>, <class\n'__main__.A'>, <class 'object'>)"
      ],
      "answer": "A",
      "correct": "(<class '__main__.C'>, <class '__main__.A'>,\n<class '__main__.B'>, <class ‘object'>)",
      "trace": {
        "code": "class A:\n  def rk(self):\n    print(\" In class A\")\nclass B:\n  def rk(self):\n    print(\" In class B\")\nclass C(A, B):\n  def rk(self):\n    pass\nr = C()\nprint(C.__mro__)",
        "output": "(<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-610",
      "srNo": 610,
      "question": "What is the output of the following code? import numpy as np\na=np.array([1,2,3,4])\nprint(a.shape)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "(4, )",
        "-4",
        "(1,0)",
        "(1,4)"
      ],
      "answer": "A",
      "correct": "(4, )",
      "trace": {
        "code": "import numpy as np\na=np.array([1,2,3,4])\nprint(a.shape)",
        "output": "(4,)\n",
        "error": null
      },
      "explanation": "A 1D array of four entries has shape (4,), a tuple with one component."
    },
    {
      "id": "S3-611",
      "srNo": 611,
      "question": "What is wrong with this program?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\nnewarr = arr.reshape(3, 3)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "cannot reshape array of size 8 into shape (3,3)",
        "cannot reshape array of size 7 into shape (3,3)",
        "there is no function called array",
        "None of these"
      ],
      "answer": "A",
      "correct": "cannot reshape array of size 8 into shape (3,3)",
      "trace": {
        "code": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\nnewarr = arr.reshape(3, 3)\nprint(newarr)",
        "output": "",
        "error": "ValueError: cannot reshape array of size 8 into shape (3,3)"
      },
      "explanation": "A reshape preserves element count. Eight entries cannot fill a 3×3 array, so ValueError is raised."
    },
    {
      "id": "S3-612",
      "srNo": 612,
      "question": "What will be output for the following code?\nimport numpy as np\nA=np.array([[[1,2], [4,3]], [[3,5], [6,4]]])\nx=np.where(A==4)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 49,
      "options": [
        "(array([0, 1], dtype=int64), array([1, 1],\ndtype=int64), array([0, 1], dtype=int64))",
        "(array([1,2], dtype=int64), array([0, 1], dtype=int64),\narray([1, 1], dtype=int64))",
        "(array([1, 1], dtype=int64), array([0, 1], dtype=int64))",
        "Error"
      ],
      "answer": "A",
      "correct": "(array([0, 1], dtype=int64), array([1, 1],\ndtype=int64), array([0, 1], dtype=int64))",
      "explanation": "where returns one index array per axis. Match coordinates are (0,1,0) and (1,1,1)."
    },
    {
      "id": "S3-613",
      "srNo": 613,
      "question": "What will be the MRO for class P in program given below:\nclass A:\n  pass\nclass B:\n  pass\nclass C:\n  pass\nclass X(A,B):\n  pass\nclass Y(C,A,B):\n  pass\nclass Z(A):\n  pass\nclass P(Z,Y,X):\n  pass",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "P,Z,Y,X,A,B,C,Object",
        "P,Z,A,Y,C,A,B,X,A,B,Object",
        "P,Z,A,Y,C,B,X,Object",
        "P,Z,Y,C,X,A,B,Object"
      ],
      "answer": "D",
      "correct": "P,Z,Y,C,X,A,B,Object",
      "explanation": "C3 linearization preserves local parent order and postpones shared ancestors: P,Z,Y,C,X,A,B,object."
    },
    {
      "id": "S3-614",
      "srNo": 614,
      "question": "What will be output for the following code?\nfrom abc import ABC,abstractmethod\nclass Father(ABC):\n  @abstractmethod\n  def display(self):\n    pass\n  def play(self):\n    print('Abstract class')\nclass Son(Father):\n  def play(self):\n    print('Child class')\nA=Son()\nA.play()",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "Child class",
        "Abstract class",
        "Child class\nAbstract class",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "trace": {
        "code": "from abc import ABC,abstractmethod\nclass Father(ABC):\n  @abstractmethod\n  def display(self):\n    pass\n  def play(self):\n    print('Abstract class')\nclass Son(Father):\n  def play(self):\n    print('Child class')\nA=Son()\nA.play()",
        "output": "",
        "error": "TypeError: Can't instantiate abstract class Son without an implementation for abstract method 'display'"
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-615",
      "srNo": 615,
      "question": "What will be output for the following code?\nimport numpy as np\narr1=np.array ([[1,3], [14,20], [5,6]])\narr2=np.array ([[6], [9], [12]])\narr=np.concatenate((arr1,arr2),axis=1)\nprint(arr)",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "[[1 3]\n[14 20]\n[5 6]]",
        "[[ 1 3 6]\n[14 20 9]\n[ 5 6 12]]",
        "[[6]\n[9]\n[12]]",
        "[1 3 6 14 20 9 5 6 12]"
      ],
      "answer": "B",
      "correct": "[[ 1 3 6]\n[14 20 9]\n[ 5 6 12]]",
      "trace": {
        "code": "import numpy as np\narr1=np.array ([[1,3], [14,20], [5,6]])\narr2=np.array ([[6], [9], [12]])\narr=np.concatenate((arr1,arr2),axis=1)\nprint(arr)",
        "output": "[[ 1  3  6]\n [14 20  9]\n [ 5  6 12]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-616",
      "srNo": 616,
      "question": "What will be the output of the following Python code?\nclass A():\n  def disp(self):\n    print(\"C disp()\")\nclass C():\n  def disp(self):\n    print(\"A disp()\")\nclass B(A,C):\n  def dis(self):\n    print(\"B disp()\")\nobj = B()\nobj.disp()",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "C disp()",
        "A disp()",
        "B disp()",
        "A disp()\nC disp()"
      ],
      "answer": "A",
      "correct": "C disp()",
      "trace": {
        "code": "class A():\n  def disp(self):\n    print(\"C disp()\")\nclass C():\n  def disp(self):\n    print(\"A disp()\")\nclass B(A,C):\n  def dis(self):\n    print(\"B disp()\")\nobj = B()\nobj.disp()",
        "output": "C disp()\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-617",
      "srNo": 617,
      "question": "What will be the output of the following Python code?\nclass A:\n  def __init__(self,x=3):\n    self._x = x\nclass B(A):\n  def __init__(self):\n    super().__init__(5)\n  def display(self):\n    print(self._x)\ndef main():\n  obj = B()\n  obj.display()\nmain()",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "3",
        "5",
        "53",
        "35"
      ],
      "answer": "B",
      "correct": "5",
      "trace": {
        "code": "class A:\n  def __init__(self,x=3):\n    self._x = x\nclass B(A):\n  def __init__(self):\n    super().__init__(5)\n  def display(self):\n    print(self._x)\ndef main():\n  obj = B()\n  obj.display()\nmain()",
        "output": "5\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-618",
      "srNo": 618,
      "question": "What will be the output of the following code:\nclass A:\n  def __init__(self,x):\n    self.x = x\n  def count(self,x):\n    self.x = self.x-2\nclass B(A):\n  def __init__(self, y=0):\n    A.__init__(self, 3)\n    self.y = y\n  def count(self):\n    self.y -= 1\ndef main():\n  obj = B()\n  obj.count()\n  print(obj.x, obj.y)\nmain()",
      "marks": 1.0,
      "sourcePage": 50,
      "options": [
        "3 0",
        "3 1",
        "3 -1",
        "Error"
      ],
      "answer": "C",
      "correct": "3 -1",
      "trace": {
        "code": "class A:\n  def __init__(self,x):\n    self.x = x\n  def count(self,x):\n    self.x = self.x-2\nclass B(A):\n  def __init__(self, y=0):\n    A.__init__(self, 3)\n    self.y = y\n  def count(self):\n    self.y -= 1\ndef main():\n  obj = B()\n  obj.count()\n  print(obj.x, obj.y)\nmain()",
        "output": "3 -1\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-619",
      "srNo": 619,
      "question": "What will be the output of the following code:\nclass P:\n  pass\nclass Q:\n  pass\nclass R(P,Q):\n  pass\nclass S(Q):\n  pass\nclass T(S,R):\n  pass\na=T()\nT.__mro__",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "[__main__.T, __main__.S, __main__.R,\n__main__.P, __main__.Q]",
        "(__main__.T, __main__.S, __main__.P, __main__.Q,\n__main__.R, object)",
        "(__main__.T, __main__.S, __main__.R, __main__.P, __main__.Q,\nobject)",
        "(__main__.T, __main__.S, __main__.Q, __main__.R, __main__.P,\nobject)"
      ],
      "answer": "C",
      "correct": "(__main__.T, __main__.S, __main__.R, __main__.P, __main__.Q,\nobject)",
      "trace": {
        "code": "class P:\n  pass\nclass Q:\n  pass\nclass R(P,Q):\n  pass\nclass S(Q):\n  pass\nclass T(S,R):\n  pass\na=T()\nT.__mro__",
        "output": "(<class '__main__.T'>, <class '__main__.S'>, <class '__main__.R'>, <class '__main__.P'>, <class '__main__.Q'>, <class 'object'>)\n",
        "error": null
      },
      "explanation": "C3 merges T(S,R), S(Q) and R(P,Q) into T,S,R,P,Q,object."
    },
    {
      "id": "S3-620",
      "srNo": 620,
      "question": "What will be the output of the following code:\nclass Demo:\n  def __init__(self):\n    self.x = 1\n  def change(self):\n    self.x = 10\n    return self.x\nclass Demo_derived(Demo):\n  def change(self):\n    self.x*=5\n    return self.x\ndef main():\n  obj = Demo_derived()\n  print(obj.change())\nmain()",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "5",
        "10",
        "1",
        "2"
      ],
      "answer": "A",
      "correct": "5",
      "trace": {
        "code": "class Demo:\n  def __init__(self):\n    self.x = 1\n  def change(self):\n    self.x = 10\n    return self.x\nclass Demo_derived(Demo):\n  def change(self):\n    self.x*=5\n    return self.x\ndef main():\n  obj = Demo_derived()\n  print(obj.change())\nmain()",
        "output": "5\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-621",
      "srNo": 621,
      "question": "What will be the output of the following code:\nimport numpy as np\narr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]])\nnewarr = arr.reshape(4, 1, -1)\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "[[ 1 2 3]\n[ 4 5 6]\n[ 7 8 9]\n[10 11 12]]",
        "[[[ 1 2 3]]\n[[ 4 5 6]]\n[[ 7 8 9]]\n[[10 11 12]]]",
        "[[[ 1 2 3]\n[ 4 5 6]]\n[[ 7 8 9]\n[10 11 12]]]",
        "Error"
      ],
      "answer": "B",
      "correct": "[[[ 1 2 3]]\n[[ 4 5 6]]\n[[ 7 8 9]]\n[[10 11 12]]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]])\nnewarr = arr.reshape(4, 1, -1)\nprint(newarr)",
        "output": "[[[ 1  2  3]]\n\n [[ 4  5  6]]\n\n [[ 7  8  9]]\n\n [[10 11 12]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-622",
      "srNo": 622,
      "question": "What will be output for the following code?\nimport numpy as np\narr=np.array([[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]])\narr1=np.array([[[4,3,2],[7,10,15]],[[6,1,2],[8,7,9]]])\nnewarr=np.concatenate((arr,arr1),axis=1)\nx=newarr[:1:,:2:,:3:2]\ny=np.sort(x)\nprint(y)",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "[[[4 2]\n[7 15]]]",
        "Value Error",
        "[[[1 3]\n[4 6]]]",
        "[[[1 2 3]\n[4 5 6]]]"
      ],
      "answer": "C",
      "correct": "[[[1 3]\n[4 6]]]",
      "trace": {
        "code": "import numpy as np\narr=np.array([[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]])\narr1=np.array([[[4,3,2],[7,10,15]],[[6,1,2],[8,7,9]]])\nnewarr=np.concatenate((arr,arr1),axis=1)\nx=newarr[:1:,:2:,:3:2]\ny=np.sort(x)\nprint(y)",
        "output": "[[[1 3]\n  [4 6]]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-623",
      "srNo": 623,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0:, -3:-2])",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "[[3]\n[8]]",
        "[[3 4 5]\n[8 9 10]]",
        "[[3],\n[8]]",
        "[[3 8]]"
      ],
      "answer": "A",
      "correct": "[[3]\n[8]]",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0:, -3:-2])",
        "output": "[[3]\n [8]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-624",
      "srNo": 624,
      "question": "What will be output for the following code?\nimport numpy as np\narr=np.array([[[1,2,3],[4,5,6]],[[6,5,3],[4,2,1]]])\nx=arr[0:2,::2,::2]\nprint(x.shape)",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "(2,1,2)",
        "(1,2,4)",
        "(2,2,3)",
        "(2,3,2)"
      ],
      "answer": "A",
      "correct": "(2,1,2)",
      "trace": {
        "code": "import numpy as np\narr=np.array([[[1,2,3],[4,5,6]],[[6,5,3],[4,2,1]]])\nx=arr[0:2,::2,::2]\nprint(x.shape)",
        "output": "(2, 1, 2)\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-625",
      "srNo": 625,
      "question": "What will be output for the following code?\nimport numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr.shape)",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "(1,4,2)",
        "(1,2,4)",
        "(2,2,2)",
        "(4,2)"
      ],
      "answer": "A",
      "correct": "(1,4,2)",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=1)\nprint(arr.shape)",
        "output": "(1, 4, 2)\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-626",
      "srNo": 626,
      "question": "What will be the output for the following code?\nimport numpy as np\narr = np.array(range(15,37,3))+3\narr=arr.reshape(2,1,4)\nprint(arr[1][0])",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "[27 30 33 36]",
        "[30 33 36 39]",
        "[15 18 21 24]",
        "30"
      ],
      "answer": "B",
      "correct": "[30 33 36 39]",
      "trace": {
        "code": "import numpy as np\narr = np.array(range(15,37,3))+3\narr=arr.reshape(2,1,4)\nprint(arr[1][0])",
        "output": "[30 33 36 39]\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-627",
      "srNo": 627,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1,1,1,1,1,1,1,1,1])\narr.reshape(2,4,1)\nprint(arr.ndim)",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "1",
        "2",
        "3",
        "ERROR"
      ],
      "answer": "D",
      "correct": "ERROR",
      "trace": {
        "code": "import numpy as np\narr = np.array([1,1,1,1,1,1,1,1,1])\narr.reshape(2,4,1)\nprint(arr.ndim)",
        "output": "",
        "error": "ValueError: cannot reshape array of size 9 into shape (2,4,1)"
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-628",
      "srNo": 628,
      "question": "What will be the output of the following Python code?\nclass P1:\n  def hi(self):\n    print(\"hi P1\")\nclass P2:\n  def hi(self):\n    print(\"hi P2\")\nclass C1(P1):\n    pass\nclass C2(P1):\n  def hi(self):\n    print(\"hello C2\")\nclass GC(C1,C2):\n  pass\ngc=GC()\ngc.hi()",
      "marks": 1.0,
      "sourcePage": 51,
      "options": [
        "hello C1",
        "hi C1",
        "hello GC",
        "hello C2"
      ],
      "answer": "D",
      "correct": "hello C2",
      "trace": {
        "code": "class P1:\n  def hi(self):\n    print(\"hi P1\")\nclass P2:\n  def hi(self):\n    print(\"hi P2\")\nclass C1(P1):\n    pass\nclass C2(P1):\n  def hi(self):\n    print(\"hello C2\")\nclass GC(C1,C2):\n  pass\ngc=GC()\ngc.hi()",
        "output": "hello C2\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-629",
      "srNo": 629,
      "question": "What will be the output of the following Python code?\nclass P1:\n  def hello(self):\n    print(\"hi P1\")\nclass P2:\n  def hi(self):\n    print(\"hi P2\")\nclass C1(P1):\n    pass\nclass C2(P1):\n  def h(self):\n    print(\"hello C2\")\nclass GC(C1,C2):\n  pass\ngc=GC()\ngc.hello()",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "hi P1",
        "hi C1",
        "hello GC",
        "hello C2"
      ],
      "answer": "A",
      "correct": "hi P1",
      "trace": {
        "code": "class P1:\n  def hello(self):\n    print(\"hi P1\")\nclass P2:\n  def hi(self):\n    print(\"hi P2\")\nclass C1(P1):\n    pass\nclass C2(P1):\n  def h(self):\n    print(\"hello C2\")\nclass GC(C1,C2):\n  pass\ngc=GC()\ngc.hello()",
        "output": "hi P1\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-630",
      "srNo": 630,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8])\nx = np.where(arr%2 == 1)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "(array([0, 2, 4, 6],\ndtype=int64),)",
        "arr([1, 3, 5, 7],)",
        "[3]",
        "All of these"
      ],
      "answer": "A",
      "correct": "(array([0, 2, 4, 6],\ndtype=int64),)",
      "explanation": "The condition arr%2 == 1 selects odd values 1,3,5,7, at zero-based indices 0,2,4,6."
    },
    {
      "id": "S3-631",
      "srNo": 631,
      "question": "What is the Output of the Following Code?\nclass A:\n  def __init__(self, x=5):\n    self.x = x\nclass der(A):\n  def __init__(self, y=3):\n    super().__init__()\n    self.y = y\ndef main():\n  obj = der()\n  print(obj.x, obj.y)\nmain()",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "1 2",
        "3 5",
        "5 3",
        "Error"
      ],
      "answer": "C",
      "correct": "5 3",
      "trace": {
        "code": "class A:\n  def __init__(self, x=5):\n    self.x = x\nclass der(A):\n  def __init__(self, y=3):\n    super().__init__()\n    self.y = y\ndef main():\n  obj = der()\n  print(obj.x, obj.y)\nmain()",
        "output": "5 3\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-632",
      "srNo": 632,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0,1],arr[1,1])",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "1 6",
        "1 7",
        "1 8",
        "2 7"
      ],
      "answer": "D",
      "correct": "2 7",
      "trace": {
        "code": "import numpy as np\narr = np.array([[1,2,3,4,5], [6,7,8,9,10]])\nprint(arr[0,1],arr[1,1])",
        "output": "2 7\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-633",
      "srNo": 633,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([3, 2, 0, 1])\nprint(np.sort(arr)[::-1])",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "[3 2 1 0]",
        "[1 2 3 0]",
        "[0 1 2 3]",
        "0 1 2 3"
      ],
      "answer": "A",
      "correct": "[3 2 1 0]",
      "trace": {
        "code": "import numpy as np\narr = np.array([3, 2, 0, 1])\nprint(np.sort(arr)[::-1])",
        "output": "[3 2 1 0]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-634",
      "srNo": 634,
      "question": "What will be output for the following code?\narr1 = np.array([[1,2],[5,6]])\narr2 = np.array([[3,4],[7,8]])\narr=np.concatenate((arr1,arr2))\nfor i in arr:\n  for j in i:\n    if(j%2==0):\n      newarr=j\nprint(newarr)",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "[7 8]",
        "7",
        "4",
        "8"
      ],
      "answer": "D",
      "correct": "8",
      "trace": {
        "code": "arr1 = np.array([[1,2],[5,6]])\narr2 = np.array([[3,4],[7,8]])\narr=np.concatenate((arr1,arr2))\nfor i in arr:\n  for j in i:\n    if(j%2==0):\n      newarr=j\nprint(newarr)",
        "output": "8\n",
        "error": null
      },
      "explanation": "Concatenating two 2×2 arrays on the default axis gives a 4×2 array with eight entries; size is 8."
    },
    {
      "id": "S3-635",
      "srNo": 635,
      "question": "What is the output of following code?\narr = np.array([1,2,3,4,5,6,7,8])\narr.reshape(2,4)\nprint(arr.ndim)",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "1",
        "2",
        "3",
        "(2,)"
      ],
      "answer": "A",
      "correct": "1",
      "trace": {
        "code": "arr = np.array([1,2,3,4,5,6,7,8])\narr.reshape(2,4)\nprint(arr.ndim)",
        "output": "1\n",
        "error": null
      },
      "explanation": "reshape returns a new view/array and is not assigned to arr. The original remains one-dimensional, so arr.ndim is 1."
    },
    {
      "id": "S3-636",
      "srNo": 636,
      "question": "What will be output for the following code?\nimport numpy as np\na=np.array([[5],[7],[8]])\nb=np.array([[5,7,8]])\nprint(b+a)",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "[[10 12 13]\n[12 14 15]\n[13 15 16]]",
        "[[10 10 10]\n[14 14 14]\n[16 16 16]]",
        "ValueError",
        "TypeError"
      ],
      "answer": "A",
      "correct": "[[10 12 13]\n[12 14 15]\n[13 15 16]]",
      "trace": {
        "code": "import numpy as np\na=np.array([[5],[7],[8]])\nb=np.array([[5,7,8]])\nprint(b+a)",
        "output": "[[10 12 13]\n [12 14 15]\n [13 15 16]]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-637",
      "srNo": 637,
      "question": "What will be output for the following code?\nclass A:\n  def hello(self):\n    print(\"1\",end=\",\")\n  def hello(self):\n    print(\"2\",end=\",\")\nclass B(A):\n  def __init__(self):\n    self.hello()\n  def hello(self):\n    print(\"3\",end=\",\")\n    super().hello()\nb=B()\nb.hello()",
      "marks": 1.0,
      "sourcePage": 52,
      "options": [
        "3,2,3,2,",
        "3,2",
        "2,3,2,3,",
        "3,"
      ],
      "answer": "A",
      "correct": "3,2,3,2,",
      "trace": {
        "code": "class A:\n  def hello(self):\n    print(\"1\",end=\",\")\n  def hello(self):\n    print(\"2\",end=\",\")\nclass B(A):\n  def __init__(self):\n    self.hello()\n  def hello(self):\n    print(\"3\",end=\",\")\n    super().hello()\nb=B()\nb.hello()",
        "output": "3,2,3,2,",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-638",
      "srNo": 638,
      "question": "What will be output for the following code?\nclass A:\n  money=5000\n  def __init__(self):\n    self.money+=A.money\nclass B(A):\n  def display(self):\n    self.money+=2000\n    print(self.money)\nobj=B()\nobj.display()",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "12000",
        "7000",
        "5000",
        "3000"
      ],
      "answer": "A",
      "correct": "12000",
      "trace": {
        "code": "class A:\n  money=5000\n  def __init__(self):\n    self.money+=A.money\nclass B(A):\n  def display(self):\n    self.money+=2000\n    print(self.money)\nobj=B()\nobj.display()",
        "output": "12000\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-639",
      "srNo": 639,
      "question": "What will be output for the following code?\nclass A:\n  money=5000\n  def __init__(self):\n    self.money+=A.money\nclass B(A):\n  def __init__(self):\n    self.money = 500\n  def display(self):\n    self.money+=2000\n    print(self.money)\nobj=B()\nobj.display()",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "2500",
        "5000",
        "7000",
        "7500"
      ],
      "answer": "A",
      "correct": "2500",
      "trace": {
        "code": "class A:\n  money=5000\n  def __init__(self):\n    self.money+=A.money\nclass B(A):\n  def __init__(self):\n    self.money = 500\n  def display(self):\n    self.money+=2000\n    print(self.money)\nobj=B()\nobj.display()",
        "output": "2500\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-640",
      "srNo": 640,
      "question": "What will be output for the following code?\nclass A:\n  a=20\n  def __init__(self):\n    self.a+=10\nclass B(A):\n  a=15\n  def buy(self):\n    pass\nclass C(B,A):\n  a=30\n  def buy(self):\n    print(self.a)\nobj=C()\nobj.buy()",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "30",
        "20",
        "40",
        "10"
      ],
      "answer": "C",
      "correct": "40",
      "trace": {
        "code": "class A:\n  a=20\n  def __init__(self):\n    self.a+=10\nclass B(A):\n  a=15\n  def buy(self):\n    pass\nclass C(B,A):\n  a=30\n  def buy(self):\n    print(self.a)\nobj=C()\nobj.buy()",
        "output": "40\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-641",
      "srNo": 641,
      "question": "What will be output for the following code?\nclass A:\n  a=50\n  def __init__(self):\n    self.a += 10\nclass B(A):\n  a=15\n  def __init__(self):\n    self.a = 100\n  def buy(self):\n    pass\nclass C(B,A):\n  a=30\n  def buy(self):\n    self.a += 10\n    print(self.a)\nobj=C()\nobj.buy()",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "110",
        "125",
        "115",
        "ERROR"
      ],
      "answer": "A",
      "correct": "110",
      "trace": {
        "code": "class A:\n  a=50\n  def __init__(self):\n    self.a += 10\nclass B(A):\n  a=15\n  def __init__(self):\n    self.a = 100\n  def buy(self):\n    pass\nclass C(B,A):\n  a=30\n  def buy(self):\n    self.a += 10\n    print(self.a)\nobj=C()\nobj.buy()",
        "output": "110\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-642",
      "srNo": 642,
      "question": "What will be the output of the following Python code?\nclass A:\n    def process(self):\n       print(\"A\",end=\",\")\nclass B(A):\n    def process(self):\n       print(\"B\",end=\",\")\n       super().process()\nclass C(A):\n    def process(self):\n       print(\"C\",end=\",\")\n       super().process()\nclass D(B, C):\n    def process(self):\n       print(\"D\",end=\",\")\n       super().process()\nob = D()\nob.process()",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "D,B,C,A,",
        "D,B,A,",
        "D,B,A,C,A,",
        "D,B,"
      ],
      "answer": "A",
      "correct": "D,B,C,A,",
      "trace": {
        "code": "class A:\n    def process(self):\n       print(\"A\",end=\",\")\nclass B(A):\n    def process(self):\n       print(\"B\",end=\",\")\n       super().process()\nclass C(A):\n    def process(self):\n       print(\"C\",end=\",\")\n       super().process()\nclass D(B, C):\n    def process(self):\n       print(\"D\",end=\",\")\n       super().process()\nob = D()\nob.process()",
        "output": "D,B,C,A,",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None. self refers to the instance; inherited methods follow Python’s method resolution order."
    },
    {
      "id": "S3-643",
      "srNo": 643,
      "question": "What will be output for the following code?\narr = np.array([[[1,1,1]],[[1,1,1]],[[1,1,1]],[[1,1,1]],[[1,1,1]]])\nprint(arr.shape[0])",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "(5, 1, 3)",
        "5",
        "1",
        "3"
      ],
      "answer": "B",
      "correct": "5",
      "trace": {
        "code": "arr = np.array([[[1,1,1]],[[1,1,1]],[[1,1,1]],[[1,1,1]],[[1,1,1]]])\nprint(arr.shape[0])",
        "output": "5\n",
        "error": null
      },
      "explanation": "The array has five outer blocks, so shape[0] is 5."
    },
    {
      "id": "S3-644",
      "srNo": 644,
      "question": "What will be the output of the following code?\nimport numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\narr[0, 1, : :-2]",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "array([4, 6])",
        "array([6, 4])",
        "array([5])",
        "array([6, 5, 4])"
      ],
      "answer": "B",
      "correct": "array([6, 4])",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])\narr[0, 1, : :-2]",
        "output": "[6 4]\n",
        "error": null
      },
      "explanation": "Select first outer block, second row [4,5,6], then step -2 from the end: [6,4]."
    },
    {
      "id": "S3-645",
      "srNo": 645,
      "question": "What will be output for the following code?\nimport numpy as np\narr = np.array([[[1,2,3,4,5], [6,7,8,9,10]]])\nprint(arr[:,0, -3])",
      "marks": 1.0,
      "sourcePage": 53,
      "options": [
        "array([2])",
        "array([3])",
        "array([8])",
        "array([4])"
      ],
      "answer": "B",
      "correct": "array([3])",
      "trace": {
        "code": "import numpy as np\narr = np.array([[[1,2,3,4,5], [6,7,8,9,10]]])\nprint(arr[:,0, -3])",
        "output": "[3]\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    },
    {
      "id": "S3-646",
      "srNo": 646,
      "question": "What will be the output of the following code?\nimport numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=2)\nprint(arr.shape)",
      "marks": 1.0,
      "sourcePage": 54,
      "options": [
        "(2, 2, 2)",
        "(1, 2, 4)",
        "(1, 4, 2)",
        "(1, 4, 2)"
      ],
      "answer": "B",
      "correct": "(1, 2, 4)",
      "trace": {
        "code": "import numpy as np\narr1 = np.array([[[1, 2], [3, 4]]])\narr2 = np.array([[[5, 6], [7, 8]]])\narr = np.concatenate((arr1, arr2), axis=2)\nprint(arr.shape)",
        "output": "(1, 2, 4)\n",
        "error": null
      },
      "explanation": "NumPy operations act on arrays; indices are zero-based and axis numbers identify dimensions."
    }
  ],
  "coding": [
    {
      "id": "S3-C647",
      "srNo": 647,
      "question": "Implement the following hierarchy . The Book function has name, n (number of authors), authors (list of authors), publisher,\nISBN, and year as its data members and the derived class has course as its data member. The derived class method\noverrides (extends) the methods of the base\nclass.",
      "marks": 6.0,
      "sourcePage": 54,
      "solution": "class Book:\n    def __init__(self, name, authors, publisher, ISBN, year):\n        self.name, self.authors, self.n = name, authors, len(authors)\n        self.publisher, self.ISBN, self.year = publisher, ISBN, year\n    def display(self): print(self.name, self.n, self.authors, self.publisher, self.ISBN, self.year)\nclass TextBook(Book):\n    def __init__(self, name, authors, publisher, ISBN, year, course):\n        super().__init__(name, authors, publisher, ISBN, year)\n        self.course = course\n    def display(self):\n        super().display()\n        print('Course:', self.course)\nTextBook('Python', ['Author A'], 'Publisher', '1234567890', 2026, 'FCSP').display()",
      "explanation": "The derived textbook inherits general book data, initializes the base with super(), and adds its course.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Python 1 ['Author A'] Publisher 1234567890 2026\nCourse: FCSP"
    },
    {
      "id": "S3-C648",
      "srNo": 648,
      "question": "Implement the following hierarchy . The Staff function has name and salary as its data members, the derived class Teaching\nhas subject as its data member and the class NonTeaching has department as its data member. The derived class method\noverrides (extends) the methods of the base class.",
      "marks": 6.0,
      "sourcePage": 54,
      "solution": "class Staff:\n    def __init__(self, name, salary): self.name, self.salary = name, salary\n    def display(self): print(self.name, self.salary)\nclass Teaching(Staff):\n    def __init__(self, name, salary, subject):\n        super().__init__(name, salary)\n        self.subject = subject\n    def display(self):\n        super().display()\n        print('Subject:', self.subject)\nclass NonTeaching(Staff):\n    def __init__(self, name, salary, department):\n        super().__init__(name, salary)\n        self.department = department\n    def display(self):\n        super().display()\n        print('Department:', self.department)\nTeaching('A', 40000, 'Python').display()\nNonTeaching('B', 30000, 'Administration').display()",
      "explanation": "Both child classes inherit common staff fields and add their own field; overriding display retains base output through super().",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "A 40000\nSubject: Python\nB 30000\nDepartment: Administration"
    },
    {
      "id": "S3-C649",
      "srNo": 649,
      "question": "Create a class called Student, having name and email as its data members and _init_(self, name, email) and putdata(self) as\nbound methods. The _init_ function should assign the values passed as parameters to the requisite variables. The putdata\nfunction should display the data of the student. Create another class called PhDguide having name, email, and students as its\ndata members. Here, the students variable is the list of students under the guide. The PhDguide class should have four\nbound methods: _init_, putdata, add, and remove. The _init_ method should initialize the variables, the putdata should\nshow the data of the guide, include the list of students, the add method should add a student to the list of students of the\nguide and the remove function should remove the student (if the student exists in the list of students of that guide) from the\nlist of students.",
      "marks": 6.0,
      "sourcePage": 54,
      "solution": "class Student:\n    def __init__(self, name, email): self.name, self.email = name, email\n    def putdata(self): print(self.name, self.email)\nclass PhDguide:\n    def __init__(self, name, email, students=None):\n        self.name, self.email = name, email\n        self.students = list(students) if students is not None else []\n    def putdata(self):\n        print('Guide:', self.name, self.email)\n        for student in self.students: student.putdata()\n    def add(self, student):\n        if student not in self.students: self.students.append(student)\n    def remove(self, student):\n        if student in self.students: self.students.remove(student)\ns1, s2 = Student('A','a@example.com'), Student('B','b@example.com')\nguide = PhDguide('Dr C', 'c@example.com')\nguide.add(s1)\nguide.add(s2)\nguide.putdata()\nguide.remove(s1)\nguide.putdata()",
      "explanation": "A guide contains a list of Student objects. Add and remove manage that association; display includes both guide and student details. This is composition, not inheritance.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Guide: Dr C c@example.com\nA a@example.com\nB b@example.com\nGuide: Dr C c@example.com\nB b@example.com"
    },
    {
      "id": "S3-C650",
      "srNo": 650,
      "question": "Program to demonstrate the issue of invoking __init__() in case of multiple inheritance",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "class A:\n    def __init__(self):\n        print('A initialized')\n        super().__init__()\nclass B:\n    def __init__(self):\n        print('B initialized')\n        super().__init__()\nclass C(A, B):\n    def __init__(self):\n        print('C initialized')\n        super().__init__()\nC()\nprint([c.__name__ for c in C.__mro__])",
      "explanation": "Cooperative super() follows the method resolution order C, A, B, object and initializes each once. Calling only A.__init__ without cooperative super can leave B uninitialized.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "C initialized\nA initialized\nB initialized\n['C', 'A', 'B', 'object']"
    },
    {
      "id": "S3-C651",
      "srNo": 651,
      "question": "Write program that has a class point. Define another class location which has two objects (Location and Destination) of class\npoint. Also define function in Location that prints reflection of Destination on the x axis.",
      "marks": 6.0,
      "sourcePage": 54,
      "solution": "import math\nclass Point:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def distance_from_origin(self): return math.hypot(self.x, self.y)\n    def translate(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        return self\n    def reflect_x(self): return Point(self.x, -self.y)\n    def distance(self, other): return math.hypot(self.x-other.x, self.y-other.y)\n    def __repr__(self): return f'Point({self.x}, {self.y})'\n\nclass Location:\n    def __init__(self, location, destination):\n        self.location, self.destination = location, destination\n    def reflection(self):\n        print(self.destination.reflect_x())\nLocation(Point(0,0), Point(3,4)).reflection()",
      "explanation": "Location composes two Point objects. Reflecting the destination (3,4) across the x-axis gives (3,-4).",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Point(3, -4)"
    },
    {
      "id": "S3-C652",
      "srNo": 652,
      "question": "Write a program that overload the + operator so that it can add two object of class fraction",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "from math import gcd\nclass Fraction:\n    def __init__(self, numerator, denominator):\n        if denominator == 0: raise ValueError('Zero denominator')\n        divisor = gcd(numerator, denominator)\n        sign = -1 if denominator < 0 else 1\n        self.numerator = sign * numerator // divisor\n        self.denominator = abs(denominator) // divisor\n    def __add__(self, other):\n        return Fraction(self.numerator*other.denominator + other.numerator*self.denominator, self.denominator*other.denominator)\n    def __mul__(self, other):\n        return Fraction(self.numerator*other.numerator, self.denominator*other.denominator)\n    def __repr__(self): return f'{self.numerator}/{self.denominator}'\n\nprint(Fraction(1,2) + Fraction(1,3))",
      "explanation": "Overload __add__ using cross multiplication; normalize the result with GCD. Output: 5/6.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "5/6"
    },
    {
      "id": "S3-C653",
      "srNo": 653,
      "question": "Write a program that overload the * operator so that it can multiply two object of class fraction",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "from math import gcd\nclass Fraction:\n    def __init__(self, numerator, denominator):\n        if denominator == 0: raise ValueError('Zero denominator')\n        divisor = gcd(numerator, denominator)\n        sign = -1 if denominator < 0 else 1\n        self.numerator = sign * numerator // divisor\n        self.denominator = abs(denominator) // divisor\n    def __add__(self, other):\n        return Fraction(self.numerator*other.denominator + other.numerator*self.denominator, self.denominator*other.denominator)\n    def __mul__(self, other):\n        return Fraction(self.numerator*other.numerator, self.denominator*other.denominator)\n    def __repr__(self): return f'{self.numerator}/{self.denominator}'\n\nprint(Fraction(2,3) * Fraction(3,4))",
      "explanation": "Overload __mul__; multiply numerators and denominators, then reduce. Output: 1/2.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "1/2"
    },
    {
      "id": "S3-C654",
      "srNo": 654,
      "question": "Write a program to find the distance between two points in cartesian cordinate system",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "import math\nclass Point:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def distance_from_origin(self): return math.hypot(self.x, self.y)\n    def translate(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        return self\n    def reflect_x(self): return Point(self.x, -self.y)\n    def distance(self, other): return math.hypot(self.x-other.x, self.y-other.y)\n    def __repr__(self): return f'Point({self.x}, {self.y})'\n\na = Point(float(input('x1: ')), float(input('y1: ')))\nb = Point(float(input('x2: ')), float(input('y2: ')))\nprint(a.distance(b))",
      "explanation": "Euclidean distance is sqrt((x2-x1)² + (y2-y1)²).",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleInputs": [
        "0",
        "0",
        "3",
        "4"
      ],
      "exampleOutput": "5.0"
    },
    {
      "id": "S3-C655",
      "srNo": 655,
      "question": "Write a program to find the slope between two points in cartesian cordinate system",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "x1, y1 = float(input('x1: ')), float(input('y1: '))\nx2, y2 = float(input('x2: ')), float(input('y2: '))\nif x1 == x2: print('Undefined slope (vertical line or coincident points)')\nelse: print((y2-y1)/(x2-x1))",
      "explanation": "Slope is change in y divided by change in x. A zero x difference has no finite slope.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleInputs": [
        "0",
        "0",
        "3",
        "6"
      ],
      "exampleOutput": "2.0"
    },
    {
      "id": "S3-C656",
      "srNo": 656,
      "question": "Create a class student with following member attributes: roll no, name, age and total marks. Create suitable methods for\nreading and printing member variables. Write a python program to overload ‘==’ operator to print the details of students\nhaving same marks.",
      "marks": 6.0,
      "sourcePage": 54,
      "solution": "class Student:\n    def __init__(self, roll, name, age, marks): self.roll, self.name, self.age, self.marks = roll, name, age, marks\n    @classmethod\n    def read(cls): return cls(int(input('Roll: ')), input('Name: '), int(input('Age: ')), float(input('Total marks: ')))\n    def display(self): print(self.roll, self.name, self.age, self.marks)\n    def __eq__(self, other):\n        if not isinstance(other, Student): return NotImplemented\n        return self.marks == other.marks\ns1, s2 = Student.read(), Student.read()\nif s1 == s2:\n    s1.display()\n    s2.display()\nelse: print('Different total marks')",
      "explanation": "Equality compares total marks rather than object identity. Print both records when marks match.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "A",
        "19",
        "80",
        "2",
        "B",
        "20",
        "80"
      ],
      "exampleOutput": "1 A 19 80.0\n2 B 20 80.0"
    },
    {
      "id": "S3-C657",
      "srNo": 657,
      "question": "Write a program to create a class called Data having “value” as its data member. Overload the (>) and the (<) operator for\nthe class. Instantiate the class and compare the objects using __lt__ and __gt__.",
      "marks": 5.0,
      "sourcePage": 54,
      "solution": "class Data:\n    def __init__(self, value): self.value = value\n    def __lt__(self, other): return self.value < other.value\n    def __gt__(self, other): return self.value > other.value\na, b = Data(5), Data(10)\nprint(a < b, a > b)",
      "explanation": "The comparison methods delegate to the stored values. Output is True False.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "True False"
    },
    {
      "id": "S3-C658",
      "srNo": 658,
      "question": "The following illustration creates a class called data. If no argument is passed while instantiating the class a false is returned,\notherwise a true is returned.",
      "marks": 4.0,
      "sourcePage": 54,
      "solution": "class Data:\n    def __init__(self, value=None): self.value = value\n    def __bool__(self): return self.value is not None\nprint(bool(Data()))\nprint(bool(Data(0)))\nprint(bool(Data(5)))",
      "explanation": "A custom __bool__ returns False for no supplied value and True for supplied values, including zero. __init__ cannot return a boolean.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "False\nTrue\nTrue"
    },
    {
      "id": "S3-C659",
      "srNo": 659,
      "question": "Create a 5X2 integer array from a range between 100 to 200 such that the difference between each element is 10",
      "marks": 3.0,
      "sourcePage": 54,
      "solution": "import numpy as np\nprint(np.arange(100, 200, 10).reshape(5, 2))",
      "explanation": "arange excludes 200, giving ten values 100-190; reshape creates five rows and two columns.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "[[100 110]\n [120 130]\n [140 150]\n [160 170]\n [180 190]]"
    },
    {
      "id": "S3-C660",
      "srNo": 660,
      "question": "Following is the provided numPy array. Return array of items by taking the third column from all rows\nsampleArray = numpy.array([[11 ,22, 33], [44, 55, 66], [77, 88, 99]])",
      "marks": 2.0,
      "sourcePage": 54,
      "solution": "import numpy as np\na = np.array([[11,22,33],[44,55,66],[77,88,99]])\nprint(a[:, 2])",
      "explanation": "Column 3 uses zero-based index 2. : selects every row. Output: [33 66 99].",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "[33 66 99]"
    },
    {
      "id": "S3-C661",
      "srNo": 661,
      "question": "Return array of odd rows and even columns from below numpy array\nsampleArray = numpy.array([[3 ,6, 9, 12], [15 ,18, 21, 24], [27 ,30, 33, 36], [39 ,42, 45, 48], [51 ,54, 57, 60]])",
      "marks": 3.0,
      "sourcePage": 54,
      "solution": "import numpy as np\na = np.array([[3,6,9,12],[15,18,21,24],[27,30,33,36],[39,42,45,48],[51,54,57,60]])\nprint(a[::2, 1::2])",
      "explanation": "Interpret odd rows and even columns as one-based row/column numbers: rows 1,3,5 and columns 2,4.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "[[ 6 12]\n [30 36]\n [54 60]]"
    },
    {
      "id": "S3-C662",
      "srNo": 662,
      "question": "Sort following NumPy array\nCase 1: Sort array by the second row\nCase 2: Sort the array by the second column\nsampleArray = numpy.array([[34,43,73],[82,22,12],[53,94,66]])",
      "marks": 2.0,
      "sourcePage": 54,
      "solution": "import numpy as np\na = np.array([[34,43,73],[82,22,12],[53,94,66]])\nprint('Columns ordered by second row:', a[:, a[1].argsort()])\nprint('Rows ordered by second column:', a[a[:,1].argsort(), :])",
      "explanation": "argsort returns indices; reorder whole columns using the second row and whole rows using the second column.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Columns ordered by second row: [[73 43 34]\n [12 22 82]\n [66 94 53]]\nRows ordered by second column: [[82 22 12]\n [34 43 73]\n [53 94 66]]"
    },
    {
      "id": "S3-C663",
      "srNo": 663,
      "question": "Print max from axis 0 and min from axis 1 from the following 2-D array.\nsampleArray = numpy.array([[34,43,73],[82,22,12],[53,94,66]])",
      "marks": 3.0,
      "sourcePage": 54,
      "solution": "import numpy as np\na = np.array([[34,43,73],[82,22,12],[53,94,66]])\nprint(a.max(axis=0))\nprint(a.min(axis=1))",
      "explanation": "axis 0 reduces rows to one maximum per column: [82 94 73]. axis 1 yields one minimum per row: [34 12 53].",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "[82 94 73]\n[34 12 53]"
    },
    {
      "id": "S3-C664",
      "srNo": 664,
      "question": "Write a NumPy array program to convert the values of Fahrenheit degrees into Celsius degrees. The numpy array to be\nconsidered is [0, 12, 45.21, 34, 99.91, 32] for Fahrenheit values.\nValues are stored into a NumPy array. After converting the following numpy array into Celsius, then sort the array and find\nthe position of 0.0 (means where 0.0 value is located i.e. it’s index)\nFormula to convert value of Fahrenheit to Celsius is:\nC=5*F/9 - 5*32/9\nOutput:\nValues in Fahrenheit degrees:\n[ 0. 12. 45.21 34. 99.91 32. ]\nValues in Centigrade degrees:\n[-17.77777778 -11.11111111 7.33888889 1.11111111 37.72777778\n0. ]\n[-17.77777778 -11.11111111 0. 1.11111111 7.33888889\n37.72777778]\n(array([2], dtype=int64),)",
      "marks": 3.0,
      "sourcePage": 54,
      "solution": "import numpy as np\nf = np.array([0,12,45.21,34,99.91,32])\nc = (f-32)*5/9\nprint('Fahrenheit:', f)\nprint('Celsius:', c)\nc = np.sort(c)\nprint('Sorted:', c)\nprint('Position of zero:', np.where(np.isclose(c, 0)))",
      "explanation": "Convert elementwise, sort ascending, then locate zero. The sorted zero has index 2, matching the PDF.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Fahrenheit: [ 0.   12.   45.21 34.   99.91 32.  ]\nCelsius: [-17.77777778 -11.11111111   7.33888889   1.11111111  37.72777778\n   0.        ]\nSorted: [-17.77777778 -11.11111111   0.           1.11111111   7.33888889\n  37.72777778]\nPosition of zero: (array([2]),)"
    },
    {
      "id": "S3-C665",
      "srNo": 665,
      "question": "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])\nReshape arr into a 2D array and a 3D array.",
      "marks": 2.0,
      "sourcePage": 54,
      "solution": "import numpy as np\na = np.arange(1, 13)\nprint(a.reshape(3, 4))\nprint(a.reshape(2, 2, 3))",
      "explanation": "Both shapes use all 12 elements: 3×4 and 2×2×3.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "[[ 1  2  3  4]\n [ 5  6  7  8]\n [ 9 10 11 12]]\n[[[ 1  2  3]\n  [ 4  5  6]]\n\n [[ 7  8  9]\n  [10 11 12]]]"
    },
    {
      "id": "S3-C666",
      "srNo": 666,
      "question": "Imagine you own a call center. Use the following abstract class template to create three more classes, Respondent,\nManager, and Director that inherit this Employee Abstract Class.\nfrom abc import ABC, abstractmethod\nclass Employee(ABC):\n@abstractmethod\ndef receive_call(self):\npass\n@abstractmethod\ndef end_call(self):\npass\n@abstractmethod\ndef is_free(self):\npass\n@abstractmethod\ndef get_rank(self):\npass\nCreate a program using the instructions given below:\n1. Create a constructor in all three classes (Respondent, Manager and Director) which takes the id and name as input and\ninitializes two additional variables, rank and free. rank should be equal to 3 for Respondent, 2 for Manager and 1 for\nDirector. free should be a boolean variable with value True initially. (1 mark)\n2. Implement rest of the methods in all three classes in the following way: (2 marks)\na. receive_call(): prints the message, “call received by (name of the employee)” and sets the free variable to False.\nb. end_call(): prints the message, “call ended” and sets the free variable to True.\nc. is_free(): returns the value of the free variable\nd. get_rank(): returns the value of the rank variable\n3. Create a class Call, with a constructor that accepts id and name of the caller and initializes a variable called assigned to\nFalse. (0.5 marks)\n4. Create a class CallHandler, with three lists, respondents, managers and directors as class variables. (0.5 marks)\n5. Create an add_employee() method in CallHandler class that allows you to add an employee (an object of\nRespondent/Manager/Director) into one of the above lists according to their rank. (1 mark)\n6. Create a dispatch_call() method in CallHandler class that takes a call object as a parameter. This method should find the\nfirst available employee starting from rank 3, then rank 2 and then rank 1. If a free employee is found, call its receive_call()\nfunction and change the call’s assigned variable value to True. If no free employee is found, print the message: “Sorry! All\nemployees are currently busy.” (2 marks)\n7. Create 3 Respondent objects, 2 Manager objects and 1 Director object and add them into the list of available employees\nusing the CallHandler’s add_employee() method. (1 mark)\n8. Create a Call object and demonstrate how it is assigned to an employee. (1 mark)",
      "marks": 9.0,
      "sourcePage": 55,
      "solution": "from abc import ABC, abstractmethod\nclass Employee(ABC):\n    def __init__(self, id, name, rank): self.id, self.name, self.rank, self.free = id, name, rank, True\n    @abstractmethod\n    def receive_call(self): pass\n    @abstractmethod\n    def end_call(self): pass\n    @abstractmethod\n    def is_free(self): pass\n    @abstractmethod\n    def get_rank(self): pass\nclass CallEmployee(Employee):\n    def receive_call(self):\n        print('Call received by', self.name)\n        self.free = False\n    def end_call(self):\n        print('Call ended')\n        self.free = True\n    def is_free(self): return self.free\n    def get_rank(self): return self.rank\nclass Respondent(CallEmployee):\n    def __init__(self, id, name): super().__init__(id, name, 3)\nclass Manager(CallEmployee):\n    def __init__(self, id, name): super().__init__(id, name, 2)\nclass Director(CallEmployee):\n    def __init__(self, id, name): super().__init__(id, name, 1)\nclass Call:\n    def __init__(self, id, name): self.id, self.name, self.assigned = id, name, False\nclass CallHandler:\n    respondents, managers, directors = [], [], []\n    def add_employee(self, employee):\n        {3:self.respondents, 2:self.managers, 1:self.directors}[employee.get_rank()].append(employee)\n    def dispatch_call(self, call):\n        if call.assigned: return\n        for group in (self.respondents, self.managers, self.directors):\n            for employee in group:\n                if employee.is_free():\n                    employee.receive_call()\n                    call.assigned = True\n                    return employee\n        print('Sorry! All employees are currently busy.')\nhandler = CallHandler()\nfor i in range(3): handler.add_employee(Respondent(i, 'Respondent ' + str(i)))\nfor i in range(2): handler.add_employee(Manager(i+3, 'Manager ' + str(i)))\nhandler.add_employee(Director(5, 'Director'))\ncall = Call(1, 'Caller')\nemployee = handler.dispatch_call(call)\nprint('Assigned:', call.assigned)\nif employee: employee.end_call()",
      "explanation": "Implement the abstract interface in CallEmployee and inherit it for the three ranks. Search respondents before managers before directors. The class-level employee lists are shared, as requested by the PDF.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Call received by Respondent 0\nAssigned: True\nCall ended"
    },
    {
      "id": "S3-C667",
      "srNo": 667,
      "question": "Write a python program to create a Bus child class that inherits from the Vehicle class.\nIn Vehicle class vehicle name, mileage and seatingcapacity as its data member. The default fare charge of any vehicle is\nseating capacity * 100. If Vehicle is Bus instance, we need to add an extra 10% on full fare as a maintenance charge. So total\nfare for bus instance will become the final amount = total fare + 10% of the total fare.\nSample Output:\nThe bus seating capacity is 50. so, the final fare amount should be 5000+500=5500.\nThe car seating capacity is 5. so, the final fare amount should be 500.",
      "marks": 4.0,
      "sourcePage": 55,
      "solution": "class Vehicle:\n    def __init__(self, name, mileage, seatingcapacity): self.name, self.mileage, self.seatingcapacity = name, mileage, seatingcapacity\n    def fare(self): return self.seatingcapacity * 100\nclass Bus(Vehicle):\n    def fare(self): return super().fare() * 1.10\nprint(Bus('Bus', 10, 50).fare())\nprint(Vehicle('Car', 20, 5).fare())",
      "explanation": "Override the fare for a bus, adding 10% maintenance. Results are 5500 and 500.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "5500.0\n500"
    },
    {
      "id": "S3-C668",
      "srNo": 668,
      "question": "Create an abstract class named Shape.\nCreate an abstract method named calculate_area for the Shape class.\nCreate Two Classes named Rectangle and Circle which inherit Shape class.\nCreate calculate_area method in Rectangle class. It should return the area of the rectangle object. (area of rectangle =\n(length * breadth))\nCreate calculate_area method in Circle class. It should return the area of the circle object.\n(area of circle =πr^2))\nCreate objects of Rectangle and Circle class.\nThe python Program Should also check whether the area of one Rectangle object is greater\nthan another rectangle object by overloading > operator.\nExecute the method resolution order of the Circle class.",
      "marks": 9.0,
      "sourcePage": 55,
      "solution": "from abc import ABC, abstractmethod\nfrom math import pi\nclass Shape(ABC):\n    @abstractmethod\n    def calculate_area(self): pass\nclass Rectangle(Shape):\n    def __init__(self, length, breadth): self.length, self.breadth = length, breadth\n    def calculate_area(self): return self.length*self.breadth\n    def __gt__(self, other): return self.calculate_area() > other.calculate_area()\nclass Circle(Shape):\n    def __init__(self, radius): self.radius = radius\n    def calculate_area(self): return pi*self.radius**2\nr1, r2, c = Rectangle(5,4), Rectangle(3,2), Circle(2)\nprint(r1.calculate_area(), r2.calculate_area(), c.calculate_area())\nprint(r1 > r2)\nprint([cls.__name__ for cls in Circle.__mro__])",
      "explanation": "Abstract methods specify a shared interface. __gt__ compares rectangle areas; the Circle MRO is Circle, Shape, ABC, object.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "20 6 12.566370614359172\nTrue\n['Circle', 'Shape', 'ABC', 'object']"
    },
    {
      "id": "S3-C669",
      "srNo": 669,
      "question": "Create an abstract class named Employee. Define an abstract method calculate_salary() in the Employee class.\nCreate two classes, FullTimeEmployee and PartTimeEmployee, that inherit from the Employee class. Implement the\ncalculate_salary() method in both derived classes and use constructors to initialize the required data members.\n• Salary of FullTimeEmployee = basic salary + allowance\n• Salary of PartTimeEmployee = hours worked * rate per hour\nCreate objects of both classes and display their respective salaries.\nAdditionally, overload the operator > to compare the salaries of two FullTimeEmployee objects.",
      "marks": 5.0,
      "sourcePage": 55,
      "solution": "from abc import ABC, abstractmethod\nclass Employee(ABC):\n    @abstractmethod\n    def calculate_salary(self): pass\nclass FullTimeEmployee(Employee):\n    def __init__(self, basic, allowance): self.basic, self.allowance = basic, allowance\n    def calculate_salary(self): return self.basic + self.allowance\n    def __gt__(self, other): return self.calculate_salary() > other.calculate_salary()\nclass PartTimeEmployee(Employee):\n    def __init__(self, hours, rate): self.hours, self.rate = hours, rate\n    def calculate_salary(self): return self.hours*self.rate\nf1, f2, part = FullTimeEmployee(30000,5000), FullTimeEmployee(25000,4000), PartTimeEmployee(20,500)\nprint(f1.calculate_salary(), f2.calculate_salary(), part.calculate_salary())\nprint(f1 > f2)",
      "explanation": "The same calculate_salary interface has different formulas. Operator > compares the two full-time salaries.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "35000 29000 10000\nTrue"
    },
    {
      "id": "S3-C670",
      "srNo": 670,
      "question": "Write a python program to demonstrate the use of super() method to call the method of base class.",
      "marks": 4.0,
      "sourcePage": 55,
      "solution": "class Parent:\n    def greet(self): print('Hello from Parent')\nclass Child(Parent):\n    def greet(self):\n        super().greet()\n        print('Hello from Child')\nChild().greet()",
      "explanation": "super().greet() calls the base implementation before the child adds its own behavior.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "Hello from Parent\nHello from Child"
    },
    {
      "id": "S3-C671",
      "srNo": 671,
      "question": "Create a class called Matrix containing constructor that initialized the number of rows and number of columns of a new\nMatrix object.",
      "marks": 9.0,
      "sourcePage": 55,
      "solution": "class Matrix:\n    def __init__(self, rows, columns):\n        if rows < 1 or columns < 1: raise ValueError('Positive dimensions required')\n        self.rows, self.columns = rows, columns\n        self.values = [[0 for _ in range(columns)] for _ in range(rows)]\nm = Matrix(2,3)\nprint(m.rows, m.columns, m.values)",
      "explanation": "Initialize independent rows; repeating one inner list would cause shared-row mutations.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "2 3 [[0, 0, 0], [0, 0, 0]]"
    },
    {
      "id": "S3-C672",
      "srNo": 672,
      "question": "Find the MRO of class Z of below program:\nclass A: pass\nclass B: pass\nclass C: pass\nclass D:pass\nclass E:pass\nclass K1(C,A,B): pass\nclass K3(A,D): pass\nclass K2(B,D,E): pass\nclass Z( K1,K3,K2): pass",
      "marks": 2.0,
      "sourcePage": 56,
      "solution": "class A: pass\nclass B: pass\nclass C: pass\nclass D: pass\nclass E: pass\nclass K1(C,A,B): pass\nclass K3(A,D): pass\nclass K2(B,D,E): pass\nclass Z(K1,K3,K2): pass\nprint([cls.__name__ for cls in Z.__mro__])",
      "explanation": "Python uses C3 linearization. Output: Z, K1, C, K3, A, K2, B, D, E, object.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleOutput": "['Z', 'K1', 'C', 'K3', 'A', 'K2', 'B', 'D', 'E', 'object']"
    },
    {
      "id": "S3-C673",
      "srNo": 673,
      "question": "Write a Python Program to Find the Net Salary of Employee using Inheritance.\nCreate three Class Employee, Perks, NetSalary. Make an Employee class as an abstract class.\nEmployee class should have methods for following tasks.\n- To get employee details like employee id, name and salary from user.\n- To print the Employee details.\n- return Salary.\n- An abstract method emp_id.\nPerks class should have methods for following tasks.\n- To calculate DA, HRA, PF.\n- To print the individual and total of Perks (DA+HRA-PF).\nNetsalary class should have methods for following tasks.\n- Calculate the total Salary after Perks.\n- Print employee detail also prints DA, HRA, PF and net salary.\nNote 1: DA-35%, HRA-17%, PF-12%\nNote 2: It is compulsory to create objects and demonstrating the methods with\nCorrect output. Example:\nEmployee ID: 1\nEmployee Name: John\nEmployee Basic Salary: 25000\nDA: 8750.0\nHRA: 4250.0\nPF: 3000.0\nTotal Salary: 35000.0",
      "marks": 9.0,
      "sourcePage": 56,
      "solution": "from abc import ABC, abstractmethod\nclass Employee(ABC):\n    def __init__(self, id, name, salary): self.id, self.name, self.salary = id, name, salary\n    @abstractmethod\n    def emp_id(self): pass\n    @classmethod\n    def read(cls): return cls(int(input('ID: ')), input('Name: '), float(input('Basic salary: ')))\n    def details(self): print('ID:', self.emp_id(), 'Name:', self.name, 'Basic:', self.salary)\n    def get_salary(self): return self.salary\nclass Perks(Employee):\n    def emp_id(self): return self.id\n    def calculate_perks(self):\n        self.da, self.hra, self.pf = self.salary*0.35, self.salary*0.17, self.salary*0.12\n        return self.da + self.hra - self.pf\n    def print_perks(self):\n        perks = self.calculate_perks()\n        print('DA:', self.da, 'HRA:', self.hra, 'PF:', self.pf, 'Total perks:', perks)\nclass NetSalary(Perks):\n    def total_salary(self): return self.get_salary() + self.calculate_perks()\n    def display(self):\n        self.details()\n        self.print_perks()\n        print('Total salary:', self.total_salary())\nNetSalary.read().display()",
      "explanation": "Employee is abstract; Perks supplies emp_id and allowance calculations. NetSalary adds basic salary to DA + HRA - PF. A basic salary of 25000 gives 35000 net.",
      "topic": "Inheritance, operators and NumPy",
      "starterCode": "",
      "exampleInputs": [
        "1",
        "John",
        "25000"
      ],
      "exampleOutput": "ID: 1 Name: John Basic: 25000.0\nDA: 8750.0 HRA: 4250.0 PF: 3000.0 Total perks: 10000.0\nTotal salary: 35000.0"
    }
  ]
};
