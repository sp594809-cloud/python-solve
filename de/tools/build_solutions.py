"""Build reproducible DE solutions; exhaustive Boolean and circuit checks run on build."""
from pathlib import Path
import json,re,itertools,html
import sympy as sp
from sympy.logic.boolalg import SOPform,POSform,And,Or,Not
R=Path(__file__).resolve().parents[1]; qs=json.loads((R/'data/source.json').read_text()); Q={q['id']:q for q in qs};checks=0
E=lambda x:html.escape(str(x))
def p(s):return '<p>'+E(s)+'</p>'
def table(head,rows):return '<div class="table-scroll"><table><thead><tr>'+''.join('<th>'+E(v)+'</th>' for v in head)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+E(v)+'</td>' for v in row)+'</tr>' for row in rows)+'</tbody></table></div>'
def section(title,body):return '<section class="step"><h3>'+E(title)+'</h3>'+body+'</section>'
def put(i,answer,body,note=''):
 q=Q[i];q.update(answer=answer,solution=body,note=note,topic='Boolean algebra and minimization' if i<464 else 'Combinational arithmetic circuits')
def parse(s,names):
 s=s.replace(' ','');pos=0;vs={str(v):v for v in names}
 def atom():
  nonlocal pos
  if s[pos]=='(':
   pos+=1;r=orr();assert s[pos]==')';pos+=1
  else:r=vs[s[pos]];pos+=1
  while pos<len(s) and s[pos]=="'":r=~r;pos+=1
  return r
 def prod():
  nonlocal pos
  a=[atom()]
  while pos<len(s) and s[pos] not in '+)':a.append(atom())
  return And(*a)
 def orr():
  nonlocal pos
  a=[prod()]
  while pos<len(s) and s[pos]=='+':pos+=1;a.append(prod())
  return Or(*a)
 if s=='1':return sp.true
 r=orr();assert pos==len(s);return r
def fmt(e):
 if e==sp.true:return '1'
 if e==sp.false:return '0'
 if isinstance(e,Not):return fmt(e.args[0])+"'"
 if isinstance(e,And):return ''.join('('+fmt(a)+')' if isinstance(a,Or) else fmt(a) for a in e.args)
 if isinstance(e,Or):return ' + '.join(fmt(a) for a in e.args)
 return str(e)
def values(e,vs):return [j for j,b in enumerate(itertools.product([0,1],repeat=len(vs))) if bool(e.subs(dict(zip(vs,b))))]
def term(cube,names,pos=False):
 a=[str(v)+("'" if (c=='1' if pos else c=='0') else '') for v,c in zip(names,cube) if c!='-']
 return (' + '.join(a) if pos else ''.join(a)) or ('0' if pos else '1')
def cover(c):return {j for j in range(2**len(c)) if all(a=='-' or a==b for a,b in zip(c,format(j,f'0{len(c)}b')))}
def qm(on,dc,n):
 current={format(j,f'0{n}b') for j in on+dc};primes=set();stages=[]
 while current:
  stages.append(sorted(current));used=set();nxt=set()
  for a,b in itertools.combinations(sorted(current),2):
   dif=[i for i in range(n) if a[i]!=b[i]]
   if len(dif)==1 and a[dif[0]]!='-' and b[dif[0]]!='-':
    used|={a,b};i=dif[0];nxt.add(a[:i]+'-'+a[i+1:])
  primes|=current-used;current=nxt
 primes=sorted(c for c in primes if cover(c)&set(on));essential=[c for c in primes if any(sum(j in cover(d) for d in primes)==1 for j in cover(c)&set(on))]
 covers=[]
 for k in range(len(primes)+1):
  for cs in itertools.combinations(primes,k):
   if set(on)<=set().union(*(cover(c) for c in cs)):
    covers.append(cs)
  if covers:break
 best=min(sum(len(c.replace('-','')) for c in cs) for cs in covers)
 return primes,essential,[cs for cs in covers if sum(len(c.replace('-','')) for c in cs)==best],stages
class Network:
 def __init__(self,inputs):self.inputs=inputs;self.nodes=[];self.outputs={}
 def gate(self,op,*args,name=None):
  name=name or 'g'+str(len(self.nodes)+1);self.nodes.append((name,op,list(args)));return name
 def inv(self,a,kind='NOT'):return self.gate(kind,a,a) if kind in ['NAND','NOR'] else self.gate('NOT',a)
 def xor(self,a,b,kind):
  if kind=='NAND':
   t=self.gate('NAND',a,b);u=self.gate('NAND',a,t);v=self.gate('NAND',b,t);return self.gate('NAND',u,v)
  if kind=='NOR':
   t=self.gate('NOR',a,b);u=self.gate('NOR',a,t);v=self.gate('NOR',b,t);z=self.gate('NOR',u,v);return self.inv(z,'NOR')
  return self.gate('XOR',a,b)
 def logical(self,op,args,kind=None):
  if len(args)==1:return args[0]
  if kind is None:return self.gate(op,*args)
  a=args[0]
  for b in args[1:]:
   if (op,kind) in [('AND','NAND'),('OR','NOR')]:a=self.inv(self.gate(kind,a,b),kind)
   else:a=self.gate(kind,self.inv(a,kind),self.inv(b,kind))
  return a
 def evaluate(self,bits):
  env=dict(zip(self.inputs,bits))
  for name,op,args in self.nodes:
   v=[env[a] for a in args];env[name]={'AND':lambda:all(v),'NAND':lambda:not all(v),'OR':lambda:any(v),'NOR':lambda:not any(v),'NOT':lambda:not v[0],'XOR':lambda:sum(v)%2==1}[op]()
  return {k:int(env[v]) for k,v in self.outputs.items()}
 def show(self):
  # IEC rectangular logic symbols. Each card lists its named input wires; names link cards exactly.
  rows=[]
  for name,op,args in self.nodes:rows.append([name,op,', '.join(args)])
  out=table(['Wire','Gate','Input wire(s)'],rows)+p('Output connections: '+', '.join(k+' = '+v for k,v in self.outputs.items()))
  h=96*len(self.nodes)+30
  svg=f'<svg class="circuit" viewBox="0 0 640 {h}" role="img" aria-label="Circuit diagram with named input and output wires">'
  for j,(name,op,args) in enumerate(self.nodes):
   y=20+j*96
   svg+=f'<rect x="260" y="{y}" width="150" height="60" rx="3" fill="white" stroke="black"/><text x="335" y="{y+35}" text-anchor="middle">{op}</text>'
   for k,a in enumerate(args):
    yy=y+(k+1)*60/(len(args)+1);svg+=f'<path d="M 200 {yy} H 260" stroke="black"/><text x="192" y="{yy+4}" text-anchor="end">{E(a)}</text>'
   svg+=f'<path d="M 410 {y+30} H 475" stroke="black"/><text x="487" y="{y+35}">{E(name)}</text>'
  svg+='</svg>'
  return p('IEC gate diagram: matching wire names are electrically connected. Read from g1 downward; a tied-input NAND/NOR acts as an inverter.')+svg+out
 def verify(self,expected):
  global checks
  for bits in itertools.product([0,1],repeat=len(self.inputs)):
   assert self.evaluate(bits)==expected(bits),(self.nodes,bits,self.evaluate(bits),expected(bits));checks+=1

