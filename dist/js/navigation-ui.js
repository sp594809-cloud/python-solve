/* Navigation state and keyboard access without changing study behaviour. */
(() => {
 const routes={openWelcomeScreen:'home',openSem1PracticeBook:'sem1',openSem3PracticeBook:'sem3',openFsd1PracticeBook:'fsd1',openSEPracticeBook:'se',openLeaderboardScreen:'rank',openLearningPathNav:'learn',startUnitQuiz:'quiz'};
 function mark(view){
  document.querySelectorAll('[data-view]').forEach(el=>{const active=el.dataset.view===view;el.classList.toggle('active',active);const control=el.querySelector('button,a')||el;if(active)control.setAttribute('aria-current','page');else control.removeAttribute('aria-current');});
 }
 Object.entries(routes).forEach(([name,view])=>{const original=window[name];if(typeof original!=='function')return;window[name]=function(...args){mark(view);return original.apply(this,args);};});
 const originalClose=window.closeSidebarOnMobile;
 window.closeSidebarOnMobile=function(){if(originalClose)originalClose();document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');};
 // Always synchronize both legacy drawer flags, including when opened by an old handler.
 window.toggleSidebar=function(){const open=!document.body.classList.contains('sidebar-open');document.body.classList.toggle('sidebar-open',open);document.getElementById('sidebar')?.classList.toggle('open',open);document.querySelector('.menu-toggle')?.setAttribute('aria-expanded',String(open));};
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('sidebar-open')){window.closeSidebarOnMobile();document.querySelector('.menu-toggle')?.focus();}});
 function accessibleConcepts(){document.querySelectorAll('#conceptList li').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();el.click();}};});}
 const list=document.getElementById('conceptList');if(list)new MutationObserver(accessibleConcepts).observe(list,{childList:true});
 document.addEventListener('DOMContentLoaded',()=>{accessibleConcepts();mark('home');const view=location.hash.slice(1);const name=Object.keys(routes).find(name=>routes[name]===view);if(name&&view!=='quiz')window[name]();});
})();
