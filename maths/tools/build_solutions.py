import sys,json,math,signal,time
import sympy as S
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=json.loads((root/'data/source-questions.json').read_text());Q={q['id']:dict(q) for q in source}
x,y,z,t,u,v,r,th,ph,k,n,lam,mu=S.symbols('x y z t u v r theta phi k n lambda mu',real=True)
a,b=S.symbols('a b',positive=True)
L={str(c):c for c in [x,y,z,t,u,v,r,th,ph,k,n,a,b,lam,mu]};L.update(vars(S));L.update(x=x,y=y,z=z,t=t,u=u,v=v,r=r,theta=th,phi=ph,k=k,n=n,a=a,b=b,ln=S.log)
def e(q):return S.sympify(q,locals=L)
def tex(q):return S.latex(e(q))
def step(title,formula=None,text=''):return dict(title=title,math=tex(formula) if formula is not None else '',text=text)
def st(title,mathtext='',text=''):return dict(title=title,math=mathtext,text=text)
def add(i,answer,steps,question=None,note='',diagram=None):
 Q[i].update(answer=tex(answer),steps=steps,status='solved')
 if question:Q[i]['question']=question
 if note:Q[i]['note']=note
 if diagram:Q[i]['diagram']=diagram
 if i%20==0:print('Authored',i,flush=True)
def manual(i,answer,steps,question=None,note='',diagram=None):
 add(i,answer,steps,question,note,diagram)
def intg(f,bound):
 def timeout(*args):raise TimeoutError(str(f))
 signal.signal(signal.SIGALRM,timeout);signal.alarm(12)
 try:
  out=S.integrate(f,bound,conds='none')
 finally:signal.alarm(0)
 if out.has(S.Integral):raise ValueError('Unevaluated integral '+str(out))
 return S.simplify(out)
def polygon(limits):
 if len(limits)!=2:return None
 inner,outer=limits
 w,lo,hi=inner;vv,aa,bb=outer
 subs={a:1,b:1}
 try:
  A=float(e(aa).subs(subs));B=float(e(bb).subs(subs))
  if not math.isfinite(A+B) or abs(B-A)>40:return None
  pts=[]
  for bound,direction in [(lo,1),(hi,-1)]:
   for j in range(51):
    val=A+(B-A)*(j if direction==1 else 50-j)/50
    other=float(e(bound).subs(subs).subs(vv,val))
    if not math.isfinite(other):return None
    pts.append([val,other] if vv==x else [other,val] if vv==y else [val,other])
  return dict(kind='region',points=pts,axes=[str(vv),str(w)] if vv not in [x,y] else ['x','y'],caption='Integration region'+(' (a = b = 1 illustrated)' if any(e(c).has(a,b) for q in limits for c in q[1:]) else ''))
 except Exception:return None
def multi(i,f,limits,note='',override=None,extra=None,diagram=True):
 f=e(f);limits=[(q[0],e(q[1]),e(q[2])) for q in limits]
 whole=f
 for q in limits:whole=S.Integral(whole,q)
 steps=[step('Write the integral and limits',whole)]
 result=f
 for j,q in enumerate(limits):
  if override is not None and j==len(limits)-1:
   result=e(override);steps.append(step('Evaluate the remaining integral',result))
  else:
   result=intg(result,q);steps.append(step('Integrate with respect to '+str(q[0])+' and apply the bounds',result))
 if extra:steps.insert(1,st('Choose the order or coordinates',extra))
 add(i,result,steps,'Evaluate $'+tex(whole)+'$.',note,polygon(limits) if diagram else None)
def indefinite(i,f,answer=None,method='Use a standard integral or simplify the integrand',rewrite=None):
 f=e(f);F=intg(f,x) if answer is None else e(answer)
 steps=[step('Start with the integral',S.Integral(f,x))]
 if rewrite:steps.append(step('Simplify or substitute',e(rewrite)))
 steps.append(step(method,F));steps.append(st('Include the integration constant',tex(F)+'+C'))
 # Check the proposed primitive symbolically or numerically away from singularities.
 delta=S.simplify(S.diff(F,x)-f)
 if delta!=0:
  vals=[]
  for xx in [.23,.71,1.3,3.7,6.1]:
   try:
    d=complex(delta.subs({x:xx,a:2,n:3}).evalf())
    if abs(d.imag)<1e-8:vals.append(abs(d.real))
   except Exception:pass
  if vals and max(vals)>1e-7:raise ValueError(('Bad primitive',i,delta,vals))
 add(i,F,steps,'Find $'+tex(S.Integral(f,x))+'$.', 'Add C to the displayed answer. For real logarithmic antiderivatives, use ln|…| on each interval where the integrand is defined; restrictions in the source question still apply.')
 Q[i]['answer']+=' + C'
# Unit 6: elementary antiderivatives.
indefinite(643,'cos(5*x)',method='Let u = 5x; du = 5 dx')
indefinite(644,'sec(x)**2')
indefinite(645,'1/(x*x+4*x+13)',rewrite='(x+2)**2+9',method='Complete the square and use the arctangent formula')
indefinite(646,'1/(1+cos(x))','tan(x/2)',rewrite='sec(x/2)**2/2',method='Use 1 + cos x = 2 cos²(x/2)')
for i,f in {647:'cos(x)',648:'tan(x)',649:'sin(x)',650:'cot(x)'}.items():indefinite(i,f)
c=x+S.Rational(5,6);d=S.Rational(7,6)
indefinite(651,'sqrt((3*x-1)*(x+2))',S.sqrt(3)/2*(c*S.sqrt(c*c-d*d)-d*d*S.log(c+S.sqrt(c*c-d*d))),method='Complete the square; use the integral of √(u² − A²)')
for i,f in {652:'(2*x-1)**2/x',653:'sqrt(25-x*x)',654:'3*sec(x)**7*tan(x)',655:'(2*x**3+20*x-1)/(x*x+10)',656:'sqrt(x*x+9)',657:'1/(x*x+4*x+9)',658:'x/((x-1)*(x-2))',659:'1/sqrt(9*x*x-16)',660:'1/(x*x+5*x+6)',661:'1/sqrt(16*x*x+1)',662:'1/(x*x-x-6)',663:'4**(5*x+2)'}.items():
 if i==654:indefinite(i,f,'3*sec(x)**7/7',method='Let u = sec x, so du = sec x tan x dx')
 elif i==659:indefinite(i,f,'log(3*x+sqrt(9*x*x-16))/3')
 elif i==661:indefinite(i,f,'asinh(4*x)/4')
 else:indefinite(i,f)
indefinite(664,'sqrt(4*x*x+4*x-15)',((2*x+1)*S.sqrt((2*x+1)**2-16)-16*S.log(2*x+1+S.sqrt((2*x+1)**2-16)))/4,method='Set u = 2x + 1, then integrate √(u² − 16)/2')
indefinite(665,'1/sqrt(4*x*x-4*x-5)','log(2*x-1+sqrt(4*x*x-4*x-5))/2')
for i,f in {666:'exp(5*x-3)',667:'1/(1-cos(2*x))',668:'x/a+a/x+x**a+a**x+5',669:'x**3/(x*x-9)',670:'(x*x-10)/(x*x+9)',671:'1/sqrt(8-2*x-x*x)',672:'1/sqrt(25*x*x-1)',673:'sqrt(x*x-16)',674:'1/(3*x*x+5)',675:'x**3/(x*x-16)',676:'7**(9*x-2)',677:'sqrt(x*x-4)',678:'3**(5*x+2)',679:'x**3/((x-2)*(x+3))',680:'exp(3*x)*cos(2*x)'}.items():
 if i==667:indefinite(i,f,'-cot(x)/2',method='Use 1 − cos 2x = 2 sin²x')
 elif i==668:indefinite(i,f,'x*x/(2*a)+a*log(x)+x**(a+1)/(a+1)+a**x/log(a)+5*x');Q[i]['note']+=' Assume a > 0 and a ≠ 1; when a = 1, ∫aˣ dx = x.'
 elif i==671:indefinite(i,f,'asin((x+1)/3)')
 elif i==672:indefinite(i,f,'log(5*x+sqrt(25*x*x-1))/5')
 else:indefinite(i,f)
