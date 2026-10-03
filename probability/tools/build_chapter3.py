"""Author and recalculate every Chapter 3 worked solution; no answer-key copying."""
import json, math, statistics
from fractions import Fraction as F
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
source=json.loads((ROOT/'data/questions-source.json').read_text())
Q={a['id']:{'id':a['id'],'unit':3,'question':' '.join(a['question'].split()),'marks':int(a['marks'].strip()) if a['marks'].strip().isdigit() else 1,'page':a['page'],'steps':[]} for a in source if a['unit']==3}
def fmt(x):
 if isinstance(x,F):
  return str(x.numerator) if x.denominator==1 else f'{x.numerator}/{x.denominator} (≈ {float(x):.6g})'
 return f'{x:.8g}' if isinstance(x,float) else str(x)
def add(n,answer,*steps,note=None,question=None):
 q=Q[n]; q['answer']=answer;q['steps']=[{'title':t,'text':x,'formula':f} for t,x,f in steps]
 if note:q['note']=note
 if question:q['question']=question
 return q
def table(n,labels,x,f,kind='Values'):
 Q[n]['table']={'headers':[kind,*map(str,labels)],'rows':[['Frequency',*map(str,f)]]}
 return x,f
def simple(n,answer,rule,work,reason='',note=None):
 return add(n,answer,('Choose the formula',reason,rule),('Substitute and simplify','',work),note=note)
def median(n,values):
 s=sorted(values);N=len(s);ans=statistics.median(s)
 return add(n,fmt(ans),('Arrange in ascending order','Always sort before choosing the middle value.',', '.join(map(str,s))),('Find the middle','For an odd count take the middle observation; for an even count average the two middle observations.', f'N = {N}; median = '+(f'({s[N//2-1]} + {s[N//2]}) / 2 = {fmt(ans)}' if N%2==0 else f'{s[N//2]}')))
def moments(x,f,origin,r=4):
 return [sum(F(w)*(F(v)-F(origin))**i for v,w in zip(x,f))/sum(f) for i in range(1,r+1)]
def mean(x,f):return sum(F(v)*w for v,w in zip(x,f))/sum(f)
def sd_solution(n,x,f=None,labels=None):
 f=f or [1]*len(x); table(n,labels or x,x,f)
 N=sum(f);s=sum(F(a)*b for a,b in zip(x,f));ss=sum(F(a)**2*b for a,b in zip(x,f));m=s/N;v=ss/N-m*m;sd=math.sqrt(float(v))
 return add(n,fmt(sd),('Calculate the mean','Use the given values, or class midpoints for grouped data.',f'N = {N}; Σfx = {fmt(s)}; mean = Σfx/N = {fmt(m)}'),('Calculate the variance','This practice book uses the population variance, dividing by N.',f'Σfx² = {fmt(ss)}; σ² = Σfx²/N − mean² = {fmt(v)}'),('Take the square root','Standard deviation has the same unit as the original observations.',f'σ = √({fmt(v)}) = {fmt(sd)}'))
def grouped(n,edges,f,wants=('mean',),labels=None,inclusive=False):
 x=[(F(a)+F(b))/2 for a,b in zip(edges,edges[1:])]
 label=labels or [f'{a}–{b}' for a,b in zip(edges,edges[1:])]
 table(n,label,x,f,'Class'); N=sum(f); cf=[];c=0
 for v in f:c+=v;cf.append(c)
 Q[n]['table']['rows'].extend([['Midpoint',*map(fmt,x)],['Cumulative frequency',*map(str,cf)]])
 steps=[('Prepare the data','Use midpoints for the mean and cumulative frequencies to locate the median class.',f'N = Σf = {N}')]; ans=[]
 if inclusive:steps[0]=('Make class boundaries','The classes contain whole-number scores. Subtract 0.5 from each lower limit and add 0.5 to each upper limit to make continuous boundaries.',f'N = {N}; continuous boundaries: '+', '.join(map(str,edges)))
 if 'mean' in wants:
  total=sum(a*b for a,b in zip(x,f));m=total/N
  steps.append(('Find the mean','Multiply each midpoint by its frequency and add the products.',f'Σfx = {fmt(total)}; mean = Σfx/N = {fmt(m)}'));ans.append('Mean = '+fmt(m))
 if 'median' in wants:
  j=next(i for i,v in enumerate(cf) if v>=N/2);L=F(edges[j]);h=F(edges[j+1])-L;before=cf[j-1] if j else 0;med=L+(F(N,2)-before)*h/f[j]
  steps.append(('Find the median class',f'The cumulative frequency first reaches N/2 in class {label[j]}. Here L is its lower boundary, cf is the cumulative frequency before it, f is its frequency and h is its width.',f'N/2 = {fmt(F(N,2))}; L = {fmt(L)}; cf = {before}; f = {f[j]}; h = {fmt(h)}'))
  steps.append(('Calculate the median','Interpolate within the median class.',f'Median = L + [(N/2 − cf)/f]h = {fmt(L)} + [({fmt(F(N,2))} − {before})/{f[j]}] × {fmt(h)} = {fmt(med)}'));ans.append('Median = '+fmt(med))
 if 'mode' in wants:
  j=max(range(len(f)),key=f.__getitem__);prev=f[j-1] if j else 0;nxt=f[j+1] if j+1<len(f) else 0;L=F(edges[j]);h=F(edges[j+1])-L;mod=L+F(f[j]-prev,2*f[j]-prev-nxt)*h
  steps.append(('Find the modal class',f'The highest frequency is {f[j]}, in class {label[j]}. f₁ is this frequency, f₀ is the preceding frequency, and f₂ is the following frequency.',f'L = {fmt(L)}; h = {fmt(h)}; f₀ = {prev}; f₁ = {f[j]}; f₂ = {nxt}'))
  steps.append(('Calculate the mode','Use the grouped-data mode formula.',f'Mode = L + [(f₁−f₀)/(2f₁−f₀−f₂)]h = {fmt(L)} + [({f[j]}−{prev})/({2*f[j]}−{prev}−{nxt})] × {fmt(h)} = {fmt(mod)}'));ans.append('Mode = '+fmt(mod))
 q=add(n,'; '.join(ans),*steps)
 if 'mode' in wants and (j==0 or j==len(f)-1):q['note']='The modal class is at the edge. The interpolated mode uses a zero frequency for the absent neighbouring class; it is an estimate under that convention.'
 return q
