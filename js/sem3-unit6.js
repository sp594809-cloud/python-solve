// Full SEM III unit 6; question numbers match the 2026 source PDF.
var SEM3_UNIT_6 = {
  "unit": 6,
  "title": "Unit 6 — File handling",
  "mcqs": [
    {
      "id": "S3-462",
      "srNo": 462,
      "question": "The contents of names.txt is listed here:\nMoana\nCinderella\nTiana\nWhich of the following code blocks will print all of the names in names.txt?\nI. names = open(\"names.txt\", \"r\")\nfor line in names:\n  print(names)\nII. names = open(\"names.txt\", \"r\")\nfor line in names:\n  print(line)\nIII. names = open(\"names.txt\", \"r\")\nfor line in names:\n  print(\"line\")",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "I",
        "II",
        "III",
        "I & III both"
      ],
      "answer": "B",
      "correct": "II",
      "explanation": "The correct block iterates over the file and prints each line. The source uses the PDF’s labelled block II."
    },
    {
      "id": "S3-463",
      "srNo": 463,
      "question": "File is created if does not exist. If the file exists, file is truncated( past data is lost). Both reading and writing operation can\ntake place. What is the text file mode?",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "’r’",
        "’w’",
        "’w+’",
        "’a+’"
      ],
      "answer": "C",
      "correct": "’w+’",
      "explanation": "w+ opens a file for reading and writing, creates it if absent, and truncates existing contents."
    },
    {
      "id": "S3-464",
      "srNo": 464,
      "question": "From following which statement reads all the lines from the file and returns in the form of list?",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "readlines()",
        "read()",
        "readline()",
        "readpara()"
      ],
      "answer": "A",
      "correct": "readlines()",
      "explanation": "readlines() returns a list of line strings, generally retaining newline characters."
    },
    {
      "id": "S3-465",
      "srNo": 465,
      "question": "From following which statement writes a list in a file?",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "write()",
        "writeline()",
        "writelines()",
        "writepara()"
      ],
      "answer": "C",
      "correct": "writelines()",
      "explanation": "writelines accepts an iterable of strings. It does not add newline separators automatically."
    },
    {
      "id": "S3-466",
      "srNo": 466,
      "question": "What happens if no arguments are passed to the seek function?",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "file position is set to the start of file",
        "file position is set to the end of file",
        "file position remains unchanged",
        "error"
      ],
      "answer": "D",
      "correct": "error",
      "explanation": "seek requires an offset argument. seek() without one raises TypeError."
    },
    {
      "id": "S3-467",
      "srNo": 467,
      "question": "To read 5th line from text file, which of the following statement is true?",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "dt=f.readline(4)\nprint(dt[4])",
        "dt=f.readlines()\nprint(dt[4])",
        "dt=f.read(5)\nprint(dt[3])",
        "dt=f.read(4)\nprint(dt[5])"
      ],
      "answer": "B",
      "correct": "dt=f.readlines()\nprint(dt[4])",
      "explanation": "readlines returns zero-indexed lines, so index 4 is the fifth line."
    },
    {
      "id": "S3-468",
      "srNo": 468,
      "question": "What will be the output of the following code snippet?\nwith open(\"hello.txt\", \"w\") as f:\n  f.write(\"Hello World how are you today\")\nwith open('hello.txt', 'r') as f:\n  data = f.readlines()\n  for line in data:\n    words = line.split()\n    print (words)\n  f.close()",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "[‘Hello’, ‘World’, ‘how’, ‘are’, ‘you’, ‘today’]",
        "Hello World how are you today",
        "Hello",
        "Error"
      ],
      "answer": "A",
      "correct": "[‘Hello’, ‘World’, ‘how’, ‘are’, ‘you’, ‘today’]",
      "explanation": "The file contains one line. split() produces six words: Hello, World, how, are, you, today."
    },
    {
      "id": "S3-469",
      "srNo": 469,
      "question": "What is printed after executing this python code?\nf=open(\"abc.txt\",\"w\")\nx=[1,2,3]\nf.writelines(x)\nf.close()",
      "marks": 1.0,
      "sourcePage": 37,
      "options": [
        "“1,2,3”",
        "1,2,3",
        "1",
        "Error"
      ],
      "answer": "D",
      "correct": "Error",
      "explanation": "A text file requires strings. writelines([1,2,3]) raises TypeError rather than converting integers."
    }
  ],
  "coding": [
    {
      "id": "S3-C470",
      "srNo": 470,
      "question": "Write a function cust_data() to ask user to enter their names and age to store data in customer.txt file.",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "def cust_data():\n    name = input('Name: ')\n    age = int(input('Age: '))\n    with open('customer.txt', 'a', encoding='utf-8') as f:\n        f.write(f'{name}, {age}\\n')\ncust_data()",
      "explanation": "Append one customer per line; with closes the file automatically.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "Krish",
        "19"
      ]
    },
    {
      "id": "S3-C471",
      "srNo": 471,
      "question": "Write a python program to create and read the city.txt file in one go and print the contents on the output screen.",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "with open('city.txt', 'w+', encoding='utf-8') as f:\n    f.write(input('City names: '))\n    f.seek(0)\n    print(f.read())",
      "explanation": "w+ opens for writing and reading. Seek back to the beginning before reading newly written data.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "Ahmedabad Surat"
      ],
      "exampleOutput": "Ahmedabad Surat"
    },
    {
      "id": "S3-C472",
      "srNo": 472,
      "question": "Write a function count_lines() to count and display the total number of lines from the file. Consider the following lines for\nthe file – friends.txt.\nFriends are crazy, Friends are naughty !\nFriends are honest, Friends are best !\nFriends are like keygen, friends are like license key !\nWe are nothing without friends, Life is not possible without friends !",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "def count_lines():\n    with open('friends.txt', encoding='utf-8') as f:\n        print('Lines:', sum(1 for line in f))\ncount_lines()",
      "explanation": "Iterating over a text file yields one line at a time, including a last line without a newline.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "Lines: 4",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C473",
      "srNo": 473,
      "question": "Write a function display_oddLines() to display odd number lines from the text file. Consider the following lines for the file –\nfriends.txt.\nFriends are crazy, Friends are naughty !\nFriends are honest, Friends are best !\nFriends are like keygen, friends are like license key !\nWe are nothing without friends, Life is not possible without friends !",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "def display_oddLines():\n    with open('friends.txt', encoding='utf-8') as f:\n        for number, line in enumerate(f, 1):\n            if number % 2: print(line, end='')\ndisplay_oddLines()",
      "explanation": "Human line numbering begins at 1; print lines 1, 3, 5 and so on.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "Friends are crazy, Friends are naughty !\nFriends are like keygen, friends are like license key !",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C474",
      "srNo": 474,
      "question": "Write a Python program to read a text file and do following: 1. Print no. of words 2. Print no. statements",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "import re\nwith open(input('Filename: '), encoding='utf-8') as f: text = f.read()\nprint('Words:', len(text.split()))\nprint('Statements:', len([s for s in re.split(r'[.!?]+', text) if s.strip()]))",
      "explanation": "Count whitespace-separated words and sentences separated by ., ! or ?. Here statements means sentences, not Python statements; consecutive punctuation forms one boundary.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "friends.txt"
      ],
      "exampleOutput": "Words: 36\nStatements: 4",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C475",
      "srNo": 475,
      "question": "Write a python program that reads a text file and changes the file by capitalizing each character of file.",
      "marks": 3.0,
      "sourcePage": 37,
      "solution": "path = input('Filename: ')\nwith open(path, encoding='utf-8') as f: text = f.read()\nwith open(path, 'w', encoding='utf-8') as f: f.write(text.upper())",
      "explanation": "Read completely before opening the same file in write mode, which truncates it.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "friends.txt"
      ],
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C476",
      "srNo": 476,
      "question": "Write a Python program to copy the contents of a file to another file.",
      "marks": 7.0,
      "sourcePage": 37,
      "solution": "source, destination = input('Source: '), input('Destination: ')\nif source == destination: raise ValueError('Use different files')\nwith open(source, encoding='utf-8') as f: text = f.read()\nwith open(destination, 'w', encoding='utf-8') as f: f.write(text)",
      "explanation": "Copy exact text including its newlines; reject the same source and destination.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "file1.txt",
        "copy.txt"
      ],
      "exampleFiles": [
        "file1.txt"
      ]
    },
    {
      "id": "S3-C477",
      "srNo": 477,
      "question": "Write a python program to read line by line from a given files file1 & file2 and write into file3.",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "from itertools import zip_longest\nwith open('file1.txt', encoding='utf-8') as a, open('file2.txt', encoding='utf-8') as b, open('file3.txt', 'w', encoding='utf-8') as out:\n    for line1, line2 in zip_longest(a, b, fillvalue=''):\n        for line in (line1, line2):\n            if line: out.write(line.rstrip('\\n') + '\\n')",
      "explanation": "Interleave one line from each file. zip_longest retains remaining lines when files have unequal lengths.",
      "topic": "File handling",
      "starterCode": "",
      "exampleFiles": [
        "file1.txt",
        "file2.txt"
      ]
    },
    {
      "id": "S3-C478",
      "srNo": 478,
      "question": "Write python program to count the number of lines in a file.",
      "marks": 7.0,
      "sourcePage": 37,
      "solution": "def count_lines():\n    with open('friends.txt', encoding='utf-8') as f:\n        print('Lines:', sum(1 for line in f))\ncount_lines()",
      "explanation": "Iterating over a text file yields one line at a time, including a last line without a newline.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "Lines: 4",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C479",
      "srNo": 479,
      "question": "Write a python program to search for a string in text files.",
      "marks": 7.0,
      "sourcePage": 37,
      "solution": "from pathlib import Path\nquery = input('Search string: ')\nfor path in sorted(Path(input('Directory: ')).glob('*.txt')):\n    with path.open(encoding='utf-8') as f:\n        for number, line in enumerate(f, 1):\n            if query in line: print(path.name, number, line.rstrip())",
      "explanation": "Search every .txt file in the chosen directory, reporting each matching line.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "Friends",
        "."
      ],
      "exampleOutput": "friends.txt 1 Friends are crazy, Friends are naughty !\nfriends.txt 2 Friends are honest, Friends are best !\nfriends.txt 3 Friends are like keygen, friends are like license key !\npython1.txt 1 Friends are honest\nfile1.txt 1 Friends are crazy, Friends are naughty !\nfile1.txt 2 Friends are honest, Friends are best !\npython2.txt 1 Friends 6re honest",
      "exampleFiles": [
        "friends.txt",
        "file1.txt",
        "file2.txt"
      ]
    },
    {
      "id": "S3-C480",
      "srNo": 480,
      "question": "Write a “pager” program. Your solution should prompt for a filename, and display the text file 25 lines at a time, pausing\neach time to ask the user to enter the word “continue”, in order to show the next 25 lines or enter the word “stop” to close\nthe file.",
      "marks": 4.0,
      "sourcePage": 37,
      "solution": "from itertools import islice\nwith open(input('Filename: '), encoding='utf-8') as f:\n    while True:\n        page = list(islice(f, 25))\n        if not page: break\n        print(''.join(page), end='')\n        if len(page) < 25: break\n        if input('continue or stop: ').lower() != 'continue': break",
      "explanation": "Read batches of at most 25 lines and wait for permission before the next batch. The with block closes the file on exit.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "friends.txt"
      ],
      "exampleOutput": "Friends are crazy, Friends are naughty !\nFriends are honest, Friends are best !\nFriends are like keygen, friends are like license key !\nWe are nothing without friends, Life is not possible without friends !",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C481",
      "srNo": 481,
      "question": "Write a Python program to reverse the content of a one file and store it in second file and also convert content of second\nfile into uppercase and store it in third file and also count number of Vowels in third file and also print only 2nd line from the\ncontent of third file.\nExamples:\nIf data file one contains the following data:\nFriends are crazy, Friends are naughty !\nFriends are honest, Friends are best !\nOutput 1:\n! tseb era sdneirF ,tsenoh era sdneirF\n! ythguan era sdneirF ,yzarc era sdneirF\nOutput 2:\n! TSEB ERA SDNEIRF ,TSENOH ERA SDNEIRF\n! YTHGUAN ERA SDNEIRF ,YZARC ERA SDNEIRF\nOutput 3:\nVowels = 22\nOutput 4:\n! YTHGUAN ERA SDNEIRF ,YZARC ERA SDNEIRF",
      "marks": 4.0,
      "sourcePage": 38,
      "solution": "with open('file1.txt', encoding='utf-8') as f: text = f.read().rstrip('\\n')\nreversed_text = text[::-1]\nwith open('file2.txt', 'w', encoding='utf-8') as f: f.write(reversed_text)\nprint(reversed_text)\nupper = reversed_text.upper()\nwith open('file3.txt', 'w', encoding='utf-8') as f: f.write(upper)\nprint(upper)\nprint('Vowels =', sum(c in 'AEIOU' for c in upper))\nlines = upper.splitlines()\nprint(lines[1] if len(lines) > 1 else 'No second line')",
      "explanation": "Reverse the complete text, then uppercase it and count vowels. Strip a trailing newline first so it does not become an empty first line, matching the sample.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "! tseb era sdneirF ,tsenoh era sdneirF\n! ythguan era sdneirF ,yzarc era sdneirF\n! TSEB ERA SDNEIRF ,TSENOH ERA SDNEIRF\n! YTHGUAN ERA SDNEIRF ,YZARC ERA SDNEIRF\nVowels = 22\n! YTHGUAN ERA SDNEIRF ,YZARC ERA SDNEIRF",
      "exampleFiles": [
        "file1.txt"
      ]
    },
    {
      "id": "S3-C482",
      "srNo": 482,
      "question": "Write a python program to extract a list of all four-letter words that start and end with the same letter from a given text file.",
      "marks": 4.0,
      "sourcePage": 38,
      "solution": "import re\nwith open(input('Filename: '), encoding='utf-8') as f: text = f.read()\nprint([w for w in re.findall(r'\b[A-Za-z]+\b', text) if len(w) == 4 and w[0].lower() == w[-1].lower()])",
      "explanation": "Extract alphabetic words so punctuation is excluded; test length and equal endpoints case-insensitively.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "friends.txt"
      ],
      "exampleOutput": "[]",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C483",
      "srNo": 483,
      "question": "Write a python program to read a text file “Story.txt” and print only word starting with ‘I’ in reverse order.\nExample: If value in text file is : ‘INDIA IS MY COUNTRY’\nOutput will be: ‘AIDNI SI MY COUNTRY’",
      "marks": 2.0,
      "sourcePage": 38,
      "solution": "with open('Story.txt', encoding='utf-8') as f: words = f.read().split()\nprint(' '.join(w[::-1] if w.startswith('I') else w for w in words))",
      "explanation": "Reverse only words beginning with uppercase I; preserve the order of all words.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "AIDNI SI MY COUNTRY",
      "exampleFiles": [
        "Story.txt"
      ]
    },
    {
      "id": "S3-C484",
      "srNo": 484,
      "question": "Write a Python program to count words, characters and spaces from text file.\nInput:\nPython is a Easy Subject\nOOPs is One of the most\ninteresting Topic\nOutput:\nNo of space: 10\nNo of word: 13\nNo of character: 64",
      "marks": 3.0,
      "sourcePage": 38,
      "solution": "with open(input('Filename: '), encoding='utf-8') as f: text = f.read()\nprint('Spaces:', text.count(' '))\nprint('Words:', len(text.split()))\nprint('Characters:', len(text))",
      "explanation": "Characters include spaces and newline characters. Spaces counts literal spaces; word splitting also recognizes newlines.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "friends.txt"
      ],
      "exampleOutput": "Spaces: 32\nWords: 36\nCharacters: 207",
      "exampleFiles": [
        "friends.txt"
      ]
    },
    {
      "id": "S3-C485",
      "srNo": 485,
      "question": "File Filtering. write all lines of a file1, except those that start with a pound sign ( # ), the comment character for Python to\nfile2. And display data of file2.\nText file1 content:\nFriends are crazy, Friends are naughty !\n#Friends are honest, Friends are best !\nFriends are like keygen, #friends are like license key !\nWe are nothing without friends, Life is not possible without friends !\nText file2 shoud be:\nFriends are crazy, Friends are naughty !\nFriends are like keygen,\nWe are nothing without friends, Life is not possible without friends !",
      "marks": 3.0,
      "sourcePage": 38,
      "solution": "with open('file1.txt', encoding='utf-8') as source, open('file2.txt', 'w', encoding='utf-8') as out:\n    for line in source:\n        clean = line.split('#', 1)[0].rstrip()\n        if clean: out.write(clean + '\\n')\nwith open('file2.txt', encoding='utf-8') as f: print(f.read())",
      "explanation": "The statement and example disagree: the example also removes inline comments. This version follows the example by removing everything from the first # onward.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "Friends are crazy, Friends are naughty !\nFriends are honest, Friends are best !",
      "exampleFiles": [
        "file1.txt"
      ]
    },
    {
      "id": "S3-C486",
      "srNo": 486,
      "question": "Write a python program to accept string/sentence from user till the user enters “END”. Each string/sentence entered by\nuser should be a newline in file. Save all the lines in file and display only those lines which begin with capital letter.\nExample:\nEnter Something (for quit enter END):Hi Friends\nEnter Something (for quit enter END):how are you all\nEnter Something (for quit enter END):I am fine\nEnter Something (for quit enter END):hope you all are fine\nEnter Something (for quit enter END):END\nThe Line started with Capital Letters:\nHi Friends\nI am fine",
      "marks": 4.0,
      "sourcePage": 38,
      "solution": "with open('sentences.txt', 'w', encoding='utf-8') as f:\n    while True:\n        line = input('Sentence or END: ')\n        if line == 'END': break\n        f.write(line + '\\n')\nwith open('sentences.txt', encoding='utf-8') as f:\n    for line in f:\n        if line and line[0].isupper(): print(line, end='')",
      "explanation": "Save each input as a separate line and print only those whose first character is uppercase.",
      "topic": "File handling",
      "starterCode": "",
      "exampleInputs": [
        "Hi Friends",
        "how are you",
        "I am fine",
        "END"
      ],
      "exampleOutput": "Hi Friends\nI am fine"
    },
    {
      "id": "S3-C487",
      "srNo": 487,
      "question": "Write a program to compare two text files. If they are different, give the line and column numbers in the files where the first\ndifference occurs.\nExample:\nFile 1: python1.txt\nFriends are crazy, Friends are naughty !\nFriends are honest, Friends are best !\nFriends are like keygen, friends are like license key !\nnew We are nothing without friends, Life is not possible without friends !\nFile 2: python2.txt\nFriends are crazy, Friends are naughty !\nFriends 6re honest, Friends are best !\nFriends are like keygen, friends are like license key !\nnew We are nothing without friends, Life is not possible without friends !\nOutput:\nline number 2 colNo. 9",
      "marks": 4.0,
      "sourcePage": 38,
      "solution": "from itertools import zip_longest\nwith open('python1.txt', encoding='utf-8') as f: a = f.read()\nwith open('python2.txt', encoding='utf-8') as f: b = f.read()\nline, column = 1, 1\nfor left, right in zip_longest(a, b, fillvalue=None):\n    if left != right:\n        print('Line:', line, 'Column:', column)\n        break\n    if left == '\\n': line, column = line + 1, 1\n    else: column += 1\nelse: print('Files are identical')",
      "explanation": "Compare corresponding characters, including unequal file lengths. Maintain one-based line and column counters.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "Line: 1 Column: 9",
      "exampleFiles": [
        "python1.txt",
        "python2.txt"
      ]
    },
    {
      "id": "S3-C488",
      "srNo": 488,
      "question": "Write a python program to read through the mbox-short.txt and figure out who has\nsent the greatest number of mail messages. The program looks for 'From ' lines and\ntakes the second word of those lines as the person who sent the mail. The program\ncreates a Python dictionary that maps the sender's mail address to a count of the\nnumber of times they appear in the file. After the dictionary is produced, the program reads through the dictionary to\nidentify the sender with the maximum count (the most prolific sender).\nExpected Output:\n{'stephen.marquard@uct.ac.za': 2, 'louis@media.berkeley.edu': 3, 'zqian@umich.edu': 4, 'rjlowe@iupui.edu': 2,\n'cwen@iupui.edu': 5, 'gsilver@umich.edu': 3, 'wagnermr@iupui.edu': 1, 'antranig@caret.cam.ac.uk': 1,\n'gopal.ramasammycook@gmail.com': 1, 'david.horwitz@uct.ac.za': 4, 'ray@media.berkeley.edu': 1}\ncwen@iupui.edu 5",
      "marks": 5.0,
      "sourcePage": 39,
      "solution": "counts = {}\nwith open('mbox-short.txt', encoding='utf-8') as f:\n    for line in f:\n        if line.startswith('From '):\n            sender = line.split()[1]\n            counts[sender] = counts.get(sender, 0) + 1\nprint(counts)\nif counts:\n    sender = max(counts, key=counts.get)\n    print(sender, counts[sender])\nelse: print('No messages')",
      "explanation": "Count From-space lines, not From-colon headers. Find the sender with the highest frequency.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "{'a@example.com': 2, 'b@example.com': 1}\na@example.com 2",
      "exampleFiles": [
        "mbox-short.txt"
      ]
    },
    {
      "id": "S3-C489",
      "srNo": 489,
      "question": "You are given a text file named newlogfile.txt.\nEach line contains:\na user's full name (first name + last name), followed by two time values representing the log-in and log-out times in 24 Hr\nformat. Note that all logins/logouts occur on the same day.\n1. Extract and print the following for each user: Their initials, formed from the first letter of their first and last names (e.g.,\nGuido Rossum → GR, Bjarne Stroustrup → BS) Their cleaned login and logout times (HH:MM).\nRequired output –\nGR 14:22 14:37\nBS 08:22 09:10\nDR 11:23 13:05\nNA 12:57 14:15\nLW 10:03 10:28\nNW 13:47 16:33\nMB 09:28 10:18\nYM 08:05 10:23\nBE 11:23 12:05\nJG 12:14 13:47\n2. Print all users who were online for at least one hour. Duration must be calculated from the extracted HH:MM times.\nOutput should show initials, times, and duration in Hh Mm format.\nRequired output -\nUsers online ≥ 1 hour:\nDR 11:23 13:05 (1h 42m)\nNA 12:57 14:15 (1h 18m)\nNW 13:47 16:33 (2h 46m)",
      "marks": 9.0,
      "sourcePage": 39,
      "solution": "import re\nusers = []\nwith open('newlogfile.txt', encoding='utf-8') as f:\n    for line in f:\n        times = re.findall(r'(\\d{1,2})\\s*:\\s*(\\d{2})', line)\n        if len(times) != 2: continue\n        first, last = line.split()[:2]\n        initials = (first[0] + last[0]).upper()\n        login, logout = [f'{int(h):02d}:{int(m):02d}' for h,m in times]\n        start = int(times[0][0])*60 + int(times[0][1])\n        end = int(times[1][0])*60 + int(times[1][1])\n        users.append((initials, login, logout, end-start))\n        print(initials, login, logout)\nprint('Users online at least 1 hour:')\nfor initials, login, logout, minutes in users:\n    if minutes >= 60:\n        print(initials, login, logout, f'({minutes//60}h {minutes%60}m)')",
      "explanation": "Extract two clock times, convert them to minutes from midnight and subtract. The PDF output omits some users whose listed durations exceed one hour; this prints all qualifying users, including YM and JG.",
      "topic": "File handling",
      "starterCode": "",
      "exampleOutput": "GR 14:22 14:37\nDR 11:23 13:05\nYM 08:05 10:23\nUsers online at least 1 hour:\nDR 11:23 13:05 (1h 42m)\nYM 08:05 10:23 (2h 18m)",
      "exampleFiles": [
        "newlogfile.txt"
      ]
    }
  ]
};
