const fs=require('fs'),assert=require('assert');
const {JSDOM}=require('jsdom');
const katex=require('katex');
const root=require('path').resolve(__dirname,'..');
const book=JSON.parse(fs.readFileSync(root+'/data/solutions.json','utf8'));
assert.equal(book.questions.length,381);assert.deepEqual(book.questions.map(q=>q.id),Array.from({length:381},(_,j)=>j+643));
let formulas=0;
for(const q of book.questions){assert(q.steps.length&&q.answer&&q.sourceCrops.length);for(const c of q.sourceCrops)assert(fs.existsSync(root+'/'+c.image));for(const f of [q.answer,...q.steps.map(s=>s.math).filter(Boolean)]){try{katex.renderToString(f,{throwOnError:true,strict:'ignore'});formulas++;}catch(e){throw new Error('Q'+q.id+' invalid equation '+f+' : '+e.message);}}if(q.diagram)assert(q.diagram.points.every(p=>p.every(Number.isFinite)));}
const dom=new JSDOM(fs.readFileSync(root+'/index.html','utf8'),{url:'https://example.test/maths/#q969',runScripts:'outside-only'});
const w=dom.window,d=w.document;w.eval(fs.readFileSync(require.resolve('katex/dist/katex.js'),'utf8'));w.eval(fs.readFileSync(root+'/data/solutions.js','utf8'));w.eval(fs.readFileSync(root+'/app.js','utf8'));
assert.equal(d.getElementById('question-title').textContent,'Q969 · Unit 8');assert(d.getElementById('solution').hidden);
for(const q of book.questions){d.getElementById('question-number').value=q.id;d.getElementById('jump-form').dispatchEvent(new w.Event('submit',{cancelable:true}));assert.equal(d.getElementById('question-title').textContent,`Q${q.id} · Unit ${q.unit}`);assert(d.getElementById('solution').hidden);assert.equal(d.querySelectorAll('#steps .step').length,q.steps.length);d.getElementById('show-solution').click();assert(!d.getElementById('solution').hidden);assert.equal(d.getElementById('show-solution').getAttribute('aria-expanded'),'true');assert(d.getElementById('answer').querySelector('.katex'));assert.equal(d.querySelectorAll('.source-crop').length,q.sourceCrops.length);}
d.getElementById('next-question').click();assert.equal(d.getElementById('question-number').value,'1023');
d.querySelector('[data-unit="6"]').click();assert.equal(d.getElementById('question-number').value,'643');assert.equal(d.getElementById('question-select').options.length,226);assert(d.getElementById('previous-question').disabled);
d.querySelector('[data-unit="7"]').click();assert.equal(d.getElementById('question-number').value,'869');assert.equal(d.getElementById('question-select').options.length,98);
d.querySelector('[data-unit="8"]').click();assert.equal(d.getElementById('question-select').options.length,57);
d.getElementById('previous-question').click();assert.equal(d.getElementById('question-number').value,'966');
d.getElementById('question-number').value='1024';d.getElementById('jump-form').dispatchEvent(new w.Event('submit',{cancelable:true}));assert(d.getElementById('jump-message').textContent.includes('643 to 1023'));assert.equal(d.getElementById('question-title').textContent,'Q966 · Unit 7');
console.log(`PASS: 381 questions, ${formulas} valid LaTeX formulas, every show-solution action, source images, chapter switching, limits, invalid input and navigation.`);
