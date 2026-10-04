"""Rebuild complete original PDF rows without modifying any worked solution."""
import json
from pathlib import Path
import fitz
from PIL import Image
root=Path(__file__).resolve().parents[1]
book=json.loads((root/'data/solutions.json').read_text())
doc=fitz.open(root/'practice-book.pdf')
cells={};first={};sizes={}
for page_no in range(29,48):
 page=doc[page_no-1]
 pix=page.get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(15,0,827,page.rect.height),alpha=False)
 Image.frombytes('RGB',[pix.width,pix.height],pix.samples).save(root/f'pages/page-{page_no}.webp',lossless=True)
 sizes[page_no]=(pix.width,pix.height)
 # Word's border segments preserve actual row boundaries, including tall rows.
 borders=[i[1] for d in page.get_drawings() for i in d['items'] if i[0]=='re' and abs(i[1].x0-15.48)<.6 and i[1].width<1 and i[1].height>8]
 nums=[w for w in page.get_text('words') if w[0]<45 and w[1]>130 and w[4].isdigit() and 600<=int(w[4])<=1100]
 for w in nums:
  matches=[r for r in borders if r.y0<=(w[1]+w[3])/2<=r.y1]
  if not matches:raise ValueError(f'No PDF row border for Q{w[4]} on page {page_no}')
  r=min(matches,key=lambda r:r.height);cells[int(w[4])]=(page_no,r.y0,r.y1)
 first[page_no]=min(v[1] for v in cells.values() if v[0]==page_no)
for q in book['questions']:
 p,lo,hi=cells[q['id']];w,h=sizes[p]
 q['sourceCrops']=[dict(image=f'pages/page-{p}.webp',y=round((lo-.25)*2,2),height=round((hi-lo+.5)*2,2),width=w,pageHeight=h)]
 if q['id']+1 in cells and cells[q['id']+1][0]==p+1 and first[p+1]>145:
  w,h=sizes[p+1];q['sourceCrops'].append(dict(image=f'pages/page-{p+1}.webp',y=280,height=round((first[p+1]-140)*2,2),width=w,pageHeight=h))
(root/'data/solutions.json').write_text(json.dumps(book,ensure_ascii=False,separators=(',',':')))
(root/'data/solutions.js').write_text('window.MATHS_BOOK='+json.dumps(book,ensure_ascii=False,separators=(',',':'))+';\n')
for u in [6,7,8]:(root/f'data/unit-{u}-solutions.json').write_text(json.dumps([q for q in book['questions'] if q['unit']==u],ensure_ascii=False,indent=2))
print('Rebuilt 19 full-width PDF images and 381 complete original rows.')