def expr_network(e,names,kind='NAND',two=False):
 net=Network(list(map(str,names)));cache={}
 def literal(x):
  if isinstance(x,Not):
   a=str(x.args[0]);
   if a not in cache:cache[a]=net.inv(a,kind)
   return cache[a]
  return str(x)
 # NAND/NOR two-level implementation, or explicitly decompose all gates into two-input primitives.
 inner=And if kind=='NAND' else Or;outer=Or if kind=='NAND' else And
 terms=e.args if isinstance(e,outer) else [e]
 if two:
  ws=[]
  for t in terms:
   args=t.args if isinstance(t,inner) else [t];ws.append(net.logical('AND' if kind=='NAND' else 'OR',[literal(a) for a in args],kind))
  out=net.logical('OR' if kind=='NAND' else 'AND',ws,kind)
 else:
  ws=[]
  for t in terms:
   args=t.args if isinstance(t,inner) else [t];ls=[literal(a) for a in args];ws.append(net.gate(kind,*ls) if len(ls)>1 else net.inv(ls[0],kind))
  out=net.gate(kind,*ws) if len(ws)>1 else net.inv(ws[0],kind)
 net.outputs={'F':out};return net

def solve(i,names='ABCD',on=None,zero=None,dc=None,expr=None,mode='map',kind=None,two=False,note=''):
 vs=sp.symbols(' '.join(names));n=len(vs);dc=sorted(set(dc or []))
 if expr is not None:on=values(parse(expr,vs),vs)
 if zero is not None:on=sorted(set(range(2**n))-set(zero)-set(dc))
 on=sorted(set(on));dc=sorted(set(dc)-set(on));off=sorted(set(range(2**n))-set(on)-set(dc));sop=SOPform(vs,on,dc);pos=POSform(vs,on,dc)
 for j,bits in enumerate(itertools.product([0,1],repeat=n)):
  if j not in dc:
   assert bool(sop.subs(dict(zip(vs,bits))))==(j in on)
   assert bool(pos.subs(dict(zip(vs,bits))))==(j in on)
 global checks;checks+=2*(2**n-len(dc))
 body=section('1. Set the input order',p('Use '+', '.join(names)+' from most significant to least significant bit. A prime (\') means NOT; juxtaposition means AND; + means OR.')+p('One cells: '+str(on)+'. Zero cells: '+str(off)+'. Don’t-care cells: '+str(dc)+'.'))
 if expr:body+=p('Transcribed expression: F = '+expr)
 if mode=='canonical':
  answer='F = Σm('+','.join(map(str,on))+') = ΠM('+','.join(map(str,off))+')'
  if not off:answer+=' = 1 (empty product)'
  body+=section('2. Evaluate every input combination',table(['Index',*names,'F'],[[j,*format(j,f'0{n}b'),int(j in on)] for j in range(2**n)]))
  body+=section('3. Write both canonical forms',p('For each row with F=1, include that minterm. For each row with F=0, include that maxterm. In a minterm, 0 means a complemented literal; in a maxterm, 1 means a complemented literal.')+p(answer))
 else:
  usepos=zero is not None or kind=='NOR' or i==459;target=off if usepos else on;pr,ess,covers,stages=qm(target,dc,n);chosen=covers[0]
  reduced=''.join('('+term(c,vs,True)+')' for c in chosen) if usepos else ' + '.join(term(c,vs) for c in chosen)
  answer='F = '+(reduced or ('1' if usepos else '0'))
  if mode=='tab':
   body+=section('2. Quine–McCluskey combinations',p('Start in groups with the same number of 1s. Combine terms differing in exactly one fixed bit; replace that bit by –. A dash position must match before combining. Uncombined terms become prime implicants.')+''.join('<h4>Round '+str(k)+'</h4>'+table(['Binary pattern','Covered indices'],[[c,', '.join(map(str,sorted(cover(c))))] for c in sorted(stage,key=lambda s:(s.count('1'),s))]) for k,stage in enumerate(stages)))
  else:
   rbits=n//2;cbits=n-rbits;gray=lambda k:[j^(j>>1) for j in range(2**k)];rows=[]
   for r in gray(rbits):
    row=[format(r,f'0{rbits}b')]
    for c in gray(cbits):
     j=(r<<cbits)|c;row.append(('X' if j in dc else '1' if j in on else '0')+' [m'+str(j)+']')
    rows.append(row)
   body+=section('2. Fill the Karnaugh map',p('Rows: '+''.join(names[:rbits])+'. Columns: '+''.join(names[rbits:])+'. Gray order makes neighboring cells differ by one bit. Opposite edges wrap; diagonal cells are not adjacent.')+table(['Rows / columns']+[format(c,f'0{cbits}b') for c in gray(cbits)],rows))
  body+=section('3. Prime implicants and essential groups',p(('Group 0s for POS. ' if usepos else 'Group 1s for SOP. ')+'Use rectangles of 1, 2, 4, 8 or 16 cells. X may be included only when useful. A dash removes the changing variable.')+table(['Pattern','Group cells','Term','Essential?'],[[c,', '.join(map(str,sorted(cover(c)))),term(c,vs,usepos),'Yes' if c in ess else 'No'] for c in pr]))
  body+=table(['PI / required cell']+target,[[term(c,vs,usepos)]+['✓' if j in cover(c) else '' for j in target] for c in pr])
  body+=section('4. Select a minimum cover',p('Selected groups: '+'; '.join(str(sorted(cover(c)))+' → '+term(c,vs,usepos) for c in chosen))+p(answer)+p('Essential prime implicants: '+(', '.join(term(c,vs,usepos) for c in ess) or 'none')+'. Every required cell is covered; no forbidden cell is included.'))
  if i==436:body+=p('All equally minimal SOP solutions (minimum terms, then literals):')+''.join(p('F = '+' + '.join(term(c,vs) for c in cs)) for cs in covers)
  if i in [425,426,427,428]:answer='Prime implicants: '+', '.join(term(c,vs) for c in pr)
  if i in [432,433,434]:answer='Essential prime implicants: '+(', '.join(term(c,vs) for c in ess) or 'none')+'; count = '+str(len(ess))
  if kind:
   net=expr_network(pos if kind=='NOR' else sop,vs,kind,two)
   for j,bits in enumerate(itertools.product([0,1],repeat=n)):
    if j not in dc:assert net.evaluate(bits)['F']==int(j in on);checks+=1
   body+=section('5. Gate implementation',p('Use '+kind+' gates. De Morgan’s law turns '+('an SOP into NAND–NAND' if kind=='NAND' else 'a POS into NOR–NOR')+'.'+(' Every gate below has two inputs.' if two else ' Multi-input gates are allowed here.'))+net.show())
  elif i in [400,424]:
   net=Network(list(names));cache={}
   def lit(a):
    if isinstance(a,Not):
     x=str(a.args[0]);cache.setdefault(x,None)
     if cache[x] is None:cache[x]=net.inv(x)
     return cache[x]
    return str(a)
   terms=sop.args if isinstance(sop,Or) else [sop];w=[]
   for t in terms:w.append(net.logical('AND',[lit(a) for a in (t.args if isinstance(t,And) else [t])]))
   net.outputs={'F':net.logical('OR',w)};body+=section('5. AND–OR–NOT implementation',net.show())
 Q[i]['boolean']={'variables':list(names),'ones':on,'zeros':off,'dontCares':dc,'sop':fmt(sop),'pos':fmt(pos)}
 put(i,answer,body,note)

