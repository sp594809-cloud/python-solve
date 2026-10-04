/* Reuse the Hub's existing device profile. This is a UI gate, not server authorization. */
(() => {
 'use strict';
 const PROFILE='ljiet_student_profile';
 function profile(){try{const p=JSON.parse(localStorage.getItem(PROFILE)||'null');return p&&/^\d{10}$/.test(p.enrollment)&&typeof p.name==='string'&&p.name.trim()?p:null;}catch{return null;}}
 function returnUrl(){const value=new URL(location.href).searchParams.get('returnTo');if(!value)return null;try{const root=new URL('./',location.href),u=new URL(value,root);const relative=u.pathname.slice(root.pathname.length);if(u.origin!==root.origin||!u.pathname.startsWith(root.pathname)||!['maths/','maths/index.html','probability/','probability/index.html','probability/chapter-4.html'].includes(relative))return null;const id=Number(u.hash.match(/^#q(\d+)$/)?.[1]);const maths=relative.startsWith('maths/');if(!Number.isInteger(id)||id<(maths?643:relative.includes('chapter-4')?281:205)||id>(maths?1023:relative.includes('chapter-4')?344:280))return null;u.searchParams.set('solution','1');return u.href;}catch{return null;}}
 function resumeLogin(){const url=returnUrl();if(url&&profile())location.replace(url);}
 function requireLogin(action){
  if(profile()){action();return true;}
  const destination=new URL(location.href);destination.searchParams.set('solution','1');
  const login=new URL('../',location.href);login.searchParams.set('returnTo',destination.pathname+destination.search+destination.hash);
  const d=window.StudyTools.modal('Log in to see this solution','<p>Your question will stay selected. After login, its solution opens automatically.</p><p><a class="study-primary" id="question-login-link">Log in and show solution</a></p><p class="study-small">Use your existing Hub login. Your name and mobile number are not included when sharing a question.</p>');d.querySelector('#question-login-link').href=login.href;return false;
 }
 function resumeSolution(action){const u=new URL(location.href);if(u.searchParams.get('solution')!=='1')return;u.searchParams.delete('solution');history.replaceState(null,'',u.pathname+u.search+u.hash);requireLogin(action);}
 window.QuestionAccess={profile,require:requireLogin,resumeSolution,loginReturnUrl:returnUrl};
 window.addEventListener('student-login',resumeLogin);window.addEventListener('storage',e=>{if(e.key===PROFILE){if(!profile()){const s=document.getElementById('solution');if(s)s.hidden=true;const b=document.getElementById('show-solution');if(b){b.textContent='Show solution';b.setAttribute('aria-expanded','false');}}resumeLogin();}});
 document.addEventListener('DOMContentLoaded',resumeLogin);
})();
