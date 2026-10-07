/* Navigation state and keyboard access without changing study behaviour. */
(() => {
 const routes={openWelcomeScreen:'home',openSem1PracticeBook:'sem1',openSem3PracticeBook:'sem3',openFsd1PracticeBook:'fsd1',openSEPracticeBook:'se',openLeaderboardScreen:'rank',openLearningPathNav:'learn',startUnitQuiz:'quiz'};
 const MENU_KEY='ljiet_open_semester',VIEW_KEY='ljiet_last_subject';
 function saveMenu(menu){try{if(menu?.open)sessionStorage.setItem(MENU_KEY,menu.id);else if(menu&&sessionStorage.getItem(MENU_KEY)===menu.id)sessionStorage.removeItem(MENU_KEY);}catch{}}
 function restoreMenu(){
  let id='';try{id=sessionStorage.getItem(MENU_KEY)||'';}catch{}
  document.querySelectorAll('.semester-menu').forEach(menu=>{menu.open=menu.id===id;});
  let view='';try{view=sessionStorage.getItem(VIEW_KEY)||'';}catch{}
  if(view)document.querySelectorAll('.semester-subjects li[data-view]').forEach(item=>{const active=item.dataset.view===view;item.classList.toggle('active',active);const link=item.querySelector('a');if(active)link?.setAttribute('aria-current','page');else link?.removeAttribute('aria-current');});
 }
 function mark(view){
  document.querySelectorAll('[data-view]').forEach(el=>{const active=el.dataset.view===view;el.classList.toggle('active',active);if(active){const group=el.closest('.semester-menu');if(group){group.open=true;saveMenu(group);}}const control=el.querySelector('button,a')||el;if(active)control.setAttribute('aria-current','page');else control.removeAttribute('aria-current');});
  if(['sem1','sem3','fsd1','se','maths','ps'].includes(view)){try{sessionStorage.setItem(VIEW_KEY,view);}catch{}}
 }
 document.querySelectorAll('.semester-menu').forEach(menu=>menu.addEventListener('toggle',()=>{if(menu.open)document.querySelectorAll('.semester-menu').forEach(other=>{if(other!==menu)other.open=false;});saveMenu(menu);}));
 document.addEventListener('click',event=>{const link=event.target.closest('.semester-subjects a');if(!link)return;const item=link.closest('li[data-view]'),menu=link.closest('.semester-menu');if(item){try{sessionStorage.setItem(VIEW_KEY,item.dataset.view);}catch{}}if(menu)saveMenu(menu);});
 Object.entries(routes).forEach(([name,view])=>{const original=window[name];if(typeof original!=='function')return;window[name]=function(...args){mark(view);return original.apply(this,args);};});
 const originalClose=window.closeSidebarOnMobile;
 window.closeSidebarOnMobile=function(){if(originalClose)originalClose();document.body.classList.remove('sidebar-open');document.getElementById('sidebar')?.classList.remove('open');document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');document.getElementById('subjects-nav')?.setAttribute('aria-expanded','false');};
 // Always synchronize both legacy drawer flags, including when opened by an old handler.
 window.toggleSidebar=function(){const open=!document.body.classList.contains('sidebar-open');document.body.classList.toggle('sidebar-open',open);document.getElementById('sidebar')?.classList.toggle('open',open);document.querySelector('.menu-toggle')?.setAttribute('aria-expanded',String(open));document.getElementById('subjects-nav')?.setAttribute('aria-expanded',String(open));};
 window.openSubjectsMenu=function(){if(!document.body.classList.contains('sidebar-open'))window.toggleSidebar();document.querySelector('.semester-menu summary')?.focus();};
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('sidebar-open')){window.closeSidebarOnMobile();document.querySelector('.menu-toggle')?.focus();}});
 function accessibleConcepts(){document.querySelectorAll('#conceptList li').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();el.click();}};});}
 const list=document.getElementById('conceptList');if(list)new MutationObserver(accessibleConcepts).observe(list,{childList:true});
 document.addEventListener('DOMContentLoaded',()=>{accessibleConcepts();mark('home');restoreMenu();const view=location.hash.slice(1);const name=Object.keys(routes).find(name=>routes[name]===view);if(name&&view!=='quiz')window[name]();});
 window.addEventListener('pageshow',restoreMenu);
})();
