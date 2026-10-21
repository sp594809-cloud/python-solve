const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{JSDOM}=require('jsdom');
const source=JSON.parse(fs.readFileSync('python/data/sem1-t2-source.json','utf8'));
const ctx=vm.createContext({window:{},console});vm.runInContext(fs.readFileSync('js/practice-book-questions.js','utf8'),ctx);
const bank=JSON.parse(vm.runInContext('JSON.stringify(PRACTICE_BOOK)',ctx));
const t2=[...bank.unit4.mcqs,...bank.unit5.mcqs];assert.equal(t2.length,98);
assert.equal(bank.unit4.mcqs.length,30);assert.equal(bank.unit5.mcqs.length,68);
for(const q of t2){const s=source.mcqs.find(r=>r.n===q.srNo);assert.equal(q.question,s.q);assert.deepEqual(q.options,s.options);assert.equal(q.sourceAnswer,s.answer);assert(q.explanation);assert.equal(q.answer,q.srNo===106?'D':s.answer);}
const catalog={window:{}};vm.runInNewContext(fs.readFileSync('js/study-catalogue.js','utf8'),catalog);
const items=catalog.window.STUDY_CATALOGUE.questions.filter(q=>q.subject==='py1');assert.equal(items.length,308);assert.equal(new Set(items.map(q=>q.href)).size,308);
function page(unit,number){const dom=new JSDOM(fs.readFileSync('python/index.html','utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,''),{url:`https://test.local/python/?book=sem1&unit=${unit}&q=${number}`,runScripts:'outside-only'});dom.window.HTMLElement.prototype.scrollIntoView=function(){};dom.window.eval(fs.readFileSync('js/practice-book-questions.js','utf8')+'\nconst PRACTICE_BOOK_SEM3={};\n'+fs.readFileSync('python/app.js','utf8'));return dom;}
for(const q of t2){const unit=q.srNo<=30?4:5,dom=page(unit,q.srNo),d=dom.window.document;assert.equal(d.querySelectorAll('article.question').length,1);assert.equal(d.querySelector('article').id,'question-'+q.id);assert.equal(d.querySelectorAll('.option').length,4);assert.equal(d.querySelector('.question-text').textContent,q.question);d.querySelector(`[data-letter="${q.answer}"]`).click();assert(d.querySelector('.feedback').textContent.includes('Correct'));dom.window.close();}
const old=page(1,1);assert.equal(old.window.document.querySelector('article').id,'question-PB-001');old.window.close();
console.log('PASS: all 98 T2 source questions/options, isolated links, rendered code indentation and MCQ scoring; original Q1 still resolves separately.');
