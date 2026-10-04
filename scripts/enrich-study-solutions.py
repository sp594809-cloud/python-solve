"""Enrich current banks without regenerating original PDF crops or rewriting source recipes."""
import json,signal,re
from pathlib import Path
import sympy as S
from maths_recipes import ROOT,load_recipes
recipes,ns=load_recipes();e=ns['e']
def ref(title,url):return {'title':title,'url':url}
base='https://openstax.org/books/'
partial=ref('OpenStax · Partial fractions',base+'calculus-volume-2/pages/3-4-partial-fractions')
parts=ref('OpenStax · Integration by parts',base+'calculus-volume-2/pages/3-1-integration-by-parts')
regions=ref('OpenStax · Double integrals and bounds',base+'calculus-volume-3/pages/5-2-double-integrals-over-general-regions')
change=ref('OpenStax · Change of variables',base+'calculus-volume-3/pages/5-7-change-of-variables-in-multiple-integrals')
vector=ref('OpenStax · Vector fields',base+'calculus-volume-3/pages/6-1-vector-fields')
conservative=ref('OpenStax · Conservative fields',base+'calculus-volume-3/pages/6-3-conservative-vector-fields')
line=ref('OpenStax · Line integrals',base+'calculus-volume-3/pages/6-2-line-integrals')
green=ref('OpenStax · Green’s theorem',base+'calculus-volume-3/pages/6-4-greens-theorem')
def absolute_logs(text):
 start=0
 while True:
  pos=text.find(r'\log{\left(',start)
  if pos<0:return text
  brace=pos+len(r'\log');depth=0;end=None
  for j in range(brace,len(text)):
   if text[j]=='{':depth+=1
   elif text[j]=='}':
    depth-=1
    if depth==0:end=j;break
  if end is None:return text
  inner=text[brace+1:end]
  if inner.startswith(r'\left(') and inner.endswith(r'\right)'):
   inner=inner[len(r'\left('):-len(r'\right)')]
   # a is a positive parameter; its logarithm is a denominator, not a primitive.
   if inner.strip()!='a':text=text[:brace+1]+r'\left|'+inner+r'\right|'+text[end:]
  start=pos+len(r'\log')+1
book=json.loads((ROOT/'maths/data/solutions.json').read_text());audit=json.loads((ROOT/'maths/data/numerical-audit.json').read_text());checked=set(audit['checkedQuestionIds']);added=0
for q in book['questions']:
 i=q['id'];kind=recipes.get(i,{}).get('kind')
 q['steps']=[s for s in q['steps'] if s['title']!='Evaluate the inner bounds explicitly']
 if i<=696:
  q['references']=[parts if i>=686 else partial]
  q['strategy']='Identify the substitution or algebraic rewrite first. Integrate each term, then include C. Differentiate the result to check it on an interval where the original expression is defined.'
  if i<=685:
   q['answer']=absolute_logs(q['answer'])
   for step in q['steps']:step['math']=absolute_logs(step.get('math',''))
 elif q['unit']==6:
  q['references']=[change if i in ns.get('polar',{}) or i in ns.get('changes',{}) else regions]
  q['strategy']='Read the inner differential first. Hold every other variable constant, evaluate upper minus lower, and carry the result to the next integral. Preserve the printed order and sign of the limits.'
 elif q['unit']==7:
  q['references']=[conservative if i>=942 else vector]
  q['strategy']='Distinguish the scalar function from the vector field. Apply the requested gradient, divergence or curl before substituting the point. For a directional derivative, normalize the direction vector first.'
 else:
  q['references']=[green if kind=='green' else conservative if kind=='work' else line]
  q['strategy']='Write the path orientation and the correct integral type first. Work uses F·r′; a scalar line integral uses |r′|; flux needs a chosen normal. Add all oriented segments.'
 if kind=='multi':
  f,limits=recipes[i]['args'][:2];v,lo,hi=limits[0]
  def timeout(*args):raise TimeoutError()
  signal.signal(signal.SIGALRM,timeout);signal.alarm(2)
  try:
   primitive=S.integrate(e(f),v,conds='none')
   if not primitive.has(S.Integral):
    result=primitive.subs(v,e(hi))-primitive.subs(v,e(lo))
    formula=r'\left['+S.latex(primitive)+r'\right]_{'+S.latex(v)+'='+S.latex(e(lo))+'}^{'+S.latex(e(hi))+'}='+S.latex(result)
    q['steps'].insert(2,{'title':'Evaluate the inner bounds explicitly','text':'Treat the remaining variables as constants. Substitute the upper bound and subtract the lower-bound value. Simplify this expression in the next step.','math':formula});added+=1
  except (TimeoutError,ValueError,NotImplementedError):pass
  finally:signal.alarm(0)
 q['verification']={'text':'Checked by numerical differentiation or quadrature at sample values. This checks the calculation, not every source transcription or all parameter cases.'} if i in checked else None
