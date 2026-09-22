/** SEM-3 ONLY — never shows SEM-1 MCQs */
(function () {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getSem3Book() {
    if (typeof PRACTICE_BOOK_SEM3 === "undefined" || !PRACTICE_BOOK_SEM3) return null;
    return PRACTICE_BOOK_SEM3;
  }

  function countSem3() {
    var B = getSem3Book();
    if (!B) return 0;
    var n = 0;
    Object.keys(B).forEach(function (k) {
      if (B[k] && B[k].mcqs) n += B[k].mcqs.length;
    });
    return n;
  }

  function showShell() {
    var w = document.getElementById("welcomeScreen");
    var c = document.getElementById("conceptScreen");
    if (w) { w.classList.remove("active"); w.style.removeProperty("display"); }
    if (c) { c.classList.add("active"); c.style.display = "block"; }
    var num = document.getElementById("conceptNumber");
    var title = document.getElementById("conceptTitle");
    if (num) num.textContent = "📗";
    if (title) title.textContent = "SEM-III Python Practice Book (FCSP-1)";
    var tabs = document.getElementById("stepTabs"); if (tabs) tabs.style.display = "none";
    var nav = document.querySelector(".step-navigation"); if (nav) nav.style.display = "none";
    if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
  }

  function renderSem3Only(unitFilter) {
    unitFilter = unitFilter || "all";
    window.pbActiveBook = "sem3";
    showShell();
    var content = document.getElementById("stepContent");
    if (!content) return;

    var B = getSem3Book();
    var total = countSem3();
    if (!B || total === 0) {
      content.innerHTML =
        '<div style="padding:24px;background:#fef2f2;border-radius:16px;border:1px solid #fecaca">' +
        "<h2>📗 SEM-3 data not loaded</h2>" +
        "<p>Hard refresh (Ctrl+Shift+R). Expected PRACTICE_BOOK_SEM3 with S3- ids.</p></div>";
      return;
    }

    var unitKeys =
      unitFilter === "all"
        ? Object.keys(B).filter(function (k) { return B[k] && B[k].mcqs; })
        : ["unit" + unitFilter];

    var unitBtns = "";
    unitBtns +=
      '<button type="button" class="pb-filter-btn' +
      (unitFilter === "all" ? " active" : "") +
      '" data-u="all">All Units</button> ';
    for (var u = 1; u <= 5; u++) {
      unitBtns +=
        '<button type="button" class="pb-filter-btn' +
        (unitFilter === String(u) ? " active" : "") +
        '" data-u="' +
        u +
        '">Unit ' +
        u +
        "</button> ";
    }

    var html =
      '<div style="background:linear-gradient(135deg,#14532d,#0f172a);border:1px solid #22c55e;border-radius:16px;padding:20px;margin-bottom:20px">' +
      '<h2 style="color:#86efac;margin:0 0 8px">📗 SEM-III Practice Book (FCSP-1)</h2>' +
      '<p style="color:#94a3b8;margin:0">SEM-3 only — not SEM-I. ' +
      total +
      " MCQs · question ids start with <strong style=\"color:#86efac\">S3-</strong></p>" +
      '<div style="margin-top:14px;display:flex;flex-wrap:wrap;gap:6px" id="sem3UnitFilters">' +
      unitBtns +
      "</div></div><div id=\"sem3McqList\">";

    unitKeys.forEach(function (k) {
      var unit = B[k];
      if (!unit || !unit.mcqs || !unit.mcqs.length) return;
      html +=
        '<div style="margin-bottom:20px;border:1px solid #334155;border-radius:14px;padding:16px;background:#0f172a">' +
        '<h3 style="color:#86efac;margin:0 0 12px">' +
        escapeHtml(unit.title || k) +
        " · " +
        unit.mcqs.length +
        " MCQs</h3>";

      unit.mcqs.forEach(function (item) {
        var sid = "s3sol-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        var opts = (item.options || [])
          .map(function (o, i) {
            var letter = "ABCD"[i];
            return (
              '<button type="button" class="s3-opt" data-qid="' +
              escapeHtml(item.id) +
              '" data-letter="' +
              letter +
              '" data-sid="' +
              sid +
              '" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;cursor:pointer"><strong>' +
              letter +
              ")</strong> " +
              escapeHtml(o) +
              "</button>"
            );
          })
          .join("");

        html +=
          '<div style="background:#020617;border:1px solid #1e293b;border-radius:12px;padding:12px;margin-bottom:10px">' +
          '<div style="font-size:0.75rem;color:#4ade80">' +
          escapeHtml(item.id || "") +
          " · Sr " +
          (item.srNo || "") +
          "</div>" +
          '<div style="color:#f8fafc;margin:8px 0;white-space:pre-wrap">' +
          escapeHtml(item.question || "") +
          "</div>" +
          opts +
          '<div id="' +
          sid +
          '" style="display:none;margin-top:8px;padding:10px;border-radius:8px"></div></div>';
      });

      (unit.coding || []).forEach(function (item) {
        var cid = "s3code-" + String(item.id || "").replace(/[^a-zA-Z0-9]/g, "_");
        html +=
          '<div style="background:#052e16;border:1px solid #166534;border-radius:12px;padding:12px;margin-bottom:10px">' +
          '<div style="color:#4ade80;font-size:0.75rem">' +
          escapeHtml(item.id || "") +
          " · " +
          escapeHtml(item.topic || "Code") +
          "</div>" +
          '<div style="color:#f8fafc;margin:8px 0;white-space:pre-wrap">' +
          escapeHtml(item.question || "") +
          "</div>" +
          '<button type="button" onclick="(function(){var e=document.getElementById(\'' +
          cid +
          '\');e.style.display=e.style.display===\'none\'?\'block\':\'none\';})()" style="background:#16a34a;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer">View Solution</button>' +
          '<pre id="' +
          cid +
          '" style="display:none;color:#38bdf8;white-space:pre-wrap;margin-top:10px">' +
          escapeHtml(item.solution || "") +
          "</pre></div>";
      });

      html += "</div>";
    });

    html += "</div>";
    content.innerHTML = html;

    var filters = document.getElementById("sem3UnitFilters");
    if (filters) {
      filters.querySelectorAll("button[data-u]").forEach(function (btn) {
        btn.onclick = function () {
          renderSem3Only(btn.getAttribute("data-u"));
        };
      });
    }

    content.querySelectorAll(".s3-opt").forEach(function (btn) {
      btn.onclick = function () {
        var qid = btn.getAttribute("data-qid");
        var letter = btn.getAttribute("data-letter");
        var sid = btn.getAttribute("data-sid");
        var found = null;
        var book = getSem3Book() || {};
        Object.keys(book).forEach(function (k) {
          (book[k].mcqs || []).forEach(function (item) {
            if (item.id === qid) found = item;
          });
        });
        var el = document.getElementById(sid);
        if (!el || !found) return;
        el.style.display = "block";
        if (letter === found.answer) {
          el.style.background = "#052e16";
          el.style.color = "#86efac";
          el.innerHTML =
            "✅ Correct! " + found.answer + ") " + escapeHtml(found.correct || "");
          if (typeof addStudentPoints === "function") addStudentPoints(10);
        } else {
          el.style.background = "#450a0a";
          el.style.color = "#fca5a5";
          el.innerHTML =
            "❌ Wrong. Correct is " + found.answer + ") " + escapeHtml(found.correct || "");
        }
      };
    });
  }

  function openSem3() {
    window.pbActiveBook = "sem3";
    renderSem3Only("all");
  }

  window.openSem3PracticeBook = openSem3;

  window.addEventListener("load", function () {
    setTimeout(function () {
      window.openSem3PracticeBook = openSem3;
      console.log("SEM-3 locked. MCQ count:", countSem3());
    }, 500);
    setTimeout(function () {
      window.openSem3PracticeBook = openSem3;
    }, 1500);
  });

  console.log("sem3-open.js loaded");
})();
