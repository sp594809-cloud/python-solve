"""Render exact PDF question/option columns, excluding the printed answer column.
Original text/diagrams are neither retyped nor generated. Joined page continuations remain in order.
"""
import json
from pathlib import Path
import fitz
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[1]
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',22)
def part(doc,page,lo,hi,left,right):
 pix=doc[page-1].get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(left,lo,right,hi),alpha=False)
 return Image.frombytes('RGB',[pix.width,pix.height],pix.samples)
def render(subject,q,doc,crops,left,right,options):
 pieces=[]
 for p,lo,hi in crops:
  question=part(doc,p,lo,hi,left,right)
  optwords=[w for w in doc[p-1].get_text('words') if options[0]+2<w[0]<options[1]-2 and lo<=w[1]<hi]
  if optwords:
   opt=part(doc,p,lo,hi,*options);row=Image.new('RGB',(question.width+opt.width+12,max(question.height,opt.height)),'white');row.paste(question,(0,0));row.paste(opt,(question.width+12,0));pieces.append(row)
  else:pieces.append(question)
 width=max(720,*[p.width for p in pieces]);height=sum(p.height for p in pieces)+120+16*len(pieces)
 image=Image.new('RGB',(width+40,height),'white');d=ImageDraw.Draw(image)
 d.text((20,15),f"LJIET | {'Maths I' if subject=='maths' else 'P&S'} | Q{q['id']}",font=font,fill='#24344c')
 d.text((20,48),'Original PB question and options | Answer column omitted',font=font,fill='#56657b')
 y=90
 for piece in pieces:image.paste(piece,(20,y));y+=piece.height+16
 out=ROOT/subject/'share';out.mkdir(exist_ok=True);image.save(out/f"q{q['id']}.jpg",quality=85,subsampling=0)
 q['shareImage']=f"share/q{q['id']}.jpg";q['shareImageSize']=[image.width,image.height]
math=json.loads((ROOT/'maths/data/solutions.json').read_text());doc=fitz.open(ROOT/'maths/practice-book.pdf')
for q in math['questions']:
 crops=[(int(Path(c['image']).stem.split('-')[1]),c['y']/2,(c['y']+c['height'])/2) for c in q['sourceCrops']]
 render('maths',q,doc,crops,15,339.2,(478,826))
(ROOT/'maths/data/solutions.json').write_text(json.dumps(math,ensure_ascii=False,separators=(',',':'))+'\n');(ROOT/'maths/data/solutions.js').write_text('window.MATHS_BOOK='+json.dumps(math,ensure_ascii=False,separators=(',',':'))+';\n')
for u in [6,7,8]:(ROOT/f'maths/data/unit-{u}-solutions.json').write_text(json.dumps([q for q in math['questions'] if q['unit']==u],ensure_ascii=False,indent=2)+'\n')
doc=fitz.open(ROOT/'probability/practice-book.pdf');cells={};first={}
for p in range(16,32):
 page=doc[p-1];borders=[i[1] for d in page.get_drawings() for i in d['items'] if i[0]=='re' and abs(i[1].x0-7.08)<.7 and i[1].width<1 and i[1].height>8]
 for w in page.get_text('words'):
  if w[0]<40 and w[1]>130 and w[4].isdigit() and 205<=int(w[4])<=345:
   matches=[r for r in borders if r.y0<=(w[1]+w[3])/2<=r.y1]
   if not matches:raise ValueError(('No row border',p,w[4]))
   r=min(matches,key=lambda r:r.height);cells[int(w[4])]=(p,r.y0,r.y1)
 if any(c[0]==p for c in cells.values()):first[p]=min(c[1] for c in cells.values() if c[0]==p)
for ch in [3,4]:
 path=ROOT/f'probability/data/chapter-{ch}.json';book=json.loads(path.read_text())
 for q in book['questions']:
  p,lo,hi=cells[q['id']];crops=[(p,lo-.2,hi+.2)]
  if q['id']+1 in cells and cells[q['id']+1][0]==p+1 and first[p+1]>145:crops.append((p+1,139.9,first[p+1]+.2))
  q['sourceRows']=[{'page':p,'top':lo,'bottom':hi} for p,lo,hi in crops]
  render('probability',q,doc,crops,7.5,357.5,(531,834))
 path.write_text(json.dumps(book,ensure_ascii=False,indent=2)+'\n');js=ROOT/f'probability/data/chapter-{ch}.js';prefix=js.read_text().split('=',1)[0];js.write_text(prefix+'='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
print('Built 521 original PDF question share images.')
