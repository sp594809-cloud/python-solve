/** Force HTML-safe MCQ options (fixes <class 'int'> vanishing) */
(function () {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  var n = 0;
  var id = setInterval(function () {
    n++;
    if (typeof window.renderFilteredPBQuestions !== "function") {
      if (n > 50) clearInterval(id);
      return;
    }
    clearInterval(id);
    var orig = window.renderFilteredPBQuestions;
    window.renderFilteredPBQuestions = function () {
      orig.apply(this, arguments);
      var root = document.getElementById("pbQuestionsList");
      if (!root) return;
      root.querySelectorAll("button").forEach(function (btn) {
        var html = btn.innerHTML || "";
        if (/<class/i.test(html)) {
          var plain = btn.textContent || "";
          var m = plain.match(/^([A-D])\)\s*(.*)$/);
          if (m) btn.innerHTML = "<strong>" + m[1] + ")</strong> " + escapeHtml(m[2] || plain);
          else btn.textContent = plain;
        }
      });
    };
    console.log("escape-mcq-fix active");
  }, 150);
})();
