const fs=require('fs'),assert=require('assert'),{JSDOM}=require('jsdom');
const read=f=>fs.readFileSync(f,'utf8'),profile=JSON.stringify({enrollment:'9876543210',name:'Test Student',accountId:'PY-TEST'});
function reader(subject,id,logged=false,search=''){
 const file=subject==='maths'?'maths/index.html':id>=281?'probability/chapter-4.html':'probability/index.html';
 const url='https://test.local/python-solve/'+(subject==='maths'?'maths/':id>=281?'probability/chapter-4.html':'probability/')+search+'#q'+id;
 const dom=new JSDOM(read(file),{url,runScripts:'outside-only'}),w=dom.window;w.HTMLElement.prototype.scrollIntoView=()=>{};w.print=()=>{w.printed=true;};w.fetch=async()=>({ok:true,blob:async()=>new w.Blob(['fake jpeg'],{type:'image/jpeg'})});
 if(logged)w.localStorage.setItem('ljiet_student_profile',profile);
 for(const f of ['js/study-catalogue.js','js/study-tools.js','js/solution-guidance.js','js/question-access.js','js/question-share.js'])w.eval(read(f));
 w.eval(read(subject==='maths'?'maths/data/solutions.js':id>=281?'probability/data/chapter-4.js':'probability/data/chapter-3.js'));w.eval(read(subject==='maths'?'maths/app.js':'probability/app.js'));return dom;
}
(async()=>{
 for(const [subject,id] of [['maths',743],['ps',244],['ps',315]]){
  let dom=reader(subject,id),w=dom.window,d=w.document;assert(d.getElementById('solution').hidden);d.getElementById('show-solution').click();assert(d.getElementById('solution').hidden);assert(d.querySelector('dialog').textContent.includes('Log in'));
  const login=new URL(d.querySelector('#question-login-link').href);assert.equal(login.pathname,'/python-solve/');const back=new URL(login.searchParams.get('returnTo'),login);assert.equal(back.hash,'#q'+id);assert.equal(back.searchParams.get('solution'),'1');d.querySelector('.dialog-close').click();
  if(subject==='maths'){d.getElementById('print-solution').click();assert(!w.printed);assert(d.getElementById('solution').hidden);d.querySelector('.dialog-close').click();}
  w.localStorage.setItem('ljiet_student_profile',profile);d.getElementById('show-solution').click();assert(!d.getElementById('solution').hidden);d.getElementById('show-solution').click();assert(d.getElementById('solution').hidden);
  w.localStorage.setItem('ljiet_student_profile','invalid');d.getElementById('show-solution').click();assert(d.getElementById('solution').hidden);d.querySelector('.dialog-close').click();
  let shared=null;Object.defineProperty(w.navigator,'canShare',{value:p=>p.files?.length===1});Object.defineProperty(w.navigator,'share',{value:async p=>{shared=p;}});
  d.querySelector('.share-question-button').click();await new Promise(r=>setTimeout(r,0));const b=d.querySelector('#share-native');assert(!b.disabled);await b.onclick();assert.equal(shared.files[0].name,`LJIET-${subject}-Q${id}.jpg`);assert.equal(shared.files[0].type,'image/jpeg');assert(shared.text.includes('#q'+id));assert(!shared.text.includes('9876543210'));assert(!shared.text.includes('Test Student'));assert(d.querySelector('#share-download').href.includes('share/q'+id+'.jpg'));
  d.querySelector('.dialog-close').click();dom.window.close();
  dom=reader(subject,id,true,'?solution=1');w=dom.window;assert(!w.document.getElementById('solution').hidden);assert(!w.location.search.includes('solution'));w.dispatchEvent(new w.StorageEvent('storage',{key:'ljiet_student_profile',newValue:null})); // Storage deletion in another tab also updates localStorage there.
  w.localStorage.removeItem('ljiet_student_profile');w.dispatchEvent(new w.StorageEvent('storage',{key:'ljiet_student_profile',newValue:null}));assert(w.document.getElementById('solution').hidden);dom.window.close();
 }
 const fallback=reader('ps',281),fw=fallback.window;fw.document.querySelector('.share-question-button').click();await new Promise(r=>setTimeout(r,0));assert(fw.document.querySelector('#share-native').hidden);assert(fw.document.querySelector('#share-status').textContent.includes('Download'));assert(fw.document.querySelector('#share-whatsapp').href.startsWith('https://wa.me/'));fallback.window.close();
 for(const [target,valid] of [['https://evil.test/math/#q743',false],['/python-solve/maths/#q743',true],['/python-solve/probability/chapter-4.html#q315',true],['/python-solve/probability/chapter-4.html#q205',false],['/python-solve/other/#q743',false]]){const dom=new JSDOM('<body></body>',{url:'https://test.local/python-solve/?returnTo='+encodeURIComponent(target),runScripts:'outside-only'});dom.window.eval(read('js/question-access.js'));assert.equal(!!dom.window.QuestionAccess.loginReturnUrl(),valid);dom.window.close();}
 for(const file of ['maths/data/solutions.json','probability/data/chapter-3.json','probability/data/chapter-4.json']){const book=JSON.parse(read(file));for(const q of book.questions){const path=(file.startsWith('maths')?'maths/':'probability/')+q.shareImage;assert(fs.existsSync(path));assert(fs.readFileSync(path).subarray(0,2).equals(Buffer.from([255,216])));assert(q.shareImageSize[0]>500&&q.shareImageSize[1]>100);}}
 assert(!read('js/supabase-config.js').includes('serviceKey'));
 console.log('PASS: 521 PB JPEGs, Maths/P&S login gates, print guard, login return validation, exact question links, native file payloads, no private profile in shares, and WhatsApp/download fallback.');
})();
