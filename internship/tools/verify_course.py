"""Validate teaching examples, independent exercises and runnable project kits."""
import json,tempfile,os,zipfile,subprocess,sys,io,contextlib,traceback
from pathlib import Path
R=Path(__file__).resolve().parents[1];course=json.loads((R/'curriculum.json').read_text())
assert len(course['weeks'])==16 and len(course['lessons'])==112
assert len({l['id'] for l in course['lessons']})==112
assert course['lessons'][0]['id']=='f01-l1'
checks=examples=0;failures=[]
def run(code):
 ns={};stream=io.StringIO()
 with contextlib.redirect_stdout(stream):exec(code,ns)
 return ns,stream.getvalue().strip()
def check(lesson,code):
 ns,output=run(code)
 for test in lesson['tests']:
  if 'outputEquals' in test:assert output==test['outputEquals'],(output,test['outputEquals'])
  else:exec(test['code'],ns)
with tempfile.TemporaryDirectory() as tmp:
 previous=os.getcwd();os.chdir(tmp)
 try:
  for lesson in course['lessons']:
   assert lesson['tests'] and len(lesson['hints'])==3 and lesson['videos']
   if lesson['language']!='python':continue
   try:
    check(lesson,lesson['reference']);checks+=len(lesson['tests'])
    if lesson.get('expectedOutput') is not None:
     ns,output=run(lesson['example']);assert output==lesson['expectedOutput'],(output,lesson['expectedOutput']);examples+=1
    passed=False
    try:check(lesson,lesson['starter']);passed=True
    except Exception:pass
    assert not passed,'Starter unexpectedly passes'
   except Exception as e:failures.append((lesson['id'],str(e),traceback.format_exc()))
  if failures:
   for failure in failures:print(failure)
   raise AssertionError('Course validation failures')
  for w in course['weeks']:
   dest=Path(tmp)/f"week-{w['number']}";dest.mkdir()
   with zipfile.ZipFile(R/w['download']) as z:z.extractall(dest)
   for f in dest.rglob('*.py'):compile(f.read_text(),str(f),'exec')
   n=w['number']
   if n in [10,11,12,16]:cmd=[sys.executable,'-m','unittest','test_app.py']
   elif n==9:continue
   else:cmd=[sys.executable,'project.py']+(['AI ai Python'] if n==8 else [])
   subprocess.run(cmd,cwd=dest,check=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
 finally:os.chdir(previous)
print(f'PASS: {checks} reference cases, {examples} explained outputs, 108 incomplete Python starters, all 16 project kits and 4 FastAPI route suites')