indefinite(681,'cos(4*x)*cos(2*x)*sin(x)','-cos(7*x)/28+cos(5*x)/20-cos(3*x)/12+cos(x)/4',method='Use product-to-sum identities before integrating')
indefinite(682,'sqrt(16-x*x)')
manual(683,S.Piecewise((-S.cos(x)-S.sin(x),S.sin(x)>=S.cos(x)),(S.cos(x)+S.sin(x),True)),[st('Keep the absolute value',r'\sqrt{1-\sin 2x}=|\sin x-\cos x|'),st('Integrate on an interval of fixed sign',r'\sin x\geq\cos x:\ -\cos x-\sin x+C;\quad\sin x<\cos x:\ \cos x+\sin x+C')],question=r'Evaluate $\int\sqrt{1-\sin 2x}\,dx$.',note='Choose constants to join the primitive continuously at sign changes. Dropping the absolute value gives an incorrect global answer.')
for i,f in {684:'sec(x)**2/sqrt(tan(x)**2+4)',685:'(2*x+3)/(x**3-3*x+2)',686:'log(x)*(log(x)+2)',687:'x*x*log(x)',688:'x**3*cos(2*x)',689:'x*x*exp(x)',690:'x*x*sin(x)',691:'x*x*sin(2*x)',692:'x*sin(x)',693:'exp(2*x)*sin(3*x)',694:'x*x*cos(7*x)',695:'(1+sqrt(x*x+1))*2*x',696:'(2*x-1)**2*cos(n*x)'}.items():
 if i==684:indefinite(i,f,'asinh(tan(x)/2)',method='Let u = tan x; du = sec²x dx')
 elif i==686:indefinite(i,f,'x*log(x)**2',method='Recognize the derivative of x(ln x)²')
 elif i==696:indefinite(i,f,'(2*x-1)**2*sin(n*x)/n+4*(2*x-1)*cos(n*x)/n**2-8*sin(n*x)/n**3',method='Integrate by parts twice');Q[i]['note']+=' For n = 0, the primitive is (2x−1)³/6 + C.'
 else:indefinite(i,f,method='Integrate by parts or substitute; differentiate to check')
# Rectangular and variable-limit double integrals.
cfg={
697:('3*y',[(x,-y,y),(y,0,1)]),698:('1/(x*y)',[(x,1,2),(y,1,2)]),699:('1',[(x,2,6),(y,1,4)]),
700:('exp(y/x)',[(y,0,x*x),(x,0,2)]),701:('exp(x/y)',[(x,0,y),(y,0,1)]),702:('3*x*x-2*y*y',[(x,0,1),(y,0,1)]),703:('log(x)/x',[(y,0,x),(x,1,2)]),704:('1',[(x,1,4),(y,-1,2)]),705:('1',[(x,3,7),(y,2,5)]),706:('1+3*x*y',[(x,-1,1),(y,1,2)]),707:('x*y',[(y,x,x*x),(x,0,1)]),708:('x*x+y*y',[(y,0,S.sqrt(x)),(x,0,1)]),709:('1/(sqrt(1-x*x)*sqrt(1-y*y))',[(x,0,1),(y,0,1)]),710:('1-6*x*x*y',[(x,0,2),(y,-1,1)]),711:('x*x+y*y',[(x,0,S.sqrt(1-y*y)),(y,0,1)]),712:('1/(1+x*x+y*y)',[(y,0,S.sqrt(1+x*x)),(x,0,1)]),713:('x*y',[(x,y,2),(y,1,2)]),714:('1+3*x*y',[(x,0,1),(y,1,2)]),715:('x*x+y*y',[(y,0,x),(x,0,1)]),716:('exp(y/x)',[(y,0,x),(x,0,1)]),717:('x*x*y',[(x,y,1+y*y),(y,0,1)]),718:('1+x*y',[(y,x*x,x),(x,0,1)]),719:('exp(y/x)',[(y,0,x*x),(x,0,4)]),720:('x*cos(x*y)',[(y,1,2),(x,S.pi/2,S.pi)]),721:('x*y',[(y,1,2),(x,0,1)]),722:('x*exp(x*x+y)',[(y,2*x*x,3*x*x),(x,1,4)]),723:('x*x+3*y*y',[(y,0,1),(x,0,3)]),724:('1+6*x*y',[(x,0,1),(y,3,6)]),725:('1+8*x*x*y',[(x,0,1),(y,3,6)]),726:('x+y',[(y,x,x+2),(x,0,2)]),727:('x*y',[(y,0,x*x/(4*a)),(x,0,2*a)]),728:('exp(2*x+3*y)',[(y,0,1-x),(x,0,1)]),729:('x*x+y*y',[(x,y/4,3-y),(y,0,2)]),730:('3*exp(y/sqrt(x))/2',[(y,0,S.sqrt(x)),(x,1,4)]),733:('2*x-y*y',[(x,1-y,y-1),(y,1,3)]),735:('x*x+y*y',[(y,0,1-x),(x,0,1)]),736:('sin(x)/x',[(y,0,2*x),(x,0,1)]),737:('x',[(y,x*x/4,2*S.sqrt(x)),(x,0,4)]),738:('y',[(y,x*x,2-x),(x,0,1)]),739:('y',[(y,x*x/4,2*S.sqrt(x)),(x,0,4)]),740:('x+2*y',[(y,2*x*x,x+1),(x,-S.Rational(1,2),1)]),741:('sqrt(y*(x-y))',[(x,y,10*y),(y,0,1)]),742:('x*y*(x+y)',[(y,x*x,x),(x,0,1)]),743:('x*y',[(y,x*x,x),(x,0,1)]),744:('6*x*x+2*y',[(y,x*x,4),(x,-2,2)]),745:('y*sin(x*y)',[(x,1,2),(y,0,S.pi/2)]),747:('x*x-y*y',[(y,1,x+1),(x,0,1)]),748:('y',[(y,x*x,x+2),(x,-1,2)])}
for i,(f,lim) in cfg.items():
 note=''
 if i in [699,704,705]:note='With integrand 1, the bounds describe a rectangle and the value is its area.'
 if i==707:note='As printed, the inner upper limit x² is below x on 0 < x < 1, so this is a signed integral. Reversing those limits changes the sign.'
 multi(i,f,lim,note=note)
