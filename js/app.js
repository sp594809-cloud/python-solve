(function(){
  var p=window.__APP_B64||[];
  if(p.length<5){console.error("app parts",p.length);return;}
  try{
    var bin=atob(p.join(""));
    var code=decodeURIComponent(Array.prototype.map.call(bin,function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2);}).join(""));
    (0,eval)(code);
    console.log("app.js OK");
  }catch(e){console.error(e);}
})();