simple(205,'6 (empirical estimate)','Mode ≈ 3 Median − 2 Mean','Median ≈ (10 + 2×4)/3 = 6','Use the empirical relation for a moderately skewed distribution.',note='Mean and mode alone do not uniquely determine the exact median. The question expects the empirical relation.')
median(206,[2,6,6,8,4,2,7,9])
simple(207,'3','Mean = Σx / N','54 = 51 + x ⇒ x = 3','There are 10 observations, so the required total is 10×5.4=54.')
simple(208,'20','Median = (4th value + 5th value)/2','18 = (16 + x)/2 ⇒ x = 36 − 16 = 20','Use the printed ascending order of the 8 observations.')
median(209,[6,3,8,2,9,1]);median(210,[2,9,3,7,5,4,3,2,10])
simple(211,'48 (empirical estimate)','Median ≈ (Mode + 2 Mean)/3','Median ≈ (24 + 2×60)/3 = 48',note='This uses the empirical mean–median–mode relation, not an exact identity.')
simple(212,'9','Median of 7 sorted observations = 4th value','x + 6 = 15 ⇒ x = 9')
grouped(213,[20,30,40,50,60,70,80],[0,4,18,60,33,15],('median',));Q[213]['note']='The calculation is 57.1666…, which rounds to 57.17. The printed key 57.16 appears to truncate.'
simple(214,'20','Median = (16 + x)/2','18 = (16 + x)/2 ⇒ x = 20')
simple(215,'18','Median = [(p+1) + (p+5)]/2','21 = p + 3 ⇒ p = 18','The six observations are in ascending order.')
median(216,[46,64,87,43,58,77,35,90,55,99,33])
simple(217,'x + 3.5','Median = (3rd value + 4th value)/2','[(x+3) + (x+4)]/2 = x + 3.5')
add(218,'20.5 (unchanged)',('Identify the median','For 9 sorted observations the median is the 5th value.','Median = x₍₅₎ = 20.5'),('Check the changes','Only the 6th, 7th, 8th and 9th values increase. None crosses below the unchanged 5th value.','New median = 20.5'))
table(219,['0–10','10–20','20–30','30–40','40–50','50–60'],[],[10,'x',25,30,'y',10],'Class')
add(219,'x = 9; y = 16',('Use the total frequency','The known frequencies add to 75.','x + y = 100 − 75 = 25'),('Apply the median formula','The median 32 lies in 30–40. L=30, h=10, f=30 and cf=10+x+25.','32 = 30 + [(50−35−x)/30]×10'),('Solve the unknown frequencies','','6 = 15 − x ⇒ x = 9; y = 25 − 9 = 16'))
grouped(220,list(range(0,141,20)),[6,8,10,12,6,5,3],('mode',))
sd_solution(221,[50,60,42,68,20])
table(222,['0–10','10–20','20–30','30–40','40–50','50–60','60–70'],[],[8,10,'f',16,12,6,7],'Class')
add(222,'f = 10',('Locate the modal class','Mode 36 lies in 30–40. The modal frequency is 16; the preceding frequency is f and the next is 12.','L = 30; h = 10'),('Substitute in the mode formula','','36 = 30 + [(16−f)/(32−f−12)]×10'),('Solve','','0.6(20−f) = 16−f ⇒ 12−0.6f = 16−f ⇒ 0.4f = 4 ⇒ f = 10'))
add(223,'5',('Count the repetitions','The number 5 appears 3 times. The number 10 appears twice and all others appear once.','Frequency(5) = 3'),('Choose the most frequent value','The mode is the observation with the highest frequency.','Mode = 5'))
simple(224,'−0.2','Karl Pearson skewness = (Mean − Mode)/SD','(25 − 26)/5 = −0.2')
m=moments([-1,0,1,4],[1]*4,F(1));simple(225,fmt(m[3]/m[1]**2),'β₂ = μ₄ / μ₂²',f'Mean=1; μ₂={fmt(m[1])}; μ₄={fmt(m[3])}; β₂={fmt(m[3]/m[1]**2)}','Deviations from the mean are −2,−1,0,3.');Q[225]['note']='The exact Pearson kurtosis is 2. Excess kurtosis is 2−3=−1.'
simple(226,'k','SD(X + a) = SD(X)','Each observation increases by 10, so the new SD remains k.','Adding a constant shifts the mean by the same amount; deviations from the mean stay unchanged.')
simple(227,'Mean = 8; variance = 8','E(2X)=2E(X); Var(2X)=4Var(X)','New mean = 2×4 = 8; new variance = 4×2 = 8')
sd_solution(228,[50,70,82,93,20]);Q[228]['note']='The calculated value is 25.7992…, which rounds to 25.80. The printed key 25.79 truncates it.';sd_solution(229,[1,4,7,2,6])
simple(230,'0','μ₃ = m₃ − 3m₂m₁ + 2m₁³','μ₃ = 10 − 3×4×1 + 2×1³ = 0','Here m₁,m₂,m₃ are moments of X−4. Centre this shifted variable by its own mean m₁.')
simple(231,'2.25','CV = 100σ/Mean; Sk = 3(Mean − Median)/σ','σ = 20×20/100 = 4; Sk = 3(20−17)/4 = 2.25','Use the median-based Pearson coefficient.');Q[231]['note']='The numerical result follows the supplied values, but 2.25 is unusually large for the description “moderately skewed”.'
add(232,'Section B is more skewed',('Use Pearson’s coefficient','Compare magnitudes of (mean−mode)/SD, not only the signs.','Sk(A) = (55−58.72)/15.4 ≈ −0.241558'),('Calculate section B','','Sk(B) = (53−48.83)/15.4 ≈ 0.270779'),('Compare absolute values','A is negatively skewed; B is positively skewed. B has the larger absolute coefficient.','|Sk(B)| > |Sk(A)|'))
simple(233,'Males: 70%; females: 30%','Combined mean = 6.2p + 7.3(1−p)','6.53 = 7.3−1.1p ⇒ p = 0.77/1.1 = 0.7','Let p be the male proportion. The female proportion is 1−p.')
def discrete_mean(n,x,f):
 table(n,x,x,f);N=sum(f);total=sum(a*b for a,b in zip(x,f));simple(n,fmt(F(total,N)),'Mean = Σfx/Σf',f'Σf = {N}; Σfx = {total}; mean = {total}/{N} = {fmt(F(total,N))}','Multiply each value by its frequency before adding.')
