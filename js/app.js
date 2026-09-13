// ============================================================
// MAIN APPLICATION CONTROLLER
// Philosophy: Human Thinking → Code
// Fixes for: completeness, unified path, daily habit, boss power,
// practice addiction, progress, outcome promise
// ============================================================

let currentConceptIndex = 0;
let currentStep = "why";
const STEPS = ["why", "see", "play", "predict", "code", "break", "apply", "master"];
const STORAGE_KEY = "python_fun_progress_v2";

// ---------- PROGRESS SYSTEM ----------
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      completed: {},
      skills: {},
      xp: 0,
      streak: 0,
      lastVisit: null,
      dailyDone: null
    };
  } catch {
    return { completed: {}, skills: {}, xp: 0, streak: 0, lastVisit: null, dailyDone: null };
  }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  updateProgressUI();
}

function markConceptComplete(conceptId) {
  const p = loadProgress();
  p.completed[conceptId] = true;
  p.xp = (p.xp || 0) + 50;
  saveProgress(p);
  showToast("🎉 Concept completed! +50 XP");
}

function updateStreak() {
  const p = loadProgress();
  const today = new Date().toDateString();
  if (p.lastVisit !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (p.lastVisit === yesterday.toDateString()) {
      p.streak = (p.streak || 0) + 1;
    } else if (p.lastVisit !== today) {
      p.streak = 1;
    }
    p.lastVisit = today;
    saveProgress(p);
  }
  return p.streak || 0;
}

function getCompletionPercent() {
  const p = loadProgress();
  const total = CONCEPTS.length;
  const done = Object.keys(p.completed || {}).length;
  return total ? Math.round((done / total) * 100) : 0;
}

function updateProgressUI() {
  const pct = getCompletionPercent();
  const fill = document.getElementById("overallProgress");
  const text = document.getElementById("progressText");
  const wFill = document.getElementById("welcomeProgress");
  const wText = document.getElementById("welcomeProgressText");
  if (fill) fill.style.width = pct + "%";
  if (text) text.textContent = pct + "% Mastered";
  if (wFill) wFill.style.width = pct + "%";
  if (wText) wText.textContent = pct + "% mastered";

  // Unlock Phase 2 visually at 80%
  if (pct >= 80) {
    document.querySelectorAll(".phase-header.phase2").forEach(el => {
      el.style.color = "#22c55e";
      el.textContent = "PHASE 2 • Bridge (Unlocked)";
    });
    document.querySelectorAll(".concept-list.locked").forEach(el => {
      el.classList.remove("locked");
      el.innerHTML = `<li onclick="showToast('Phase 2 coming: small projects combining all skills')">🚀 Start Bridge Projects</li>`;
    });
  }
}


function getDailyMission() {
  const missions = [
    { text: "Complete the Variables concept + 3 Practice Book questions", action: () => openConcept(0) },
    { text: "Finish Lists concept and try the Marks Analyzer Boss", action: () => openConcept(2) },
    { text: "Practice If/Else + solve 5 Practice Book decision questions", action: () => openConcept(3) },
    { text: "Play Forest of Loops adventure (at least until Code step)", action: () => location.href = "loops-adventure.html" },
    { text: "Complete Functions + Mini Calculator Boss", action: () => openConcept(5) },
    { text: "Open Practice Book and solve 8 MCQs without hints", action: () => openPracticeBook() },
    { text: "Do While Loops + Guess the Number Boss", action: () => openConcept(7) }
  ];
  const dayIndex = new Date().getDate() % missions.length;
  return missions[dayIndex];
}

function setupDailyMission() {
  const m = getDailyMission();
  const streak = updateStreak();
  const el = document.getElementById("dailyMissionText");
  const st = document.getElementById("streakText");
  if (el) el.textContent = m.text;
  if (st) st.textContent = streak > 0 ? `🔥 Streak: ${streak} day${streak > 1 ? "s" : ""}` : "Start your streak today!";
}

function openDailyMission() {
  const m = getDailyMission();
  showToast("🎯 " + m.text);
  m.action();
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  buildSidebar();
  initPyodide();
  updateProgressUI();
  setupDailyMission();
  showToast("Welcome back! Your progress is saved.");
});

function buildSidebar() {
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const p = loadProgress();

  const thinkLi = document.createElement("li");
  thinkLi.innerHTML = `🧠 Think Lab`;
  thinkLi.onclick = () => openThinkLab();
  list.appendChild(thinkLi);

  CONCEPTS.forEach((c, i) => {
    const li = document.createElement("li");
    const done = p.completed && p.completed[c.id];
    li.innerHTML = `${done ? "✅ " : ""}${c.number}  ${c.title.split("–")[0].trim()}`;
    li.dataset.index = i;
    li.onclick = () => openConcept(i);
    if (i === 0) li.classList.add("active");
    if (done) li.classList.add("completed");
    list.appendChild(li);
  });
}

function startLearning() {
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("conceptScreen").classList.add("active");
  // Resume from first incomplete concept
  const p = loadProgress();
  let startIdx = 0;
  for (let i = 0; i < CONCEPTS.length; i++) {
    if (!p.completed[CONCEPTS[i].id]) { startIdx = i; break; }
    startIdx = i;
  }
  openConcept(startIdx);
}


function openConcept(index) {
  currentConceptIndex = index;
  currentStep = "why";

  // update sidebar
  document.querySelectorAll(".concept-list li").forEach((li) => li.classList.remove("active"));
  const items = document.querySelectorAll(".concept-list li");
  if (items[index + 1]) items[index + 1].classList.add("active"); // +1 because Think Lab is first

  const concept = CONCEPTS[index];
  document.getElementById("conceptNumber").textContent = concept.number;
  document.getElementById("conceptTitle").textContent = concept.title;

  // reset tabs
  document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
  document.querySelector(`.step-tab[data-step="why"]`).classList.add("active");

  renderStep();
  updateStepIndicator();
}

// ---------- STEP TABS ----------
document.querySelectorAll(".step-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    currentStep = tab.dataset.step;
    document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderStep();
    updateStepIndicator();
  });
});

