// LJIET Learning Hub - App Core (restored + SEM-3)
let pbCurrentUnit = "all";
let pbCurrentType = "all";
let pbSearchQuery = "";
let pbActiveBook = "sem1";

function setPBBook(book) {
  pbActiveBook = book || "sem1";
  pbCurrentUnit = "all";
  renderPracticeBookHub();
}
function getActivePracticeBook() {
  if (pbActiveBook === "sem3" && typeof PRACTICE_BOOK_SEM3 !== "undefined") return PRACTICE_BOOK_SEM3;
  return typeof PRACTICE_BOOK !== "undefined" ? PRACTICE_BOOK : null;
}

function openSem3PracticeBook() {
  pbActiveBook = "sem3";
  openPracticeBook();
}
function openPracticeBook() {
  document.getElementById("welcomeScreen")?.classList.remove("active");
  document.getElementById("conceptScreen")?.classList.add("active");
  document.getElementById("conceptNumber").textContent = pbActiveBook === "sem3" ? "📗" : "📘";
  document.getElementById("conceptTitle").textContent =
    pbActiveBook === "sem3" ? "SEM-III Python Practice Book (FCSP-1)" : "LJIET Python Practice Book (SEM-I)";
  document.getElementById("stepTabs").style.display = "none";
  const nav = document.querySelector(".step-navigation");
  if (nav) nav.style.display = "none";
  renderPracticeBookHub();
}

function setPBUnit(u) { pbCurrentUnit = u; renderPracticeBookHub(); }
function setPBType(t) { pbCurrentType = t; renderPracticeBookHub(); }
function onPBSearch(val) { pbSearchQuery = (val||"").toLowerCase(); renderFilteredPBQuestions(); }

function renderPracticeBookHub() {
  const content = document.getElementById("stepContent");
  const BOOK = getActivePracticeBook();
  if (!BOOK) {
    content.innerHTML = "<p style='color:#ef4444;padding:20px'>Practice Book data not loaded. Hard refresh (Ctrl+Shift+R).</p>";
    return;
  }
  const isSem3 = pbActiveBook === "sem3";
  content.innerHTML = `
    <div style="background:linear-gradient(135deg,#1e1b4b,#0f172a);border:1px solid #4338ca;border-radius:16px;padding:20px;margin-bottom:24px">
      <h2 style="color:#c7d2fe;margin:0 0 12px;font-size:1.3rem">${isSem3 ? "📗 SEM-III Python Practice Book (FCSP-1)" : "📘 LJIET Python-I Practice Book (SEM-I)"}</h2>
      <p style="color:#94a3b8;margin-bottom:16px">MCQs with answers. Earn +10 points on correct answers.</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
        <button class="pb-filter-btn ${!isSem3?'active':''}" onclick="setPBBook('sem1')">📘 SEM-I</button>
        <button class="pb-filter-btn ${isSem3?'active':''}" onclick="setPBBook('sem3')" style="${isSem3?'border-color:#22c55e;color:#86efac':''}">📗 SEM-3</button>
        <span style="width:1px;background:#334155;margin:0 4px"></span>
        <button class="pb-filter-btn ${pbCurrentUnit==='all'?'active':''}" onclick="setPBUnit('all')">All</button>
        <button class="pb-filter-btn ${pbCurrentUnit==='1'?'active':''}" onclick="setPBUnit('1')">Unit 1</button>
        <button class="pb-filter-btn ${pbCurrentUnit==='2'?'active':''}" onclick="setPBUnit('2')">Unit 2</button>
        <button class="pb-filter-btn ${pbCurrentUnit==='3'?'active':''}" onclick="setPBUnit('3')">Unit 3</button>
        ${isSem3 ? `<button class="pb-filter-btn ${pbCurrentUnit==='4'?'active':''}" onclick="setPBUnit('4')">Unit 4</button>
        <button class="pb-filter-btn ${pbCurrentUnit==='5'?'active':''}" onclick="setPBUnit('5')">Unit 5</button>` : ""}
      </div>
      <input type="search" placeholder="Search questions..." oninput="onPBSearch(this.value)"
        style="width:100%;max-width:400px;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0" />
    </div>
    <div id="pbQuestionsList"></div>`;
  renderFilteredPBQuestions();
}

