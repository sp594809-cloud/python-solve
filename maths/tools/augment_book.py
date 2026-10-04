"""Preserve exact PDF questions as cropped page images and add geometric sketches."""
import json,math
from pathlib import Path
import fitz
from PIL import Image
root=Path(__file__).resolve().parents[1]
book=json.loads((root/'data/solutions.json').read_text());Q={q['id']:q for q in book['questions']}
(root/'pages').mkdir(exist_ok=True)
doc=fitz.open(root/'practice-book.pdf');cells={};firstcells={}
for page_no in range(29,48):
 page=doc[page_no-1];pix=page.get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(110.4,0,338.8,page.rect.height),alpha=False)
 Image.frombytes('RGB',[pix.width,pix.height],pix.samples).save(root/f'pages/page-{page_no}.webp',lossless=True)
 rects=[item[1] for d in page.get_drawings() for item in d['items'] if item[0]=='re' and abs(item[1].x0-15.96)<1 and abs(item[1].x1-50.28)<1 and item[1].height>8]
 nums=[w for w in page.get_text('words') if w[0]<45 and w[1]>130 and w[4].isdigit() and 600<=int(w[4])<=1035]
 for w in nums:
  matches=[rc for rc in rects if rc.y0<((w[1]+w[3])/2)<rc.y1]
  rc=min(matches,key=lambda c:c.height) if matches else fitz.Rect(0,w[1]-8,1,next((v[1]-8 for v in nums if v[1]>w[1]),1155))
  cells[int(w[4])]=(page_no,rc.y0,rc.y1,pix.width,pix.height)
 firstcells[page_no]=min([v[1] for v in cells.values() if v[0]==page_no])
for i,q in Q.items():
 p,lo,hi,w,h=cells[i];q['sourceCrops']=[dict(image=f'pages/page-{p}.webp',y=round((lo+1)*2,2),height=round((hi-lo-2)*2,2),width=w,pageHeight=h)]
 if cells.get(i+1) and cells[i+1][0]==p+1 and firstcells[p+1]>145:
  np=doc[p];npix=np.get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(110.4,0,338.8,np.rect.height));q['sourceCrops'].append(dict(image=f'pages/page-{p+1}.webp',y=280,height=round((firstcells[p+1]-140)*2,2),width=npix.width,pageHeight=npix.height))
# Additional coordinate and radial region sketches, illustrated at a=b=1.
def polar(low,high,lo=0,hi=2*math.pi,caption='Region in the xy plane (a = 1 illustrated).'):
 points=[]
 for fn,reverse in [(low,False),(high,True)]:
  for j in range(121):
   angle=lo+(hi-lo)*(120-j if reverse else j)/120;radius=fn(angle);points.append([round(radius*math.cos(angle),6),round(radius*math.sin(angle),6)])
 return dict(kind='region',points=points,axes=['x','y'],caption=caption)
zero=lambda q:0
for i in [849,853]:Q[i]['diagram']=polar(zero,lambda q:1)
Q[852]['diagram']=polar(zero,lambda q:1,caption='Ellipse mapped to the unit disk. The diagram illustrates a = b = 1.')
Q[783]['diagram']=polar(zero,lambda q:1-math.cos(q),0,math.pi)
Q[784]['diagram']=polar(zero,lambda q:1+math.cos(q),0,math.pi)
Q[786]['diagram']=polar(lambda q:2,lambda q:4,0,math.pi/2,caption='Quarter-annulus between radii 2 and 4.')
Q[787]['diagram']=polar(lambda q:2*math.cos(q),lambda q:4*math.cos(q),-math.pi/2,math.pi/2)
Q[788]['diagram']=polar(zero,lambda q:math.cos(q),0,math.pi/2)
Q[789]['diagram']=polar(zero,lambda q:math.sqrt(max(0,math.cos(2*q))),-math.pi/4,math.pi/4,caption='Right loop of the lemniscate (a = 1 illustrated).')
for i in [856]:Q[i]['diagram']=dict(kind='region',points=[[0,0],[1,1],[0,1]],axes=['x','y'],caption='Triangle 0 ≤ x ≤ y ≤ 1.')
Q[857]['diagram']=dict(kind='region',points=[[j/600+1/6,2/(3*(j/600+1/6))] for j in range(101)]+[[j/600+1/6,6-12*(j/600+1/6)] for j in range(100,-1,-1)],axes=['x','y'],caption='Region between y = 2/(3x) and y = 6 − 12x.')
Q[858]['diagram']=polar(zero,lambda q:min(1,2*math.cos(q)),-math.pi/2,math.pi/2)
Q[859]['diagram']=polar(zero,lambda q:min(1-math.cos(q),1+math.cos(q)))
Q[860]['diagram']=polar(zero,lambda q:1+math.cos(q))
Q[861]['diagram']=polar(lambda q:1,lambda q:1+math.cos(q),-math.pi/2,math.pi/2)
Q[862]['diagram']=polar(lambda q:2*math.cos(q) if abs(q)<=math.pi/2 else 0,lambda q:1+math.cos(q),-math.pi,math.pi)
Q[863]['diagram']=polar(lambda q:1,lambda q:2,caption='Annulus between radii 1 and 2.')
Q[864]['diagram']=polar(zero,lambda q:min(math.cos(q),math.sin(q)),0,math.pi/2,caption='Common region of r = cos θ and r = sin θ.')
Q[865]['diagram']=polar(lambda q:1-math.cos(q),lambda q:math.sin(q),0,math.pi/2)
Q[866]['diagram']=polar(lambda q:4*math.cos(q),lambda q:9*math.cos(q),-math.pi/2,math.pi/2,caption='Region between the circles r = 4 cos θ and r = 9 cos θ.')
# Precision: source symbols are kept in crops, while workings use exact LaTeX.
Q[917]['steps']=[s for s in Q[917]['steps'] if s['title']!='Directional derivative at a general point']
Q[917]['steps'].insert(2,dict(title='Directional derivative at a general point',math=r'D_uf=\frac{\sqrt3}{2}(3x^2-3y)+\frac12(-3x+8y)',text=''))
for q in Q.values():
 if 'diagram' in q:q['diagram']['points']=[[round(c,6) for c in p] for p in q['diagram']['points']]
 assert q['sourceCrops'] and all(c['height']>0 for c in q['sourceCrops']),(q['id'],'invalid source crop')
(root/'data/solutions.json').write_text(json.dumps(book,ensure_ascii=False,separators=(',',':')))
(root/'data/solutions.js').write_text('window.MATHS_BOOK='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
for unit in [6,7,8]:(root/f'data/unit-{unit}-solutions.json').write_text(json.dumps([q for q in book['questions'] if q['unit']==unit],ensure_ascii=False,indent=2))
print('Original source crops: 381; diagrams:',sum('diagram' in q for q in Q.values()))
