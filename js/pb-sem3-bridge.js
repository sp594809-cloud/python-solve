/**
 * Practice Book bridge: SEM-I + SEM-3 with original UI
 * Fixes SEM-3 opening SEM-1 MCQs
 */
(function () {
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
      if (window.pbCurrentUnit === "all" || window.pbCurrentUnit === String(u)) {
        if (BOOK["unit" + u]) units.push(BOOK["unit" + u]);
      }
    }
    return units;
  }

  window.setPBBook = function (book) {
    window.pbActiveBook = book || "sem1";
    window.pbCurrentUnit = "all";
    window.renderPracticeBookHub();
  };
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

  window.openSem1PracticeBook = function () {
    window.pbActiveBook = "sem1";
    window.pbCurrentUnit = "all";
    openPBScreen();
  };
  window.openSem3PracticeBook = function () {
    window.pbActiveBook = "sem3";
    window.pbCurrentUnit = "all";
    openPBScreen();
  };
  window.openPracticeBook = function () {
    window.pbActiveBook = "sem1";
    openPBScreen();
  };

  window.renderPracticeBookHub = function () {
    var content = document.getElementById("stepContent");
    if (!content) return;
    var BOOK = getBook();
    if (!BOOK) {
      content.innerHTML = "<p style='color:#ef4444;padding:24px'>Practice Book data not loaded. Hard refresh (Ctrl+Shift+R).</p>";
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
    for (var u = 1; u <= maxU; u++) {
      unitBtns += '<button class="pb-filter-btn ' + (window.pbCurrentUnit === String(u) ? "active" : "") + '" onclick="setPBUnit(\'' + u + '\')">Unit ' + u + '</button>';
    }
    content.innerHTML =
      '<div style="background:linear-gradient(135deg,#1e1b4b,#0f172a);border:1px solid ' + (sem3 ? "#166534" : "#4338ca") + ';border-radius:16px;padding:20px;margin-bottom:24px">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">' +
      '<h2 style="color:' + (sem3 ? "#86efac" : "#c7d2fe") + ';margin:0;font-size:1.35rem">' +
      (sem3 ? "📗 SEM-III Python Practice Book (FCSP-1)" : "📘 LJIET Python-I Practice Book (SEM-I)") + '</h2>' +
      '<span style="background:#22c55e22;border:1px solid #22c55e;color:#4ade80;padding:4px 12px;border-radius:99px;font-weight:700;font-size:0.82rem">' +
      mcqCount + ' MCQs' + (codeCount ? ' · ' + codeCount + ' Coding' : '') + '</span></div>' +
      '<p style="color:#94a3b8;font-size:0.92rem;line-height:1.5;margin-top:10px">' +
      (sem3 ? 'FCSP-1 SEM-III. MCQs (+10 pts) and coding with model solutions.' : 'SEM-I Units 1–3. MCQs with explanations and coding practice.') + '</p>' +
      '<div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">' +
      '<button class="pb-filter-btn ' + (!sem3 ? 'active' : '') + '" onclick="openSem1PracticeBook()">📘 SEM-I</button>' +
      '<button class="pb-filter-btn ' + (sem3 ? 'active' : '') + '" onclick="openSem3PracticeBook()">📗 SEM-3</button></div>' +
      '<div style="display:flex;gap:12px;margin-top:14px;flex-wrap:wrap;align-items:center">' +
      '<div style="display:flex;gap:6px;background:#0f172a;padding:4px;border-radius:99px;border:1px solid #334155;flex-wrap:wrap">' + unitBtns + '</div>' +
      '<div style="display:flex;gap:6px;background:#0f172a;padding:4px;border-radius:99px;border:1px solid #334155">' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'all' ? 'active' : '') + '" onclick="setPBType(\'all\')">All Types</button>' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'mcq' ? 'active' : '') + '" onclick="setPBType(\'mcq\')">MCQs</button>' +
      '<button class="pb-filter-btn ' + (window.pbCurrentType === 'code' ? 'active' : '') + '" onclick="setPBType(\'code\')">Code</button></div>' +
      '<div style="flex:1;min-width:180px"><input type="text" id="pbSearchInput" value="' + (window.pbSearchQuery || '').replace(/"/g, '"') + '" oninput="onPBSearch(this.value)" placeholder="🔍 Search..." style="width:100%;padding:8px 14px;background:#0f172a;border:1px solid #334155;border-radius:99px;color:#f8fafc;font-size:0.9rem" /></div></div></div>' +
      '<div id="pbQuestionsList"></div>';
    window.renderFilteredPBQuestions();
  };

  window.renderFilteredPBQuestions = function () {
    var container = document.getElementById("pbQuestionsList");
    if (!container) return;
    var BOOK = getBook();
    if (!BOOK) { container.innerHTML = "<p style='color:#94a3b8;padding:20px'>No book data.</p>"; return; }
    var units = unitList(BOOK);
    var html = "", total = 0;
    var q = window.pbSearchQuery || "", type = window.pbCurrentType || "all";
    units.forEach(function (u) {
      if (!u) return;
      var mcqs = type === "code" ? [] : (u.mcqs || []).filter(function (item) {
        if (!q) return true;
        var opts = item.options || [];
        return String(item.question || "").toLowerCase().indexOf(q) >= 0 ||
          opts.some(function (o) { return String(o).toLowerCase().indexOf(q) >= 0; });
      });
      var coding = type === "mcq" ? [] : (u.coding || []).filter(function (item) {
        if (!q) return true;
        return String(item.question || "").toLowerCase().indexOf(q) >= 0 ||
          String(item.topic || "").toLowerCase().indexOf(q) >= 0;
      });
      if (!mcqs.length && !coding.length) return;
      total += mcqs.length + coding.length;
      html += '<div style="margin-bottom:24px;border:1px solid #334155;border-radius:16px;padding:20px">' +
        '<h3 style="color:#a5b4fc;margin-bottom:16px;font-size:1.15rem;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
        '<span>' + (u.title || ('Unit ' + u.unit)) + '</span>' +
        '<span style="font-size:0.78rem;background:#312e81;color:#c7d2fe;padding:4px 10px;border-radius:99px">' +
        mcqs.length + ' MCQ · ' + coding.length + ' Code</span></h3>';
      mcqs.forEach(function (item) {
        var sid = "sol-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        var opts = (item.options || []).map(function (o, i) {
          var letter = "ABCD"[i];
          return '<button type="button" onclick="checkPBAnswerBridge(\'' + item.id + '\',\'' + letter + '\',\'' + sid + '\')" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;cursor:pointer"><strong>' + letter + ')</strong> ' + o + '</button>';
        }).join("");
        html += '<div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:14px;margin-bottom:12px">' +
          '<div style="font-size:0.75rem;color:#818cf8;margin-bottom:6px">' + (item.id || "") + ' · Sr ' + (item.srNo || "") + '</div>' +
          '<div style="color:#f8fafc;margin-bottom:10px;white-space:pre-wrap;line-height:1.5">' + (item.question || "") + '</div>' +
          opts + '<div id="' + sid + '" style="display:none;margin-top:10px;padding:12px;border-radius:10px"></div></div>';
      });
      coding.forEach(function (item) {
        var sid = "code-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        html += '<div style="background:#020617;border:1px solid #166534;border-radius:14px;padding:14px;margin-bottom:12px">' +
          '<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:8px">' +
          '<span style="font-size:0.75rem;color:#4ade80;background:#052e16;padding:2px 8px;border-radius:6px">' + (item.id || "") + ' · ' + (item.topic || "Coding") + '</span>' +
          '<span style="font-size:0.75rem;color:#facc15">' + (item.marks || 3) + ' Marks</span></div>' +
          '<div style="color:#f8fafc;margin-bottom:10px;white-space:pre-wrap;line-height:1.5">' + (item.question || "") + '</div>' +
          '<button type="button" onclick="(function(){var e=document.getElementById(\'' + sid + '\');e.style.display=e.style.display===\'none\'?\'block\':\'none\';})()" style="background:#16a34a;color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer">💡 View Model Solution</button>' +
          '<div id="' + sid + '" style="display:none;margin-top:12px;background:#0f172a;border:1px solid #22c55e;border-radius:12px;padding:12px">' +
          '<pre style="color:#38bdf8;white-space:pre-wrap;font-size:0.85rem;margin:0">' +
          String(item.solution || "").replace(/&/g, "&").replace(/</g, "<") + '</pre></div></div>';
      });
      html += '</div>';
    });
    if (!total) html = "<p style='color:#94a3b8;text-align:center;padding:40px'>No questions for this filter.</p>";
    container.innerHTML = html;
  };

  window.checkPBAnswerBridge = function (qid, letter, sid) {
    var BOOK = getBook() || {};
    var found = null;
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
      el.innerHTML = "✅ Correct! " + found.answer + ") " + (found.correct || "");
      if (typeof addStudentPoints === "function") addStudentPoints(10);
      else if (typeof awardPoints === "function") awardPoints(10, "mcq");
    } else {
      el.style.background = "#450a0a"; el.style.border = "1px solid #ef4444"; el.style.color = "#fca5a5";
      el.innerHTML = "❌ Wrong. Correct is " + found.answer + ") " + (found.correct || "");
    }
  };

  console.log("pb-sem3-bridge loaded – SEM-I & SEM-3 separated");
})();