# Canonical forms: expressions are manually transcribed from the supplied PDF.
for i,ns,ex in [(340,'ABC',"A+B'C"),(341,'ABC',"AB+A'C"),(342,'ABC',"A(A'+B)C'"),(343,'ABC',"A'+B+CA"),(344,'xyz','(xy+z)(y+xz)'),(345,'ABC',"(A'+B)(B'+C)"),(346,'ABCD',"D(A'+B)+B'D"),(347,'ABCD',"(A+B'+C)(A+B')(A+C'+D')(A'+B+C+D')(B+C'+D')"),(348,'XYZ','(XY+Z)(Y+XZ)'),(349,'XYZ','1'),(350,'WXYZ',"Y'Z+WXY'+WXZ'+W'X'Z"),(351,'AB',"A'+B'"),(352,'ABCD',"A+BC'+ABD'+ABCD"),(353,'mnop',"n'o'p+nop+mop'+m'n'o+m'no'p"),(354,'ABC',"A(A'+B)(A'+B+C')"),(438,'mnop',"n'o'p+nop+mop'+m'n'o+m'no'p"),(445,'pqrs',"(p'+q+r)(q'+r+s)(p+s')"),(452,'WXYZ','YZ+WXY+WXZ+WXZ'),(462,'xyz','(xy+z)(y+xz)')]:solve(i,ns,expr=ex,mode='canonical',note='Solved exactly as printed; the repeated WXZ term has no effect (X + X = X).' if i==452 else '')
for i,ns,ons,zs in [(338,'ABC',[1,3,7],None),(339,'wxyz',None,[0,1,2,6,10,12,14,15]),(355,'xyz',[1,3,7],None),(356,'ABCD',[0,2,6,11,13,14],None),(357,'XYZ',None,[0,3,6,7]),(358,'ABCD',None,[0,1,2,3,4,6,12])]:solve(i,ns,on=ons,zero=zs,mode='canonical')
# Lists transcribed independently instead of trusting the PDF answer key.
sets={365:([0,1,2,6,8,9,10,11],[3,7,14,15]),368:([0,2,3,5,7],[1,4,6]),369:[0,1,2,4,5,6,8,9,12,13,14],370:[0,1,3,4,5,7],371:[0,1,4,5,10,11,12,14],372:[0,1,2,3,4,5,6],373:[1,3,7,11,15],376:[1,5,7,9,11,13,15],377:[0,2,3,5],378:[1,3,5,9,11,13],379:[0,2,5,6,7,8,10,13,15],380:[1,5,6,7,11,12,13,15],381:[1,3,4,5,7,9,11,13,15],382:[1,3,5,8,9,11,15],383:[0,1,2,4,5,6,8,9,12,13,14,15],385:[0,2,4,5,6],389:[0,1,2,3,5,7,8,9,11,15],390:[0,1,2,5,8,9,10],391:([1,2,4,6,7,11,15],[0,3]),392:([0,2,6,10,11,12,13],[3,4,5,14,15]),393:([1,3,7,11,15],[0,2,5]),394:([0,1,3,7,11,15],[2,4]),395:([1,3,5,8,9,11,15],[2,13]),396:([0,1,2,3,6,7,13,14],[8,9,10,12]),399:[0,1,2,4,5,6,8,9,12,13,14],400:[0,1,4,5,6,8,9,10,12,13,14],401:[0,2,3,4,5,6],402:[0,6],403:[0,6],405:[0,1,2,3,5,7,8,9,10,12,13],407:([1,5,6,12,13,14],[2,4]),408:([0,1,3,5,6,12,13,14],[2,7,8,15]),409:([0,1,4,7,13,14],[5,8,15]),414:[0,3,4,8],415:[2,3,4,5,6,7],422:[0,1,3,7,8,9,11,15],423:[1,2,3,5,6,7,8,9,12,13,15],424:[0,1,2,8,10,11,14,15],425:[0,1,6,7,8,9,13,14,15],426:[0,1,3,4,5,7,10,11,13,14,15],427:[0,1,2,3,6,7,8,10,11,12,15],428:[5,6,12,13,14],429:[1,2,5,6,8,9,10,11,12,15],430:[0,1,2,4,6,7,8,9,11,13],431:[0,1,2,4,5,6,7,9,12],432:[1,2,3,5,7,10,11,14,15],433:[0,1,4,5,7,8,13,14,15],434:[3,4,5,9,10,11,14],435:[2,6,8,9,10,11,14,15],436:[1,4,5,10,12,14],439:[0,1,2,3,5,7,8,10,12,13,15],440:[3,4,5,6,7,10,11,12,13,15],441:[6,7,8,9,10,11,12,13,14,15],448:[0,1,2,4,5,6,8,9,10,12,13],449:[0,1,2,3,5,6,8,9,10,12,13,14,15],451:([2,6,8,9,10,11],[3,7,14,15]),454:[2,3,6,7,8,9,10,11,12,13,14,15],460:[0,2,3,6,7,8,9,10,11,12,13,14,15],461:[0,1,2,5,6,7,8,9,10,14],463:([0,2,5,6,13,14],[8,9])}
for i,v in sets.items():
 on,dc=v if isinstance(v,tuple) else (v,[])
 ns='ABC' if i in [368,377,401,402,403] else 'wxy' if i==370 else 'xyz' if i in [372,385] else 'wxyz' if i in [369,373,382,383,396,399,400,424,441] else 'WXYZ' if i in [393,435,448,460,461] else 'ABCD'
 kind='NAND' if i in [399,401,402,405,407,408,409,414,415,448] else 'NOR' if i==403 else None
 note=''
 if i in [402,403]:note='Three variables A,B,C are assumed because the largest listed minterm is 6; the PDF omits the variable list.'
 if i in [405,427,429]:note='Missing or misplaced commas in the printed minterm list are treated as separators; the normalized list is shown in Step 1.'
 if i==414:note='Here A,B,C,D correspond to A3,A2,A1,A0 respectively.'
 if i==415:note='Here A,B,C,D correspond to A8,A4,A2,A1 respectively.'
 if i==439:note='The printed prompt gives a partial PI list without a clear final instruction. The complete PI chart, essential groups and minimum expression are supplied.'
 solve(i,ns,on=on,dc=dc,kind=kind,mode='tab' if 422<=i<=436 or i in [439,440,441,449,454,460,461] else 'map',note=note)
