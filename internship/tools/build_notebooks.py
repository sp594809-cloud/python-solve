"""Generate editable Jupyter notebooks; never include the reference answer."""
import json, ast
from pathlib import Path
R=Path(__file__).resolve().parents[1];course=json.loads((R/'curriculum.json').read_text());out=R/'notebook-content';out.mkdir(exist_ok=True)
def cell(kind,source,role=None):
 result={'cell_type':kind,'metadata':{'internship_role':role} if role else {},'source':source.splitlines(keepends=True)}
 if kind=='code':result.update(execution_count=None,outputs=[])
 return result
def notebook(cells,lesson_id=None):
 return {'nbformat':4,'nbformat_minor':5,'metadata':{'kernelspec':{'display_name':'Python (Pyodide)','language':'python','name':'python'},'language_info':{'name':'python'},'internship_lesson':lesson_id},'cells':[{**c,'id':f'cell-{i}'} for i,c in enumerate(cells)]}
intro=[cell('markdown','# Your first notebook\n\nClick a code cell, edit it, then press **Shift+Enter** or the Run triangle. On a phone, use the toolbar. Cells in one notebook share variables. Run top to bottom. If results look confusing, use **Kernel → Restart Kernel and Run All Cells**.\n\nIndentation still matters in Python. Use four spaces for a block. The editor helps indent but cannot decide your intended logic.\n\nUse the Download notebook toolbar button for a `.ipynb` backup. Browser storage is device-local and can be cleared. The course progress backup does not include JupyterLite files.'),cell('code','name = "Asha"\nscore = 8\n','student'),cell('code','print(f"Hello {name}, your score is {score}/10.")\n','student'),cell('markdown','## Try a block\n\nChange the condition. Keep the print line indented under `if`.'),cell('code','if score >= 5:\n    print("Keep going!")\n','student'),cell('markdown','## Notebook → course checks\n\nOpen a lesson notebook from the course. Write your solution in the student cell, run the check cell, then download your notebook. Back in that same lesson, use **Import notebook answer** and **Check my code** to record the result. Notebook results do not automatically mark course progress. Do not add secrets or personal data.')]
(out/'START-HERE.ipynb').write_text(json.dumps(notebook(intro),ensure_ascii=False,indent=1))
for l in course['lessons']:
 if l['language']!='python':continue
 cells=[cell('markdown',f"# Week {l['week']} · {l['title']}\n\n{l['goal']}\n\n{l['teach']}\n\n**Run cells top to bottom with Shift+Enter.** Cells share a kernel. Download a notebook backup before clearing browser data. These notebook checks do not automatically update the course progress."),cell('markdown','## 1. Example to explore\n\nRun the example, change its input and predict the new result. This cell is excluded when importing your answer into the course.'),cell('code',l['example']+'\n','example')]
 try:
  compile(l['example'], l['id'], 'exec')
 except SyntaxError:
  cells[-1]=cell('markdown','```javascript\n'+l['example']+'\n```\n\nThis example runs in a web page, not the Python kernel. The Python exercise below models the data contract used by that page.')
 if l['packages']:
  cells.append(cell('code','import sys\nif sys.platform == "emscripten":\n    import pyodide_js\n    from pyodide.ffi import to_js\n    await pyodide_js.loadPackage(to_js('+repr(l['packages'])+'))\n# On desktop Jupyter, install scikit-learn if this lesson requires it.\n','setup'))
 if l['packages']:
  setup=cells.pop();cells.insert(1,setup)
 if l.get('walkthrough'):
  cells.insert(1,cell('markdown','## Walkthrough\n\n'+'\n'.join('- '+line for line in l['walkthrough'])+'\n\nExpected output:\n```\n'+l['expectedOutput']+'\n```\n\nCommon mistake: '+l['commonMistake']))
 cells.extend([cell('markdown','## 2. Your solution\n\nEdit the starter below. Add extra code cells tagged `student` if you need them. The reference answer is not included. Keep the required function names.'),cell('code',l['starter'],'student'),cell('markdown','## 3. Check your code\n\nRun after your solution cell. A failed assertion is feedback. Read the case name and debug. Restart and Run All to check that your solution does not depend on stale state.'),cell('code','\n'.join(('print('+repr(t['label'])+')\n'+t['code']) if 'code' in t else 'print('+repr('Compare the output of your solution cell with: '+t['outputEquals'])+')' for t in l['tests'])+'\nprint("Automated assertions finished. Compare any output task above, then import your answer into the course to record checks.")\n','tests'),cell('markdown','## 4. Explain and try another input\n\n'+l['reflection']+'\n\nWrite your explanation here. Add a boundary test in a new cell. Do not change the supplied check cell to make a failing solution look successful.')])
 (out/f"{l['id']}.ipynb").write_text(json.dumps(notebook(cells,l['id']),ensure_ascii=False,indent=1),encoding='utf-8')
print('Built',sum(l['language']=='python' for l in course['lessons']),'lesson notebooks + START-HERE; starter code only')
