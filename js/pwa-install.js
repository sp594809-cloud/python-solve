(()=>{'use strict';
let installPrompt=null,backdrop,primary,instructions,trigger,note;
const sessionKey='ljiet-pwa-prompt-shown';
const seenThisSession=()=>{try{return sessionStorage.getItem(sessionKey)==='1'}catch{return false}};
const markSeen=()=>{try{sessionStorage.setItem(sessionKey,'1')}catch{}};
const isIOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||(/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints>1);
const isInstalled=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
function update(){if(!primary)return;if(installPrompt){primary.textContent='Install the app';return}primary.textContent=isIOS()?'Show iPhone install steps':'Show install steps'}
function close(){if(backdrop)backdrop.hidden=true}
function showInstructions(){
 instructions.hidden=false;
 instructions.innerHTML=isIOS()
  ? '<strong>On iPhone or iPad</strong><ol><li>Tap the <b>Share</b> button in Safari.</li><li>Scroll and tap <b>Add to Home Screen</b>.</li><li>Tap <b>Add</b> to finish.</li></ol><p>iOS requires these steps; a website cannot add itself automatically.</p>'
  : '<strong>Install from your browser</strong><ol><li>Open the browser menu (⋮ or Share).</li><li>Choose <b>Install app</b> or <b>Add to Home Screen</b>.</li><li>Confirm the prompt.</li></ol>';
}
function build(){
 if(document.getElementById('pwaInstallBackdrop'))return;
 const actions=document.querySelector('.header-actions');
 const button=document.createElement('button');button.type='button';button.className='pwa-install-trigger';button.id='pwaInstallTrigger';button.textContent='Install app';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','pwaInstallDialog');
 if(actions)actions.prepend(button);trigger=button;
 const wrap=document.createElement('div');wrap.className='pwa-install-backdrop';wrap.id='pwaInstallBackdrop';wrap.hidden=true;
 wrap.innerHTML='<section class="pwa-install-dialog" id="pwaInstallDialog" role="dialog" aria-modal="true" aria-labelledby="pwaInstallTitle" aria-describedby="pwaInstallLead"><button type="button" class="pwa-install-close" aria-label="Close install message">×</button><img class="pwa-install-logo" src="./icons/icon.svg" alt=""><h2 id="pwaInstallTitle">Take your study hub with you</h2><p class="pwa-install-lead" id="pwaInstallLead">Add LJIET Learning Hub to your Home Screen for quick access to your books and practice.</p><ul class="pwa-install-benefits"><li>Opens like an app, without browser tabs</li><li>One tap to reach your subjects and solutions</li><li>Works offline for pages already cached</li></ul><button class="pwa-install-primary" id="pwaInstallPrimary" type="button">Install the app</button><button class="pwa-install-secondary" id="pwaInstallHelp" type="button">How to add it</button><div class="pwa-install-instructions" id="pwaInstallInstructions" hidden></div><p class="pwa-install-note" id="pwaInstallNote">You can close this and keep browsing. We’ll remind you next time until it’s installed.</p></section>';
 document.body.append(wrap);backdrop=wrap;primary=wrap.querySelector('#pwaInstallPrimary');instructions=wrap.querySelector('#pwaInstallInstructions');note=wrap.querySelector('#pwaInstallNote');
 const open=()=>{if(isInstalled()){close();button.hidden=true;return}wrap.hidden=false;wrap.querySelector('.pwa-install-close').focus()};
 button.addEventListener('click',open);
 wrap.querySelector('.pwa-install-close').addEventListener('click',close);
 wrap.addEventListener('click',e=>{if(e.target===wrap)close()});
 wrap.querySelector('#pwaInstallHelp').addEventListener('click',()=>{if(instructions.hidden)showInstructions();else instructions.hidden=true});
 primary.addEventListener('click',async()=>{
  if(installPrompt){const prompt=installPrompt;installPrompt=null;try{await prompt.prompt();const result=await prompt.userChoice;if(result?.outcome==='accepted'){close();return}note.textContent='No problem. You can install it later from this button.'}catch{showInstructions()}update();return}
  showInstructions();
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!wrap.hidden)close()});
 if(isInstalled())button.hidden=true;update();
 if(!isInstalled()&&!seenThisSession()){markSeen();setTimeout(open,900)}
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;update()});
window.addEventListener('appinstalled',()=>{installPrompt=null;close();if(trigger)trigger.hidden=true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true});else build();
})();