manual(731,'-2/3',[st('Use symmetry',r'\iint_R y\,dA=0'),st('Integrate over the diamond',r'-2\iint_R x^2\,dA=-8\int_0^1x^2(1-x)\,dx=-\frac23')])
manual(732,'7/12',[st('Split where the lower boundary changes',r'I=\int_0^1\int_{\sqrt{2x-x^2}}^{\sqrt{2x}}xy\,dy\,dx+\int_1^2\int_x^{\sqrt{2x}}xy\,dy\,dx'),st('Integrate in y, then x',r'I=\frac18+\frac{11}{24}=\frac7{12}')],note='Use the bounded region whose three boundary arcs join (0,0), (1,1) and (2,2).')
manual(734,'448',[st('Split at the line–hyperbola intersection',r'x=y,\ xy=16\Rightarrow x=y=4'),st('Integrate the two pieces',r'I=\int_0^4\int_0^x x^2\,dy\,dx+\int_4^8\int_0^{16/x}x^2\,dy\,dx=64+384=448')])
# Reversing order; all displayed integrals here use the new order.
reverse={750:('2*x*exp(x*x)',[(x,0,1)]),751:('exp(-y)',[(y,0,S.oo)]),752:('y*sin(y*y)',[(y,0,1)]),755:('exp(2*y)/2',[(y,0,4)]),757:('y*exp(-y)/2',[(y,0,S.oo)]),758:('1',[(y,x*x,x),(x,0,1)]),759:('1',[(y,0,S.sqrt(a*a-(x-a)**2)),(x,0,2*a)]),760:('1',[(x,y*y/(4*a),2*S.sqrt(a*y)),(y,0,4*a)]),761:('y*exp(y*y)/2',[(y,0,2)]),763:('x+y',[(y,0,4-x*x),(x,1,2)]),765:('x/(x*x+y*y)',[(y,0,x),(x,0,a)]),766:('pi*y*y/(2*a)',[(y,0,a)]),768:('4*y**3*exp(-y)/3',[(y,0,S.oo)]),769:('x/(x*x+y*y)',[(y,0,x),(x,0,3)]),770:('x**3*sqrt(x**4+1)',[(x,0,2)]),771:('exp(y)/2',[(y,0,3)]),775:('1',[(y,x*x,x),(x,0,1)])}
revnotes={750:r'0\le y\le2,\ y/2\le x\le1\ \Longleftrightarrow\ 0\le x\le1,\ 0\le y\le2x',751:r'0\le x\le y<\infty;\quad\int_0^y e^{-y}/y\,dx=e^{-y}',752:r'0\le x\le y\le1;\quad\int_0^y\sin(y^2)\,dx=y\sin(y^2)',755:r'0\le y\le4,\quad0\le x\le\sqrt{4-y};\quad\int_0^{\sqrt{4-y}}\frac{x e^{2y}}{4-y}\,dx=\frac12e^{2y}',757:r'0<y\le x<\infty;\quad\int_y^\infty xe^{-x^2/y}\,dx=\frac y2e^{-y}',761:r'0\le y\le2,\quad0\le x\le y/2',766:r'0\le y\le a,\ 0\le x\le y^2/a;\quad\int_0^{y^2/a}\frac{y^2}{\sqrt{y^4-a^2x^2}}\,dx=\frac{\pi y^2}{2a}',770:r'0\le x\le2,\quad0\le y\le x^3',771:r'0\le y\le3,\quad0\le x\le\sqrt{3-y}'}
for i,(f,lim) in reverse.items():multi(i,f,lim,extra=revnotes.get(i,r'\text{Swap the inner and outer slices over the same region.}'))
for i,f,lim,extra in [
(753,'x*y',[(y,x*x,2-x),(x,0,1)],r'0\le y\le1:\ 0\le x\le\sqrt y;\quad1\le y\le2:\ 0\le x\le2-y'),
(756,'x*y',[(x,y-2,2*y),(y,0,2)],r'-2\le x\le0:\ 0\le y\le x+2;\quad0\le x\le4:\ x/2\le y\le2'),
(762,'x',[(y,3,6-2*x),(x,0,S.Rational(3,2))],r'3\le y\le6,\quad0\le x\le(6-y)/2'),
(767,'x*x+y*y',[(y,x*x/(4*a),3*a-x),(x,0,2*a)],r'0\le y\le a:\ 0\le x\le2\sqrt{ay};\quad a\le y\le3a:\ 0\le x\le3a-y'),
(774,'x*y',[(x,y*y/2-3,y+1),(y,-2,4)],r'-3\le x\le-1:\ -\sqrt{2x+6}\le y\le\sqrt{2x+6};\quad-1\le x\le5:\ x-1\le y\le\sqrt{2x+6}')]:multi(i,f,lim,extra=extra)
manual(754,'pi*log((exp(1)+1)/2)/2',[st('Reverse the order over the quarter disk',r'0\le y\le1,\quad0\le x\le\sqrt{1-y^2}'),st('Evaluate the x-integral',r'\int_0^{\sqrt{1-y^2}}\frac{dx}{\sqrt{1-y^2-x^2}}=\frac\pi2'),st('Integrate the remaining factor',r'I=\frac\pi2\int_0^1\frac{e^y}{1+e^y}\,dy=\frac\pi2\ln\frac{1+e}{2}')])
manual(772,'pi**2/8',[st('Reverse the elliptical region',r'0\le x\le1,\quad0\le y\le\tfrac12\sqrt{1-x^2}'),st('Integrate in y',r'I=\frac\pi6\int_0^1\frac{1+x^2}{\sqrt{1-x^2}}\,dx'),st('Put x = sin t',r'I=\frac\pi6\int_0^{\pi/2}(1+\sin^2t)\,dt=\frac{\pi^2}{8}')])
manual(773,'pi**3/16',[st('Reverse the quarter disk',r'0\le x\le1,\quad0\le y\le\sqrt{1-x^2}'),st('Integrate in y',r'I=\frac\pi2\int_0^1\frac{\cos^{-1}x}{\sqrt{1-x^2}}\,dx'),st('Put t = arccos x',r'I=\frac\pi2\int_0^{\pi/2}t\,dt=\frac{\pi^3}{16}')])
# Polar integrals: r and theta are integrated exactly as displayed, with a Jacobian where converting dA.
polar={
746:('r**3*cos(theta)*sin(theta)',[(r,0,a),(th,0,S.pi/2)]),749:('r**3*sin(theta)**2',[(r,0,a),(th,S.pi/4,S.pi/2)]),764:('r*cos(theta)',[(r,0,S.sqrt(2)),(th,S.pi/4,S.pi/2)]),776:('r',[(r,0,1),(th,0,S.pi/4)]),778:('r',[(r,0,S.sin(th)),(th,0,S.pi)]),779:('r**5',[(r,0,2*S.cos(th)),(th,0,S.pi/2)]),780:('r*r*cos(theta)',[(r,0,1-S.sin(th)),(th,0,S.pi/2)]),782:('r',[(r,0,a*(1+S.cos(th))),(th,0,S.pi)]),783:('r*r*sin(theta)',[(r,0,1-S.cos(th)),(th,0,S.pi)]),784:('r*sin(theta)',[(r,0,a*(1+S.cos(th))),(th,0,S.pi)]),785:('r*sin(theta)',[(r,2,2*(1+S.cos(th))),(th,0,S.pi/2)]),786:('r**3*sin(theta)**2',[(r,2,4),(th,0,S.pi/2)]),787:('r**3',[(r,2*S.cos(th),4*S.cos(th)),(th,-S.pi/2,S.pi/2)]),788:('r*sqrt(a*a-r*r)',[(r,0,a*S.cos(th)),(th,0,S.pi/2)]),790:('r*sin(theta)',[(r,0,(1+S.cos(th))/2),(th,0,S.pi)]),791:('r*exp(-r*r)',[(r,0,S.oo),(th,0,S.pi/2)]),792:('2*log(r)',[(r,1,S.sqrt(S.E)),(th,0,2*S.pi)]),793:('r*exp(-r*r)',[(r,0,1),(th,0,S.pi/2)]),794:('cos(theta)',[(r,0,a/S.cos(th)),(th,0,S.pi/4)]),795:('r*r',[(r,0,1/S.cos(th)),(th,0,S.pi/4)]),796:('r**3*sin(theta)**2',[(r,0,a),(th,-S.pi/2,S.pi/2)]),798:('r**4*sin(theta)**2',[(r,0,a),(th,0,S.pi/2)]),799:('r*exp(-r*r)',[(r,0,a),(th,0,S.pi/2)]),800:('r*cos(2*theta)',[(r,0,4*a*S.cos(th)/S.sin(th)**2),(th,S.pi/4,S.pi/2)]),801:('r**3',[(r,0,a),(th,0,S.pi/2)]),802:('r**4*cos(theta)',[(r,0,a),(th,0,S.pi/2)]),803:('r*r*(cos(theta)+sin(theta))',[(r,0,a),(th,0,S.pi/2)]),804:('r**3',[(r,0,2),(th,0,S.pi/2)]),805:('r/(1+r*r)**2',[(r,0,S.oo),(th,0,S.pi/2)]),806:('r**3',[(r,0,S.sqrt(2)),(th,S.pi/4,S.pi/2)]),807:('r**3',[(r,0,2*S.cos(th)),(th,S.pi/4,S.pi/2)])}
for i,(f,lim) in polar.items():
 ov={788:a**3*(S.pi/6-S.Rational(2,9)),800:a*a*(4*S.pi-S.Rational(40,3))}.get(i)
 multi(i,f,lim,override=ov,extra=r'x=r\cos\theta,\ y=r\sin\theta,\quad dA=r\,dr\,d\theta',diagram=False)
 Q[i]['question']=Q[i]['sourceText']
manual(777,'2',[st('Convert the polar equation',r'r=2\Rightarrow x^2+y^2=4'),st('Identify the curve',r'\text{Circle, centre }(0,0),\ \text{radius }2')],question='Identify the curve r = 2.');Q[777]['answer']=r'\text{Circle of radius 2 centred at the origin}'
manual(781,'sqrt(pi)/2',[st('Square the integral',r'I^2=\int_0^\infty\int_0^\infty e^{-(x^2+y^2)}\,dx\,dy'),st('Use polar coordinates',r'I^2=\int_0^{\pi/2}\int_0^\infty re^{-r^2}\,dr\,d\theta=\frac\pi4'),st('Take the positive square root',r'I=\frac{\sqrt\pi}{2}')])
manual(789,'a*(2-pi/2)',[st('Use one loop',r'-\pi/4\le\theta\le\pi/4,\quad0\le r\le a\sqrt{\cos2\theta}'),st('Integrate in r',r'I=a\int_{-\pi/4}^{\pi/4}(\sqrt{1+\cos2\theta}-1)\,d\theta'),st('Use the nonnegative cosine on this interval',r'I=a\int_{-\pi/4}^{\pi/4}(\sqrt2\cos\theta-1)\,d\theta=a(2-\pi/2)')])
manual(797,'1',[st('Split the square at theta = pi/4',r'I=\int_0^{\pi/4}\int_0^{\sec\theta}r\,dr\,d\theta+\int_{\pi/4}^{\pi/2}\int_0^{\csc\theta}r\,dr\,d\theta'),st('Evaluate both triangles',r'I=\frac12\int_0^{\pi/4}\sec^2\theta\,d\theta+\frac12\int_{\pi/4}^{\pi/2}\csc^2\theta\,d\theta=\frac12+\frac12=1')])
# Changes of variables, with the Jacobian explicitly included.
manual(808,'1/2',[st('Invert the linear substitution',r'x=(u+v)/2,\quad y=(v-u)/2'),st('Take the determinant',r'J=\begin{vmatrix}1/2&1/2\\-1/2&1/2\end{vmatrix}=1/2')])
changes={809:('1/2',[(v,2,4),(u,1,9)],r'u=x^2-y^2,\ v=xy;\quad\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\frac1{2(x^2+y^2)}'),810:('2*u',[(u,0,1),(v,0,2)],r'x=u+v,\ y=2v;\quad J=2;\quad0\le u\le1,\ 0\le v\le2'),811:('u/4',[(u,-3,1),(v,5,7)],r'u=y-x,\ v=x+3y;\quad x=(v-3u)/4,\ y=(v+u)/4,\ J=1/4'),812:('u*u*v*v/2',[(u,-1,1),(v,-1,1)],r'u=x+y,\ v=x-y;\quad J=1/2;\quad|x|+|y|\le1\Leftrightarrow |u|\le1,|v|\le1'),813:('u*u/3',[(u,1,4),(v,-2,1)],r'u=x+y,\ v=x-2y;\quad J=1/3'),814:('u*exp(v)',[(v,0,1),(u,0,1)],r'x=u(1-v),\ y=uv,\quad J=u'),815:('sqrt(u)*v*v/3',[(v,-2*u,u),(u,0,1)],r'u=x+y,\ v=y-2x;\quad x=(u-v)/3,\ y=(2u+v)/3,\ J=1/3'),816:('u*u',[(v,0,1),(u,0,1)],r'x=u,\ y=uv;\quad J=u'),817:('cos(u/v)/2',[(u,-v,v),(v,0,1)],r'u=x-y,\ v=x+y;\quad J=1/2'),818:('1/4',[(v,4,8),(u,1,2)],r'u=x^2-y^2,\ v=2xy;\quad J=1/[4(x^2+y^2)]'),819:('v*exp(u*v)/2',[(u,0,2),(v,0,3)],r'u=x-y,\ v=x+y;\quad J=1/2'),820:('u*u/v',[(v,1,3),(u,-1,1)],r'x=v(1-u^2),\ y=u;\quad J=1-u^2'),821:('sin(u/2)*cos(v/2)/2',[(v,0,u),(u,0,2)],r'u=x+y,\ v=x-y;\quad J=1/2;\quad0\le v\le u\le2')}
for i,(f,lim,extra) in changes.items():
 multi(i,f,lim,extra=extra,diagram=False);Q[i]['question']=Q[i]['sourceText']
 if i==817:Q[i]['note']='The printed transformation omits x before −y; the invertible substitution consistent with the integrand is u=x−y, v=x+y.'
