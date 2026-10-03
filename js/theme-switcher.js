/* Shared preference for the hub and its practice books. */
(() => {
 const key='ljiet_theme';
 function applyTheme(theme) {
  theme=theme==='dark'?'dark':'light';
  document.documentElement.dataset.theme=theme;
  if(document.body)document.body.dataset.theme=theme;
  try{localStorage.setItem(key,theme);}catch(_){}
  const button=document.getElementById('themeToggleBtn');
  if(button){button.textContent=theme==='dark'?'Light mode':'Dark mode';button.setAttribute('aria-label','Switch to '+(theme==='dark'?'light':'dark')+' mode');button.setAttribute('aria-pressed',String(theme==='dark'));}
 }
 window.applyTheme=applyTheme;
 window.toggleTheme=()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
 let saved;try{saved=localStorage.getItem(key);}catch(_){}
 applyTheme(saved);
 document.addEventListener('DOMContentLoaded',()=>applyTheme(document.documentElement.dataset.theme));
 window.addEventListener('storage',event=>{if(event.key===key)applyTheme(event.newValue);});
})();
