(function () {
  var parts = window.__APP_B64 || [];
  if (parts.length < 4) { console.error("app b64 parts missing", parts.length); return; }
  var b64 = parts.join("");
  try {
    var bin = atob(b64);
    var code = bin;
    try { code = decodeURIComponent(escape(bin)); } catch (e) {}
    (0, eval)(code);
    console.log("app.js restored from parts");
  } catch (e) {
    console.error("app restore failed", e);
  }
})();