triple={822:('exp(x+y+z)',[(x,0,1),(y,0,1),(z,0,1)]),823:('1',[(z,0,y),(y,0,x),(x,0,1)]),824:('x*y*y*z',[(z,1,2),(y,1,3),(x,0,2)]),825:('r*r',[(r,0,z),(z,0,1),(th,0,2*S.pi)]),826:('1+x*y*z',[(x,0,4),(y,0,4),(z,0,4)]),827:('exp(z)',[(z,0,x+y),(y,0,1-x),(x,0,1)]),828:('x*y*z',[(x,0,y*z),(y,1,z),(z,0,2)]),829:('(r*r*cos(theta)**2+z*z)*r',[(th,0,2*S.pi),(r,0,S.sqrt(z)),(z,0,1)]),830:('1',[(z,0,2-x-y),(y,0,2-x),(x,0,1)]),831:('z',[(z,0,1-x-y),(y,0,1-x),(x,0,1)]),832:('x*y*z',[(z,0,S.sqrt(x*y)),(y,1/x,1),(x,1,3)]),833:('x*y*z',[(x,0,y*z),(y,0,2),(z,0,2)]),834:('y*sin(z)',[(x,0,S.pi),(y,0,S.pi),(z,0,1)]),835:('x',[(z,1,(x+y)**2),(y,0,1-x),(x,0,1)]),837:('x-2*y+z',[(z,0,x+y),(y,0,x*x),(x,0,1)]),838:('log(z)',[(z,1,S.exp(x)),(x,1,S.log(y)),(y,1,S.E)]),839:('x+y+z',[(z,0,x+2*y),(x,0,y),(y,0,1)]),840:('exp(x+y+z)',[(z,0,x+y),(y,0,x),(x,0,a)]),841:('y',[(z,0,x+y),(x,0,y),(y,0,1)]),842:('z',[(z,0,S.sqrt(x+y)),(y,0,x),(x,0,1)]),843:('x*z-y**3',[(z,0,1),(y,0,2),(x,-1,1)]),844:('r**5*sin(phi)**3*cos(phi)*cos(theta)*sin(theta)',[(r,0,2),(ph,0,S.pi/2),(th,0,S.pi/2)]),845:('1/(x+y+z+1)**3',[(z,0,1-x-y),(y,0,1-x),(x,0,1)]),846:('1',[(z,0,x+y),(y,0,1-x),(x,0,1)]),847:('x+y+z',[(z,x-y,x+y),(x,0,y),(y,0,2)])}
for i,(f,lim) in triple.items():
 multi(i,f,lim,diagram=False)
 if i in [825,829,844]:Q[i]['question']=Q[i]['sourceText'];Q[i]['steps'].insert(1,st('Include the coordinate volume element',r'dV=r\,dr\,d\theta\,dz\quad\text{or}\quad dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta'))
 if i in [828,835,838]:Q[i]['note']='The displayed limits are preserved from the source. Where the inner upper bound is below the lower bound, the iterated integral is signed, rather than an unsigned volume.'
manual(836,'64*pi/15-1024/225',[st('Use cylindrical coordinates',r'-\pi/2\le\theta\le\pi/2,\quad0\le r\le2\cos\theta,\quad-\sqrt{4-r^2}\le z\le\sqrt{4-r^2}'),st('Integrate z² and then r',r'I=\frac23\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta}r(4-r^2)^{3/2}\,dr\,d\theta=\frac{64}{15}\int_{-\pi/2}^{\pi/2}(1-|\sin\theta|^5)\,d\theta'),st('Evaluate the symmetric angular integral',r'I=\frac{64\pi}{15}-\frac{1024}{225}')])
for i,f,lim in [(848,'1',[(y,0,x),(x,0,1)]),(849,'r',[(r,0,1),(th,0,2*S.pi)]),(850,'1',[(y,x*x/(4*a),2*S.sqrt(a*x)),(x,0,4*a)]),(851,'1',[(y,x*x,x+2),(x,-1,2)]),(854,'1',[(y,x*x,2*x-x*x),(x,0,1)]),(855,'x*y',[(x,(y*y-6)/2,y+1),(y,-2,4)])]:multi(i,f,lim);Q[i]['question']=Q[i]['sourceText']
manual(852,'pi*a*b*(a*a+b*b)/4',[st('Map the ellipse to a unit disk',r'x=a r\cos\theta,\quad y=b r\sin\theta,\quad dA=ab r\,dr\,d\theta'),st('Use symmetry to remove the xy term',r'I=ab\int_0^{2\pi}\int_0^1(a^2r^2\cos^2\theta+b^2r^2\sin^2\theta)r\,dr\,d\theta'),st('Evaluate radial and angular factors',r'I=\frac{\pi ab(a^2+b^2)}4')])
manual(853,'pi*a*b',[st('Use elliptical polar coordinates',r'x=a r\cos\theta,\ y=b r\sin\theta,\ J=ab r'),st('Integrate the area element',r'A=ab\int_0^{2\pi}\int_0^1r\,dr\,d\theta=\pi ab')])
manual(856,'1/6',[st('Describe the triangle',r'0\le y\le1,\quad0\le x\le y'),st('Integrate in x',r'I=\int_0^1 2y^3(1-\sqrt{1-y^4})\,dy'),st('Set u = 1 − y⁴ in the second term',r'I=\frac12-\frac12\int_0^1\sqrt u\,du=\frac12-\frac13=\frac16')])
multi(857,'6-12*x-2/(3*x)',[(x,S.Rational(1,6),S.Rational(1,3))],extra=r'12x+\frac2{3x}=6\Rightarrow x=1/6,1/3');Q[857]['question']=Q[857]['sourceText']
areas={858:(a*a*(2*S.pi/3-S.sqrt(3)/2),r'A=a^2\int_0^{\pi/3}1\,d\theta+4a^2\int_{\pi/3}^{\pi/2}\cos^2\theta\,d\theta'),859:(a*a*(3*S.pi/2-4),r'A=2a^2\int_0^{\pi/2}(1-\cos\theta)^2\,d\theta'),860:(3*S.pi*a*a/2,r'A=\frac{a^2}2\int_0^{2\pi}(1+\cos\theta)^2\,d\theta'),861:(a*a*(2+S.pi/4),r'A=\frac{a^2}2\int_{-\pi/2}^{\pi/2}[(1+\cos\theta)^2-1]\,d\theta'),862:(S.pi*a*a/2,r'A=A_{\text{cardioid}}-A_{\text{circle}}=\frac32\pi a^2-\pi a^2'),863:(3*S.pi,r'A=\pi(2^2-1^2)=3\pi'),864:(S.pi/8-S.Rational(1,4),r'A=\int_0^{\pi/4}\sin^2\theta\,d\theta'),865:(a*a*(1-S.pi/4),r'A=\frac{a^2}2\int_0^{\pi/2}[\sin^2\theta-(1-\cos\theta)^2]\,d\theta')}
for i,(ans,formula) in areas.items():manual(i,ans,[st('Use the polar area element',r'dA=r\,dr\,d\theta;\quad A=\frac12\int(r_{\rm outer}^2-r_{\rm inner}^2)\,d\theta'),st('Use the intersection angles and boundaries',formula),step('Evaluate',ans)],note='The polar radius is nonnegative; choose the angular intervals where the stated inner and outer curves bound the required region.')
multi(866,'r**3',[(r,4*S.cos(th),9*S.cos(th)),(th,-S.pi/2,S.pi/2)],diagram=False);Q[866]['question']=Q[866]['sourceText']
manual(867,'pi*pi*a*a/8',[st('Use spherical coordinates in the first octant',r'0\le\rho\le a,\quad0\le\phi,\theta\le\pi/2,\quad dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta'),st('Separate the factors',r'I=\frac\pi2\int_0^a\frac{\rho^2}{\sqrt{a^2-\rho^2}}\,d\rho'),st('Put rho = a sin u',r'I=\frac\pi2a^2\int_0^{\pi/2}\sin^2u\,du=\frac{\pi^2a^2}{8}')])
multi(868,'z*r*r',[(r,0,S.sqrt(3*z)),(z,0,3),(th,0,2*S.pi)],diagram=False,extra=r'x^2+y^2=3z\Rightarrow0\le r\le\sqrt{3z};\quad dV=r\,dr\,d\theta\,dz');Q[868]['question']=Q[868]['sourceText']
(root/'data/unit-6-solutions.json').write_text(json.dumps([Q[i] for i in range(643,869)],ensure_ascii=False,indent=2))
missing=[i for i in range(643,869) if Q[i].get('status')!='solved']
assert not missing,('Unit 6 missing',missing)
print('UNIT 6 COMPLETE: 226/226',flush=True)
# Unit 7: vectors and differential operators.
coords=[x,y,z]
def vec(q):return S.Matrix([e(c) for c in q])
def grad(f):return vec([S.diff(e(f),c) for c in coords])
def div(F):return S.simplify(sum(S.diff(F[j],coords[j]) for j in range(3)))
def curl(F):return vec([S.diff(F[2],y)-S.diff(F[1],z),S.diff(F[0],z)-S.diff(F[2],x),S.diff(F[1],x)-S.diff(F[0],y)]).applyfunc(S.simplify)
def at(f,p):return f.subs(dict(zip(coords,map(e,p))))
def magnitude(i,V):
 V=vec(V);sq=S.simplify(V.dot(V));add(i,S.sqrt(sq),[step('Square and add the components',sq),step('Take the nonnegative square root',S.sqrt(sq))])
