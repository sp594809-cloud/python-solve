// ============================================================
// PYTHON FUN LEARNING PATH - Complete Content Data
// Philosophy: Human Thinking → Code
// ============================================================

const THINK_LAB = {
  title: "🧠 Think Lab",
  description: "Train your brain to think like a problem solver. No Python here — only pure thinking.",
  categories: [
    {
      id: "pattern",
      title: "Pattern Recognition",
      levels: [
        {
          id: "pat-1",
          question: "2 → 4\n3 → 6\n5 → 10\n7 → ?",
          options: ["12", "14", "16", "21"],
          correct: 1,
          explanation: "Each number is multiplied by 2. 7 × 2 = 14."
        },
        {
          id: "pat-2",
          question: "1 → 1\n2 → 4\n3 → 9\n4 → 16\n5 → ?",
          options: ["20", "25", "30", "36"],
          correct: 1,
          explanation: "These are square numbers. 5 × 5 = 25."
        }
      ]
    },
    {
      id: "sequence",
      title: "Sequencing",
      levels: [
        {
          id: "seq-1",
          question: "Making tea – put these steps in the correct order:",
          items: ["Add tea leaves", "Boil water", "Add milk & sugar", "Serve"],
          correctOrder: [1, 0, 2, 3],
          explanation: "First boil water, then add tea, then milk & sugar, then serve."
        },
        {
          id: "seq-2",
          question: "Find the largest number – arrange the steps:",
          items: ["Print the largest", "Read the numbers", "Compare each number", "Remember the biggest so far"],
          correctOrder: [1, 3, 2, 0],
          explanation: "Read → Remember current biggest → Compare → Print at the end."
        }
      ]
    },
    {
      id: "decompose",
      title: "Decomposition",
      levels: [
        {
          id: "dec-1",
          question: "Build a simple ATM. Break it into smaller parts.",
          options: [
            "One giant program that does everything",
            "Check PIN → Show menu → Withdraw / Deposit / Balance → Exit"
          ],
          correct: 1,
          explanation: "Big problems become easy when broken into small clear steps."
        }
      ]
    },
    {
      id: "ipo",
      title: "Input → Process → Output",
      levels: [
        {
          id: "ipo-1",
          question: "Calculate average marks of 5 students.\n\nWhat is the INPUT?",
          options: ["The average", "5 marks", "Division", "Print statement"],
          correct: 1,
          explanation: "Input = the 5 marks we receive."
        },
        {
          id: "ipo-2",
          question: "Same problem. What is the PROCESS?",
          options: ["Print the average", "Add the marks and divide by 5", "Ask for names", "Sort the marks"],
          correct: 1,
          explanation: "Process = Add all marks → Divide by 5."
        }
      ]
    },
    {
      id: "decision",
      title: "Decision Making",
      levels: [
        {
          id: "decm-1",
          question: "Age = 20, Has ID = Yes.\nCan this person enter the movie?",
          options: ["Yes", "No", "Maybe"],
          correct: 0,
          explanation: "Both conditions are true → Allow entry."
        },
        {
          id: "decm-2",
          question: "We need BOTH age ≥ 18 AND ID = Yes.\nWhat kind of decision is this?",
          options: ["Only one condition needed", "Both conditions must be true", "Any one condition is enough"],
          correct: 1,
          explanation: "This is an AND decision – both must be true."
        }
      ]
    },
    {
      id: "remember",
      title: "What do I need to remember?",
      levels: [
        {
          id: "rem-1",
          question: "Find the largest number in a list.\nWhile checking numbers one by one, what must your brain remember?",
          options: ["All numbers", "The largest number found so far", "How many numbers", "The first number only"],
          correct: 1,
          explanation: "You only need to keep the current champion (largest so far)."
        }
      ]
    }
  ]
};

// ============================================================
// PHASE 1 CONCEPTS - Every concept follows:
// Why → Mental Model → Play → Predict → Code → Break → Apply → Transfer
// ============================================================