zeros={397:([0,4,9,10,11,14,15],[]),398:([1,2,3,8,9,10,11,14],[7,15]),406:([2,8,9,10,1,12,14],[]),410:([0,1,3,4,5,7,10,13,14,15],[]),411:([2,4,6,8,10,12,15],[]),412:([0,1,4,6,8,9,11],[2,7,13]),413:([2,4,5,7,9,12],[0,1,6]),453:([1,2,3,8,9,10,11,14],[7,15])}
for i,(z,d) in zeros.items():solve(i,zero=z,dc=d,kind=None if i==397 else 'NOR',note='Missing commas in the printed maxterm list are treated as separators; Step 1 gives the normalized interpretation.' if i in [410,413] else '')
exprs={374:('ABCD',"A'B'C'+B'CD'+A'BCD'+AB'C",None),375:('wxyz',"x'z+w'xy'+w(x'y+xy')",None),384:('ABCD',"A'B'C'+B'CD'+A'BCD'+AB'C'",None),386:('ABCD',"AB'C'D'+AB'C'D+AB'CD+AB'CD'",None),387:('ABCD',"AB'C+AB'C'D+ABC'D+ABC",None),388:('ABC',"A'B'C+A'BC+ABC+ABC'",None),404:('ABCD',"ABC+AB'C+BCD'+A'CD",None),437:('wxyz',"w'y'x'z'+w'x'yz'+x'yz'w+yzwx'+wy'z'x+wzxy'+ywxz'+wxyz",[3,7,8,9]),446:('wxyz',"w'y'x'z'+w'x'yz'+x'yz'w+yzwx'+wy'z'x+wzxy'+ywxz'+wxyz",[3,7,8,9]),447:('wxyz',"w'xz+w'yz+x'z'y+wy'xz",[11,15]),457:('ABCD',"A'B'C'+AB'D+A'B'CD'",[8,10,14,15]),458:('ABCD',"A'B'C'+AB'D+A'CD'",[8,10,14,15]),459:('RST',"R'ST'+RS'T+RST",None)}
for i,(ns,ex,d) in exprs.items():solve(i,ns,expr=ex,dc=d,kind='NOR' if i in [437,446,458] else 'NAND' if i in [404,447,457] else None,two=i==447)
# Replace special constrained circuits with compact, explicitly checked networks.
net=Network(['R','S','T',"R'","S'","T'"])
a=net.gate('NOR','R',"T'");b=net.gate('NOR','R',"S'");c=net.gate('NOR','T',b);out=net.gate('NOR',a,c);net.outputs={'F':out}
for Rb,Sb,Tb in itertools.product([0,1],repeat=3):assert net.evaluate([Rb,Sb,Tb,1-Rb,1-Sb,1-Tb])['F']==int((not Rb and Sb and not Tb)or(Rb and Tb))
Q[459]['solution']+=section('Minimum two-input NOR circuit',p("F = (R + T')(R' + T)(R + S). True and complemented inputs are already available. Four two-input NOR gates implement the factored expression. The gate truth table was exhaustively checked; enumeration of all circuits with up to three NOR gates and the supplied input literals finds no realization.")+net.show())
net=Network(['A','B','C','D',"A'","B'","C'","D'"])
g1=net.gate('NAND',"A'","B'","D'");g2=net.gate('NAND','B','C',"D'");g3=net.gate('NAND','B',"C'",'D');net.outputs={'F':net.gate('NAND',g1,g2,g3)}
for j,b in enumerate(itertools.product([0,1],repeat=4)):
 if j not in [8,9]:assert net.evaluate([*b,*[1-v for v in b]])['F']==int(j in [0,2,5,6,13,14])
