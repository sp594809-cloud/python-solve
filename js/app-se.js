// ============================================================
// Software Engineering subject + Practice Book hub
// ============================================================

window.CURRENT_SUBJECT = window.CURRENT_SUBJECT || "python";

function setSubject(subject) {
  window.CURRENT_SUBJECT = subject;
  try { localStorage.setItem("ljiet_subject", subject); } catch (e) {}
  updateSubjectUI();
}

function loadSavedSubject() {
  try {
    const s = localStorage.getItem("ljiet_subject");
    if (s === "se" || s === "python") window.CURRENT_SUBJECT = s;
  } catch (e) {}
}

function updateSubjectUI() {
  const isSE = window.CURRENT_SUBJECT === "se";
  document.querySelectorAll("[data-subject-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-subject-btn") === window.CURRENT_SUBJECT;
    btn.style.opacity = active ? "1" : "0.55";
    btn.style.borderColor = active ? (btn.getAttribute("data-subject-btn") === "se" ? "#f59e0b" : "#6366f1") : "#334155";
  });
  const logoText = document.querySelector(".logo-text");
  if (logoText) logoText.textContent = isSE ? "LJIET SE Hub" : "LJIET Python Hub";
  const logoIcon = document.querySelector(".logo-icon");
  if (logoIcon) logoIcon.textContent = isSE ? "📐" : "🐍";
}

function selectPythonSubject() {
  setSubject("python");
  if (typeof openWelcomeScreen === "function") openWelcomeScreen();
  else if (typeof showWelcomeScreenFixed === "function") showWelcomeScreenFixed();
}

function selectSESubject() {
  setSubject("se");
  openSEPracticeBook();
}

function openSEPracticeBook() {
  setSubject("se");
  try {
    if (typeof showConceptScreen === "function") showConceptScreen();
    else {
      document.querySelectorAll(".screen").forEach((s) => {
        s.classList.remove("active");
        s.style.removeProperty("display");
      });
      document.getElementById("conceptScreen")?.classList.add("active");
    }
    if (typeof showStepTabs === "function") showStepTabs(false);
    else {
      const tabs = document.getElementById("stepTabs");
      const nav = document.querySelector(".step-navigation");
      if (tabs) tabs.style.display = "none";
      if (nav) nav.style.display = "none";
    }
    const numEl = document.getElementById("conceptNumber");
    const titleEl = document.getElementById("conceptTitle");
    if (numEl) numEl.textContent = "📐";
    if (titleEl) titleEl.textContent = "Software Engineering – Practice Book";
    if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
    renderSEPracticeBookHub();
  } catch (err) {
    console.error("openSEPracticeBook:", err);
  }
}

function getSEAllMcqs() {
  if (typeof SE_PRACTICE_BOOK === "undefined") return [];
  const all = [];
  Object.keys(SE_PRACTICE_BOOK).forEach((k) => {
    const u = SE_PRACTICE_BOOK[k];
    if (u && Array.isArray(u.mcqs)) {
      u.mcqs.forEach((q) => all.push(Object.assign({}, q, { unit: u.unit, unitTitle: u.title })));
    }
  });
  return all;
}

function renderSEPracticeBookHub() {
  const content = document.getElementById("stepContent");
  if (!content) return;
  if (typeof SE_PRACTICE_BOOK === "undefined") {
    content.innerHTML = "<p style='color:#ef4444;padding:20px'>SE Practice Book data not loaded. Refresh the page.</p>";
    return;
  }
  const units = Object.keys(SE_PRACTICE_BOOK).map((k) => SE_PRACTICE_BOOK[k]);
  const total = getSEAllMcqs().length;
  let html = '<div style="background:linear-gradient(135deg,#422006,#0f172a);border:1px solid #f59e0b;border-radius:16px;padding:20px;margin-bottom:20px">' +
    '<h2 style="color:#fcd34d;margin:0 0 8px;font-size:1.35rem">📐 Software Engineering Practice Book</h2>' +
    '<p style="color:#94a3b8;margin:0;font-size:0.9rem">LJIET CE Related Branches · SEM-I 2026 · <strong style="color:#fde68a">' + total + ' MCQs</strong> with answers</p>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">' +
    '<button class="btn-primary small" onclick="renderSEUnitList()">All Units</button>' +
    '<button class="btn-secondary small" onclick="renderSEAllMcqs()">Practice All MCQs</button>' +
    '<button class="btn-secondary small" onclick="selectPythonSubject()">← Back to Python</button></div></div><div style="display:grid;gap:12px">';
  units.forEach((u) => {
    const n = (u.mcqs || []).length;
    html += '<div onclick="renderSEUnit(' + u.unit + ')" style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:16px;cursor:pointer">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div>' +
      '<div style="color:#fcd34d;font-weight:700;font-size:1rem">' + u.title + '</div>' +
      '<div style="color:#94a3b8;font-size:0.85rem;margin-top:4px">' + n + ' MCQs · Unit ' + u.unit + '</div></div>' +
      '<span style="background:#78350f;color:#fde68a;padding:4px 12px;border-radius:99px;font-size:0.8rem;font-weight:700">Open →</span></div></div>';
  });
  html += '</div>';
  content.innerHTML = html;
}

