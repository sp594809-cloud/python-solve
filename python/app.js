(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const books = {sem1:PRACTICE_BOOK, sem3:PRACTICE_BOOK_SEM3};
  const params = new URLSearchParams(location.search);
  const state = {book:params.get('book') === 'sem1' ? 'sem1' : 'sem3', unit:params.get('unit') || 'all', search:params.get('q') || '', type:'all', page:0, studied:false};
  const PAGE_SIZE = 20;
  let studied = new Set();
  try { studied = new Set(JSON.parse(localStorage.getItem('python-studied-v1') || '[]')); } catch (_) {}
  let visible = [], worker = null, activeRun = null, runTimer = null;
  function questions() {
    return Object.values(books[state.book]).flatMap(unit => [...unit.mcqs.map(q => ({...q, type:'mcq', unit:unit.unit})), ...unit.coding.map(q => ({...q, type:'code', unit:unit.unit}))]).sort((a,b) => a.srNo-b.srNo);
  }
  function studiedKey(q) { return `${state.book}:${q.id}`; }
  function toast(text) { $('status').textContent = text; $('status').style.display = 'block'; clearTimeout(toast.timer); toast.timer = setTimeout(() => {$('status').style.display='none';},2500); }
  function remember() { try { localStorage.setItem('python-studied-v1', JSON.stringify([...studied])); } catch (_) { toast('Progress could not be saved on this device.'); } }
  function updateUrl() { const url = new URL(location.href); url.search = ''; url.searchParams.set('book',state.book); if(state.unit !== 'all') url.searchParams.set('unit',state.unit); if(state.search) url.searchParams.set('q',state.search); history.replaceState(null,'',url); }
  function filterQuestions() {
    const query = state.search.trim().toLowerCase();
    const number = /^(?:q\s*)?(\d+)$/.exec(query);
    return questions().filter(q => (state.unit==='all' || q.unit===Number(state.unit)) && (state.type==='all' || q.type===state.type) && (!state.studied || studied.has(studiedKey(q))) && (!query || (number ? q.srNo===Number(number[1]) : `${q.question} ${q.topic||''} ${q.id}`.toLowerCase().includes(query))));
  }
  function renderUnits() {
    const units = Object.values(books[state.book]);
    if(state.unit!=='all' && !units.some(u=>String(u.unit)===state.unit)) state.unit='all';
    $('units').innerHTML = `<button class="unit-button ${state.unit==='all'?'active':''}" data-unit="all" aria-pressed="${state.unit==='all'}"><span class="number">◎</span><span>All chapters<small>${questions().length} questions</small></span></button>` + units.map(u=>`<button class="unit-button ${state.unit===String(u.unit)?'active':''}" data-unit="${u.unit}" aria-pressed="${state.unit===String(u.unit)}"><span class="number">${String(u.unit).padStart(2,'0')}</span><span>${esc(u.title.replace(/^UNIT\s*\d+\s*[–—-]\s*|^Unit\s*\d+\s*[–—-]\s*/i,''))}<small>${u.mcqs.length} MCQs · ${u.coding.length} code</small></span></button>`).join('');
    document.querySelectorAll('[data-book]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.book===state.book)));
  }
  function syncSharedProgress(){if(!window.StudyTools)return;questions().forEach(q=>{const s=window.StudyTools.item((state.book==='sem1'?'py1:':'py3:')+q.id);if(Object.prototype.hasOwnProperty.call(s,'status')){if(s.status==='done')studied.add(studiedKey(q));else studied.delete(studiedKey(q));}});document.querySelectorAll('[data-action=mark]').forEach(b=>{const q=questions().find(q=>q.id===b.dataset.id);if(q){b.setAttribute('aria-pressed',studied.has(studiedKey(q)));b.textContent=studied.has(studiedKey(q))?'✓ Studied':'○ Mark studied';}});}
  window.addEventListener('study-change',()=>{syncSharedProgress();refreshProgress();});
  function refreshProgress() {
    syncSharedProgress();
    const all = questions(), count = all.filter(q=>studied.has(studiedKey(q))).length;
    $('progressLabel').textContent = `${count} of ${all.length} studied`;
    $('progress').max=all.length; $('progress').value=count;
  }
  function codeBlock(code,q,trace=false) {
    return `<div class="code-block"><div class="code-toolbar"><span>${trace?'Question code / expression':'PYTHON 3 · COMPLETE SOLUTION'}</span><div><button type="button" data-action="copy" data-id="${q.id}" ${trace?'data-trace="true"':''}>Copy code</button>${trace?'':`<button type="button" data-action="download" data-id="${q.id}">Download ↓</button>`}</div></div><pre><code>${esc(code)}</code></pre></div>`;
  }
  function flowchart(q) {
    if(!q.flow) return '';
    const labels = q.flow.labels, kind=q.flow.kind, shapes=[],lines=[];
    const text=(label,x,y)=>{
      const words=label.split(' '), rows=[];let line='';
      words.forEach(word=>{if((line+' '+word).trim().length>35 && line){rows.push(line);line=word;}else line=(line+' '+word).trim();}); if(line)rows.push(line);
      return `<text x="${x}" y="${y-(rows.length-1)*7}" text-anchor="middle" font-size="11" fill="#151515">${rows.map((row,i)=>`<tspan x="${x}" dy="${i?14:0}">${esc(row)}</tspan>`).join('')}</text>`;
    };
    const node=(label,x,y,type='process')=>{
      let shape=type==='decision'?`<path d="M ${x} ${y-42} L ${x+116} ${y} L ${x} ${y+42} L ${x-116} ${y} Z"/>`:type==='terminal'?`<rect x="${x-65}" y="${y-20}" width="130" height="40" rx="20"/>`:`<rect x="${x-116}" y="${y-30}" width="232" height="60" rx="6"/>`;
      shapes.push(`<g fill="white" stroke="#222" stroke-width="1.4">${shape}</g>`+text(label,x,y));
    };
    const arrow=(x1,y1,x2,y2,label='')=>lines.push(`<path d="M${x1},${y1} L${x2},${y2}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>${label?text(label,(x1+x2)/2+18,(y1+y2)/2):''}`);
    node('Start',300,30,'terminal'); let y=110;arrow(300,50,300,y-30);
    if(kind==='sequence') {
      labels.forEach((label,i)=>{node(label,300,y);if(i<labels.length-1)arrow(300,y+30,300,y+60);y+=90;});
      node('Stop',300,y,'terminal');arrow(300,y-60,300,y-20);
    } else if(kind==='branch') {
      const decision=labels.findIndex(label=>label.endsWith('?'));
      labels.slice(0,decision).forEach(label=>{node(label,300,y);arrow(300,y+30,300,y+60);y+=90;});
      node(labels[decision],300,y,'decision');
      const childY=y+100;
      node(labels[decision+1],145,childY);node(labels[decision+2],455,childY);
      lines.push(`<path d="M184,${y} H145 V${childY-30}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>${text('Yes',153,y-10)}<path d="M416,${y} H455 V${childY-30}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>${text('No',447,y-10)}`);
      y=childY+100;node('Stop',300,y,'terminal');
      lines.push(`<path d="M145,${childY+30} V${y-45} H300 V${y-20} M455,${childY+30} V${y-45} H300" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>`);
    } else {
      node(labels[0],300,y);arrow(300,y+30,300,y+58);y+=100;node(labels[1],300,y,'decision');
      node(labels[2],165,y+110);node(labels[3],455,y+110);
      lines.push(`<path d="M184,${y} H165 V${y+80}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>${text('Yes',155,y-10)}<path d="M416,${y} H455 V${y+80}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>${text('No',445,y-10)}<path d="M165,${y+140} V${y+163} H24 V${y-58} H300 V${y-42}" fill="none" stroke="#222" marker-end="url(#arrow-${q.id})"/>`);
      node('Stop',455,y+210,'terminal');arrow(455,y+140,455,y+190);y+=210;
    }
    return `<div class="flowchart"><svg role="img" aria-labelledby="flow-title-${q.id}" viewBox="0 0 600 ${y+45}" xmlns="http://www.w3.org/2000/svg"><title id="flow-title-${q.id}">Flowchart for question ${q.srNo}</title><defs><marker id="arrow-${q.id}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="#222"/></marker></defs>${lines.join('')}${shapes.join('')}</svg></div>`;
  }
  function solution(q) {
    const explanation=`${q.note?`<p class="note">${esc(q.note)}</p>`:''}<h3>Why this works</h3><p>${esc(q.explanation)}</p>`;
    if(q.type==='mcq') return `<h3>Answer ${q.answer?esc(q.answer)+' · ':''}${esc(q.correct)}</h3>${explanation}${q.trace?`${codeBlock(q.trace.code,q,true)}<h3>Output / expression value</h3><pre class="output">${esc(q.trace.error||q.trace.output)}</pre>`:''}`;
    const streamlit=/import streamlit/.test(q.solution), multi=/^# File:/m.test(q.solution);
    return `${q.algorithm?`<h3>Algorithm</h3><ol class="algorithm">${q.algorithm.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h3>Flowchart</h3>${flowchart(q)}`:''}${explanation}${codeBlock(q.solution,q)}${multi?'<p class="note">This is a multiple-file program. Download gives you a ZIP with each labelled module and main.py saved separately.</p>':''}${streamlit?'<p class="note">Save as app.py. Install the required packages, then run <code>streamlit run app.py</code> in your terminal. Streamlit apps run locally.</p>':`<details class="runner"><summary>Try this code</summary><div class="solution"><label for="input-${q.id}">Program inputs (one answer per line, in prompt order)</label><textarea id="input-${q.id}" spellcheck="false" placeholder="For example:&#10;2&#10;1024">${esc(q.exampleInputs?.join('\n')||'')}</textarea><label for="files-${q.id}">Optional text files for file-handling exercises</label><input id="files-${q.id}" type="file" multiple accept=".txt,.csv,.py"><button type="button" class="outline" data-action="run" data-id="${q.id}">Run Python ▶</button><button type="button" class="outline" data-action="stop" data-id="${q.id}">Stop</button><pre class="output" id="output-${q.id}" aria-live="polite">Output appears here. The first run loads Python; an internet connection is needed.</pre><div id="plots-${q.id}"></div></div></details>`}${q.exampleOutput?`<h3>Example output${q.exampleInputs?.length?' (inputs prefilled above)':''}</h3><pre class="output">${esc(q.exampleOutput)}</pre>`:''}${q.exampleFiles?.length?`<p class="note">Sample output uses these files: ${esc(q.exampleFiles.join(', '))}. Upload your own copies to run file-based exercises.</p>`:''}`;
  }
  function renderCard(q) {
    const long=q.question.length>1400;
    return `<article class="question" id="question-${q.id}"><div class="question-header"><div class="question-meta"><span><span class="question-number">Q${q.srNo}</span><span class="badge">${q.type==='mcq'?'MCQ':q.algorithm?'ALGORITHM + CODE':'CODE'}</span> · Unit ${q.unit}${q.marks?' · '+q.marks+' marks':''}</span><button type="button" class="mark" data-action="mark" data-id="${q.id}" aria-pressed="${studied.has(studiedKey(q))}">${studied.has(studiedKey(q))?'✓ Studied':'○ Mark studied'}</button></div><div class="question-text ${long?'long':''}">${esc(q.question)}</div>${long?'<button type="button" class="full-prompt" data-action="prompt">Read full question ↕</button>':''}${(q.figures||[]).map((f,i)=>`<figure class="figure"><img src="${esc(f)}" alt="Original diagram or table for question ${q.srNo}, figure ${i+1}" loading="lazy"><figcaption>Original question-bank figure · page ${q.sourcePage}</figcaption></figure>`).join('')}${q.type==='mcq'?`<div class="options">${q.options.map((o,i)=>`<button type="button" class="option" data-action="answer" data-id="${q.id}" data-letter="${'ABCD'[i]}"><span class="letter">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div><p class="feedback" id="feedback-${q.id}" aria-live="polite"></p>`:''}</div><details class="answer" ${$('expandAll').checked?'open':''}><summary>Show ${q.type==='code'?'complete solution':'answer & explanation'}</summary><div class="solution">${solution(q)}</div></details>${window.StudyTools?window.StudyTools.html((state.book==='sem1'?'py1:':'py3:')+q.id):''}</article>`;
  }
  function render() {
    if(activeRun) stopRun('Stopped because the question page changed.');
    renderUnits();refreshProgress(); updateUrl();
    const all=questions(), codeCount=all.filter(q=>q.type==='code').length;
    $('semesterLabel').textContent = state.book==='sem3'?'PYTHON · SEMESTER III':'PYTHON · SEMESTER I';
    $('unitTitle').textContent = state.unit==='all'?'The complete practice book':books[state.book]['unit'+state.unit].title;
    $('coverage').textContent=`${all.length} questions · ${all.length-codeCount} MCQs · ${codeCount} code & algorithms`;
    $('sourceNote').textContent=state.book==='sem3'?'Source: L.J. Institute FCSP-1, Semester III, ODD 2026. Questions 1–734 across all 10 units. Original figures retained. Source mistakes and exercise assumptions are noted in the affected answers.':'Semester I: all 210 questions from the existing repository bank. Coding solutions and algorithms have been reviewed. A Semester I PDF has not been supplied for source-by-source verification.';
    visible=filterQuestions();const pages=Math.max(1,Math.ceil(visible.length/PAGE_SIZE));state.page=Math.min(state.page,pages-1);
    const start=state.page*PAGE_SIZE,page=visible.slice(start,start+PAGE_SIZE);
    $('resultCount').textContent=visible.length?`${start+1}–${Math.min(start+PAGE_SIZE,visible.length)} of ${visible.length} questions`:'0 matching questions';
    $('questions').innerHTML=page.length?page.map(renderCard).join(''):'<div class="empty"><h3>No questions match</h3><p>Try another search or select all chapters and all question types.</p><button class="outline" type="button" data-action="reset">Reset filters</button></div>';
    $('pagination').innerHTML=`<button type="button" class="outline" data-action="previous" ${state.page===0?'disabled':''}>← Previous</button><span>Page ${state.page+1} of ${pages}</span><button type="button" class="outline" data-action="next" ${state.page===pages-1?'disabled':''}>Next →</button>`;
    $('downloadAll').disabled=!visible.some(q=>q.type==='code');
    document.title=`Python Semester ${state.book==='sem3'?'III':'I'} | LJIET Learning Hub`;
  }
  function saveFile(name,data,type='text/x-python') {
    const url=URL.createObjectURL(new Blob([data],{type})); const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  }
  function splitModules(q) {
    if(!/^# File:/m.test(q.solution)) return [{name:/import streamlit/.test(q.solution)?'app.py':`q${q.srNo}.py`,content:q.solution+'\n'}];
    const files=[];const pattern=/^# File:\s*([A-Za-z_][A-Za-z_0-9]*\.py)[^\n]*\n([\s\S]*?)(?=^# File:|(?![\s\S]))/gm;let match;
    while((match=pattern.exec(q.solution))) files.push({name:match[1],content:match[2].trim()+'\n'});
    return files;
  }
  // A small standards-compliant, uncompressed ZIP writer; no external dependency.
  function zip(files) {
    const encoder=new TextEncoder(), local=[],central=[];let offset=0;
    const crc=data=>{let value=0xffffffff;for(const byte of data){value^=byte;for(let k=0;k<8;k++)value=(value>>>1)^((value&1)?0xedb88320:0);}return (value^0xffffffff)>>>0;};
    files.forEach(file=>{const name=encoder.encode(file.name),data=encoder.encode(file.content),checksum=crc(data);let head=new Uint8Array(30+name.length),view=new DataView(head.buffer);view.setUint32(0,0x04034b50,true);view.setUint16(4,20,true);view.setUint16(6,0x800,true);view.setUint32(14,checksum,true);view.setUint32(18,data.length,true);view.setUint32(22,data.length,true);view.setUint16(26,name.length,true);head.set(name,30);local.push(head,data);let record=new Uint8Array(46+name.length);view=new DataView(record.buffer);view.setUint32(0,0x02014b50,true);view.setUint16(4,20,true);view.setUint16(6,20,true);view.setUint16(8,0x800,true);view.setUint32(16,checksum,true);view.setUint32(20,data.length,true);view.setUint32(24,data.length,true);view.setUint16(28,name.length,true);view.setUint32(42,offset,true);record.set(name,46);central.push(record);offset+=head.length+data.length;});
    const centralSize=central.reduce((n,b)=>n+b.length,0),end=new Uint8Array(22),view=new DataView(end.buffer);view.setUint32(0,0x06054b50,true);view.setUint16(8,files.length,true);view.setUint16(10,files.length,true);view.setUint32(12,centralSize,true);view.setUint32(16,offset,true);return new Blob([...local,...central,end],{type:'application/zip'});
  }
  function downloadQuestions(list,name) {
    const files=[];list.filter(q=>q.type==='code').forEach(q=>{splitModules(q).forEach(f=>files.push({name:`unit-${q.unit}/q${q.srNo}/${f.name}`,content:f.content}));files.push({name:`unit-${q.unit}/q${q.srNo}/README.txt`,content:`Question ${q.srNo}\n\n${q.question}\n\nExplanation\n${q.explanation}\n\n${q.algorithm?'Algorithm\n'+q.algorithm.join('\n'):''}\n${/import streamlit/.test(q.solution)?'Run: streamlit run app.py':'Run: python main.py (multiple files) or python q'+q.srNo+'.py'}\n`});});
    files.push({name:'README.txt',content:'Python practice-book solutions\nEach question has its own folder; run one program at a time.\nPython 3 required. NumPy/plotting tasks may require: pip install numpy matplotlib\nStreamlit tasks: pip install streamlit numpy matplotlib\nRun a Streamlit task with: streamlit run app.py\nFile-handling tasks require the files named in the question.\n'});
    saveFile(name,zip(files),'application/zip');toast('Code ZIP downloaded');
  }
  async function copy(text) { try {await navigator.clipboard.writeText(text);toast('Copied');}catch(_){const area=document.createElement('textarea');area.value=text;document.body.append(area);area.select();document.execCommand('copy');area.remove();toast('Copied');} }
  function stopRun(message='Stopped.') { if(worker)worker.terminate();worker=null;clearTimeout(runTimer);if(activeRun){const output=$('output-'+activeRun);if(output)output.textContent+='\n'+message;}activeRun=null; }
  async function run(q) {
    if(activeRun)stopRun(); const output=$('output-'+q.id);output.textContent='Loading Python…';$('plots-'+q.id).innerHTML='';activeRun=q.id;
    const files=await Promise.all([...$('files-'+q.id).files].map(async file=>({name:file.name,content:await file.text()})));
    if(activeRun!==q.id)return;
    worker=new Worker('runner.js');
    worker.onerror=()=>stopRun('Could not load Python. Check your internet connection and try again.');
    worker.onmessage=({data})=>{
      if(activeRun!==q.id)return;
      if(data.type==='status')output.textContent=data.text;
      if(data.type==='result'){
        output.textContent=data.output||'(No printed output)';
        if(data.error)output.textContent+='\n'+data.error;
        (data.plots||[]).forEach(p=>{const image=document.createElement('img');image.src='data:image/png;base64,'+p;image.alt='Chart produced by question '+q.srNo;image.style.maxWidth='100%';$('plots-'+q.id).append(image);});
        clearTimeout(runTimer);worker.terminate();worker=null;activeRun=null;
      }
    };
    worker.postMessage({code:q.solution,inputs:$('input-'+q.id).value,files,modules:splitModules(q)});
    runTimer=setTimeout(()=>stopRun('Run timed out after 90 seconds. Check input values or try again after the runtime has downloaded.'),90000);
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(!button)return;
    if(button.dataset.book){state.book=button.dataset.book;state.unit='all';state.page=0;render();return;}
    if(button.dataset.unit){state.unit=button.dataset.unit;state.page=0;render();return;}
    const action=button.dataset.action; if(!action)return;
    const q=questions().find(q=>q.id===button.dataset.id);
    if(action==='mark' && q){const key=studiedKey(q);studied.has(key)?studied.delete(key):studied.add(key);if(window.StudyTools)window.StudyTools.set((state.book==='sem1'?'py1:':'py3:')+q.id,{status:studied.has(key)?'done':''});remember();button.setAttribute('aria-pressed',String(studied.has(key)));button.textContent=studied.has(key)?'✓ Studied':'○ Mark studied';refreshProgress();if(state.studied)render();}
    if(action==='copy' && q)copy(button.dataset.trace?q.trace.code:q.solution);
    if(action==='download' && q){const files=splitModules(q);if(files.length>1)downloadQuestions([q],`python-${state.book}-q${q.srNo}.zip`);else saveFile(files[0].name,files[0].content);}
    if(action==='run' && q)run(q);
    if(action==='stop')stopRun();
    if(action==='prompt'){const text=button.previousElementSibling;text.classList.toggle('long');button.textContent=text.classList.contains('long')?'Read full question ↕':'Collapse question ↕';}
    if(action==='answer' && q){
      const card=$('question-'+q.id),right=button.dataset.letter===q.answer;
      card.querySelectorAll('.option').forEach(option=>{option.classList.toggle('correct',option.dataset.letter===q.answer);option.classList.toggle('wrong',option===button&&!right);});
      $('feedback-'+q.id).textContent=q.answer?(right?'Correct. ':'Try again. ')+`Answer: ${q.answer}. Open the explanation below.`:'The printed options contain an error. Open the explanation for the corrected result.';
      card.querySelector('details.answer').open=true;
    }
    if(action==='next'||action==='previous'){state.page+=action==='next'?1:-1;render();$('unitTitle').scrollIntoView({block:'start',behavior:'smooth'});}
    if(action==='reset'){state.search='';state.unit='all';state.type='all';state.studied=false;state.page=0;$('search').value='';$('type').value='all';$('studiedOnly').setAttribute('aria-pressed','false');render();}
  });
  $('search').value=state.search;
  $('search').addEventListener('input',()=>{state.search=$('search').value;state.page=0;clearTimeout(render.timer);render.timer=setTimeout(render,120);});
  $('type').addEventListener('change',()=>{state.type=$('type').value;state.page=0;render();});
  $('studiedOnly').addEventListener('click',()=>{state.studied=!state.studied;state.page=0;$('studiedOnly').setAttribute('aria-pressed',String(state.studied));render();});
  $('expandAll').addEventListener('change',()=>document.querySelectorAll('details.answer').forEach(detail=>detail.open=$('expandAll').checked));
  $('downloadAll').addEventListener('click',()=>downloadQuestions(visible,`python-${state.book}-${state.unit==='all'?'all':'unit-'+state.unit}-solutions.zip`));
  render();
})();
