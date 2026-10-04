"""Author the complete 16-week Python for Internship course and project kits."""
import json,textwrap,zipfile
from pathlib import Path
R=Path(__file__).resolve().parents[1]
W=[
('Start thinking in Python','Quiz game','Explain expressions, types and text without copying code.',['Write a three-question quiz with scoring.','Reject an empty answer.','Show a final score and explain how it is calculated.']),
('Decisions and repetition','Expense calculator','Choose a condition or loop by tracing the data.',['Accept a list of expenses.','Handle an empty list and invalid amounts.','Calculate total and category counts.']),
('Collections that solve problems','Contact book','Choose lists, dictionaries and sets for the job.',['Add, find and update contacts.','Prevent duplicate names.','Test missing contacts and empty data.']),
('Functions and debugging','Budget planner','Break a larger problem into small functions.',['Separate input, calculation and output.','Write a monthly budget summary.','Fix one deliberate bug and explain the change.']),
('Reliable programs and files','Study notes CLI','Handle bad input and save useful information.',['Save notes in a text file.','Read them back after restarting.','Handle a missing file without crashing.']),
('Structured data and SQL','Student records','Use CSV, JSON and SQL with explicit schemas.',['Import sample CSV records.','Store records in SQLite using parameters.','Export JSON and test a name containing a quote.']),
('Objects, modules and APIs','Inventory manager','Build a small reusable package and validate API data.',['Keep stock and prices in separate functions or classes.','Reject negative quantities.','Parse a supplied API response fixture.']),
('Testing, Git and a clean repository','Tested Python package','Write code that another person can run and review.',['Create a README with setup and examples.','Add passing tests and a regression test for a fixed bug.','Make at least three meaningful Git commits locally.']),
('HTML, CSS and JavaScript','Responsive portfolio','Build an accessible page and add a small interaction.',['Use semantic sections and a labelled form.','Make a responsive card layout.','Add an interactive button with keyboard support.']),
('HTTP and Python APIs','Task API','Distinguish input validation, status codes and API business logic.',['Run the downloaded FastAPI example on your laptop.','Add a task endpoint and reject blank titles.','Exercise GET and POST routes and record responses.']),
('Connect a frontend and backend','Task dashboard','Move data between a page and a Python service.',['Use fetch and show loading, success and error states.','Render server responses safely using textContent.','Test the dashboard with the local API running.']),
('Deployment and responsible web apps','Deployable web demo','Prepare a reproducible demo with sensible data and error boundaries.',['Keep real secrets out of source and frontend code.','Use sample data and document the demo limits.','Deploy on a host you choose and test from another device.']),
('Data and machine-learning foundations','Dataset report','Inspect features, labels and train/test separation before fitting a model.',['Create a documented synthetic dataset.','Report missing data and class counts.','Split before fitting preprocessing and explain leakage.']),
('Train and evaluate a small AI model','Ticket classifier','Train a scikit-learn model and measure held-out behaviour.',['Train a text classifier on labelled examples.','Evaluate on unseen messages and compare a baseline.','Inspect wrong predictions and state dataset limitations.']),
('Retrieval and AI-assisted development','Notes search assistant','Return grounded evidence and distinguish retrieval from generation.',['Index supplied notes and return relevant source IDs.','Show no-match behaviour.','Try paraphrases and document lexical-search limitations.']),
('Capstone and internship preparation','AI support desk','Combine a Python API, webpage and measured small model.',['Run the included AI support-desk starter.','Add your own feature and a test for it.','Record a demo and explain architecture, failure cases and next steps.'])]
LESSONS=[]
REFS={1:'https://docs.python.org/3/tutorial/introduction.html',2:'https://docs.python.org/3/tutorial/controlflow.html',3:'https://docs.python.org/3/tutorial/datastructures.html',4:'https://docs.python.org/3/tutorial/controlflow.html',5:'https://docs.python.org/3/tutorial/errors.html',6:'https://docs.python.org/3/library/sqlite3.html',7:'https://docs.python.org/3/tutorial/classes.html',8:'https://docs.python.org/3/library/unittest.html',9:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',10:'https://fastapi.tiangolo.com/tutorial/',11:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',12:'https://fastapi.tiangolo.com/deployment/',13:'https://scikit-learn.org/stable/common_pitfalls.html',14:'https://scikit-learn.org/stable/getting_started.html',15:'https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction',16:'https://huggingface.co/learn/llm-course/en/chapter1/1'}
EXAMPLES={1:'price = 20\nquantity = 3\nprint(price * quantity)  # 60',2:'for number in [2, 4, 6]:\n    print(number)',3:'stock = {"pen": 4, "book": 2}\nprint(stock.get("eraser", 0))',4:'def double(value):\n    return value * 2\nprint(double(5))',5:'from pathlib import Path\nPath("demo.txt").write_text("hello", encoding="utf-8")\nprint(Path("demo.txt").read_text(encoding="utf-8"))',6:'import json\nrecord = {"name": "Asha", "score": 8}\ntext = json.dumps(record)\nprint(json.loads(text)["name"])',7:'class Counter:\n    def __init__(self):\n        self.value = 0\n    def increment(self):\n        self.value += 1',8:'def square(x):\n    return x * x\nassert square(-3) == 9  # a useful boundary case',9:'<main><h1>My portfolio</h1><p>Built with HTML.</p></main>',10:'def response(data, status=200):\n    return {"status": status, "body": data}',11:'const message = document.createElement("p");\nmessage.textContent = "Saved successfully";\ndocument.body.append(message);',12:'import os\n# Read a server-side environment variable; never put secrets in HTML.\nmode = os.environ.get("APP_MODE", "demo")',13:'values = [2, 4, 6]\nmean = sum(values) / len(values)\nprint(mean)',14:'from sklearn.dummy import DummyClassifier\n# Compare your model with a simple baseline before making claims.\nbaseline = DummyClassifier(strategy="most_frequent")',15:'notes = [{"id": "n1", "text": "Lists preserve order."}]\n# A result should carry a source ID, not only an answer.',16:'def health():\n    return {"status": "ok", "mode": "demo"}'}
def L(w,title,goal,explain,signature,reference,checks,hints,*,starter=None,packages=None):
 number=sum(x['week']==w for x in LESSONS)+1
 s=starter or signature+'\n    # TODO: implement the task. Keep the function name and parameters.\n    pass\n'
 LESSONS.append(dict(id=f'w{w:02d}-l{number}',week=w,title=title,goal=goal,teach=explain,example=EXAMPLES[w],starter=s,reference=textwrap.dedent(reference).strip()+'\n',tests=[{'label':label,'code':code} for label,code in checks],hints=hints,packages=packages or [],language='python',prediction={'code':'items = [2, 4, 6]\nprint(items[-1])','options':['2','4','6','An error'],'correct':2,'explanation':'Index -1 selects the last list element.'},reflection='Explain the main decision in your code, and describe one test that could catch a mistake.',change='Change one example input, predict the result, then run it. Add a boundary case to your own local test file.',resources=[{'title':'Official reference for this topic','url':REFS[w]}]))
L(1,'Expressions and return values','Return the total price after a percentage discount.','Python evaluates arithmetic in an order. Parentheses make that order clear. Return sends a value to the caller; printing only displays it. A 10% discount keeps 90% of the original amount.','def discounted_total(price, quantity, discount):','''
def discounted_total(price, quantity, discount):
    return round(price * quantity * (1 - discount / 100), 2)
''',[('Ordinary purchase','assert discounted_total(20,3,10)==54'),('Zero quantity','assert discounted_total(9,0,20)==0'),('Fractional price','assert discounted_total(12.5,2,20)==20')],['Calculate price times quantity first.','Multiply by 1 minus discount divided by 100.','Round the returned amount to two decimal places.'])
L(1,'Types and conversion','Convert numeric text into a Celsius temperature.','Input text is a string even when it looks like a number. float accepts decimals. Converting early separates input handling from arithmetic. Fahrenheit to Celsius is (F - 32) times 5/9.','def celsius(fahrenheit_text):','''
def celsius(fahrenheit_text):
    return round((float(fahrenheit_text) - 32) * 5 / 9, 2)
''',[('Freezing point','assert celsius("32")==0'),('Boiling point','assert celsius("212")==100'),('Negative temperature','assert celsius("-40")==-40')],['Convert the text with float.','Subtract 32 before multiplying.','Use round(result, 2).'])
L(1,'Text and readable output','Build a greeting from a name and integer score.','strip removes surrounding whitespace. An f-string inserts values into text without manual concatenation. Keep punctuation and spaces intentional because output is a user interface.','def greeting(name, score):','''
def greeting(name, score):
    return f"Hello {name.strip()}, your score is {score}/10."
''',[('Ordinary greeting','assert greeting("Asha",8)=="Hello Asha, your score is 8/10."'),('Trim spaces','assert greeting("  Krish  ",0)=="Hello Krish, your score is 0/10."'),('Full score','assert greeting("Sam",10).endswith("10/10.")')],['Clean the name with strip.','Use an f-string.','Match the comma, spaces and final full stop.'])
L(2,'Choose the right branch','Return pass for a score of 40 or more, otherwise retry. Reject scores outside 0–100.','Check invalid input before normal branches. The boundary value 40 belongs to pass; using > would incorrectly reject it. Tests just below and at a boundary are especially useful.','def result(score):','''
def result(score):
    if not 0 <= score <= 100:
        return "invalid"
    return "pass" if score >= 40 else "retry"
''',[('At pass boundary','assert result(40)=="pass"'),('Below boundary','assert result(39)=="retry"'),('Out of range','assert result(-1)==result(101)=="invalid"')],['Validate the range first.','Use >= at the pass boundary.','Return exactly invalid, pass or retry.'])
L(2,'Trace a for loop','Sum only positive amounts from a list.','An accumulator starts at zero and changes on each matching item. Trace total after every iteration before running the loop. Empty input naturally keeps the initial value.','def positive_total(amounts):','''
def positive_total(amounts):
    total = 0
    for amount in amounts:
        if amount > 0:
            total += amount
    return total
''',[('Mixed values','assert positive_total([3,-2,5,0])==8'),('Empty input','assert positive_total([])==0'),('All negative','assert positive_total([-4,-1])==0')],['Start total at zero.','Only add an amount greater than zero.','Return after the loop, not inside it.'])
L(2,'A terminating while loop','Count the decimal digits of an integer, including zero.','A while loop must make progress toward its stopping condition. Integer division by 10 removes the final decimal digit. abs handles a negative sign; zero itself has one digit.','def digit_count(number):','''
def digit_count(number):
    number = abs(number)
    if number == 0:
        return 1
    count = 0
    while number:
        count += 1
        number //= 10
    return count
''',[('Zero','assert digit_count(0)==1'),('Negative value','assert digit_count(-120)==3'),('Longer value','assert digit_count(987654)==6')],['Remove the sign with abs.','Handle zero separately.','Use //= 10 inside the loop so it terminates.'])
L(3,'Lists and safe iteration','Return the names longer than three characters, without changing the original list.','Lists preserve order. Create a new result instead of removing items while iterating. Removing from the same list can skip the next item as indexes move.','def long_names(names):','''
def long_names(names):
    return [name for name in names if len(name) > 3]
''',[('Filter in order','assert long_names(["Li","Asha","Krish"])==["Asha","Krish"]'),('Empty list','assert long_names([])==[]'),('Original unchanged','original=["Li","Asha"]; long_names(original); assert original==["Li","Asha"]')],['Make a new list.','Test len(name) > 3.','A comprehension can combine iteration and filtering.'])
L(3,'Dictionaries and counting','Count each category in an expense list.','A dictionary maps a key to a value. get(key, 0) supplies an initial count for a new key. This avoids a separate branch for the first occurrence.','def category_counts(categories):','''
def category_counts(categories):
    counts = {}
    for category in categories:
        counts[category] = counts.get(category, 0) + 1
    return counts
''',[('Repeated categories','assert category_counts(["food","travel","food"])=={"food":2,"travel":1}'),('Empty input','assert category_counts([])=={}'),('Single value','assert category_counts(["books"])=={"books":1}')],['Start with an empty dictionary.','Read the old count with get.','Increase by one and store under the same key.'])
L(3,'Sets and uniqueness','Return unique lowercase names in sorted order.','A set removes duplicates but does not provide a useful display order. Normalize case before deduplication, then sort for predictable output. This is a small data-cleaning pipeline.','def unique_names(names):','''
def unique_names(names):
    return sorted({name.strip().lower() for name in names})
''',[('Normalize duplicates','assert unique_names(["Asha"," asha ","SAM"])==["asha","sam"]'),('Empty input','assert unique_names([])==[]'),('Sorted output','assert unique_names(["z","a"])==["a","z"]')],['Apply strip and lower to each name.','Collect the cleaned names in a set.','Use sorted to return a list.'])
L(4,'Functions with one responsibility','Return a mean, or None for empty input.','A function should have one clearly stated job. Distinguish no data from a real mean of zero. Returning None makes that difference explicit and lets the caller choose a message.','def mean(values):','''
def mean(values):
    if not values:
        return None
    return sum(values) / len(values)
''',[('Ordinary mean','assert mean([2,4,6])==4'),('No data','assert mean([]) is None'),('Zero is a valid mean','assert mean([-2,2])==0')],['Check whether the list is empty.','Divide sum by length only for nonempty input.','Return None for no data.'])
L(4,'Compose smaller functions','Return a budget summary with total, remaining and overspent.','Separate totals from presentation. A dictionary gives names to results so callers do not have to remember tuple positions. Overspent means remaining is negative, not zero.','def budget(income, expenses):','''
def budget(income, expenses):
    total = sum(expenses)
    remaining = income - total
    return {"total": total, "remaining": remaining, "overspent": remaining < 0}
''',[('Within budget','assert budget(100,[20,30])=={"total":50,"remaining":50,"overspent":False}'),('Exactly balanced','assert budget(50,[50])["overspent"] is False'),('Over budget','assert budget(20,[30])["remaining"]==-10 and budget(20,[30])["overspent"] is True')],['Calculate the total once.','Subtract from income.','Return named fields in a dictionary.'])
L(4,'Fix an off-by-one bug','Correct the function so it sums the integers from 1 through n, including n.','range stops before its second argument. An off-by-one bug often survives one example and appears at small boundaries. Try n=1 and n=0 before assuming a loop is correct.','def sum_to(n):','''
def sum_to(n):
    return sum(range(1, n + 1))
''',[('Smallest positive value','assert sum_to(1)==1'),('Include endpoint','assert sum_to(5)==15'),('Zero','assert sum_to(0)==0')],['Inspect the exclusive upper bound of range.','The last number must be n.','Use range(1, n + 1).'],starter='def sum_to(n):\n    return sum(range(1, n))  # Bug: misses the last value\n')
L(5,'Exceptions with useful defaults','Parse a positive integer, returning None for invalid or nonpositive text.','Catch the exception you expect, not every possible failure. int raises ValueError for text such as abc or 2.5. A valid integer can still violate your business rule.','def positive_integer(text):','''
def positive_integer(text):
    try:
        value = int(text)
    except (ValueError, TypeError):
        return None
    return value if value > 0 else None
''',[('Valid input','assert positive_integer("12")==12'),('Bad text','assert positive_integer("abc") is None'),('Nonpositive','assert positive_integer("0") is None and positive_integer("-2") is None')],['Wrap int(text) in try/except.','Catch ValueError and TypeError.','Check the resulting integer is positive.'])
L(5,'Write and read a text file','Save a note in UTF-8 and return its content after reading it back.','A file survives beyond a function call. with closes handles even when an exception occurs. Encoding should be explicit so names and non-English text round-trip correctly.','def save_note(path, text):','''
def save_note(path, text):
    with open(path, "w", encoding="utf-8") as file:
        file.write(text)
    with open(path, encoding="utf-8") as file:
        return file.read()
''',[('Round trip','assert save_note("note.txt","learn loops")=="learn loops"'),('Overwrite','assert save_note("note.txt","new")=="new"'),('Unicode','assert save_note("unicode.txt","નમસ્તે")=="નમસ્તે"')],['Open the path in write mode with UTF-8.','Write the supplied text, not a hardcoded note.','Read the same path using the same encoding.'])
L(5,'Handle a missing file','Return a file’s lines without trailing newlines, or an empty list if it is missing.','Missing data can be a normal situation. FileNotFoundError is specific; catching it should not hide permission errors or other bugs. splitlines handles the newline boundaries.','def read_notes(path):','''
def read_notes(path):
    try:
        with open(path, encoding="utf-8") as file:
            return file.read().splitlines()
    except FileNotFoundError:
        return []
''',[('Missing file','assert read_notes("missing-file.txt")==[]'),('Read two lines','open("lines.txt","w").write("a\\nb\\n"); assert read_notes("lines.txt")==["a","b"]'),('Empty file','open("empty.txt","w").close(); assert read_notes("empty.txt")==[]')],['Use a try block around the file operation.','Catch FileNotFoundError only.','Return read().splitlines() for an existing file.'])
L(6,'CSV with column names','Parse CSV text into name/score dictionaries with integer scores.','CSV is structured text, not a list of comma splits. DictReader uses the header as field names and correctly handles quoted values containing commas. Convert the score after parsing.','def parse_scores(text):','''
import csv, io
def parse_scores(text):
    return [{"name": row["name"], "score": int(row["score"])} for row in csv.DictReader(io.StringIO(text))]
''',[('Two records','assert parse_scores("name,score\\nAsha,8\\nSam,9\\n")==[{"name":"Asha","score":8},{"name":"Sam","score":9}]'),('Quoted name','assert parse_scores(\'name,score\\n"Patel, Krish",10\\n\')[0]["name"]=="Patel, Krish"'),('Header only','assert parse_scores("name,score\\n")==[]')],['Use csv.DictReader with io.StringIO.','Read fields by their header names.','Convert score using int.'])
L(6,'JSON and data boundaries','Round-trip a dictionary through JSON and return the decoded value.','JSON is a language-independent data format. Serialization turns values into text; parsing turns that text into values. JSON object keys must be strings. Do not use eval to parse untrusted data.','def json_copy(record):','''
import json
def json_copy(record):
    return json.loads(json.dumps(record, ensure_ascii=False))
''',[('Nested values','assert json_copy({"scores":[1,2],"active":True})=={"scores":[1,2],"active":True}'),('Unicode','assert json_copy({"name":"કૃશ"})["name"]=="કૃશ"'),('Empty object','assert json_copy({})=={}')],['Serialize with json.dumps.','Parse with json.loads.','Never replace parsing with eval.'])
L(6,'SQL parameters','Store names in an in-memory SQLite table and return them sorted.','SQL uses a different syntax from Python. Values belong in placeholders, not string concatenation. Parameter binding correctly handles apostrophes and prevents values from becoming SQL commands.','def stored_names(names):','''
import sqlite3
def stored_names(names):
    with sqlite3.connect(":memory:") as db:
        db.execute("CREATE TABLE students(name TEXT)")
        db.executemany("INSERT INTO students VALUES (?)", [(name,) for name in names])
        return [row[0] for row in db.execute("SELECT name FROM students ORDER BY name")]
''',[('Sort records','assert stored_names(["Sam","Asha"])==["Asha","Sam"]'),('Apostrophe remains data','assert stored_names(["O\'Brien"])==["O\'Brien"]'),('Empty table','assert stored_names([])==[]')],['Create a fresh in-memory connection.','Insert with ? placeholders and one-item tuples.','Select with ORDER BY and extract the first column.'])
L(7,'Classes and state','Implement Cart with add(price), total(), and independent state per instance.','An object bundles state with behaviour. Put the list on self inside __init__; a class-level shared list would make different customers share a cart. Reject negative prices explicitly.','class Cart:','''
class Cart:
    def __init__(self):
        self.prices = []
    def add(self, price):
        if price < 0:
            raise ValueError("price must be nonnegative")
        self.prices.append(price)
    def total(self):
        return sum(self.prices)
''',[('Add prices','c=Cart(); c.add(2); c.add(3); assert c.total()==5'),('Independent carts','a=Cart(); b=Cart(); a.add(7); assert b.total()==0'),('Reject negative price','c=Cart(); caught=False\ntry: c.add(-1)\nexcept ValueError: caught=True\nassert caught')],['Create self.prices in __init__.','Append a valid price in add.','Return sum(self.prices) in total.'])
L(7,'Reusable modules','Return a slug containing lowercase words joined by hyphens.','Small pure helpers can move into their own module and be imported. split without an argument treats runs of whitespace as one separator. Join uses one separator between pieces, with no trailing separator.','def slug(text):','''
def slug(text):
    return "-".join(text.lower().split())
''',[('Ordinary title','assert slug("Python Course")=="python-course"'),('Whitespace','assert slug("  Build   apps ")=="build-apps"'),('Empty title','assert slug("")==""')],['Lowercase the text.','Split it into words.','Join using a hyphen.'])
L(7,'Validate an API response','Extract numeric Celsius values from an API fixture, ignoring incomplete entries.','An API can return missing or malformed data. Read optional fields with get and validate types before arithmetic. bool is a subclass of int in Python, so exclude booleans explicitly when expecting a measurement.','def temperatures(payload):','''
def temperatures(payload):
    result = []
    for row in payload.get("readings", []):
        value = row.get("celsius")
        if isinstance(value, (int, float)) and not isinstance(value, bool):
            result.append(value)
    return result
''',[('Mixed response','assert temperatures({"readings":[{"celsius":21},{},{"celsius":"warm"},{"celsius":True},{"celsius":0}]})==[21,0]'),('Missing field','assert temperatures({})==[]'),('Decimal reading','assert temperatures({"readings":[{"celsius":21.5}]})==[21.5]')],['Use payload.get("readings", []).','Check the measurement is int or float.','Explicitly exclude bool.'])
L(8,'Tests that reveal a bug','Return whether a string is a palindrome after removing spaces and normalizing case.','Test ordinary inputs and counterexamples. A result that is always True passes positive examples but fails a negative case. State which punctuation rules apply; here only spaces and case are ignored.','def palindrome(text):','''
def palindrome(text):
    clean = text.replace(" ", "").lower()
    return clean == clean[::-1]
''',[('Palindrome','assert palindrome("Never odd or even") is True'),('Counterexample','assert palindrome("python") is False'),('Empty string','assert palindrome("") is True')],['Remove spaces and lowercase.','Reverse with slicing.','Compare the cleaned string with its reverse.'])
L(8,'Debug from a failing assertion','Fix the function so it never changes its caller’s list.','Assignment copies a reference, not the list. If a helper must preserve input, copy before mutation or build a new result. Tests should inspect the original after the call.','def add_tax(prices):','''
def add_tax(prices):
    return [round(price * 1.1, 2) for price in prices]
''',[('Tax calculation','assert add_tax([10,20])==[11,22]'),('Input preserved','p=[10]; add_tax(p); assert p==[10]'),('Empty list','assert add_tax([])==[]')],['The original list must remain unchanged.','Build a new list with a comprehension.','Round each multiplied amount to two decimal places.'],starter='def add_tax(prices):\n    for i in range(len(prices)):\n        prices[i] *= 1.1\n    return prices\n')
L(8,'Package a useful command','Summarize words with total and unique counts.','A package should expose a small, predictable interface. Keep the calculation separate from a CLI so tests do not need to interact with input prompts. The README should state the normalization rules.','def word_summary(text):','''
def word_summary(text):
    words = text.lower().split()
    return {"total": len(words), "unique": len(set(words))}
''',[('Repeated words','assert word_summary("AI ai Python")=={"total":3,"unique":2}'),('No words','assert word_summary("  ")=={"total":0,"unique":0}'),('Newlines','assert word_summary("a\\nb")["total"]==2')],['Lowercase and split on whitespace.','Count the list and set lengths separately.','Return total and unique as dictionary keys.'])
# Web lessons use a sandbox preview and static structural checks. Interactions are
# visible in the preview; event behaviour must also be tested by the student.
def H(title,goal,teach,starter,reference,checks,hints):
 L(9,title,goal,teach,'',reference,[],hints,starter=starter)
 LESSONS[-1].update(language='html',tests=checks,example=EXAMPLES[9])
H('Semantic HTML and accessible forms','Create a main section with a heading and a labelled email input.','HTML describes meaning. A label connected through for and id helps keyboard and screen-reader users. Use an actual button and an email input instead of clickable text.', '<!doctype html><html><body>\n<!-- Build your portfolio contact form here. -->\n</body></html>', '<!doctype html><html lang="en"><body><main><h1>Asha’s portfolio</h1><form><label for="email">Email</label><input id="email" type="email" required><button type="submit">Contact me</button></form></main></body></html>',[{'label':'Main heading','selector':'main h1','kind':'text'},{'label':'Labelled email','kind':'emailLabel'},{'label':'Submit button','selector':'form button[type="submit"]','kind':'text'}],['Start with main and h1.','Create a form with an email input whose id is email.','Use label for="email" and a submit button.'])
H('Responsive CSS with clear focus','Build two project cards in a responsive grid and a visible keyboard focus style.','A flexible grid avoids fixed phone widths. repeat(auto-fit, minmax(...)) adapts cards to space. A focus-visible outline shows a keyboard user where they are. Resize the preview on your laptop to review the layout.', '<!doctype html><html><head><style>/* Add layout and focus styles. */</style></head><body><main><h1>Projects</h1><section class="cards"><article><h2>Notes app</h2><a href="#notes">Read more</a></article><article><h2>Quiz</h2><a href="#quiz">Read more</a></article></section></main></body></html>', '<!doctype html><html><head><style>.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}a:focus-visible{outline:3px solid #0055aa}</style></head><body><main><h1>Projects</h1><section class="cards"><article><h2>Notes app</h2><a href="#notes">Read more</a></article><article><h2>Quiz</h2><a href="#quiz">Read more</a></article></section></main></body></html>',[{'label':'Two project cards','selector':'.cards article','kind':'count','min':2},{'label':'Flexible grid declaration','kind':'cssGrid'},{'label':'Keyboard focus rule','kind':'focus'}],['Use display:grid on cards.','Use repeat(auto-fit,minmax(220px,1fr)).','Add a :focus-visible selector with an outline.'])
H('JavaScript and DOM events','Make a counter button increment the displayed count on every click.','Use addEventListener and textContent. The counter state is a number; displaying it is a separate step. Test two clicks and refresh. The structure checks below do not certify the behaviour; try it in the preview.', '<!doctype html><html><body><h1>Study timer practice</h1><p id="count">0</p><button id="add" type="button">Add session</button><script>\n// Find the button, store count and register a click handler.\n</script></body></html>', '<!doctype html><html><body><h1>Study sessions</h1><p id="count">0</p><button id="add" type="button">Add session</button><script>let count=0;document.getElementById("add").addEventListener("click",()=>{count+=1;document.getElementById("count").textContent=count;});</script></body></html>',[{'label':'Native button','selector':'button#add','kind':'text'},{'label':'Initial counter','selector':'#count','kind':'zero'},{'label':'Event handler and safe update','kind':'event'}],['Select #add and #count.','Keep count outside the event handler.','Increment count and set the paragraph’s textContent on click.'])
L(10,'Validate a request body','Normalize a task title, rejecting non-text or empty titles.','HTTP requests carry untrusted data. Validation belongs on the server even when a form checks input. Here we test pure business logic; the downloadable FastAPI project uses it inside a real route.','def task_title(payload):','''
def task_title(payload):
    title = payload.get("title")
    if not isinstance(title, str) or not title.strip():
        raise ValueError("title required")
    return title.strip()
''',[('Trim title','assert task_title({"title":"  Read  "})=="Read"'),('Reject blank','try:\n task_title({"title":" "})\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")'),('Reject numeric','try:\n task_title({"title":12})\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")')],['Use payload.get.','Check isinstance(title,str) before strip.','Raise ValueError for blank or non-text input.'])
L(10,'HTTP status and missing records','Return (200, task) when found, otherwise (404, error).','Status codes communicate the result separately from response data. A missing record is not an empty successful response. Avoid confusing a list position with a record ID.','def find_task(tasks, task_id):','''
def find_task(tasks, task_id):
    for task in tasks:
        if task["id"] == task_id:
            return (200, task)
    return (404, {"error":"not found"})
''',[('Existing record','assert find_task([{"id":4,"title":"Read"}],4)==(200,{"id":4,"title":"Read"})'),('Missing record','assert find_task([{"id":4}],1)[0]==404'),('Empty database','assert find_task([],1)==(404,{"error":"not found"})')],['Loop over records.','Compare each id to the requested id.','Return 404 after the loop.'])
L(10,'Pagination as an API contract','Return a page slice using zero-based offset and positive limit. Reject invalid ranges.','Pagination keeps responses bounded. Document whether your offset starts at zero. Negative offsets in Python have a meaning, but they are invalid for this API contract.','def page(items, offset, limit):','''
def page(items, offset, limit):
    if offset < 0 or limit <= 0:
        raise ValueError("invalid range")
    return items[offset:offset+limit]
''',[('Middle page','assert page([1,2,3,4],1,2)==[2,3]'),('Beyond end','assert page([1],5,2)==[]'),('Invalid range','for offset,limit in [(-1,2),(0,0)]:\n try:\n  page([],offset,limit)\n except ValueError:\n  pass\n else:\n  raise AssertionError("Expected ValueError")')],['Validate before slicing.','The end index is offset plus limit.','Let slicing handle offsets beyond the list.'])
L(11,'Separate response states','Map a status and task count to a useful frontend message.','A frontend needs loading, success, empty and error states. This Python helper models the response-to-message decision; the project kit implements fetch in JavaScript. Never show success when the HTTP request failed.','def status_message(status, count):','''
def status_message(status, count):
    if status != 200:
        return "Could not load tasks"
    return "No tasks yet" if count == 0 else f"{count} tasks loaded"
''',[('Empty response','assert status_message(200,0)=="No tasks yet"'),('Successful list','assert status_message(200,3)=="3 tasks loaded"'),('Failed request','assert status_message(500,3)=="Could not load tasks"')],['Check status first.','Handle an empty successful response.','Use the count in the normal message.'])
L(11,'Render text safely','Escape &, <, >, quotes and apostrophes for an HTML text fragment.','Prefer textContent in JavaScript. This exercise shows why interpolating arbitrary text into HTML is dangerous. Escaping is context-specific; this helper is not a general URL or script sanitizer.','def safe_text(text):','''
import html
def safe_text(text):
    return html.escape(text, quote=True)
''',[('Markup','assert safe_text("<img>")=="&lt;img&gt;"'),('Ampersand','assert safe_text("A&B")=="A&amp;B"'),('Quotes','assert safe_text(chr(34)+chr(39))=="&quot;&#x27;"')],['Use the standard library html module.', 'Call html.escape.', 'Keep quote=True.'])
L(11,'Keep stable identity when updating','Return a new list with the matching task marked done; preserve other records and input.','UI state updates should use stable IDs, not current positions. Returning new records avoids changing shared data unexpectedly. A missing ID leaves the data unchanged.','def complete_task(tasks, task_id):','''
def complete_task(tasks, task_id):
    return [dict(task, done=True) if task["id"] == task_id else dict(task) for task in tasks]
''',[('Mark correct ID','assert complete_task([{"id":9,"done":False}],9)==[{"id":9,"done":True}]'),('No matching ID','assert complete_task([{"id":9,"done":False}],1)==[{"id":9,"done":False}]'),('Preserve input','a=[{"id":9,"done":False}];complete_task(a,9);assert a[0]["done"] is False')],['Build a new list.','Copy each dictionary.','Set done=True only for matching IDs.'])
L(12,'Read configuration with safe defaults','Accept only demo or production mode; missing or unknown values become demo.','Configuration changes between environments. A safe default keeps a demo predictable. Real server secrets must stay in environment variables on the server, never bundled into a static page or Git commit.','def app_mode(environment):','''
def app_mode(environment):
    value = environment.get("APP_MODE", "demo")
    return value if value in {"demo", "production"} else "demo"
''',[('Default','assert app_mode({})=="demo"'),('Explicit production','assert app_mode({"APP_MODE":"production"})=="production"'),('Unknown value','assert app_mode({"APP_MODE":"debug"})=="demo"')],['Use get with a default.','Allow only two known values.','Return demo for any other value.'])
L(12,'Do not leak internals in errors','Return a public error containing a request ID, without including the exception text.','A server can log detailed failures internally while returning a generic message. Trace IDs let a developer investigate. Passwords, tokens, SQL and stack traces should not appear in public error responses.','def public_error(error, request_id):','''
def public_error(error, request_id):
    return {"error":"Something went wrong", "request_id":request_id}
''',[('Useful identifier','assert public_error(Exception("secret"),"r1")=={"error":"Something went wrong","request_id":"r1"}'),('No leaked text','assert "password" not in str(public_error(Exception("password=123"),"r2"))'),('Stable contract','assert set(public_error(ValueError(),"r3"))=={"error","request_id"}')],['Do not stringify the exception in the response.','Use a fixed public message.','Include the supplied request_id.'])
L(12,'A reproducible health report','Report ready only when the database and model are both available.','A health endpoint should describe an actual dependency check. A static green badge cannot prove that the application works. A demo can use simple checks, but production needs timeouts, logs and operational monitoring.','def health(database_ok, model_ok):','''
def health(database_ok, model_ok):
    return {"ready":bool(database_ok and model_ok)}
''',[('Ready','assert health(True,True)=={"ready":True}'),('Database unavailable','assert health(False,True)=={"ready":False}'),('Model unavailable','assert health(True,False)=={"ready":False}')],['Both dependencies must be healthy.','Combine with and.','Return a bool under ready.'])
L(13,'Inspect missing values before modelling','Return missing and total counts for a sequence; None is the missing marker.','Before training, inspect the dataset and document units and labels. Missing data is different from zero. This course uses small synthetic data for learning; it cannot establish real-world model quality.','def missing_report(values):','''
def missing_report(values):
    return {"missing":sum(value is None for value in values), "total":len(values)}
''',[('Mixed data','assert missing_report([0,None,2,None])=={"missing":2,"total":4}'),('No data','assert missing_report([])=={"missing":0,"total":0}'),('Zero is valid','assert missing_report([0,0])["missing"]==0')],['Check value is None, not its truthiness.','Sum the boolean checks.','Count all values for total.'])
L(13,'Split before fitting preprocessing','Split ordered records at an index without overlapping or modifying the input.','Separate training and test data before fitting a scaler or vocabulary. Random or stratified splitting is usually preferable for model evaluation; this deterministic split is a small exercise in keeping sets separate. Time-series data needs chronological splitting.','def split_records(records, train_size):','''
def split_records(records, train_size):
    if not 0 < train_size < len(records):
        raise ValueError("both sets must be nonempty")
    return records[:train_size], records[train_size:]
''',[('Disjoint sets','a,b=split_records([1,2,3,4],2);assert a==[1,2] and b==[3,4]'),('Input preserved','r=[1,2,3];split_records(r,1);assert r==[1,2,3]'),('Reject empty test','try:\n split_records([1,2],2)\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")')],['Require an index strictly inside the list.','Slice before and after train_size.','Return two lists as a tuple.'])
L(13,'Fit normalization on training data','Scale a value using training minimum and maximum. Return zero for a constant training range.','Fit statistics using training data only. A test value can fall outside 0–1; clipping would be an extra modelling decision. Fitting on the test set leaks information into evaluation.','def scale(value, training_values):','''
def scale(value, training_values):
    low, high = min(training_values), max(training_values)
    return 0.0 if high == low else (value-low)/(high-low)
''',[('Training midpoint','assert scale(5,[0,10])==0.5'),('Test outside range','assert scale(20,[0,10])==2'),('Constant range','assert scale(5,[5,5])==0')],['Find min and max of training_values.','Handle a zero denominator.','Use (value-low)/(high-low).'])
L(14,'Fit a real text classifier','Train and return a fitted TF-IDF + LogisticRegression pipeline.','A pipeline fits text preprocessing and a classifier together on training examples. This is a small machine-learning model, not an LLM. Keep test messages out of fit. The download includes synthetic training and held-out fixtures and a baseline.','def train_classifier(texts, labels):','''
from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
def train_classifier(texts, labels):
    model = make_pipeline(TfidfVectorizer(), LogisticRegression(random_state=42))
    return model.fit(texts, labels)
''',[('Fitted text model','m=train_classifier(["invoice payment","billing refund","login password","account login"],["billing","billing","technical","technical"]);assert m.predict(["invoice"])[0]=="billing"'),('Second class','m=train_classifier(["invoice payment","billing refund","login password","account login"],["billing","billing","technical","technical"]);assert m.predict(["login"])[0]=="technical"'),('Batch prediction','m=train_classifier(["invoice payment","billing refund","login password","account login"],["billing","billing","technical","technical"]);assert len(m.predict(["invoice","password"]))==2')],['Use make_pipeline.','Combine TfidfVectorizer with LogisticRegression(random_state=42).','Return model.fit(texts, labels).'],packages=['scikit-learn'])
L(14,'Evaluate held-out predictions','Return accuracy, rejecting empty or mismatched lists.','Accuracy is correct predictions divided by the number of examples. Always show the sample count and compare a majority-class baseline. A tiny fixture is for learning, not a reliable claim about future users.','def accuracy(actual, predicted):','''
def accuracy(actual, predicted):
    if not actual or len(actual) != len(predicted):
        raise ValueError("nonempty equal lengths required")
    return sum(a==p for a,p in zip(actual,predicted))/len(actual)
''',[('Partial accuracy','assert accuracy(["a","b","a"],["a","a","a"])==2/3'),('All wrong','assert accuracy([1],[2])==0'),('Invalid lengths','for a,p in [([],[]),([1],[])]:\n try:\n  accuracy(a,p)\n except ValueError:\n  pass\n else:\n  raise AssertionError("Expected ValueError")')],['Validate lengths first.','Count matching pairs with zip.','Divide by len(actual).'])
L(14,'Inspect errors instead of hiding them','Return indexes of wrong predictions. Reject lists of unequal length.','An overall score hides patterns. Read wrong examples, check the label quality and document what the model confuses. Do not repeatedly tune on your final test set; use a validation set for development.','def mistakes(actual, predicted):','''
def mistakes(actual, predicted):
    if len(actual) != len(predicted):
        raise ValueError("length mismatch")
    return [i for i,(a,p) in enumerate(zip(actual,predicted)) if a!=p]
''',[('Find mistakes','assert mistakes(["a","b","a"],["b","b","b"])==[0,2]'),('No mistakes','assert mistakes([1],[1])==[]'),('Reject mismatch','try:\n mistakes([1],[])\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")')],['Check list lengths.','Enumerate zipped pairs.','Collect indexes whose labels differ.'])
L(15,'Retrieve notes with evidence','Return matching note IDs ranked by shared lowercase words, breaking ties by ID.','Retrieval finds existing evidence. This simple lexical search does not understand paraphrases like an embedding model. Return IDs so a reader can inspect the source, and return no match when overlap is zero.','def search_notes(query, notes):','''
def search_notes(query, notes):
    words=set(query.lower().split())
    ranked=[]
    for note in notes:
        score=len(words & set(note["text"].lower().split()))
        if score:
            ranked.append((-score,note["id"]))
    return [note_id for _,note_id in sorted(ranked)]
''',[('Rank evidence','assert search_notes("python lists",[{"id":"b","text":"python"},{"id":"a","text":"python lists"}])==["a","b"]'),('No match','assert search_notes("weather",[{"id":"a","text":"python"}])==[]'),('Stable ties','assert search_notes("python",[{"id":"b","text":"Python"},{"id":"a","text":"python"}])==["a","b"]')],['Split lowercase text into word sets.','Count the intersection.','Sort pairs of negative score and ID.'])
L(15,'Ground an answer in its source','Return a selected note’s exact text and ID, or an explicit no-match response.','A retrieval assistant should not invent an answer when evidence is absent. This function returns stored text, not generated prose. A future LLM layer must preserve attribution and be evaluated separately.','def grounded_answer(note_id, notes):','''
def grounded_answer(note_id, notes):
    for note in notes:
        if note["id"]==note_id:
            return {"answer":note["text"], "source":note_id}
    return {"answer":"No matching note", "source":None}
''',[('Attributed answer','assert grounded_answer("a",[{"id":"a","text":"Lists keep order"}])=={"answer":"Lists keep order","source":"a"}'),('Missing source','assert grounded_answer("x",[])=={"answer":"No matching note","source":None}'),('Exact evidence','assert grounded_answer("b",[{"id":"b","text":"Stored evidence."}])["answer"]=="Stored evidence."')],['Find a note whose id matches.','Return its exact text and ID.','Use source=None when missing.'])
L(15,'Verify AI-suggested changes','Reject a patch review unless tests, explanation and secret checks are all satisfied.','AI can help draft code, but you own the result. Run tests, explain the change without the assistant and inspect for credentials. A checklist is a review reminder, not a security scanner or proof that code is correct.','def review_ready(tests_pass, can_explain, contains_secret):','''
def review_ready(tests_pass, can_explain, contains_secret):
    return bool(tests_pass and can_explain and not contains_secret)
''',[('Ready','assert review_ready(True,True,False) is True'),('Cannot explain','assert review_ready(True,False,False) is False'),('Secret or failing tests','assert review_ready(True,True,True) is False and review_ready(False,True,False) is False')],['Require tests and explanation.','Negate contains_secret.','Combine the three conditions.'])
L(16,'Capstone input contract','Validate a support message: trimmed text of 3–500 characters, otherwise ValueError.','Keep the capstone’s HTTP boundary small and explicit. A message length limit helps prevent accidental oversized requests. It does not replace authentication, rate limits or a production abuse strategy.','def support_message(payload):','''
def support_message(payload):
    message=payload.get("message")
    if not isinstance(message,str) or not 3<=len(message.strip())<=500:
        raise ValueError("message must be 3–500 characters")
    return message.strip()
''',[('Clean message','assert support_message({"message":"  login help  "})=="login help"'),('Too short','try:\n support_message({"message":"hi"})\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")'),('Too long','try:\n support_message({"message":"a"*501})\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")')],['Get message from the payload.','Check type before trimming.','Require an inclusive length range.'])
L(16,'Combine model and evidence','Build a response with category, evidence and demo disclaimer.','The model predicts a category; retrieval supplies stored evidence. These are separate operations with separate failure cases. The UI should say when no source matched and make the demo limitation visible.','def support_response(category, evidence):','''
def support_response(category, evidence):
    return {"category":category,"evidence":evidence,"disclaimer":"Demo model; check the source."}
''',[('Category','assert support_response("billing",None)["category"]=="billing"'),('Evidence preserved','e={"source":"n1","answer":"Read this"};assert support_response("technical",e)["evidence"]==e'),('Visible limitation','assert "Demo" in support_response("billing",None)["disclaimer"]')],['Return a dictionary.','Keep evidence unchanged, including None.','Include the exact disclaimer from the contract.'])
L(16,'Explain your project with measurable facts','Return a portfolio report with feature count, passing-test count and next step. Reject negative counts.','A useful internship portfolio shows what you built, how to run it, tests and limitations. Passing these lessons is practice evidence, not proof of job readiness. Record a demo, read unfamiliar code and explain decisions without copying the reference.','def portfolio_report(features, tests, next_step):','''
def portfolio_report(features, tests, next_step):
    if features<0 or tests<0:
        raise ValueError("counts must be nonnegative")
    return {"features":features,"tests":tests,"next_step":next_step.strip()}
''',[('Concrete report','assert portfolio_report(3,12," add auth ")=={"features":3,"tests":12,"next_step":"add auth"}'),('Zero counts','assert portfolio_report(0,0,"write tests")["tests"]==0'),('Reject negative','try:\n portfolio_report(-1,2,"x")\nexcept ValueError:\n pass\nelse:\n raise AssertionError("Expected ValueError")')],['Reject negative counts.','Trim next_step.','Return three explicitly named fields.'])
# Predictions are tied to each week's concept rather than an unrelated repeated quiz.
P=[('print(20 * 3 * 0.9)',['54.0','60','6','Error'],0,'Multiplication gives 54.0.'),('print(40 >= 40)',['False','True','40','Error'],1,'The boundary is included by >=.'),('print(len(set([1, 1, 2])))',['3','1','2','Error'],2,'A set keeps two distinct values.'),('def f(x):\n    return x * 2\nprint(f(3))',['3','6','None','Error'],1,'return gives the caller six.'),('print(int("12"))',['12','"12"','None','Error'],0,'int converts numeric text.'),('import json\nprint(json.loads(\'{"n": 2}\')["n"])',['n','2','None','Error'],1,'The parsed dictionary holds integer two.'),('a=[1]\nb=a\nb.append(2)\nprint(a)',['[1]','[2]','[1, 2]','Error'],2,'Both names reference the same list.'),('assert 2 + 2 == 5',['Passes','AssertionError','5','None'],1,'A false assertion raises an exception.'),('<button type="button">Add</button>',['Text only','Keyboard-operable button','Python function','Database'],1,'A native button supports keyboard interaction.'),('Missing requested record',['200','201','404','500'],2,'404 communicates not found.'),('Use textContent for user text',['Parses HTML','Displays text','Runs Python','Saves database'],1,'textContent displays text without HTML parsing.'),('Secret API key belongs in',['HTML','Public Git','Server environment','CSS'],2,'Secrets belong on the server.'),('Fit scaler using',['Test set','All data before split','Training set','Labels only'],2,'Training-only statistics prevent leakage.'),('3 correct out of 4',['0.25','0.5','0.75','1'],2,'Accuracy is 3/4.'),('No matching source',['Invent an answer','Say no match','Always first note','Hide source'],1,'No-match behaviour avoids unsupported evidence.'),('Internship portfolio should show',['Only certificates','Only screenshots','Runnable work and tests','Guaranteed job'],2,'Reviewable projects provide evidence of skill.')]
for lesson in LESSONS:
 if lesson['id']=='w06-l3': lesson['packages']=['sqlite3']
 code,options,correct,explanation=P[lesson['week']-1]
 lesson['prediction']=dict(code=code,options=options,correct=correct,explanation=explanation)
weeks=[dict(number=i,title=t,project=p,outcome=o,requirements=req,download=f'projects/week-{i:02d}.zip',checkpoint=i%4==0) for i,(t,p,o,req) in enumerate(W,1)]
course=dict(version=1,title='Python for Internship',weeks=weeks,lessons=LESSONS)
(R/'curriculum.json').write_text(json.dumps(course,ensure_ascii=False,indent=2),encoding='utf-8')
(R/'curriculum.js').write_text('window.INTERNSHIP_COURSE = '+json.dumps(course,ensure_ascii=False)+';\n',encoding='utf-8')
print(f'Authored {len(LESSONS)} lessons across {len(weeks)} weeks')