function updateStepIndicator() {
  const idx = STEPS.indexOf(currentStep) + 1;
  document.getElementById("stepIndicator").textContent = `${idx} / ${STEPS.length}`;
}

function nextStep() {
  const idx = STEPS.indexOf(currentStep);
  if (idx < STEPS.length - 1) {
    currentStep = STEPS[idx + 1];
    document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
    document.querySelector(`.step-tab[data-step="${currentStep}"]`).classList.add("active");
    renderStep();
    updateStepIndicator();
  } else {
    // go to next concept
    if (currentConceptIndex < CONCEPTS.length - 1) {
      openConcept(currentConceptIndex + 1);
      showToast("🎉 Concept completed! Moving to next...");
    } else {
      showToast("🏆 You finished all Phase 1 concepts! Amazing!");
    }
  }
}

function prevStep() {
  const idx = STEPS.indexOf(currentStep);
  if (idx > 0) {
    currentStep = STEPS[idx - 1];
    document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
    document.querySelector(`.step-tab[data-step="${currentStep}"]`).classList.add("active");
    renderStep();
    updateStepIndicator();
  }
}

// ---------- RENDER CURRENT STEP ----------
function renderStep() {
  const concept = CONCEPTS[currentConceptIndex];
  const content = document.getElementById("stepContent");
  content.innerHTML = "";

  switch (currentStep) {
    case "why":
      renderWhy(content, concept);
      break;
    case "see":
      renderSee(content, concept);
      break;
    case "play":
      renderPlay(content, concept);
      break;
    case "predict":
      renderPredict(content, concept);
      break;
    case "code":
      renderCode(content, concept);
      break;
    case "break":
      renderBreak(content, concept);
      break;
    case "apply":
      renderApply(content, concept);
      break;
    case "master":
      renderMaster(content, concept);
      break;
  }
}

function renderWhy(container, concept) {
  const w = concept.why;
  const rich = concept.rich_explanation
    ? `<div style="background:#0f172a;border-radius:14px;padding:20px;margin-bottom:20px;border:1px solid #334155;white-space:pre-line;line-height:1.7">${concept.rich_explanation.trim()}</div>`
    : "";

  const keys = concept.key_points
    ? `<div style="margin:16px 0">
        <h4 style="color:#a5b4fc;margin-bottom:10px">📌 Key Points</h4>
        <ul style="padding-left:20px;line-height:1.8">
          ${concept.key_points.map(k => `<li>${k}</li>`).join("")}
        </ul>
      </div>`
    : "";

  container.innerHTML = `
    <div class="why-box">
      <h3>🧠 Why does this concept exist?</h3>
      <p style="font-size:1.15rem;line-height:1.6">${w.problem}</p>
    </div>
    ${rich}
    ${keys}
    <div class="question-box">
      <strong>Think first:</strong>
      <p class="think-question">${w.question}</p>
      <ul class="option-list" id="whyOptions">
        ${w.options.map((opt, i) => `<li data-index="${i}" onclick="selectWhyOption(${i})">${opt}</li>`).join("")}
      </ul>
    </div>
    <div id="whyFeedback" style="margin-top:16px;display:none"></div>
  `;
  window._whyCorrect = w.correct;
  window._whyInsight = w.insight;
}


window.selectWhyOption = function (index) {
  const items = document.querySelectorAll("#whyOptions li");
  items.forEach((li) => li.classList.remove("selected", "correct", "wrong"));
  items[index].classList.add("selected");

  const feedback = document.getElementById("whyFeedback");
  feedback.style.display = "block";

  if (index === window._whyCorrect) {
    items[index].classList.add("correct");
    feedback.innerHTML = `<div style="background:rgba(34,197,94,0.15);border:1px solid #22c55e;padding:16px;border-radius:12px">
      ✅ Correct!<br><strong>${window._whyInsight}</strong>
    </div>`;
  } else {
    items[index].classList.add("wrong");
    feedback.innerHTML = `<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;padding:16px;border-radius:12px">
      Not quite. Try again — think about what the computer really needs.
    </div>`;
  }
};

function renderSee(container, concept) {
  const m = concept.mental_model;
  container.innerHTML = `
    <h3 style="margin-bottom:12px">👀 ${m.title}</h3>
    <p style="font-size:1.1rem;line-height:1.6;margin-bottom:24px">${m.description}</p>
    <div id="mentalVisual"></div>
  `;
  // show a simple static version of the visual
  const visual = document.getElementById("mentalVisual");
  if (m.visual === "box") {
    visual.innerHTML = `
      <div class="var-box-area">
        <div class="var-box">
          <div class="var-name">age</div>
          <div class="var-value">19</div>
        </div>
      </div>
      <p style="text-align:center;color:#94a3b8">This is a variable – a labeled box holding a value.</p>`;
  } else if (m.visual === "string_strip") {
    renderStringPlayground(visual, { initial: "PYTHON" });
  } else if (m.visual === "list_container") {
    renderListPlayground(visual, { initial: [10, 20, 30] });
  } else if (m.visual === "decision_tree") {
    renderDecisionTree(visual, concept.playground);
  } else if (m.visual === "loop_animator") {
    renderLoopAnimator(visual, concept.playground);
  } else if (m.visual === "function_machine") {
    renderFunctionMachine(visual, concept.playground);
  } else if (m.visual === "dictionary_table") {
    renderDictionaryPlayground(visual, concept.playground);
  } else if (m.visual === "while_loop") {
    renderWhileDemo(visual);
  } else if (m.visual === "class_factory") {
    renderClassDemo(visual);
  } else if (m.visual === "file_notebook") {
    renderFileDemo(visual);
  } else if (m.visual === "system_folder") {
    renderSystemDemo(visual);
  } else if (m.visual === "gui_window") {
    renderGuiDemo(visual);
  }
}