function renderFilteredPBQuestions() {
  const container = document.getElementById("pbQuestionsList");
  if (!container) return;
  const BOOK = getActivePracticeBook() || {};
  const units = [];
  const maxU = pbActiveBook === "sem3" ? 5 : 3;
  for (let u = 1; u <= maxU; u++) {
    if (pbCurrentUnit === "all" || pbCurrentUnit === String(u)) {
      if (BOOK["unit"+u]) units.push(BOOK["unit"+u]);
    }
  }
  let html = "";
  let total = 0;
  units.forEach(function(u) {
    if (!u || !u.mcqs) return;
    const mcqs = u.mcqs.filter(function(q) {
      if (!pbSearchQuery) return true;
      return (q.question||"").toLowerCase().includes(pbSearchQuery) ||
        (q.options||[]).some(function(o){ return String(o).toLowerCase().includes(pbSearchQuery); });
    });
    if (!mcqs.length) return;
    total += mcqs.length;
    html += `<div style="margin-bottom:24px;border:1px solid #334155;border-radius:16px;padding:16px">
      <h3 style="color:#a5b4fc;margin-bottom:12px">${u.title||("Unit "+u.unit)} <span style="font-size:0.8rem;background:#312e81;color:#c7d2fe;padding:2px 8px;border-radius:99px">${mcqs.length} Qs</span></h3>`;
    mcqs.forEach(function(q) {
      const sid = "sol-" + (q.id||"").replace(/[^a-zA-Z0-9]/g,"_");
      const opts = (q.options||[]).map(function(o,i) {
        const letter = "ABCD"[i];
        return `<button onclick="checkPBAnswer('${q.id}','${letter}','${sid}')" class="pb-opt-btn" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;cursor:pointer">
          <strong>${letter})</strong> ${o}</button>`;
      }).join("");
      html += `<div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:14px;margin-bottom:12px">
        <div style="font-size:0.75rem;color:#818cf8;margin-bottom:6px">${q.id||""} · Sr ${q.srNo||""}</div>
        <div style="color:#f8fafc;margin-bottom:10px;white-space:pre-wrap;line-height:1.5">${q.question||""}</div>
        ${opts}
        <div id="${sid}" style="display:none;margin-top:10px;padding:12px;border-radius:10px;background:#052e16;border:1px solid #22c55e;color:#86efac"></div>
      </div>`;
    });
    html += "</div>";
  });
  if (!total) html = "<p style='color:#94a3b8;text-align:center;padding:40px'>No questions found. Open SEM-3 or SEM-I and pick a unit.</p>";
  container.innerHTML = html;
}

function checkPBAnswer(qid, letter, sid) {
  const BOOK = getActivePracticeBook() || {};
  let found = null;
  Object.keys(BOOK).forEach(function(k) {
    (BOOK[k].mcqs||[]).forEach(function(q){ if(q.id===qid) found=q; });
  });
  const el = document.getElementById(sid);
  if (!el || !found) return;
  el.style.display = "block";
  if (letter === found.answer) {
    el.style.background = "#052e16";
    el.style.borderColor = "#22c55e";
    el.innerHTML = "✅ Correct! " + found.answer + ") " + (found.correct||"");
    if (typeof awardPoints === "function") awardPoints(10, "mcq");
    else if (typeof addStudentPoints === "function") addStudentPoints(10);
  } else {
    el.style.background = "#450a0a";
    el.style.borderColor = "#ef4444";
    el.innerHTML = "❌ Wrong. Correct is " + found.answer + ") " + (found.correct||"");
  }
}

function selectPythonSubject() { openPracticeBook(); }
function selectSESubject() { if (typeof openSEPracticeBook === "function") openSEPracticeBook(); }
function openLearningPathNav() { openWelcomeScreen(); }
function handleInstallClick() { alert("Use browser menu → Install app / Add to Home Screen"); }

console.log("LJIET app core loaded (SEM-I + SEM-3 PB)");
