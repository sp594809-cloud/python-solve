"""Validate coverage, syntax, figures, and optionally every Python sample execution."""
import argparse,ast,json,os,re,subprocess,sys,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--execute',action='store_true');args=parser.parse_args()
books=json.loads(subprocess.check_output(['node',str(root/'scripts/export-python-bank.cjs')],text=True))
fixtures=json.loads((root/'scripts/python-sample-fixtures.json').read_text())
count=0;executed=0
for book,units in books.items():
 questions=[q for u in units.values() for q in u['mcqs']+u['coding']]
 expected=734 if book=='sem3' else 210
 assert sorted(q['srNo'] for q in questions)==list(range(1,expected+1)),f'{book} coverage'
 assert len({q['id'] for q in questions})==expected,f'{book} duplicate IDs'
 for u in units.values():
  for q in u['mcqs']:
   assert len(q['options'])==4 and q.get('correct') and q.get('explanation'),q['id']
  for q in u['coding']:
   count+=1;code=q['solution']
   assert code and q['explanation'],q['id']
   for figure in q.get('figures',[]):assert (root/'python'/figure).is_file(),figure
   modules=re.findall(r'^# File:\s*([A-Za-z_][A-Za-z_0-9]*\.py)[^\n]*\n([\s\S]*?)(?=^# File:|\Z)',code,re.M)
   for name,content in modules or [('solution.py',code)]:ast.parse(content,filename=f"{book}-{q['srNo']}-{name}")
   if not args.execute or 'import streamlit' in code:continue
   key=f"{book}:{q['srNo']}";fixture=fixtures['questions'][key]
   with tempfile.TemporaryDirectory(prefix='python-pb-') as directory:
    for name,content in fixtures['files'].items():Path(directory,name).write_text(content)
    for name,content in modules:Path(directory,name).write_text(content)
    program=next(content for name,content in modules if name=='main.py') if modules else code
    runner="import builtins,sys,matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nplt.show=lambda:None\nvalues=iter("+repr(fixture['inputs'])+")\nbuiltins.input=lambda prompt='':next(values)\n"+program
    run=subprocess.run([sys.executable,'-c',runner],cwd=directory,env={**os.environ,'MPLBACKEND':'Agg','PYTHONPATH':directory},capture_output=True,text=True,timeout=20)
    assert run.returncode==0,(key,run.stderr)
    # Normalize whitespace only; compare all printed values and messages.
    assert ' '.join(run.stdout.split())==' '.join(fixture['output'].split()),(key,run.stdout,fixture['output'])
    executed+=1
print(f'Coverage: 210 + 734 questions. Syntax: {count} programs. Sample executions: {executed}.')
if args.execute:print('Streamlit programs are syntax checked here; run them with streamlit run app.py.')