function renderPlay(container, concept) {
  container.innerHTML = `<h3 style="margin-bottom:8px">🖐 Play with it</h3>
    <p style="color:#94a3b8;margin-bottom:16px">Touch, change, and experiment. There is no wrong answer here.</p>
    <div id="playArea"></div>`;
  const area = document.getElementById("playArea");
  const type = concept.playground.type;

  if (type === "variable_box") renderVariablePlayground(area, concept.playground);
  else if (type === "string_strip") renderStringPlayground(area, concept.playground);
  else if (type === "list_container") renderListPlayground(area, concept.playground);
  else if (type === "decision_tree") renderDecisionTree(area, concept.playground);
  else if (type === "loop_animator") renderLoopAnimator(area, concept.playground);
  else if (type === "function_machine") renderFunctionMachine(area, concept.playground);
  else if (type === "dictionary_table") renderDictionaryPlayground(area, concept.playground);
  else if (type === "while_demo") renderWhileDemo(area);
  else if (type === "class_demo") renderClassDemo(area);
  else if (type === "file_demo") renderFileDemo(area);
  else if (type === "system_demo") renderSystemDemo(area);
  else if (type === "gui_demo") renderGuiDemo(area);
}

function renderPredict(container, concept) {
  const preds = concept.predict || [];
  if (!preds.length) {
    container.innerHTML = `<p>No prediction questions for this concept yet.</p>`;
    return;
  }
  const p = preds[0];
  container.innerHTML = `
    <h3 style="margin-bottom:12px">🤔 Predict what will happen</h3>
    <div class="question-box">
      <pre style="background:#0f172a;padding:16px;border-radius:10px;overflow-x:auto;margin-bottom:16px">${p.question}</pre>
      <ul class="option-list" id="predictOptions">
        ${p.options.map((opt, i) => `<li data-index="${i}" onclick="selectPredict(${i})">${opt}</li>`).join("")}
      </ul>
    </div>
    <div id="predictFeedback" style="margin-top:16px;display:none"></div>
  `;
  window._predictCorrect = p.correct;
  window._predictExplanation = p.explanation;
}

window.selectPredict = function (index) {
  const items = document.querySelectorAll("#predictOptions li");
  items.forEach((li) => li.classList.remove("selected", "correct", "wrong"));
  items[index].classList.add("selected");
  const feedback = document.getElementById("predictFeedback");
  feedback.style.display = "block";

  if (index === window._predictCorrect) {
    items[index].classList.add("correct");
    feedback.innerHTML = `<div style="background:rgba(34,197,94,0.15);border:1px solid #22c55e;padding:16px;border-radius:12px">
      ✅ Yes!<br>${window._predictExplanation}
    </div>`;
  } else {
    items[index].classList.add("wrong");
    feedback.innerHTML = `<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;padding:16px;border-radius:12px">
      Not this one. Think about what the computer does step by step.
    </div>`;
  }
};

function renderCode(container, concept) {
  let mistakesHTML = "";
  if (concept.common_mistakes && concept.common_mistakes.length) {
    mistakesHTML = `
      <div style="margin-top:24px;background:#1e293b;border-radius:14px;padding:18px;border:1px solid #334155">
        <h4 style="color:#fca5a5;margin-bottom:12px">⚠️ Common Mistakes</h4>
        ${concept.common_mistakes.map(m => `
          <div style="background:#0f172a;border-radius:10px;padding:12px;margin-bottom:10px">
            <div style="color:#f87171;font-size:0.9rem;margin-bottom:4px"><strong>Wrong:</strong></div>
            <pre style="color:#fca5a5;font-size:0.85rem;margin-bottom:8px;white-space:pre-wrap">${m.wrong}</pre>
            <div style="color:#94a3b8;font-size:0.9rem;margin-bottom:4px">${m.why}</div>
            <div style="color:#86efac;font-size:0.9rem"><strong>Correct:</strong> <code>${m.correct}</code></div>
          </div>
        `).join("")}
      </div>`;
  }

  container.innerHTML = `
    <h3 style="margin-bottom:8px">💻 Now the Python code</h3>
    <p style="color:#94a3b8;margin-bottom:16px">
      You already understand the idea. Python is just the way to write it down.
    </p>
    <div id="codeRunnerArea"></div>
    ${mistakesHTML}
  `;
  renderCodeRunner(document.getElementById("codeRunnerArea"), concept.code ? concept.code.examples : []);
}


function renderBreak(container, concept) {
  const b = concept.break_it;
  container.innerHTML = `
    <h3 style="margin-bottom:12px">🐛 Break & Fix</h3>
    <p style="margin-bottom:12px">${b.question}</p>
    <div class="code-area">
      <div class="code-header"><span>Broken code</span></div>
      <textarea class="code-editor" id="brokenCode">${b.broken_code}</textarea>
      <div class="run-row">
        <button class="btn-primary" onclick="runBroken()">▶ Run</button>
        <button class="btn-secondary" onclick="showHint()">Hint</button>
        <button class="btn-secondary" onclick="showFix()">Show Fix</button>
      </div>
      <div class="output-area" id="brokenOutput">Try running it...</div>
    </div>
    <div id="hintArea" style="margin-top:12px;display:none"></div>
  `;
  window._breakHint = b.hint;
  window._breakFix = b.fix;
}

window.runBroken = async function () {
  const code = document.getElementById("brokenCode").value;
  const result = await runPython(code);
  document.getElementById("brokenOutput").textContent = result;
};

window.showHint = function () {
  const area = document.getElementById("hintArea");
  area.style.display = "block";
  area.innerHTML = `<div style="background:rgba(245,158,11,0.15);border:1px solid #f59e0b;padding:14px;border-radius:10px">
    💡 Hint: ${window._breakHint}
  </div>`;
};

window.showFix = function () {
  document.getElementById("brokenCode").value = window._breakFix;
  document.getElementById("brokenOutput").textContent = "Fixed version loaded. Press Run!";
};

