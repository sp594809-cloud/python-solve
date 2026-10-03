/** Force visible leaderboard names on dark table */
(function () {
  function fixNames() {
    var box = document.getElementById("leaderboardTableBox");
    if (!box) return;
    box.style.setProperty("background", "var(--card)", "important");
    box.querySelectorAll("td").forEach(function (td) {
      if (td.cellIndex === 1) {
        td.style.setProperty("color", "var(--text)", "important");
        td.style.setProperty("font-weight", "700", "important");
      } else if (td.cellIndex !== 0) {
        td.style.setProperty("color", "var(--text)", "important");
      }
    });
    box.querySelectorAll("th").forEach(function (th) {
      th.style.setProperty("color", "var(--muted)", "important");
    });
  }
  var tries = 0;
  var t = setInterval(function () {
    tries++;
    if (typeof window.renderLiveLeaderboard === "function") {
      clearInterval(t);
      var orig = window.renderLiveLeaderboard;
      window.renderLiveLeaderboard = async function () {
        var r = orig.apply(this, arguments);
        try { if (r && r.then) await r; } catch (e) {}
        setTimeout(fixNames, 30);
        setTimeout(fixNames, 200);
        setTimeout(fixNames, 800);
        return r;
      };
      console.log("leaderboard-name-fix patched");
    }
    if (tries > 40) clearInterval(t);
  }, 150);
  document.addEventListener("DOMContentLoaded", function () {
    var obs = new MutationObserver(function () {
      if (document.getElementById("leaderboardBody")) fixNames();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  });
})();