Q[463]['solution']+=section('Required three-input NAND realization',p("F = A'B'D' + BCD' + BC'D. Use three first-level NAND gates and one final NAND: four gates total. Each gate has exactly three inputs. This is the minimum two-level NAND–NAND cover (three product terms in a minimum cover); complemented inputs are given.")+net.show())
# Short questions: answer plus a specific reason, independently checked.
short={
334:('1','Every input combination activates exactly one minterm, so the OR of every minterm is always 1.'),335:('0','At every input combination, its corresponding maxterm is 0. An AND containing that 0 is 0.'),336:("w'xyz'",'6 = 0110 in w,x,y,z order. Complement the variables whose bits are 0.'),337:("w + x' + y' + z'",'7 = 0111. A maxterm must be 0 at that row: use an uncomplemented literal for 0 and a complemented literal for 1.'),359:('Venn diagram','A K-map arranges Boolean sets into cells so neighboring combinations can be combined.'),360:('Gray code','Adjacent Gray-code labels differ in one bit; that is the variable removed when cells are grouped.'),361:('8 cells','An n-variable map has 2^n cells. For n=3, 2^3=8.'),362:('Diagonal grouping','Diagonal cells change two bits. Valid groups use horizontal/vertical adjacency, including edge wrapping.'),363:('8','F=1 for all eight combinations of three inputs; all eight cells contain 1.'),364:('0','If F is constantly 1, none of its eight cells contains 0.'),366:('n − m literals','A group of 2^m cells varies in m independent inputs; those m literals disappear from the n-variable term.'),367:('Variables occurring in both complemented and uncomplemented forms','The changing literal cancels: XY + XY\' = X(Y + Y\') = X.'),416:('Quine–McCluskey tabulation method','It systematically combines binary terms and selects a cover using a prime-implicant chart.'),417:('Essential prime implicants','An EPI covers at least one required minterm that no other prime implicant covers, so it must be selected.'),418:('Prime implicant','A prime implicant cannot be enlarged further without including a forbidden zero cell.'),419:('BC','In -11-, A and D vary and vanish. B=1 and C=1 remain.'),420:("BD'",'In -1-0, A and C vanish. B=1 stays positive and D=0 is complemented.'),421:('Prime implicants','Terms not combined into a larger valid group are prime implicants.'),442:("A' + C",'The map labels rows BA. Rows BA=00 and 10 have A=0 and are entirely 1; the entire C=1 column is also 1. B is eliminated.'),443:("AB'CD (m11)","The printed expression contains ABCD, A'B'CD and A'B. The target A'B+CD adds just row 1011. Mark m11 as a don't-care to form the four-cell CD group."),444:('16 zeros','A four-variable map has 2^4=16 cells. F=0 makes all of them zero.'),450:("X'Y' + X'Y + XY' + XY",'The constant 1 is the sum of all four minterms: Σm(0,1,2,3). Its product-of-maxterms is the empty product, equal to 1.'),455:('d = Σd(6,11,15)',"D+A'B is 1 at {1,3,4,5,6,7,9,11,13,15}. Subtract the given one-set {1,3,4,5,7,9,13}; the newly covered rows are 6,11,15."),456:("(X ⊕ Y ⊕ Z)' — three-input XNOR",'The map is 1 at 000,011,101,110: precisely the even-parity rows. It is a three-input XNOR, not a cascade of two XNOR gates.'),
464:('2: combinational and sequential','Combinational outputs depend on current inputs. Sequential circuits also depend on stored state.'),465:('Accept a carry from the previous, less significant stage','A half adder has only two input terminals. A full adder adds a third carry-in terminal.'),466:('Cout = AB + AC + BC','Carry is 1 whenever at least two of the three input bits are 1.'),467:('2 AND, 1 OR, 2 XOR gates','Let P=A⊕B. Then S=P⊕Cin and Cout=AB+P·Cin.'),468:('Present input values','A combinational circuit has no stored state; allow its propagation delay before reading a stable output.'),469:('A, B, E, C, D','Identify inputs/outputs → truth table → output expressions → simplify → implement gates.'),487:("M=X'Y; N=X⊕Y",'Borrow is needed only for X=0,Y=1. Difference is 1 when the inputs differ.'),488:('False','Remembering an old input requires storage. Pure combinational logic has no memory.'),489:('True','Compute P=A⊕B, then S=P⊕Cin: two XOR gates.'),490:('Carry-in','A half adder produces a carry-out but does not accept a carry-in.'),491:('Half adder; Sum=0, Carry=1','The XOR and AND outputs form a half adder. With both inputs 1: 1+1=10₂, so S=0 and C=1.'),492:('Two single bits and one carry bit','The full adder computes A+B+Cin=S+2Cout.'),493:('Cumulative carry delay limits speed','In a ripple-carry adder, each stage must wait for the carry from the previous stage. Worst-case delay grows with word length.'),494:('Sum=1011; Cout=1','1011₂+1111₂+1=11+15+1=27=11011₂. Keep the low four bits as the sum.'),495:('Sum=0; Cout=1','1+1+0=2=10₂.'),496:('Serial adder','It reuses one full adder for successive bit positions and stores the carry between clocks.'),497:('Full adders accept a carry input','A half adder adds A and B only; a full adder adds A, B and Cin.'),498:('Parallel adder','Different bit positions have separate adder stages; ripple carries still need time to propagate.'),499:('Half adder: 6 basic gates; half subtractor: 5 basic gates','Using S=A\'B+AB\': two NOT + two AND + one OR make XOR. A half adder needs one additional AND for AB (6 total). A half subtractor reuses A\'B as its borrow (5 total). Counts assume only AND/OR/NOT and sharing.'),500:('Only statement 1','D=A\'B+AB\' is correct. Borrow is A\'B, not AB\'; 0−1 is the case requiring a borrow.'),501:('1 half adder and 15 full adders','With no external carry-in, the least significant stage can use a half adder. The remaining 15 stages must accept a carry.'),503:('All of the above','XOR has equivalent forms xy\'+x\'y and (x+y)(x\'+y\'). Since C=xy, (C+x\'y\')\' also equals XOR.'),504:('3 inputs','A, B and carry-in; its two outputs are sum and carry-out.'),505:('Combinational circuit','Both half-adder outputs depend only on the current two inputs.'),506:('4 full adders','A general four-bit adder with carry-in uses one full adder per bit.'),507:('Half adder','The illustrated outputs implement S=A⊕B and C=AB.'),508:('Either sum or difference output','A two-input XOR is both the half-adder sum and half-subtractor difference.'),509:('Carry-out of a half adder','An AND produces AB, which is the carry when both added bits are 1.'),510:('1 half adder and 63 full adders (no external carry-in)','The least significant column has only two inputs; all later columns can receive carry. If carry-in must also be accepted, use 64 full adders.'),511:('Two-input OR gate','Two half subtractors produce borrow signals b1 and b2. Overall borrow=b1+b2.'),512:('Two-input OR gate','Combine the two half-adder carry outputs: Cout=C1+C2.'),515:('Only statement 4 is incorrect','A full adder adds two data bits AND one carry bit, not just one data bit plus carry.'),516:('S=A⊕B⊕C; Cout=AB+(A⊕B)C','This follows directly from cascading two half adders and OR-ing their carries.'),517:("D=A⊕B⊕C; Bout=A'B+A'C+BC",'Borrow is 1 when B+C exceeds A. Check rows 001,010,011,111.'),518:('Half subtractor','The diagram forms A⊕B for difference and A\'B for borrow.'),519:('Both A and C: invalid BCD digit or a carry','Add 0110 when the raw four-bit digit exceeds 9 OR the first binary adder generates a carry. Correction signal K=C4+Z3Z2+Z3Z1.'),524:('1 full adder','A serial adder reuses the same full adder for four clock cycles, with registers and a carry flip-flop.'),525:('None of the statements is correct','I: combinational logic has no memory. II: a general n-bit parallel adder uses n full adders. III: full-adder sum matches full-subtractor difference, not borrow-in. IV: adding two BCD digits and carry-in has raw binary range 0–19 (00000–10011), not 0–17.'),530:('Statements 2, 3 and 4 (intended answer)','Statement 1 is false: the sum uses XOR, not XNOR. A half adder has two inputs and two outputs and no carry-in. In statements 2–3, “nothing to do with carry” means no carry INPUT; it still generates carry-out.')}
for i,(a,t) in short.items():put(i,a,section('Reasoning',p(t)))

