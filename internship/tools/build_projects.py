"""Build runnable weekly projects plus exercise starters and reference tests."""
import json,zipfile,textwrap
from pathlib import Path
R=Path(__file__).resolve().parents[1]
course=json.loads((R/'curriculum.json').read_text())
# Each early project runs without third-party dependencies.
projects={
1:'''def quiz(answers):
    questions=[("2 + 3", "5"),("Python file extension", ".py"),("Type of 3", "int")]
    score=0
    for (question,expected),answer in zip(questions,answers):
        if not answer.strip():
            raise ValueError("Answer must not be empty")
        score+=answer.strip().lower()==expected
    return score
if __name__=="__main__":
    print("Demo score:",quiz(["5",".py","int"]),"/3")
''',
2:'''def summarize(expenses):
    total=0; counts={}
    for category,amount in expenses:
        if not isinstance(amount,(int,float)) or amount<0:
            raise ValueError("Use nonnegative numeric amounts")
        total+=amount;counts[category]=counts.get(category,0)+1
    return {"total":round(total,2),"categories":counts}
if __name__=="__main__":
    print(summarize([("food",50),("travel",20),("food",30)]))
''',
3:'''class ContactBook:
    def __init__(self):self.contacts={}
    def add(self,name,email):
        key=name.strip().lower()
        if not key or key in self.contacts:raise ValueError("Missing or duplicate name")
        self.contacts[key]=email
    def find(self,name):return self.contacts.get(name.strip().lower())
    def update(self,name,email):
        key=name.strip().lower()
        if key not in self.contacts:raise KeyError(key)
        self.contacts[key]=email
if __name__=="__main__":
    book=ContactBook();book.add("Asha","asha@example.test");print(book.find("ASHA"))
''',
4:'''def total(expenses):return sum(expenses)
def budget(income,expenses):
    spent=total(expenses)
    return {"spent":spent,"remaining":income-spent,"overspent":spent>income}
def display(summary):return f"Remaining: {summary['remaining']} | Overspent: {summary['overspent']}"
if __name__=="__main__":print(display(budget(200,[30,70])))
''',
5:'''from pathlib import Path
import argparse
def read(path):return Path(path).read_text(encoding="utf-8") if Path(path).exists() else ""
def save(path,note):
    with open(path,"a",encoding="utf-8") as f:f.write(note+"\\n")
if __name__=="__main__":
    parser=argparse.ArgumentParser();parser.add_argument("--add");parser.add_argument("--file",default="notes.txt");args=parser.parse_args()
    if args.add:save(args.file,args.add)
    print(read(args.file) or "No notes yet. Use --add 'your note'.")
''',
6:'''import csv,io,json,sqlite3
def import_records(csv_text):
    records=list(csv.DictReader(io.StringIO(csv_text)))
    with sqlite3.connect(":memory:") as db:
        db.execute("CREATE TABLE students(name TEXT, score INTEGER)")
        db.executemany("INSERT INTO students VALUES (?,?)",[(r["name"],int(r["score"])) for r in records])
        return [{"name":name,"score":score} for name,score in db.execute("SELECT name,score FROM students ORDER BY name")]
if __name__=="__main__":print(json.dumps(import_records("name,score\\nAsha,8\\nO'Neil,9\\n"),ensure_ascii=False,indent=2))
''',
7:'''class Inventory:
    def __init__(self):self.stock={}
    def add(self,name,quantity,price):
        if quantity<0 or price<0:raise ValueError("Negative stock or price")
        self.stock[name]={"quantity":quantity,"price":price}
    def value(self):return sum(v["quantity"]*v["price"] for v in self.stock.values())
def parse_stock(payload):return [(r["name"],r["quantity"],r["price"]) for r in payload.get("items",[])]
if __name__=="__main__":
    inventory=Inventory()
    for row in parse_stock({"items":[{"name":"pen","quantity":3,"price":10}]}):inventory.add(*row)
    print("Stock value:",inventory.value())
''',
8:'''def summarize(text):
    words=text.lower().split();return {"total":len(words),"unique":len(set(words))}
if __name__=="__main__":
    import argparse
    p=argparse.ArgumentParser();p.add_argument("text");args=p.parse_args();print(summarize(args.text))
''',
13:'''from collections import Counter
from sklearn.model_selection import train_test_split
records=[{"hours":i,"passed":int(i>=4)} for i in range(1,9)] # synthetic, not students
train,test=train_test_split(records,test_size=0.25,random_state=42,stratify=[r["passed"] for r in records])
print("Synthetic records:",len(records));print("Missing hours:",sum(r["hours"] is None for r in records))
print("Class counts:",dict(Counter(r["passed"] for r in records)))
low=min(r["hours"] for r in train);high=max(r["hours"] for r in train)
print("Training min/max:",low,high);print("Scaled test:",[(r["hours"]-low)/(high-low) for r in test])
''',
14:'''from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.dummy import DummyClassifier
from sklearn.metrics import accuracy_score,classification_report
texts=["invoice payment","billing refund","refund invoice","payment charge","login password","account login","reset password","login access"]
labels=["billing"]*4+["technical"]*4
heldout=["invoice charge","refund payment","password login","account password"]
truth=["billing","billing","technical","technical"]
model=make_pipeline(TfidfVectorizer(),LogisticRegression(random_state=42));model.fit(texts,labels)
predicted=model.predict(heldout)
baseline=DummyClassifier(strategy="most_frequent").fit([[0]]*len(labels),labels)
print("Synthetic held-out sample count:",len(truth));print("Model accuracy:",accuracy_score(truth,predicted));print("Baseline:",accuracy_score(truth,baseline.predict([[0]]*len(truth))))
print(classification_report(truth,predicted,zero_division=0))
for text,a,p in zip(heldout,truth,predicted):
    if a!=p:print("Mistake:",text,a,p)
print("Tiny synthetic fixture: not real-world performance evidence.")
''',
15:'''NOTES=[{"id":"n1","text":"Lists preserve order and allow duplicates"},{"id":"n2","text":"Sets contain unique values"},{"id":"n3","text":"Functions return values to callers"}]
def search(query):
    words=set(query.lower().split());ranked=[]
    for note in NOTES:
        score=len(words & set(note["text"].lower().split()))
        if score:ranked.append((-score,note["id"],note["text"]))
    return [{"source":source,"text":text} for _,source,text in sorted(ranked)]
if __name__=="__main__":
    import argparse
    p=argparse.ArgumentParser();p.add_argument("query",nargs="?",default="lists order");print(search(p.parse_args().query) or "No matching source")
'''}
# The first projects use only concepts already taught in their week.
projects[1]='name = "Asha"\nminutes = 20\nprice = 25\nquantity = 3\ntotal = price * quantity\nchange = 100 - total\nprint(f"{name}: {minutes} minutes of Python")\nprint("Bill:", total, "Change:", change)\n'
projects[2]='name = "  Asha  ".strip()\nscore = 65\nif score >= 80:\n    advice = "Try a new challenge"\nelif score >= 40:\n    advice = "Practise one weak topic"\nelse:\n    advice = "Review the worked example"\nprint(f"{name}: {advice}")\n'
projects[3]='scores = {"Python": 8, "Maths": 6, "English": 7}\ntotal = 0\nfor subject, score in scores.items():\n    total += score\n    if score < 7:\n        print("Revise:", subject)\nprint("Total:", total)\nprint("Distinct subjects:", len(set(scores)))\n'
portfolio='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>My Python portfolio</title><style>body{font:18px system-ui;margin:auto;max-width:960px;padding:24px;background:#f2f6fa;color:#173044}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}article{background:white;padding:20px;border-radius:16px}button:focus-visible,a:focus-visible{outline:3px solid #06735d}</style><main><h1>My Python portfolio</h1><p>Replace this page with your own projects and honest learning notes.</p><section class="cards"><article><h2>Notes app</h2><p>File handling and validation.</p></article><article><h2>Ticket classifier</h2><p>A small model trained on synthetic data.</p></article></section><h2>Study sessions</h2><p id="count">0</p><button id="add">Add session</button><form><label for="email">Your email</label><input id="email" type="email" required><button>Contact (demo only)</button></form></main><script>let n=0;document.querySelector('#add').addEventListener('click',()=>document.querySelector('#count').textContent=++n);document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();alert('Demo form: no message is sent.')});</script></html>'''
api='''from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field, field_validator
app=FastAPI(title="Student task demo")
tasks=[]
class TaskInput(BaseModel):
    title:str=Field(min_length=1,max_length=200)
    @field_validator("title")
    @classmethod
    def clean(cls,value):
        if not value.strip():raise ValueError("title required")
        return value.strip()
@app.get("/")
def home():return FileResponse(Path(__file__).with_name("index.html"))
@app.get("/health")
def health():return {"ready":True,"mode":"demo"}
@app.get("/tasks")
def list_tasks():return tasks
@app.post("/tasks",status_code=201)
def add_task(data:TaskInput):
    task={"id":len(tasks)+1,"title":data.title,"done":False};tasks.append(task);return task
@app.patch("/tasks/{task_id}")
def complete(task_id:int):
    for task in tasks:
        if task["id"]==task_id:task["done"]=True;return task
    raise HTTPException(404,"Task not found")
'''
dashboard='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Task dashboard</title><style>body{font:18px system-ui;max-width:720px;margin:auto;padding:24px}button,input{font:inherit;padding:10px}li{margin:12px 0}</style><main><h1>Task dashboard</h1><p>Local demo. Tasks reset when the server restarts. No accounts or private data.</p><form><label for="title">Task title</label><input id="title" maxlength="200" required><button>Add</button></form><p id="status" role="status"></p><ul id="tasks"></ul></main><script>const status=document.querySelector('#status');async function load(){status.textContent='Loading…';try{const r=await fetch('/tasks');if(!r.ok)throw Error('Could not load tasks');const tasks=await r.json();const list=document.querySelector('#tasks');list.replaceChildren();tasks.forEach(t=>{const li=document.createElement('li');li.textContent=t.title+(t.done?' ✓':'');if(!t.done){const b=document.createElement('button');b.textContent='Complete';b.onclick=async()=>{try{const r=await fetch('/tasks/'+t.id,{method:'PATCH'});if(!r.ok)throw Error('Could not update');await load()}catch(e){status.textContent=e.message}};li.append(b)}list.append(li)});status.textContent=tasks.length?tasks.length+' tasks loaded':'No tasks yet'}catch(e){status.textContent=e.message}}document.querySelector('form').onsubmit=async e=>{e.preventDefault();try{const r=await fetch('/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title:document.querySelector('#title').value})});if(!r.ok)throw Error('Could not save: check title');document.querySelector('#title').value='';await load()}catch(e){status.textContent=e.message}};load();</script></html>'''
capstone='''from pathlib import Path
from fastapi import FastAPI
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field, field_validator
from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
app=FastAPI(title="AI support desk — learning demo")
TRAIN=["invoice payment","billing refund","refund invoice","payment charge","login password","account login","reset password","login access"]
LABELS=["billing"]*4+["technical"]*4
model=make_pipeline(TfidfVectorizer(),LogisticRegression(random_state=42)).fit(TRAIN,LABELS)
NOTES=[{"id":"billing-1","text":"For an invoice or payment issue, contact billing with the invoice number."},{"id":"login-1","text":"For login password issues, use the password reset option. Never share your password."}]
class Message(BaseModel):
    message:str=Field(min_length=3,max_length=500)
    @field_validator("message")
    @classmethod
    def clean(cls,v):
        if not 3<=len(v.strip())<=500:raise ValueError("Use 3–500 characters")
        return v.strip()
def evidence(query):
    words=set(query.lower().split());scores=[(len(words & set(n["text"].lower().split())),n) for n in NOTES];score,note=max(scores,key=lambda x:x[0]);return note if score else None
@app.get("/")
def home():return FileResponse(Path(__file__).with_name("index.html"))
@app.get("/health")
def health():return {"ready":True,"mode":"demo"}
@app.post("/support")
def support(data:Message):return {"category":str(model.predict([data.message])[0]),"evidence":evidence(data.message),"disclaimer":"Demo model trained on eight synthetic messages. Verify the source; no LLM is used."}
'''
caphtml='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI support desk demo</title><style>body{font:18px system-ui;max-width:760px;margin:auto;padding:24px;background:#eef6f4;color:#143e38}textarea{width:100%;min-height:100px;font:inherit}button{padding:12px;font:inherit}pre{white-space:pre-wrap}</style><main><h1>AI support desk</h1><p>A small classifier + lexical notes retrieval. Synthetic training data, no LLM, no private information.</p><form><label for="message">Support message (3–500 characters)</label><textarea id="message" minlength="3" maxlength="500" required></textarea><button>Classify and find evidence</button></form><p id="status" role="status"></p><pre id="result"></pre></main><script>document.querySelector('form').onsubmit=async e=>{e.preventDefault();const s=document.querySelector('#status');s.textContent='Working…';document.querySelector('#result').textContent='';try{const r=await fetch('/support',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:document.querySelector('#message').value})});if(!r.ok)throw Error('Request failed. Check message length.');const d=await r.json();document.querySelector('#result').textContent='Category: '+d.category+'\\nSource: '+(d.evidence?d.evidence.id+' — '+d.evidence.text:'No matching source')+'\\n'+d.disclaimer;s.textContent='Done'}catch(error){s.textContent=error.message}};</script></html>'''
api_tests='''import unittest
from fastapi.testclient import TestClient
from app import app
class Routes(unittest.TestCase):
    def test_contract(self):
        c=TestClient(app)
        self.assertEqual(c.get('/health').status_code,200)
        self.assertEqual(c.get('/').status_code,200)
        self.assertEqual(c.post('/tasks',json={"title":" "}).status_code,422)
        r=c.post('/tasks',json={"title":" Read "});self.assertEqual(r.status_code,201)
        self.assertEqual(r.json()['title'],'Read')
        self.assertTrue(c.patch('/tasks/'+str(r.json()['id'])).json()['done'])
        self.assertEqual(c.patch('/tasks/9999').status_code,404)
if __name__=='__main__':unittest.main()
'''
captests='''import unittest
from fastapi.testclient import TestClient
from app import app
class Support(unittest.TestCase):
    def test_contract(self):
        c=TestClient(app)
        self.assertEqual(c.post('/support',json={"message":"hi"}).status_code,422)
        self.assertEqual(c.post('/support',json={"message":"a"*501}).status_code,422)
        d=c.post('/support',json={"message":"invoice payment"}).json()
        self.assertEqual(d['category'],'billing');self.assertEqual(d['evidence']['id'],'billing-1')
        d=c.post('/support',json={"message":"login password"}).json();self.assertEqual(d['category'],'technical')
        self.assertIsNone(c.post('/support',json={"message":"weather outside"}).json()['evidence'])
        self.assertEqual(c.get('/').status_code,200)
if __name__=='__main__':unittest.main()
'''
for week in course['weeks']:
 n=week['number'];files={};ls=[l for l in course['lessons'] if l['week']==n]
 brief=f"# Week {n}: {week['project']}\n\n{week['outcome']}\n\n## Your assignment\n"+'\n'.join('- '+r for r in week['requirements'])
 brief+='\n\nThe runnable demo is a starting point. Read it, rebuild one part without looking, add your own feature, and write a regression test. Submit a repository link and explanation in the course. Project review in the app is self-reported, not instructor verification.\n\n'
 if n==9:
  files['index.html']=portfolio;brief+='Open index.html in your browser. Test keyboard navigation, two clicks, and narrow/wide windows. The contact form is demo only.\n'
 elif n in [10,11,12,16]:
  files.update({'app.py':capstone if n==16 else api,'index.html':caphtml if n==16 else dashboard,'test_app.py':captests if n==16 else api_tests,'requirements.txt':'fastapi==0.115.12\nuvicorn==0.34.2\nhttpx==0.28.1\n'+('scikit-learn==1.8.0\n' if n==16 else '')})
  brief+='## Run on a laptop (Python 3.11+)\n\n```sh\npython -m venv .venv\n# macOS/Linux: source .venv/bin/activate\n# Windows PowerShell: .venv\\Scripts\\Activate.ps1\npython -m pip install -r requirements.txt\npython -m unittest test_app.py\npython -m uvicorn app:app --reload\n```\n\nOpen http://127.0.0.1:8000 and /docs. Serve the frontend from this API; opening index.html directly will not make fetch work. Stop with Ctrl+C.\n\nLocal learning demo: no user accounts, persistent database, rate limits or production monitoring. Use only sample data. Do not expose private data or treat this as a production service.\n'
  if n==12:
   files['Dockerfile']='FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD ["python","-m","uvicorn","app:app","--host","0.0.0.0","--port","8000"]\n'
   brief+='\nOptional container: docker build -t study-demo . then docker run --rm -p 8000:8000 study-demo. Deployment depends on the host you select; configure its port, HTTPS and environment settings. Never commit real credentials.\n'
 elif n in projects:
  files['project.py']=projects[n];brief+='## Run\n\n```sh\npython project.py'+(' "AI ai Python"' if n==8 else '')+'\n```\n'
  if n in [13,14]:files['requirements.txt']='scikit-learn==1.8.0\n';brief+='Install requirements first: python -m pip install -r requirements.txt. Synthetic data is deliberately small; replace it with documented, permissioned data before making performance claims.\n'
  if n==8:
   files['test_project.py']='import unittest\nfrom project import summarize\nclass Summary(unittest.TestCase):\n def test_repeated(self):self.assertEqual(summarize("AI ai Python"),{"total":3,"unique":2})\n def test_empty(self):self.assertEqual(summarize(" "),{"total":0,"unique":0})\nif __name__=="__main__":unittest.main()\n'
   brief+='\nRun python -m unittest. Start local history with git init, git add ., git commit -m "Add working summary". Make a change and test before another commit. GitHub upload requires your own account.\n'
 for lesson in ls:
  ext='html' if lesson['language']=='html' else 'py';name=lesson['id']
  files[f'exercises/{name}.{ext}']=lesson['starter'];files[f'reference/{name}.{ext}']=lesson['reference']
  if ext=='py':
   checks='\n'.join(t['code'] for t in lesson['tests'] if 'code' in t)
   files[f'reference/test_{name}.py']=lesson['reference']+'\n'+checks+'\nprint("Checks passed")\n'
  brief+=f"\n## {lesson['title']}\n{lesson['goal']}\n\n{lesson['teach']}\n\nTry exercises/{name}.{ext} before reading reference/{name}.{ext}.\n"
 for lesson in ls:
  if lesson.get('walkthrough'):
   brief+='\n### '+lesson['title']+' — walkthrough\n'+'\n'.join('- '+line for line in lesson['walkthrough'])+'\n\nExpected output: '+lesson['expectedOutput']+'\n\nCommon mistake: '+lesson['commonMistake']+'\n'
  if lesson.get('videos'):
   v=lesson['videos'][0];brief+='\nWatch: ['+v['title']+']('+v['url']+') — '+v['creator']+' ('+v['language']+'). '+v['focus']+'\n'
 files['README.md']=brief;files['.gitignore']='.venv/\n__pycache__/\n.env\n*.sqlite\n'
 target=R/'projects'/f'week-{n:02d}.zip'
 with zipfile.ZipFile(target,'w',zipfile.ZIP_DEFLATED) as z:
  for path,content in files.items():z.writestr(path,content)
print('Built 16 project kits with exercises, runnable demos and reference checks')
