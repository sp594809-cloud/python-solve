// Fix Q40/Q41/Q42: options containing <class '...'> were parsed as HTML tags and appeared empty
(function () {
  function escapeOpt(s) {
    s = s == null ? "" : String(s);
    if (s.indexOf("<") !== -1 && s.indexOf("&lt;") === -1) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return s;
  }
  function fixAll() {
    if (typeof PRACTICE_BOOK === "undefined") return;
    [PRACTICE_BOOK.unit1, PRACTICE_BOOK.unit2, PRACTICE_BOOK.unit3].forEach(function (u) {
      if (!u || !u.mcqs) return;
      u.mcqs.forEach(function (q) {
        if (!q || !q.options) return;
        q.options = q.options.map(escapeOpt);
        if (q.correct) q.correct = escapeOpt(q.correct);
      });
    });
    console.log("✅ option-html-fix: escaped <class> options for Q40/Q41/Q42");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(fixAll, 50);
      setTimeout(fixAll, 500);
    });
  } else {
    setTimeout(fixAll, 50);
    setTimeout(fixAll, 500);
  }
})();
