/* Solutions are open to all visitors. Kept as a thin API so maths/probability/de readers stay compatible. */
(() => {
 'use strict';
 const PROFILE='ljiet_student_profile';
 function enrollment(value){let digits=String(value??'').replace(/\D/g,'');if(digits.length===12&&digits.startsWith('91'))digits=digits.slice(2);return /^\d{10}$/.test(digits)?digits:'';}
 function profile(){try{const p=JSON.parse(localStorage.getItem(PROFILE)||'null');if(!p||typeof p!=='object')return null;const mobile=enrollment(p.enrollment??p.mobile);const name=typeof p.name==='string'?p.name.trim():'';if(!mobile||!name)return null;if(p.enrollment!==mobile||p.name!==name){p.enrollment=mobile;p.name=name;localStorage.setItem(PROFILE,JSON.stringify(p));}return p;}catch{return null;}}
 function returnUrl(){return null;}
 function resumeLogin(){}
 function requireLogin(action){if(typeof action==='function')action();return true;}
 function resumeSolution(action){const u=new URL(location.href);if(u.searchParams.get('solution')!=='1')return;u.searchParams.delete('solution');history.replaceState(null,'',u.pathname+u.search+u.hash);if(typeof action==='function')action();}
 window.QuestionAccess={profile,require:requireLogin,resumeSolution,loginReturnUrl:returnUrl};
})();