def gradient(i,f,p,norm=False,normal=False):
 G=grad(f);GP=at(G,p);ans=S.sqrt(GP.dot(GP)) if norm else GP/S.sqrt(GP.dot(GP)) if normal else GP
 steps=[st('Differentiate the scalar function',r'\nabla f=(f_x,f_y,f_z)'),step('Calculate the gradient',G),step('Evaluate at the point',GP)]
 if norm or normal:steps.append(step('Normalize' if normal else 'Calculate its magnitude',ans))
 add(i,ans,steps)
def directional(i,f,p,d):
 G=grad(f);GP=at(G,p);V=vec(d);unit=S.simplify(V/S.sqrt(V.dot(V)));ans=S.simplify(GP.dot(unit))
 add(i,ans,[step('Calculate the gradient',G),step('Evaluate at the point',GP),step('Normalize the given direction',unit),step('Take the dot product',ans)])
def field(i,F,p=None,want='both',potential=None):
 F=vec(F);D=div(F);C=curl(F)
 steps=[st('Use the definitions',r'\nabla\cdot F=P_x+Q_y+R_z;\quad\nabla\times F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)'),step('Differentiate the components: divergence',D),step('Differentiate the components: curl',C)]
 if potential is not None:
  pot=e(potential);assert S.simplify(grad(pot)-F)==S.zeros(3,1),(i,'bad potential')
  assert C==S.zeros(3,1),(i,'not conservative')
  steps+=[st('Integrate P with respect to x',r'\phi=\int P\,dx+g(y,z)'),step('Match phi_y = Q and phi_z = R',pot),step('Check the potential by differentiating it',grad(pot))]
  ans=pot;add(i,ans,steps);Q[i]['answer']+=' + C';return
 if p is not None:D=at(D,p);C=at(C,p);steps+=[step('Evaluate the divergence at the point',D),step('Evaluate the curl at the point',C)]
 ans=D if want=='div' else C if want=='curl' else S.Tuple(D,C)
 add(i,ans,steps)
magnitude(869,[2,-3,1]);manual(870,'1',[st('Use the right-handed unit-vector rule',r'\hat i\times\hat j=\hat k')]);Q[870]['answer']=r'\hat k'
magnitude(871,[6,-3,2]);manual(872,'pi/2',[st('Use the dot-product formula',r'a\cdot b=|a||b|\cos\theta=0'),st('For nonzero vectors',r'\cos\theta=0\Rightarrow\theta=\pi/2')],note='The angle is undefined if either vector is zero. The printed choices do not include π/2, so select “none of these” for the MCQ.')
A=vec([2,3,-1]);B=vec([-1,2,-4]);C=vec([1,1,1]);manual(873,A.cross(B).dot(A.cross(C)),[step('Calculate a × b',A.cross(B)),step('Calculate a × c',A.cross(C)),step('Take the dot product',A.cross(B).dot(A.cross(C)))])
manual(874,S.Tuple(-2,-3),[st('Orthogonality means zero dot product',r'k^2+5k+6=0'),st('Factor the quadratic',r'(k+2)(k+3)=0\Rightarrow k=-2,-3')])
V=vec([t**3,2*t**3-1/(5*t*t),0]);manual(875,S.Tuple(0,0,1),[step('Differentiate r(t)',V.diff(t)),step('Calculate r × r′',S.simplify(V.cross(V.diff(t))))],note='The curve is defined for t ≠ 0.')
manual(876,'0',[st('Line 9x − 5y = 7',r'r(t)=(t,(9t-7)/5)'),st('Parabola y = (x − 2)²',r'r(t)=(t,(t-2)^2)'),st('Circle x² + y² = 4',r'r(t)=(2\cos t,2\sin t),\quad0\le t\le2\pi')]);Q[876]['answer']=r'\text{The three parameterizations are given above.}'
arc={877:([1+3*t*t,4+4*t**3,0],0,1,(5*S.sqrt(5)-1)/2),878:([2*S.sqrt(2)*t**S.Rational(3,2)/3,t*t/2,t+3],0,2,4),879:([t,S.log(S.sec(t)),0],0,S.pi/3,S.log(2+S.sqrt(3))),880:([S.cos(t),S.sin(t),t],0,S.pi,S.sqrt(2)*S.pi),881:([t,4*t**S.Rational(3,2)/3,0],0,20,S.Rational(364,3))}
for i,(rr,lo,hi,ans) in arc.items():
 V=vec(rr);speed=S.sqrt(S.simplify(V.diff(t).dot(V.diff(t))));manual(i,ans,[step('Differentiate the curve',V.diff(t)),step('Calculate the speed',speed),step('Integrate speed over the interval',S.Integral(speed,(t,lo,hi))),step('Evaluate the arc length',ans)])
for i,f,p,norm,normal in [(882,'2*x*z**4-x*x*y',[2,-2,-1],True,False),(883,'x+y+z',[1,2,-1],False,False),(884,'3*x*x*y-y**3*z*z',[1,-2,1],False,False),(885,'x*x+y*y+z*z',[1,2,-2],True,False),(886,'x*x+y*y+z*z',[1,-1,S.Rational(1,2)],True,False),(887,'x*y*z',[1,2,-1],True,False),(890,'3*x*x*y-y**3*z*z',[1,-2,-1],False,False),(891,'x**3+y**3+3*x*y*z',[1,2,-1],False,True),(893,'2*z**3-3*(x*x+y*y)*z+atan(x*z)',[1,1,1],False,False)]:gradient(i,f,p,norm,normal)
Q[883]['note']='The gradient is the vector (1,1,1); if the MCQ intended its magnitude, that magnitude is √3.'
radialsteps=[st('Differentiate a radial function',r'\nabla f(r)=f\prime(r)\,\frac{(x,y,z)}r'),st('Sum the second derivatives',r'\nabla^2 f(r)=f\prime\prime(r)\frac{x^2+y^2+z^2}{r^2}+f\prime(r)\left(\frac3r-\frac{x^2+y^2+z^2}{r^3}\right)'),st('Use x² + y² + z² = r²',r'\nabla^2 f(r)=f\prime\prime(r)+2f\prime(r)/r')]
manual(889,'0',radialsteps,note='r > 0 and f is twice differentiable.');Q[889]['answer']=r'f\prime\prime(r)+2f\prime(r)/r'
for i in [888,936]:manual(i,'n*(n+1)*r**(n-2)',radialsteps+[st('Set f(r) = rⁿ',r'f\prime=nr^{n-1},\quad f\prime\prime=n(n-1)r^{n-2};\quad\nabla^2r^n=n(n+1)r^{n-2}')],note='Identity holds for r > 0.')
manual(892,'0',[st('Apply the chain rule',r'\nabla\ln r=\frac1r\nabla r=\frac1r\frac{\vec r}r=\frac{\hat r}r')]);Q[892]['answer']=r'\hat r/r'
manual(894,S.Tuple(S.Rational(5,2),1),[st('Use the point in the first surface',r'\lambda+2\mu=\lambda+2\Rightarrow\mu=1'),st('Calculate both normals at (1,−1,2)',r'n_1=(\lambda-2,-2,1),\quad n_2=(-8,4,12)'),st('Set their dot product to zero',r'-8(\lambda-2)-8+12=0\Rightarrow\lambda=5/2')])
manual(895,'0',[st('Use the product rule',r'\nabla[(a\cdot\vec r)r^{-n}]=r^{-n}\nabla(a\cdot\vec r)+(a\cdot\vec r)\nabla r^{-n}'),st('Differentiate each factor',r'\nabla(a\cdot\vec r)=a,\quad\nabla r^{-n}=-n\vec r/r^{n+2}')]);Q[895]['answer']=r'\frac a{r^n}-\frac{n(a\cdot\vec r)\vec r}{r^{n+2}}'
for i,F,p1,p2 in [(896,'x*y-z*z',[1,1,1],[4,1,2])]:
 G=grad(F);N1=at(G,p1);N2=at(G,p2);c=S.simplify(N1.dot(N2)/S.sqrt(N1.dot(N1)*N2.dot(N2)));manual(i,S.acos(c),[step('First normal',N1),step('Second normal',N2),step('Compute the cosine of the angle',c),step('Take arccos',S.acos(c))])