def arith_net(full=False,sub=False,kind=None):
 net=Network(['A','B']+(['C'] if full else []))
 def inv(a):return net.inv(a,kind or 'NOT')
 def AND(*a):return net.logical('AND',list(a),kind)
 def OR(*a):return net.logical('OR',list(a),kind)
 def XOR(a,b):
  if kind:return net.xor(a,b,kind)
  return OR(AND(inv(a),b),AND(a,inv(b)))
 x=XOR('A','B');c1=AND(inv('A') if sub else 'A','B')
 if full:
  d=XOR(x,'C');c2=AND(inv(x) if sub else x,'C');carry=OR(c1,c2)
 else:d=x;carry=c1
 net.outputs={'Difference' if sub else 'Sum':d,'Borrow' if sub else 'Carry':carry}
 net.verify(lambda b:{'Difference' if sub else 'Sum':(b[0]-sum(b[1:]) if sub else sum(b))%2,'Borrow' if sub else 'Carry':int(b[0]<sum(b[1:])) if sub else int(sum(b)>1)})
 return net

def arithmetic(i,full=False,sub=False,kind=None):
 title=('Full' if full else 'Half')+(' subtractor' if sub else ' adder');inputs=['A','B']+(['C'] if full else []);out=['Difference','Borrow'] if sub else ['Sum','Carry'];rows=[]
 for b in itertools.product([0,1],repeat=len(inputs)):
  raw=b[0]-sum(b[1:]) if sub else sum(b);rows.append([*b,raw%2,int(raw<0) if sub else int(raw>=2)])
 equation=("D=A⊕B⊕C; Bout=A'B+A'C+BC" if full else "D=A⊕B; Bout=A'B") if sub else ('S=A⊕B⊕C; Cout=AB+AC+BC' if full else 'S=A⊕B; Cout=AB')
 body=section('1. Meaning and truth table',p(title+': '+('subtract B'+(' and borrow-in C' if full else '')+' from A.' if sub else 'add A+B'+('+carry-in C.' if full else '.')))+table([*inputs,*out],rows))
 if full:
  ons1=[j for j,r in enumerate(rows) if r[-2]];ons2=[j for j,r in enumerate(rows) if r[-1]]
  body+=section('2. Derive the output equations',p(out[0]+' = Σm('+','.join(map(str,ons1))+'); '+out[1]+' = Σm('+','.join(map(str,ons2))+').')+p(equation))
  body+=section('3. Two half-circuit construction',p(('Half subtractor 1: d1=A⊕B, b1=A\'B. Half subtractor 2: D=d1⊕C, b2=d1\'C. OR the borrows: Bout=b1+b2=A\'B+A\'C+BC.' if sub else 'Half adder 1: s1=A⊕B, c1=AB. Half adder 2: S=s1⊕C, c2=s1C. OR the carries: Cout=c1+c2=AB+(A⊕B)C=AB+AC+BC.')))
 else:body+=section('2. Derive the output equations',p(equation)+p('The first output is 1 for inputs 01 and 10, so XOR = A\'B+AB\'. The second output is 1 only for '+('01.' if sub else '11.')))
 net=arith_net(full,sub,kind)
 body+=section('4. '+(kind+'-only circuit' if kind else 'AND–OR–NOT circuit'),p('All gates are two-input '+kind+' gates; tied inputs implement inversion.' if kind else 'AOI is interpreted here as AND–OR–INVERT (basic AND, OR and NOT gates). XOR is expanded into these basic gates.')+net.show())
 body+=p('Check: '+('A−B'+('−C' if full else '')+' = D−2Bout.' if sub else 'A+B'+('+C' if full else '')+' = S+2Cout.')+' Every truth-table row satisfies this identity.')
 put(i,equation,body)
