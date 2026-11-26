const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{JSDOM}=require('jsdom');
const source=JSON.parse(fs.readFileSync('python/data/sem1-t2-source.json','utf8'));
const ctx=vm.createContext({window:{},console});vm.runInContext(fs.readFileSync('js/practice-book-questions.js','utf8'),ctx);
const bank=JSON.parse(vm.runInContext('JSON.stringify(PRACTICE_BOOK)',ctx));
const sourceMcqs=unit=>unit.mcqs.filter(q=>q.id.startsWith('PB-T2-'));
const t2=[...sourceMcqs(bank.unit4),...sourceMcqs(bank.unit5)];assert.equal(t2.length,98);
assert.equal(sourceMcqs(bank.unit4).length,30);assert.equal(sourceMcqs(bank.unit5).length,68);
for(const q of t2){const s=source.mcqs.find(r=>r.n===q.srNo);assert.equal(q.question,s.q);assert.deepEqual(q.options,s.options);assert.equal(q.sourceAnswer,s.answer);assert(q.explanation);assert.equal(q.answer,q.srNo===106?'D':s.answer);}
const catalog={window:{}};vm.runInNewContext(fs.readFileSync('js/study-catalogue.js','utf8'),catalog);
const items=catalog.window.STUDY_CATALOGUE.questions.filter(q=>q.subject==='py1');assert.equal(items.length,328);assert.equal(new Set(items.map(q=>q.href)).size,328);
function page(unit,number){const dom=new JSDOM(fs.readFileSync('python/index.html','utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,''),{url:`https://test.local/python/?book=sem1&unit=${unit}&q=${number}`,runScripts:'outside-only'});dom.window.HTMLElement.prototype.scrollIntoView=function(){};dom.window.eval(fs.readFileSync('js/practice-book-questions.js','utf8')+'\nconst PRACTICE_BOOK_SEM3={};\n'+fs.readFileSync('python/app.js','utf8'));return dom;}
for(const q of t2){const unit=q.srNo<=30?4:5,dom=page(unit,q.srNo),d=dom.window.document;assert.equal(d.querySelectorAll('article.question').length,1);assert.equal(d.querySelector('article').id,'question-'+q.id);assert.equal(d.querySelectorAll('.option').length,4);assert.equal(d.querySelector('.question-text').textContent,q.question);d.querySelector(`[data-letter="${q.answer}"]`).click();assert(d.querySelector('.feedback').textContent.includes('Correct'));dom.window.close();}
const extra=items.filter(q=>q.sourceSet==='Extra practice');
assert.equal(extra.length,20);
for(const q of extra){
  const dom=page(q.unit,q.number),d=dom.window.document;
  assert.equal(d.querySelector('article').id,'question-'+q.id);
  assert(d.querySelector('.question-number').textContent.includes(q.sourceSet));
  d.querySelector(`[data-letter="${'ABCD'[q.answerIndex]}"]`).click();
  assert(d.querySelector('.feedback').textContent.includes('Correct'));
  dom.window.close();
}
const old=page(1,1);assert.equal(old.window.document.querySelector('article').id,'question-PB-001');old.window.close();
console.log('PASS: all 98 T2 source questions/options, isolated links, rendered code indentation and MCQ scoring; original Q1 still resolves separately.');