const CONCEPTS = [
  {
    id: "variables",
    number: "01",
    title: "Variables – Magic Boxes",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 2",

    // ===== RICH CONTENT (Phase 1 upgrade) =====
    rich_explanation: `
A variable is like a magic box with a name on it.

You can put something inside the box (a number or some text).
Later you can open the box and use whatever is inside.

Why do we need it?
Because the computer forgets everything when the program ends — 
unless we store the information in a variable.

Real life example:
You want to remember a student’s age.
You create a box called "age" and put 12 inside it.
Now whenever you need the age, you just look inside the box.
    `,

    key_points: [
      "A variable has a name and a value",
      "You can change the value later",
      "The old value is replaced when you put a new one",
      "You must create the box before you use it"
    ],

    common_mistakes: [
      {
        wrong: "print(score)\nscore = 100",
        why: "You tried to open the box before creating it.",
        correct: "score = 100\nprint(score)"
      },
      {
        wrong: "1st_name = \"Ada\"",
        why: "Variable names cannot start with a number.",
        correct: "first_name = \"Ada\""
      }
    ],

    why: {
      problem: "Your program needs to remember a student’s age so it can use it later.",
      question: "Where can the computer keep that information?",
      options: [
        "It just knows magically",
        "In a labeled box that stores a value",
        "Only on the screen",
        "It cannot remember anything"
      ],
      correct: 1,
      insight: "A variable is a labeled box that holds one value so the computer can remember it."
    },

    mental_model: {
      title: "A variable is a labeled box",
      description: "Imagine a real box with a name written on it. Inside the box you put a value. Later you can open the box and use whatever is inside. When you put a new value, the old one disappears.",
      visual: "box"
    },

    playground: {
      type: "variable_box",
      initial: [
        { name: "age", value: 19 }
      ]
    },

    predict: [
      {
        question: "age = 19\nage = 20\nWhat is inside the box named age now?",
        options: ["19", "20", "Both 19 and 20", "Nothing"],
        correct: 1,
        explanation: "When you put a new value in the box, the old value is completely replaced."
      },
      {
        question: "x = 5\ny = x + 3\nprint(y)\nWhat is printed?",
        options: ["5", "3", "8", "Error"],
        correct: 2,
        explanation: "y gets the value of x (5) plus 3, so y becomes 8."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create a magic box",
          code: `age = 12
print(age)`
        },
        {
          title: "2. Change what is inside",
          code: `age = 12
print("First age:", age)
age = 13
print("New age:", age)`
        },
        {
          title: "3. Use the value in a calculation",
          code: `price = 50
quantity = 3
total = price * quantity
print("Total money:", total)`
        },
        {
          title: "4. Store text (string)",
          code: `name = "Ada"
message = "Hello, " + name + "!"
print(message)`
        },
        {
          title: "5. Multiple boxes together",
          code: `first_name = "Ada"
last_name = "Lovelace"
full_name = first_name + " " + last_name
print(full_name)`
        }
      ]
    },

    break_it: {
      question: "This code has a problem. Can you find it?",
      broken_code: `print(score)
score = 100`,
      hint: "You are trying to open a box before you created it.",
      fix: `score = 100
print(score)`
    },

    apply: {
      problem: "Store your name and your age in two variables. Then make Python print a sentence like: Hello Ada, you are 12 years old.",
      starter: `name = "Ada"
age = 12

# Write a print statement that uses both variables`
    },

    try_it_exercises: [
      {
        id: "var-ex1",
        question: "Create a variable called favorite_color and put your favorite color inside it. Then print it.",
        difficulty: "easy"
      },
      {
        id: "var-ex2",
        question: "Store the price of a notebook (25) and the quantity (4). Calculate and print the total cost.",
        difficulty: "easy"
      },
      {
        id: "var-ex3",
        question: "Create two variables: city and country. Print a sentence that uses both.",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "A shop sells toys. One toy costs 150 rupees. A customer buys 3 toys. Use variables to calculate and print the total money the customer must pay."
    },

    boss_battle: {
      title: "Shopping Cart Boss",
      mission: "Build a tiny shopping calculator.",
      requirements: [
        "Store the price of a product",
        "Store how many items the customer wants",
        "Calculate the total",
        "Print a clear message showing the total"
      ],
      starter: `# Shopping Cart Boss
price = 
quantity = 

# Calculate total and print a nice message`
    },

    practice_book_topic: "variables_types"
  },


  {
    id: "strings",
    number: "02",
    title: "Strings – Character Strips",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 2",


    rich_explanation: `
A string is text — words, sentences, or even single letters.

In Python we put text inside quotes:
"Hello"   or   'Hello'

Every character in a string has a position (index) starting from 0.
So in the word "PYTHON":
P is at position 0
Y is at position 1
T is at position 2
... and so on.

You can make text look pretty (title case, upper case) 
and you can join two strings together.
    `,

    key_points: [
      "Strings are written inside quotes (\" \" or ' ')",
      "Every character has an index starting from 0",
      "You can change the look of text with .title(), .upper(), .lower()",
      "You can join strings with +"
    ],

    common_mistakes: [
      {
        wrong: "message = Hello",
        why: "Text must be inside quotes.",
        correct: "message = \"Hello\""
      },
      {
        wrong: "print(name[10])  # when name is short",
        why: "You asked for a position that does not exist.",
        correct: "Always check the length of the string first."
      }
    ],

    why: {
      problem: "You want the computer to store and work with words and sentences.",
      question: "How can the computer hold a piece of text?",
      options: [
        "Only numbers are allowed",
        "As a strip of characters (letters, spaces, symbols)",
        "It cannot store words",
        "Only one letter at a time"
      ],
      correct: 1,
      insight: "A string is a strip of characters. Each character has a position starting from 0."
    },

    mental_model: {
      title: "A string is a strip of characters",
      description: "Think of the word PYTHON as a row of boxes, each holding one letter, with numbers underneath (0, 1, 2...). You can ask for any letter by its number.",
      visual: "string_strip"
    },

    playground: {
      type: "string_strip",
      initial: "PYTHON"
    },

    predict: [
      {
        question: "name = \"PYTHON\"\nWhat is name[2]?",
        options: ["P", "Y", "T", "H"],
        correct: 2,
        explanation: "Positions start at 0: P=0, Y=1, T=2."
      },
      {
        question: "text = \"hello\"\nprint(text.title())\nWhat is printed?",
        options: ["hello", "HELLO", "Hello", "Error"],
        correct: 2,
        explanation: ".title() makes the first letter of each word capital."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create a string",
          code: `name = "Ada"
print(name)`
        },
        {
          title: "2. Make it pretty",
          code: `name = "ada lovelace"
print(name.title())
print(name.upper())
print(name.lower())`
        },
        {
          title: "3. Join two strings",
          code: `first = "Ada"
last = "Lovelace"
full = first + " " + last
print(full)`
        },
        {
          title: "4. Get one character",
          code: `language = "Python"
print(language[0])   # first letter
print(language[1])   # second letter`
        },
        {
          title: "5. Famous quote example",
          code: `quote = "The only way to do great work is to love what you do."
author = "Steve Jobs"
print(quote)
print("- " + author)`
        },
        {
          title: "6. String slices (Py4E style)",
          code: `# Jupyter-friendly: run each cell idea separately
fruit = "banana"
print(fruit[0:3])    # ban
print(fruit[3:])     # ana
print(fruit[:3])     # ban
print(fruit[:])      # banana
print(fruit[-3:])    # ana`
        },
        {
          title: "7. Loop and count letters",
          code: `word = "banana"
count = 0
for letter in word:
    if letter == "a":
        count = count + 1
print("a appears", count, "times")`
        },
        {
          title: "8. in operator + methods",
          code: `fruit = "banana"
print("n" in fruit)
print(fruit.find("na"))
print(fruit.upper())
print(fruit.replace("a", "A"))
print(len(fruit))`
        },
        {
          title: "9. f-string + parse idea",
          code: `data = "From stephen.marquard@uct.ac.za Sat"
# find domain after @
at = data.find("@")
space = data.find(" ", at)
host = data[at+1:space]
print(host)
print(f"Host is {host}")`
        }
      ]
    },

    break_it: {
      question: "Fix this:",
      broken_code: `message = Hello
print(message)`,
      hint: "Text needs quotes around it.",
      fix: `message = "Hello"
print(message)`
    },



    apply: {
      problem: "Store a famous quote and the author’s name. Print them nicely so it looks like a real quote.",
      starter: `quote = "The only way to do great work is to love what you do."
author = "Steve Jobs"

# Print the quote and the author beautifully`
    },

    try_it_exercises: [
      {
        id: "str-ex1",
        question: "Store your full name and print it in title case.",
        difficulty: "easy"
      },
      {
        id: "str-ex2",
        question: "Create a greeting that joins \"Hello\" with your name.",
        difficulty: "easy"
      }
    ],

    transfer: {
      problem: "You have a full name like \"Ada Lovelace\". Print only the first name and only the last name using indexes or methods."
    },

    boss_battle: {
      title: "Quote Maker Boss",
      mission: "Create a program that stores a quote and its author, then prints it in a nice format.",
      requirements: [
        "Store the quote in a variable",
        "Store the author in a variable",
        "Print the quote",
        "Print the author with a dash in front"
      ]
    }
  },

  {
    id: "lists",
    number: "03",
    title: "Lists – Interactive Containers",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 3",

    rich_explanation: `
A list is a container that can hold many values in a row.

Example:
marks = [78, 85, 92, 67, 88]

Each value has a position (index) starting from 0.
marks[0] is 78
marks[1] is 85
marks[2] is 92

You can:
- Look at any item
- Change an item
- Add a new item at the end
- Remove an item
- Count how many items are inside

Lists are one of the most useful tools in Python.
    `,

    key_points: [
      "A list holds many values in order",
      "Indexes start from 0",
      "You can change, add, and remove items",
      "len(list) tells you how many items are inside"
    ],

    common_mistakes: [
      {
        wrong: "print(colors[3])  # when list has only 3 items",
        why: "There is no item at position 3 (positions are 0,1,2).",
        correct: "Always remember indexes start at 0 and end at length-1."
      },
      {
        wrong: "animals = (\"dog\", \"cat\")  # this is a tuple",
        why: "You used parentheses instead of square brackets.",
        correct: "animals = [\"dog\", \"cat\"]"
      }
    ],

    why: {
      problem: "You need to store the marks of 50 students.",
      question: "What is the best way?",
      options: [
        "Create 50 different variables",
        "Use one container that can hold many values in order",
        "Write them on paper only",
        "Store only the highest mark"
      ],
      correct: 1,
      insight: "A list is an ordered container. Every item has a position (index) starting from 0."
    },

    mental_model: {
      title: "A list is an ordered container",
      description: "Imagine a long tray with numbered slots. You can put values in the slots, add more, remove some, or change them. The numbers under the slots start from 0.",
      visual: "list_container"
    },


    playground: {
      type: "list_container",
      initial: [10, 20, 30]
    },

    predict: [
      {
        question: "numbers = [10, 20, 30]\nWhat is numbers[1]?",
        options: ["10", "20", "30", "Error"],
        correct: 1,
        explanation: "Index 0 is 10, index 1 is 20."
      },
      {
        question: "fruits = [\"apple\", \"banana\"]\nfruits.append(\"mango\")\nprint(len(fruits))\nWhat is printed?",
        options: ["2", "3", "4", "Error"],
        correct: 1,
        explanation: "append adds one more item, so the list now has 3 items."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create a list",
          code: `toys = ["ball", "car", "doll"]
print(toys)
print("First toy:", toys[0])
print("Second toy:", toys[1])`
        },
        {
          title: "2. Add and change items",
          code: `toys = ["ball", "car"]
toys.append("robot")      # add at the end
toys[0] = "bike"          # change first item
print(toys)`
        },
        {
          title: "3. Remove items",
          code: `guests = ["Ada", "Alan", "Grace", "Linus"]
print("Original:", guests)
guests.remove("Alan")     # remove by value
print("After remove:", guests)
popped = guests.pop()     # remove last item
print("Removed:", popped)
print("Left:", guests)`
        },
        {
          title: "4. Sort and count",
          code: `scores = [88, 72, 95, 60, 81]
print("How many:", len(scores))
scores.sort()
print("Sorted:", scores)
print("Highest:", scores[-1])   # last item after sorting`
        },
        {
          title: "5. Loop through a list",
          code: `friends = ["Ada", "Alan", "Grace"]
for friend in friends:
    print("Hello,", friend + "!")`
        },
        {
          title: "6. List slices (Py4E)",
          code: `t = [9, 41, 12, 3, 74, 15]
print(t[1:3])     # [41, 12]
print(t[:4])      # first four
print(t[3:])      # from index 3 to end
print(t[:])       # full copy`
        },
        {
          title: "7. List methods",
          code: `nums = [1, 2, 3]
nums.append(4)
nums.extend([5, 6])
nums.sort()
print(nums)
print(sum(nums), max(nums), min(nums), len(nums))`
        },
        {
          title: "8. String split → list (Jupyter style)",
          code: `line = "From stephen.marquard@uct.ac.za"
words = line.split()
print(words)
print(words[1])
email = words[1]
pieces = email.split("@")
print(pieces[1])  # domain`
        },
        {
          title: "9. Counting loop pattern",
          code: `# Py4E loop idiom – count / sum / average
data = [3, 41, 12, 9, 74, 15]
total = 0
count = 0
for value in data:
    total = total + value
    count = count + 1
print("Count:", count)
print("Total:", total)
print("Average:", total / count)`
        }
      ]
    },

    break_it: {
      question: "This will crash. Why?",
      broken_code: `colors = ["red", "blue"]
print(colors[2])`,
      hint: "There is no item at position 2 (only positions 0 and 1 exist).",
      fix: `colors = ["red", "blue"]
print(colors[1])`
    },

    apply: {
      problem: "Make a guest list for a party. Add at least 3 friends, then remove one friend, then print the final list.",
      starter: `guests = []

# 1. Add friends using append
# 2. Remove one friend
# 3. Print the final list`
    },


    try_it_exercises: [
      {
        id: "list-ex1",
        question: "Create a list of 4 favorite foods. Print the first and the last food.",
        difficulty: "easy"
      },
      {
        id: "list-ex2",
        question: "Create a list of numbers. Add one more number, then print how many numbers are in the list.",
        difficulty: "easy"
      },
      {
        id: "list-ex3",
        question: "Create a list of cities. Sort them and print the sorted list.",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "You have the marks of 6 students: [78, 85, 92, 67, 88, 74]. Find and print the highest mark and the average mark."
    },

    boss_battle: {
      title: "Marks Analyzer Boss",
      mission: "Build a small program that works with student marks.",
      requirements: [
        "Store at least 5 marks in a list",
        "Print the highest mark",
        "Print the lowest mark",
        "Print the average"
      ],
      starter: `# Marks Analyzer Boss
marks = [78, 85, 92, 67, 88]

# Write your code here`
    }
  },


  {
    id: "conditionals",
    number: "04",
    title: "If / Else – Decision Trees",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 5 + Practice Book Unit 2",

    rich_explanation: `
Programs need to make decisions, just like humans.

Example:
If age is 18 or more → Allow entry
Otherwise → Reject

In Python we write this with if / else.

We can also check multiple conditions using elif.

Real life:
- Pass or Fail
- Hot, Normal or Cold
- Gold, Silver or Bronze grade
    `,

    key_points: [
      "if checks a condition",
      "else runs when the condition is False",
      "elif means \"else if\" – for more than two choices",
      "Every if / elif / else block must end with a colon :",
      "Indentation (spaces) is very important"
    ],

    common_mistakes: [
      {
        wrong: "if marks >= 40\nprint(\"Pass\")",
        why: "Missing colon : after the condition",
        correct: "if marks >= 40:\n    print(\"Pass\")"
      },
      {
        wrong: "if a = 5:",
        why: "Single = is assignment. Use == for comparison",
        correct: "if a == 5:"
      }
    ],

    why: {
      problem: "A person wants to enter a movie theatre. Only people 18 or older are allowed.",
      question: "What kind of thinking does the ticket person do?",
      options: [
        "Always say yes",
        "Look at age and decide yes or no",
        "Count how many people",
        "Ask for favorite color"
      ],
      correct: 1,
      insight: "Programs need to make decisions just like humans do."
    },

    mental_model: {
      title: "A decision tree",
      description: "Start with a question. If the answer is YES go one way. If NO go the other way. You can add more branches with elif.",
      visual: "decision_tree"
    },

    playground: {
      type: "decision_tree",
      condition: "age >= 18",
      true_path: "Allow entry",
      false_path: "Reject"
    },

    predict: [
      {
        question: "age = 15\nif age >= 18:\n    print(\"Allow\")\nelse:\n    print(\"Reject\")\nWhat is printed?",
        options: ["Allow", "Reject", "Nothing", "Error"],
        correct: 1,
        explanation: "15 is not >= 18, so the else path runs."
      },
      {
        question: "a = 3\nb = (a != 3)\nprint(b)",
        options: ["True", "False", "0", "3"],
        correct: 1,
        explanation: "a is 3, so a != 3 is False. (From Practice Book)"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple if-else",
          code: `age = 20
if age >= 18:
    print("You can enter")
else:
    print("Sorry, too young")`
        },
        {
          title: "2. Multiple choices with elif",
          code: `marks = 75
if marks >= 90:
    print("Gold")
elif marks >= 70:
    print("Silver")
else:
    print("Bronze")`
        },
        {
          title: "3. Check two conditions",
          code: `age = 20
has_id = True
if age >= 18 and has_id:
    print("Entry allowed")
else:
    print("Entry denied")`
        },
        {
          title: "4. Temperature check",
          code: `temp = 22
if temp >= 30:
    print("Hot")
elif temp <= 15:
    print("Cold")
else:
    print("Normal")`
        }
      ]
    },

    break_it: {
      question: "Fix the decision:",
      broken_code: `marks = 35
if marks >= 40
    print("Pass")
else:
    print("Fail")`,
      hint: "A colon : is missing.",
      fix: `marks = 35
if marks >= 40:
    print("Pass")
else:
    print("Fail")`
    },

    apply: {
      problem: "Check if a temperature is hot (>= 30), cold (<= 15), or normal. Print the result.",
      starter: `temp = 22
# write your if-elif-else decision`
    },

    try_it_exercises: [
      {
        id: "if-ex1",
        question: "Write a program that checks if a number is positive, negative, or zero.",
        difficulty: "easy"
      },
      {
        id: "if-ex2",
        question: "Ask the user for marks and print Pass if marks >= 40, otherwise Fail.",
        difficulty: "easy"
      }
    ],

    transfer: {
      problem: "A game gives a score. Print Gold (90+), Silver (70-89), Bronze (below 70)."
    },

    boss_battle: {
      title: "Grade Calculator Boss",
      mission: "Build a grade calculator using if-elif-else.",
      requirements: [
        "Take marks as input (or store in a variable)",
        "90+ → A grade",
        "70-89 → B grade",
        "40-69 → C grade",
        "Below 40 → Fail"
      ],
      starter: `# Grade Calculator Boss
marks = 78

# Write your if-elif-else here`
    },

    // Link to Practice Book questions
    practice_book_topic: "conditionals"
  },


  {
    id: "for_loops",
    number: "05",
    title: "For Loops – Animated Repetition",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 4 + Practice Book Unit 2",

    rich_explanation: `
A loop means: do the same action again and again while something changes.

The most common loop in Python is the for loop with range().

range(1, 6) gives → 1, 2, 3, 4, 5
(It stops BEFORE the last number)

You can also loop through a list of items.

From the Practice Book you will see many questions about:
- How many times a loop runs
- What range() produces
- break and continue
    `,

    key_points: [
      "for i in range(start, stop): → stops BEFORE stop",
      "range(5) means 0,1,2,3,4",
      "You can loop through any list",
      "break stops the loop immediately",
      "continue skips the rest of the current round"
    ],

    common_mistakes: [
      {
        wrong: "for i in range(1, 5)\nprint(i)",
        why: "Missing colon :",
        correct: "for i in range(1, 5):\n    print(i)"
      },
      {
        wrong: "Thinking range(1,5) gives 1,2,3,4,5",
        why: "It stops before 5",
        correct: "range(1,5) gives 1,2,3,4"
      }
    ],

    why: {
      problem: "You need to print numbers from 1 to 100.",
      question: "What is the smart way?",
      options: [
        "Write print(1) print(2) ... print(100)",
        "Tell the computer to repeat a small action while counting",
        "Ask a friend to type them",
        "It is impossible"
      ],
      correct: 1,
      insight: "When you see repetition, you need a loop."
    },

    mental_model: {
      title: "A loop is repeated action while something changes",
      description: "Start → Do something → Change the counter → Do something again → ... → Stop when finished.",
      visual: "loop_animator"
    },

    playground: {
      type: "loop_animator",
      start: 1,
      end: 5
    },

    predict: [
      {
        question: "for i in range(1, 4):\n    print(i)\nWhat is printed?",
        options: ["1 2 3 4", "1 2 3", "0 1 2 3", "1 2"],
        correct: 1,
        explanation: "range(1, 4) gives 1, 2, 3. It stops before 4."
      },
      {
        question: "for i in range(0,2,-1):\n    print(\"Hello\")\nWhat is the output?",
        options: ["Hello", "Hello Hello", "No Output", "Error"],
        correct: 2,
        explanation: "This range is empty, so nothing is printed. (From Practice Book)"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple counter",
          code: `for i in range(1, 6):
    print(i)`
        },
        {
          title: "2. Loop through a list",
          code: `toys = ["ball", "car", "doll"]
for toy in toys:
    print("I like my", toy)`
        },
        {
          title: "3. Multiplication table",
          code: `n = 7
for i in range(1, 11):
    print(n, "x", i, "=", n*i)`
        },
        {
          title: "4. Sum of numbers",
          code: `total = 0
for i in range(1, 6):
    total = total + i
print("Sum =", total)`
        },
        {
          title: "5. Using break",
          code: `for i in range(1, 10):
    if i == 5:
        break
    print(i)
print("Loop stopped")`
        },
        {
          title: "6. Max / min loop (Py4E)",
          code: `# Find largest number without max()
numbers = [3, 41, 12, 9, 74, 15]
largest = None
for n in numbers:
    if largest is None or n > largest:
        largest = n
print("Largest:", largest)`
        },
        {
          title: "7. continue skips a round",
          code: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)
print("done")`
        }
      ]
    },

    break_it: {
      question: "This loop never stops. Why?",
      broken_code: `i = 1
while i < 5:
    print(i)`,
      hint: "i never changes, so the condition stays true forever.",
      fix: `i = 1
while i < 5:
    print(i)
    i = i + 1`
    },


    apply: {
      problem: "Print each name in a list of friends with a hello message.",
      starter: `friends = ["Ada", "Alan", "Grace"]
# write a loop that says hello to each friend`
    },

    try_it_exercises: [
      {
        id: "loop-ex1",
        question: "Print numbers from 1 to 10 using a for loop.",
        difficulty: "easy"
      },
      {
        id: "loop-ex2",
        question: "Print the multiplication table of 5.",
        difficulty: "easy"
      },
      {
        id: "loop-ex3",
        question: "Calculate the sum of numbers from 1 to 20.",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "You have prices of 8 products. Print only the ones that cost more than 500."
    },

    boss_battle: {
      title: "Multiplication Table Boss",
      mission: "Print the full multiplication table of any number from 1 to 10.",
      requirements: [
        "Use a for loop with range",
        "Print in the format: 7 x 3 = 21",
        "Show all lines from 1 to 10"
      ],
      starter: `# Multiplication Table Boss
n = 7
# Write your loop here`
    },

    practice_book_topic: "loops",
    adventure_link: "loops-adventure.html",
    adventure_title: "🌲 Forest of Loops – Full Adventure"
  },

  {
    id: "functions",
    number: "06",
    title: "Functions – Input Machines",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 8",

    rich_explanation: `
A function is a reusable machine.

You give it input → it does some work → it gives you output.

Why use functions?
- You write the logic only once
- You can use it many times
- Your code becomes cleaner and easier to understand

Example from real life:
A calculator machine.
You press numbers (input) → it calculates → it shows the answer (output).
    `,

    key_points: [
      "def is used to create a function",
      "Parameters are the inputs",
      "return gives the result back",
      "You can call the same function many times",
      "Functions help avoid repeating code"
    ],

    common_mistakes: [
      {
        wrong: "def add(a, b):\n    a + b\nprint(add(3,5))",
        why: "You forgot return. The function calculates but does not give the answer back.",
        correct: "def add(a, b):\n    return a + b"
      },
      {
        wrong: "def greet():\nprint(\"Hello\")",
        why: "Missing indentation and the function is not called.",
        correct: "def greet():\n    print(\"Hello\")\ngreet()"
      }
    ],

    why: {
      problem: "You need to calculate tax in 5 different places in your program.",
      question: "What is the best approach?",
      options: [
        "Copy the same calculation 5 times",
        "Create one reusable machine that does the calculation",
        "Calculate only once and ignore the rest",
        "Ask the user to calculate"
      ],
      correct: 1,
      insight: "A function is a reusable machine: Input → Process → Output."
    },

    mental_model: {
      title: "A function is a machine",
      description: "You put something in (input). The machine does work. Something comes out (output). You can use the same machine many times.",
      visual: "function_machine"
    },

    playground: {
      type: "function_machine",
      name: "double",
      process: "x * 2"
    },

    predict: [
      {
        question: "def double(x):\n    return x * 2\n\nprint(double(7))\nWhat is printed?",
        options: ["7", "14", "2", "Error"],
        correct: 1,
        explanation: "7 goes in → machine multiplies by 2 → 14 comes out."
      },
      {
        question: "def add(a, b):\n    return a + b\n\nprint(add(10, 5))\nWhat is printed?",
        options: ["10", "5", "15", "Error"],
        correct: 2,
        explanation: "10 and 5 go in → machine adds them → 15 comes out."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple greeting function",
          code: `def greet(name):
    print("Hello,", name)

greet("Ada")
greet("Little Coder")`
        },
        {
          title: "2. Function that returns a value",
          code: `def double(x):
    return x * 2

result = double(10)
print(result)`
        },
        {
          title: "3. Add two numbers",
          code: `def add(a, b):
    return a + b

print(add(15, 7))
print(add(100, 25))`
        },
        {
          title: "4. Area of rectangle",
          code: `def area(length, width):
    return length * width

print("Area =", area(10, 5))`
        },
        {
          title: "5. Check pass or fail",
          code: `def check_pass(marks):
    if marks >= 40:
        return "Pass"
    else:
        return "Fail"

print(check_pass(75))
print(check_pass(33))`
        }
      ]
    },

    break_it: {
      question: "Why does this not print anything useful?",
      broken_code: `def add(a, b):
    a + b

print(add(3, 5))`,
      hint: "The machine calculates but forgets to give the result back.",
      fix: `def add(a, b):
    return a + b

print(add(3, 5))`
    },

    apply: {
      problem: "Create a function that takes a name and returns a welcome message.",
      starter: `def welcome(name):
    # return a message like "Welcome, Ada!"
    
print(welcome("Friend"))`
    },

    try_it_exercises: [
      {
        id: "fn-ex1",
        question: "Write a function that takes a number and returns its square.",
        difficulty: "easy"
      },
      {
        id: "fn-ex2",
        question: "Write a function that takes price and quantity and returns total cost.",
        difficulty: "easy"
      }
    ],

    transfer: {
      problem: "Create a function that takes price and discount percent, and returns the final price after discount."
    },

    boss_battle: {
      title: "Mini Calculator Boss",
      mission: "Build a calculator using functions.",
      requirements: [
        "Create functions for add, subtract, multiply, divide",
        "Call each function and print the results",
        "Use return properly"
      ],
      starter: `# Mini Calculator Boss
def add(a, b):
    # your code

def subtract(a, b):
    # your code

# Test your functions`
    }
  },


  // ============================================================
  // NEW CONCEPTS - Book B + simplified Book A
  // ============================================================

  {
    id: "dictionaries",
    number: "07",
    title: "Dictionaries – Name Tag Boxes",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 6",

    rich_explanation: `
A dictionary stores related information using key-value pairs.

Think of it like a real dictionary:
You look up a word (key) → you get the meaning (value).

Example:
student = {
    "name": "Ada",
    "age": 12,
    "marks": 95
}

You can get any value by its key:
student["name"] → "Ada"
student["marks"] → 95

Dictionaries are perfect when data has labels.
    `,

    key_points: [
      "A dictionary uses { key: value }",
      "Keys are usually strings",
      "You access values using the key",
      "You can add, change, and remove key-value pairs",
      "Very useful for real-world data (student, product, alien, etc.)"
    ],

    common_mistakes: [
      {
        wrong: "print(student[name])",
        why: "Missing quotes around the key.",
        correct: "print(student[\"name\"])"
      },
      {
        wrong: "print(student[\"age\"])  # when age key does not exist",
        why: "KeyError – the key is not in the dictionary.",
        correct: "Always make sure the key exists, or use .get()"
      }
    ],

    why: {
      problem: "You want to store information about one student: name, age, and marks together.",
      question: "What is a good way to keep related information connected?",
      options: [
        "Use three separate variables that have no connection",
        "Use a box of name-tags where each tag points to a value",
        "Only store the name",
        "Write everything in one long string"
      ],
      correct: 1,
      insight: "A dictionary connects a KEY (the name tag) to a VALUE (the information)."
    },

    mental_model: {
      title: "A dictionary is a box of name tags",
      description: "Each name tag (key) points to one piece of information (value). You look up the tag and instantly get the value.",
      visual: "dictionary_table"
    },

    playground: {
      type: "dictionary_table",
      initial: {
        name: "Rahul",
        age: 19,
        marks: 82
      }
    },

    predict: [
      {
        question: "student = {\"name\": \"Ada\", \"age\": 12}\nWhat is student[\"name\"]?",
        options: ["Ada", "12", "name", "Error"],
        correct: 0,
        explanation: "You look up the key \"name\" and get the value \"Ada\"."
      },
      {
        question: "alien = {\"color\": \"green\", \"points\": 5}\nalien[\"points\"] = 10\nprint(alien[\"points\"])",
        options: ["5", "10", "green", "Error"],
        correct: 1,
        explanation: "We changed the value of points from 5 to 10."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create a dictionary",
          code: `student = {
    "name": "Ada",
    "age": 12,
    "marks": 95
}
print(student["name"])
print(student["marks"])`
        },
        {
          title: "2. Add and change values",
          code: `alien = {"color": "green", "points": 5}
alien["color"] = "yellow"   # change
alien["speed"] = "fast"     # add new
print(alien)`
        },
        {
          title: "3. Loop through a dictionary",
          code: `student = {"name": "Ada", "age": 12, "marks": 95}
for key, value in student.items():
    print(key, "→", value)`
        },
        {
          title: "4. Check if key exists",
          code: `student = {"name": "Ada", "age": 12}
if "marks" in student:
    print("Marks:", student["marks"])
else:
    print("Marks not found")`
        }
      ]
    },

    break_it: {

      question: "This will crash. Why?",
      broken_code: `person = {"name": "Sam"}
print(person["age"])`,
      hint: "There is no key called \"age\" yet.",
      fix: `person = {"name": "Sam", "age": 10}
print(person["age"])`
    },

    apply: {
      problem: "Make a dictionary about your favorite book or movie (title, year, rating). Print each piece of information.",
      starter: `favorite = {
    # your keys and values
}
# print the information`
    },

    try_it_exercises: [
      {
        id: "dict-ex1",
        question: "Create a dictionary for a phone (brand, price, color) and print the brand.",
        difficulty: "easy"
      },
      {
        id: "dict-ex2",
        question: "Create a student dictionary and add a new key 'city'.",
        difficulty: "easy"
      }
    ],

    transfer: {
      problem: "You have information about 3 products (name + price). Store them in dictionaries and print only the products that cost more than 100."
    },

    boss_battle: {
      title: "Student Record Boss",
      mission: "Create and manage a student record using a dictionary.",
      requirements: [
        "Store name, age, marks, and city",
        "Print all information",
        "Change the marks",
        "Add a new key called 'grade'"
      ],
      starter: `# Student Record Boss
student = {
    "name": "Ada",
    "age": 12,
    "marks": 88
}
# Complete the mission`
    }
  },

  {
    id: "while_input",
    number: "08",
    title: "While Loops + Talking to User",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 7 + Practice Book Unit 2",

    rich_explanation: `
A while loop keeps running as long as a condition is True.

It is perfect when you don’t know in advance how many times to repeat.

Example:
Keep asking the user for input until they type "quit".

Also very useful for:
- Number guessing games
- Menus
- Countdown
- Keep calculating until a condition is met

Important: You must change something inside the loop, 
otherwise it becomes an infinite loop.
    `,

    key_points: [
      "while condition: → runs while condition is True",
      "You must update the variable inside the loop",
      "input() is used to talk to the user",
      "break can stop the loop early",
      "Infinite loops happen when the condition never becomes False"
    ],

    common_mistakes: [
      {
        wrong: "x = 1\nwhile x < 5:\n    print(x)",
        why: "x never changes → infinite loop",
        correct: "x = 1\nwhile x < 5:\n    print(x)\n    x = x + 1"
      },
      {
        wrong: "while True:\n    print(\"Hello\")",
        why: "This runs forever unless you use break",
        correct: "while True:\n    msg = input()\n    if msg == \"quit\":\n        break"
      }
    ],

    why: {
      problem: "You want a program that keeps asking the user questions until the user says “quit”.",
      question: "What kind of loop do you need?",
      options: [
        "A loop that runs exactly 5 times",
        "A loop that keeps going while a condition is true",
        "No loop needed",
        "Only if statements"
      ],
      correct: 1,
      insight: "A while loop keeps repeating as long as the condition stays true. Perfect for “keep going until…”."
    },

    mental_model: {
      title: "While = Keep going until I say stop",
      description: "Check the condition → Do the action → Check again → … → When condition becomes false, stop.",
      visual: "while_loop"
    },

    playground: {
      type: "while_demo"
    },

    predict: [
      {
        question: "count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1\nWhat is printed?",
        options: ["1 2 3 4", "1 2 3", "1 2", "Nothing"],
        correct: 1,
        explanation: "It prints 1, then 2, then 3. After that count becomes 4 and the condition is false."
      },
      {
        question: "i = 2\nwhile i > 0:\n    i = i - 1\nHow many times does the loop run?",
        options: ["1", "2", "3", "0"],
        correct: 1,
        explanation: "i=2 → run → i=1 → run → i=0 → stop. Runs 2 times. (From Practice Book)"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple while counter",
          code: `count = 1
while count <= 5:
    print("Count is", count)
    count = count + 1`
        },
        {
          title: "2. Countdown",
          code: `n = 5
while n > 0:
    print(n)
    n = n - 1
print("Go!")`
        },
        {
          title: "3. Talk until quit (concept)",
          code: `# In real Python you use input()
# Here is the idea:
message = "hello"
while message != "quit":
    print("You said:", message)
    message = "quit"   # simulate user typing quit
print("Bye!")`
        },
        {
          title: "4. Sum until 0",
          code: `total = 0
num = 1
while num <= 5:
    total = total + num
    num = num + 1
print("Sum =", total)`
        }
      ]
    },

    break_it: {
      question: "This loop never stops. Fix it!",
      broken_code: `x = 1
while x < 5:
    print(x)`,
      hint: "x never changes, so the condition is always true.",
      fix: `x = 1
while x < 5:
    print(x)
    x = x + 1`
    },

    apply: {
      problem: "Make a simple counter that prints numbers from 1 to 10 using a while loop.",
      starter: `count = 1
# write a while loop`
    },

    try_it_exercises: [
      {
        id: "while-ex1",
        question: "Print numbers from 10 down to 1 using a while loop.",
        difficulty: "easy"
      },
      {
        id: "while-ex2",
        question: "Keep adding numbers from 1 until the sum becomes greater than 20. Print the sum.",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "Create a tiny program that keeps doubling a number starting from 1 until it becomes greater than 100."
    },

    boss_battle: {
      title: "Guess the Number Boss",
      mission: "Build a number guessing logic using while.",
      requirements: [
        "Secret number is 7",
        "Keep looping until the guess is correct",
        "Print 'Too low', 'Too high', or 'Correct!'"
      ],
      starter: `# Guess the Number Boss
secret = 7
guess = 0
# Use a while loop`
    }
  },


  {
    id: "classes",
    number: "09",
    title: "Classes – Toy Factories",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 9",

    rich_explanation: `
A class is a blueprint (factory) for creating objects.

Example:
You want many dogs.
Instead of writing separate code for each dog,
you create one Dog class (factory).

Then you can make:
dog1 = Dog("Buddy")
dog2 = Dog("Lucy")

Each object has its own data (name) and can do actions (bark).

__init__ is a special method that runs when you create a new object.
self means “this particular object”.
    `,

    key_points: [
      "class creates a blueprint",
      "__init__ runs when you create an object",
      "self refers to the current object",
      "Methods are functions inside a class",
      "One class can create many objects"
    ],

    common_mistakes: [
      {
        wrong: "my_dog = Dog\nmy_dog.bark()",
        why: "Missing parentheses. You must call the class to create an object.",
        correct: "my_dog = Dog(\"Buddy\")\nmy_dog.bark()"
      },
      {
        wrong: "def bark():\n    print(self.name)",
        why: "Methods inside a class need self as the first parameter.",
        correct: "def bark(self):\n    print(self.name)"
      }
    ],

    why: {
      problem: "You want to create many similar dogs. Each dog has a name and can bark.",
      question: "What is a smart way to do this?",
      options: [
        "Write completely separate code for every dog",
        "Build a factory (class) that can produce many dog objects",
        "Use only lists",
        "It is impossible"
      ],
      correct: 1,
      insight: "A class is a factory. It defines what every object of that type can remember and can do."
    },

    mental_model: {
      title: "A class is a factory that makes objects",
      description: "The factory (class) has a blueprint. Every toy (object) made from it has its own data and can do the same actions.",
      visual: "class_factory"
    },

    playground: {
      type: "class_demo"
    },

    predict: [
      {
        question: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(self.name + \" says woof!\")\n\nmy_dog = Dog(\"Buddy\")\nmy_dog.bark()\nWhat is printed?",
        options: ["Buddy says woof!", "Dog says woof!", "Error", "Nothing"],
        correct: 0,
        explanation: "We created a Dog object named Buddy and asked it to bark."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple Dog class",
          code: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name + " says woof!")

dog1 = Dog("Buddy")
dog2 = Dog("Lucy")
dog1.bark()
dog2.bark()`
        },
        {
          title: "2. Car class",
          code: `class Car:
    def __init__(self, color):
        self.color = color

    def drive(self):
        print("The", self.color, "car is driving!")

my_car = Car("red")
my_car.drive()`
        },
        {
          title: "3. Student class with method",
          code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def result(self):
        if self.marks >= 40:
            return "Pass"
        else:
            return "Fail"

s1 = Student("Ada", 85)
print(s1.name, "→", s1.result())`
        }
      ]
    },

    break_it: {
      question: "Why does this fail?",
      broken_code: `class Cat:
    def meow(self):
        print("Meow!")

my_cat = Cat
my_cat.meow()`,
      hint: "You forgot the parentheses when creating the object.",
      fix: `class Cat:
    def meow(self):
        print("Meow!")

my_cat = Cat()
my_cat.meow()`
    },

    apply: {
      problem: "Create a simple Car class. Each car has a color and can “drive” (print a message).",
      starter: `class Car:
    # your code

my_car = Car("red")
my_car.drive()`
    },

    try_it_exercises: [
      {
        id: "class-ex1",
        question: "Create a Cat class with a name and a meow method.",
        difficulty: "easy"
      },
      {
        id: "class-ex2",
        question: "Create a BankAccount class with balance and a deposit method.",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "Create a Student class that stores name and marks, and has a method that says if the student passed (marks >= 40)."
    },

    boss_battle: {
      title: "Pet Factory Boss",
      mission: "Create a Pet class and make two different pets.",
      requirements: [
        "Class should store name and animal type",
        "Method speak() that prints a message",
        "Create at least 2 pet objects and call speak()"
      ],
      starter: `# Pet Factory Boss
class Pet:
    # your code

# Create pets and make them speak`
    }
  },


  {
    id: "files",
    number: "10",
    title: "Files – Saving Forever",
    phase: 1,
    source: "Book B – Python Crash Course, Chapter 10 + Book A ideas",

    rich_explanation: `
When your program stops, everything in variables disappears.

To keep data forever, we use files.

A file is like a notebook on the computer:
- Open it
- Write something
- Close it
- Later open it again and read

Python modes:
"w" → write (creates or overwrites)
"r" → read
"a" → append (add at the end)

Using "with open(...)" is the safest way because it closes the file automatically.
    `,

    key_points: [
      "Files save data even after the program ends",
      "\"w\" = write, \"r\" = read, \"a\" = append",
      "with open() is the recommended way",
      "Always handle the case when a file does not exist",
      "This is the beginning of real programs that remember data"
    ],

    common_mistakes: [
      {
        wrong: "f = open(\"data.txt\")\nprint(f.read())",
        why: "If the file does not exist → crash. Also you should close the file.",
        correct: "with open(\"data.txt\") as f:\n    print(f.read())"
      },
      {
        wrong: "open(\"note.txt\", \"w\")\nf.write(\"Hello\")",
        why: "You forgot to store the file object and use it properly.",
        correct: "with open(\"note.txt\", \"w\") as f:\n    f.write(\"Hello\")"
      }
    ],

    why: {
      problem: "When your program stops, everything in memory disappears. How can you keep data for next time?",
      question: "What can you use?",
      options: [
        "Only variables",
        "Write the data into a file on the computer",
        "Print it on the screen only",
        "It is impossible to save"
      ],
      correct: 1,
      insight: "Files let your program save information so it is still there after the program closes."
    },

    mental_model: {
      title: "A file is a notebook on the computer",
      description: "You can open the notebook, write something, close it, and later open it again to read what you wrote.",
      visual: "file_notebook"
    },

    playground: {
      type: "file_demo"
    },

    predict: [
      {
        question: "What does this do?\nwith open(\"note.txt\", \"w\") as f:\n    f.write(\"Hello\")",
        options: [
          "Prints Hello",
          "Creates or overwrites a file called note.txt with the text Hello",
          "Deletes the file",
          "Nothing"
        ],
        correct: 1,
        explanation: "\"w\" means write mode. It saves the text into the file."
      }
    ],

    code: {
      examples: [
        {
          title: "1. Write to a file",
          code: `with open("my_note.txt", "w") as f:
    f.write("Hello from Python!")
print("File saved!")`
        },
        {
          title: "2. Read from a file",
          code: `with open("my_note.txt", "r") as f:
    content = f.read()
print(content)`
        },
        {
          title: "3. Append to a file",
          code: `with open("my_note.txt", "a") as f:
    f.write("\\nNew line added")
print("Appended!")`
        },
        {
          title: "4. Safe reading",
          code: `try:
    with open("data.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("File not found!")`
        }
      ]
    },

    break_it: {
      question: "This will fail if the file does not exist. How can we make it safer?",
      broken_code: `f = open("missing.txt")
print(f.read())`,
      hint: "Use try/except or check if the file exists first.",
      fix: `try:
    with open("missing.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("File not found!")`
    },


    apply: {
      problem: "Write three lines of your favorite quote into a file, then read the file and print it.",
      starter: `# write to file
# then read it back`
    },

    try_it_exercises: [
      {
        id: "file-ex1",
        question: "Create a file called hello.txt and write \"Hello World\" into it.",
        difficulty: "easy"
      },
      {
        id: "file-ex2",
        question: "Read a file and print how many characters it has (use len).",
        difficulty: "medium"
      }
    ],

    transfer: {
      problem: "Make a tiny diary program that asks the user for a note and appends it to a file called diary.txt."
    },

    boss_battle: {
      title: "Note Saver Boss",
      mission: "Create a small note-saving program.",
      requirements: [
        "Write a note into a file",
        "Read the file back",
        "Print the content",
        "Handle the case if file is missing"
      ],
      starter: `# Note Saver Boss
# Write, read, and safely handle files`
    }
  },

  // ============================================================
  // EXTRA PHASE 1 TOPICS (W3Schools-level coverage)
  // Sources: Python Crash Course + standard beginner syllabus
  // ============================================================

  {
    id: "operators",
    number: "11",
    title: "Operators – Math & Logic Tools",
    phase: 1,
    source: "Book B + W3Schools-style Operators + Practice Book Unit 1",

    rich_explanation: `
Operators are symbols that tell Python to do something with values.

Arithmetic:
+  add
-  subtract
*  multiply
/  divide (gives float)
// floor divide (whole number)
%  remainder (modulo)
** power

Comparison (result is True or False):
== equal
!= not equal
>  <  >=  <=

Logical:
and  – both must be True
or   – at least one True
not  – reverse True/False

Assignment:
=   put value in box
+=  add and store
-=  subtract and store
    `,

    key_points: [
      "/** is power, // is floor division, % is remainder",
      "== compares, = assigns",
      "and / or / not combine True-False values",
      "Operator precedence: ** then * / // % then + -",
      "Practice Book loves precedence questions"
    ],

    common_mistakes: [
      {
        wrong: "if a = 5:",
        why: "Single = assigns. Use == to compare.",
        correct: "if a == 5:"
      },
      {
        wrong: "Thinking 3*1**3 is 27",
        why: "** happens before *. 1**3=1, then 3*1=3",
        correct: "3 * (1**3) = 3"
      }
    ],

    why: {
      problem: "You need the computer to calculate, compare, and decide.",
      question: "What tools does Python give you for that?",
      options: ["Only print", "Operators for math, comparison, and logic", "Only loops", "Nothing"],
      correct: 1,
      insight: "Operators are the basic tools for calculation and decisions."
    },

    mental_model: {
      title: "Operators are tools",
      description: "Arithmetic tools change numbers. Comparison tools answer yes/no. Logic tools combine yes/no answers.",
      visual: "box"
    },

    playground: { type: "variable_box", initial: [{ name: "x", value: 10 }] },

    predict: [
      {
        question: "print(34 % 3)",
        options: ["7", "1", "0", "5"],
        correct: 1,
        explanation: "% gives remainder. 34 = 11*3 + 1."
      },
      {
        question: "print(3 * 1 ** 3)",
        options: ["1", "3", "9", "27"],
        correct: 1,
        explanation: "** first → 1, then 3*1 = 3"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Arithmetic",
          code: `a = 10
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
print(a ** b)`
        },
        {
          title: "2. Comparison",
          code: `x = 5
print(x == 5)
print(x != 3)
print(x > 2)
print(x <= 5)`
        },
        {
          title: "3. Logical",
          code: `age = 20
has_id = True
print(age >= 18 and has_id)
print(age < 18 or has_id)
print(not has_id)`
        },
        {
          title: "4. Assignment shortcuts",
          code: `n = 10
n += 5
print(n)
n *= 2
print(n)`
        },
        {
          title: "5. Precedence practice",
          code: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(2 ** 3 ** 2)
print((2 ** 3) ** 2)`
        }
      ]
    },

    break_it: {
      question: "Fix comparison:",
      broken_code: `a = 5
if a = 5:
    print("yes")`,
      hint: "Use == for comparison",
      fix: `a = 5
if a == 5:
    print("yes")`
    },

    apply: {
      problem: "Calculate (a+b)*c and also a**b using variables a=2, b=3, c=4.",
      starter: `a = 2
b = 3
c = 4
# print both results`
    },

    try_it_exercises: [
      { id: "op-ex1", question: "Print the remainder when 100 is divided by 7.", difficulty: "easy" },
      { id: "op-ex2", question: "Check if age 17 is allowed (age >= 18). Print True or False.", difficulty: "easy" }
    ],

    transfer: { problem: "Build expressions for: average of 3 numbers, and whether a number is even (n % 2 == 0)." },

    boss_battle: {
      title: "Operator Master Boss",
      mission: "Show arithmetic, comparison, and logical operators working.",
      requirements: ["Use +, *, //, %", "Use == or >", "Use and or or", "Print results"],
      starter: `# Operator Master Boss\n`
    },

    practice_book_topic: "operators"
  },

  {
    id: "tuples",
    number: "12",
    title: "Tuples – Locked Boxes",
    phase: 1,
    source: "Book B style + W3Schools Tuples",

    rich_explanation: `
A tuple is like a list, but locked — you cannot change it after creation.

Written with parentheses:
point = (10, 20)
colors = ("red", "green", "blue")

Why use tuples?
- Data that should not change (coordinates, RGB, days of week)
- Slightly faster than lists
- Can be used as dictionary keys

You can still:
- Read items by index
- Loop through them
- Unpack into variables

You cannot:
- append, remove, or change an item
    `,

    key_points: [
      "Tuples use ( ) and are immutable",
      "Indexing works like lists: t[0]",
      "Unpacking: x, y = (10, 20)",
      "Single item tuple needs comma: (5,)",
      "Use when data must not change"
    ],

    common_mistakes: [
      {
        wrong: "t = (5)\nprint(type(t))",
        why: "Without comma, (5) is just an int in parentheses.",
        correct: "t = (5,)\nprint(type(t))  # tuple"
      },
      {
        wrong: "t[0] = 99",
        why: "Tuples cannot be changed.",
        correct: "Create a new tuple instead"
      }
    ],

    why: {
      problem: "You have a GPS point (x, y) that should never be edited by accident.",
      question: "What structure is safest?",
      options: ["List", "Tuple (locked)", "Only a string", "Dictionary only"],
      correct: 1,
      insight: "Tuples protect data from accidental changes."
    },

    mental_model: {
      title: "A tuple is a locked list",
      description: "Same ordered slots as a list, but the lock is closed. You can look, not edit.",
      visual: "list_container"
    },

    playground: { type: "list_container", initial: [10, 20, 30] },

    predict: [
      {
        question: "t = (1, 2, 3)\nprint(t[1])",
        options: ["1", "2", "3", "Error"],
        correct: 1,
        explanation: "Index 1 is the second item → 2"
      },
      {
        question: "t = (1, 2, 3)\nt[0] = 9",
        options: ["Works", "TypeError", "Prints 9", "None"],
        correct: 1,
        explanation: "Tuples are immutable → TypeError"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create and read",
          code: `point = (10, 20)
print(point)
print(point[0])
print(point[1])`
        },
        {
          title: "2. Unpack",
          code: `rgb = (255, 128, 0)
r, g, b = rgb
print("R=", r, "G=", g, "B=", b)`
        },
        {
          title: "3. Loop",
          code: `days = ("Mon", "Tue", "Wed")
for d in days:
    print(d)`
        },
        {
          title: "4. Tuple vs list",
          code: `locked = (1, 2, 3)
flexible = [1, 2, 3]
flexible.append(4)
print(flexible)
# locked.append(4)  # would crash`
        }
      ]
    },

    break_it: {
      question: "Make this a real one-item tuple:",
      broken_code: `t = (5)
print(type(t))`,
      hint: "Need a comma",
      fix: `t = (5,)
print(type(t))`
    },

    apply: {
      problem: "Store a location as (lat, lon) tuple and print both values using unpacking.",
      starter: `location = (23.02, 72.57)
# unpack and print`
    },

    try_it_exercises: [
      { id: "tup-ex1", question: "Create a tuple of 3 favorite movies and print the second one.", difficulty: "easy" },
      { id: "tup-ex2", question: "Unpack (name, age) and print a sentence.", difficulty: "easy" }
    ],

    transfer: { problem: "Why would you store RGB color as a tuple instead of a list?" },

    boss_battle: {
      title: "Coordinate Boss",
      mission: "Use tuples for points and unpack them.",
      requirements: ["Create at least one tuple", "Use indexing or unpacking", "Print values"],
      starter: `# Coordinate Boss\npoint = (0, 0)\n`
    }
  },

  {
    id: "sets",
    number: "13",
    title: "Sets – Unique Bags",
    phase: 1,
    source: "W3Schools Sets + beginner syllabus",

    rich_explanation: `
A set stores unique items only. Duplicates are removed automatically.

Written with curly braces:
nums = {1, 2, 3, 2, 1}
# becomes {1, 2, 3}

Sets are unordered (no index like list[0]).

Useful for:
- Removing duplicates
- Fast "is this item present?"
- Math-like union / intersection

Methods:
add(), remove(), discard()
    `,

    key_points: [
      "Sets hold unique values only",
      "No indexing (unordered)",
      "Great for removing duplicates from a list",
      "in keyword works very well with sets",
      "Use {} for set, but empty set is set() not {}"
    ],

    common_mistakes: [
      {
        wrong: "s = {}\nprint(type(s))",
        why: "{} creates an empty dict, not set.",
        correct: "s = set()"
      }
    ],

    why: {
      problem: "You have a list of emails with duplicates and need only unique emails.",
      question: "What is a clean way?",
      options: ["Nested loops only", "Convert to a set", "Use 50 if statements", "Print only"],
      correct: 1,
      insight: "Sets automatically keep only unique items."
    },

    mental_model: {
      title: "A set is a bag of unique items",
      description: "Throw items in. Duplicates fall out. Order does not matter.",
      visual: "list_container"
    },

    playground: { type: "list_container", initial: [1, 2, 2, 3] },

    predict: [
      {
        question: "print(len({1, 2, 2, 3}))",
        options: ["4", "3", "2", "Error"],
        correct: 1,
        explanation: "Duplicates removed → 3 items"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Create set",
          code: `nums = {1, 2, 3, 2, 1}
print(nums)
print(len(nums))`
        },
        {
          title: "2. Remove duplicates from list",
          code: `data = [1, 2, 2, 3, 3, 3]
unique = list(set(data))
print(unique)`
        },
        {
          title: "3. Membership",
          code: `tags = {"python", "code", "fun"}
print("python" in tags)
print("java" in tags)`
        },
        {
          title: "4. Add and remove",
          code: `s = {1, 2}
s.add(3)
s.discard(2)
print(s)`
        }
      ]
    },

    break_it: {
      question: "Create an empty set correctly:",
      broken_code: `s = {}
s.add(1)`,
      hint: "{} is dict",
      fix: `s = set()
s.add(1)
print(s)`
    },

    apply: {
      problem: "From list [1,1,2,3,3,4] print only unique numbers using a set.",
      starter: `data = [1, 1, 2, 3, 3, 4]
# unique`
    },

    try_it_exercises: [
      { id: "set-ex1", question: "Create a set of vowels and check if 'e' is in it.", difficulty: "easy" }
    ],

    transfer: { problem: "You have two friend lists. Find names that appear in both (intersection idea)." },

    boss_battle: {
      title: "Unique List Boss",
      mission: "Remove duplicates using a set and print the result.",
      requirements: ["Start from a list with duplicates", "Use set", "Print unique items"],
      starter: `data = ["a", "b", "a", "c", "b"]\n`
    }
  },

  {
    id: "fstrings",
    number: "14",
    title: "f-Strings – Pretty Text",
    phase: 1,
    source: "Book B string formatting + W3Schools String Formatting",

    rich_explanation: `
f-strings let you put variables inside text easily.

name = "Ada"
age = 12
print(f"Hello {name}, you are {age} years old")

The f before the quote means: fill in the { } with real values.

You can also put expressions:
print(f"Next year age will be {age + 1}")

This is clearer than: "Hello " + name + "..."
    `,

    key_points: [
      "Start string with f or F",
      "Put variables inside { }",
      "Can put small expressions inside { }",
      "Preferred modern way to format strings",
      "Works with numbers, strings, calculations"
    ],

    common_mistakes: [
      {
        wrong: "print(f\"Hello {name}\")  # when name not defined",
        why: "Variable must exist first",
        correct: "name = \"Ada\"\nprint(f\"Hello {name}\")"
      }
    ],

    why: {
      problem: "You need to print many messages mixing text and variables cleanly.",
      question: "Best beginner-friendly way?",
      options: ["Only + forever", "f-strings", "Cannot mix", "Only commas in print"],
      correct: 1,
      insight: "f-strings make mixed text clear and short."
    },

    mental_model: {
      title: "f-string is a template with holes",
      description: "Write text with {holes}. Python fills holes with values.",
      visual: "string_strip"
    },

    playground: { type: "string_strip", initial: "Hello" },

    predict: [
      {
        question: "n = 5\nprint(f\"n is {n}\")",
        options: ["n is {n}", "n is 5", "Error", "n is n"],
        correct: 1,
        explanation: "f-string replaces {n} with 5"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Basic f-string",
          code: `name = "Ada"
age = 12
print(f"Hello {name}, you are {age}")`
        },
        {
          title: "2. Expression inside",
          code: `price = 50
qty = 3
print(f"Total = {price * qty}")`
        },
        {
          title: "3. Multiple values",
          code: `city = "Ahmedabad"
temp = 32
print(f"Weather in {city}: {temp}°C")`
        },
        {
          title: "4. Compared to +",
          code: `name = "Ada"
print("Hello, " + name + "!")
print(f"Hello, {name}!")`
        }
      ]
    },

    break_it: {
      question: "Make this an f-string:",
      broken_code: `name = "Sam"
print("Hi {name}")`,
      hint: "Add f before the quote",
      fix: `name = "Sam"
print(f"Hi {name}")`
    },

    apply: {
      problem: "Print: Product X costs Y rupees (use variables + f-string).",
      starter: `product = "Notebook"
price = 45
# f-string print`
    },

    try_it_exercises: [
      { id: "fs-ex1", question: "Print your name and city using one f-string.", difficulty: "easy" }
    ],

    transfer: { problem: "Create a report line: Student NAME scored MARKS/100." },

    boss_battle: {
      title: "Report Card Boss",
      mission: "Print a clean report line using f-strings.",
      requirements: ["At least 2 variables", "One f-string print", "Readable sentence"],
      starter: `name = "Ada"\nmarks = 92\n`
    }
  },

  {
    id: "exceptions",
    number: "15",
    title: "Try / Except – Catching Errors",
    phase: 1,
    source: "Book B Ch 10 + W3Schools Try Except",

    rich_explanation: `
Sometimes code crashes (division by zero, missing file, bad input).

try/except lets you catch the error and handle it calmly.

try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

Flow:
1. Try the risky code
2. If error matches, run except block
3. Program continues instead of dying

Common errors:
ZeroDivisionError, ValueError, FileNotFoundError, TypeError, NameError
    `,

    key_points: [
      "try = attempt risky code",
      "except = what to do if it fails",
      "Prevents full program crash",
      "Catch specific errors when possible",
      "Very important for input and files"
    ],

    common_mistakes: [
      {
        wrong: "except:  # bare except",
        why: "Catches everything and can hide real bugs",
        correct: "except ValueError:  # specific"
      }
    ],

    why: {
      problem: "User types text when your program expects a number and everything crashes.",
      question: "How do you handle this safely?",
      options: ["Ignore", "try/except around conversion", "Never take input", "Only use strings"],
      correct: 1,
      insight: "try/except protects programs from expected mistakes."
    },

    mental_model: {
      title: "Safety net under risky code",
      description: "Walk the tightrope in try. If you fall, except catches you.",
      visual: "decision_tree"
    },

    playground: { type: "decision_tree", condition: "error?", true_path: "Handle", false_path: "Continue" },

    predict: [
      {
        question: "try:\n  print(10/0)\nexcept ZeroDivisionError:\n  print(\"no\")",
        options: ["Crash", "no", "0", "Error text only"],
        correct: 1,
        explanation: "except catches the error and prints no"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Division guard",
          code: `try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero")`
        },
        {
          title: "2. Safe number input idea",
          code: `text = "12"
try:
    n = int(text)
    print(n * 2)
except ValueError:
    print("Please enter a number")`
        },
        {
          title: "3. Missing file",
          code: `try:
    with open("no_file.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("File not found")`
        },
        {
          title: "4. Multiple cases",
          code: `try:
    x = int("abc")
except ValueError:
    print("Value problem")
except TypeError:
    print("Type problem")`
        }
      ]
    },

    break_it: {
      question: "Protect this from crashing:",
      broken_code: `print(5 / 0)`,
      hint: "Wrap in try/except",
      fix: `try:
    print(5 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero")`
    },

    apply: {
      problem: "Convert string \"hello\" to int safely and print a friendly message on failure.",
      starter: `text = "hello"
# try/except`
    },

    try_it_exercises: [
      { id: "ex-ex1", question: "Catch ZeroDivisionError for 1/0 and print a message.", difficulty: "easy" },
      { id: "ex-ex2", question: "Safely open a missing file and print 'missing'.", difficulty: "medium" }
    ],

    transfer: { problem: "Why should user input almost always sit inside try/except when converting types?" },

    boss_battle: {
      title: "Safe Calculator Boss",
      mission: "Divide two numbers with zero protection.",
      requirements: ["try/except", "Handle ZeroDivisionError", "Print result or message"],
      starter: `a = 10\nb = 0\n# safe divide\n`
    }
  },

  {
    id: "modules_math",
    number: "16",
    title: "Modules – Borrowing Tools (math)",
    phase: 1,
    source: "Book B modules idea + W3Schools Modules/Math",

    rich_explanation: `
A module is a ready-made toolbox you can import.

import math
print(math.sqrt(16))
print(math.pi)

You do not rewrite every tool yourself.
Python comes with many modules: math, random, datetime...

Patterns:
import math
from math import sqrt
import math as m
    `,

    key_points: [
      "import module_name",
      "math.sqrt, math.pi, math.ceil, math.floor",
      "random.randint for games",
      "Modules keep code shorter and stronger",
      "Phase 1 focus: math + random basics"
    ],

    common_mistakes: [
      {
        wrong: "sqrt(16)",
        why: "Need to import math first and use math.sqrt",
        correct: "import math\nprint(math.sqrt(16))"
      }
    ],

    why: {
      problem: "You need square root and pi without inventing formulas.",
      question: "Best approach?",
      options: ["Write series by hand", "Import math module", "Only ** 0.5 always", "Hardcode 3.14 only"],
      correct: 1,
      insight: "Modules give tested tools instantly."
    },

    mental_model: {
      title: "Module = toolbox you borrow",
      description: "Import opens a toolbox. Use tools with module.tool()",
      visual: "function_machine"
    },

    playground: { type: "function_machine", name: "sqrt", process: "math.sqrt(x)" },

    predict: [
      {
        question: "import math\nprint(math.sqrt(9))",
        options: ["3", "9", "81", "Error"],
        correct: 0,
        explanation: "Square root of 9 is 3"
      }
    ],

    code: {
      examples: [
        {
          title: "1. math basics",
          code: `import math
print(math.sqrt(25))
print(math.pi)
print(math.ceil(3.2))
print(math.floor(3.8))`
        },
        {
          title: "2. random integer",
          code: `import random
print(random.randint(1, 6))  # dice`
        },
        {
          title: "3. from import",
          code: `from math import sqrt, pi
print(sqrt(49))
print(pi)`
        },
        {
          title: "4. Circle area",
          code: `import math
r = 5
area = math.pi * r ** 2
print(area)`
        }
      ]
    },

    break_it: {
      question: "Fix missing import:",
      broken_code: `print(math.sqrt(16))`,
      hint: "Import math first",
      fix: `import math
print(math.sqrt(16))`
    },

    apply: {
      problem: "Use math to print square root of 144 and area of circle radius 7.",
      starter: `import math
# sqrt and area`
    },

    try_it_exercises: [
      { id: "mod-ex1", question: "Simulate a dice roll with random.randint(1,6).", difficulty: "easy" }
    ],

    transfer: { problem: "Build a tiny program: random number 1–10 and tell if it is higher than 5." },

    boss_battle: {
      title: "Math Toolkit Boss",
      mission: "Use math and random in one short program.",
      requirements: ["import math", "import random", "Print at least 2 results"],
      starter: `import math\nimport random\n`
    }
  },

  // ============================================================
  // GAP-CLOSE vs W3Schools / GeeksforGeeks (make Phase 1 complete)
  // ============================================================

  {
    id: "casting",
    number: "17",
    title: "Type Casting – Changing Boxes",
    phase: 1,
    source: "W3Schools Casting + GFG Type Conversion + Practice Book",

    rich_explanation: `
Sometimes a value is the wrong type for what you need.

Examples:
"5" is a string, not a number
You cannot do "5" + 2 in a math way the same as 5 + 2

Casting = convert type intentionally:

int("5")     → 5
float("3.2") → 3.2
str(10)      → "10"
bool(1)      → True
bool(0)      → False

This is critical for input and Practice Book type() questions.
    `,

    key_points: [
      "int(), float(), str(), bool() convert types",
      "int(\"5\") works; int(\"hello\") causes ValueError",
      "bool(0) is False; other numbers are True",
      "Always cast user text before doing math",
      "type(x) shows the current type"
    ],

    common_mistakes: [
      {
        wrong: "print(\"5\" + 2)",
        why: "str + int is not allowed",
        correct: "print(int(\"5\") + 2)"
      }
    ],

    why: {
      problem: "User types age as text \"18\". You need to check if age >= 18.",
      question: "What must you do first?",
      options: ["Nothing", "Convert text to int", "Only use strings forever", "Restart Python"],
      correct: 1,
      insight: "Casting turns text numbers into real numbers."
    },

    mental_model: {
      title: "Casting changes the label of the box",
      description: "Same idea, different type: text \"5\" becomes number 5 so math works.",
      visual: "box"
    },

    playground: { type: "variable_box", initial: [{ name: "x", value: "5" }] },

    predict: [
      {
        question: "print(int(3.9))",
        options: ["3.9", "3", "4", "Error"],
        correct: 1,
        explanation: "int() cuts the decimal part (does not round up)."
      },
      {
        question: "print(type(float(\"2\")))",
        options: ["int", "str", "float", "Error"],
        correct: 2,
        explanation: "float(\"2\") makes a float"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Basic casts",
          code: `print(int("12"))
print(float("3.14"))
print(str(99))
print(bool(0), bool(7))`
        },
        {
          title: "2. Math after cast",
          code: `a = "10"
b = "3"
print(int(a) + int(b))
print(float(a) / float(b))`
        },
        {
          title: "3. type() checks",
          code: `x = 5
y = "5"
print(type(x))
print(type(y))
print(type(float(y)))`
        },
        {
          title: "4. Safe cast with try",
          code: `text = "hello"
try:
    n = int(text)
    print(n)
except ValueError:
    print("Not a number")`
        }
      ]
    },

    break_it: {
      question: "Make this work:",
      broken_code: `print("5" + 3)`,
      hint: "Cast the string",
      fix: `print(int("5") + 3)`
    },

    apply: {
      problem: "Convert \"25\" and \"4\" to ints, multiply, print result.",
      starter: `a = "25"\nb = "4"\n# cast and multiply`
    },

    try_it_exercises: [
      { id: "cast-ex1", question: "Convert 9.8 to int and print.", difficulty: "easy" },
      { id: "cast-ex2", question: "Convert 0 and 1 to bool and print both.", difficulty: "easy" }
    ],

    transfer: { problem: "Why does Practice Book ask type(3*5/5) so often?" },

    boss_battle: {
      title: "Casting Boss",
      mission: "Cast strings to numbers and compute a total.",
      requirements: ["Use int or float", "Do a calculation", "Print result"],
      starter: `price = "50"\nqty = "3"\n`
    }
  },

  {
    id: "lambda",
    number: "18",
    title: "Lambda – Tiny One-Line Functions",
    phase: 1,
    source: "W3Schools Lambda + GFG Lambda (beginner level)",

    rich_explanation: `
A lambda is a small function without a full def name block.

Normal:
def double(x):
    return x * 2

Lambda:
double = lambda x: x * 2

Use when:
- Very short function
- Passed quickly into map/filter/sort key

Phase 1 rule: understand the idea; do not overuse.
    `,

    key_points: [
      "lambda args: expression",
      "Returns the expression automatically",
      "Good for short throwaway functions",
      "Still prefer def for longer logic",
      "Often used with sorted(..., key=lambda ...)"
    ],

    common_mistakes: [
      {
        wrong: "lambda x: print(x)",
        why: "Works but lambdas are meant for expressions/return values",
        correct: "f = lambda x: x * 2\nprint(f(5))"
      }
    ],

    why: {
      problem: "You need a one-line function only once.",
      question: "What is a compact option?",
      options: ["Only full def", "lambda", "No functions allowed", "Only classes"],
      correct: 1,
      insight: "Lambda = mini function for short jobs."
    },

    mental_model: {
      title: "Lambda is a sticky note function",
      description: "Write a tiny rule on a sticky note, use it, throw away.",
      visual: "function_machine"
    },

    playground: { type: "function_machine", name: "lambda", process: "x * 2" },

    predict: [
      {
        question: "f = lambda n: n + 1\nprint(f(4))",
        options: ["4", "5", "n+1", "Error"],
        correct: 1,
        explanation: "4+1 = 5"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Simple lambda",
          code: `square = lambda x: x * x
print(square(6))`
        },
        {
          title: "2. Two arguments",
          code: `add = lambda a, b: a + b
print(add(10, 5))`
        },
        {
          title: "3. With sorted key",
          code: `pairs = [(1, "b"), (2, "a"), (0, "c")]
print(sorted(pairs, key=lambda p: p[1]))`
        },
        {
          title: "4. Same as def",
          code: `def double(x):
    return x * 2

double2 = lambda x: x * 2
print(double(7), double2(7))`
        }
      ]
    },

    break_it: {
      question: "Make a lambda that returns n*3:",
      broken_code: `f = lambda n\nprint(f(4))`,
      hint: "Need : expression",
      fix: `f = lambda n: n * 3
print(f(4))`
    },

    apply: {
      problem: "Make lambda for area of square (side*side) and test with 5.",
      starter: `# area = lambda ...`
    },

    try_it_exercises: [
      { id: "lam-ex1", question: "Lambda that returns True if number is even.", difficulty: "medium" }
    ],

    transfer: { problem: "When should you NOT use lambda?" },

    boss_battle: {
      title: "Lambda Boss",
      mission: "Create and use one lambda successfully.",
      requirements: ["Define lambda", "Call it", "Print result"],
      starter: `# Lambda Boss\n`
    }
  },

  {
    id: "inheritance",
    number: "19",
    title: "Inheritance – Child Factories",
    phase: 1,
    source: "W3Schools Inheritance + GFG OOP intro (simplified)",

    rich_explanation: `
Inheritance means a new class can reuse another class.

Parent (base) class has common features.
Child class gets those features and can add more.

Example:
class Animal:
    def speak(self):
        print("...")

class Dog(Animal):
    def speak(self):
        print("Woof")

Dog is an Animal, so it inherits the structure, but can override speak.

This is the start of real OOP design — keep it simple in Phase 1.
    `,

    key_points: [
      "ChildClass(ParentClass):",
      "Child gets parent methods",
      "Child can override methods",
      "super() can call parent version (advanced note)",
      "Use when many classes share behavior"
    ],

    common_mistakes: [
      {
        wrong: "class Dog: Animal",
        why: "Wrong syntax",
        correct: "class Dog(Animal):"
      }
    ],

    why: {
      problem: "Cat and Dog both need name and speak, but different sounds.",
      question: "Smart design?",
      options: ["Copy-paste two full classes only", "Parent Animal + child classes", "Only one function forever", "No classes"],
      correct: 1,
      insight: "Inheritance shares common parts and customizes differences."
    },

    mental_model: {
      title: "Family of factories",
      description: "Parent factory teaches the basics. Child factories inherit and specialize.",
      visual: "class_factory"
    },

    playground: { type: "class_demo" },

    predict: [
      {
        question: "class A:\n  def hi(self): print(\"A\")\nclass B(A):\n  pass\nB().hi()",
        options: ["Error", "A", "B", "Nothing"],
        correct: 1,
        explanation: "B inherits hi from A"
      }
    ],

    code: {
      examples: [
        {
          title: "1. Basic inheritance",
          code: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print("...")

class Dog(Animal):
    def speak(self):
        print(self.name, "says woof!")

d = Dog("Buddy")
d.speak()`
        },
        {
          title: "2. Child adds method",
          code: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Car(Vehicle):
    def drive(self):
        print(self.brand, "is driving")

c = Car("Toyota")
c.drive()`
        },
        {
          title: "3. Override",
          code: `class Bird:
    def move(self):
        print("flies")

class Penguin(Bird):
    def move(self):
        print("swims")

Penguin().move()`
        }
      ]
    },

    break_it: {
      question: "Fix inheritance syntax:",
      broken_code: `class Dog: Animal
    def speak(self):
        print("woof")`,
      hint: "class Dog(Animal):",
      fix: `class Animal:
    pass

class Dog(Animal):
    def speak(self):
        print("woof")

Dog().speak()`
    },

    apply: {
      problem: "Create Person parent with name, and Student child that prints studying message.",
      starter: `# class Person:\n# class Student(Person):`
    },

    try_it_exercises: [
      { id: "inh-ex1", question: "Make Cat(Animal) that prints meow.", difficulty: "easy" }
    ],

    transfer: { problem: "Name one real-world parent/child class pair (e.g. Shape → Circle)." },

    boss_battle: {
      title: "Family of Classes Boss",
      mission: "Create parent + child and call a method.",
      requirements: ["Parent class", "Child class with (Parent)", "Create object and call method"],
      starter: `# Inheritance Boss\n`
    }
  },

  {
    id: "system_intro",
    number: "20",
    title: "Talking to the Computer (System Intro)",
    phase: 2,
    source: "Book A – Programming Python, System Tools ideas (simplified)",




    why: {
      problem: "Sometimes you want your Python program to look at folders, list files, or run other programs.",
      question: "What kind of power is this?",
      options: [
        "Only for printing text",
        "The power to talk to the operating system",
        "Only for games",
        "It is not possible in Python"
      ],
      correct: 1,
      insight: "Python can ask the computer questions about files and folders and even run other programs."
    },

    mental_model: {
      title: "Python can talk to the computer’s file system",
      description: "You can ask: “What files are in this folder?” or “Does this file exist?” or “Create a new folder”.",
      visual: "system_folder"
    },

    playground: {
      type: "system_demo"
    },

    predict: [
      {
        question: "Why would a program need to list files in a folder?",
        options: [
          "Only for fun",
          "To work with many files automatically (photos, documents, data)",
          "It is never useful",
          "Only on Windows"
        ],
        correct: 1,
        explanation: "Real programs often need to process many files without the human naming each one."
      }
    ],

    code: {
      examples: [
        {
          title: "List files (simple idea)",
          code: `import os
print("Current folder:", os.getcwd())
print("Files here:", os.listdir("."))`
        }
      ]
    },

    break_it: {
      question: "This may fail on some systems. Why?",
      broken_code: `import os
os.listdir("/some/path/that/does/not/exist")`,
      hint: "Always check or use try/except when talking to the file system.",
      fix: `import os
try:
    print(os.listdir("."))
except Exception as e:
    print("Problem:", e)`
    },

    apply: {
      problem: "Print the current folder and all the files inside it.",
      starter: `import os\n# your code`
    },

    transfer: {
      problem: "Write a small tool that counts how many .txt files are in the current folder."
    }
  },

  {
    id: "gui_intro",
    number: "12",
    title: "Windows & Buttons (GUI Intro)",
    phase: 2,
    source: "Book A – Programming Python, tkinter ideas (simplified)",

    why: {
      problem: "Until now everything was text. What if you want a real window with buttons that the user can click?",
      question: "What do we need?",
      options: [
        "Only print statements",
        "A Graphical User Interface (GUI) library",
        "It is impossible in Python",
        "Only web pages"
      ],
      correct: 1,
      insight: "tkinter (and other libraries) let you create real windows, buttons, labels and more."
    },

    mental_model: {
      title: "A GUI is a visual window the user can click",
      description: "Instead of typing answers, the user sees buttons, boxes and text on the screen and interacts with the mouse.",
      visual: "gui_window"
    },

    playground: {
      type: "gui_demo"
    },

    predict: [
      {
        question: "What is the biggest advantage of a GUI over pure text?",
        options: [
          "It runs faster",
          "It is easier and more friendly for most people to use",
          "It uses less memory",
          "It only works on phones"
        ],
        correct: 1,
        explanation: "Most humans prefer clicking buttons rather than typing commands."
      }
    ],

    code: {
      examples: [
        {
          title: "Tiny window idea (concept)",
          code: `# This is the idea of a simple window
# (real tkinter code needs a full environment)

# window = create_window("My App")
# button = create_button("Click me")
# button.when_clicked → print("Hello!")
print("GUI programs create windows and buttons instead of only text.")`
        }
      ]
    },

    break_it: {
      question: "Why can’t we fully run real GUI code inside this simple browser playground?",
      broken_code: `import tkinter
root = tkinter.Tk()
root.mainloop()`,
      hint: "Browser Python (Pyodide) has limitations with desktop GUI libraries.",
      fix: `# Real tkinter needs a normal Python installation on your computer.
print("Learn the idea here, then try tkinter on your own computer later!")`
    },

    apply: {
      problem: "Describe in comments what your first small GUI program would look like (title, one button, what it does).",
      starter: `# My first GUI idea:\n# Window title: \n# Button text: \n# When clicked it should:`
    },

    transfer: {
      problem: "Think of a tiny tool (for example a name greeter or a counter) and describe its window and buttons."
    }
  }
];

// Progress tracking helper
const PROGRESS_KEY = "python_fun_progress";

