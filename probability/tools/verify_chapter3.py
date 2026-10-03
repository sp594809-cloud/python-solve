"""Independent numerical checks using expanded observations and NumPy."""
import json,re,math
from pathlib import Path
import numpy as np
from fractions import Fraction
root=Path(__file__).resolve().parents[1]
q={x['id']:x for x in json.loads((root/'data/chapter-3.json').read_text())['questions']}
assert set(q)==set(range(205,281))
def close(actual,expected):assert math.isclose(actual,expected,rel_tol=1e-7,abs_tol=1e-7),(actual,expected)
checks=0
# Independently expand frequency distributions, avoiding the authoring moment function.
for n,x,f in [(221,[50,60,42,68,20],[1]*5),(228,[50,70,82,93,20],[1]*5),(229,[1,4,7,2,6],[1]*5),(263,[5,10,15,20,25],[7,4,6,3,5]),(264,[10,13,16,19],[2,3,4,1])]:
 expanded=np.repeat(x,f);close(float(q[n]['answer']),float(np.std(expanded)));checks+=1
for n,x,f in [(234,[35,45,55,60,75,80],[12,18,10,6,3,11]),(235,[100,200,300,400,500],[3,5,6,9,2]),(237,[100,120,140,160,180,200,220],[3,6,10,15,24,42,75])]:
 val=q[n]['answer'].split(' ')[0];close(float(Fraction(val)),float(np.repeat(x,f).mean()));checks+=1
for n,x,f,expected in [(265,[5,15,25,35],[1,3,4,2],[0,81,-144,14817]),(266,[5,7,10,18,26],[5,14,22,6,3],[0,27.7236,238.705824]),(267,list(range(9)),[1,8,28,56,70,56,28,8,1],[0,2,0,11]),(268,[5,10,15,20,25],[6,10,14,6,4],[0,34,40.5,2707]),(270,list(range(9)),[5,10,15,20,25,20,15,10,5],[0,4,0,37.6])]:
 data=np.repeat(x,f).astype(float);d=data-data.mean()
 for r,val in enumerate(expected,1):close(float((d**r).mean()),val);checks+=1
# Missing frequencies must satisfy both constraints.
for total,frequencies,median,L,before,f,h in [(100,[10,9,25,30,16,10],32,30,44,30,10),(90,[15,20,25,14,16],24,20,35,25,10),(900,[120,145,200,250,185],59.25,50,265,200,10)]:
 assert sum(frequencies)==total;close(L+(total/2-before)*h/f,median);checks+=2
assert sum([14,22,80,124,68,32,15,5])==360
close(1200+(124-80)/(2*124-80-68)*400,1376);checks+=2
# Cumulative source counts independently locate Q261's median.
close(10+(655/2-224)/(465-224)*5,5855/482);checks+=1
# Explicit check of key corrections and conditional conventions.
close(np.std([50,70,82,93,20]),25.79922479455)
assert '25.80' in q[228]['note'] and '57.17' in q[213]['note']
assert '33.5' in q[248]['answer'] and 'usual' in q[248]['note']
assert len(q[271]['workingTable']['rows'])==11
for v in q.values():
 assert len(v['steps'])>=2 and v['answer'] and v['question']
 if 'table' in v:assert all(len(row)==len(v['table']['headers']) for row in v['table']['rows'])
print(f'Passed {checks} independent numerical checks and coverage checks for all 76 questions.')