function renderApply(container, concept) {
  const a = concept.apply || { problem: "Try using this concept.", starter: "# your code" };
  window._currentBoss = concept.boss_battle || null;
  window._currentConceptId = concept.id;

  let bossHTML = "";
  if (concept.boss_battle) {
    const b = concept.boss_battle;
    bossHTML = `
      <div style="margin-top:28px;background:linear-gradient(135deg,#7f1d1d,#450a0a);border:1px solid #991b1b;border-radius:16px;padding:20px">
        <h3 style="color:#fca5a5;margin-bottom:8px">👑 ${b.title}</h3>
        <p style="color:#fecaca;margin-bottom:12px">${b.mission}</p>
        <ul style="color:#fca5a5;padding-left:20px;margin-bottom:14px;line-height:1.7">
          ${(b.requirements || []).map(r => `<li>${r}</li>`).join("")}
        </ul>
        <div class="code-area">
          <div class="code-header"><span>Boss Battle Code</span></div>
          <textarea class="code-editor" id="bossCode">${b.starter || "# defeat the boss"}</textarea>
          <div class="run-row">
            <button class="btn-primary" onclick="runAndCheckBoss()">▶ Run & Check Boss</button>
            <button class="btn-secondary" onclick="showBossHint()">Hint</button>
          </div>
          <div class="output-area" id="bossOutput">Write your solution and press Run & Check Boss...</div>
        </div>
        <div id="bossResult" style="margin-top:12px;display:none"></div>
      </div>`;
  }

  let tryHTML = "";
  if (concept.try_it_exercises && concept.try_it_exercises.length) {
    tryHTML = `
      <div style="margin-top:20px">
        <h4 style="color:#a5b4fc;margin-bottom:10px">✏️ Try It Yourself</h4>
        ${concept.try_it_exercises.map(ex => `
          <div style="background:#0f172a;border-radius:10px;padding:12px 16px;margin-bottom:8px;border:1px solid #334155">
            <span style="color:#64748b;font-size:0.8rem">${ex.difficulty || ""}</span>
            <div>${ex.question}</div>
          </div>
        `).join("")}
      </div>`;
  }

  container.innerHTML = `
    <h3 style="margin-bottom:12px">🚀 Apply it</h3>
    <div class="why-box">
      <p style="font-size:1.1rem">${a.problem}</p>
    </div>
    <div id="applyRunner"></div>
    ${tryHTML}
    ${bossHTML}
  `;
  renderCodeRunner(document.getElementById("applyRunner"), [
    { title: "Your solution", code: a.starter || "# write your code here\n" }
  ]);
}

// Boss success keywords by concept id (simple auto-check)
const BOSS_CHECKS = {
  variables: { mustInclude: ["price", "quantity", "print"], mustOutput: null, minLines: 3 },
  strings: { mustInclude: ["print"], mustOutput: null, minLines: 2 },
  lists: { mustInclude: ["marks", "print"], mustOutput: null, minLines: 3 },
  conditionals: { mustInclude: ["if", "marks", "print"], mustOutput: null, minLines: 4 },
  for_loops: { mustInclude: ["for", "range", "print"], mustOutput: null, minLines: 2 },
  functions: { mustInclude: ["def", "return"], mustOutput: null, minLines: 4 },
  dictionaries: { mustInclude: ["student", "print"], mustOutput: null, minLines: 3 },
  while_input: { mustInclude: ["while", "secret"], mustOutput: null, minLines: 3 },
  classes: { mustInclude: ["class", "def"], mustOutput: null, minLines: 4 },
  files: { mustInclude: ["open", "write"], mustOutput: null, minLines: 2 },
  operators: { mustInclude: ["print"], mustOutput: null, minLines: 3 },
  tuples: { mustInclude: ["print"], mustOutput: null, minLines: 2 },
  sets: { mustInclude: ["set", "print"], mustOutput: null, minLines: 2 },
  fstrings: { mustInclude: ["print"], mustOutput: null, minLines: 2 },
  exceptions: { mustInclude: ["try", "except"], mustOutput: null, minLines: 3 },
  modules_math: { mustInclude: ["import", "print"], mustOutput: null, minLines: 2 },
  casting: { mustInclude: ["int", "print"], mustOutput: null, minLines: 2 },
  lambda: { mustInclude: ["lambda", "print"], mustOutput: null, minLines: 2 },
  inheritance: { mustInclude: ["class", "print"], mustOutput: null, minLines: 4 }
};



window.runAndCheckBoss = async function () {
  const code = document.getElementById("bossCode").value;
  const out = document.getElementById("bossOutput");
  const result = document.getElementById("bossResult");
  out.textContent = "Running...";

  let output = "";
  try {
    output = await runPython(code);
    out.textContent = output;
  } catch (e) {
    out.textContent = "❌ " + e.message;
    result.style.display = "block";
    result.innerHTML = `<div style="background:rgba(239,68,68,0.2);border:1px solid #ef4444;padding:14px;border-radius:10px;color:#fca5a5">Boss not defeated — fix the error first.</div>`;
    return;
  }

  const check = BOSS_CHECKS[window._currentConceptId] || { mustInclude: ["print"], minLines: 2 };
  const lines = code.split("\n").filter(l => l.trim() && !l.trim().startsWith("#"));
  const lower = code.toLowerCase();
  let passed = true;
  let reasons = [];

  if (check.minLines && lines.length < check.minLines) {
    passed = false;
    reasons.push(`Write at least ${check.minLines} real lines of code (not only comments).`);
  }
  (check.mustInclude || []).forEach(kw => {
    if (!lower.includes(kw.toLowerCase())) {
      passed = false;
      reasons.push(`Your code should use: <code>${kw}</code>`);
    }
  });
  if (check.mustOutput && output && !output.includes(check.mustOutput)) {
    passed = false;
    reasons.push(`Output should include something like: ${check.mustOutput}`);
  }

  result.style.display = "block";
  if (passed) {
    result.innerHTML = `<div style="background:rgba(34,197,94,0.2);border:1px solid #22c55e;padding:14px;border-radius:10px;color:#86efac">
      🏆 <strong>BOSS DEFEATED!</strong> Great work. +30 XP
    </div>`;
    const p = loadProgress();
    p.xp = (p.xp || 0) + 30;
    p.skills = p.skills || {};
    p.skills[window._currentConceptId] = Math.min(100, (p.skills[window._currentConceptId] || 0) + 25);
    saveProgress(p);
    showToast("🏆 Boss defeated! +30 XP");
  } else {
    result.innerHTML = `<div style="background:rgba(239,68,68,0.15);border:1px solid #ef4444;padding:14px;border-radius:10px;color:#fca5a5">
      ❌ Boss still standing.<br>${reasons.map(r => "• " + r).join("<br>")}
    </div>`;
  }
};

