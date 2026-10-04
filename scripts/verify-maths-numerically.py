"""Independent quadrature/finite-difference checks against displayed LaTeX answers.
Requires SymPy + antlr4 4.11, NumPy and SciPy. Recipe transcription is not PDF OCR validation.
"""
import json,math,warnings,re
import sympy as S
import numpy as np
from scipy.integrate import quad,IntegrationWarning
from sympy.parsing.latex import parse_latex
from maths_recipes import ROOT,load_recipes
recipes,ns=load_recipes();e=ns['e'];x=ns['x'];t=ns['t'];coords=ns['coords']
book=json.loads((ROOT/'maths/data/solutions.json').read_text());questions={q['id']:q for q in book['questions']}
params={'a':0.8,'b':0.7,'n':3}
def fixed(v):return e(v).subs({s:params[str(s)] for s in e(v).free_symbols if str(s) in params})
def displayed(i):
 # Log absolute values have the same local derivative as a continuous complex log branch.
 text=questions[i]['answer'].replace(r'\left|',r'\left(').replace(r'\right|',r'\right)').replace(' + C','').replace(r'\operatorname{atan}',r'\arctan').replace(r'\operatorname{asin}',r'\arcsin')
 special={656:x*S.sqrt(x*x+9)/2+S.Rational(9,2)*S.asinh(x/3),661:S.asinh(4*x)/4,684:S.asinh(S.tan(x)/2)}
 text=re.sub(r'(\\log\{\\left\(.*?\\right\)\})\^\{(\d+)\}',r'\\left(\1\\right)^{\2}',text)
 text=re.sub(r'([a-z]|\\pi)\s+\\left\(',r'\1 \\cdot \\left(',text)
 out=special.get(i)
 if out is None:out=parse_latex(text)
 return out.subs({s:(S.E if str(s)=='e' else S.pi if str(s)=='pi' else params[str(s)]) for s in out.free_symbols if str(s) in ['e','pi'] or str(s) in params})
def nested(f,limits):
 f=fixed(f);limits=[(v,fixed(lo),fixed(hi)) for v,lo,hi in limits]
 variables=[v for v,lo,hi in limits]
 integrand=S.lambdify(variables,f,'numpy')
 bounds=[(S.lambdify(variables[j+1:],lo,'numpy'),S.lambdify(variables[j+1:],hi,'numpy')) for j,(v,lo,hi) in enumerate(limits)]
 def run(index,subs):
  if index<0:return float(integrand(*[subs[v] for v in variables]))
  v,lo,hi=limits[index];outer=[subs[w] for w in variables[index+1:]];aa=float(bounds[index][0](*outer));bb=float(bounds[index][1](*outer))
  return quad(lambda value:run(index-1,{**subs,v:value}),aa,bb,epsabs=1e-8,epsrel=1e-8,limit=160)[0]
 return run(len(limits)-1,{})
checked=[];failures=[]
warnings.filterwarnings('error',category=IntegrationWarning)
for i,rec in sorted(recipes.items()):
 kind=rec['kind'];args=rec['args'];kw=rec['kwargs']
 try:
  F=displayed(i)
  if kind=='indefinite':
   f=fixed(args[0]);samples=0
   for value in [0.37,0.83,1.4,2.7,4.3,7.1,-4.7]:
    try:
     wanted=complex(f.subs(x,value).evalf());h=1e-5
     symbols={s:value for s in F.free_symbols if str(s)=='x'}
     left=complex(F.subs({s:value-h for s in symbols}).evalf());right=complex(F.subs({s:value+h for s in symbols}).evalf())
     if abs(wanted.imag)>1e-8:continue
     # Complex logarithm branches still have real derivative away from singularities.
     actual=(right-left)/(2*h)
     assert abs(actual-wanted)<2e-5*max(1,abs(wanted)),(actual,wanted,value)
     samples+=1
    except (TypeError,ValueError,OverflowError):continue
   assert samples>=2,('insufficient real samples',samples)
  elif kind=='multi':
   wanted=nested(args[0],args[1]);actual=float(F.evalf());assert math.isclose(actual,wanted,rel_tol=3e-6,abs_tol=3e-7),(actual,wanted)
  elif kind=='work':
   vector,pot,A,B=args[:4];field=S.Matrix([e(c) for c in vector]);path=S.Matrix([e(a)+t*(e(b)-e(a)) for a,b in zip(A,B)])
   f=(field.subs(dict(zip(coords,path)),simultaneous=True).dot(path.diff(t)))
   wanted=nested(f,[(t,0,1)]);actual=float(F.evalf());assert math.isclose(actual,wanted,rel_tol=3e-6,abs_tol=3e-7),(actual,wanted)
  elif kind=='line':
   field,paths=args;wanted=0
   for rr,lo,hi in paths:
    path=S.Matrix([e(c) for c in rr]);der=path.diff(t);subs=dict(zip(coords,path))
    if kw.get('scalar'):f=e(field).subs(subs,simultaneous=True)*S.sqrt(der.dot(der))
    else:
     vector=S.Matrix([e(c) for c in field]).subs(subs,simultaneous=True)
     f=vector[0]*der[1]-vector[1]*der[0] if kw.get('flux') else vector.dot(der)
    wanted+=nested(S.trigsimp(f),[(t,lo,hi)])
   actual=float(F.evalf());assert math.isclose(actual,wanted,rel_tol=3e-6,abs_tol=3e-7),(actual,wanted)
  elif kind=='green':
   P,Q,limits=args[:3];f=S.diff(e(P),x)+S.diff(e(Q),ns['y']) if kw.get('flux') else S.diff(e(Q),x)-S.diff(e(P),ns['y'])
   wanted=nested(f,limits);actual=float(F.evalf());assert math.isclose(actual,wanted,rel_tol=3e-6,abs_tol=3e-7),(actual,wanted)
  checked.append(i)
 except Exception as err:failures.append((i,type(err).__name__,str(err)[:250]))
print('Checked',len(checked),'displayed answers; independent numeric derivative/quadrature checks.')
print('Unresolved:',failures)
(ROOT/'maths/data/numerical-audit.json').write_text(json.dumps({'date':'2026-10-04','checkedQuestionIds':checked,'unresolved':[{'id':i,'reason':k+': '+msg} for i,k,msg in failures],'scope':'Numerical checks of authored recipes against displayed answers at sample parameters; not exhaustive PDF transcription or proof validation.'},indent=2))
if failures:raise SystemExit(1)