for i,f,s,k in [(470,0,0,None),(471,0,0,'NAND'),(472,0,0,'NOR'),(473,1,0,'NAND'),(474,1,0,'NOR'),(475,1,0,None),(476,0,1,None),(477,0,1,'NAND'),(478,0,1,'NOR'),(479,1,1,'NAND'),(480,1,1,'NOR'),(481,1,1,None),(483,1,0,None),(484,1,0,None),(485,1,0,None),(514,1,1,None),(527,1,1,'NOR'),(529,1,1,None),(537,1,0,None)]:arithmetic(i,bool(f),bool(s),k)
# Full adder to full subtractor: invert A before the FA and its sum afterward.
put(482,"D=(A'⊕B⊕Bin)' = A⊕B⊕Bin; Bout=A'B+A'Bin+BBin",section('1. Reuse a full adder',p("Apply A', B and Bin to a full adder. Its carry becomes A'B+A'Bin+BBin, exactly the borrow equation."))+section('2. Correct the difference output',p("The full adder produces S_FA=A'⊕B⊕Bin=(A⊕B⊕Bin)'. Add a NOT gate after S_FA, giving D=S_FA'. Two additional inverters are required: one on A and one on the sum output."))+table(['A','B','Bin','A′ to FA','S_FA','D','Bout'],[[a,b,c,1-a,(1-a)^b^c,a^b^c,int(a<b+c)] for a,b,c in itertools.product([0,1],repeat=3)])+'<svg viewBox="0 0 700 220" class="circuit" role="img" aria-label="Full adder converted to full subtractor"><g fill="white" stroke="black"><rect x="90" y="20" width="80" height="40"/><rect x="280" y="20" width="130" height="155"/><rect x="480" y="35" width="80" height="40"/><path d="M30 40H90 M170 40H280 M30 100H280 M30 150H280 M410 55H480 M560 55H640 M410 150H640"/></g><g font-size="18"><text x="15" y="30">A</text><text x="107" y="46">NOT</text><text x="15" y="90">B</text><text x="15" y="140">Bin</text><text x="300" y="95">Full adder</text><text x="495" y="61">NOT</text><text x="650" y="60">D</text><text x="644" y="155">Bout</text></g></svg>')
compare=table(['Feature','Serial adder','Parallel ripple-carry adder'],[['Full adders for n bits','1 reused','n (or n−1 plus HA when no carry-in)'],['Processing','One bit pair per clock','All bit pairs applied together'],['Storage','Shift registers and carry flip-flop','No internal memory required'],['Latency','n clock cycles for a word','One combinational settling interval; carry delay accumulates'],['Hardware','Less arithmetic hardware','More gates; faster word throughput'],['Typical trade-off','Area-saving repeated arithmetic','Speed-oriented arithmetic']])
for i in [486,502]:put(i,'Serial: one bit per cycle. Parallel: separate stages for all bits.',section('Comparison',compare))
# The combined design question needs both complete truth tables and circuits.
arithmetic(523,True,False,None);first=Q[523]['solution'];arithmetic(523,True,True,None);Q[523]['solution']=section('Part A — Full adder',first)+section('Part B — Full subtractor',Q[523]['solution']);Q[523]['answer']="FA: S=A⊕B⊕C, Cout=AB+AC+BC. FS: D=A⊕B⊕C, Bout=A'B+A'C+BC."