manual(897,S.acos(8/(3*S.sqrt(21))),[st('Calculate the normals',r'n_1=(4,-2,4),\quad n_2=(-4,2,1)'),st('Use the acute surface angle',r'\cos\theta=\frac{|n_1\cdot n_2|}{|n_1||n_2|}=\frac8{3\sqrt{21}}')],note='The angle between the specifically oriented normals has cosine −8/(3√21); the conventional acute angle between surfaces uses the absolute value.')
dirs={898:('x*y*y-y**3',[2,2,0],[S.sqrt(2)/2,S.sqrt(2)/2,0]),900:('x**3-x*y*y-z',[1,1,0],[2,-3,6]),901:('x*y*y+y*z**3',[2,-1,1],[0,-4,-1]),902:('1/sqrt(x*x+y*y+z*z)',[1,-1,1],[1,1,1]),903:('cos(x*y)+exp(y*z)+log(x*z)',[1,0,S.Rational(1,2)],[1,2,2]),904:('y*y+2*y*z+2*x*z',[2,0,3],[3,2,1]),906:('2*x*x+3*y*y+z*z',[2,1,3],[1,0,-2]),907:('x*x*sin(2*y)',[1,S.pi/2,0],[3,-4,0]),908:('x*x*y*y*z*z',[1,1,-1],[1,1,1]),909:('4*x*z**3-3*x*x*y*z*z',[2,-1,2],[2,3,6]),910:('x*exp(y)+cos(x*y)',[2,0,0],[3,-4,0]),911:('x*x-y*y+2*z*z',[1,2,3],[4,-2,1]),912:('x**3-x*y*y-z',[1,1,0],[2,-3,6]),913:('x*y*y+y*z**3',[2,-1,1],[1,2,2]),914:('a*x+b*y',[0,0,0],[S.sqrt(3)/2,S.Rational(1,2),0]),915:('y+2*x*y+2*z',[2,1,2],[2,1,2]),916:('3*exp(2*x-y+z)',[1,1,-1],[-4,4,7]),917:('x**3-3*x*y+4*y*y',[1,2,0],[S.sqrt(3)/2,S.Rational(1,2),0]),918:('x*y+y*z+z*x',[1,1,1],[3,0,-4]),919:('x/(x*x+y*y)',[0,2,0],[S.sqrt(3)/2,S.Rational(1,2),0])}
for i,(f,p,d) in dirs.items():directional(i,f,p,d)
Q[901]['steps'].insert(0,st('Find the normal at the separate surface point',r'\nabla(x\ln z-y^2)|_{(-1,2,1)}=(0,-4,-1)'))
Q[904]['steps'].insert(0,st('Take the divergence first',r'\nabla\cdot F=y^2+2yz+2xz'))
Q[915]['steps'].insert(0,st('Take the divergence and sphere normal first',r'\nabla\cdot F=y+2xy+2z;\quad n=(2,1,2)/3'))
manual(899,'3',[step('Calculate the gradient',vec([2,1,2])),st('Maximum directional derivative is gradient magnitude',r'\max D_uf=|\nabla f|=\sqrt{4+1+4}=3')])
manual(905,'0',[st('Find the gradient at (1,1)',r'\nabla\phi=(2,-2)'),st('A zero directional derivative requires perpendicularity',r'2u_x-2u_y=0\Rightarrow u_x=u_y;\quad u=\pm(1,1)/\sqrt2')]);Q[905]['answer']=r'u=\pm(1,1)/\sqrt2'
for i in [920,922]:field(i,['x','y','z'],want='div')
field(921,['x*y*z','3*x*x*y','x*z*z-y*y*z'],want='div')
manual(923,'-2',[st('Set the divergence equal to zero',r'1+1+a=0\Rightarrow a=-2')])
manual(924,'0',[st('Add the component derivatives',r'\operatorname{div}F=\partial P/\partial x+\partial Q/\partial y+\partial R/\partial z')]);Q[924]['answer']=r'P_x+Q_y+R_z'
for i in [925,931]:manual(i,'0',[st('Use the definition',r'F\text{ is solenoidal}\Longleftrightarrow\nabla\cdot F=0')]);Q[i]['answer']=r'\text{Solenoidal: divergence equals zero.}'
field(926,list(grad('atan(y/x)')),want='div');Q[926]['note']='The derivatives are local, away from the origin and the chosen arctangent branch boundary.'
for i,formula,value in [(927,'1+2+a=0',-3),(928,'b-3=0',3),(929,'2+3+a=0',-5),(933,r'(4+9+\lambda)xy^2=0',-13)]:manual(i,value,[st('Compute the divergence and set it to zero',formula),step('Solve for the constant',value)])
field(930,['2*x*(x*x+y*y+z*z)','3*y*(x*x+y*y+z*z)','4*z*(x*x+y*y+z*z)'],p=[1,1,1],want='div')
field(932,list(grad('x*y*z-2*y*y*z+x*x*z*z')),p=[2,4,1],want='div')
field(934,['y*y','2*x*y','-z*z'],p=[1,2,1],want='div');Q[934]['note']='The divergence vanishes at the stated point; the field is not solenoidal everywhere, since div F = 2x−2z.'
manual(935,'0',[st('Apply the product rule',r'\nabla\cdot[(a\times\vec r)r^{-n}]=r^{-n}\nabla\cdot(a\times\vec r)+(a\times\vec r)\cdot\nabla r^{-n}'),st('Both terms vanish',r'\nabla\cdot(a\times\vec r)=0,\quad(a\times\vec r)\cdot\vec r=0')],note='r > 0.')
manual(937,'(n+3)*r**n',[st('Use the divergence product rule',r'\nabla\cdot(r^n\vec r)=r^n\nabla\cdot\vec r+\vec r\cdot\nabla r^n'),st('Substitute the radial derivatives',r'=3r^n+n r^{n-2}(x^2+y^2+z^2)=(n+3)r^n')])
manual(938,'0',[st('Calculate the first directional derivative',r'b\cdot\nabla(1/r)=-(b\cdot\vec r)/r^3'),st('Differentiate again in direction a',r'a\cdot\nabla[-(b\cdot\vec r)r^{-3}]=-(a\cdot b)r^{-3}+3(a\cdot\vec r)(b\cdot\vec r)r^{-5}')]);Q[938]['answer']=r'3(a\cdot\vec r)(b\cdot\vec r)/r^5-(a\cdot b)/r^3'
field(939,['x*x*y*z','x*y*y*z','x*y*z*z'])
field(940,[0,0,'x**3']);Q[940]['note']='div v = 0, so the flow is incompressible. curl v = (0,−3x²,0), so it is not irrotational throughout space.'
field(941,list(grad('x**3+y**3+z**3-3*x*y')))
for i in [942,943,944,945,946,948]:manual(i,'0',[st('Use equality of mixed second partial derivatives',r'\nabla\times(\nabla\phi)=0'),st('Apply the field definition',r'\text{Conservative or irrotational fields have curl }0')],note='The scalar potential is twice differentiable on the domain.');Q[i]['answer']=r'\vec 0'
manual(947,S.Tuple(3,-4),[st('Compute the curl components',r'\nabla\times F=((3-a)x+(2b+8)z,0,(a-3)z)'),st('Set every coefficient to zero',r'a=3,\quad2b+8=0\Rightarrow b=-4')])
manual(949,'0',[st('Expand curl of a cross product',r'\nabla\times(a\times\vec r)=a(\nabla\cdot\vec r)-(a\cdot\nabla)\vec r'),st('Use constant a',r'=3a-a=2a')]);Q[949]['answer']=r'2a'
field(950,['y/(x*x+y*y)','-x/(x*x+y*y)',0],want='curl');Q[950]['note']='The field is defined only when x²+y² ≠ 0. It is locally irrotational, but not globally conservative on the punctured plane.'
field(951,['z*exp(2*x*y)','2*x*y*cos(y)','x+2*y'],p=[2,0,3],want='curl')
field(952,['y*y*cos(x)+z**3','2*y*sin(x)-4','3*x*z*z'],want='curl')
pots={953:(['z*z+2*x+3*y','3*x+2*y+z','y+2*z*x'],'x*z*z+x*x+3*x*y+y*y+y*z-1'),954:(['y*y-z*z+3*y*z-2*x','3*x*z+2*x*y','3*x*y-2*x*z+2*z'],'x*y*y-x*z*z+3*x*y*z-x*x+z*z'),959:(['x*x+x*y*y','y*y+x*x*y',0],'x**3/3+y**3/3+x*x*y*y/2'),960:(['y*sin(z)-sin(x)','x*sin(z)+2*y*z','x*y*cos(z)+y*y'],'x*y*sin(z)+cos(x)+y*y*z'),961:(['2*x*y*z','x*x*z+2*y','x*x*y'],'x*x*y*z+y*y'),962:(['exp(x)*cos(y)+y*z','x*z-exp(x)*sin(y)','x*y+z'],'exp(x)*cos(y)+x*y*z+z*z/2'),963:(['6*x*y+z**3','3*x*x-z','3*x*z*z-y'],'3*x*x*y+x*z**3-y*z'),964:(['y*y*cos(x)+z**3','2*y*sin(x)-4','3*x*z*z'],'y*y*sin(x)+x*z**3-4*y'),965:(['exp(y+2*z)','x*exp(y+2*z)','2*x*exp(y+2*z)'],'x*exp(y+2*z)'),966:(['x*x-y*z','y*y-z*x','z*z-x*y'],'(x**3+y**3+z**3)/3-x*y*z')}
for i,(F,pot) in pots.items():field(i,F,potential=pot)
Q[953]['note']='The condition φ(1,1,0)=4 fixes the constant to −1; do not add an arbitrary extra constant to this specific potential.';Q[953]['answer']=tex(e(pots[953][1]))
for i in [955]:manual(i,S.Tuple(4,2,-1),[st('Calculate the curl',r'\nabla\times V=(c+1,a-4,b-2)'),st('Set it to zero',r'a=4,\ b=2,\ c=-1'),st('Integrate the components',r'\phi=x^2/2+2xy+4xz-3y^2/2-yz+z^2+C')]);Q[955]['answer']=r'a=4,\ b=2,\ c=-1;\quad\phi=x^2/2+2xy+4xz-3y^2/2-yz+z^2+C'
field(956,['exp(x*y*z)']*3,p=[1,2,3])
field(957,['x*y*z','3*x*x*y','x*z*z-y*y*z'],want='curl')
manual(958,'0',[st('Expand a representative component',r'[\nabla\times(\nabla\times A)]_x=\partial_y(\partial_xA_y-\partial_yA_x)-\partial_z(\partial_zA_x-\partial_xA_z)'),st('Regroup the mixed derivatives',r'=\partial_x(\partial_xA_x+\partial_yA_y+\partial_zA_z)-(\partial_{xx}+\partial_{yy}+\partial_{zz})A_x'),st('The same calculation holds in y and z',r'\nabla\times(\nabla\times A)=\nabla(\nabla\cdot A)-\nabla^2A')],note='Assume the components have continuous second derivatives.');Q[958]['answer']=r'\nabla(\nabla\cdot A)-\nabla^2A'
missing=[i for i in range(869,967) if Q[i].get('status')!='solved'];assert not missing,('Unit 7 missing',missing)
(root/'data/unit-7-solutions.json').write_text(json.dumps([Q[i] for i in range(869,967)],ensure_ascii=False,indent=2))
print('UNIT 7 COMPLETE: 98/98',flush=True)
# Unit 8: parametrized work, scalar arc length, flux and Green's theorem.
def pathplot(paths,caption='Oriented path; arrows follow increasing parameter. The xy projection is shown for space curves.'):
 pts=[]
 for rr,lo,hi in paths:
  vals=[]
  for j in range(61):
   tt=e(lo)+(e(hi)-e(lo))*S.Rational(j,60)
   vals.append([float(e(c).subs(t,tt).subs({a:1,b:1}).evalf()) for c in rr[:2]])
  pts.extend(vals)
 return dict(kind='path',points=pts,axes=['x','y'],caption=caption+(' (a = b = 1 illustrated)' if any(e(c).has(a,b) for rr,lo,hi in paths for c in rr) else ''))
