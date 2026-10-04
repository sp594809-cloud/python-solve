"""Read authored recipes without executing integration or writing generated banks."""
import ast,json,contextlib,io
from pathlib import Path
import sympy as S
ROOT=Path(__file__).resolve().parents[1]
def load_recipes():
 tree=ast.parse((ROOT/'maths/tools/build_solutions.py').read_text());recipes={}
 def capture(kind):
  def run(i,*args,**kwargs):recipes[i]={'kind':kind,'args':args,'kwargs':kwargs}
  return run
 replaced={'indefinite','multi','line','work','green','add'}
 nodes=[]
 for node in tree.body:
  if isinstance(node,ast.FunctionDef) and node.name in replaced:continue
  if isinstance(node,ast.Expr) and isinstance(node.value,ast.Call):
   call=node.value
   if isinstance(call.func,ast.Attribute) and call.func.attr in ['write_text','run_path']:continue
  nodes.append(node)
 ns={'__file__':str(ROOT/'maths/tools/build_solutions.py')}
 ns.update({name:capture(name) for name in replaced if name!='add'});ns['add']=lambda *a,**k:None
 # Source entries need existing steps because later authoring clauses insert notes.
 source=json.loads((ROOT/'maths/data/source-questions.json').read_text());book=json.loads((ROOT/'maths/data/solutions.json').read_text())
 class ReaderPath:
  pass
 # Replace Q initialization with the complete existing bank held in memory.
 for node in nodes:
  if isinstance(node,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='Q' for t in node.targets):
   node.value=ast.Name(id='_existing',ctx=ast.Load())
 ns['_existing']={q['id']:dict(q) for q in book['questions']}
 with contextlib.redirect_stdout(io.StringIO()):exec(compile(ast.fix_missing_locations(ast.Module(body=nodes,type_ignores=[])),'maths-recipes','exec'),ns)
 return recipes,ns
if __name__=='__main__':
 r,_=load_recipes();print('Recipes captured:',len(r))
