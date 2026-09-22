/** Modern Quiz Mode + HTML-safe options */
(function () {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  var QZ = { pool: [], answers: {}, index: 0, startedAt: 0, timerId: null, timeLimitSec: 900, remaining: 900, bookLabel: "", unitLabel: "", reviewMode: false };

  function ensureSession() {
    try {
      if (typeof initSupabase === "function") initSupabase();
      if (typeof initStudentSession === "function") initStudentSession();
    } catch (e) {}
  }

  function getUnitsForBook(book) {
    if (book === "sem3" && typeof PRACTICE_BOOK_SEM3 !== "undefined") return PRACTICE_BOOK_SEM3;
    if (book === "se" && typeof SE_PRACTICE_BOOK !== "undefined") return SE_PRACTICE_BOOK;
    if (typeof PRACTICE_BOOK !== "undefined") return PRACTICE_BOOK;
    return null;
  }

  function collectMcqs(book, unitKey) {
    var B = getUnitsForBook(book);
    if (!B) return [];
    var list = [];
    var keys = unitKey === "all" ? Object.keys(B) : ["unit" + unitKey];
    keys.forEach(function (k) {
      if (B[k] && B[k].mcqs) {
        B[k].mcqs.forEach(function (q) {
          if (q && q.options && q.options.length >= 2) list.push(Object.assign({ _unit: k }, q));
        });
      }
    });
    return list;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function stopTimer() { if (QZ.timerId) clearInterval(QZ.timerId); QZ.timerId = null; }

  function startTimer() {
    stopTimer();
    QZ.timerId = setInterval(function () {
      QZ.remaining--;
      var el = document.getElementById("qzTimerText");
      if (el) el.textContent = fmtTime(QZ.remaining);
      if (QZ.remaining <= 0) { stopTimer(); finishQuiz(); }
    }, 1000);
  }

  window.openQuizMode = function (opts) {
    ensureSession();
    opts = opts || {};
    var book = opts.book || (window.pbActiveBook === "sem3" ? "sem3" : "sem1");
    var unit = opts.unit || "all";
    var count = opts.count || 10;
    var minutes = opts.minutes || 15;
    var pool = collectMcqs(book, unit);
    if (!pool.length) { alert("No MCQs available for this quiz"); return; }
    pool = shuffle(pool).slice(0, Math.min(count, pool.length));
    QZ.pool = pool; QZ.answers = {}; QZ.index = 0;
    QZ.timeLimitSec = minutes * 60; QZ.remaining = minutes * 60;
    QZ.bookLabel = book === "sem3" ? "Python SEM-3" : book === "se" ? "Software Engineering" : "Python SEM-I";
    QZ.unitLabel = unit === "all" ? "All Units" : "Unit " + unit;
    QZ.reviewMode = false;
    showStartScreen(minutes);
  };

  function showInConcept() {
    var w = document.getElementById("welcomeScreen");
    var c = document.getElementById("conceptScreen");
    if (w) { w.classList.remove("active"); w.style.removeProperty("display"); }
    if (c) { c.classList.add("active"); c.style.display = "block"; }
    var tabs = document.getElementById("stepTabs"); if (tabs) tabs.style.display = "none";
    var nav = document.querySelector(".step-navigation"); if (nav) nav.style.display = "none";
    var num = document.getElementById("conceptNumber"); if (num) num.textContent = "📝";
    var title = document.getElementById("conceptTitle"); if (title) title.textContent = "Quiz Mode";
  }

  function showStartScreen(minutes) {
    showInConcept();
    var content = document.getElementById("stepContent");
    if (!content) return;
    content.innerHTML =
      '<div class="qz-screen"><div class="qz-topbar">' +
      '<button type="button" class="qz-back" onclick="typeof openWelcomeScreen===\'function\'&&openWelcomeScreen()">‹</button>' +
      '<div class="qz-title">Start Quiz</div><div style="width:40px"></div></div>' +
      '<p style="color:#94a3b8;font-size:0.9rem;margin-bottom:14px">Put your understanding to test by answering a few MCQs.</p>' +
      '<div class="qz-hero"><h2>' + escapeHtml(QZ.unitLabel) + '</h2><div class="qz-meta">Subject: ' + escapeHtml(QZ.bookLabel) + '<br>Chapter: ' + escapeHtml(QZ.unitLabel) + '</div></div>' +
      '<div class="qz-stats-row"><span><strong>Total Questions:</strong> ' + String(QZ.pool.length).padStart(2,"0") + '</span></div>' +
      '<div class="qz-stats-row"><span><strong>Total Time:</strong> ' + minutes + ' min</span></div>' +
      '<div class="qz-instructions"><strong style="color:#cbd5e1">Instructions:</strong><br>Use Next / Previous to move. Submit when done. Each correct answer earns +10 points.</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:8px">' +
      '<span class="qz-timer">⏱ ' + fmtTime(minutes * 60) + '</span>' +
      '<button type="button" class="qz-primary" style="width:auto;min-width:140px" onclick="quizModeBegin()">Start Quiz</button></div></div>';
  }

  window.quizModeBegin = function () {
    QZ.startedAt = Date.now(); QZ.remaining = QZ.timeLimitSec; QZ.index = 0; QZ.answers = {}; QZ.reviewMode = false;
    startTimer(); renderQuestion();
  };

  function renderQuestion() {
    showInConcept();
    var content = document.getElementById("stepContent");
    if (!content || !QZ.pool.length) return;
    var q = QZ.pool[QZ.index];
    var pct = ((QZ.index + 1) / QZ.pool.length) * 100;
    var selected = QZ.answers[q.id] || "";
    var opts = (q.options || []).map(function (o, i) {
      var letter = "ABCD"[i];
      var cls = "qz-option" + (selected === letter ? " selected" : "");
      if (QZ.reviewMode) {
        if (letter === q.answer) cls += " correct";
        else if (selected === letter && letter !== q.answer) cls += " wrong";
      }
      return '<button type="button" class="' + cls + '" onclick="quizSelectOption(\'' + q.id + '\',\'' + letter + '\')"><strong>' + letter + '.</strong> ' + escapeHtml(o) + '</button>';
    }).join("");
    content.innerHTML =
      '<div class="qz-screen"><div class="qz-topbar">' +
      '<button type="button" class="qz-back" onclick="quizModeExit()">‹</button><div class="qz-title">Quiz</div>' +
      (QZ.reviewMode ? '<div></div>' : '<button type="button" class="qz-submit-btn" onclick="quizModeSubmit()">Submit</button>') +
      '</div><div class="qz-card" style="padding:12px 14px"><div style="font-weight:700;color:#f8fafc">' + escapeHtml(QZ.unitLabel) +
      '</div><div class="qz-meta">' + escapeHtml(QZ.bookLabel) + ' · <span class="qz-timer">⏱ <span id="qzTimerText">' + fmtTime(QZ.remaining) +
      '</span></span></div><div class="qz-progress-wrap"><div class="qz-progress-fill" style="width:' + pct + '%"></div></div></div>' +
      '<div class="qz-qnum">Q.' + (QZ.index + 1) + '/' + QZ.pool.length + '</div>' +
      '<div class="qz-question">' + escapeHtml(q.question || '') + '</div>' + opts +
      '<div class="qz-nav"><button type="button" class="qz-btn-ghost" onclick="quizPrev()"' + (QZ.index === 0 ? ' disabled' : '') +
      '>Previous</button><button type="button" class="qz-btn-next" onclick="quizNext()">' +
      (QZ.index >= QZ.pool.length - 1 ? (QZ.reviewMode ? 'Finish' : 'Submit') : 'Next') + '</button></div></div>';
  }

  window.quizSelectOption = function (qid, letter) {
    if (QZ.reviewMode) return;
    QZ.answers[qid] = letter;
    renderQuestion();
  };
  window.quizPrev = function () { if (QZ.index > 0) { QZ.index--; renderQuestion(); } };
  window.quizNext = function () {
    if (QZ.index < QZ.pool.length - 1) { QZ.index++; renderQuestion(); }
    else if (!QZ.reviewMode) quizModeSubmit();
    else finishQuiz();
  };
  window.quizModeSubmit = function () { if (!confirm('Submit quiz now?')) return; finishQuiz(); };

  function finishQuiz() {
    stopTimer();
    var correct = 0, wrong = 0;
    QZ.pool.forEach(function (q) {
      var a = QZ.answers[q.id];
      if (a && a === q.answer) correct++; else wrong++;
    });
    var total = QZ.pool.length;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var elapsed = Math.floor((Date.now() - QZ.startedAt) / 1000);
    if (elapsed < 0) elapsed = QZ.timeLimitSec - QZ.remaining;
    var avg = total ? Math.round(elapsed / total) : 0;
    var passed = pct >= 40;
    if (!QZ.reviewMode && correct > 0 && typeof addStudentPoints === 'function') {
      for (var i = 0; i < correct; i++) addStudentPoints(10, 'mcq');
    }
    try {
      localStorage.setItem('ljiet_last_quiz', JSON.stringify({ book: QZ.bookLabel, unit: QZ.unitLabel, correct: correct, total: total, pct: pct, at: Date.now() }));
    } catch (e) {}
    showInConcept();
    var content = document.getElementById('stepContent');
    if (!content) return;
    content.innerHTML =
      '<div class="qz-screen"><div class="qz-topbar">' +
      '<button type="button" class="qz-back" onclick="quizModeExit()">‹</button><div class="qz-title">Quiz Result</div><div style="width:40px"></div></div>' +
      '<div class="qz-card"><div style="font-weight:700">' + escapeHtml(QZ.unitLabel) + '</div><div class="qz-meta">' + escapeHtml(QZ.bookLabel) + '</div></div>' +
      '<div class="qz-score-ring" style="--pct:' + pct + '%"><div class="qz-score-inner"><strong>' + correct + '/' + total + '</strong><span>your score</span></div></div>' +
      '<p style="text-align:center;margin:8px 0 16px;color:#cbd5e1">' +
      (passed ? 'Congratulations! You have <span style="color:#4ade80;font-weight:700">passed</span> this test with ' + pct + '%.' :
        'Keep practicing. You scored <span style="color:#facc15;font-weight:700">' + pct + '%</span>.') +
      '</p><div class="qz-result-grid">' +
      '<div class="qz-stat ok"><strong>' + correct + '</strong><span>Correct Answers</span></div>' +
      '<div class="qz-stat bad"><strong>' + wrong + '</strong><span>Wrong Answers</span></div>' +
      '<div class="qz-stat time"><strong>' + fmtTime(elapsed) + '</strong><span>Total Time</span></div>' +
      '<div class="qz-stat avg"><strong>' + avg + 's</strong><span>Avg. Time / Answer</span></div></div>' +
      '<button type="button" class="qz-secondary" onclick="quizCheckAnswers()">Check Answers</button>' +
      '<button type="button" class="qz-outline" onclick="quizTryAgain()">↻ Try Quiz Again</button>' +
      '<button type="button" class="qz-btn-ghost" style="width:100%;margin-top:8px;padding:12px;border-radius:14px" onclick="quizModeExit()">Back to Home</button></div>';
  }

  window.quizCheckAnswers = function () { QZ.reviewMode = true; QZ.index = 0; renderQuestion(); };
  window.quizTryAgain = function () {
    QZ.answers = {}; QZ.index = 0; QZ.reviewMode = false; QZ.remaining = QZ.timeLimitSec; QZ.startedAt = Date.now();
    startTimer(); renderQuestion();
  };
  window.quizModeExit = function () { stopTimer(); if (typeof openWelcomeScreen === 'function') openWelcomeScreen(); };
  window.startUnitQuiz = function (book, unit, count) {
    openQuizMode({ book: book || 'sem1', unit: unit || 'all', count: count || 10, minutes: 15 });
  };

  document.addEventListener('DOMContentLoaded', ensureSession);
  console.log('quiz-mode.js loaded');
})();