def pathvalue(F,rr,lo,hi,flux=False,scalar=False):
 rr=vec(rr);sub=dict(zip(coords,rr));fv=e(F).subs(sub,simultaneous=True) if scalar else vec(F).subs(sub,simultaneous=True);dr=rr.diff(t)
 integrand=fv*S.sqrt(dr.dot(dr)) if scalar else fv[0]*dr[1]-fv[1]*dr[0] if flux else fv.dot(dr)
 integrand=S.trigsimp(S.expand(integrand));result=intg(integrand,(t,e(lo),e(hi)))
 return rr,dr,integrand,result
def line(i,F,paths,flux=False,scalar=False,note=''):
 steps=[st('Use the path integral formula',r'\int_C f\,ds=\int f(r(t))|r\prime(t)|\,dt' if scalar else r'\int_C F\cdot n\,ds=\int(P\,dy-Q\,dx)' if flux else r'\int_C F\cdot dr=\int F(r(t))\cdot r\prime(t)\,dt')];results=[]
 for j,(rr,lo,hi) in enumerate(paths):
  rr,dr,integrand,result=pathvalue(F,rr,lo,hi,flux,scalar);results.append(result)
  steps.extend([st('Parameterize segment '+str(j+1),r'r(t)='+tex(rr)+r',\quad '+tex(e(lo))+r'\leq t\leq '+tex(e(hi))),step('Differentiate the path',dr),step('Substitute into the integrand',integrand),step('Integrate this segment',S.Eq(S.Integral(integrand,(t,e(lo),e(hi))),result))])
 total=S.simplify(sum(results));steps.append(step('Add the segment contributions',total))
 add(i,total,steps,note=note,diagram=pathplot(paths))
 if flux:Q[i]['note']=(note+' For an open oriented curve, the right-hand normal n ds = (dy,−dx) is used; the opposite normal reverses the sign.').strip()
def segments(vertices):return [([e(A[j])+t*(e(B[j])-e(A[j])) for j in range(3)],0,1) for A,B in zip(vertices,vertices[1:])]
def work(i,F,pot,A,B,note=''):
 F=vec(F);pot=e(pot);assert S.simplify(grad(pot)-F)==S.zeros(3,1),(i,'wrong potential')
 va=at(pot,A);vb=at(pot,B)
 add(i,S.simplify(vb-va),[step('Check that the field is the gradient of a potential',S.Eq(grad(pot),F)),step('A scalar potential',pot),st('Use the fundamental theorem for line integrals',r'\int_A^B F\cdot dr=\phi(B)-\phi(A)'),step('Evaluate the endpoint values',S.Tuple(vb,va)),step('Subtract the initial value from the final value',S.simplify(vb-va))],note=note,diagram=pathplot(segments([A,B]),'Endpoints connected for reference. The work is the same along every admissible path.'))
def green(i,P,R,limits,paths=None,verify=False,note='',flux=False):
 P=e(P);R=e(R);f=S.diff(P,x)+S.diff(R,y) if flux else S.diff(R,x)-S.diff(P,y)
 steps=[st('Apply outward flux / divergence form' if flux else 'Apply Green’s theorem to the positively oriented boundary',r'\oint_C(P\,dy-Q\,dx)=\iint_D(P_x+Q_y)\,dA' if flux else r'\oint_C(P\,dx+Q\,dy)=\iint_D(Q_x-P_y)\,dA'),step('Differentiate the field components',f)]
 out=f
 for bound in limits:
  steps.append(step('Integrate with respect to '+str(bound[0]),S.Integral(out,bound)));out=intg(out,bound);steps.append(step('Apply these bounds',out))
 if verify:
  assert paths
  values=[]
  for j,(rr,lo,hi) in enumerate(paths):
   rv,dv,fv,result=pathvalue([P,R,0],rr,lo,hi,flux)
   steps.extend([step('Parameterize boundary segment '+str(j+1),rv),step('Boundary integrand',fv),step('Evaluate its line integral',S.Eq(S.Integral(fv,(t,e(lo),e(hi))),result))]);values.append(result)
  total=S.simplify(sum(values));assert S.simplify(total-out)==0,(i,total,out)
  steps.append(st('Compare both sides',tex(total)+r'=\oint_C F\cdot dr=\iint_D(Q_x-P_y)\,dA='+tex(out)))
 add(i,out,steps,note=note,diagram=polygon(limits) if len(limits)==2 else None)
 if paths:Q[i]['diagram']=pathplot(paths,'Positive (counterclockwise) boundary orientation. Shaded interiors represent the enclosed region.')
