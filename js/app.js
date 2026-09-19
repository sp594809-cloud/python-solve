// LJIET Learning Hub - App Core (SEM-I + SEM-3 MCQ & Coding)
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
      <p style="color:#94a3b8;margin-bottom:16px">MCQs (+10 pts) and coding problems with model solutions.</p>
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
      <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">
        <button class="pb-filter-btn ${pbCurrentType==='all'?'active':''}" onclick="setPBType('all')">All</button>
        <button class="pb-filter-btn ${pbCurrentType==='mcq'?'active':''}" onclick="setPBType('mcq')">MCQ only</button>
        <button class="pb-filter-btn ${pbCurrentType==='code'?'active':''}" onclick="setPBType('code')">Code only</button>
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
    const mcqs = (pbCurrentType === "code" ? [] : (u.mcqs||[])).filter(function(q) {
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
        return `<button onclick="checkPBAnswer('${q.id}','${letter}','${sid}')" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 14px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;cursor:pointer"><strong>${letter})</strong> ${o}</button>`;
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
  units.forEach(function(u) {
    if (!u || !u.coding || !u.coding.length) return;
    if (pbCurrentType === "mcq") return;
    const codes = u.coding.filter(function(q) {
      if (!pbSearchQuery) return true;
      return (q.question||"").toLowerCase().includes(pbSearchQuery) || (q.topic||"").toLowerCase().includes(pbSearchQuery);
    });
    if (!codes.length) return;
    total += codes.length;
    html += `<div style="margin-bottom:24px;border:1px solid #166534;border-radius:16px;padding:16px">
      <h3 style="color:#86efac;margin-bottom:12px">${u.title||("Unit "+u.unit)} — Coding <span style="font-size:0.8rem;background:#052e16;color:#86efac;padding:2px 8px;border-radius:99px">${codes.length} problems</span></h3>`;
    codes.forEach(function(q) {
      const sid = "code-sol-" + (q.id||"").replace(/[^a-zA-Z0-9]/g,"_");
      html += `<div style="background:#020617;border:1px solid #166534;border-radius:14px;padding:14px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:8px">
          <span style="font-size:0.75rem;color:#4ade80;background:#052e16;padding:2px 8px;border-radius:6px">${q.id||""} · ${q.topic||"Coding"}</span>
          <span style="font-size:0.75rem;color:#facc15;background:#713f1244;padding:2px 8px;border-radius:6px">${q.marks||3} Marks</span>
        </div>
        <div style="color:#f8fafc;margin-bottom:10px;white-space:pre-wrap;line-height:1.5">${q.question||""}</div>
        <button onclick="(function(){var e=document.getElementById('${sid}');e.style.display=e.style.display==='none'?'block':'none';})()" style="background:#16a34a;color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer">💡 View Model Solution</button>
        <div id="${sid}" style="display:none;margin-top:12px;background:#0f172a;border:1px solid #22c55e;border-radius:12px;padding:12px">
          <div style="color:#4ade80;font-weight:700;margin-bottom:6px">Solution</div>
          <pre style="background:#020617;color:#38bdf8;padding:12px;border-radius:8px;overflow-x:auto;font-size:0.85rem;white-space:pre-wrap">${String(q.solution||"").replace(/&/g,"&").replace(/</g,"<")}</pre>
        </div>
      </div>`;
    });
    html += "</div>";
  });
  if (!total) html = "<p style='color:#94a3b8;text-align:center;padding:40px'>No questions found.</p>";
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
    el.style.background = "#052e16"; el.style.borderColor = "#22c55e";
    el.innerHTML = "✅ Correct! " + found.answer + ") " + (found.correct||"");
    if (typeof awardPoints === "function") awardPoints(10, "mcq");
  } else {
    el.style.background = "#450a0a"; el.style.borderColor = "#ef4444";
    el.innerHTML = "❌ Wrong. Correct is " + found.answer + ") " + (found.correct||"");
  }
}

function selectPythonSubject() { openPracticeBook(); }
function selectSESubject() { if (typeof openSEPracticeBook === "function") openSEPracticeBook(); }
function openLearningPathNav() { openWelcomeScreen(); }
function handleInstallClick() { alert("Use browser menu → Install app"); }
console.log("LJIET app core loaded (SEM-I + SEM-3 MCQ & Coding)");
