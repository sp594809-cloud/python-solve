"""Build solutions for the correlation/regression chapter; ranks use average ties."""
import json, math
from fractions import Fraction as F
from pathlib import Path
import numpy as np
R=Path(__file__).resolve().parents[1]; allq=json.loads((R/'data/questions-source.json').read_text()); source={q['id']:q for q in allq if 281<=q['id']<=344};Q={}
for i,s in source.items():Q[i]={'id':i,'unit':4,'question':' '.join(s['question'].split()),'marks':int(s['marks'].strip()) if s['marks'].strip().isdigit() else 3,'page':s['page'],'steps':[]}
def f(x):
 if isinstance(x,F):return str(x.numerator) if x.denominator==1 else f'{x.numerator}/{x.denominator} ≈ {float(x):.5f}'
 return f'{float(x):.6g}' if isinstance(x,(float,np.floating)) else str(x)
def add(i,a,*steps,note=None,question=None):
 Q[i]['answer']=a;Q[i]['steps']=[{'title':x,'text':y,'formula':z} for x,y,z in steps]
 if note:Q[i]['note']=note
 if question:Q[i]['question']=question
 return Q[i]
def setdata(i,labels,rows,headers=None):Q[i]['table']={'headers':headers or ['Variable',*map(str,labels)],'rows':[[str(r[0]),*map(str,r[1:])] for r in rows]}
def corr(x,y):
 x=np.asarray(x,float);y=np.asarray(y,float);dx=x-x.mean();dy=y-y.mean();Sxx=float(dx@dx);Syy=float(dy@dy);Sxy=float(dx@dy);r=Sxy/math.sqrt(Sxx*Syy)
 return (x.mean(),y.mean(),Sxx,Syy,Sxy,r,Sxy/Sxx,Sxy/Syy,math.sqrt(Sxx/len(x)),math.sqrt(Syy/len(y)))
def line(m,bx,by,axis):
 if axis=='y':
  slope=by;return f'y − {f(m[1])} = {f(slope)}(x − {f(m[0])})'
 return f'x − {f(m[0])} = {f(bx)}(y − {f(m[1])})'
def corrdata(i,x,y,question=None,reg=False,rank=False,notes=None):
 n=len(x);setdata(i,list(range(1,n+1)),[['x',*x],['y',*y]])
 if rank:
  rx=list(map(float,__import__('scipy.stats',fromlist=['rankdata']).rankdata(x)));ry=list(map(float,__import__('scipy.stats',fromlist=['rankdata']).rankdata(y)));data=corr(rx,ry);rho=data[5]
  steps=[('Assign ranks','Rank 1 means the smallest value. Equal values receive their average rank.',f'Rₓ = {", ".join(map(f,rx))}; Rᵧ = {", ".join(map(f,ry))}'),('Correlate the ranks','For ties, calculate Pearson correlation on average ranks. This is the tie-corrected Spearman coefficient.',f'ρ = corr(Rₓ,Rᵧ) = {f(rho)}')]
 else:data=corr(x,y);rho=data[5];steps=[('Find the means','Calculate x̄ and ȳ.',f'x̄ = {f(data[0])}; ȳ = {f(data[1])}'),('Find the centred sums','For each pair calculate dx=x−x̄ and dy=y−ȳ, then sum squares and cross-products.',f'Σdx²={f(data[2])}; Σdy²={f(data[3])}; Σdxdy={f(data[4])}'),('Calculate Pearson correlation','Divide the cross-product sum by the geometric mean of the two sums of squares.',f'r = Σdxdy / √(Σdx²Σdy²) = {f(rho)}')]
 if reg and not rank:
  steps += [('Find both regression lines','Use the common point (x̄,ȳ). The slopes are bᵧₓ=Σdxdy/Σdx² and bₓᵧ=Σdxdy/Σdy².',line(data,data[7],data[6],'y')+'; '+line(data,data[7],data[6],'x')),('Check the correlation','For regression coefficients, r has their common sign and r²=bᵧₓbₓᵧ.',f'bᵧₓ={f(data[6])}; bₓᵧ={f(data[7])}; r={f(rho)}')]
 a=f(rho)
 if reg and not rank:a+='; bᵧₓ='+f(data[6])+'; bₓᵧ='+f(data[7])
 add(i,a,*steps,note=notes,question=question)
 return data