window.showBossHint = function () {
  const b = window._currentBoss;
  const result = document.getElementById("bossResult");
  if (!result) return;
  result.style.display = "block";
  result.innerHTML = `<div style="background:rgba(245,158,11,0.15);border:1px solid #f59e0b;padding:14px;border-radius:10px;color:#fcd34d">
    💡 Hint: ${(b && b.requirements) ? b.requirements.join(" → ") : "Follow the requirements above step by step."}
  </div>`;
};



function renderMaster(container, concept) {
  // Mark concept complete (progress + habit)
  markConceptComplete(concept.id);
  buildSidebar(); // refresh checkmarks

  let practiceHTML = "";
  if (concept.practice_book_topic && typeof PRACTICE_BOOK !== "undefined") {
    const pb = PRACTICE_BOOK[concept.practice_book_topic];
    if (pb && pb.mcqs && pb.mcqs.length) {
      practiceHTML = `
        <div style="text-align:left;max-width:640px;margin:24px auto;background:#1e293b;border-radius:16px;padding:20px;border:1px solid #334155">
          <h3 style="color:#a5b4fc;margin-bottom:12px">📘 Practice Book Questions (Real Exam Style)</h3>
          <p style="color:#94a3b8;font-size:0.9rem;margin-bottom:16px">Score yourself. Aim for 80%+ before moving on.</p>
          ${pb.mcqs.map((q) => `
            <div style="background:#0f172a;border-radius:12px;padding:14px;margin-bottom:12px">
              <div style="font-size:0.85rem;color:#64748b;margin-bottom:6px">${q.id}</div>
              <div style="margin-bottom:10px;white-space:pre-line">${q.question}</div>
              <ul class="option-list" style="margin:0">
                ${q.options.map((opt, oi) => `
                  <li style="padding:10px 14px;font-size:0.9rem" onclick="checkPB(this, ${oi === (q.answer.charCodeAt(0)-65)}, '${(q.explanation||"").replace(/'/g,"\\'")}')">${String.fromCharCode(65+oi)}. ${opt}</li>
                `).join("")}
              </ul>
              <div class="pb-feedback" style="display:none;margin-top:8px;font-size:0.9rem"></div>
            </div>
          `).join("")}
        </div>`;
    }
  }

  const pct = getCompletionPercent();
  container.innerHTML = `
    <div style="text-align:center;padding:30px 20px">
      <div style="font-size:3.5rem;margin-bottom:12px">🎉</div>
      <h2 style="margin-bottom:10px">You mastered: ${concept.title}</h2>
      <p style="color:#86efac;margin-bottom:8px">Progress: <strong>${pct}%</strong> of Phase 1 complete</p>
      <p style="color:#94a3b8;margin-bottom:20px;max-width:500px;margin-left:auto;margin-right:auto">
        Why → See → Play → Predict → Code → Break → Apply → Practice
      </p>
      <div class="why-box" style="text-align:left;max-width:500px;margin:0 auto 20px">
        <strong>Transfer challenge (prove you understand):</strong><br>
        ${concept.transfer ? concept.transfer.problem : ""}
      </div>
      ${practiceHTML}
      ${concept.adventure_link ? `
        <div style="margin:20px 0">
          <a href="${concept.adventure_link}" class="btn-primary" style="display:inline-block;text-decoration:none;padding:14px 28px">
            ${concept.adventure_title || "Start Adventure"}
          </a>
        </div>` : ""}
      <button class="btn-primary big" onclick="nextStep()" style="margin-top:12px">Next Concept →</button>
      <div style="margin-top:16px">
        <button class="btn-secondary" onclick="openDailyMission()">🎯 Do Today's Mission</button>
      </div>
    </div>
  `;
}



window.checkPB = function(el, isCorrect, explanation) {
  const parent = el.parentElement;
  parent.querySelectorAll("li").forEach(li => li.classList.remove("correct","wrong"));
  el.classList.add(isCorrect ? "correct" : "wrong");
  const fb = parent.parentElement.querySelector(".pb-feedback");
  if (fb) {
    fb.style.display = "block";
    fb.innerHTML = isCorrect
      ? `<span style="color:#22c55e">✅ Correct! ${explanation}</span>`
      : `<span style="color:#ef4444">Not this one. Try again.</span>`;
  }
};


// ---------- PRACTICE BOOK INTERACTIVE SYSTEM ----------
let pbCurrentUnit = "all";
let pbCurrentType = "all";
let pbSearchQuery = "";

function openPracticeBook() {
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("conceptScreen").classList.add("active");

  document.getElementById("conceptNumber").textContent = "📘";
  document.getElementById("conceptTitle").textContent = "LJIET Practice Book – Digital Practice & Code Hub";

  document.getElementById("stepTabs").style.display = "none";
  document.querySelector(".step-navigation").style.display = "none";

  renderPracticeBookHub();
}

