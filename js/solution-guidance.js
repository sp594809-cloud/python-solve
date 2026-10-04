/* Method hints are available before revealing the worked answer. */
(() => {
 'use strict';
 const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
 window.SolutionGuidance={render(q){
  let hint=document.getElementById('method-hint');
  if(!hint){hint=node('details');hint.id='method-hint';hint.className='method-hint';document.getElementById('show-solution').before(hint);}
  hint.open=false;hint.replaceChildren(node('summary','Need a hint?'),node('p',q.strategy||'Read the given data and identify the requested quantity before choosing a formula.'));
  let further=document.getElementById('solution-references');
  if(!further){further=node('aside');further.id='solution-references';further.className='solution-references';document.getElementById('solution').append(further);}
  further.replaceChildren();
  if(q.verification?.text)further.append(node('p',q.verification.text));
  if(q.references?.length){further.append(node('h4','Understand the method'));const list=node('ul');for(const ref of q.references){if(!/^https:\/\//.test(ref.url))continue;const li=node('li'),a=node('a',ref.title);a.href=ref.url;a.target='_blank';a.rel='noopener noreferrer';li.append(a);list.append(li);}further.append(list,node('p','These references explain the method. The original practice-book PDF above supplies the question.'));}
 }};
})();