# Short conceptual questions, derived from the definitions.
add(281,'σᵧ = 18.75',('Use r = covariance/(σₓσᵧ)','Rearrange to isolate σᵧ.','σᵧ = 36/(0.48×4) = 18.75'))
corrdata(282,[3,5,1,7,5],[4,3,0,8,2])
add(283,'[−1, 1]',('Use the correlation bound','Correlation is a normalized covariance. Cauchy–Schwarz bounds its magnitude by one.','−1 ≤ r ≤ 1'))
add(284,'1.2',('Check the correlation bound','A valid correlation cannot exceed 1 in magnitude.','|1.2| > 1; impossible'))
corrdata(285,[6,5,4,3,2,1],[1,2,3,4,5,6],rank=True)
corrdata(286,[1,2,3,4,5],[5,4,3,2,1],rank=True)
add(287,'0.4',('Apply Spearman’s formula','n=6 and Σd²=21.','ρ = 1 − 6Σd²/[n(n²−1)] = 1 − 126/(6×35) = 0.4'))
add(288,'σᵧ = 4',('Identify the regression coefficients','The first line, y=0.8x−6.6, is y on x, so bᵧₓ=0.8. Rewrite the second as x=0.45y+5.35, so bₓᵧ=0.45.','r²=bᵧₓbₓᵧ=0.36 ⇒ r=0.6'),('Relate r and the standard deviations','The slopes are positive, hence r is positive. Also r=bᵧₓσₓ/σᵧ.',f'σᵧ=bᵧₓσₓ/r=0.8×3/0.6 = 4'),note='The two regression lines share the same positive intersection; the x-on-y slope comes from solving the second line for x.')
add(289,'(−3, −2)',('Find the intersection','A pair of regression lines intersects at the sample means. Solve y=x+1 and y=2x+4.','x+1=2x+4 ⇒ x=−3; y=−2'))
for i,a,b in [(290,-.1,-.9),(291,-.4,-.9),(292,-.8,-.2)]:add(i,f'r = {f(-math.sqrt(a*b))}',('Use the regression coefficient identity','r²=bₓᵧbᵧₓ; r has the coefficients’ common sign.',f'r = −√({f(a)}×{f(b)}) = {f(-math.sqrt(a*b))}'))
add(293,'r = −1/3',('Read the coefficients','From x+6y=6, y on x has slope −1/6. From 3x+2y=10, x on y has slope −2/3.','r²=(−1/6)(−2/3)=1/9; both slopes are negative, so r=−1/3'))
add(294,'(x̄, ȳ)',('Use the defining property','Both regression equations pass through the sample mean point.','Intersection = (x̄, ȳ)'))
add(295,'Both regression coefficients are 0',('Use r²=bₓᵧbᵧₓ','With zero correlation, each least-squares slope is zero (assuming nonzero variances).','bₓᵧ=bᵧₓ=0'))
add(296,'x̄ = 3; ȳ = 0.5',('Solve the regression lines','Their intersection is the pair of sample means. Substitute y=1−x/6 into 3x+2y=10.','3x+2−x/3=10 ⇒ x=3; y=0.5'))
add(297,'x on y: 20x−9y−107=0',('Read the slope for each direction','The x-on-y line, solved for x, has slope 9/20=0.45. The y-on-x line, solved for y, has slope 4/5=0.8.','bₓᵧ=9/20; bᵧₓ=4/5; product = 0.36 ≤ 1'))
corrdata(298,[6,2,10,4,8],[9,11,5,8,7],question='From the following paired data, calculate the regression coefficient bᵧₓ.',reg=False)
Q[298]['answer']='bᵧₓ = '+f(corr([6,2,10,4,8],[9,11,5,8,7])[6]);Q[298]['steps']=[s for s in Q[298]['steps'] if s['title']!='Calculate Pearson correlation']
add(299,'−0.1 (none of the listed choices)',('Find Σd²','The four rank differences are 2.5, 0.5, −1.5, −1.5.','Σd² = 2.5²+0.5²+1.5²+1.5²=11'),('Apply Spearman’s formula','','ρ=1−6×11/[4(4²−1)]=−0.1'))
corrdata(300,[6,2,10,4,8],[9,11,5,8,7],reg=True)
corrdata(301,[1.53,1.78,2.60,2.95,3.42],[33.5,36.3,40.0,45.8,53.5],question='Find the line of regression of y on x.',reg=True)
corrdata(302,list(range(1,10)),[9,8,10,12,11,13,14,16,15],reg=True)
corrdata(303,[4,5,9,14,18,22,24],[16,22,11,16,7,3,17])
corrdata(304,[54,57,55,57,56,52,59],[36,35,32,34,36,38,35])
add(305,'Means (4,7); r=−0.5; σₓ=2/3',('Find the means','Regression lines intersect at the means.', 'Solve 3x+2y=26 and 6x+y=31: x̄=4, ȳ=7'),('Identify the two slopes','Write one line as y on x and the other as x on y.','y=13−1.5x ⇒ bᵧₓ=−1.5; x=31/6−y/6 ⇒ bₓᵧ=−1/6'),('Calculate r and σₓ','','r=−√(1/4)=−0.5; σₓ=rσᵧ/bᵧₓ=(−0.5×2)/(−1.5)=2/3'))
corrdata(306,[7,8,9,11,10,13,12],[1,2,3,4,5,6,7])
add(307,'r ≈ 0.19713',('Use the population-SD definition','The reported sum is Σ(x−x̄)(y−ȳ)=66 over n=10 pairs.', 'r = Σdxdy/[nσₓσᵧ] = 66/[10×5.4×6.2] ≈ 0.19713'))
add(308,'ρ ≈ 0.25758',('Undo the error in Σd²','Changing one difference from 3 to 7 adds 7²−3²=40.','For n=10, old ρ=0.5 ⇒ old Σd²=10×99×(1−0.5)/6=82.5'),('Recalculate the coefficient','','New Σd²=122.5; ρ=1−6×122.5/(10×99)≈0.25758'),note='The printed “difference” need not be an integer-compatible dataset after this correction; apply the standard textbook formula to the supplied coefficient.')
corrdata(309,[100,98,78,85,110,93,80],[85,90,70,72,95,81,74])
# Summary statistics about shifted origins.
add(310,'r ≈ 0.9150',('Recover centred sums','The listed sums are measured from 10 and 15. Here x̄=14 and ȳ=15.', 'Σdx²=180−10(14−10)²=20; Σdy²=215'),('Recover the cross-product','','Σdxdy=60−10(14−10)(15−15)=60'),('Calculate correlation','','r=60/√(20×215)≈0.9150'))
corrdata(311,[8,3,9,2,7,10,4,6,1,5],[9,5,10,1,8,7,3,4,2,6],rank=True)
corrdata(312,[14.2,16.4,11.9,15.2,18.5,22.1,19.4,25.1,23.4,18.1,22.6,17.2],[215,325,185,332,406,522,412,614,544,421,445,408],question='Find the correlation between temperature (°C) and ice-cream sales ($).')
corrdata(313,[17,19,21,26,20,28,26,27],[23,27,25,26,27,25,30,33])
corrdata(314,[1,2,3,4,5],[160,180,140,180,200],question='Find the regression coefficient of y on x.',reg=False);Q[314]['answer']='bᵧₓ = '+f(corr([1,2,3,4,5],[160,180,140,180,200])[6]);Q[314]['steps']=Q[314]['steps'][:2]
corrdata(315,[10,11,12,13,14,15,16,1,2,3,4,5,6,7,8,9],[10,11,13,14,12,16,15,9,3,4,5,7,2,6,8,9],rank=True,notes='The PDF table digits for this 16-student question are wrapped across narrow cells. Verify the transcribed second row against the original before relying on this numerical coefficient.')
corrdata(316,[58,64,51,74,88,91],[12,18,15,41,46,52])
corrdata(317,[40,46,54,60,70,80,82,85,85,90,95],[45,45,50,43,40,75,55,72,65,42,70],rank=True,notes='The source table contains repeated scores, so average ranks are used. Read wrapped two-digit scores carefully when matching your question-paper copy.')
# cell counts by hour from the photographed source table
corrdata(318,list(range(10)),[43,46,82,98,123,167,199,213,245,272],reg=True,question='Fit both regression lines for cell count y and hour x, then estimate y after 15 hours.')
data=corr(list(range(10)),[43,46,82,98,123,167,199,213,245,272]);Q[318]['steps'].append({'title':'Estimate after 15 hours','text':'Substitute x=15 into the y-on-x regression line.','formula':f'ŷ = {f(data[1])} + {f(data[6])}(15−{f(data[0])}) = {f(data[1]+data[6]*(15-data[0]))}'})
corrdata(319,[106,86,100,101,99,103,97,113,112,110],[7,0,27,50,8,29,20,12,6,17],rank=True,notes='The scan breaks the IQ digits between lines; this reconstruction combines the digits into whole IQ scores. Check the values against a clear copy if any differ.')
corrdata(320,[10,12,10,15,13,12,10],[14,13,12,10,13,12,11],rank=True)
corrdata(321,[35,40,25,55,85,90,65,55,45,50],[100,100,110,140,150,130,100,100,140,110],rank=True,notes='The PDF breaks each two- or three-digit score across table rows. The values are reconstructed by joining those printed digits; verify against your copy.')
corrdata(322,[1,6,2,7,3,8,4,9,5],[5,2,6,8,7,1,3,9,4],rank=True)
corrdata(323,[50,50,55,60,65,65,65,60,50,50],[11,13,14,16,16,15,15,14,13,13])
corrdata(324,[42,35,50,43,48,62,31],[12,8,14,9,11,16,7],reg=True)
corrdata(325,[2,4,5,6,8,11],[18,12,10,8,7,5])
data=corr([57,58,59,59,60,61,62,64],[67,68,65,68,72,72,69,71]);corrdata(326,[57,58,59,59,60,61,62,64],[67,68,65,68,72,72,69,71],reg=True);Q[326]['steps'].append({'title':'Estimate y at x=66','text':'Use the y-on-x regression line.','formula':f'ŷ={f(data[1])}+{f(data[6])}(66−{f(data[0])})={f(data[1]+data[6]*(66-data[0]))}'})
corrdata(327,[60,34,40,50,45,41,22,43],[75,32,34,40,45,33,12,30],reg=True)
corrdata(328,[25,28,35,32,31,36,29,38,34,32],[43,46,49,41,36,32,31,30,33,39],reg=True)
corrdata(329,[190,240,250,300,310,335,300],[5,10,15,20,20,30,30],reg=True)
corrdata(330,[42,36,55,58,35,65,60,50,48,51],[98,93,110,85,108,102,82,102,118,99],reg=True,notes='The blood-pressure digits are split across narrow PDF table cells; transcribe them from a clear copy if any joined value differs.')
add(331,'Production at 70% utilization ≈ 24.269 lakh units',('Use the regression of production on utilization','x=utilization (mean 84.8, SD 8.5); y=production (mean 35.6, SD 10.5).','bᵧₓ = rσᵧ/σₓ = 0.62×10.5/8.5 ≈ 0.76588'),('Predict at x=70','','ŷ=35.6+0.76588(70−84.8)≈24.269'))
add(332,'Yield at 29 cm ≈ 518.0 kg; rainfall at 600 kg ≈ 32.615 cm',('Find the regression slopes','x=rainfall, y=yield.','bᵧₓ=0.52×36.8/4.6=4.16; bₓᵧ=0.52×4.6/36.8=0.065'),('Estimate yield from 29 cm','','ŷ=508.4+4.16(29−26.7)=517.968 kg'),('Estimate rainfall for 600 kg','','x̂=26.7+0.065(600−508.4)=32.654 cm'))
Q[332]['answer']='Yield ≈ 517.968 kg; rainfall ≈ 32.654 cm'
add(333,'r = 2/3',('Correct the totals','Replace wrong pairs (6,14),(8,6) with (8,12),(6,8). Σx and Σy stay unchanged; Σx² also stays unchanged.', 'Σx=125; Σy=100; Σx²=650; corrected Σy²=436; corrected Σxy=520'),('Apply the product-moment formula','','Sxx=650−125²/25=25; Syy=436−100²/25=36; Sxy=520−125×100/25=20'),('Calculate correlation','','r=20/√(25×36)=2/3'))
corrdata(334,[15,20,28,12,40,60,20,80],[40,30,50,30,20,10,30,60],rank=True)
add(335,'ρ ≈ 0.89091',('Correct Σd²','For 10 students the original ρ=.6 gives Σd²=66. Correcting d=7 to d=1 reduces this sum by 48.','Σd²(new)=66−(49−1)=18'),('Recompute Spearman correlation','','ρ=1−6×18/[10(10²−1)]≈0.89091'))
corrdata(336,[80,56,50,48,50,62,60],[90,75,75,65,65,50,65],rank=True)
add(337,'x̄ = 13; ȳ = 17; σᵧ = 4; r = 0.6',('Find the common intersection','From the lines y=0.8x+6.6 and x=0.45y+5.35, solve their intersection.','x̄=13; ȳ=17'),('Identify regression slopes','','bᵧₓ=0.8; bₓᵧ=0.45; r=+√(0.36)=0.6'),('Recover σᵧ','Given σₓ=3 and r=bᵧₓσₓ/σᵧ.','σᵧ=0.8×3/0.6=4'),note='Check: substitute (−5,2.6) in both lines; it satisfies the printed pair.')
corrdata(338,[105,104,102,101,100,99,98,96,93,92],[101,103,100,98,95,96,104,102,97,94])
corrdata(339,[3,5,8,4,7,10,2,1,6,9],[6,4,9,8,1,2,3,10,5,7],rank=True)
corrdata(340,[12,9,8,10,11,13,7],[14,8,6,9,11,12,3])
corrdata(341,[65,66,67,67,68,69,70,72],[67,68,65,68,72,72,69,71])
rankA=[1,6,5,10,3,2,4,9,7,8];rankB=[3,5,8,4,7,10,2,1,6,9];rankC=[6,4,9,8,1,2,3,10,5,7]
vals={f'{a} & {b}':corr(rankA if a=='A' else rankB if a=='B' else rankC,rankA if b=='A' else rankB if b=='B' else rankC)[5] for a,b in [('A','B'),('A','C'),('B','C')]};best=max(vals,key=vals.get);setdata(342,['A–B','A–C','B–C'],[['ρ',*[f(v) for v in vals.values()]]],headers=['Judge pair','A–B','A–C','B–C']);add(342,best,('Rank each judge pair','Compute Pearson correlation of the two rank lists. A higher positive coefficient means closer agreement.',', '.join(k+'='+f(v) for k,v in vals.items())),('Choose the nearest agreement','','Largest correlation: '+best))
corrdata(343,[10,12,18,18,15,40],[12,18,25,25,50,25],rank=True)
add(344,'x on y: 20x−9y−107=0; y on x: 4x−5y+30=0; r=0.6; σᵧ=4',('Identify each regression direction','Solve each equation for its dependent variable.','y=(4/5)x+6 ⇒ bᵧₓ=0.8; x=(9/20)y+107/20 ⇒ bₓᵧ=0.45'),('Find r and σᵧ','','r=+√(0.8×0.45)=0.6; σᵧ=bᵧₓσₓ/r=0.8×3/0.6=4'))
assert set(Q)==set(range(281,345)),set(range(281,345))-set(Q)
for i,q in Q.items():
 assert 'answer' in q and len(q['steps'])>=1,(i,q)
path=R/'data/chapter-4.json';path.write_text(json.dumps({'chapter':4,'title':'Correlation and Regression','range':[281,344],'questions':[Q[i] for i in sorted(Q)]},ensure_ascii=False,indent=2))
(R/'data/chapter-4.js').write_text('window.PROBABILITY_BOOK_DATA = '+path.read_text()+';\n')
print('Built all 64 Chapter 4 entries.')
for i in [282,288,298,300,301,302,304,312,318,324,326,327,328,329,330,333,338,341,342,344]:print(i,Q[i]['answer'])