function renderSEUnitList() { renderSEPracticeBookHub(); }

function renderSEUnit(unitNum) {
  const content = document.getElementById("stepContent");
  if (!content || typeof SE_PRACTICE_BOOK === "undefined") return;
  const u = SE_PRACTICE_BOOK["unit" + unitNum];
  if (!u) return;
  let html = '<div style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
    '<button class="btn-secondary small" onclick="renderSEPracticeBookHub()">← Units</button>' +
    '<h3 style="color:#fcd34d;margin:0">' + u.title + '</h3>' +
    '<span style="color:#94a3b8;font-size:0.85rem">' + (u.mcqs||[]).length + ' questions</span></div>' +
    '<div id="seQuestionsList" style="display:grid;gap:14px">';
  (u.mcqs || []).forEach((q, i) => { html += renderSEMcqCard(q, i); });
  html += '</div>';
  content.innerHTML = html;
}

function renderSEAllMcqs() {
  const content = document.getElementById("stepContent");
  if (!content) return;
  const all = getSEAllMcqs();
  let html = '<div style="margin-bottom:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
    '<button class="btn-secondary small" onclick="renderSEPracticeBookHub()">← Units</button>' +
    '<h3 style="color:#fcd34d;margin:0">All SE MCQs (' + all.length + ')</h3></div>' +
    '<div id="seQuestionsList" style="display:grid;gap:14px">';
  all.forEach((q, i) => { html += renderSEMcqCard(q, i); });
  html += '</div>';
  content.innerHTML = html;
}

function renderSEMcqCard(q, i) {
  const opts = (q.options || []).map((o, oi) => {
    const letter = String.fromCharCode(65 + oi);
    const ans = String(q.answer || "").replace(/'/g, "\\'");
    return '<button type="button" class="pb-opt-btn" data-se-q="' + q.id + '" data-se-letter="' + letter +
      '" onclick="checkSEAnswer(\'' + q.id + '\',\'' + letter + '\',\'' + ans + '\')" style="display:block;width:100%;text-align:left;margin-bottom:8px">' +
      letter + '. ' + o + '</button>';
  }).join("");
  return '<div style="background:#0f172a;border:1px solid #334155;border-radius:14px;padding:16px" id="se-card-' + q.id + '">' +
    '<div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:10px;flex-wrap:wrap">' +
    '<span style="background:#312e81;color:#c7d2fe;padding:2px 10px;border-radius:99px;font-size:0.75rem;font-weight:700">Q' + q.srNo + '</span>' +
    '<span style="color:#64748b;font-size:0.75rem">Unit ' + (q.unit || "") + '</span></div>' +
    '<p style="color:#e2e8f0;margin:0 0 12px;line-height:1.5;font-size:0.95rem">' + q.question + '</p>' +
    '<div>' + opts + '</div><div id="se-fb-' + q.id + '" style="display:none;margin-top:10px"></div>' +
    '<button type="button" class="pb-sol-btn" style="margin-top:8px" onclick="showSESolution(\'' + q.id + '\')">Show solution</button></div>';
}

window.checkSEAnswer = function (qid, letter, correctLetter) {
  const fb = document.getElementById("se-fb-" + qid);
  if (!fb) return;
  fb.style.display = "block";
  const ok = letter === correctLetter;
  document.querySelectorAll('[data-se-q="' + qid + '"]').forEach((btn) => {
    btn.disabled = true;
    const L = btn.getAttribute("data-se-letter");
    if (L === correctLetter) { btn.style.borderColor = "#22c55e"; btn.style.background = "rgba(34,197,94,0.15)"; }
    else if (L === letter && !ok) { btn.style.borderColor = "#ef4444"; btn.style.background = "rgba(239,68,68,0.15)"; }
  });
  fb.innerHTML = ok
    ? '<div style="background:rgba(34,197,94,0.15);border:1px solid #22c55e;padding:12px;border-radius:10px;color:#86efac">✅ Correct!</div>'
    : '<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;padding:12px;border-radius:10px;color:#fca5a5">❌ Wrong. Correct answer is <strong>' + correctLetter + '</strong></div>';
};

window.showSESolution = function (qid) {
  const all = getSEAllMcqs();
  const q = all.find((x) => x.id === qid);
  const fb = document.getElementById("se-fb-" + qid);
  if (!q || !fb) return;
  fb.style.display = "block";
  fb.innerHTML = '<div style="background:#1e293b;border:1px solid #475569;padding:12px;border-radius:10px;color:#e2e8f0">' +
    '<strong style="color:#fcd34d">Answer: (' + q.answer + ') ' + q.correct + '</strong>' +
    '<p style="margin:8px 0 0;color:#94a3b8;font-size:0.9rem">' + (q.explanation || "") + '</p></div>';
};

loadSavedSubject();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () { setTimeout(updateSubjectUI, 100); });
} else {
  setTimeout(updateSubjectUI, 100);
}
console.log("✅ app-se.js loaded – Software Engineering subject ready");
