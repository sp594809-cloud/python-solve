/* Native image sharing uses a user click after the original PDF crop has loaded. */
(() => {
 'use strict';
 const el=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
 function shareUrl(q){const u=new URL(location.href);u.search='';u.hash='q'+q.id;return u.href;}
 function open(q,subject){
  const label=`${subject==='maths'?'Maths I · Semester 1':'P&S · Semester 3'} · Q${q.id}`;
  const url=shareUrl(q),message=`📘 ${label}\nOriginal practice-book question\nView step-by-step solution:\n${url}`;
  const d=window.StudyTools.modal('Share the original PB question','<p class="share-label"></p><div class="share-preview"></div><p class="study-small">Question and options cropped from the original PDF. The printed answer column is omitted.</p><div class="dialog-buttons"><button type="button" class="study-primary" id="share-native" disabled>Preparing image…</button><a id="share-download" download class="share-secondary">Download image</a><a id="share-whatsapp" target="_blank" rel="noopener noreferrer" class="share-secondary">Open WhatsApp with link</a></div><label>Direct question link<input id="share-question-link" readonly></label><button type="button" id="share-copy">Copy link</button><p id="share-status" role="status">Choose WhatsApp in your device’s share sheet to send the image and link together.</p>');
  d.querySelector('.share-label').textContent=label;
  const preview=el('img');preview.alt='Original PB question '+q.id;preview.src=q.shareImage;d.querySelector('.share-preview').append(preview);
  const link=d.querySelector('#share-question-link');link.value=url;
  const download=d.querySelector('#share-download');download.href=q.shareImage;download.download=`LJIET-${subject}-Q${q.id}.jpg`;
  const wa=d.querySelector('#share-whatsapp');wa.href='https://wa.me/?text='+encodeURIComponent(message);
  wa.addEventListener('click',()=>{d.querySelector('#share-status').textContent='The WhatsApp link sends text. Attach the downloaded PB image if your browser does not support sharing files.';});
  d.querySelector('#share-copy').onclick=async()=>{try{await navigator.clipboard.writeText(url);d.querySelector('#share-status').textContent='Question link copied.';}catch{link.focus();link.select();d.querySelector('#share-status').textContent='Select and copy this link manually.';}};
  const button=d.querySelector('#share-native'),status=d.querySelector('#share-status');
  fetch(q.shareImage).then(r=>{if(!r.ok)throw Error('image');return r.blob();}).then(blob=>{
   if(!d.isConnected)return;
   const file=new File([blob],`LJIET-${subject}-Q${q.id}.jpg`,{type:'image/jpeg'}),payload={files:[file],title:label,text:message};
   if(!navigator.share||!navigator.canShare?.(payload)){button.hidden=true;status.textContent='File sharing is unavailable here. Download the image, then open WhatsApp with the link and attach the image.';return;}
   button.disabled=false;button.textContent='Share image & link';
   button.onclick=async()=>{button.disabled=true;try{await navigator.share(payload);status.textContent='Share sheet opened. Check that the question link is included with the image.';}catch(err){status.textContent=err.name==='AbortError'?'Sharing cancelled. You can try again.':'Could not share the file. Download the image and attach it in WhatsApp with the question link.';}finally{button.disabled=false;}};
  }).catch(()=>{button.hidden=true;status.textContent='Image could not load. Retry sharing, or use the original PDF and copy the question link.';});
 }
 window.QuestionShare={mount(q,subject){let host=document.getElementById('question-share-tools');if(!host){host=el('div');host.id='question-share-tools';host.className='question-share-tools';document.getElementById('show-solution').before(host);}host.replaceChildren();const b=el('button','Share PB question');b.type='button';b.className='share-question-button';b.onclick=()=>open(q,subject);host.append(b);if(subject==='ps'){const details=el('details');details.className='original-pb-preview';details.append(el('summary','See the original PB question'));const img=el('img');img.src=q.shareImage;img.alt='Original PB question '+q.id;img.loading='lazy';details.append(img);host.append(details);}},open,url:shareUrl};
})();
