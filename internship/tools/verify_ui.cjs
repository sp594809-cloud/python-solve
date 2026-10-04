const fs=require('fs'),path=require('path'),assert=require('assert'),{JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const curriculum=fs.readFileSync(path.join(root,'curriculum.js'),'utf8'),app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const jobs=[];let workers=[],backup='';
function boot(saved){const dom=new JSDOM(html,{url:'https://study.example/internship/',runScripts:'outside-only'});const w=dom.window;w.Worker=class{constructor(){workers.push(this)}postMessage(data){jobs.push({worker:this,data})}terminate(){this.terminated=true}};w.URL.createObjectURL=()=> 'blob:test';w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){};if(saved)w.localStorage.setItem('ljiet_python_internship_v1',saved);w.eval(curriculum);w.eval(app);return w;}
let w=boot(),d=w.document,$=id=>d.getElementById(id),key='ljiet_python_internship_v1';
assert.equal(d.querySelectorAll('#week-list button').length,16);assert.equal($('reference').hidden,true);assert.equal($('editor').value.includes('pass'),true);
const student='def discounted_total(price, quantity, discount):\n    return round(price * quantity * (1-discount/100),2)';
$('editor').value=student;$('editor').dispatchEvent(new w.Event('input'));$('check').click();let job=jobs.at(-1);assert.equal(job.data.code,student);assert.equal(job.data.tests.length,3);
job.worker.onmessage({data:{id:job.data.id,type:'done',output:'',results:job.data.tests.map(t=>({label:t.label,pass:true}))}});
assert.equal($('independent').textContent,'1');assert.equal(JSON.parse(w.localStorage.getItem(key)).lessons['w01-l1'].passed,true);
$('editor').value+='\n# edit';$('editor').dispatchEvent(new w.Event('input'));assert.equal($('independent').textContent,'0');
$('hint').click();$('check').click();job=jobs.at(-1);job.worker.onmessage({data:{id:job.data.id,type:'done',results:job.data.tests.map(t=>({label:t.label,pass:true}))}});assert.equal($('assisted').textContent,'1');
$('check').click();job=jobs.at(-1);job.worker.onmessage({data:{id:job.data.id,type:'done',results:job.data.tests.map(t=>({label:t.label,pass:false,error:'test failure'}))}});assert.equal($('assisted').textContent,'0');
// A changed draft during a run must never receive the old code's passing result.
$('check').click();job=jobs.at(-1);$('editor').value+='\n# newer';$('editor').dispatchEvent(new w.Event('input'));job.worker.onmessage({data:{id:job.data.id,type:'done',results:job.data.tests.map(t=>({label:t.label,pass:true}))}});assert.equal($('assisted').textContent,'0');assert.match($('run-status').textContent,/changed/);
// Navigating terminates the worker; late results cannot mark another lesson.
$('check').click();job=jobs.at(-1);d.querySelectorAll('#lesson-tabs button')[1].click();assert.equal(job.worker.terminated,true);job.worker.onmessage({data:{id:job.data.id,type:'done',results:job.data.tests.map(t=>({label:t.label,pass:true}))}});assert.equal($('independent').textContent,'0');assert.equal($('assisted').textContent,'0');
$('reference-toggle').click();assert.equal($('reference').hidden,false);assert.equal(JSON.parse(w.localStorage.getItem(key)).lessons['w01-l2'].reference,true);
// Self-review is distinct from lesson completion and requires evidence text.
$('review-project').click();assert.equal($('reviewed').textContent,'0');d.querySelectorAll('#project-checklist input').forEach(x=>{x.checked=true;x.dispatchEvent(new w.Event('change'))});$('project-reflection').value='I added a bonus question and checked empty input. The first test failed on whitespace.';$('project-reflection').dispatchEvent(new w.Event('input'));$('project-link').value='javascript:alert(1)';$('project-link').dispatchEvent(new w.Event('input'));$('review-project').click();assert.equal($('reviewed').textContent,'0');$('project-link').value='https://github.com/student/project';$('project-link').dispatchEvent(new w.Event('input'));$('review-project').click();assert.equal($('reviewed').textContent,'1');
const saved=w.localStorage.getItem(key);w.close();w=boot(saved);d=w.document;$=id=>d.getElementById(id);assert.equal($('reviewed').textContent,'1');assert.equal(JSON.parse(saved).lessons['w01-l1'].code.endsWith('# newer'),true);
// Every week is navigable with lessons and a real downloadable kit.
for(let n=1;n<=16;n++){d.querySelectorAll('#week-list button')[n-1].click();assert.equal(d.querySelectorAll('#lesson-tabs button').length,3);assert.ok(fs.existsSync(path.join(root,$('project-download').getAttribute('href'))));}
// HTML labs check structure and use a sandbox without same-origin access.
d.querySelectorAll('#week-list button')[8].click();$('editor').value=w.INTERNSHIP_COURSE.lessons.find(l=>l.id==='w09-l1').reference;$('editor').dispatchEvent(new w.Event('input'));$('check').click();assert.equal($('preview').getAttribute('sandbox'),'allow-scripts');assert.equal(d.querySelectorAll('#results .pass').length,3);assert.equal($('independent').textContent,'1');
w.close();
// Corrupt data is recovered and is never executed as code.
w=boot('{broken');assert.ok(w.document.getElementById('editor').value);w.close();
console.log('PASS: student-code execution, draft reload, assist tracking, failing/stale results, navigation cancellation, 16 weeks/kits, self-review validation and HTML preview isolation');