function renderPracticeBookHub() {
  const content = document.getElementById("stepContent");
  if (typeof PRACTICE_BOOK === "undefined") {
    content.innerHTML = "<p style='color:#ef4444'>Practice Book data not loaded.</p>";
    return;
  }

  let html = `
    <div style="background:linear-gradient(135deg,#1e1b4b,#0f172a);border:1px solid #4338ca;border-radius:16px;padding:20px;margin-bottom:24px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
        <h2 style="color:#c7d2fe;margin-bottom:0;font-size:1.4rem">📘 LJIET Python-I Practice Book (SEM-I 2026)</h2>
        <span style="background:#22c55e22;border:1px solid #22c55e;color:#4ade80;padding:4px 12px;border-radius:99px;font-weight:700;font-size:0.85rem">
          ✨ ALL 210 QUESTIONS DIGITIZED (Q1 to Q210)
        </span>
      </div>
      <p style="color:#94a3b8;font-size:0.95rem;line-height:1.5;margin-top:8px">
        Master every single question (Sr No 1 to 210) from Unit 1, Unit 2, and Unit 3! Test yourself on 1-Mark MCQs with instant step-by-step explanations, or practice 3 to 9-Mark coding problems live in your browser using the built-in Python editor.
      </p>

      <!-- Filter Controls -->
      <div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap;align-items:center">
        <!-- Unit Selector -->
        <div style="display:flex;gap:6px;background:#0f172a;padding:4px;border-radius:99px;border:1px solid #334155">
          <button class="pb-filter-btn ${pbCurrentUnit==='all'?'active':''}" onclick="setPBUnit('all')">All Units (1-3)</button>
          <button class="pb-filter-btn ${pbCurrentUnit==='1'?'active':''}" onclick="setPBUnit('1')">Unit 1 (Q1-38)</button>
          <button class="pb-filter-btn ${pbCurrentUnit==='2'?'active':''}" onclick="setPBUnit('2')">Unit 2 (Q39-100)</button>
          <button class="pb-filter-btn ${pbCurrentUnit==='3'?'active':''}" onclick="setPBUnit('3')">Unit 3 (Q101-210)</button>
        </div>

        <!-- Type Selector -->
        <div style="display:flex;gap:6px;background:#0f172a;padding:4px;border-radius:99px;border:1px solid #334155">
          <button class="pb-filter-btn ${pbCurrentType==='all'?'active':''}" onclick="setPBType('all')">All Types</button>
          <button class="pb-filter-btn ${pbCurrentType==='mcq'?'active':''}" onclick="setPBType('mcq')">MCQs (1 Mark)</button>
          <button class="pb-filter-btn ${pbCurrentType==='code'?'active':''}" onclick="setPBType('code')">Code Practice (3-9 Marks)</button>
        </div>

        <!-- Search Input -->
        <div style="flex:1;min-width:200px">
          <input type="text" id="pbSearchInput" value="${pbSearchQuery}" oninput="onPBSearch(this.value)" placeholder="🔍 Search question by number (e.g. 202) or keyword..." style="width:100%;padding:8px 14px;background:#0f172a;border:1px solid #334155;border-radius:99px;color:#f8fafc;font-size:0.9rem" />
        </div>
      </div>
    </div>

    <!-- Modal for Python Code Editor -->
    <div id="pbCodeModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:999;backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:20px">
      <div style="background:#0f172a;border:1px solid #3b82f6;border-radius:16px;width:100%;max-width:850px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.7)">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:#1e293b;border-bottom:1px solid #334155">
          <div style="font-weight:700;color:#60a5fa" id="pbModalTitle">Code Practice Sandbox</div>
          <button onclick="closePBCodeModal()" style="background:transparent;border:none;color:#94a3b8;font-size:1.5rem;cursor:pointer">&times;</button>
        </div>
        <div style="padding:20px;overflow-y:auto;flex:1">
          <div id="pbModalDesc" style="color:#cbd5e1;margin-bottom:16px;line-height:1.5;font-size:0.95rem"></div>
          <div style="font-size:0.85rem;color:#93c5fd;margin-bottom:6px">🐍 Write Python Code below:</div>
          <textarea id="pbCodeInput" rows="10" style="width:100%;background:#020617;color:#38bdf8;font-family:'Fira Code',Consolas,monospace;padding:14px;border-radius:12px;border:1px solid #1e293b;font-size:0.95rem;line-height:1.5;resize:vertical"></textarea>
          <div style="display:flex;gap:12px;margin-top:12px">
            <button onclick="executePBCodeModal()" class="btn-primary" style="background:#2563eb;padding:10px 20px">▶ Run Code (Python Engine)</button>
            <button onclick="resetPBCodeModal()" style="background:#334155;color:#e2e8f0;border:none;padding:10px 16px;border-radius:8px;cursor:pointer">🔄 Reset Code</button>
          </div>
          <div style="margin-top:16px">
            <div style="font-size:0.85rem;color:#94a3b8;margin-bottom:6px">Output Terminal:</div>
            <pre id="pbCodeOutput" style="background:#020617;color:#4ade80;padding:14px;border-radius:12px;border:1px solid #1e293b;min-height:80px;font-family:monospace;white-space:pre-wrap">Click 'Run Code' to test output...</pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Questions Container -->
    <div id="pbQuestionsList"></div>
  `;

  content.innerHTML = html;
  renderFilteredPBQuestions();
}

function setPBUnit(unit) {
  pbCurrentUnit = unit;
  renderPracticeBookHub();
}

function setPBType(type) {
  pbCurrentType = type;
  renderPracticeBookHub();
}

function onPBSearch(val) {
  pbSearchQuery = val.toLowerCase();
  renderFilteredPBQuestions();
}

