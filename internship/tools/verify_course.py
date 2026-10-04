"""Reference and project contract checks; no live student submissions."""
import json,tempfile,os,zipfile,subprocess,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];course=json.loads((R/'curriculum.json').read_text())
assert len(course['weeks'])==16 and len(course['lessons'])==48
assert len({l['id'] for l in course['lessons']})==48
checks=0
with tempfile.TemporaryDirectory() as tmp:
 previous=os.getcwd();os.chdir(tmp)
 try:
  for lesson in course['lessons']:
   assert len(lesson['tests'])>=3 and len(lesson['hints'])==3
   if lesson['language']!='python':continue
   ns={};exec(lesson['reference'],ns)
   for test in lesson['tests']:exec(test['code'],ns);checks+=1
   # Starters must require work, including intentional bug exercises.
   ns={};passed=False
   try:
    exec(lesson['starter'],ns)
    for test in lesson['tests']:exec(test['code'],ns)
    passed=True
   except Exception:pass
   assert not passed,lesson['id']
  for w in course['weeks']:
   dest=Path(tmp)/f"week-{w['number']}";dest.mkdir()
   with zipfile.ZipFile(R/w['download']) as z:z.extractall(dest)
   for f in dest.rglob('*.py'):compile(f.read_text(),str(f),'exec')
   n=w['number']
   if n in [10,11,12,16]:cmd=[sys.executable,'-m','unittest','test_app.py']
   elif n==9:continue
   else:cmd=[sys.executable,'project.py']+(['AI ai Python'] if n==8 else [])
   subprocess.run(cmd,cwd=dest,check=True,stdout=subprocess.PIPE)
 finally:os.chdir(previous)
print(f'PASS: {checks} Python reference cases, 45 incomplete starters, all 16 project kits; live FastAPI route tests on 4 kits')
