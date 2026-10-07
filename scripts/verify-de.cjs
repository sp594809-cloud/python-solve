const fs=require('fs'),assert=require('assert'),path=require('path'),{JSDOM}=require('jsdom');
const read=f=>fs.readFileSync(f,'utf8'),book=JSON.parse(read('de/data/solutions.json'));
assert.deepEqual(book.questions.map(q=>q.id),Array.from({length:204},(_,i)=>334+i));
assert.equal(book.questions.filter(q=>q.unit===4).length,130);assert.equal(book.questions.filter(q=>q.unit===5).length,74);
for(const q of book.questions){assert(q.answer&&q.solution&&q.question);assert(fs.existsSync('de/'+q.image));assert(q.crop[1]>=0&&q.crop[1]+q.crop[3]<=q.pageHeight);assert(!/undefined|NaN|TODO/.test(q.solution));}
const dom=new JSDOM(read('de/index.html'),{url:'https://test.local/de/#q459',runScripts:'outside-only'}),w=dom.window,d=w.document;w.scrollTo=()=>{};
for(const f of ['js/study-catalogue.js','js/study-tools.js','de/data/solutions.js'])w.eval(read(f));
let authRequests=0;w.QuestionAccess={require(fn){authRequests++;fn();},resumeSolution(){}};w.eval(read('de/app.js'));
assert(d.querySelector('#question-title').textContent.includes('459'));assert(d.querySelector('#solution').hidden);d.querySelector('#show-solution').click();assert(!d.querySelector('#solution').hidden);assert.equal(authRequests,1);assert(d.querySelector('#steps').textContent.includes('Four two-input NOR gates'));
d.querySelector('#show-solution').click();assert(d.querySelector('#solution').hidden);
d.querySelector('[data-unit="5"]').click();assert.equal(d.querySelector('#question-number').value,'464');assert.equal(d.querySelector('#question-select').options.length,74);
d.querySelector('#question-search').value='BCD';d.querySelector('#question-search').dispatchEvent(new w.Event('input'));assert(d.querySelector('#question-select').options.length>5);
d.querySelector('#question-number').value='533';d.querySelector('#jump-form').dispatchEvent(new w.Event('submit',{cancelable:true}));assert(d.querySelector('#question-note').textContent.includes('ambiguous'));assert.equal(d.querySelector('[data-study-key]').dataset.studyKey,'de:533');
d.querySelector('[data-study="bookmark"]').click();assert(w.StudyTools.item('de:533').bookmark);
d.querySelector('#question-number').value='537';d.querySelector('#jump-form').dispatchEvent(new w.Event('submit',{cancelable:true}));assert(d.querySelector('#next-question').disabled);d.querySelector('#previous-question').click();assert.equal(d.querySelector('#question-number').value,'536');
const de=w.STUDY_CATALOGUE.subjects.find(s=>s.id==='de');assert.equal(de.total,204);assert.equal(w.STUDY_CATALOGUE.questions.filter(q=>q.subject==='de').length,204);
for(const n of d.querySelectorAll('script[src],link[rel="stylesheet"]')){const s=n.getAttribute('src')||n.getAttribute('href');if(!/^https:/.test(s))assert(fs.existsSync(path.resolve('dist/de',s)));}
const home=new JSDOM(read('index.html'),{url:'https://test.local/',runScripts:'outside-only'});for(const f of ['js/study-catalogue.js','js/study-tools.js','js/study-dashboard.js'])home.window.eval(read(f));home.window.document.dispatchEvent(new home.window.Event('DOMContentLoaded'));const hd=home.window.document;assert.equal(hd.querySelectorAll('.subject-card').length,7);assert(hd.querySelector('[data-subject="de"] a[href="de/#q464"]'));hd.querySelector('#global-search').value='Q533';hd.querySelector('#search-subject').value='de';hd.querySelector('#global-search').dispatchEvent(new home.window.Event('input'));assert(hd.querySelector('#global-results a[href="de/#q533"]'));
dom.window.close();home.window.close();console.log('PASS: 204 DE questions, source crops, auth-gated reveal, chapter navigation, search, saved progress, dashboard links and packaged assets.');