function renderFilteredPBQuestions() {
  const container = document.getElementById("pbQuestionsList");
  if (!container) return;

  const units = [];
  if (pbCurrentUnit === "all" || pbCurrentUnit === "1") units.push(PRACTICE_BOOK.unit1);
  if (pbCurrentUnit === "all" || pbCurrentUnit === "2") units.push(PRACTICE_BOOK.unit2);
  if (pbCurrentUnit === "all" || pbCurrentUnit === "3") units.push(PRACTICE_BOOK.unit3);

  let html = "";
  let totalDisplayed = 0;

  units.forEach(u => {
    if (!u) return;

    // Filter MCQs
    const mcqs = (pbCurrentType === "all" || pbCurrentType === "mcq") ? u.mcqs.filter(q => {
      if (!pbSearchQuery) return true;
      return q.question.toLowerCase().includes(pbSearchQuery) || 
             q.options.some(o => o.toLowerCase().includes(pbSearchQuery)) ||
             (q.explanation && q.explanation.toLowerCase().includes(pbSearchQuery));
    }) : [];

    // Filter Coding
    const coding = (pbCurrentType === "all" || pbCurrentType === "code") ? u.coding.filter(q => {
      if (!pbSearchQuery) return true;
      return q.question.toLowerCase().includes(pbSearchQuery) || 
             q.topic.toLowerCase().includes(pbSearchQuery);
    }) : [];

    if (mcqs.length === 0 && coding.length === 0) return;

    totalDisplayed += mcqs.length + coding.length;

    html += `
      <div class="think-card" style="margin-bottom:24px;border:1px solid #334155;border-radius:16px;padding:20px">
        <h3 style="color:#a5b4fc;margin-bottom:16px;font-size:1.2rem;display:flex;align-items:center;justify-content:space-between">
          <span>${u.title}</span>
          <span style="font-size:0.8rem;background:#312e81;color:#c7d2fe;padding:4px 10px;border-radius:99px">Unit ${u.unit}</span>
        </h3>
    `;

    // Render MCQs
    if (mcqs.length > 0) {
      mcqs.forEach((q, idx) => {
        const solutionId = `sol-${q.id.replace(/[^a-zA-Z0-9]/g, '_')}`;
        html += `
          <div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:16px;margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:0.8rem;color:#818cf8;font-weight:700;background:#1e1b4b;padding:2px 8px;border-radius:6px">${q.id} (Sr. ${q.srNo})</span>
              <span style="font-size:0.8rem;color:#38bdf8;background:#0284c722;padding:2px 8px;border-radius:6px">1 Mark MCQ</span>
            </div>
            <div style="font-size:1rem;color:#f8fafc;margin-bottom:14px;white-space:pre-line;line-height:1.5">${q.question}</div>
            
            <!-- Options Grid -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
              ${q.options.map((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                const isCorrect = letter === q.answer;
                return `
                  <button class="pb-opt-btn" onclick="checkPBMCQ(this, ${isCorrect}, '${solutionId}')">
                    <strong>${letter}.</strong> ${opt}
                  </button>
                `;
              }).join("")}
            </div>

            <!-- Solution & Explanation Button -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
              <button onclick="togglePBSolution('${solutionId}')" class="pb-sol-btn">
                💡 Show Solution & Explanation
              </button>
              <span id="badge-${solutionId}" style="font-size:0.85rem;font-weight:600"></span>
            </div>

            <!-- Collapsible Solution Box -->
            <div id="${solutionId}" style="display:none;margin-top:12px;background:#020617;border:1px solid #0284c7;border-radius:12px;padding:14px">
              <div style="font-weight:700;color:#38bdf8;margin-bottom:6px">✅ Correct Answer: Option ${q.answer} (${q.correct})</div>
              <div style="color:#cbd5e1;font-size:0.9rem;line-height:1.6">${q.explanation}</div>
            </div>
          </div>
        `;
      });
    }

    // Render Coding Questions
    if (coding.length > 0) {
      coding.forEach((q, idx) => {
        const solutionId = `code-sol-${q.id.replace(/[^a-zA-Z0-9]/g, '_')}`;
        html += `
          <div style="background:#020617;border:1px solid #166534;border-radius:14px;padding:16px;margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:0.8rem;color:#4ade80;font-weight:700;background:#052e16;padding:2px 8px;border-radius:6px">${q.id} • ${q.topic}</span>
              <span style="font-size:0.8rem;color:#facc15;background:#713f1244;padding:2px 8px;border-radius:6px;font-weight:700">⭐ ${q.marks} Marks Coding Problem</span>
            </div>
            <div style="font-size:1rem;color:#f8fafc;margin-bottom:14px;white-space:pre-line;line-height:1.5">${q.question}</div>
            
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button onclick="openPBCodeModal('${q.id}')" class="btn-primary" style="background:#16a34a;font-size:0.88rem;padding:8px 16px">
                💻 Practice & Run Code in Browser
              </button>
              <button onclick="togglePBSolution('${solutionId}')" class="pb-sol-btn" style="border-color:#166534;color:#86efac">
                💡 View Model Solution & Algorithm
              </button>
            </div>

            <!-- Collapsible Solution Box for Code -->
            <div id="${solutionId}" style="display:none;margin-top:14px;background:#0f172a;border:1px solid #22c55e;border-radius:12px;padding:16px">
              <div style="font-weight:700;color:#4ade80;margin-bottom:8px">💡 Solution & Logic Breakdown:</div>
              <div style="color:#cbd5e1;font-size:0.9rem;margin-bottom:12px">${q.explanation}</div>
              <div style="font-size:0.85rem;color:#94a3b8;margin-bottom:4px">Model Python Code Solution:</div>
              <pre style="background:#020617;color:#38bdf8;padding:12px;border-radius:8px;font-family:monospace;font-size:0.9rem;white-space:pre-wrap;overflow-x:auto;border:1px solid #1e293b">${q.solution}</pre>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
  });

  if (totalDisplayed === 0) {
    html = `<div style="text-align:center;padding:40px;color:#94a3b8">No questions match your filter criteria.</div>`;
  }

  container.innerHTML = html;
}

function checkPBMCQ(btn, isCorrect, solutionId) {
  const parent = btn.closest('div');
  const allBtns = parent.querySelectorAll('.pb-opt-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    b.style.opacity = '0.7';
  });

  const badge = document.getElementById(`badge-${solutionId}`);

  if (isCorrect) {
    btn.style.background = '#15803d';
    btn.style.borderColor = '#22c55e';
    btn.style.color = '#ffffff';
    btn.style.opacity = '1';
    if (badge) {
      badge.textContent = '✅ Correct! (+10 pts)';
      badge.style.color = '#4ade80';
    }
    // Award 10 points to logged-in student
    if (typeof addStudentPoints === "function") {
      addStudentPoints(10, solutionId);
    }
  } else {
    btn.style.background = '#991b1b';
    btn.style.borderColor = '#ef4444';
    btn.style.color = '#ffffff';
    btn.style.opacity = '1';
    if (badge) {
      badge.textContent = '❌ Incorrect';
      badge.style.color = '#f87171';
    }
  }

  // Auto reveal explanation box
  togglePBSolution(solutionId, true);
}

function togglePBSolution(solutionId, forceShow = false) {
  const box = document.getElementById(solutionId);
  if (!box) return;
  if (forceShow) {
    box.style.display = 'block';
  } else {
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  }
}

// Code Modal Logic
let currentModalCodeQuestion = null;

function openPBCodeModal(qId) {
  const allCoding = getAllPracticeBookCoding();
  const q = allCoding.find(item => item.id === qId);
  if (!q) return;

  currentModalCodeQuestion = q;
  document.getElementById('pbModalTitle').textContent = `Practice: ${q.id} (${q.marks} Marks)`;
  document.getElementById('pbModalDesc').textContent = q.question;
  const inputEl = document.getElementById('pbCodeInput');
  inputEl.value = q.starterCode || q.solution;
  
  // Attach anti-paste protection
  if (typeof attachAntiPasteProtection === "function") {
    attachAntiPasteProtection(inputEl);
  }

  document.getElementById('pbCodeOutput').textContent = "Click 'Run Code' to test output...";
  document.getElementById('pbCodeOutput').style.color = '#4ade80';
  document.getElementById('pbCodeModal').style.display = 'flex';
}

function closePBCodeModal() {
  document.getElementById('pbCodeModal').style.display = 'none';
}

function resetPBCodeModal() {
  if (currentModalCodeQuestion) {
    document.getElementById('pbCodeInput').value = currentModalCodeQuestion.starterCode || currentModalCodeQuestion.solution;
    document.getElementById('pbCodeOutput').textContent = "Code reset to starter template.";
  }
}

async function executePBCodeModal() {
  const code = document.getElementById('pbCodeInput').value;
  const outBox = document.getElementById('pbCodeOutput');
  outBox.textContent = "⏳ Running Python code...";
  outBox.style.color = "#facc15";

  if (typeof runPython === "function") {
    const res = await runPython(code);
    outBox.textContent = res;
    if (res.startsWith("❌ Error")) {
      outBox.style.color = "#f87171";
    } else {
      outBox.style.color = "#4ade80";
      // Award 50 points for completing code task
      if (typeof addStudentPoints === "function" && currentModalCodeQuestion) {
        addStudentPoints(50, null, currentModalCodeQuestion.id);
      }
    }
  } else {
    outBox.textContent = "⚠️ Python Engine (Pyodide) is loading... Please wait 5 seconds and try again.";
    outBox.style.color = "#facc15";
  }
}


// ---------- THINK LAB ----------
function openThinkLab() {
  document.getElementById("welcomeScreen").classList.remove("active");
  document.getElementById("conceptScreen").classList.add("active");

  document.getElementById("conceptNumber").textContent = "🧠";
  document.getElementById("conceptTitle").textContent = "Think Lab – Pure Problem Solving";

  // hide normal step tabs for Think Lab
  document.getElementById("stepTabs").style.display = "none";
  document.querySelector(".step-navigation").style.display = "none";

  const content = document.getElementById("stepContent");
  let html = `<p style="color:#94a3b8;margin-bottom:24px">${THINK_LAB.description}</p>`;


  THINK_LAB.categories.forEach((cat) => {
    html += `<div class="think-card">
      <h3>${cat.title}</h3>`;
    cat.levels.forEach((level, i) => {
      html += `
        <div style="margin:16px 0;padding:16px;background:#0f172a;border-radius:12px">
          <p class="think-question">${level.question}</p>
          ${
            level.options
              ? `<ul class="option-list">
                  ${level.options
                    .map(
                      (o, oi) =>
                        `<li onclick="checkThink(this, ${oi === level.correct}, '${level.explanation.replace(/'/g, "\\'")}')">${o}</li>`
                    )
                    .join("")}
                </ul>`
              : ""
          }
          <div class="think-feedback" style="display:none;margin-top:10px"></div>
        </div>`;
    });
    html += `</div>`;
  });

  content.innerHTML = html;
}