def blocksvg(labels):
 h=105*len(labels)+25;s=f'<svg class="circuit" viewBox="0 0 720 {h}" role="img" aria-label="Arithmetic circuit block diagram">'
 for j,(left,box,right) in enumerate(labels):
  y=20+j*105;s+=f'<rect x="255" y="{y}" width="215" height="65" fill="white" stroke="black"/><path d="M215 {y+32}H255 M470 {y+32}H510" stroke="black"/><text x="205" y="{y+37}" text-anchor="end">{E(left)}</text><text x="362" y="{y+37}" text-anchor="middle">{E(box)}</text><text x="520" y="{y+37}">{E(right)}</text>'
 return s+'</svg>'
def binary_body(a,b,cin=0):
 carry=cin;rows=[]
 for k in range(4):
  ai=(a>>k)&1;bi=(b>>k)&1;t=ai+bi+carry;rows.append([k,ai,bi,carry,t%2,t//2]);carry=t//2
 total=a+b+cin;ans=f'S3S2S1S0={total%16:04b}; C4={total//16} (total {total:05b}₂ = {total}₁₀)'
 body=p(f'{a:04b}₂ + {b:04b}₂ + {cin} = {total:05b}₂.')+p('Stage i computes Si=Ai⊕Bi⊕Ci and Ci+1=AiBi+(Ai⊕Bi)Ci. Connect each carry-out to the next more significant carry-in.')+table(['Bit i (LSB first)','Ai','Bi','Carry in Ci','Sum Si','Carry out Ci+1'],rows)+blocksvg([(f'A{i}, B{i}, C{i}',f'Full adder {i}',f'S{i}, C{i+1}') for i in range(4)])+p(ans)
 return ans,body
for i,a,b,c in [(513,11,15,1),(521,10,14,0),(528,15,7,0)]:
 ans,body=binary_body(a,b,c);put(i,ans,section('Four-bit parallel adder',body)+(section('Why parallel is faster',compare) if i==513 else ''))
ans,body=binary_body(13,15,0);aa,bb=binary_body(11,15,0)
put(533,ans,section('Read the printed bit order literally',p('The PDF writes A0A1A2A3=1011. With A0 as LSB, A3A2A1A0=1101₂=13. B remains 1111₂=15.')+body)+section('If the intended order was A3A2A1A0',p('If “1011” was meant as the usual MSB-first number, the answer is instead:')+bb),'The printed order is ambiguous. Both interpretations are shown; do not silently change A0 into the most significant bit.')

def bcd(i,a,b):
 raw=a+b;z=raw%16;c4=raw//16;k=int(c4 or z>9);corrected=z+6*k;digit=corrected%16
 assert digit==raw%10 and k==raw//10
 answer=f'{a}+{b}={raw}; BCD = {k:04b} {digit:04b}'
 rows=[]
 for t in range(20):
  zz=t%16;kk=int(t>=10);rows.append([t,t//16,format(zz,'04b'),kk,format(zz+6*kk,'05b'),format(t//10,'04b')+' '+format(t%10,'04b')])
 body=section('1. First binary addition',p(f'A={a:04b}, B={b:04b}, Cin=0. Raw five-bit sum = {raw:05b}. C4={c4}, Z3Z2Z1Z0={z:04b}.'))
 body+=section('2. Detect an invalid BCD result',p('K = C4 + Z3Z2 + Z3Z1. Correction is required if the raw digit is 1010–1111 or the first adder has a carry. Use K as the decimal carry to the next digit.')+p(f'Here K={k}. The second adder adds 0KK0 = {6*k:04b}.'))
 body+=section('3. Add the correction',p(f'{z:04b} + {6*k:04b} = {corrected:05b}. Keep the low four bits {digit:04b} as the units digit; decimal carry is K={k}.')+p(answer)+p('For raw sums 16–19, the first adder already carries; the second adder may not carry. Therefore take decimal carry from K, not only from the second adder.'))
 body+=section('4. BCD adder circuit',blocksvg([('A, B, Cin','4-bit adder 1','Z3..Z0, C4'),('Z3,Z2,Z1,C4','K=C4+Z3Z2+Z3Z1','K (decimal carry)'),('Z3..Z0, 0KK0','4-bit adder 2','Units digit')]))
 body+=section('5. Correction truth table (valid BCD inputs)',p('The two input digits are 0–9; with carry-in 0 or 1, the raw sum ranges from 0 to 19.')+table(['Raw sum','C4','Z','K','Z+6K','Correct BCD'],rows))
 put(i,answer,body)
for i,a,b in [(520,8,7),(522,5,7),(526,3,9),(531,8,5),(532,7,7),(534,7,9),(535,3,9),(536,9,8)]:bcd(i,a,b)
for a,b,c in itertools.product(range(10),range(10),range(2)):
 t=a+b+c;z=t%16;k=int(t//16 or z>9);assert (z+6*k)%16==t%10 and k==t//10;checks+=1
# Keep source key only as provenance; reader answers use independently derived results.
assert all(q.get('answer') and q.get('solution') for q in qs),[q['id'] for q in qs if not q.get('solution')]
book={'title':'Digital Electronics — Chapters 4 & 5','questions':qs,'verification':{'exhaustiveCases':checks,'questions':len(qs)}}
(R/'data/solutions.json').write_text(json.dumps(book,ensure_ascii=False,separators=(',',':')))
(R/'data/solutions.js').write_text('window.DE_BOOK='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
print('Built',len(qs),'solutions;',checks,'exhaustive checks passed.')
