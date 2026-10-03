// Full SEM III unit 5; question numbers match the 2026 source PDF.
var SEM3_UNIT_5 = {
  "unit": 5,
  "title": "Unit 5 — Lists, dictionaries, sets and functional programming",
  "mcqs": [
    {
      "id": "S3-320",
      "srNo": 320,
      "question": "Which of the following commands will create a list?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "list1 = list()",
        "list1 = []",
        "list1 = list([1, 2, 3])",
        "All of the mentioned"
      ],
      "answer": "D",
      "correct": "All of the mentioned",
      "explanation": "A list can be constructed with square brackets, list() or list(iterable)."
    },
    {
      "id": "S3-321",
      "srNo": 321,
      "question": "What is the output when we execute list(“hello”)?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
        "[‘hello’]",
        "[‘llo’]",
        "[‘olleh’]"
      ],
      "answer": "A",
      "correct": "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
      "explanation": "list iterates through the string and collects its five individual characters."
    },
    {
      "id": "S3-322",
      "srNo": 322,
      "question": "Suppose listExample is [‘h’,’e’,’l’,’l’,’o’], what is len(listExample)?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "5",
        "4",
        "None",
        "Error"
      ],
      "answer": "A",
      "correct": "5",
      "explanation": "There are five list elements, including two separate l entries."
    },
    {
      "id": "S3-323",
      "srNo": 323,
      "question": "Suppose list1 is [1, 3, 2], What is list1 * 2?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[2, 6, 4]",
        "[1, 3, 2, 1, 3]",
        "[1, 3, 2, 1, 3, 2]",
        "[1, 3, 2, 3, 2, 1]"
      ],
      "answer": "C",
      "correct": "[1, 3, 2, 1, 3, 2]",
      "explanation": "Multiplying a list by 2 repeats its sequence; it does not double numeric values."
    },
    {
      "id": "S3-324",
      "srNo": 324,
      "question": "What will be the output of the following Python code?\nnames1 = ['Amir', 'Bala', 'Chales']\nif 'amir' in names1:\n  print(1)\nelse:\n  print(2)",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "1",
        "Error",
        "2",
        "None of the mentioned"
      ],
      "answer": "C",
      "correct": "2",
      "trace": {
        "code": "names1 = ['Amir', 'Bala', 'Chales']\nif 'amir' in names1:\n  print(1)\nelse:\n  print(2)",
        "output": "2\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-325",
      "srNo": 325,
      "question": "What will be the output of the following Python code?\nlist1 = [1, 2, 3, 4]\nlist2 = [5, 6, 7, 8]\nprint(len(list1 + list2))",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "2",
        "4",
        "5",
        "8"
      ],
      "answer": "D",
      "correct": "8",
      "trace": {
        "code": "list1 = [1, 2, 3, 4]\nlist2 = [5, 6, 7, 8]\nprint(len(list1 + list2))",
        "output": "8\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-326",
      "srNo": 326,
      "question": "Which of the following would give an error?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        ". list1=[]",
        "list1=[]*3",
        "list1=[2,8,7]",
        "None of the above"
      ],
      "answer": "D",
      "correct": "None of the above",
      "explanation": "All listed list operations are valid; Python accepts slices extending outside the list bounds."
    },
    {
      "id": "S3-327",
      "srNo": 327,
      "question": "Suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "print(list1[0])",
        "print(list1[:2])",
        "print(list1[:-2])",
        "All of the mentioned"
      ],
      "answer": "D",
      "correct": "All of the mentioned",
      "explanation": "A slice may omit start or stop and may use negative bounds; stop is excluded."
    },
    {
      "id": "S3-328",
      "srNo": 328,
      "question": "Suppose list1 is [2, 33, 222, 14, 25], What is list1[-1]?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "Error",
        "None",
        "25",
        "2"
      ],
      "answer": "C",
      "correct": "25",
      "explanation": "Index -1 returns the final list element, 25."
    },
    {
      "id": "S3-329",
      "srNo": 329,
      "question": "Suppose list1 is [2, 33, 222, 14, 25], What is list1[:-1]?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[2, 33, 222, 14]",
        "Error",
        "25",
        "[25, 14, 222, 33, 2]"
      ],
      "answer": "A",
      "correct": "[2, 33, 222, 14]",
      "explanation": "[:-1] selects every element except the final one."
    },
    {
      "id": "S3-330",
      "srNo": 330,
      "question": "What will be the output of the following Python code?\nnames = ['Amir', 'Bear', 'Charlton', 'Daman']\nprint(names[-1][-1])",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "A",
        "Daman",
        "Error",
        "n"
      ],
      "answer": "D",
      "correct": "n",
      "trace": {
        "code": "names = ['Amir', 'Bear', 'Charlton', 'Daman']\nprint(names[-1][-1])",
        "output": "n\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-331",
      "srNo": 331,
      "question": "Which of the following Python code will give different output from the others?",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "for i in range(0,5):\nprint(i)",
        "for j in [0,1,2,3,4]:\nprint(j)",
        "for k in [0,1,2,3,4,5]:\nprint(k)",
        "for l in range(0,5,1):\nprint(l)"
      ],
      "answer": "C",
      "correct": "for k in [0,1,2,3,4,5]:\nprint(k)",
      "explanation": "This option visits indices 0 through 5, while the other ranges differ in included values or endpoints."
    },
    {
      "id": "S3-332",
      "srNo": 332,
      "question": "What will be the output of the following Python code?\nnames1 = ['Amir', 'Bear', 'Charlton', 'Daman']\nnames2 = names1\nnames3 = names1[:]\nnames2[0] = 'Alice'\nnames3[1] = 'Bob'\nsum = 0\nfor ls in (names1, names2, names3):\n  if ls[0] == 'Alice':\n    sum += 1\n  if ls[1] == 'Bob':\n    sum += 10\nprint(sum)",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "11",
        "12",
        "21",
        "22"
      ],
      "answer": "B",
      "correct": "12",
      "trace": {
        "code": "names1 = ['Amir', 'Bear', 'Charlton', 'Daman']\nnames2 = names1\nnames3 = names1[:]\nnames2[0] = 'Alice'\nnames3[1] = 'Bob'\nsum = 0\nfor ls in (names1, names2, names3):\n  if ls[0] == 'Alice':\n    sum += 1\n  if ls[1] == 'Bob':\n    sum += 10\nprint(sum)",
        "output": "12\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-333",
      "srNo": 333,
      "question": "What will be the output of the following Python code?\nnames1 = ['Amir', 'Bear', 'Charlton', 'Daman']\nnames2 = names1\nnames3 = names1\nnames2[0] = 'Alice'\nnames3[1] = 'Bob'\nsum = 0\nfor ls in (names1, names2, names3):\n  if ls[0] == 'Alice':\n    sum += 1\n  if ls[1] == 'Bob':\n    sum += 10\nprint(sum)",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "12",
        "33",
        "32",
        "20"
      ],
      "answer": "B",
      "correct": "33",
      "trace": {
        "code": "names1 = ['Amir', 'Bear', 'Charlton', 'Daman']\nnames2 = names1\nnames3 = names1\nnames2[0] = 'Alice'\nnames3[1] = 'Bob'\nsum = 0\nfor ls in (names1, names2, names3):\n  if ls[0] == 'Alice':\n    sum += 1\n  if ls[1] == 'Bob':\n    sum += 10\nprint(sum)",
        "output": "33\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-334",
      "srNo": 334,
      "question": "What will be the output of the following Python code?\nlst=[3,4,6,1,2]\nlst[1:2]=[7,8]\nprint(lst)",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[3, 7, 8, 6, 1, 2]",
        "Syntax error",
        "[3,[7,8],6,1,2]",
        "[3,4,6,7,8]"
      ],
      "answer": "A",
      "correct": "[3, 7, 8, 6, 1, 2]",
      "trace": {
        "code": "lst=[3,4,6,1,2]\nlst[1:2]=[7,8]\nprint(lst)",
        "output": "[3, 7, 8, 6, 1, 2]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-335",
      "srNo": 335,
      "question": "What will be the output of below Python code?\nlist1=[8,0,9,5]\nprint(list1[::-1])",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[5,9,0,8]",
        "[8,0,9]",
        "[8,0,9,5]",
        "[0,9,5]"
      ],
      "answer": "A",
      "correct": "[5,9,0,8]",
      "trace": {
        "code": "list1=[8,0,9,5]\nprint(list1[::-1])",
        "output": "[5, 9, 0, 8]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-336",
      "srNo": 336,
      "question": "Suppose list1 = [0.5 * x for x in range (0, 4)], list1 is:",
      "marks": 1.0,
      "sourcePage": 24,
      "options": [
        "[0, 1, 2, 3]",
        "[0, 1, 2, 3, 4]",
        "[0.0, 0.5, 1.0, 1.5]",
        "[0.0, 0.5, 1.0, 1.5, 2.0]"
      ],
      "answer": "C",
      "correct": "[0.0, 0.5, 1.0, 1.5]",
      "explanation": "range(0,4) is 0,1,2,3; multiply each by 0.5 to get 0.0,0.5,1.0,1.5."
    },
    {
      "id": "S3-337",
      "srNo": 337,
      "question": "To add a new element to a list we use which command?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "list1.add(5)",
        "list1.append(5)",
        "list1.addLast(5)",
        "list1.addEnd(5)"
      ],
      "answer": "B",
      "correct": "list1.append(5)",
      "explanation": "append adds one item to the end of the list and returns None."
    },
    {
      "id": "S3-338",
      "srNo": 338,
      "question": "What will be the output of the following Python code?\nnumbers = [1, 2, 3, 4]\nnumbers.append([5,6,7,8])\nprint(len(numbers))",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "4",
        "5",
        "8",
        "12"
      ],
      "answer": "B",
      "correct": "5",
      "trace": {
        "code": "numbers = [1, 2, 3, 4]\nnumbers.append([5,6,7,8])\nprint(len(numbers))",
        "output": "5\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-339",
      "srNo": 339,
      "question": "What will be the output of the following Python code?\na=[1,2,3]\nb=a.append(4)\nprint(a)\nprint(b)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1,2,3,4]\n[1,2,3,4]",
        "[1, 2, 3, 4]\nNone",
        "Syntax error",
        "[1,2,3]\n[1,2,3,4]"
      ],
      "answer": "B",
      "correct": "[1, 2, 3, 4]\nNone",
      "trace": {
        "code": "a=[1,2,3]\nb=a.append(4)\nprint(a)\nprint(b)",
        "output": "[1, 2, 3, 4]\nNone\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-340",
      "srNo": 340,
      "question": "What is returned by the following function?\ndef list_transformation():\n  alist = [4, 2, 8, 6, 5]\n  blist = [ ]\n  for item in alist:\n    blist.append(item+5)\n  return blist",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[4, 2, 8, 6, 5]",
        "[4, 2, 8, 6, 5, 5]",
        "[9, 7, 13, 11, 10]",
        "Error, you cannot concatenate inside an append."
      ],
      "answer": "C",
      "correct": "[9, 7, 13, 11, 10]",
      "explanation": "Append item+5 for each input value: 4->9, 2->7, 8->13, 6->11, 5->10."
    },
    {
      "id": "S3-341",
      "srNo": 341,
      "question": "What will the following code print?\ndef mystery(num_list):\n  out = []\n  for num in num_list:\n    if num > 10:\n      out.append(num)\n  return out\nprint(mystery([5, 10, 15, 20]))",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[10, 15, 20]",
        "[20, 15]",
        "[15, 20]",
        "[20, 15, 10]"
      ],
      "answer": "C",
      "correct": "[15, 20]",
      "trace": {
        "code": "def mystery(num_list):\n  out = []\n  for num in num_list:\n    if num > 10:\n      out.append(num)\n  return out\nprint(mystery([5, 10, 15, 20]))",
        "output": "[15, 20]\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-342",
      "srNo": 342,
      "question": "Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1.count(5)?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "0",
        "4",
        "1",
        "2"
      ],
      "answer": "D",
      "correct": "2",
      "explanation": "The list contains the value 5 twice. count returns occurrences, not the position."
    },
    {
      "id": "S3-343",
      "srNo": 343,
      "question": "What will be the output of the following Python code?\nx = [1, 2, 3]\ny = [7, 8, 9]\nx.extend(y)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1, 2, 3, 7, 8, 9]",
        "[1, 2, 3, 7, 9]",
        "[7, 8, 9]",
        "[1, 2, 3]"
      ],
      "answer": "A",
      "correct": "[1, 2, 3, 7, 8, 9]",
      "trace": {
        "code": "x = [1, 2, 3]\ny = [7, 8, 9]\nx.extend(y)\nprint(x)",
        "output": "[1, 2, 3, 7, 8, 9]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-344",
      "srNo": 344,
      "question": "What will be the output of the following Python code?\nx = [1, 2, 3]\ny = \"789\"\nx.extend(y)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1, 2, 3, 7, 8, 9]",
        "[1, 2, 3]",
        "['7', '8', '9']",
        "[1, 2, 3, '7', '8', '9']"
      ],
      "answer": "D",
      "correct": "[1, 2, 3, '7', '8', '9']",
      "trace": {
        "code": "x = [1, 2, 3]\ny = \"789\"\nx.extend(y)\nprint(x)",
        "output": "[1, 2, 3, '7', '8', '9']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-345",
      "srNo": 345,
      "question": "What will be the output of the following Python code?\nx = [1, 2, 3]\ny = 789\nx.extend(y)\nprint(x)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1, 2, 3, 7, 8, 9]",
        "[1, 2, 3, 789]",
        "ERROR",
        "[1, 2, 3, '7', '8', '9']"
      ],
      "answer": "C",
      "correct": "ERROR",
      "trace": {
        "code": "x = [1, 2, 3]\ny = 789\nx.extend(y)\nprint(x)",
        "output": "",
        "error": "TypeError: 'int' object is not iterable"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-346",
      "srNo": 346,
      "question": "What will be the value of ‘result’ in following Python program?\nlist1 = [1,2,3,4]\nlist2 = [2,4,5,6]\nlist3 = [2,6,7,8]\nresult = list()\nresult.extend(i for i in list1 if i not in (list2+list3) and i not in result)\nresult.extend(i for i in list2 if i not in (list1+list3) and i not in result)\nresult.extend(i for i in list3 if i not in (list1+list2) and i not in result)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1, 3, 5, 7, 8]",
        "[1, 7, 8]",
        "[1, 2, 4, 7, 8]",
        "error"
      ],
      "answer": "A",
      "correct": "[1, 3, 5, 7, 8]",
      "explanation": "Keep values appearing in only one of the three lists, avoiding duplicates as results are appended. The retained order is 1,3,5,7,8."
    },
    {
      "id": "S3-347",
      "srNo": 347,
      "question": "Suppose list1 is [3, 4, 5, 20, 5], what is list1.index(5)?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "0",
        "1",
        "4",
        "2"
      ],
      "answer": "D",
      "correct": "2",
      "explanation": "index returns the first matching zero-based index. The first 5 is at index 2."
    },
    {
      "id": "S3-348",
      "srNo": 348,
      "question": "To insert 5 to the third position in list1, we use which command?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "list1.insert(3, 5)",
        "list1.insert(2, 5)",
        "list1.add(3, 5)",
        "list1.append(3, 5)"
      ],
      "answer": "B",
      "correct": "list1.insert(2, 5)",
      "explanation": "The third position has zero-based index 2; insert(2,5) puts 5 before the old third element."
    },
    {
      "id": "S3-349",
      "srNo": 349,
      "question": "What will be the output of the following Python code?\nveggies = ['carrot', 'broccoli', 'potato', 'asparagus']\nveggies.insert(veggies.index('broccoli'), 'celery')\nprint(veggies)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[‘carrot’, ‘celery’, ‘broccoli’, ‘potato’, ‘asparagus’]",
        "[‘carrot’, ‘celery’, ‘potato’, ‘asparagus’]",
        "[‘carrot’, ‘broccoli’, ‘celery’, ‘potato’, ‘asparagus’]",
        "[‘celery’, ‘carrot’, ‘broccoli’, ‘potato’, ‘asparagus’]"
      ],
      "answer": "A",
      "correct": "[‘carrot’, ‘celery’, ‘broccoli’, ‘potato’, ‘asparagus’]",
      "trace": {
        "code": "veggies = ['carrot', 'broccoli', 'potato', 'asparagus']\nveggies.insert(veggies.index('broccoli'), 'celery')\nprint(veggies)",
        "output": "['carrot', 'celery', 'broccoli', 'potato', 'asparagus']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-350",
      "srNo": 350,
      "question": "What will be the result after the execution of above Python code?\nlist1=[3,2,5,7,3,6]\nlist1.pop(3)\nprint(list1)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[3,2,5,3,6]",
        "[2,5,7,3,6]",
        "[2,5,7,6]",
        "[3,2,5,7,3,6]"
      ],
      "answer": "A",
      "correct": "[3,2,5,3,6]",
      "trace": {
        "code": "list1=[3,2,5,7,3,6]\nlist1.pop(3)\nprint(list1)",
        "output": "[3, 2, 5, 3, 6]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-351",
      "srNo": 351,
      "question": "To remove string “hello” from list1, we use which command?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "list1.remove(“hello”)",
        "list1.remove(hello)",
        "list1.removeAll(“hello”)",
        "list1.removeOne(“hello”)"
      ],
      "answer": "A",
      "correct": "list1.remove(“hello”)",
      "explanation": "remove deletes the first matching value; pop removes by index."
    },
    {
      "id": "S3-352",
      "srNo": 352,
      "question": "Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.reverse()?",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[3, 4, 5, 20, 5, 25, 1, 3]",
        "[1, 3, 3, 4, 5, 5, 20, 25]",
        "[25, 20, 5, 5, 4, 3, 3, 1]",
        "[3, 1, 25, 5, 20, 5, 4, 3]"
      ],
      "answer": "D",
      "correct": "[3, 1, 25, 5, 20, 5, 4, 3]",
      "explanation": "reverse changes the list in place; the values appear in reverse order, including repeated values."
    },
    {
      "id": "S3-353",
      "srNo": 353,
      "question": "What will be the output of below Python code?\nnumbers = [1, 3, 4, 2]\nnumbers.sort()\nprint(numbers)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1, 2, 3, 4]",
        "[1, 3, 4]",
        "[1, 2, 3]",
        "[2, 3, 4]"
      ],
      "answer": "A",
      "correct": "[1, 2, 3, 4]",
      "trace": {
        "code": "numbers = [1, 3, 4, 2]\nnumbers.sort()\nprint(numbers)",
        "output": "[1, 2, 3, 4]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-354",
      "srNo": 354,
      "question": "What will be the output of below Python code?\ndecimalnumber = [2.01, 2.00, 3.67, 3.28, 1.68]\ndecimalnumber.sort()\nprint(decimalnumber)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "[1.68, 2, 2.01, 3.28, 3.67]",
        "[1.68, 2.0, 2.01, 3, 3]",
        "[1, 2, 2, 3, 3]",
        "[1.68, 2.0, 2.01, 3.28, 3.67]"
      ],
      "answer": "D",
      "correct": "[1.68, 2.0, 2.01, 3.28, 3.67]",
      "trace": {
        "code": "decimalnumber = [2.01, 2.00, 3.67, 3.28, 1.68]\ndecimalnumber.sort()\nprint(decimalnumber)",
        "output": "[1.68, 2.0, 2.01, 3.28, 3.67]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-355",
      "srNo": 355,
      "question": "What will be the output of below Python code?\nwords = [\"Geeks\", \"For\", \"Geeks\"]\nwords.sort()\nprint(words)",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "['Geeks','For', 'Geeks']",
        "['For', 'Geeks']",
        "['For', 'Geeks', 'Geeks']",
        "[For, Geeks, Geeks]"
      ],
      "answer": "C",
      "correct": "['For', 'Geeks', 'Geeks']",
      "trace": {
        "code": "words = [\"Geeks\", \"For\", \"Geeks\"]\nwords.sort()\nprint(words)",
        "output": "['For', 'Geeks', 'Geeks']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-356",
      "srNo": 356,
      "question": "Tup=[2,3,4,[]]\nTup[-1].extend(range(5,35,5))\nTup[-1].append([10,20])\nTup[-1][-1].append([100,200])\nprint(len(Tup)+len(Tup[3])+len(Tup[-1][-1])+Tup[-1][-2])",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "22",
        "44",
        "61",
        "71"
      ],
      "answer": "B",
      "correct": "44",
      "trace": {
        "code": "Tup=[2,3,4,[]]\nTup[-1].extend(range(5,35,5))\nTup[-1].append([10,20])\nTup[-1][-1].append([100,200])\nprint(len(Tup)+len(Tup[3])+len(Tup[-1][-1])+Tup[-1][-2])",
        "output": "44\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step."
    },
    {
      "id": "S3-357",
      "srNo": 357,
      "question": "What will be the output of the following Python code snippet?\nd = {\"john\":40, \"peter\":45}\n\"john\" in d",
      "marks": 1.0,
      "sourcePage": 25,
      "options": [
        "TRUE",
        "FALSE",
        "NONE",
        "ERROR"
      ],
      "answer": "A",
      "correct": "TRUE",
      "trace": {
        "code": "d = {\"john\":40, \"peter\":45}\n\"john\" in d",
        "output": "True\n",
        "error": null
      },
      "explanation": "Dictionary membership checks keys. john is a key, so the result is True."
    },
    {
      "id": "S3-358",
      "srNo": 358,
      "question": "What will be the output of the following Python code snippet?\nd1 = {\"john\":40, \"peter\":45}\nd2 = {\"john\":466, \"peter\":45}\nd1 == d2",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "TRUE",
        "FALSE",
        "NONE",
        "ERROR"
      ],
      "answer": "B",
      "correct": "FALSE",
      "trace": {
        "code": "d1 = {\"john\":40, \"peter\":45}\nd2 = {\"john\":466, \"peter\":45}\nd1 == d2",
        "output": "False\n",
        "error": null
      },
      "explanation": "Dictionary equality compares all key-value pairs; the john values 40 and 466 differ."
    },
    {
      "id": "S3-359",
      "srNo": 359,
      "question": "What will be the output of the following Python code snippet?\nd = {\"john\":40, \"peter\":45}\nd[\"john\"]",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "40",
        "45",
        "“john”",
        "“peter”"
      ],
      "answer": "A",
      "correct": "40",
      "trace": {
        "code": "d = {\"john\":40, \"peter\":45}\nd[\"john\"]",
        "output": "40\n",
        "error": null
      },
      "explanation": "Index by the key john to retrieve its value 40."
    },
    {
      "id": "S3-360",
      "srNo": 360,
      "question": "What will be the output of the following Python code?\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor i in d:\n  print(i)",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "0\n1\n2",
        "a\nb\nc",
        "0 a\n1 b\n2 c",
        "none of the mentioned"
      ],
      "answer": "A",
      "correct": "0\n1\n2",
      "trace": {
        "code": "d = {0: 'a', 1: 'b', 2: 'c'}\nfor i in d:\n  print(i)",
        "output": "0\n1\n2\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-361",
      "srNo": 361,
      "question": "Suppose d = {“john”:40, “peter”:45}. To obtain the number of entries in dictionary which command do we use?",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "d.size()",
        "len(d)",
        "size(d)",
        "d.len()"
      ],
      "answer": "B",
      "correct": "len(d)",
      "explanation": "len(dictionary) counts its key-value entries."
    },
    {
      "id": "S3-362",
      "srNo": 362,
      "question": "What will be the output of the following Python code snippet?\nd = {\"john\":40, \"peter\":45}\nprint(list(d.keys()))",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "[“john”, “peter”]",
        "[“john”:40, “peter”:45]",
        "(“john”, “peter”)",
        "(“john”:40, “peter”:45)"
      ],
      "answer": "A",
      "correct": "[“john”, “peter”]",
      "trace": {
        "code": "d = {\"john\":40, \"peter\":45}\nprint(list(d.keys()))",
        "output": "['john', 'peter']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-363",
      "srNo": 363,
      "question": "Which of the following is not a declaration of the dictionary?",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "{1: ‘A’, 2: ‘B’}",
        "dict([[1,”A”],[2,”B”]])",
        "{1,”A”,2”B”}",
        "{ }"
      ],
      "answer": "C",
      "correct": "{1,”A”,2”B”}",
      "explanation": "Dictionary literals require key:value pairs. Braces without colons form a set, or the malformed text raises SyntaxError."
    },
    {
      "id": "S3-364",
      "srNo": 364,
      "question": "What will be the output of the following Python code?\n a=dict()\n a[1]",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "An exception is thrown since the dictionary is\nempty",
        "‘ ‘",
        "1",
        "0"
      ],
      "answer": "A",
      "correct": "An exception is thrown since the dictionary is\nempty",
      "trace": {
        "code": "a=dict()\na[1]",
        "output": "",
        "error": "KeyError: 1"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-365",
      "srNo": 365,
      "question": "What will be the output of the following Python code?\na={ }\na[2]=1\na[1]=[2,3,4]\nprint(a[1][1])",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "[2,3,4]",
        "3",
        "2",
        "An exception is thrown"
      ],
      "answer": "B",
      "correct": "3",
      "trace": {
        "code": "a={ }\na[2]=1\na[1]=[2,3,4]\nprint(a[1][1])",
        "output": "3\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-366",
      "srNo": 366,
      "question": "What will be the output of the following Python code snippet?\nnumbers = {}\nletters = {}\ncomb  = {}\nnumbers[1] = 56\nnumbers[3] = 7\nletters[4] = 'B'\ncomb['Numbers'] = numbers\ncomb['Letters'] = letters\nprint(comb)",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "Error, dictionary in a dictionary can’t exist",
        "‘Numbers’: {1: 56, 3: 7}",
        "{‘Numbers’: {1: 56}, ‘Letters’: {4: ‘B’}}",
        "{‘Numbers’: {1: 56, 3: 7}, ‘Letters’: {4: ‘B’}}"
      ],
      "answer": "D",
      "correct": "{‘Numbers’: {1: 56, 3: 7}, ‘Letters’: {4: ‘B’}}",
      "trace": {
        "code": "numbers = {}\nletters = {}\ncomb  = {}\nnumbers[1] = 56\nnumbers[3] = 7\nletters[4] = 'B'\ncomb['Numbers'] = numbers\ncomb['Letters'] = letters\nprint(comb)",
        "output": "{'Numbers': {1: 56, 3: 7}, 'Letters': {4: 'B'}}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-367",
      "srNo": 367,
      "question": "Which of the following statements create a dictionary?",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "d = {}",
        "d = {“john”:40, “peter”:45}",
        "d = {40:”john”, 45:”peter”}",
        "All of the mentioned"
      ],
      "answer": "D",
      "correct": "All of the mentioned",
      "explanation": "A dictionary can be created with {}, dict() or appropriate key-value pairs."
    },
    {
      "id": "S3-368",
      "srNo": 368,
      "question": "What will be the output of the following Python code?\na={1:\"A\",2:\"B\",3:\"C\"}\nfor i in a:\n  print(i,end=\" \")",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "1 2 3",
        "‘A’ ‘B’ ‘C’",
        "1 ‘A’ 2 ‘B’ 3 ‘C’",
        "Error, it should be: for i in a.items():"
      ],
      "answer": "A",
      "correct": "1 2 3",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nfor i in a:\n  print(i,end=\" \")",
        "output": "1 2 3 ",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-369",
      "srNo": 369,
      "question": "What will be the output of the following Python code?\ntext = {1: \"geeks\", 2: \"for\"}\ntext.clear()\nprint(text)",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "{1: \"geeks\", 2: \"for\"}",
        "{}",
        "[1: \"geeks\", 2: \"for\"]",
        "[]"
      ],
      "answer": "B",
      "correct": "{}",
      "trace": {
        "code": "text = {1: \"geeks\", 2: \"for\"}\ntext.clear()\nprint(text)",
        "output": "{}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-370",
      "srNo": 370,
      "question": "What will be the output of the following Python code?\na={1:\"A\",2:\"B\",3:\"C\"}\nb=a.copy()\nb[2]=\"D\"\nprint(a)",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "Error, copy() method doesn’t exist for\ndictionaries",
        "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
        "{1: ‘A’, 2: ‘D’, 3: ‘C’}",
        "“None” is printed"
      ],
      "answer": "B",
      "correct": "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nb=a.copy()\nb[2]=\"D\"\nprint(a)",
        "output": "{1: 'A', 2: 'B', 3: 'C'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-371",
      "srNo": 371,
      "question": "What is the output of the following piece of code?\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(1,4))",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "1",
        "A",
        "4",
        "Invalid syntax for get method"
      ],
      "answer": "B",
      "correct": "A",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(1,4))",
        "output": "A\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-372",
      "srNo": 372,
      "question": "What is the output of the following piece of code?\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(5,4))",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "A",
        "5",
        "4",
        "Invalid syntax for get method"
      ],
      "answer": "C",
      "correct": "4",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(5,4))",
        "output": "4\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-373",
      "srNo": 373,
      "question": "What will be the output of the following Python code snippet?\na={1:\"A\",2:\"B\",3:\"C\"}\nfor i,j in a.items():\n  print(i,j,end=\" \")",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "1 A 2 B 3 C",
        "1 2 3",
        "A B C",
        "1:”A” 2:”B” 3:”C”"
      ],
      "answer": "A",
      "correct": "1 A 2 B 3 C",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nfor i,j in a.items():\n  print(i,j,end=\" \")",
        "output": "1 A 2 B 3 C ",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-374",
      "srNo": 374,
      "question": "What will be the output of the following Python code?\n a={1:\"A\",2:\"B\",3:\"C\"}\n a.items()",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "Syntax error",
        "dict_items([(‘A’), (‘B’), (‘C’)])",
        "dict_items([(1,2,3)])",
        "dict_items([(1, ‘A’), (2, ‘B’), (3, ‘C’)])"
      ],
      "answer": "D",
      "correct": "dict_items([(1, ‘A’), (2, ‘B’), (3, ‘C’)])",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\na.items()",
        "output": "dict_items([(1, 'A'), (2, 'B'), (3, 'C')])\n",
        "error": null
      },
      "explanation": "items returns a dynamic view of (key,value) pairs in dictionary insertion order."
    },
    {
      "id": "S3-375",
      "srNo": 375,
      "question": "What will be the output of the following Python code?\nDictionary1 = {'A': 'Geeks', 'B': 'For', 'C': 'Geeks'}\nprint(Dictionary1.keys())",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "keys(['A', 'B', 'C'])",
        "(['A', 'B', 'C'])",
        "dict_keys([A, B, C])",
        "dict_keys(['A', 'B', 'C'])"
      ],
      "answer": "D",
      "correct": "dict_keys(['A', 'B', 'C'])",
      "trace": {
        "code": "Dictionary1 = {'A': 'Geeks', 'B': 'For', 'C': 'Geeks'}\nprint(Dictionary1.keys())",
        "output": "dict_keys(['A', 'B', 'C'])\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-376",
      "srNo": 376,
      "question": "What will be the output of the following Python code?\na={1:\"A\",2:\"B\",3:\"C\"}\nb={4:\"D\",5:\"E\"}\na.update(b)\nprint(a)",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
        "Method update() doesn’t exist for dictionaries",
        "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}",
        "{4: ‘D’, 5: ‘E’}"
      ],
      "answer": "C",
      "correct": "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}",
      "trace": {
        "code": "a={1:\"A\",2:\"B\",3:\"C\"}\nb={4:\"D\",5:\"E\"}\na.update(b)\nprint(a)",
        "output": "{1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-377",
      "srNo": 377,
      "question": "What will be the output of the following Python code?\ndictionary = {\"raj\": 2, \"striver\": 3, \"vikram\": 4}\nprint(dictionary.values())",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "values([2, 3, 4])",
        "([2, 3, 4])",
        "dict_values([2, 3, 4])",
        "dict([2, 3, 4])"
      ],
      "answer": "C",
      "correct": "dict_values([2, 3, 4])",
      "trace": {
        "code": "dictionary = {\"raj\": 2, \"striver\": 3, \"vikram\": 4}\nprint(dictionary.values())",
        "output": "dict_values([2, 3, 4])\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-378",
      "srNo": 378,
      "question": "Which of the following is not the correct syntax for creating a set?",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "set([[1,2],[3,4]])",
        "set([1,2,2,3,4])",
        "set((1,2,3,4))",
        "{1,2,3,4}"
      ],
      "answer": "A",
      "correct": "set([[1,2],[3,4]])",
      "explanation": "Set elements must be hashable. Lists are unhashable, so set([[1,2],[3,4]]) raises TypeError."
    },
    {
      "id": "S3-379",
      "srNo": 379,
      "question": "Which of the following statements is used to create an empty set?",
      "marks": 1.0,
      "sourcePage": 26,
      "options": [
        "{ }",
        "set()",
        "[ ]",
        "( )"
      ],
      "answer": "B",
      "correct": "set()",
      "explanation": "{} creates an empty dictionary. set() creates an empty set."
    },
    {
      "id": "S3-380",
      "srNo": 380,
      "question": "What will be the output of the following Python code?\n s={5,6}\n s*3",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "Error as unsupported operand type for set data\ntype",
        "{5,6,5,6,5,6}",
        "{5,6}",
        "Error as multiplication creates duplicate elements which isn’t\nallowed"
      ],
      "answer": "A",
      "correct": "Error as unsupported operand type for set data\ntype",
      "trace": {
        "code": "s={5,6}\ns*3",
        "output": "",
        "error": "TypeError: unsupported operand type(s) for *: 'set' and 'int'"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-381",
      "srNo": 381,
      "question": "What will be the output of the following Python code?\n a={4,5,6}\n b={2,8,6}\n a+b",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{4,5,6,2,8}",
        "{4,5,6,2,8,6}",
        "Error as unsupported operand type for sets",
        "Error as the duplicate item 6 is present in both sets"
      ],
      "answer": "C",
      "correct": "Error as unsupported operand type for sets",
      "trace": {
        "code": "a={4,5,6}\nb={2,8,6}\na+b",
        "output": "",
        "error": "TypeError: unsupported operand type(s) for +: 'set' and 'set'"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-382",
      "srNo": 382,
      "question": "What will be the output of the following Python code?\n a={4,5,6}\n b={2,8,6}\n a-b",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{4,5}",
        "{6}",
        "Error as unsupported operand type for set data type",
        "Error as the duplicate item 6 is present in both sets"
      ],
      "answer": "A",
      "correct": "{4,5}",
      "trace": {
        "code": "a={4,5,6}\nb={2,8,6}\na-b",
        "output": "{4, 5}\n",
        "error": null
      },
      "explanation": "a-b keeps entries of a absent from b; discard the shared 6 to get {4,5}."
    },
    {
      "id": "S3-383",
      "srNo": 383,
      "question": "What will be the output of the following Python code, if s1= {1, 2, 3}?\ns1.issubset(s1)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "TRUE",
        "Error",
        "No output",
        "FALSE"
      ],
      "answer": "A",
      "correct": "TRUE",
      "explanation": "Every set is a subset of itself, including an empty set."
    },
    {
      "id": "S3-384",
      "srNo": 384,
      "question": "If we have two sets, s1 and s2, and we want to check if all the elements of s1 are present in s2 or not, we can use the\nfunction:",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "s2.issubset(s1)",
        "s2.issuperset(s1)",
        "s1.issuperset(s2)",
        "s1.isset(s2)"
      ],
      "answer": "B",
      "correct": "s2.issuperset(s1)",
      "explanation": "s2.issuperset(s1) checks that every element of s1 occurs in s2, equivalently s1.issubset(s2)."
    },
    {
      "id": "S3-385",
      "srNo": 385,
      "question": "What will be the output of the following Python code?\nx = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.union(y)\nprint(z)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{ 'microsoft', 'google', 'apple', 'cherry'}",
        "{'banana', 'microsoft', 'google', 'apple'}",
        "{'banana', 'microsoft', 'google', 'apple', 'cherry'}",
        "{'banana', 'microsoft', 'google'}"
      ],
      "answer": "C",
      "correct": "{'banana', 'microsoft', 'google', 'apple', 'cherry'}",
      "trace": {
        "code": "x = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.union(y)\nprint(z)",
        "output": "{'google', 'banana', 'microsoft', 'apple', 'cherry'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-386",
      "srNo": 386,
      "question": "What will be the output of the following Python code?\ns1 = {1, 2, 3}\ns2 = {2, 3}\nprint(s1.intersection(s2))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{2}",
        "{1, 2, 3}",
        "{2, 3}",
        "{3}"
      ],
      "answer": "C",
      "correct": "{2, 3}",
      "trace": {
        "code": "s1 = {1, 2, 3}\ns2 = {2, 3}\nprint(s1.intersection(s2))",
        "output": "{2, 3}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-387",
      "srNo": 387,
      "question": "What will be the output of the following Python code?\nx = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.difference(y)\nprint(z)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{\"apple\", \"banana\", \"cherry\"}",
        "{\"google\", \"microsoft\", \"apple\"}",
        "{\"google\", \"microsoft\",}",
        "{'banana', 'cherry'}"
      ],
      "answer": "D",
      "correct": "{'banana', 'cherry'}",
      "trace": {
        "code": "x = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.difference(y)\nprint(z)",
        "output": "{'banana', 'cherry'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-388",
      "srNo": 388,
      "question": "What will be the output of the following Python code?\nx = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.symmetric_difference(y)\nprint(z)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{\"apple\", \"banana\", \"cherry\"}",
        "{'google', 'banana', 'microsoft', 'cherry'}",
        "{\"google\", \"microsoft\",}",
        "{'banana', 'cherry'}"
      ],
      "answer": "B",
      "correct": "{'google', 'banana', 'microsoft', 'cherry'}",
      "trace": {
        "code": "x = {\"apple\", \"banana\", \"cherry\"}\ny = {\"google\", \"microsoft\", \"apple\"}\nz = x.symmetric_difference(y)\nprint(z)",
        "output": "{'google', 'banana', 'microsoft', 'cherry'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-389",
      "srNo": 389,
      "question": "What will be the output of the following Python code?\nfruits = {\"apple\", \"banana\", \"cherry\"}\nx = fruits.copy()\nprint(x)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "{'google', 'banana', 'microsoft', 'cherry'}",
        "{'banana', 'cherry'}",
        "{'banana', 'apple', 'cherry'}",
        "{\"google\", \"microsoft\", \"apple\"}"
      ],
      "answer": "C",
      "correct": "{'banana', 'apple', 'cherry'}",
      "trace": {
        "code": "fruits = {\"apple\", \"banana\", \"cherry\"}\nx = fruits.copy()\nprint(x)",
        "output": "{'apple', 'banana', 'cherry'}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-390",
      "srNo": 390,
      "question": "What will be the output of the following Python code?\ns=\"Python Programming\"\nprint(len(set(s)))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "17",
        "18",
        "12",
        "14"
      ],
      "answer": "C",
      "correct": "12",
      "trace": {
        "code": "s=\"Python Programming\"\nprint(len(set(s)))",
        "output": "12\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-391",
      "srNo": 391,
      "question": "What will be the output of the following Python code?\ny = 6\nz = lambda x: x * y\nprint(z(8))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "48",
        "14",
        "64",
        "None of the mentioned"
      ],
      "answer": "A",
      "correct": "48",
      "trace": {
        "code": "y = 6\nz = lambda x: x * y\nprint(z(8))",
        "output": "48\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-392",
      "srNo": 392,
      "question": "What will be the output of the following Python code?\nlamb = lambda x: x ** 3\nprint(lamb(5))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "15",
        "555",
        "125",
        "None of the mentioned"
      ],
      "answer": "C",
      "correct": "125",
      "trace": {
        "code": "lamb = lambda x: x ** 3\nprint(lamb(5))",
        "output": "125\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left."
    },
    {
      "id": "S3-393",
      "srNo": 393,
      "question": "What will be the output of the following Python code?\ndef writer():\n  title = 'Sir'\n  name = (lambda x: title + ' ' + x)\n  return name\nwho = writer()\nprint(who('Arthur'))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "Arthur Sir",
        "Sir Arthur",
        "Arthur",
        "None of the mentioned"
      ],
      "answer": "B",
      "correct": "Sir Arthur",
      "trace": {
        "code": "def writer():\n  title = 'Sir'\n  name = (lambda x: title + ' ' + x)\n  return name\nwho = writer()\nprint(who('Arthur'))",
        "output": "Sir Arthur\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-394",
      "srNo": 394,
      "question": "What will be the output of the following Python code?\nmin = (lambda x, y: x if x < y else y)\nprint(min(101*99, 102*98))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "9997",
        "9999",
        "9996",
        "None of the mentioned"
      ],
      "answer": "C",
      "correct": "9996",
      "trace": {
        "code": "min = (lambda x, y: x if x < y else y)\nprint(min(101*99, 102*98))",
        "output": "9996\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-395",
      "srNo": 395,
      "question": "What will be the output of the following Python code?\ndef current_date(**kwargs):\n  for i in kwargs:\n    print(i)\ncurrent_date(date=2-1-2023)",
      "marks": 0.5,
      "sourcePage": 27,
      "options": [
        "date:2-1-2023",
        "date=2-1-2023",
        "date",
        "02-01-2023"
      ],
      "answer": "C",
      "correct": "date",
      "trace": {
        "code": "def current_date(**kwargs):\n  for i in kwargs:\n    print(i)\ncurrent_date(date=2-1-2023)",
        "output": "date\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-396",
      "srNo": 396,
      "question": "What will be the output of the following Python code?\ndef f1(*m):\n  sum1=len(m)\n  for i in m:\n  sum1+=i\n  return sum1\nx=f1(1,2,3,(4,)==(4,),(5,)==(5))\nprint(x)",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "12",
        "11",
        "13",
        "15"
      ],
      "answer": "A",
      "correct": "12",
      "explanation": "There are five arguments. Equality comparisons are True and False (numeric 1 and 0), so 5+1+2+3+1+0=12."
    },
    {
      "id": "S3-397",
      "srNo": 397,
      "question": "What will be the output of the following Python code?\nlamb = lambda x: x ** 3\nprint(lamb(‘5’))",
      "marks": 1.0,
      "sourcePage": 27,
      "options": [
        "555",
        "15",
        "125",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "trace": {
        "code": "lamb = lambda x: x ** 3\nprint(lamb('5'))",
        "output": "",
        "error": "TypeError: unsupported operand type(s) for ** or pow(): 'str' and 'int'"
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left."
    },
    {
      "id": "S3-398",
      "srNo": 398,
      "question": "What will be the value of ‘result’ after executing following Python program?\nlist1 = [1,2,3,4]\nlist2 = [2,4,5,6]\nlist3 = [2,6,7,8]\nresult = list()\nresult.extend(i for i in list1 if i in (list2+list3) and i not in result)\nresult.extend(i for i in list2 if i in (list1+list3) and i not in result)\nresult.extend(i for i in list3 if i in (list1+list2) and i not in result)",
      "marks": 1.0,
      "sourcePage": 28,
      "options": [
        "[2, 4, 6]",
        "[1, 3, 5, 7, 8]",
        "[2, 4, 6, 8]",
        "[1, 7, 8]"
      ],
      "answer": "A",
      "correct": "[2, 4, 6]",
      "explanation": "Retain elements shared between lists and avoid repeated results. The resulting order is 2,4,6."
    },
    {
      "id": "S3-399",
      "srNo": 399,
      "question": "What will be the output of the following Python code?\ndef F(B,A=3,*C,**D):\n  sum=A+B\n  for i in C:\n    sum=sum+i\n  for i in D.values():\n    sum=sum+i\n  return sum\nprint(F(1,5,7,4,3,e=1,f=2))",
      "marks": 1.0,
      "sourcePage": 28,
      "options": [
        "10",
        "20",
        "23",
        "21"
      ],
      "answer": "C",
      "correct": "23",
      "trace": {
        "code": "def F(B,A=3,*C,**D):\n  sum=A+B\n  for i in C:\n    sum=sum+i\n  for i in D.values():\n    sum=sum+i\n  return sum\nprint(F(1,5,7,4,3,e=1,f=2))",
        "output": "23\n",
        "error": null
      },
      "explanation": "Exponentiation is evaluated before multiplication and groups right to left. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-402",
      "srNo": 402,
      "question": "What will be the output of the following Python code?\nnumberGames  = {}\nnumberGames[(1,2,4)] = 8\nnumberGames[(4,2,1)] = 10\nnumberGames[(1,2)] = 12\nsum = 0\nfor k in numberGames:\n  sum += numberGames[k]\nprint (len(numberGames) + sum)",
      "marks": 1.0,
      "sourcePage": 28,
      "options": [
        "30",
        "24",
        "33",
        "31"
      ],
      "answer": "C",
      "correct": "33",
      "trace": {
        "code": "numberGames  = {}\nnumberGames[(1,2,4)] = 8\nnumberGames[(4,2,1)] = 10\nnumberGames[(1,2)] = 12\nsum = 0\nfor k in numberGames:\n  sum += numberGames[k]\nprint (len(numberGames) + sum)",
        "output": "33\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-403",
      "srNo": 403,
      "question": "What is the output of the following code?\nL=[['Physics',101],['Chemistry',202],['Maths',303],45,6,'j']\nprint(len(L))",
      "marks": 1.0,
      "sourcePage": 28,
      "options": [
        "3",
        "5",
        "6",
        "4"
      ],
      "answer": "C",
      "correct": "6",
      "trace": {
        "code": "L=[['Physics',101],['Chemistry',202],['Maths',303],45,6,'j']\nprint(len(L))",
        "output": "6\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-404",
      "srNo": 404,
      "question": "What will the below Python code do?\nset1={2,3}\nset2={3,2}\nset3={2,1}\nif(set1==set2):\n  print(\"yes\")\nelse:\n  print(\"no\")\nif(set1==set3):\n  print(\"yes\")\nelse:\n  print(\"no\")",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "yes\nno",
        "no,yes",
        "no,no",
        "yes,yes"
      ],
      "answer": "A",
      "correct": "yes\nno",
      "trace": {
        "code": "set1={2,3}\nset2={3,2}\nset3={2,1}\nif(set1==set2):\n  print(\"yes\")\nelse:\n  print(\"no\")\nif(set1==set3):\n  print(\"yes\")\nelse:\n  print(\"no\")",
        "output": "yes\nno\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-405",
      "srNo": 405,
      "question": "What is the output of the following code?\nD={1:\"Amit\",2:\"Suman\",3:\"Ravi\",4:\"Anuj\"}\nprint(max(D.values()))",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "Amit",
        "Suman",
        "Ravi",
        "Anuj"
      ],
      "answer": "B",
      "correct": "Suman",
      "trace": {
        "code": "D={1:\"Amit\",2:\"Suman\",3:\"Ravi\",4:\"Anuj\"}\nprint(max(D.values()))",
        "output": "Suman\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-406",
      "srNo": 406,
      "question": "What will be the output of the following Python code?\nL = ['Arnold', 'Bootboggler', 'Christi', 'Dickinson']\nprint(L[-1][-1])",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "n",
        "a",
        "Dickinson",
        "Arnold"
      ],
      "answer": "A",
      "correct": "n",
      "trace": {
        "code": "L = ['Arnold', 'Bootboggler', 'Christi', 'Dickinson']\nprint(L[-1][-1])",
        "output": "n\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-407",
      "srNo": 407,
      "question": "What will be the output of the following Python code?\nD = {1 : 1, 2 : '2', '1' : 2, '2' : 3}\nD['1'] = 2\nprint(D [D [D [ str(D[1]) ] ] ] )",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "Key Error",
        "1",
        "Syntax Error",
        "3"
      ],
      "answer": "D",
      "correct": "3",
      "trace": {
        "code": "D = {1 : 1, 2 : '2', '1' : 2, '2' : 3}\nD['1'] = 2\nprint(D [D [D [ str(D[1]) ] ] ] )",
        "output": "3\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-408",
      "srNo": 408,
      "question": "What will be the output of the following Python code?\nL1 = [ ]\nL1.append([1, [2, 3], 4])\nL1.extend([7, 8, 9])\nprint(L1[0][1][1] + L1[2])",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "12",
        "11",
        "[11]",
        "[12]"
      ],
      "answer": "B",
      "correct": "11",
      "trace": {
        "code": "L1 = [ ]\nL1.append([1, [2, 3], 4])\nL1.extend([7, 8, 9])\nprint(L1[0][1][1] + L1[2])",
        "output": "11\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-409",
      "srNo": 409,
      "question": "What will be the output of the following Python code?\nL1 = [1, 1.33, 'LJU', 0, 'N', True, 'Y', 1]\nval1= 0\nval2= \"\"\nfor x in L1:\n  if(type(x) == int or type(x) == float):\n    val1 += x\n  elif(type(x) == str):\n    val2 += x\n  else:\n    break\n    continue\nprint(val1, val2)",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "2.33 LJUN",
        "3.33 LJUNTrueY",
        "3.33 LJU",
        "2.33 LJUNY"
      ],
      "answer": "A",
      "correct": "2.33 LJUN",
      "trace": {
        "code": "L1 = [1, 1.33, 'LJU', 0, 'N', True, 'Y', 1]\nval1= 0\nval2= \"\"\nfor x in L1:\n  if(type(x) == int or type(x) == float):\n    val1 += x\n  elif(type(x) == str):\n    val2 += x\n  else:\n    break\n    continue\nprint(val1, val2)",
        "output": "2.33 LJUN\n",
        "error": null
      },
      "explanation": "Boolean operations short-circuit; and/or may return operand values, while not returns a boolean. Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-410",
      "srNo": 410,
      "question": "What will be the output of the following Python code?\ndef sum_list(l):\n  sum=0\n  for i in range(len(l)):\n    if l[i]==13 or l[i-1]==13:\n       continue\n    else:\n      sum+=l[i]\n  return sum\nl= [1,2,13,2,9,13]\nprint(sum_list(l))",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "40",
        "27",
        "9",
        "11"
      ],
      "answer": "D",
      "correct": "11",
      "trace": {
        "code": "def sum_list(l):\n  sum=0\n  for i in range(len(l)):\n    if l[i]==13 or l[i-1]==13:\n       continue\n    else:\n      sum+=l[i]\n  return sum\nl= [1,2,13,2,9,13]\nprint(sum_list(l))",
        "output": "11\n",
        "error": null
      },
      "explanation": "range excludes its stop value; a third argument sets the step. Boolean operations short-circuit; and/or may return operand values, while not returns a boolean. Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-411",
      "srNo": 411,
      "question": "What will be the output of the following Python code?\nL1= [1,1,2,4,5,6,2,3,1,3,5]\nL2= [8,2,1,3,8,3,7,2,0]\nL=L1+L2\nS=list(set(list(L)))\nS.sort()\nS.reverse()\nS.sort()\nL.reverse()\nprint(S)",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "[0, 1, 2, 3, 4, 5, 6, 7, 8]",
        "[1, 1, 2, 4, 5, 6, 2, 3, 1, 3, 5, 8, 2, 1, 3, 8, 3, 7, 2, 0]",
        "[8, 7, 6, 5, 4, 3, 2, 1, 0]",
        "[0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 8]"
      ],
      "answer": "A",
      "correct": "[0, 1, 2, 3, 4, 5, 6, 7, 8]",
      "trace": {
        "code": "L1= [1,1,2,4,5,6,2,3,1,3,5]\nL2= [8,2,1,3,8,3,7,2,0]\nL=L1+L2\nS=list(set(list(L)))\nS.sort()\nS.reverse()\nS.sort()\nL.reverse()\nprint(S)",
        "output": "[0, 1, 2, 3, 4, 5, 6, 7, 8]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-412",
      "srNo": 412,
      "question": "What will be the output of the following program?\ntuple = {}\ntuple[(1,2,4)] = 8\ntuple[(4,2,1)] = 10\ntuple[(1,2)] = 12\n_sum = 0\nfor k in tuple:\n     _sum += tuple[k]\nprint(len(tuple) + _sum)",
      "marks": 1.0,
      "sourcePage": 29,
      "options": [
        "22",
        "30",
        "33",
        "31"
      ],
      "answer": "C",
      "correct": "33",
      "trace": {
        "code": "tuple = {}\ntuple[(1,2,4)] = 8\ntuple[(4,2,1)] = 10\ntuple[(1,2)] = 12\n_sum = 0\nfor k in tuple:\n     _sum += tuple[k]\nprint(len(tuple) + _sum)",
        "output": "33\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-413",
      "srNo": 413,
      "question": "What is the output of the following program?\nL = list('123456')\nL[0] = L[5] = 0\nL[3] = L[-2]\nL[5]=1\nL[-2]=4\nL[2]=L[-1]\nL[4]=L[3]\nL[-1]=L[3]\nprint(L)",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "[0, '2', 1, '5', '5', '5']",
        "[0, '2', 1, '5', '5', '1']",
        "[1, '2', 1, '5', '5', '5']",
        "[0, '2', 4, '5', '5', '5']"
      ],
      "answer": "A",
      "correct": "[0, '2', 1, '5', '5', '5']",
      "trace": {
        "code": "L = list('123456')\nL[0] = L[5] = 0\nL[3] = L[-2]\nL[5]=1\nL[-2]=4\nL[2]=L[-1]\nL[4]=L[3]\nL[-1]=L[3]\nprint(L)",
        "output": "[0, '2', 1, '5', '5', '5']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-414",
      "srNo": 414,
      "question": "What will be the output of the following Python code?\nl1 = ['A', 'B', 'C', 'D','E']\nl2 = l1.copy()\nl3 = l1[ : :-1]\nl2[4] = 'G'\nl3[3] = 'H'\nl1[4] = l2[4]\nl1[3] = l3[3]\nsum = 0\nfor i in (l1, l2, l3):\n  if i[4] == 'G':\n    sum += 7\n  if i[3] == 'H':\n    sum += 22\n  if i[2] == 'C' :\n    sum += 30\nprint(sum)",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "150",
        "148",
        "59",
        "118"
      ],
      "answer": "B",
      "correct": "148",
      "trace": {
        "code": "l1 = ['A', 'B', 'C', 'D','E']\nl2 = l1.copy()\nl3 = l1[ : :-1]\nl2[4] = 'G'\nl3[3] = 'H'\nl1[4] = l2[4]\nl1[3] = l3[3]\nsum = 0\nfor i in (l1, l2, l3):\n  if i[4] == 'G':\n    sum += 7\n  if i[3] == 'H':\n    sum += 22\n  if i[2] == 'C' :\n    sum += 30\nprint(sum)",
        "output": "148\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-415",
      "srNo": 415,
      "question": "What is the output of following python code –\ndict = {1: 2, 3:4, 4:11, 5:61, 7:81}\nprint(dict[dict[3]])",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "11",
        "12",
        "13",
        "14"
      ],
      "answer": "A",
      "correct": "11",
      "trace": {
        "code": "dict = {1: 2, 3:4, 4:11, 5:61, 7:81}\nprint(dict[dict[3]])",
        "output": "11\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-416",
      "srNo": 416,
      "question": "What is the output for following code:\nlist1=[1,2,3,4]\nlist2=[5,6,7,8]\nprint(len(list1+list2-list1+list2))",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "4",
        "8",
        "6",
        "TypeError"
      ],
      "answer": "D",
      "correct": "TypeError",
      "trace": {
        "code": "list1=[1,2,3,4]\nlist2=[5,6,7,8]\nprint(len(list1+list2-list1+list2))",
        "output": "",
        "error": "TypeError: unsupported operand type(s) for -: 'list' and 'list'"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-417",
      "srNo": 417,
      "question": "What will be the output of the following Python code?\ndef writer():\n  title = 'Sir'\n  name = (lambda x: title + ' ' * 2x)\n  return name\nwho = writer()\nprint(who('Arthur'))",
      "marks": 0.5,
      "sourcePage": 30,
      "options": [
        "Error",
        "Sir Arthur Sir Arthur",
        "ArthurSir",
        "ArthurSirArthurSir"
      ],
      "answer": "A",
      "correct": "Error",
      "explanation": "The expression 2x is invalid Python; multiplication must be written 2*x. The lambda cannot be defined."
    },
    {
      "id": "S3-418",
      "srNo": 418,
      "question": "Following Lambda function series can be used to find __________.\nfrom functools import *\nSeries = lambda n: reduce(lambda x, _: x + [x[-1] + x[-2]], range (n-2) , [0,1])",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "sum of first two numbers in a list",
        "Fibonacci Series",
        "The geometric series",
        "Syntax error"
      ],
      "answer": "B",
      "correct": "Fibonacci Series",
      "explanation": "Start from [0,1] and append the sum of the last two terms each iteration, generating Fibonacci numbers."
    },
    {
      "id": "S3-419",
      "srNo": 419,
      "question": "What will be the output of the following Python code?\nnames1 = ['A', 'B', 'C', 'D']\nnames2 = names1\nnames3 = names1[:]\nnames2[0] = 'Aa'\nnames3[1] = 'BB'\nsum = 0\nfor s in (names1, names2, names3):\n  if s[0] == 'Aa':\n    sum += 2\n  if s[1] == 'BB':\n    sum += 20\nprint(sum)",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "24",
        "11",
        "12",
        "13"
      ],
      "answer": "A",
      "correct": "24",
      "trace": {
        "code": "names1 = ['A', 'B', 'C', 'D']\nnames2 = names1\nnames3 = names1[:]\nnames2[0] = 'Aa'\nnames3[1] = 'BB'\nsum = 0\nfor s in (names1, names2, names3):\n  if s[0] == 'Aa':\n    sum += 2\n  if s[1] == 'BB':\n    sum += 20\nprint(sum)",
        "output": "24\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-420",
      "srNo": 420,
      "question": "What will be the output of the following Python code?\nl=[[[\"hello\",\"0hel\"],\"bh\"],\"nm\"]\nprint(l[0])",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "[['hello', '0hel']]",
        "[['hello', '0hel'], bh']",
        "[['hello’]",
        "index error"
      ],
      "answer": "B",
      "correct": "[['hello', '0hel'], bh']",
      "trace": {
        "code": "l=[[[\"hello\",\"0hel\"],\"bh\"],\"nm\"]\nprint(l[0])",
        "output": "[['hello', '0hel'], 'bh']\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-421",
      "srNo": 421,
      "question": "What will be the output of the following Python code?\nnums = [3, 5, 16, 27]\nsome_nums  = list(filter(lambda num: 5 <= num < 27, nums))\nprint(some_nums)",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "[5,16,27]",
        "[3,5,16]",
        "[3,5,27]",
        "[5,16]"
      ],
      "answer": "D",
      "correct": "[5,16]",
      "trace": {
        "code": "nums = [3, 5, 16, 27]\nsome_nums  = list(filter(lambda num: 5 <= num < 27, nums))\nprint(some_nums)",
        "output": "[5, 16]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-422",
      "srNo": 422,
      "question": "What will be the output of the following Python code?\nx={1,2,3,4,5}\ny={3,4,5,6,7}\nz={1,3,5,7,9}\nprint( (x|y) & (x|z))",
      "marks": 1.0,
      "sourcePage": 30,
      "options": [
        "{1, 2, 3, 4, 5, 6, 7}",
        "{1, 2, 3, 4, 5, 7}",
        "{1, 3, 5, 7, 9}",
        "{1, 2, 3, 5, 6, 7, 9}"
      ],
      "answer": "B",
      "correct": "{1, 2, 3, 4, 5, 7}",
      "trace": {
        "code": "x={1,2,3,4,5}\ny={3,4,5,6,7}\nz={1,3,5,7,9}\nprint( (x|y) & (x|z))",
        "output": "{1, 2, 3, 4, 5, 7}\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-423",
      "srNo": 423,
      "question": "What will be the output of the following Python code?\nl=[1,2,3,5,7,8,9,10]\nm=max(l)\nprint(l.index(m))",
      "marks": 0.5,
      "sourcePage": 30,
      "options": [
        "7",
        "8",
        "10",
        "5"
      ],
      "answer": "A",
      "correct": "7",
      "trace": {
        "code": "l=[1,2,3,5,7,8,9,10]\nm=max(l)\nprint(l.index(m))",
        "output": "7\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-424",
      "srNo": 424,
      "question": "What will be the output of the following Python code?\nx = ['ab', 'cd']\nfor i in x:\n    i.upper()\nprint(x)",
      "marks": 0.5,
      "sourcePage": 30,
      "options": [
        "[‘ab’, ‘cd’]",
        "[‘AB’, ‘CD’]",
        "[None, None]",
        "ERROR"
      ],
      "answer": "A",
      "correct": "[‘ab’, ‘cd’]",
      "trace": {
        "code": "x = ['ab', 'cd']\nfor i in x:\n    i.upper()\nprint(x)",
        "output": "['ab', 'cd']\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration."
    },
    {
      "id": "S3-425",
      "srNo": 425,
      "question": "What will be the output of the following Python code?\ndef f(l):\n  l.append([1,2,3])\n  return\nl=[1,2,3]\nprint(l,end=\" \")\nf(l)\nprint(l)",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "[1,2,3] [1,2,3,[1,2,3]]",
        "[1,3,2] [1,3,2]",
        "[1,2,3] [1,2,3,1,2,3]",
        "ERROR"
      ],
      "answer": "A",
      "correct": "[1,2,3] [1,2,3,[1,2,3]]",
      "trace": {
        "code": "def f(l):\n  l.append([1,2,3])\n  return\nl=[1,2,3]\nprint(l,end=\" \")\nf(l)\nprint(l)",
        "output": "[1, 2, 3] [1, 2, 3, [1, 2, 3]]\n",
        "error": null
      },
      "explanation": "A definition runs its body only when called. A function without return returns None."
    },
    {
      "id": "S3-426",
      "srNo": 426,
      "question": "What will be the output of the following Python code?\nd={1:\"welcome\",[1]:{1:2}}\nprint(d[[1]])",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "ERROR",
        "1",
        "2",
        "[1]"
      ],
      "answer": "A",
      "correct": "ERROR",
      "trace": {
        "code": "d={1:\"welcome\",[1]:{1:2}}\nprint(d[[1]])",
        "output": "",
        "error": "TypeError: unhashable type: 'list'"
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-427",
      "srNo": 427,
      "question": "What will be the output of the following Python code?\nl=[1,2,[[1,2,[1,2],1,2]]]\nprint(l[2][0])",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "[1, 2, [1, 2], 1, 2]",
        "[1,2]",
        "[1,2,1,2]",
        "2"
      ],
      "answer": "A",
      "correct": "[1, 2, [1, 2], 1, 2]",
      "trace": {
        "code": "l=[1,2,[[1,2,[1,2],1,2]]]\nprint(l[2][0])",
        "output": "[1, 2, [1, 2], 1, 2]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-428",
      "srNo": 428,
      "question": "What will be the output of the following Python code?\nl=[1,\"m\",[\"a\",{1:[1,2,3]}]]\nt={(1,2,3):(5)}\ns=(l[2][1][1],t[(1,2,3)])\nprint(s)",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "([1, 2, 3], 5)",
        "a5",
        "10",
        "7"
      ],
      "answer": "A",
      "correct": "([1, 2, 3], 5)",
      "trace": {
        "code": "l=[1,\"m\",[\"a\",{1:[1,2,3]}]]\nt={(1,2,3):(5)}\ns=(l[2][1][1],t[(1,2,3)])\nprint(s)",
        "output": "([1, 2, 3], 5)\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-429",
      "srNo": 429,
      "question": "What will be the output of the following Python code?\nl=[1,2,(5)]\nl[2]=7\nprint(l)",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "[1,2,7]",
        "[1,2,5]",
        "[1,2,(5)]",
        "TYPE ERROR"
      ],
      "answer": "A",
      "correct": "[1,2,7]",
      "trace": {
        "code": "l=[1,2,(5)]\nl[2]=7\nprint(l)",
        "output": "[1, 2, 7]\n",
        "error": null
      },
      "explanation": "Evaluate assignments and expressions from top to bottom, using the values currently bound to each name."
    },
    {
      "id": "S3-430",
      "srNo": 430,
      "question": "What will be the output of the following program on execution?\ndef f(*l):\n  for i in l[0]:\n    sum=0\n    sum+=i\n  print(sum)\nf([1,2,3])",
      "marks": 1.0,
      "sourcePage": 31,
      "options": [
        "3",
        "error",
        "2",
        "6"
      ],
      "answer": "A",
      "correct": "3",
      "trace": {
        "code": "def f(*l):\n  for i in l[0]:\n    sum=0\n    sum+=i\n  print(sum)\nf([1,2,3])",
        "output": "3\n",
        "error": null
      },
      "explanation": "Trace iterations in order; break exits the loop and continue skips to its next iteration. A definition runs its body only when called. A function without return returns None."
    }
  ],
  "coding": [
    {
      "id": "S3-C400",
      "srNo": 400,
      "question": "Given a list L of size N, You need to count the number of special elements in the given list. An element is special if\nremoval of that element makes the list balanced.\nThe list will be balanced if sum of even index elements is equal to the sum of odd index elements.\nExample Input\nInput 1:\nA = [2,1,6,4]\nInput 2:\nA=[5,5,2,5,8]\nExample Output\nOutput 1:\n1\nOutput 2:\n2\nExplanation 1 :\nAfter deleting 1 from list : [2,6,4]\n(2+4) = (6)\nHence 1 is the only special element, so count is 1.\nExplanation 2 :\nIf we delete A[0] or A[1], list will be balanced\n(5+5)=(2+8)\nSo A[0] and A[1] are special elements, so count is 2.",
      "marks": 9.0,
      "sourcePage": 28,
      "solution": "a = list(map(int, input('List: ').split()))\ncount = 0\nfor i in range(len(a)):\n    remaining = a[:i] + a[i+1:]\n    if sum(remaining[::2]) == sum(remaining[1::2]): count += 1\nprint(count)",
      "explanation": "Test each removal independently, with indices recomputed after removal. [2, 1, 6, 4] has one special element.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "2 1 6 4"
      ],
      "exampleOutput": "1"
    },
    {
      "id": "S3-C401",
      "srNo": 401,
      "question": "The Syracuse (also called Collatz or Hailstone) sequence is generated by starting with a natural number and repeatedly\napplying the following function until reaching 1:\nsyr(x) = x / 2 if x is even; and\nsyr(x) = 3x + 1 if x is odd\nFor example, the Syracuse sequence starting with 5 is: 5, 16, 8, 4, 2, 1.\nUse of inbuilt function or math library is not allowed.\nThis sequence will always go to 1 for every possible starting value.\nWrite a program that\n1. Gets a starting value from the user\n2. Prints the Syracuse sequence for that starting value.",
      "marks": 5.0,
      "sourcePage": 28,
      "solution": "n = int(input('Positive starting value: '))\nif n < 1: raise ValueError('Use a positive integer')\nprint(n, end=' ')\nwhile n != 1:\n    if n % 2 == 0: n //= 2\n    else: n = 3*n + 1\n    print(n, end=' ')",
      "explanation": "Apply the Collatz rule until reaching 1. Integer division retains integers. No math library is used. The PDF’s claim that every start reaches 1 is a conjecture, not a proven general theorem.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "5"
      ],
      "exampleOutput": "5 16 8 4 2 1"
    },
    {
      "id": "S3-C431",
      "srNo": 431,
      "question": "Write a Python program to print the even numbers from a given list.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nprint([n for n in a if n % 2 == 0])",
      "explanation": "Filter elements whose remainder modulo two is zero.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "[2, 4]"
    },
    {
      "id": "S3-C432",
      "srNo": 432,
      "question": "Write a Python Program to print the largest even number in a list.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\neven = [n for n in a if n % 2 == 0]\nprint(max(even) if even else 'No even numbers')",
      "explanation": "Filter first, then find the maximum. Handle a list with no qualifying elements.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "4"
    },
    {
      "id": "S3-C433",
      "srNo": 433,
      "question": "Write a Python program that accepts a list of numbers from the user and prints the largest odd number from the list.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nodd = [n for n in a if n % 2 != 0]\nprint(max(odd) if odd else 'No odd numbers')",
      "explanation": "Negative odd values qualify too; handle the absence of odd numbers.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "3"
    },
    {
      "id": "S3-C434",
      "srNo": 434,
      "question": "Write a Python program that accepts a list of numbers from the user and returns the smallest positive integer number that\ndoes not appear in the list.\nExample 1:\nInput List: [7, 12, 9, 4]\nMissing smallest positive integer: 1\nExample 2:\nInput List: [5, 9, -1, 7, 1]\nMissing smallest positive integer: 2\nExample 3:\nInput List: [10, 0, 3, -4, 2, 1]\nMissing smallest positive integer: 4",
      "marks": 3.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nmissing = 1\nwhile missing in a:\n    missing += 1\nprint(missing)",
      "explanation": "Start at 1 and increase until finding a positive integer absent from the list.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "10 0 3 -4 2 1"
      ],
      "exampleOutput": "4"
    },
    {
      "id": "S3-C435",
      "srNo": 435,
      "question": "Write a Python program to swap first and last element of the list.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nif a: a[0], a[-1] = a[-1], a[0]\nprint(a)",
      "explanation": "Swap the two endpoints; protect an empty list.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "[4, 2, 3, 1]"
    },
    {
      "id": "S3-C436",
      "srNo": 436,
      "question": "Write a Python program to find the sum of all the elements in the list.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nprint(sum(a))",
      "explanation": "sum returns the total, or zero for an empty list.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "10"
    },
    {
      "id": "S3-C437",
      "srNo": 437,
      "question": "Write a Python function to sum all the numbers in a list",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "def total(values):\n    return sum(values)\na = list(map(int, input('List values separated by spaces: ').split()))\nprint(total(a))",
      "explanation": "Wrap the sum in a reusable function.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "10"
    },
    {
      "id": "S3-C438",
      "srNo": 438,
      "question": "Write a Python program of Reversing a List.",
      "marks": 3.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\na.reverse()\nprint(a)",
      "explanation": "reverse modifies the original list in place.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4"
      ],
      "exampleOutput": "[4, 3, 2, 1]"
    },
    {
      "id": "S3-C439",
      "srNo": 439,
      "question": "Write a Python program to Merging two Dictionaries",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "import json\na = json.loads(input('First dictionary as JSON: '))\nb = json.loads(input('Second dictionary as JSON: '))\nprint({**a, **b})",
      "explanation": "Unpack both dictionaries into a new dictionary. The second dictionary wins for duplicate keys. JSON input needs double quotes.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "{\"a\":1}",
        "{\"b\":2}"
      ],
      "exampleOutput": "{'a': 1, 'b': 2}"
    },
    {
      "id": "S3-C440",
      "srNo": 440,
      "question": "Write a Python program to calculate the sum of the positive and negative numbers of a given list of numbers using lambda\nfunction.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\npositive = list(filter(lambda n: n > 0, a))\nnegative = list(filter(lambda n: n < 0, a))\nprint('Positive sum:', sum(positive))\nprint('Negative sum:', sum(negative))",
      "explanation": "Lambda predicates select positive and negative numbers. The supplied example totals 48 and -32; zero contributes to neither.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "2 4 -6 -9 11 -12 14 -5 17"
      ],
      "exampleOutput": "Positive sum: 48\nNegative sum: -32"
    },
    {
      "id": "S3-C441",
      "srNo": 441,
      "question": "Write a Python program to rearrange positive and negative numbers in a given array using Lambda.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nprint(sorted(a, key=lambda n: n >= 0))",
      "explanation": "Boolean keys put negative values first and nonnegative values second. Stable sorting preserves the order within each group.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 -2 3 -4"
      ],
      "exampleOutput": "[-2, -4, 1, 3]"
    },
    {
      "id": "S3-C442",
      "srNo": 442,
      "question": "Write a Python program to find numbers divisible by nineteen or thirteen from a list of numbers using Lambda.",
      "marks": 4.0,
      "sourcePage": 31,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nprint(list(filter(lambda n: n % 19 == 0 or n % 13 == 0, a)))",
      "explanation": "Keep a value if either divisibility condition is true.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "13 19 247 1"
      ],
      "exampleOutput": "[13, 19, 247]"
    },
    {
      "id": "S3-C443",
      "srNo": 443,
      "question": "Given a list of elements, write a python program to perform grouping of similar elements, as different key-value list in\ndictionary. Print the dictionary sorted in descending order of frequency of the elements.\nNote: To perform the sorting, use the sorted function by converting the dictionary into a list of tuples. After sorting, convert\nthe list of tuples back into a dictionary and print it.\nInput : test_list = [4, 6, 6, 4, 2, 2, 4, 8, 5, 8]\nOutput : {4: [4, 4, 4], 6: [6, 6], 2: [2, 2], 8: [8, 8], 5: [5]}\nExplanation : Similar items grouped together on occurrences.\nInput : test_list = [7, 7, 7, 7]\nOutput : {7 : [7, 7, 7, 7]}\nExplanation : Similar items grouped together on occurrences.",
      "marks": 3.0,
      "sourcePage": 31,
      "figures": [
        "figures/q443-p31-1.png",
        "figures/q443-p31-2.png"
      ],
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\ngroups = {}\nfor n in a: groups.setdefault(n, []).append(n)\nprint(dict(sorted(list(groups.items()), key=lambda pair: len(pair[1]), reverse=True)))",
      "explanation": "Group equal values, convert items to tuples, sort by group size descending and rebuild the dictionary.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "4 6 6 4 2 2 4 8 5 8"
      ],
      "exampleOutput": "{4: [4, 4, 4], 6: [6, 6], 2: [2, 2], 8: [8, 8], 5: [5]}"
    },
    {
      "id": "S3-C444",
      "srNo": 444,
      "question": "A digital image in a computer is represented by a pixels matrix. Each image processing operation in a computer may be\nobserved as an operation on the image matrix. Suppose you are given an N x N 2D matrix A (in the form of a list)\nrepresenting an image. Write a Python program to rotate this image by 90 degrees (clockwise) by rotating the matrix 90\ndegree clockwise. Write proper code to take input of N from the user and then to take input of an N x N matrix from the\nuser. Rotate the matrix by 90 degree clockwise and then print the rotated matrix.\nNote: You are not allowed to use an extra iterable like list, tuple, etc. to do this. You need to make changes in the given list A\nitself. Your program should be able to handle any N x N matrix from N = 1 to N = 20.",
      "marks": 9.0,
      "sourcePage": 32,
      "figures": [
        "figures/q444-p32-1.png"
      ],
      "solution": "n = int(input('Matrix size (1-20): '))\nif not 1 <= n <= 20: raise ValueError('Invalid size')\na = [list(map(int, input('Row: ').split())) for _ in range(n)]\nif any(len(row) != n for row in a): raise ValueError('Each row needs n values')\n# Transpose in place, without a second matrix.\nfor i in range(n):\n    for j in range(i + 1, n):\n        temp = a[i][j]\n        a[i][j] = a[j][i]\n        a[j][i] = temp\n# Reverse every row in place.\nfor i in range(n):\n    for j in range(n // 2):\n        temp = a[i][j]\n        a[i][j] = a[i][n-1-j]\n        a[i][n-1-j] = temp\nfor row in a: print(*row)",
      "explanation": "A clockwise 90-degree rotation is a transpose followed by reversing each row. Scalar temporary values avoid an extra iterable during rotation.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "3",
        "1 2 3",
        "4 5 6",
        "7 8 9"
      ],
      "exampleOutput": "7 4 1\n8 5 2\n9 6 3"
    },
    {
      "id": "S3-C445",
      "srNo": 445,
      "question": "Write a Program to Print Longest Common Prefix from a given list of strings. The longest common prefix for list of strings is\nthe common prefix (starting of string) between all strings. For example, in the given list [“apple”, “ape”, “zebra”], there is no\ncommon prefix because the 2 most dissimilar strings of the list “ape” and “zebra” do not share any starting characters. If\nthere is no common prefix between all strings in the list than return -1.\nFor example,\nInput list: [\"lessonplan\", \"lesson\",\"lees\", \"length\"]\nThe longest Common Prefix is: le\nInput list: [\"python\",\"pythonprogramming\",\"pythonlist\"]\nThe longest Common Prefix is: python\nInput list: [\"lessonplan\", \"lesson\",\"ees\", \"length\"]\nThe longest Common Prefix is: -1",
      "marks": 4.0,
      "sourcePage": 32,
      "solution": "words = input('Words: ').split()\nprefix = words[0] if words else ''\nfor word in words[1:]:\n    while prefix and not word.startswith(prefix): prefix = prefix[:-1]\nprint(prefix if prefix else -1)",
      "explanation": "Shorten the candidate prefix until every word starts with it.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "python pythonprogramming pythonlist"
      ],
      "exampleOutput": "python"
    },
    {
      "id": "S3-C446",
      "srNo": 446,
      "question": "One of the ways to encrypt a string is by rearranging its characters by certain rules, they are broken up by threes, fours or\nsomething larger. For instance, in the case of threes, the string ‘secret message’ would be broken into three groups. The first\ngroup is sr sg, the characters at indices 0, 3, 6, 9 and 12. The second group is eemse, the characters at indices 1, 4, 7, 10, and\n13. The last group is ctea, the characters at indices 2, 5, 8, and 11. The encrypted message is sr sgeemsectea.\nIf the string ‘secret message’ would be broken into four groups. The first group is seeg, the characters at indices 0, 4, 8 and\n12. The second group is etse, the characters at indices 1, 5, 9 and 13. The third group is c s, the characters at indices 2, 6 and\n10. The fourth group is rma, the characters at indices 3, 7 and 11. The encrypted message is seegetsec srma.\n(A). Write a program that asks the user for a string, and an integer determining whether to break things up by threes, fours,\nor whatever user inputs. Encrypt the string using above method.\nFor example,\nInput message: This is python, a programming language\nInput Key: 4\nOutput Encrypted Message: T poaomgnghiyn gm geist,prilus h ranaa\nInput message: This is python, a programming language\nInput Key: 7\nOutput Message: T ,ggahp r giyaalest ma hpmniorigsnonu\n(B). If you get a message which is encoded by the method above then, Write a decryption program for the general case.\nTaking input of any encrypted string from user with key number used while breaking message apart during encryption.\nFor example,\nInput Encrypted message: Hloe gl o sogrilw g epntstfii o yotay hee nnh aoiortiimreegehrun nhnse ne\nInput Key used during encryption: 5\nOutput Decrypted Message: Hi hello how are you going to learn python in this semester of engineering\nInput Encrypted message: Ig ntot oopid ys lt dehaaao yrn\nInput Key used during encryption: 8\nOutput Decrypted Message: It is a good day to learn python\n(C). From the output string (Output Decrypted Message) of above program (Part-B), create a Dictionary with Key as First\nCharacter and Value as list of words Starting with that Character from above string. And print that dictionary by sorting it\nbased on the number of elements in a list of values in descending order.\nNote: Consider capital and lower first character of words as same character in this program. For ex. ‘Hi’ and ‘hello’ both will\nbe considered starting from ‘h’.\nFor example,\nEnter Decrypted Message: Hi hello how are you going to learn python in this semester of engineering\nOutput: {'h': ['Hi', 'hello', 'how'], 't': ['to', 'this'], 'a': ['are'], 'y': ['you'], 'g': ['going'], 'l': ['learn'], 'p': ['python'], 'i': ['in'], 's':\n['semester'], 'o': ['of'], 'e': ['engineering']}\nEnter Decrypted Message: It is a good day to learn python\nOutput: {'i': ['It', 'is'], 'a': ['a'], 'g': ['good'], 'd': ['day'], 't': ['to'], 'l': ['learn'], 'p': ['python']}\nEnter Decrypted Message: it is not the time to play games!\nOutput: {'t': ['the', 'time', 'to'], 'i': ['it', 'is'], 'n': ['not'], 'p': ['play'], 'g': ['games!']}",
      "marks": 9.0,
      "sourcePage": 33,
      "figures": [
        "figures/q446-p32-2.png",
        "figures/q446-p33-1.png"
      ],
      "solution": "def encrypt(text, key):\n    if key < 1: raise ValueError('Key must be positive')\n    return ''.join(text[offset::key] for offset in range(key))\ndef decrypt(cipher, key):\n    if key < 1: raise ValueError('Key must be positive')\n    n = len(cipher)\n    original = [''] * n\n    cursor = 0\n    for offset in range(key):\n        for position in range(offset, n, key):\n            original[position] = cipher[cursor]\n            cursor += 1\n    return ''.join(original)\n# Part A: rearrangement encryption\ntext = input('Message: ')\nkey = int(input('Key: '))\ncipher = encrypt(text, key)\nprint('Encrypted:', cipher)\n# Part B: decryption with the same key\nmessage = decrypt(cipher, key)\nprint('Decrypted:', message)\n# Part C: grouping the decrypted words\ngroups = {}\nfor word in message.split(): groups.setdefault(word[0].lower(), []).append(word)\nprint(dict(sorted(groups.items(), key=lambda pair: len(pair[1]), reverse=True)))",
      "explanation": "This is a transposition cipher, not Caesar encryption. Encryption joins text[0::key], text[1::key], etc. Decryption restores each original position, including unequal final group lengths. Then group words and sort by descending frequency.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "secret message",
        "4"
      ],
      "exampleOutput": "Encrypted: seegetsec srma\nDecrypted: secret message\n{'s': ['secret'], 'm': ['message']}"
    },
    {
      "id": "S3-C447",
      "srNo": 447,
      "question": "Write a python program to print all possible combinations from the three Digits and also count unique values inside a list\nand also find list product excluding duplicates and also find sum of list’s elements excluding duplicates.\nExamples:\nTo print all possible combinations\nInput: [1, 2, 3]\nOutput:\n1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1\nCount unique values inside a list\ninput = [1, 2, 3]\nNo of unique items are: 3\ninput = [1, 2, 2]\nNo of unique items are: 2\ninput = [2, 2, 2]\nNo of unique items are: 3\nList product excluding duplicates\nInput: [2, 3, 5]\nDuplication removal list product: 30\nInput: [2, 2, 3]\nDuplication removal list product: 6\nSum of list’s elements excluding duplicates\nInput: [1, 3, 5]\nOutput: 9\nInput: [1, 2, 2]\nOutput: 3",
      "marks": 9.0,
      "sourcePage": 33,
      "solution": "from itertools import permutations\nfrom math import prod\na = list(map(int, input('List values separated by spaces: ').split()))\nif len(a) != 3: raise ValueError('Enter three digits')\nfor combination in sorted(set(permutations(a))): print(*combination)\nunique = set(a)\nprint('Unique count:', len(unique))\nprint('Product:', prod(unique))\nprint('Sum:', sum(unique))",
      "explanation": "Permutations produce the requested orderings without repeating a position. Use a set for unique values. The PDF’s unique count of 3 for [2,2,2] is a typo; the correct count is 1.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3"
      ],
      "exampleOutput": "1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1\nUnique count: 3\nProduct: 6\nSum: 6"
    },
    {
      "id": "S3-C448",
      "srNo": 448,
      "question": "• Use appropriate comment lines to divide subprograms.\n• Also demonstrate the program with one example test case. (Example test input and output are given)\nPART - A\n Using map function, write a Python program to convert the given list into a tuple of strings. For the given input, the\nprogram must print the output as shown below -\nInput – [1,2,3,4]\nOutput – (‘1’,’2’,’3’,’4’)\nPART - B\n Write a Python program that multiply each number of the given list with 10 using lambda function. For the given input, the\nprogram must print the output as shown below -\nInput – [1,2,3,4]\nOutput – [10,20,30,40]\nPART - C\n Write a Python program that multiply all elements of the given list using reduce function and return the product. For the\ngiven input, the program must print the output as shown below -\nInput – [1,2,3,4]\nOutput – 24 (which is 1*2*3*4)\nPART - D\nWrite a Python program satisfying following conditions -\n Create a python function countchar() that count the character of a string in a given string without using inbuilt functions.\nFor the given input, the program must print the output as shown below -\nGiven input string – ‘hello’\ncountchar(‘l’)\nOutput : 2\n Create a python function findchar() that find the index of first occurrence of a character in a given string without using\ninbuilt functions. It should return -1 if it does not find the character. For the given input, the program must print the output\nas shown below -\nGiven input string – ‘helloe’\nfindchar(‘e’)\nOutput : 1\nfindchar(‘z’)\nOutput : -1",
      "marks": 5.0,
      "sourcePage": 34,
      "solution": "from functools import reduce\na = [1, 2, 3, 4]\n# Part A\nprint(tuple(map(str, a)))\n# Part B\nprint(list(map(lambda n: n * 10, a)))\n# Part C\nprint(reduce(lambda x, y: x * y, a, 1))\n# Part D\ndef countchar(text, character):\n    count = 0\n    for c in text:\n        if c == character: count += 1\n    return count\n\ndef findchar(text, character):\n    index = 0\n    for c in text:\n        if c == character: return index\n        index += 1\n    return -1\n\nprint(countchar('hello', 'l'))\nprint(findchar('helloe', 'e'))\nprint(findchar('helloe', 'z'))",
      "explanation": "map applies a conversion to each value; reduce combines all values. The manual character functions use loops instead of count/find. Outputs include 24, 2, 1 and -1.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleOutput": "('1', '2', '3', '4')\n[10, 20, 30, 40]\n24\n2\n1\n-1"
    },
    {
      "id": "S3-C449",
      "srNo": 449,
      "question": "Write a Python program to calculate the sum of the positive and negative numbers of the below given list of numbers using\nlambda function.\nInput : m = [2, 4, -6, -9, 11, -12, 14, -5, 17]\nOutput : Sum of the positive numbers: 48\nSum of the negative numbers: -32",
      "marks": 4.0,
      "sourcePage": 34,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\npositive = list(filter(lambda n: n > 0, a))\nnegative = list(filter(lambda n: n < 0, a))\nprint('Positive sum:', sum(positive))\nprint('Negative sum:', sum(negative))",
      "explanation": "Lambda predicates select positive and negative numbers. The supplied example totals 48 and -32; zero contributes to neither.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "2 4 -6 -9 11 -12 14 -5 17"
      ],
      "exampleOutput": "Positive sum: 48\nNegative sum: -32"
    },
    {
      "id": "S3-C450",
      "srNo": 450,
      "question": "Create a python program which takes password as input and a function which checks whether the given password is valid or\nnot under following conditions without using the RegEx module in Python language.\nConditions required for a valid password:\n1. Password strength should be at least 8 characters long\n2. Password should contain at least one uppercase and one lowercase character.\n3. Password must have at least one number.",
      "marks": 2.0,
      "sourcePage": 34,
      "solution": "def valid_password(p):\n    return len(p) >= 8 and any(c.isupper() for c in p) and any(c.islower() for c in p) and any(c.isdigit() for c in p)\nprint('Valid' if valid_password(input('Password: ')) else 'Invalid')",
      "explanation": "Require length at least 8 and all three character categories without regular expressions.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "Password1"
      ],
      "exampleOutput": "Valid"
    },
    {
      "id": "S3-C451",
      "srNo": 451,
      "question": "Write a python program with user defined function that reads the words from paragraph and stores them as keys in a\ndictionary and count the frequency of it as a value .\nFor Example:\nInput string: “Dog the quick brown fox jumps over the lazy dog”\nOutput: {'the': 2, 'jumps': 1, 'brown': 1, 'lazy': 1, 'fox': 1, 'over': 1, 'quick': 1, 'dog': 2}",
      "marks": 3.0,
      "sourcePage": 34,
      "solution": "def frequencies(text):\n    counts = {}\n    for word in text.lower().split(): counts[word] = counts.get(word, 0) + 1\n    return counts\nprint(frequencies(input('Paragraph: ')))",
      "explanation": "Lowercase makes Dog and dog the same key; increment a counter for each word.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "Dog the quick brown fox jumps over the lazy dog"
      ],
      "exampleOutput": "{'dog': 2, 'the': 2, 'quick': 1, 'brown': 1, 'fox': 1, 'jumps': 1, 'over': 1, 'lazy': 1}"
    },
    {
      "id": "S3-C452",
      "srNo": 452,
      "question": "Write a python Program to check entered password by user is correct or not. Entered password is correct if it has upper\ncharacter, lower character , digits (but not more than 3 digits) ,special character and length is greater than or equal to eight\nand less than equal to fifteen. Get the digits from entered password and convert it in to number and then convert it in to\nEnglish Word .\nExample:\ncase 1\npw= R@m@3fa1tu9e$\nValid Password\nnum= 319\nthree hundred and nineteen\ncase 2\npw= S@m@6a1tue$\nValid Password\nnum= 61\nsixty-one\ncase 3\npw= S@m@6a26u8$\nInvalid Password",
      "marks": 9.0,
      "sourcePage": 34,
      "solution": "def words(n):\n    small = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']\n    tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']\n    if n < 20: return small[n]\n    if n < 100: return tens[n//10] + ('-' + small[n%10] if n%10 else '')\n    return small[n//100] + ' hundred' + (' and ' + words(n%100) if n%100 else '')\np = input('Password: ')\ndigits = ''.join(c for c in p if c in '0123456789')\nvalid = 8 <= len(p) <= 15 and 1 <= len(digits) <= 3 and any(c.isupper() for c in p) and any(c.islower() for c in p) and any(not c.isalnum() and not c.isspace() for c in p)\nif valid:\n    number = int(digits)\n    print('Valid Password')\n    print('num =', number)\n    print(words(number))\nelse: print('Invalid Password')",
      "explanation": "Validate before extracting at most three digits. A recursive conversion handles 0-999; 319 becomes three hundred and nineteen.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "R@m@3fa1tu9e$"
      ],
      "exampleOutput": "Valid Password\nnum = 319\nthree hundred and nineteen"
    },
    {
      "id": "S3-C453",
      "srNo": 453,
      "question": "Write a Python Program using function to count number of strings where the string length is 3 or more and the first and last\ncharacter are same from a given list of string.\nExample :\nInput: ['abc','xyz','aba','2112','123451','12345']\nOutput: 3",
      "marks": 2.0,
      "sourcePage": 35,
      "solution": "def count_matching(words):\n    return sum(1 for w in words if len(w) >= 3 and w[0] == w[-1])\nprint(count_matching(input('Words: ').split()))",
      "explanation": "Count only strings with at least three characters and matching endpoints.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "abc xyz aba 2112 123451 12345"
      ],
      "exampleOutput": "3"
    },
    {
      "id": "S3-C454",
      "srNo": 454,
      "question": "Given a list L of size N. You need to count the number of special elements in the given list. An element is special if removal of\nthat element makes the list balanced. The list will be balanced if sum of even index elements is equal to the sum of odd\nelements. Also print the updated lists after removal of special elements.\nExample 1:\nInput:\nL=[5, 5, 2, 5, 8]\nOutput:\nOriginal List: [5, 5, 2, 5, 8]\nIndex to be removed is: 0\nList after removing index 0 : [5, 2, 5, 8]\nOriginal List: [5, 5, 2, 5, 8]\nIndex to be removed is: 1\nList after removing index 1 : [5, 2, 5, 8]\nTotal number of special elements: 2\nExplaination:\nIf we delete L[0] or L[1], list will be balanced.\n[5, 2, 5, 8]\n(5+5) = (2+8)\nSo L[0] and L[1] are special elements, So Count is 2.\nAfter removal of the special elements, list will be: [5, 2, 5, 8]\nExample 2:\nInput:\nL=[2,1,6,4]\nOutput:\nOriginal List: [2, 1, 6, 4]\nIndex to be removed is: 1\nList after removing index 1 : [2, 6, 4]\nTotal Number of Special elements: 1\nExplaination:\nIf we delete L[1] from list : [2,6,4]\n(2+4) = (6)\nHere only 1 special element. So Count is 1.\nAfter removal of special element, list will be : [2,6,4]",
      "marks": 9.0,
      "sourcePage": 35,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\ncount = 0\nfor i in range(len(a)):\n    remaining = a[:i] + a[i+1:]\n    if sum(remaining[::2]) == sum(remaining[1::2]):\n        print('Original:', a, 'Index:', i, 'After removal:', remaining)\n        count += 1\nprint('Special elements:', count)",
      "explanation": "Each candidate removal starts from the original list; do not remove all candidate elements simultaneously.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "5 5 2 5 8"
      ],
      "exampleOutput": "Original: [5, 5, 2, 5, 8] Index: 0 After removal: [5, 2, 5, 8]\nOriginal: [5, 5, 2, 5, 8] Index: 1 After removal: [5, 2, 5, 8]\nSpecial elements: 2"
    },
    {
      "id": "S3-C455",
      "srNo": 455,
      "question": "Write Python Program to create a dictionary with the key as the first character and value as a list of words starting with that\ncharacter.\nExample:\nInput: Don’t wait for your feelings to change to take the action. Take the action and your feelings will change\nOutput:\n{'D': ['Don’t'], 'w': ['wait', 'will'], 'f': ['for', 'feelings', 'feelings'], 'y': ['your', 'your'], 't': ['to', 'to', 'take', 'the', 'the'], 'c': ['change',\n'change'], 'a': ['action.', 'action', 'and'], 'T': ['Take']}",
      "marks": 3.0,
      "sourcePage": 35,
      "solution": "groups = {}\nfor word in input('Sentence: ').split(): groups.setdefault(word[0], []).append(word)\nprint(groups)",
      "explanation": "Use the original first character as the key. Uppercase and lowercase keys remain separate for this question.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "Hi hello how are you"
      ],
      "exampleOutput": "{'H': ['Hi'], 'h': ['hello', 'how'], 'a': ['are'], 'y': ['you']}"
    },
    {
      "id": "S3-C456",
      "srNo": 456,
      "question": "d={\"student0\":'Student@0',\"student1\":'Student@11',\"student2\":'Student@121',\n\"student3\":'Student@052',\"student4\":'Student@01278',\"student5\":'Student@0125', Student6\":'Student@042',\n\"student7\":'Student@07800',\"student8\":'Student@012'}\nWrite a python program to update the password of any user given the above dictionary(d) which stores the username as the\nkey of the dictionary and the username's password as the value of the dictionary. print the updated dictionary and print the\nusername and password according to ascending order of password length of the updated dictionary.\nFor the password updating of that username follow some instructions.\n Give the three chances to user enter the correct username and password. If the user does not enter the correct username\nand password then display “enter correct password and username”. if the user does not enter the correct username and\npassword in a given three chances then display “enter correct password and username” and “try after 24h”\n If the user enters the correct username and password in a given three chances. Give the three chances to user enter a new\npassword to update the password of that username. If the user enters a new password not follow the below format, then\ndisplay “follow the password format”. if the user does not enter the password in a given format in a given three chances,\nthen display “follow the password format” and “try after 24h”\nThe check, of whether the new password format is correct or wrong makes the user define a function. That user define a\nfunction to return True or False for password valid or not. That user define function return value used in this program for\nnew password validation.\no New password must have the below format:\n1. at least 1 number between 0 and 9\n2. at least 1 upper letter (between a and z)\n3. at least 1 lower letter (between A and Z)\n4. at least 1 special character out of @$_\n5. minimum length of the password is 8 and the maximum length is 15\n6. Do not use space and other special characters. Only uses @$_\nIf the new password follows the format of the password in a given three chances. then print the updated dictionary and\nprint the username and password according to ascending order of password length of an updated dictionary. If the\ndictionary is not updated then take the old dictionary",
      "marks": 9.0,
      "sourcePage": 35,
      "solution": "def valid(p):\n    return 8 <= len(p) <= 15 and any('a' <= c <= 'z' for c in p) and any('A' <= c <= 'Z' for c in p) and any(c in '0123456789' for c in p) and any(c in '@$_' for c in p) and all(c.isascii() and (c.isalnum() or c in '@$_') for c in p)\nd = {'student0':'Student@0','student1':'Student@11','student2':'Student@121','student3':'Student@052','student4':'Student@01278','student5':'Student@0125','Student6':'Student@042','student7':'Student@07800','student8':'Student@012'}\nfor attempt in range(3):\n    username, password = input('Username: '), input('Password: ')\n    if username in d and d[username] == password:\n        for change in range(3):\n            new = input('New password: ')\n            if valid(new):\n                d[username] = new\n                break\n            print('Follow the password format')\n        else: print('Try after 24h')\n        break\n    print('Enter correct password and username')\nelse: print('Try after 24h')\nprint(d)\nfor user, password in sorted(d.items(), key=lambda pair: len(pair[1])): print(user, password)",
      "explanation": "Allow up to three login attempts and then three replacement attempts. Validate all required categories and forbid spaces or other symbols. This is an exam simulation, not a real 24-hour lockout.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "student0",
        "Student@0",
        "New@Password1"
      ],
      "exampleOutput": "{'student0': 'New@Password1', 'student1': 'Student@11', 'student2': 'Student@121', 'student3': 'Student@052', 'student4': 'Student@01278', 'student5': 'Student@0125', 'Student6': 'Student@042', 'student7': 'Student@07800', 'student8': 'Student@012'}\nstudent1 Student@11\nstudent2 Student@121\nstudent3 Student@052\nStudent6 Student@042\nstudent8 Student@012\nstudent5 Student@0125\nstudent0 New@Password1\nstudent4 Student@01278\nstudent7 Student@07800"
    },
    {
      "id": "S3-C457",
      "srNo": 457,
      "question": "Write a Python code which will return the sum of the numbers of the list.\nReturn 0 for an empty list.\nExcept the number 13 is very unlucky, so it does not count and number that come immediately after 13 also do not count in\nsum.\nExample :\n[1, 2, 3, 4] = 10\n[] = 0\n[1, 2, 3, 4, 13] = 10\n[13, 1, 2, 3, 13] = 5\n[1, 13, 2, 3, 4] = 8",
      "marks": 4.0,
      "sourcePage": 36,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\ntotal = 0\nfor i, n in enumerate(a):\n    if n != 13 and (i == 0 or a[i-1] != 13): total += n\nprint(total)",
      "explanation": "Skip every 13 and every element whose immediate predecessor is 13; an empty list totals zero.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 13 2 3 4"
      ],
      "exampleOutput": "8"
    },
    {
      "id": "S3-C458",
      "srNo": 458,
      "question": "Write a Python program which takes a list and returns a list with the elements \"shifted left by number of positions entered\nby user\".\nExample:\nInput:\nList: [1, 2, 3, 4, 5]\nShift: 2\nOutput:\n[3, 4, 5, 1, 2]",
      "marks": 3.0,
      "sourcePage": 36,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nshift = int(input('Positions: '))\nif a:\n    shift %= len(a)\n    a = a[shift:] + a[:shift]\nprint(a)",
      "explanation": "Reduce shift modulo list length; move the first shift elements to the end.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "1 2 3 4 5",
        "2"
      ],
      "exampleOutput": "[3, 4, 5, 1, 2]"
    },
    {
      "id": "S3-C459",
      "srNo": 459,
      "question": "Write a Python program that accepts a list L of size N from the user and reorders its elements in the following pattern: [L[0],\nL[N-1], L[1], L[N-2], L[2], L[N-3], ...].\nNote: You are not allowed to use any additional data structures like lists, strings, or dictionaries. The task must be\naccomplished by rearranging the elements of the original list in-place, without altering the values of the elements\nthemselves.\nExample:\nInput list: [ 2, 4, 6, 8, 10]\nOutput: [ 2, 10, 4, 8, 6]\nInput list: [10, 20, 30, 40]\nOutput: [ 10, 40, 20, 30]",
      "marks": 3.0,
      "sourcePage": 36,
      "solution": "a = list(map(int, input('List values separated by spaces: ').split()))\nfor i in range(1, len(a), 2):\n    last = a[-1]\n    j = len(a) - 1\n    while j > i:\n        a[j] = a[j-1]\n        j -= 1\n    a[i] = last\nprint(a)",
      "explanation": "Move the last remaining element into each odd position by shifting values in the original list. No additional container is allocated during rearrangement.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "2 4 6 8 10"
      ],
      "exampleOutput": "[2, 10, 4, 8, 6]"
    },
    {
      "id": "S3-C460",
      "srNo": 460,
      "question": "Write a Python program that takes a string input from the user and performs the following operations:\n1) Print the string where each word is reversed, but the word order stays the same.\n2) Create a dictionary with each word as a key and its length as the value.\n3) Generate and display a list of words that contain at least 3 vowels.\n4) Create a dictionary of character categories: vowels, consonants (letters of the alphabet except for the vowels), digits,\nand special characters including space, counting each type.\n5) Display which category has the highest count.\n6) Display the list of words with the highest number of unique letters (case-insensitive).\nExample:\nString: Computers 2025 are far more powerful and efficient!!\n1) String with each word reversed:\nsretupmoC 5202 era raf erom lufrewop dna !!tneiciffe\n2) Dictionary with word lengths:\n{'Computers': 9, '2025': 4, 'are': 3, 'far': 3, 'more': 4, 'powerful': 8, 'and': 3, 'efficient!!': 11}\n3) Words containing at least 3 vowels: ['Computers', 'powerful', 'efficient!!']\n4) Character categories: {'vowels': 16, 'consonants': 23, 'digits': 4, 'special': 9}\n5) Category with highest count: consonants\n6) Words with the highest number of unique letters: ['computers']",
      "marks": 6.0,
      "sourcePage": 36,
      "solution": "s = input('String: ')\nwords = s.split()\nprint(' '.join(w[::-1] for w in words))\nprint({w:len(w) for w in words})\nprint([w for w in words if sum(c.lower() in 'aeiou' for c in w) >= 3])\ncategories = {'vowels':0, 'consonants':0, 'digits':0, 'special':0}\nfor c in s:\n    if c.lower() in 'aeiou': key = 'vowels'\n    elif c.isalpha(): key = 'consonants'\n    elif c.isdigit(): key = 'digits'\n    else: key = 'special'\n    categories[key] += 1\nprint(categories)\nmaximum = max(categories.values())\nprint('Highest categories:', [k for k,v in categories.items() if v == maximum])\nunique = {w:len(set(c.lower() for c in w if c.isalpha())) for w in words}\nbest = max(unique.values(), default=0)\nprint('Most unique letters:', [w.lower() for w in words if unique[w] == best])",
      "explanation": "Reverse each word while retaining word order. Count categories including spaces as special; compare unique alphabetic letters case-insensitively. Print every tie, not only one winner.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "Computers 2025 are far more powerful and efficient!!"
      ],
      "exampleOutput": "sretupmoC 5202 era raf erom lufrewop dna !!tneiciffe\n{'Computers': 9, '2025': 4, 'are': 3, 'far': 3, 'more': 4, 'powerful': 8, 'and': 3, 'efficient!!': 11}\n['Computers', 'powerful', 'efficient!!']\n{'vowels': 16, 'consonants': 23, 'digits': 4, 'special': 9}\nHighest categories: ['consonants']\nMost unique letters: ['computers']"
    },
    {
      "id": "S3-C461",
      "srNo": 461,
      "question": "Given a string S containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.\nExample 1:\nInput: s = \"{[()]}\"\nOutput: Valid\nExample 2:\nInput: s = \"()[]{}\"\nOutput: Valid\nExample 3:\nInput: s = \"[(})\"\nOutput: Invalid\nExample 4:\nInput: s = \"({[}])\"\nOutput: Invalid\nExample 5:\nInput: s = \"({[]]})\"\nOutput: Invalid",
      "marks": 5.0,
      "sourcePage": 36,
      "solution": "s = input('Brackets: ')\nstack = []\npairs = {')':'(', ']':'[', '}':'{'}\nvalid = True\nfor c in s:\n    if c in '([{': stack.append(c)\n    elif c in pairs:\n        if not stack or stack.pop() != pairs[c]:\n            valid = False\n            break\n    else:\n        valid = False\n        break\nprint('Valid' if valid and not stack else 'Invalid')",
      "explanation": "A stack remembers the latest open bracket. Each closing bracket must match it, and no unmatched openings may remain.",
      "topic": "Lists, dictionaries, sets and functional programming",
      "starterCode": "",
      "exampleInputs": [
        "{[()]}"
      ],
      "exampleOutput": "Valid"
    }
  ]
};