window.checkThink = function (el, isCorrect, explanation) {
  const parent = el.parentElement;
  parent.querySelectorAll("li").forEach((li) => li.classList.remove("correct", "wrong"));
  el.classList.add(isCorrect ? "correct" : "wrong");
  const feedback = parent.parentElement.querySelector(".think-feedback");
  feedback.style.display = "block";
  feedback.innerHTML = isCorrect
    ? `<div style="color:#22c55e">✅ ${explanation}</div>`
    : `<div style="color:#ef4444">Not quite. Try another option.</div>`;
};

// ---------- HELPERS ----------
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  setTimeout(() => t.classList.add("hidden"), 3500);
}

function toggleConceptMap() {
  const modal = document.getElementById("conceptMapModal");
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    document.getElementById("conceptMapCanvas").innerHTML = `
      <div style="text-align:center;padding:40px;color:#94a3b8">
        <p style="font-size:1.2rem;margin-bottom:20px">Your growing mental map of Python</p>
        <div style="display:inline-block;text-align:left;line-height:2">
          <div>📦 <strong>Data</strong></div>
          <div style="padding-left:20px">→ Variables ✅</div>
          <div style="padding-left:20px">→ Strings ✅</div>
          <div style="padding-left:20px">→ Lists ✅</div>
          <div style="padding-left:20px">→ Dictionaries (coming)</div>
          <br>
          <div>🧠 <strong>Logic</strong></div>
          <div style="padding-left:20px">→ If / Else ✅</div>
          <div style="padding-left:20px">→ Loops ✅</div>
          <br>
          <div>⚙️ <strong>Reuse</strong></div>
          <div style="padding-left:20px">→ Functions ✅</div>
          <div style="padding-left:20px">→ Classes (coming)</div>
        </div>
      </div>`;
  }
}