q={q['id']:q for q in book['questions']}
q[683]['answer']=r'\begin{cases}-\cos x-\sin x+C_1,&\sin x\geq\cos x\\\cos x+\sin x+C_2,&\sin x<\cos x\end{cases}'
for i,title,formula,text in [(668,'Handle a = 1 separately',r'a=1:\quad x^2+\ln|x|+6x+C','For this case the integrand becomes 2x + 1/x + 6, with x ≠ 0.'),(696,'Handle n = 0 separately',r'n=0:\quad\frac{(2x-1)^3}{6}+C','The sine/cosine expression divides by n, so use this polynomial primitive when n is zero.')]:
 if not any(s['title']==title for s in q[i]['steps']):q[i]['steps'].append({'title':title,'math':formula,'text':text})
for unit in [6,7,8]:(ROOT/f'maths/data/unit-{unit}-solutions.json').write_text(json.dumps([q for q in book['questions'] if q['unit']==unit],ensure_ascii=False,indent=2)+'\n')
(ROOT/'maths/data/solutions.json').write_text(json.dumps(book,ensure_ascii=False,indent=2)+'\n');(ROOT/'maths/data/solutions.js').write_text('window.MATHS_BOOK='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
for ch in [3,4]:
 path=ROOT/f'probability/data/chapter-{ch}.json';b=json.loads(path.read_text())
 for q in b['questions']:
  if ch==3:
   q['references']=[ref('NIST · Skewness and kurtosis','https://www.itl.nist.gov/div898/handbook/eda/section3/eda35b.htm')]
   q['strategy']='Identify whether values are raw observations, frequencies or class intervals. Keep full precision until the final answer. Check whether the question asks for a raw moment or a central moment.'
  else:
   rank=any('rank' in s['title'].lower() for s in q['steps'])
   q['references']=[ref('SciPy · Spearman correlation and average ranks' if rank else 'SciPy · Pearson correlation','https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats/'+('spearmanr' if rank else 'pearsonr')+'.html')]
   q['strategy']='Keep each x,y pair together. '+('Give tied scores average ranks and correlate those ranks; the shortcut 1−6Σd²/[n(n²−1)] requires no ties.' if rank else 'Centre the values around their means. For y-on-x use Sxy/Sxx; for x-on-y use Sxy/Syy. These two lines are fitted separately.')
 path.write_text(json.dumps(b,ensure_ascii=False,indent=2)+'\n')
 name='PROBABILITY_CHAPTER_3' if ch==3 else 'PROBABILITY_CHAPTER_4'
 # Keep the bank’s existing browser global.
 js=ROOT/f'probability/data/chapter-{ch}.js';prefix=js.read_text().split('=',1)[0]
 js.write_text(prefix+'='+json.dumps(b,ensure_ascii=False,separators=(',',':'))+';\n')
print('Enriched 381 Maths and 140 P&S solutions; explicit inner-bound steps:',added)