discrete_mean(234,[35,45,55,60,75,80],[12,18,10,6,3,11]);discrete_mean(235,[100,200,300,400,500],[3,5,6,9,2])
grouped(236,[0,10,20,30,40,50,60],[12,18,27,20,15,8]);discrete_mean(237,[100,120,140,160,180,200,220],[3,6,10,15,24,42,75]);grouped(238,[0,8,16,24,32,40,48],[8,7,16,24,15,7])
grouped(239,[0,5,10,15,20,25,30],[20,7,2,9,10,5]);Q[239]['steps'].insert(0,{'title':'Convert less-than totals to frequencies','text':'Subtract successive cumulative totals 20,27,29,38,48,53. Assume capital starts at 0 lakhs.','formula':'f = 20, 7, 2, 9, 10, 5'})
grouped(240,[0,10,20,30,40,50,60],[4,16,20,10,7,3]);Q[240]['steps'].insert(0,{'title':'Convert more-than totals to frequencies','text':'Subtract consecutive cumulative counts 60,56,40,20,10,3. The final class is taken as 50–60.','formula':'f = 4,16,20,10,7,3'})
median(241,[2,8,4,6,10,12,4,8,14,16])
def discrete_stats(n,x,f):
 table(n,x,x,f);N=sum(f);cf=[];z=0
 for w in f:z+=w;cf.append(z)
 def at(k):return next(v for v,c in zip(x,cf) if c>=k)
 med=at((N+1)//2) if N%2 else F(at(N//2)+at(N//2+1),2)
 modes=[v for v,w in zip(x,f) if w==max(f)];mu=mean(x,f)
 Q[n]['table']['rows'].append(['Cumulative frequency',*map(str,cf)])
 return N,mu,med,modes
N,mu,med,modes=discrete_stats(242,list(range(1,10)),[8,10,11,16,20,25,15,9,6]);add(242,fmt(med),('Calculate the total and median positions','','N = 120; middle positions = 60th and 61st'),('Use cumulative frequencies','The cumulative frequency is 45 at x=4 and 65 at x=5. Both middle observations are 5.','Median = (5+5)/2 = 5'))
grouped(243,[10,20,30,40,50,60],[5,8,13,10,8],('median',));grouped(244,[0,10,20,30,40,50,60],[12,18,27,20,17,6],('median',))
table(245,['0–10','10–20','20–30','30–40','40–50'],[],[15,20,'x',14,16],'Class')
add(245,'x = 25',('Express the total','Median 24 lies in 20–30. Known frequencies add to 65.','N = 65+x; L = 20; cf = 35; f = x; h = 10'),('Apply the median formula','','24 = 20 + [((65+x)/2 −35)/x]×10'),('Solve','','4 = 5(x−5)/x ⇒ 4x = 5x−25 ⇒ x = 25'))
grouped(246,[9.5,14.5,19.5,24.5,29.5,34.5,39.5,44.5,49.5],[4,6,10,5,7,3,9,6],('median',),labels=['10–14','15–19','20–24','25–29','30–34','35–39','40–44','45–49'],inclusive=True)
table(247,['30–40','40–50','50–60','60–70','70–80'],[],[120,'x',200,'y',185],'Class')
add(247,'40–50: 145; 60–70: 250',('Use total frequency','','x+y = 900−120−200−185 = 395'),('Use the median class','59.25 lies in 50–60. L=50, h=10, f=200 and cf=120+x.','59.25 = 50 + [(450−120−x)/200]×10'),('Solve both values','','185 = 330−x ⇒ x = 145; y = 395−145 = 250'))
table(248,['10–20','20–30','30–40','40–50','50–60','60–70','70–80'],[],[12,30,'X',65,'Y',25,18],'Class')
add(248,'X = 33.5; Y = 45.5 (inconsistent as counts)',('Use total frequency','','X+Y = 229−(12+30+65+25+18) = 79'),('Use the supplied median','The median class is 40–50; N/2=114.5, L=40, cf=42+X, f=65.','46 = 40 + [(114.5−42−X)/65]×10'),('Solve and check','','39 = 72.5−X ⇒ X = 33.5; Y = 79−33.5 = 45.5'),note='Literal grouped-data interpolation gives fractional frequencies, which cannot be counts. The printed data contain an inconsistency. Using the alternative (N+1)/2 convention gives X=34,Y=45, but that is not the usual grouped-median formula.')
grouped(249,[0,30,60,90,120,150,180],[8,13,22,27,18,7],('mean','median'))
add(250,'3',('Compare the frequencies','For x=1,2,3,4 the frequencies are 4,7,10,8.','Largest frequency = 10 at x = 3'),('State the mode','','Mode = 3'));table(250,[1,2,3,4],[],[4,7,10,8])
grouped(251,[0,10,20,30,40,50],[45,20,14,7,3],('mode',));grouped(252,[0,10,20,30,40,50,60,70],[4,7,8,12,25,18,10],('mode',))
table(253,['0–400','400–800','800–1200','1200–1600','1600–2000','2000–2400','2400–2800','2800–3200'],[],[14,22,'x',124,'y',32,15,5],'Class')
add(253,'x = 76; y = 72',('Use the total frequency','','x+y = 360−(14+22+124+32+15+5) = 148'),('Use the mode formula','Mode 1376 lies in 1200–1600. L=1200, h=400, f₁=124, f₀=x, f₂=y.','1376 = 1200 + [(124−x)/(248−x−y)]×400'),('Substitute the total and solve','','176/400 = (124−x)/100 ⇒ 44 = 124−x ⇒ x = 80; y = 68'),note='The exact calculation gives x=80 and y=68. Class labels wrapped across lines in the source PDF have been reconstructed as widths of 400.')
Q[253]['answer']='x = 80; y = 68';Q[253].pop('note',None)
grouped(254,[29.5,34.5,39.5,44.5,49.5,54.5,59.5,64.5],[3,5,12,18,14,6,2],('mode',),labels=['30–34','35–39','40–44','45–49','50–54','55–59','60–64'],inclusive=True)
N,mu,med,modes=discrete_stats(255,list(range(8)),[10,35,45,95,64,32,10,9]);add(255,f'Mean = {fmt(mu)}; median = {fmt(med)}; mode = 3',('Check the actual total','The printed frequencies sum to 300, matching the stated number of days.','N = 300'),('Calculate the mean','','Σfx = 965; mean = 965/300 = 193/60 ≈ 3.216667'),('Find median and mode','Both the 150th and 151st observations have x=3. The highest frequency, 95, also occurs at x=3.','Median = 3; mode = 3'))
# Correct the weighted sum directly from the data, rather than a manually typed total.
Q[255]['steps'][1]['formula']=f'Σfx = {fmt(mu*N)}; mean = {fmt(mu*N)}/{N} = {fmt(mu)}'
grouped(256,[0.5,10.5,20.5,30.5,40.5,50.5,60.5],[5,6,8,10,7,4],('mean','median','mode'),labels=['1–10','11–20','21–30','31–40','41–50','51–60'],inclusive=True)
grouped(257,[15,25,35,45,55,65,75],[6,10,17,14,1,2],('mean','median','mode'))
grouped(258,[1,3,5,7,9,11,13],[6,47,75,46,18,8],('mean','median','mode'));Q[258]['note']='Amounts are in thousand rupees, so the reported mean, median and mode use the same unit.'
N,mu,med,modes=discrete_stats(259,list(range(1,11)),[4,7,8,10,6,6,4,2,2,1]);add(259,f'Mean = {fmt(mu)}; median = {fmt(med)}; mode = 4',('Calculate the weighted mean','','N = 50; Σfx = 227; mean = 227/50 = 4.54'),('Find the median','The cumulative count reaches 19 at x=3 and 29 at x=4. The 25th and 26th observations are both 4.','Median = 4'),('Find the mode','The highest frequency is 10, at x=4.','Mode = 4'))
Q[259]['steps'][0]['formula']=f'N = {N}; Σfx = {fmt(mu*N)}; mean = {fmt(mu)}'
grouped(260,[0,10,20,30,40,50,60],[6,12,11,9,7,5],('median',));Q[260]['steps'].insert(0,{'title':'Convert more-than totals','text':'The number with marks above 60 is 0. Subtract adjacent counts 50,44,32,21,12,5,0.','formula':'f = 6,12,11,9,7,5'})
cf=[29,224,465,582,634,644,650,653,655];freq=[cf[0]]+[b-a for a,b in zip(cf,cf[1:])];grouped(261,list(range(0,46,5)),freq,('median',));Q[261]['steps'].insert(0,{'title':'Read and convert the cumulative table','text':'The less-than cumulative counts are 29,224,465,582,634,644,650,653,655. Several counts wrap onto two lines in the original PDF. Assume the first class starts at 0.','formula':'Class frequencies = '+', '.join(map(str,freq))})
grouped(262,list(range(50,78,3)),[3,8,14,30,36,28,16,10,3],('mean','median','mode'))
sd_solution(263,[5,10,15,20,25],[7,4,6,3,5]);sd_solution(264,[10,13,16,19],[2,3,4,1],['9–11','12–14','15–17','18–20'])
def moment_solution(n,x,f,origin=None,count=4,raw=False,beta=False):
 table(n,x,x,f);mu=mean(x,f);central=moments(x,f,mu,count);steps=[('Find the mean','If data are grouped, use class midpoints.',f'N = {sum(f)}; Σfx = {fmt(mu*sum(f))}; mean = {fmt(mu)}')];parts=[]
 if origin is not None:
  vals=moments(x,f,F(origin),count);steps.append(('Moments about the chosen origin',f'For origin a={origin}, use mᵣ(a)=Σf(x−a)ʳ/N. These are not central unless a equals the mean.','; '.join(f'm{r+1}({origin}) = {fmt(v)}' for r,v in enumerate(vals))));parts.append('About '+str(origin)+': '+', '.join(map(fmt,vals)))
 if origin is None or raw:
  steps.append(('Moments about the actual mean','Set d=x−mean. Calculate Σfd, Σfd², Σfd³ and Σfd⁴, then divide each sum by N. The first central moment is always 0.','; '.join(f'μ{r+1} = {fmt(v)}' for r,v in enumerate(central))));parts.append('Central moments: '+', '.join(map(fmt,central)))
 if raw:
  vals=moments(x,f,F(0),count);steps.append(('Moments about zero','Raw moments use powers of x itself: m′ᵣ=Σfxʳ/N.','; '.join(f'm′{r+1} = {fmt(v)}' for r,v in enumerate(vals))));parts.append('Raw moments: '+', '.join(map(fmt,vals)))
 if beta:
  b1=central[2]**2/central[1]**3;b2=central[3]/central[1]**2
  steps.append(('Calculate skewness and kurtosis','β₁ is the squared moment coefficient of skewness; β₂ is Pearson kurtosis.','β₁ = μ₃²/μ₂³ = '+fmt(b1)+'; β₂ = μ₄/μ₂² = '+fmt(b2)));parts.append('β₁ = '+fmt(b1)+'; β₂ = '+fmt(b2))
 return add(n,'; '.join(parts),*steps)
moment_solution(265,[5,15,25,35],[1,3,4,2],origin=25,raw=True);Q[265]['question']='Calculate the first four moments about (i) assumed mean 25, (ii) the actual mean, and (iii) zero, for the following grouped distribution.';Q[265]['table']['headers']=['Class','0–10','10–20','20–30','30–40'];Q[265]['table']['rows'].append(['Midpoint','5','15','25','35'])
moment_solution(266,[5,7,10,18,26],[5,14,22,6,3],count=3);moment_solution(267,list(range(9)),[1,8,28,56,70,56,28,8,1]);moment_solution(268,[5,10,15,20,25],[6,10,14,6,4]);moment_solution(269,[55,65,75,85,95],[8,11,18,9,4],origin=75);Q[269]['note']='The question does not specify an arbitrary origin. We choose a=75; moments about a different origin will have different values.';Q[269]['table']['headers']=['Score','50–60','60–70','70–80','80–90','90–100'];Q[269]['table']['rows'].append(['Midpoint','55','65','75','85','95'])
moment_solution(270,list(range(9)),[5,10,15,20,25,20,15,10,5],raw=True,beta=True)
water=[F(v) for v in ['218.2','199.7','207.3','185.4','213.7','184.7','179.5','194.4','224.3','203.5']];moment_solution(271,water,[1]*10);Q[271]['note']='The mean is in litres; the rth central moment has units litres to the power r.'
def skew_grouped(n,edges,f,use_median=False):
 grouped(n,edges,f,('mean','median' if use_median else 'mode'));x=[(F(a)+F(b))/2 for a,b in zip(edges,edges[1:])];mu=mean(x,f);var=moments(x,f,mu,2)[1];sd=math.sqrt(float(var));N=sum(f);cf=[];c=0
 for v in f:c+=v;cf.append(c)
 if use_median:
  j=next(i for i,v in enumerate(cf) if v>=N/2);ref=F(edges[j])+(F(N,2)-(cf[j-1] if j else 0))/f[j]*(edges[j+1]-edges[j]);sk=3*float(mu-ref)/sd;formula=f'Sk = 3(mean−median)/σ = 3({fmt(mu)}−{fmt(ref)})/{fmt(sd)} = {fmt(sk)}'
 else:
  j=max(range(len(f)),key=f.__getitem__);prev=f[j-1] if j else 0;nxt=f[j+1] if j+1<len(f) else 0;ref=F(edges[j])+F(f[j]-prev,2*f[j]-prev-nxt)*(edges[j+1]-edges[j]);sk=float(mu-ref)/sd;formula=f'Sk = (mean−mode)/σ = ({fmt(mu)}−{fmt(ref)})/{fmt(sd)} = {fmt(sk)}'
 Q[n]['steps'].append({'title':'Calculate standard deviation','text':'Use population SD and the class midpoints.','formula':f'σ² = Σf(x−mean)²/N = {fmt(var)}; σ = {fmt(sd)}'})
 Q[n]['steps'].append({'title':'Calculate Pearson skewness','text':'A negative value indicates a longer left tail; a positive value indicates a longer right tail.','formula':formula});Q[n]['answer']=fmt(sk)
 if n==272:
  Q[n]['note']='The highest frequency is in the last class, so interpolation of its mode needs a convention. Taking the following frequency as zero gives the coefficient shown. The median-based Pearson estimate is also displayed.'
  j=next(i for i,v in enumerate(cf) if v>=N/2);med=F(edges[j])+(F(N,2)-(cf[j-1] if j else 0))/f[j]*(edges[j+1]-edges[j]);Q[n]['steps'].append({'title':'Median-based alternative','text':'This avoids assigning a frequency to an absent class, but is a different Pearson formula.','formula':f'Median = {fmt(med)}; 3(mean−median)/σ = {fmt(3*float(mu-med)/sd)}'})
skew_grouped(272,list(range(40,141,10)),[5,6,8,10,25,30,36,50,60,70])
x=list(range(20,29));f=[7,12,25,10,8,6,8,3,1];table(273,x,x,f);mu=mean(x,f);v=moments(x,f,mu,2)[1];sd=math.sqrt(float(v));add(273,fmt(float(mu-22)/sd),('Find the mean and mode','The highest frequency is 25 at marks 22.',f'N = {sum(f)}; Σfx = {fmt(mu*sum(f))}; mean = {fmt(mu)}; mode = 22'),('Find population standard deviation','','σ² = '+fmt(v)+'; σ = '+fmt(sd)),('Calculate Karl Pearson’s coefficient','','Sk = (mean−mode)/σ = '+fmt(float(mu-22)/sd)))
skew_grouped(274,[0,10,20,30,40,50],[13,20,30,25,12]);skew_grouped(275,[100,120,140,160,180,200,220,240],[17,53,199,194,327,208,2])
add(276,'Mean = 3; variance = 15; μ₃ = −86',('Recover the mean','The first moment of X−2 is 1.','Mean = 2+1 = 3'),('Calculate the variance','','μ₂ = m₂−m₁² = 16−1² = 15'),('Calculate the third central moment','','μ₃ = m₃−3m₂m₁+2m₁³ = −40−3×16×1+2×1³ = −86'))
u2=F(136)-F(2)**2;u3=F(320)-3*F(136)*2+2*F(2)**3;u4=F(40000)-4*F(320)*2+6*F(136)*4-3*F(2)**4;gamma=float(u3)/float(u2)**1.5;beta=u3*u3/u2**3
add(277,f'μ₁=0; μ₂={u2}; μ₃={u3}; μ₄={u4}; γ₁≈{fmt(gamma)}',('Identify the raw moments','Raw moments are about zero; the first is the mean.','m′₁ = 2; m′₂ = 136; m′₃ = 320; m′₄ = 40000'),('Convert to central moments','','μ₁ = 0; μ₂ = 136−2² = 132; μ₃ = 320−3×136×2+2×2³ = −480'),('Calculate the fourth central moment','','μ₄ = 40000−4×320×2+6×136×2²−3×2⁴ = 40656'),('Calculate moment skewness','Its negative sign means negative skewness. β₁ removes the sign because it is squared.',f'γ₁ = μ₃/μ₂^(3/2) ≈ {fmt(gamma)}; β₁ = μ₃²/μ₂³ = {fmt(beta)}'))
add(278,'Moments about 4: 1, 67, −55',('Shift the origin','Let Y=X−3. Then X−4=Y−1. The given moments are E(Y)=2,E(Y²)=70,E(Y³)=150.','New moments = E[(Y−1)ʳ]'),('First and second moments','','m₁(4) = 2−1 = 1; m₂(4) = 70−2×2+1 = 67'),('Third moment','','m₃(4) = 150−3×70+3×2−1 = −55'))
add(279,'Mode ≈ 80; CV ≈ 38.4615%',('Find the standard deviation','Use the median-based Pearson coefficient.','−0.6 = 3(65−70)/σ = −15/σ ⇒ σ = 25'),('Estimate the mode','The empirical mean–median–mode relation gives the requested mode.','Mode ≈ 3×70−2×65 = 80'),('Calculate coefficient of variation','','CV = 100σ/Mean = 100×25/65 ≈ 38.4615%'),note='The mode is an empirical estimate, because the distribution itself is not supplied.')
variance=F(24270,10)-F(452,10)**2;sd=math.sqrt(float(variance));simple(280,fmt((45.2-43.7)/sd),'Sk = (Mean − Mode)/σ',f'Mean=452/10=45.2; σ²=24270/10−45.2²={fmt(variance)}; σ={fmt(sd)}; Sk=(45.2−43.7)/σ={fmt(1.5/sd)}')
# Replace wrapped table text in prompts with faithful prose; tables are rendered separately.
for n in Q:
 if 'table' in Q[n]:
  cleaned={213:'Find the median of the marks of 130 students.',219:'For the following distribution, N=100 and median=32. Find x and y.',220:'Find the mode of the following grouped distribution.',222:'The mode of this distribution is 36. Find the missing frequency f.',234:'Find the arithmetic mean for the following frequency distribution.',235:'Find the average wage paid to the construction workers.',236:'Find the arithmetic mean of marks for the following grouped data.',237:'Calculate the mean daily earnings, in rupees, of the employees.',238:'Calculate the mean for this grouped frequency distribution.',239:'Find the mean size of capital, in lakh rupees, from this less-than cumulative distribution.',240:'Find the mean marks of 60 students from the more-than cumulative distribution.',242:'Find the median for this discrete frequency distribution.',243:'Find the median daily wage, in rupees.',244:'Find the median from the following grouped distribution of foreign visitors.',245:'The median is 24. Find the missing frequency x.',246:'Find the median marks of these 50 students.',247:'Daily wages of 900 workers have median ₹59.25. Find the frequencies missing from 40–50 and 60–70.',248:'Find X and Y when the median is 46 and total frequency is 229.',249:'Find the mean and median of this grouped distribution.',250:'Find the mode of this discrete frequency distribution.',251:'Find the mode of this grouped frequency distribution.',252:'Find the mode of this grouped frequency distribution.',253:'This incomplete frequency distribution has mode 1376 and total frequency 360. Find x and y.',254:'Find the mode of the marks obtained by these 60 students.',255:'For 300 working days, the table gives telegraphic transfers per day. Calculate mean, median and mode.',256:'The table gives scores out of 60 in an aptitude test. Calculate mean, median and mode.',257:'Calculate mean, median and mode of this grouped distribution.',258:'An insurance company recorded accident claims in thousand rupees. Find mean, median and mode.',259:'Find mean, median and mode for this discrete frequency distribution.',260:'Find the median from the more-than cumulative table for a test out of 60.',261:'Find the median from this less-than cumulative distribution.',262:'Find mean, median and mode for this grouped distribution.',263:'Find the standard deviation of this frequency distribution.',264:'Find the standard deviation from this grouped distribution.',266:'Find the first three moments about the mean.',267:'Calculate the first four moments about the mean.',268:'Calculate the first four moments about the mean.',269:'Obtain the first four moments about an arbitrary origin for the grouped scores.',270:'Calculate the first four moments about the mean, and also β₁ and β₂.',272:'Calculate Karl Pearson’s coefficient of skewness for this grouped distribution.',273:'Find Karl Pearson’s coefficient of skewness for these marks.',274:'Find Karl Pearson’s coefficient of skewness for this grouped distribution.',275:'For the profits of 1000 companies, in thousand rupees, calculate the coefficient of skewness.'}
  if n in cleaned:Q[n]['question']=cleaned[n]
# The water data are already present in the prompt, so omit a redundant frequency table.
Q[271].pop('table',None)
# Add exact moment calculation tables to make long solutions reproducible.
for n in range(265,272):
 if n==265:xs,fs,a=[5,15,25,35],[1,3,4,2],F(22)
 elif n==266:xs,fs,a=[5,7,10,18,26],[5,14,22,6,3],F(529,50)
 elif n==267:xs,fs,a=list(range(9)),[1,8,28,56,70,56,28,8,1],F(4)
 elif n==268:xs,fs,a=[5,10,15,20,25],[6,10,14,6,4],F(14)
 elif n==269:xs,fs,a=[55,65,75,85,95],[8,11,18,9,4],F(75)
 elif n==270:xs,fs,a=list(range(9)),[5,10,15,20,25,20,15,10,5],F(4)
 else:xs,fs,a=water,[1]*10,mean(water,[1]*10)
 # Derive the origin from data, avoiding duplicated manually typed means.
 if n!=269:a=mean(xs,fs)
 r=3 if n==266 else 4
 Q[n]['workingTable']={'headers':['x','f','d = x − '+fmt(a),*[f'fd^{j}' for j in range(1,r+1)]],'rows':[[fmt(F(x)),str(f),fmt(F(x)-a),*[fmt(F(f)*(F(x)-a)**j) for j in range(1,r+1)]] for x,f in zip(xs,fs)]}
 rows=Q[n]['workingTable']['rows'];Q[n]['workingTable']['rows'].append(['Total',str(sum(fs)),'—',*[fmt(sum(F(f)*(F(x)-a)**j for x,f in zip(xs,fs))) for j in range(1,r+1)]])
Q[232]['question']='Compare the skewness of marks in Sections A and B, each containing 100 students.'
Q[232]['table']={'headers':['Section','Mean','Standard deviation','Mode'],'rows':[['A','55','15.4','58.72'],['B','53','15.4','48.83']]}
for n,heads,counts in [(239,['<5','<10','<15','<20','<25','<30'],[20,27,29,38,48,53]),(240,['>0','>10','>20','>30','>40','>50'],[60,56,40,20,10,3]),(260,['>0','>10','>20','>30','>40','>50'],[50,44,32,21,12,5]),(261,['<5','<10','<15','<20','<25','<30','<35','<40','<45'],[29,224,465,582,634,644,650,653,655])]:
 Q[n]['conversionTable']=Q[n]['table']
 Q[n]['table']={'headers':['Capital (₹ lakh)' if n==239 else 'Marks',*heads],'rows':[['Cumulative frequency',*map(str,counts)]]}
assert len(Q)==76 and set(Q)==set(range(205,281))
assert all('answer' in q and len(q['steps'])>=2 for q in Q.values())
(ROOT/'data/chapter-3.json').write_text(json.dumps({'chapter':3,'title':'Descriptive Statistics & Moments','range':[205,280],'questions':list(Q.values())},ensure_ascii=False,indent=2))
print('Built',len(Q),'worked solutions.')
for n in [213,221,228,229,234,237,248,253,255,259,261,265,266,267,268,269,270,271,272,273,274,275,277,280]:print(n,Q[n]['answer'])
