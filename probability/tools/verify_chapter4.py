"""Independent numeric checks for all paired-value Chapter 4 examples."""
import json,math,re
from pathlib import Path
import numpy as np
from scipy.stats import rankdata
p=Path(__file__).resolve().parents[1]
book=json.loads((p/'data/chapter-4.json').read_text());q={x['id']:x for x in book['questions']}
assert set(q)==set(range(281,345)) and len(q)==64
checks=0
pairs={282:([3,5,1,7,5],[4,3,0,8,2]),298:([6,2,10,4,8],[9,11,5,8,7]),300:([6,2,10,4,8],[9,11,5,8,7]),301:([1.53,1.78,2.6,2.95,3.42],[33.5,36.3,40,45.8,53.5]),302:(list(range(1,10)),[9,8,10,12,11,13,14,16,15]),303:([4,5,9,14,18,22,24],[16,22,11,16,7,3,17]),304:([54,57,55,57,56,52,59],[36,35,32,34,36,38,35]),306:([7,8,9,11,10,13,12],[1,2,3,4,5,6,7]),309:([100,98,78,85,110,93,80],[85,90,70,72,95,81,74]),312:([14.2,16.4,11.9,15.2,18.5,22.1,19.4,25.1,23.4,18.1,22.6,17.2],[215,325,185,332,406,522,412,614,544,421,445,408]),313:([17,19,21,26,20,28,26,27],[23,27,25,26,27,25,30,33]),316:([58,64,51,74,88,91],[12,18,15,41,46,52]),318:(list(range(10)),[43,46,82,98,123,167,199,213,245,272]),324:([42,35,50,43,48,62,31],[12,8,14,9,11,16,7]),326:([57,58,59,59,60,61,62,64],[67,68,65,68,72,72,69,71]),327:([60,34,40,50,45,41,22,43],[75,32,34,40,45,33,12,30]),328:([25,28,35,32,31,36,29,38,34,32],[43,46,49,41,36,32,31,30,33,39]),329:([190,240,250,300,310,335,300],[5,10,15,20,20,30,30]),330:([42,36,55,58,35,65,60,50,48,51],[98,93,110,85,105,108,82,102,118,99]),338:([105,104,102,101,100,99,98,96,93,92],[101,103,100,98,95,96,104,92,97,94]),340:([12,9,8,10,11,13,7],[14,8,6,9,11,12,3]),341:([65,66,67,67,68,69,70,72],[67,68,65,68,72,72,69,71]),323:([50,50,55,60,65,65,65,60,50,50],[11,13,14,16,16,15,15,14,13,13])}
# Check numerical coefficient for every explicitly transcribed value pair.
for n,(x,y) in pairs.items():
 expected=float(np.corrcoef(x,y)[0,1])
 # Q298 asks for the regression coefficient b_yx rather than Pearson r.
 if n==298:
  sx=np.std(x,ddof=0);sy=np.std(y,ddof=0);expected*=sy/sx
 actual=float(re.search(r'-?\d+(?:\.\d+)?',q[n]['answer']).group())
 assert math.isclose(actual,expected,rel_tol=2e-5,abs_tol=2e-5),(n,actual,expected);checks+=1
# Verify Spearman calculations independently by using SciPy average ranks.
ranks={315:(list(range(1,17)),[1,10,3,4,5,7,2,6,8,11,15,9,14,12,16,13]),319:([106,86,100,101,99,103,97,113,112,110],[7,0,27,50,28,29,20,12,6,17]),317:([40,46,54,60,70,80,82,85,85,90,95],[45,45,50,43,40,75,55,72,65,42,70]),321:([35,40,25,55,85,90,65,55,45,50],[100,100,110,140,150,130,100,100,140,110]),285:([6,5,4,3,2,1],[1,2,3,4,5,6]),286:([1,2,3,4,5],[5,4,3,2,1]),311:([8,3,9,2,7,10,4,6,1,5],[9,5,10,1,8,7,3,4,2,6]),322:([1,6,2,7,3,8,4,9,5],[5,2,6,8,7,1,3,9,4]),320:([10,12,10,15,13,12,10],[14,13,12,10,13,12,11]),334:([15,20,28,12,40,60,20,80],[40,30,50,30,20,10,30,60]),336:([80,56,50,48,50,62,60],[90,75,75,65,65,50,65]),339:([3,5,8,4,7,10,2,1,6,9],[6,4,9,8,1,2,3,10,5,7]),343:([10,12,18,18,15,40],[12,18,25,25,50,25])}
for n,(x,y) in ranks.items():
 a=rankdata(x);b=rankdata(y);expected=float(np.corrcoef(a,b)[0,1]);actual=float(re.search(r'-?\d+(?:\.\d+)?',q[n]['answer']).group());assert math.isclose(actual,expected,rel_tol=1e-5,abs_tol=1e-5),(n,actual,expected);checks+=1
for item in book['questions']:assert len(item['steps'])>=1 and item['answer']
assert q[288]['answer'].endswith('4') and q[333]['answer']=='r = 2/3'
assert q[337]['answer'].startswith('x̄ = 13; ȳ = 17')
print(f'Passed {checks} independent numeric correlation and rank checks; all 64 questions contain a solution.')

assert '−0.57735' in q[299]['answer'] or '-0.57735' in q[299]['answer']
assert 'conditional' in q[308]['note'] and 'impossible' in q[287]['note']
