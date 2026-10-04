/* Offline-capable question reader; data is a local script, with no server required. */
(() => {
 'use strict';
 const book=window.MATHS_BOOK, $=id=>document.getElementById(id);
 if(!book||!Array.isArray(book.questions)){ $('question-title').textContent='Solutions could not load. Please reload this page.'; return; }
 const questions=book.questions, byId=new Map(questions.map(q=>[q.id,q]));
 let current, unit=6;
 const el=(tag,text,cls)=>{const node=document.createElement(tag);if(text)node.textContent=text;if(cls)node.className=cls;return node;};
 function formula(tex,node){
  node.classList.add('math-formula');
  if(window.katex){window.katex.render(tex,node,{displayMode:true,throwOnError:false,strict:'ignore',trust:false});}
  else{node.textContent=tex;node.setAttribute('aria-label',tex);}
 }
 function mixed(text,node){
  node.replaceChildren();String(text||'').split(/(\$[^$]+\$)/g).forEach(part=>{
   if(part.startsWith('$')&&part.endsWith('$')){const span=el('span');formula(part.slice(1,-1),span);node.append(span);}else node.append(document.createTextNode(part));
  });
 }
 const NS='http://www.w3.org/2000/svg';
 function svgEl(tag,attrs){const n=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));return n;}
 function source(q){
  const root=$('question-source');root.replaceChildren();
  (q.sourceCrops||[]).forEach(c=>{
   const svg=svgEl('svg',{viewBox:`0 ${c.y} ${c.width} ${c.height}`,class:'source-crop',role:'img','aria-label':`Original practice-book question ${q.id}${q.sourceCrops.length>1?' (continued)':''}`});
   svg.append(svgEl('image',{href:c.image,width:c.width,height:c.pageHeight}));const scroll=el('div',null,'source-scroll');scroll.append(svg);root.append(scroll);
  });
  if(!(q.sourceCrops||[]).length)mixed(q.question||q.sourceText,$('question-text'));else $('question-text').replaceChildren();
 }
 function diagram(d){
  const host=$('solution-figure');host.replaceChildren();if(!d||!d.points||d.points.length<2)return;
  const pts=d.points.filter(p=>p.every(Number.isFinite));if(pts.length<2)return;
  const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);let minX=Math.min(0,...xs),maxX=Math.max(0,...xs),minY=Math.min(0,...ys),maxY=Math.max(0,...ys);
  if(minX===maxX){minX-=.5;maxX+=.5;}if(minY===maxY){minY-=.5;maxY+=.5;}
  const scale=Math.min(350/(maxX-minX),240/(maxY-minY));const px=v=>45+(v-minX)*scale,py=v=>280-(v-minY)*scale;
  const fig=el('figure',null,'solution-figure');const svg=svgEl('svg',{viewBox:'0 0 450 330',role:'img','aria-label':d.caption||'Region or path diagram'});
  const defs=svgEl('defs',{}),marker=svgEl('marker',{id:'path-arrow',viewBox:'0 0 10 10',refX:8,refY:5,markerWidth:5,markerHeight:5,orient:'auto-start-reverse'});marker.append(svgEl('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:'#171717'}));defs.append(marker);svg.append(defs);
  [[45,py(0),420,py(0)],[px(0),300,px(0),20]].forEach(p=>svg.append(svgEl('line',{x1:p[0],y1:p[1],x2:p[2],y2:p[3],stroke:'#171717','stroke-width':1,'marker-end':'url(#path-arrow)'})));
  const closed=d.kind==='region'||Math.hypot(pts[0][0]-pts.at(-1)[0],pts[0][1]-pts.at(-1)[1])<1e-6;
  const path=pts.map((p,j)=>(j?'L':'M')+px(p[0]).toFixed(2)+' '+py(p[1]).toFixed(2)).join(' ')+(closed?' Z':'');
  svg.append(svgEl('path',{d:path,fill:closed?'#eeeeee':'none',stroke:'#171717','stroke-width':2}));
  if(d.kind==='path')for(const fraction of [.2,.55,.8]){const j=Math.min(pts.length-2,Math.floor(pts.length*fraction)),p=pts[j],next=pts[Math.min(pts.length-1,j+3)];if(Math.hypot(next[0]-p[0],next[1]-p[1])>1e-7)svg.append(svgEl('line',{x1:px(p[0]),y1:py(p[1]),x2:px(next[0]),y2:py(next[1]),stroke:'#171717','stroke-width':2,'marker-end':'url(#path-arrow)'}));}
  [[d.axes?.[0]||'x',426,py(0)+18],[d.axes?.[1]||'y',px(0)+10,20],['0',px(0)-15,py(0)+20]].forEach(([text,x,y])=>{const label=svgEl('text',{x,y,'font-size':16,fill:'#171717'});label.textContent=text;svg.append(label);});
  if(d.kind==='path'&&!closed){[0,pts.length-1].forEach((j,k)=>{const p=pts[j];svg.append(svgEl('circle',{cx:px(p[0]),cy:py(p[1]),r:3,fill:'#171717'}));const label=svgEl('text',{x:px(p[0])+8,y:py(p[1])-8,'font-size':14});label.textContent=(k?'B':'A')+` (${p[0]}, ${p[1]})`;svg.append(label);});}
  fig.append(svg,el('figcaption',d.caption));host.append(fig);
 }
 function browse(newUnit){
  unit=newUnit;$('question-select').replaceChildren();questions.filter(q=>q.unit===unit).forEach(q=>{const option=el('option',`Q${q.id} · PDF page ${q.page}`);option.value=q.id;$('question-select').append(option);});
  document.querySelectorAll('[data-unit]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.unit)===unit)));
 }
 function render(id,updateUrl=true){
  const q=byId.get(Number(id));if(!q){$('jump-message').textContent='Enter a whole question number from 643 to 1023.';return false;}
  current=q;if(window.QuestionShare)window.QuestionShare.mount(q,'maths');if(window.SolutionGuidance)window.SolutionGuidance.render(q);if(window.StudyTools)window.StudyTools.mount($('math-study-tools'),'maths:'+q.id);if(unit!==q.unit||!$('question-select').options.length)browse(q.unit);
  $('question-number').value=q.id;$('question-select').value=q.id;$('question-title').textContent=`Q${q.id} · Unit ${q.unit}`;$('solution-title').textContent=`Q${q.id} — Solution`;
  source(q);$('source-link').href=`practice-book.pdf#page=${q.page}`;$('book-viewer').src=`practice-book.pdf#page=${q.page}&zoom=page-width`;
  $('steps').replaceChildren();q.steps.forEach((s,j)=>{const block=el('div',null,'step');block.append(el('h4',`${j+1}. ${s.title}`));if(s.text)block.append(el('p',s.text));if(s.math){const f=el('div');formula(s.math,f);block.append(f);}$('steps').append(block);});
  formula(q.answer,$('answer'));$('solution-note').textContent=q.note||'';diagram(q.diagram);
  $('solution').hidden=true;$('show-solution').textContent='Show solution';$('show-solution').setAttribute('aria-expanded','false');
  $('previous-question').disabled=q.id===643;$('next-question').disabled=q.id===1023;$('jump-message').textContent=`Q${q.id} · ${questions.filter(v=>v.unit===q.unit).length} solved questions in this chapter.`;
  if(updateUrl)history.replaceState(null,'',`#q${q.id}`);return true;
 }
 $('expand-source').addEventListener('click',()=>{const d=window.StudyTools.modal('Original PDF · Q'+current.id,'<p class="study-small">The complete original page. Zoom in to read the question and all options.</p><label>Page zoom<select id="source-zoom"><option value="100">Fit width</option><option value="150">150%</option><option value="200">200%</option></select></label><div class="source-scroll" id="full-source-pages"></div>');const host=d.querySelector('#full-source-pages');for(const c of current.sourceCrops){const img=el('img');img.src=c.image;img.alt='Original practice-book page for Q'+current.id;img.className='full-source';host.append(img);}d.querySelector('#source-zoom').onchange=e=>host.querySelectorAll('img').forEach(img=>{img.style.width=e.target.value+'%';img.style.maxWidth='none';});});
 $('jump-form').addEventListener('submit',event=>{event.preventDefault();render(Number($('question-number').value));});
 $('question-select').addEventListener('change',()=>render($('question-select').value));
 document.querySelectorAll('[data-unit]').forEach(b=>b.addEventListener('click',()=>render(questions.find(q=>q.unit===Number(b.dataset.unit)).id)));
 $('previous-question').addEventListener('click',()=>render(current.id-1));$('next-question').addEventListener('click',()=>render(current.id+1));
 $('random-question').addEventListener('click',()=>{const list=questions.filter(q=>q.unit===unit);render(list[Math.floor(Math.random()*list.length)].id);});
 function reveal(){ $('solution').hidden=false;$('show-solution').setAttribute('aria-expanded','true');$('show-solution').textContent='Hide solution'; }
 $('show-solution').addEventListener('click',()=>{if(!$('solution').hidden){$('solution').hidden=true;$('show-solution').setAttribute('aria-expanded','false');$('show-solution').textContent='Show solution';return;}const id=current.id;const action=()=>{if(current.id===id)reveal();};if(window.QuestionAccess)window.QuestionAccess.require(action);else window.StudyTools?.notice('Login could not load. Reload this page to see the solution.');});
 $('print-solution').addEventListener('click',()=>{const id=current.id;const action=()=>{if(current.id===id){reveal();window.print();}};if(window.QuestionAccess)window.QuestionAccess.require(action);else window.StudyTools?.notice('Login could not load. Reload this page to see the solution.');});
 window.addEventListener('hashchange',()=>{const m=location.hash.match(/^#q(\d+)$/);if(m)render(Number(m[1]),false);});
 const initial=location.hash.match(/^#q(\d+)$/);render(initial&&byId.has(Number(initial[1]))?Number(initial[1]):643,false);if(window.QuestionAccess)window.QuestionAccess.resumeSolution(reveal);
})();