def rectangle(aa=1,bb=1):return segments([[0,0,0],[aa,0,0],[aa,bb,0],[0,bb,0],[0,0,0]])
def between(lower,upper):return [([t,e(lower).subs(x,t),0],0,1),([t,e(upper).subs(x,t),0],1,0)]
manual(967,'0',[st('Use a scalar potential',r'F=\nabla\phi\Rightarrow\int_A^B F\cdot dr=\phi(B)-\phi(A)'),st('Path independence implies vanishing circulation',r'\oint_C F\cdot dr=0;\quad\nabla\times F=0')],note='A continuously differentiable curl-free field is conservative on a simply connected domain. Curl zero alone is insufficient on a domain with holes.');Q[967]['answer']=r'\text{Conservative (hence irrotational).}'
line(968,['3*x*y','-y*y',0],[([t,2*t*t,0],0,1)])
line(969,[2,1,0],[([1,t,0],0,2)])
line(970,['y','x','z'],[([S.cos(t),S.sin(t),t*t],0,2*S.pi)])
work(971,['2*x*y+z**3','x*x','3*x*z*z'],'x*x*y+x*z**3',[1,-2,1],[3,1,4])
tri972=segments([[1,1,0],[0,1,0],[0,0,0],[1,1,0]])
green(972,'x*x+y*y','x*x-y*y',[(x,0,y),(y,0,1)],tri972)
line(973,['x*x-y*y','2*x*y',0],[([t*t,t,0],0,2)])
line(974,'x-y*z*z',segments([[0,0,1],[1,1,0]])+[([t,t*t,0],1,2)],scalar=True,note='This is the scalar line integral ∫ f ds; include arc length |r′(t)|, rather than a vector dot product.')
green(975,'x*x+y*y','-2*x*y',[(y,0,b),(x,0,a)],rectangle(a,b))
work(976,['x*y*y+y**3','x*x*y+3*x*y*y',0],'x*x*y*y/2+x*y**3',[1,2,0],[3,4,0])
line(977,['x*x','x*y',0],[([t*t,t,0],0,1)])
work(978,['y*z+2*x','x*z','x*y+2*z'],'x*y*z+x*x+z*z',[0,1,1],[1,0,1])
green(979,'x*x+x*y','x*x+y*y',[(y,-1,1),(x,-1,1)],segments([[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]))
work(980,['2*x*y+z**3','x*x','3*x*z*z'],'x*x*y+x*z**3',[1,-2,1],[4,2,5])
work(981,['y*y+2*x*z','z*z+2*x*y','x*x+2*y*z'],'x*y*y+y*z*z+x*x*z',[1,0,1],[1,2,3])
line(982,['5*x*y','2*y',0],[([t,t**3,0],1,2)])
work(983,['2*x*y+z*z','x*x','2*x*z'],'x*x*y+x*z*z',[1,-2,1],[3,1,4])
work(984,['x*x-y*z','y*y-z*x','z*z-x*y'],'(x**3+y**3+z**3)/3-x*y*z',[1,1,1],[2,2,2])
line(985,['y/(x*x+y*y)','-x/(x*x+y*y)',0],[([S.cos(t),S.sin(t),0],0,2*S.pi)],note='Counterclockwise orientation. The field is undefined at the origin, so Green’s theorem cannot be applied to the entire disk; zero curl off the origin does not make this closed integral zero.')
work(986,['x*x-y*z','y*y-z*x','z*z-x*y'],'(x**3+y**3+z**3)/3-x*y*z',[1,1,0],[2,0,1])
green(987,'2*x*x-y*y','x*x+y*y',[(y,0,S.sqrt(a*a-x*x)),(x,-a,a)],note='The upper semicircle and its diameter are traversed counterclockwise.')
work(988,['x*x-y*y+x','-2*x*y-y',0],'x**3/3-x*y*y+x*x/2-y*y/2',[0,0,0],[1,1,0])
line(989,['y-x*x','z-y*y','x-z*z'],[([t,t*t,t**3],0,1)])
line(990,['2*x*x*y','3*x*y',0],[([t,4*t*t,0],0,1)])
work(991,['x*x-y*y+2*x','-2*x*y-y',0],'x**3/3-x*y*y+x*x-y*y/2',[0,0,0],[1,1,0],note='The potential proves the same value along both the parabola x = y² and the straight line y = x.')
line(992,['3*x*x-3*x','3*z',1],[([t,t,t],0,1)])
line(993,['3*x*x','2*x*z-y','z'],[([2*t,t,3*t],0,1)])
work(994,['exp(x-y+z*z)','-exp(x-y+z*z)','2*z*exp(x-y+z*z)'],'exp(x-y+z*z)',[0,-1,1],[2,4,0])
line(995,['x','-z','2*y'],segments([[0,0,0],[1,1,0],[1,1,1],[0,0,0]]))
line(996,['x*x*y','x**3/3','x*y'],[([S.cos(t),S.sin(t),2*S.sin(t)**2-1],0,2*S.pi)])
line(997,['2*y+3','x*z','y*z-x'],[([2*t*t,t,t**3],0,1)])
line(998,['3*x*x','2*x*z-y','z'],[([t,t*t/4,3*t**3/8],0,2)])
work(999,['x+2*y+4*z','2*x-3*y-z','4*x-y+2*z'],'x*x/2+2*x*y+4*x*z-3*y*y/2-y*z+z*z',[1,1,0],[2,0,1])
line(1000,['16*y','3*x*x+2',0],[([a*S.sin(t),S.cos(t),0],0,S.pi)],note='The right half-ellipse runs from (0,1) to (0,−1), so this is an open clockwise arc, not the full ellipse.')
line(1001,['3*x*x+6*y','-14*y*z','20*x*z*z'],segments([[0,0,0],[1,0,0],[1,1,0],[1,1,1]]))
line(1002,[4,0,0],segments([[4,0,0],[0,4,0]]),flux=True)
circle2=[([2*S.cos(t),2*S.sin(t),0],0,2*S.pi)]
# Circle area: integrate vertically over the disk.
green(1003,'2*x-y','x+y',[(y,-S.sqrt(4-x*x),S.sqrt(4-x*x)),(x,-2,2)],circle2)
line(1004,[2,0,0],segments([[3,0,0],[0,3,0]]),flux=True)
line(1005,['3*x*y','x-y',0],[([t,t*t,0],-1,4)],flux=True)
circle1=[([S.cos(t),S.sin(t),0],0,2*S.pi)]
green(1006,'3*x','5*y',[(y,-S.sqrt(1-x*x),S.sqrt(1-x*x)),(x,-1,1)],circle1,flux=True)
green(1007,'x*x','-y',[(y,-S.sqrt(9-x*x),S.sqrt(9-x*x)),(x,-3,3)],[([3*S.cos(t),3*S.sin(t),0],0,2*S.pi)],flux=True)
green(1008,'y*y-7*y','2*x*y+2*x',[(y,-S.sqrt(1-x*x),S.sqrt(1-x*x)),(x,-1,1)],circle1,verify=True)
tri=segments([[0,0,0],[1,0,0],[0,1,0],[0,0,0]])
green(1009,'3*x*x-8*y*y','4*y-6*x*y',[(y,0,1-x),(x,0,1)],tri,verify=True)
green(1010,'6*y+x','y+2*x',[(y,3-S.sqrt(4-(x-2)**2),3+S.sqrt(4-(x-2)**2)),(x,0,4)],[([2+2*S.cos(t),3+2*S.sin(t),0],0,2*S.pi)])
green(1011,'x*x*y','y**3',[(y,x**3,x),(x,0,1)],between(x**3,x))
green(1012,'-y*y','x*y',[(y,0,1),(x,0,1)],rectangle())
green(1013,'x*x','x*y',[(y,0,1),(x,0,1)],rectangle(),verify=True)
green(1014,'x+y','2*x*y',[(y,0,b),(x,0,a)],rectangle(a,b),verify=True)
green(1015,'3*x*x-8*y*y','4*y-6*x*y',[(y,x*x,S.sqrt(x)),(x,0,1)],between(x*x,S.sqrt(x)))
green(1016,'y*y','x*x',[(y,0,1-x),(x,0,1)],tri)
tri17=segments([[0,0,0],[S.pi/2,0,0],[S.pi/2,1,0],[0,0,0]])
green(1017,'y-sin(x)','cos(x)',[(y,0,2*x/S.pi),(x,0,S.pi/2)],tri17,verify=True)
green(1018,'x*x+y*y','-2*x*y',[(y,0,b),(x,0,a)],rectangle(a,b),verify=True)
green(1019,'x-y','x',[(y,-S.sqrt(1-x*x),S.sqrt(1-x*x)),(x,-1,1)],circle1,verify=True)
tri20=segments([[0,0,0],[1,0,0],[1,1,0],[0,0,0]])
green(1020,'x*x*y','x*x',[(y,0,x),(x,0,1)],tri20)
green(1021,'x*y+y*y','x*x',[(y,x*x,x),(x,0,1)],between(x*x,x),verify=True)
green(1022,'x*x-2*x*y','x*x*y+3',[(y,x*x,x),(x,0,1)],between(x*x,x),verify=True)
green(1023,'1/y','1/x',[(y,1,S.sqrt(x)),(x,1,4)],note='The boundary orientation is positive. The region stays away from x = 0 and y = 0, so both components and their derivatives are continuous here.')
missing=[i for i in range(967,1024) if Q[i].get('status')!='solved'];assert not missing,('Unit 8 missing',missing)
(root/'data/unit-8-solutions.json').write_text(json.dumps([Q[i] for i in range(967,1024)],ensure_ascii=False,indent=2))
print('UNIT 8 COMPLETE: 57/57',flush=True)
book=dict(title='Mathematics I — Semester 1, Units 6–8',total=381,range=[643,1023],questions=[Q[i] for i in range(643,1024)])
assert len(book['questions'])==381 and all(q['answer'] and q['steps'] and q['status']=='solved' for q in book['questions'])
(root/'data/solutions.json').write_text(json.dumps(book,ensure_ascii=False,indent=2))
(root/'data/solutions.js').write_text('window.MATHS_BOOK='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
(root/'coverage.json').write_text(json.dumps(dict(total=381,solved=381,remaining=0,units={str(j):sum(q['unit']==j for q in book['questions']) for j in [6,7,8]}),indent=2))
print('ALL 381 QUESTIONS COMPLETE',flush=True)

import runpy
runpy.run_path(str(root/'tools/augment_book.py'))
