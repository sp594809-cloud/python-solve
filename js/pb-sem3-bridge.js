/**
 * Practice Book bridge: SEM-I + SEM-3
 * HTML-escape options so <class int> shows
 */
(function () {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }
  if (typeof window.pbActiveBook === "undefined") window.pbActiveBook = "sem1";
  if (typeof window.pbCurrentUnit === "undefined") window.pbCurrentUnit = "all";
  if (typeof window.pbCurrentType === "undefined") window.pbCurrentType = "all";
  if (typeof window.pbSearchQuery === "undefined") window.pbSearchQuery = "";

  function getBook() {
    if (window.pbActiveBook === "sem3" && typeof PRACTICE_BOOK_SEM3 !== "undefined") return PRACTICE_BOOK_SEM3;
    return typeof PRACTICE_BOOK !== "undefined" ? PRACTICE_BOOK : null;
  }
  function isSem3() { return window.pbActiveBook === "sem3"; }
  function unitList(BOOK) {
    var units = [], max = isSem3() ? 5 : 3;
    for (var u = 1; u <= max; u++) {
      if (window.pbCurrentUnit === "all" || window.pbCurrentUnit === String(u))
        if (BOOK["unit" + u]) units.push(BOOK["unit" + u]);
    }
    return units;
  }

  window.setPBUnit = function (unit) { window.pbCurrentUnit = unit; window.renderPracticeBookHub(); };
  window.setPBType = function (type) { window.pbCurrentType = type; window.renderPracticeBookHub(); };
  window.onPBSearch = function (val) { window.pbSearchQuery = (val || "").toLowerCase(); window.renderFilteredPBQuestions(); };

  function openPBScreen() {
    var w = document.getElementById("welcomeScreen");
    var c = document.getElementById("conceptScreen");
    if (w) { w.classList.remove("active"); w.style.removeProperty("display"); }
    if (c) { c.classList.add("active"); c.style.display = "block"; }
    var num = document.getElementById("conceptNumber");
    var title = document.getElementById("conceptTitle");
    if (isSem3()) {
      if (num) num.textContent = "📗";
      if (title) title.textContent = "SEM-III Python Practice Book (FCSP-1)";
    } else {
      if (num) num.textContent = "📘";
      if (title) title.textContent = "LJIET Practice Book – Digital Practice & Code Hub";
    }
    var tabs = document.getElementById("stepTabs"); if (tabs) tabs.style.display = "none";
    var nav = document.querySelector(".step-navigation"); if (nav) nav.style.display = "none";
    window.renderPracticeBookHub();
  }

  window.openSem1PracticeBook = function () { window.pbActiveBook = "sem1"; window.pbCurrentUnit = "all"; openPBScreen(); };
  window.openSem3PracticeBook = function () { window.pbActiveBook = "sem3"; window.pbCurrentUnit = "all"; openPBScreen(); };
  window.openPracticeBook = function () { window.pbActiveBook = "sem1"; openPBScreen(); };

  window.renderPracticeBookHub = function () {
    var content = document.getElementById("stepContent");
    if (!content) return;
    var BOOK = getBook();
    if (!BOOK) {
      content.innerHTML = "<p style='color:#ef4444;padding:24px'>Practice Book data not loaded.</p>";
      return;
    }
    var sem3 = isSem3();
    var mcqCount = 0, codeCount = 0;
    Object.keys(BOOK).forEach(function (k) {
      if (BOOK[k] && BOOK[k].mcqs) mcqCount += BOOK[k].mcqs.length;
      if (BOOK[k] && BOOK[k].coding) codeCount += BOOK[k].coding.length;
    });
    var unitBtns = '<button class="pb-filter-btn ' + (window.pbCurrentUnit === "all" ? "active" : "") + '" onclick="setPBUnit(\'all\')">All Units</button>';
    var maxU = sem3 ? 5 : 3;
    for (var u = 1; u <= maxU; u++)
      unitBtns += '<button class="pb-filter-btn ' + (window.pbCurrentUnit === String(u) ? "active" : "") + '" onclick="setPBUnit(\'' + u + '\')">Unit ' + u + '</button>';
    content.innerHTML =
      '<div style="background:linear-gradient(135deg,#1e1b4b,#0f172a);border:1px solid ' + (sem3 ? "#166534" : "#4338ca") + ';border-radius:16px;padding:20px;margin-bottom:24px">' +
      '<h2 style="color:' + (sem3 ? "#86efac" : "#c7d2fe") + ';margin:0;font-size:1.35rem">' +
      (sem3 ? "📗 SEM-III Python Practice Book" : "📘 LJIET Python-I Practice Book") + '</h2>' +
      '<p style="color:#94a3b8">' + mcqCount + ' MCQs' + (codeCount ? ' · ' + codeCount + ' Coding' : '') + '</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' +
      '<button class="pb-filter-btn ' + (!sem3 ? 'active' : '') + '" onclick="openSem1PracticeBook()">📘 SEM-I</button>' +
      '<button class="pb-filter-btn ' + (sem3 ? 'active' : '') + '" onclick="openSem3PracticeBook()">📗 SEM-3</button></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' + unitBtns + '</div>' +
      '<div style="margin-top:12px">' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'all' ? 'active' : '') + '" onclick="setPBType(\'all\')">All</button> ' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'mcq' ? 'active' : '') + '" onclick="setPBType(\'mcq\')">MCQs</button> ' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'code' ? 'active' : '') + '" onclick="setPBType(\'code\')">Code</button></div></div>' +
      '<div id="pbQuestionsList"></div>';
    window.renderFilteredPBQuestions();
  };

  window.renderFilteredPBQuestions = function () {
    var container = document.getElementById("pbQuestionsList");
    if (!container) return;
    var BOOK = getBook();
    if (!BOOK) { container.innerHTML = "<p>No book data.</p>"; return; }
    var units = unitList(BOOK);
    var html = "", total = 0;
    var q = window.pbSearchQuery || "", type = window.pbCurrentType || "all";
    units.forEach(function (u) {
      if (!u) return;
      var mcqs = type === "code" ? [] : (u.mcqs || []).filter(function (item) {
        if (!q) return true;
        return String(item.question || "").toLowerCase().indexOf(q) >= 0;
      });
      var coding = type === "mcq" ? [] : (u.coding || []).filter(function (item) {
        if (!q) return true;
        return String(item.question || "").toLowerCase().indexOf(q) >= 0;
      });
      if (!mcqs.length && !coding.length) return;
      total += mcqs.length + coding.length;
      html += '<div style="margin-bottom:24px;border:1px solid #334155;border-radius:16px;padding:20px">' +
        '<h3 style="color:#a5b4fc">' + escapeHtml(u.title || ('Unit ' + u.unit)) + ' · ' + mcqs.length + ' MCQ</h3>';
      mcqs.forEach(function (item) {
        var sid = "sol-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        var opts = (item.options || []).map(function (o, i) {
          var letter = "ABCD"[i];
          return '<button type="button" onclick="checkPBAnswerBridge(\'' + item.id + '\',\'' + letter + '\',\'' + sid + '\')" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;cursor:pointer"><strong>' + letter + ')</strong> ' + escapeHtml(o) + '</button>';
        }).join("");
        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:14px;margin-bottom:12px">' +
          '<div style="font-size:0.75rem;color:#818cf8">' + escapeHtml(item.id || "") + ' · Sr ' + (item.srNo || "") + '</div>' +
          '<div style="color:#f8fafc;margin:8px 0;white-space:pre-wrap">' + escapeHtml(item.question || "") + '</div>' +
          opts + '<div id="' + sid + '" style="display:none;margin-top:10px;padding:12px;border-radius:10px"></div></div>';
      });
      coding.forEach(function (item) {
        var sid = "code-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        html += '<div style="background:#020617;border:1px solid #166534;border-radius:14px;padding:14px;margin-bottom:12px">' +
          '<div style="color:#4ade80;font-size:0.75rem">' + escapeHtml(item.id || "") + ' · ' + escapeHtml(item.topic || "Code") + '</div>' +
          '<div style="color:#f8fafc;margin:8px 0;white-space:pre-wrap">' + escapeHtml(item.question || "") + '</div>' +
          '<button type="button" onclick="(function(){var e=document.getElementById(\'' + sid + '\');e.style.display=e.style.display===\'none\'?\'block\':\'none\';})()" style="background:#16a34a;color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer">View Solution</button>' +
          '<div id="' + sid + '" style="display:none;margin-top:12px"><pre style="color:#38bdf8;white-space:pre-wrap">' + escapeHtml(item.solution || "") + '</pre></div></div>';
      });
      html += '</div>';
    });
    if (!total) html = "<p style='color:#94a3b8;text-align:center;padding:40px'>No questions.</p>";
    container.innerHTML = html;
  };

  window.checkPBAnswerBridge = function (qid, letter, sid) {
    var BOOK = getBook() || {}, found = null;
    Object.keys(BOOK).forEach(function (k) {
      (BOOK[k].mcqs || []).forEach(function (item) { if (item.id === qid) found = item; });
    });
    if (!found && typeof PRACTICE_BOOK !== "undefined") {
      Object.keys(PRACTICE_BOOK).forEach(function (k) {
        (PRACTICE_BOOK[k].mcqs || []).forEach(function (item) { if (item.id === qid) found = item; });
      });
    }
    var el = document.getElementById(sid);
    if (!el || !found) return;
    el.style.display = "block";
    if (letter === found.answer) {
      el.style.background = "#052e16"; el.style.border = "1px solid #22c55e"; el.style.color = "#86efac";
      el.innerHTML = "✅ Correct! " + found.answer + ") " + escapeHtml(found.correct || "");
      if (typeof addStudentPoints === "function") addStudentPoints(10);
    } else {
      el.style.background = "#450a0a"; el.style.border = "1px solid #ef4444"; el.style.color = "#fca5a5";
      el.innerHTML = "❌ Wrong. Correct is " + found.answer + ") " + escapeHtml(found.correct || "");
    }
  };

  console.log("pb-sem3-bridge loaded (HTML-safe options)");
})();
