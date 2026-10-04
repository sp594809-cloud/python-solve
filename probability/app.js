'use strict';
(() => {
 const book = window.PROBABILITY_BOOK_DATA || window.PROBABILITY_CHAPTER_3;
 const byId = new Map(book.questions.map(q => [q.id, q]));
 const ids = book.questions.map(q => q.id);
 const $ = id => document.getElementById(id);
 const list = $('question-list');
 const selector = $('mobile-question');
 const escape = text => String(text).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
 let current = ids[0];
 for (const q of book.questions) {
  const link = document.createElement('a');
  link.href = '#q' + q.id; link.textContent = 'Q' + q.id;
  link.setAttribute('aria-label', 'Question ' + q.id);
  list.appendChild(link);
  const opt = document.createElement('option');opt.value=q.id;opt.textContent='Q'+q.id+' · '+q.question;selector.appendChild(opt);
 }
 function table(data,caption){
  if(!data)return '';
  return '<div class="table-wrap" tabindex="0" role="region" aria-label="'+escape(caption)+'"><table><caption>'+escape(caption)+'</caption><thead><tr>'+data.headers.map(x=>'<th scope="col">'+escape(x)+'</th>').join('')+'</tr></thead><tbody>'+data.rows.map(row=>'<tr>'+row.map((v,i)=>(i===0?'<th scope="row">':'<td>')+escape(v)+(i===0?'</th>':'</td>')).join('')+'</tr>').join('')+'</tbody></table></div>';
 }
 function show(id,focus=false){
  const q=byId.get(id);if(!q)return;
  current=id;if(window.SolutionGuidance)window.SolutionGuidance.render(q);if(window.StudyTools&&$('prob-study-tools'))window.StudyTools.mount($('prob-study-tools'),'ps:'+id); const index=ids.indexOf(id);
  $('question-title').textContent='Question '+id;
  $('question-text').textContent=q.question;
  $('position').textContent='Question '+(index+1)+' of '+ids.length;
  $('marks').textContent=q.marks+' '+(q.marks===1?'mark':'marks');
  $('pdf-page').textContent='PDF page '+q.page+' · source';$('pdf-page').href='practice-book.pdf#page='+q.page;
  $('given-table').innerHTML=table(q.table,'Given data');
  $('steps').innerHTML=q.steps.map((s,i)=>'<div class="step"><h4>'+(i+1)+'. '+escape(s.title)+'</h4>'+(s.text?'<p>'+escape(s.text)+'</p>':'')+(s.formula?'<div class="formula">'+escape(s.formula)+'</div>':'')+'</div>').join('');
  $('calculation-table').innerHTML=table(q.conversionTable,'Converted frequencies')+table(q.workingTable,'Calculation table');
  $('answer').textContent=q.answer;
  $('note').hidden=!q.note;$('note').innerHTML=q.note?'<strong>Note about the question</strong>'+escape(q.note):'';
  $('solution').hidden=true;$('show-solution').setAttribute('aria-expanded','false');$('show-solution').textContent='Show solution';
  $('previous').disabled=index===0;$('next').disabled=index===ids.length-1;
  for(const link of list.children){if(link.hash==='#q'+id)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}
  selector.value=id;
  document.title='Q'+id+' · Chapter '+book.chapter+' · Probability Practice Book';
  $('announcement').textContent='Question '+id+' selected. Solution hidden.';
  if(focus){$('question-title').focus({preventScroll:true});$('main-content').scrollIntoView({block:'start',behavior:'instant'});}
 }
 function navigate(id){location.hash='q'+id;}
 function route(){const match=location.hash.match(/^#q(\d+)$/);const id=match?Number(match[1]):ids[0];const valid=byId.has(id)?id:ids[0];if(id!==valid)history.replaceState(null,'','#q'+valid);show(valid);}
 $('show-solution').addEventListener('click',()=>{const open=$('solution').hidden;$('solution').hidden=!open;$('show-solution').setAttribute('aria-expanded',String(open));$('show-solution').textContent=open?'Hide solution':'Show solution';$('announcement').textContent=open?'Solution shown for question '+current:'Solution hidden';});
 $('previous').addEventListener('click',()=>navigate(ids[ids.indexOf(current)-1]));
 $('next').addEventListener('click',()=>navigate(ids[ids.indexOf(current)+1]));
 selector.addEventListener('change',()=>navigate(Number(selector.value)));
 window.addEventListener('hashchange',()=>{route();$('question-title').focus({preventScroll:true});$('main-content').scrollIntoView({block:'start',behavior:'instant'});});
 route();
})();
