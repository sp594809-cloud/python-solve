// ============================================================
// BUG FIXES (loaded AFTER app.js)
// Learn modules open DIRECTLY from Home/sidebar
// + Fix MCQs that show no options
// + Jupyter-style code cells for Practice Book
// ============================================================

function showConceptScreen() {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
    s.style.removeProperty("display");
  });
  const concept = document.getElementById("conceptScreen");
  if (concept) concept.classList.add("active");
}

function showWelcomeScreenFixed() {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
    s.style.removeProperty("display");
  });
  const welcome = document.getElementById("welcomeScreen");
  if (welcome) welcome.classList.add("active");
}

function showStepTabs(show) {
  const tabs = document.getElementById("stepTabs");
  const nav = document.querySelector(".step-navigation");
  if (tabs) tabs.style.display = show ? "flex" : "none";
  if (nav) nav.style.display = show ? "flex" : "none";
}

function openConcept(index) {
  try {
    index = Number(index);
    if (typeof CONCEPTS === "undefined" || !CONCEPTS || !CONCEPTS[index]) {
      console.warn("openConcept: bad index", index, typeof CONCEPTS);
      if (typeof showToast === "function") showToast("Concept not found");
      return;
    }

    window.currentConceptIndex = index;
    if (typeof currentConceptIndex !== "undefined") currentConceptIndex = index;
    if (typeof currentStep !== "undefined") currentStep = "why";
    else window.currentStep = "why";

    showConceptScreen();
    showStepTabs(true);

    document.querySelectorAll("#conceptList li").forEach((li) => li.classList.remove("active"));
    const items = document.querySelectorAll("#conceptList li");
    if (items[index + 1]) items[index + 1].classList.add("active");

    const concept = CONCEPTS[index];
    const numEl = document.getElementById("conceptNumber");
    const titleEl = document.getElementById("conceptTitle");
    if (numEl) numEl.textContent = concept.number || String(index + 1).padStart(2, "0");
    if (titleEl) titleEl.textContent = concept.title || "Concept";

    document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
    const whyTab = document.querySelector('.step-tab[data-step="why"]');
    if (whyTab) whyTab.classList.add("active");

    if (typeof renderStep === "function") renderStep();
    else console.error("renderStep missing");
    if (typeof updateStepIndicator === "function") updateStepIndicator();
    if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();

    const main = document.getElementById("mainContent");
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
  } catch (err) {
    console.error("openConcept error:", err);
    if (typeof showToast === "function") showToast("Could not open module");
  }
}

function openPracticeBook() {
  try {
    showConceptScreen();
    showStepTabs(false);
    const numEl = document.getElementById("conceptNumber");
    const titleEl = document.getElementById("conceptTitle");
    if (numEl) numEl.textContent = "📘";
    if (titleEl) titleEl.textContent = "LJIET Practice Book – Digital Practice & Code Hub";
    if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
    if (typeof renderPracticeBookHub === "function") renderPracticeBookHub();
  } catch (err) {
    console.error("openPracticeBook:", err);
  }
}

function openDailyMission() {
  const m = typeof getDailyMission === "function" ? getDailyMission() : null;
  if (!m) {
    openPracticeBook();
    return;
  }
  showConceptScreen();
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
  if (typeof showToast === "function") showToast("🎯 " + m.text);
  try {
    m.action();
  } catch (e) {
    console.warn(e);
    openPracticeBook();
  }
}

function startLearning() {
  showConceptScreen();
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
  const p = typeof loadProgress === "function" ? loadProgress() : { completed: {} };
  let startIdx = 0;
  if (typeof CONCEPTS !== "undefined") {
    for (let i = 0; i < CONCEPTS.length; i++) {
      if (!p.completed[CONCEPTS[i].id]) {
        startIdx = i;
        break;
      }
      startIdx = i;
    }
  }
  openConcept(startIdx);
}

function openThinkLab() {
  showConceptScreen();
  showStepTabs(false);
  const numEl = document.getElementById("conceptNumber");
  const titleEl = document.getElementById("conceptTitle");
  if (numEl) numEl.textContent = "🧠";
  if (titleEl) titleEl.textContent = "Think Lab – Pure Problem Solving";
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();

  const content = document.getElementById("stepContent");
  if (!content || typeof THINK_LAB === "undefined") {
    if (content) content.innerHTML = "<p>Think Lab data not loaded.</p>";
    return;
  }
  let html = `<p style="color:#94a3b8;margin-bottom:24px">${THINK_LAB.description}</p>`;
  THINK_LAB.categories.forEach((cat) => {
    html += `<div class="think-card"><h3>${cat.title}</h3>`;
    cat.levels.forEach((level) => {
      html += `<div style="margin:16px 0;padding:16px;background:#0f172a;border-radius:12px">
        <p class="think-question">${level.question}</p>`;
      if (level.options) {
        html += `<ul class="option-list">${level.options
          .map(
            (o, oi) =>
              `<li onclick="checkThink(this, ${oi === level.correct}, '${String(level.explanation || "").replace(/'/g, "\\'")}')">${o}</li>`
          )
          .join("")}</ul>`;
      }
      html += `<div class="think-feedback" style="display:none;margin-top:10px"></div></div>`;
    });
    html += `</div>`;
  });
  content.innerHTML = html;
}

function rebuildLearningSidebar() {
  const list = document.getElementById("conceptList");
  if (!list) return;
  if (typeof CONCEPTS === "undefined") {
    console.warn("CONCEPTS not loaded yet, retrying...");
    setTimeout(rebuildLearningSidebar, 200);
    return;
  }

  const p = typeof loadProgress === "function" ? loadProgress() : { completed: {} };
  list.innerHTML = "";

  const thinkLi = document.createElement("li");
  thinkLi.textContent = "🧠 Think Lab";
  thinkLi.style.cursor = "pointer";
  thinkLi.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    openThinkLab();
  };
  list.appendChild(thinkLi);

  CONCEPTS.forEach((c, i) => {
    const li = document.createElement("li");
    const done = p.completed && p.completed[c.id];
    li.innerHTML = (done ? "✅ " : "") + c.number + "  " + (c.title || "").split("–")[0].trim();
    li.style.cursor = "pointer";
    if (done) li.classList.add("completed");
    (function (idx) {
      li.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        openConcept(idx);
      };
    })(i);
    list.appendChild(li);
  });

  console.log("✅ Learning sidebar rebuilt with", CONCEPTS.length, "modules");
}

window.openWelcomeScreen = function () {
  showWelcomeScreenFixed();
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
};

// ============================================================
// FIX: Ensure every Practice Book MCQ always has options
// ============================================================
function normalizePracticeBookOptions() {
  if (typeof PRACTICE_BOOK === "undefined") return;
  const units = [PRACTICE_BOOK.unit1, PRACTICE_BOOK.unit2, PRACTICE_BOOK.unit3];
  let fixed = 0;
  units.forEach((u) => {
    if (!u || !Array.isArray(u.mcqs)) return;
    u.mcqs.forEach((q) => {
      if (!q) return;
      if (!Array.isArray(q.options) || q.options.length === 0) {
        if (q.correct) {
          q.options = [q.correct, "None of the above", "All of the above", "Cannot be determined"];
        } else {
          q.options = ["Option A", "Option B", "Option C", "Option D"];
        }
        if (!q.answer) q.answer = "A";
        fixed++;
      }
      q.options = q.options.map((o) => (o == null ? "" : String(o)));
    });
  });
  if (fixed > 0) console.log("✅ Normalized options for", fixed, "MCQs");
}

function patchPBRender() {
  if (typeof renderFilteredPBQuestions !== "function") return;
  const original = renderFilteredPBQuestions;
  window.renderFilteredPBQuestions = function () {
    try {
      normalizePracticeBookOptions();
      return original.apply(this, arguments);
    } catch (err) {
      console.error("PB render error (recovered):", err);
      normalizePracticeBookOptions();
      try {
        return original.apply(this, arguments);
      } catch (e2) {
        console.error("PB render failed twice", e2);
        const content = document.getElementById("stepContent");
        if (content) {
          content.innerHTML = `<p style="color:#f87171;padding:20px">Could not load some questions. Please refresh the page.</p>`;
        }
      }
    }
  };
}

// ============================================================
// JUPYTER-STYLE CODE CELLS
// Multiple cells, Tab = 4 spaces, auto blank lines between cells
// ============================================================

let nbCells = [""]; // array of cell code strings

function splitCodeIntoCells(code) {
  if (!code || !String(code).trim()) return [""];
  // Split on 2+ blank lines to form natural cells; otherwise one cell
  const parts = String(code).split(/\n\s*\n\s*\n+/);
  if (parts.length > 1) {
    return parts.map((p) => p.replace(/^\n+|\n+$/g, "")).filter((p) => p.length > 0);
  }
  // Also try split on single blank line groups for starter templates
  const parts2 = String(code).split(/\n\s*\n/);
  if (parts2.length >= 3) {
    return parts2.map((p) => p.replace(/^\n+|\n+$/g, "")).filter((p) => p.length > 0);
  }
  return [String(code)];
}

function getAllCellsCode() {
  // Join cells with a blank line between them (Jupyter-style spacing)
  return nbCells
    .map((c) => (c || "").replace(/\s+$/, ""))
    .filter((c, i, arr) => c.length > 0 || arr.length === 1)
    .join("\n\n");
}

function attachTabIndent(textarea) {
  if (!textarea || textarea._tabBound) return;
  textarea._tabBound = true;
  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const val = this.value;
      if (e.shiftKey) {
        // Un-indent: remove up to 4 spaces at line starts in selection
        const before = val.substring(0, start);
        const selected = val.substring(start, end);
        const after = val.substring(end);
        const lines = selected.split("\n");
        const newSelected = lines
          .map((line) => (line.startsWith("    ") ? line.slice(4) : line.startsWith("\t") ? line.slice(1) : line))
          .join("\n");
        this.value = before + newSelected + after;
        this.selectionStart = start;
        this.selectionEnd = start + newSelected.length;
      } else {
        // Insert 4 spaces
        this.value = val.substring(0, start) + "    " + val.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
      }
      // Sync back to nbCells
      const idx = parseInt(this.dataset.cellIndex, 10);
      if (!isNaN(idx)) nbCells[idx] = this.value;
    }
  });
  textarea.addEventListener("input", function () {
    const idx = parseInt(this.dataset.cellIndex, 10);
    if (!isNaN(idx)) nbCells[idx] = this.value;
  });
}

function renderNotebookCells() {
  const host = document.getElementById("pbNotebookHost");
  if (!host) return;

  let html = "";
  nbCells.forEach((code, i) => {
    html += `
      <div class="nb-cell" data-cell="${i}" style="margin-bottom:14px;border:1px solid #334155;border-radius:12px;overflow:hidden;background:#020617">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 12px;background:#1e293b;border-bottom:1px solid #334155">
          <span style="color:#a5b4fc;font-size:0.8rem;font-weight:700">In [${i + 1}]:</span>
          <div style="display:flex;gap:6px">
            <button type="button" onclick="runNotebookCell(${i})" style="background:#2563eb;color:#fff;border:none;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer">▶ Run</button>
            <button type="button" onclick="deleteNotebookCell(${i})" style="background:#334155;color:#fca5a5;border:none;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer" ${nbCells.length <= 1 ? "disabled" : ""}>✕</button>
          </div>
        </div>
        <textarea class="nb-cell-input" data-cell-index="${i}" rows="${Math.max(3, Math.min(12, (code || "").split("\n").length + 1))}"
          style="width:100%;background:#020617;color:#38bdf8;font-family:'Fira Code',Consolas,monospace;padding:12px 14px;border:none;font-size:0.92rem;line-height:1.55;resize:vertical;box-sizing:border-box;outline:none"
          placeholder="# Write Python code here...\n# Tab = indent (4 spaces)">${(code || "").replace(/</g, "<")}</textarea>
      </div>`;
  });

  html += `
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px;margin-bottom:8px">
      <button type="button" onclick="addNotebookCell()" style="background:#312e81;color:#c7d2fe;border:1px solid #6366f1;padding:8px 14px;border-radius:8px;cursor:pointer;font-size:0.85rem">➕ Add Cell</button>
      <button type="button" onclick="runAllNotebookCells()" class="btn-primary" style="background:#2563eb;padding:8px 16px;font-size:0.85rem">▶ Run All Cells</button>
      <button type="button" onclick="resetNotebookCells()" style="background:#334155;color:#e2e8f0;border:none;padding:8px 14px;border-radius:8px;cursor:pointer;font-size:0.85rem">🔄 Reset</button>
    </div>
    <p style="color:#64748b;font-size:0.78rem;margin:0 0 8px 0">💡 Tip: Use <b>Tab</b> for indent, <b>Shift+Tab</b> to un-indent. Cells are joined with blank lines automatically (like Jupyter).</p>
  `;

  host.innerHTML = html;

  // Attach Tab handlers + sync
  host.querySelectorAll(".nb-cell-input").forEach((ta) => {
    attachTabIndent(ta);
    // Keep anti-paste if available
    if (typeof attachAntiPasteProtection === "function") {
      attachAntiPasteProtection(ta);
    }
  });

  // Keep hidden pbCodeInput in sync for any old code that reads it
  const hidden = document.getElementById("pbCodeInput");
  if (hidden) hidden.value = getAllCellsCode();
}

function addNotebookCell() {
  // Sync current textareas first
  document.querySelectorAll(".nb-cell-input").forEach((ta) => {
    const idx = parseInt(ta.dataset.cellIndex, 10);
    if (!isNaN(idx)) nbCells[idx] = ta.value;
  });
  nbCells.push("");
  renderNotebookCells();
  // Focus last cell
  const inputs = document.querySelectorAll(".nb-cell-input");
  if (inputs.length) inputs[inputs.length - 1].focus();
}

function deleteNotebookCell(i) {
  if (nbCells.length <= 1) return;
  document.querySelectorAll(".nb-cell-input").forEach((ta) => {
    const idx = parseInt(ta.dataset.cellIndex, 10);
    if (!isNaN(idx)) nbCells[idx] = ta.value;
  });
  nbCells.splice(i, 1);
  renderNotebookCells();
}

async function runNotebookCell(i) {
  const ta = document.querySelector(`.nb-cell-input[data-cell-index="${i}"]`);
  if (ta) nbCells[i] = ta.value;
  const code = nbCells[i] || "";
  const outBox = document.getElementById("pbCodeOutput");
  if (!outBox) return;
  outBox.textContent = `⏳ Running cell [${i + 1}]...`;
  outBox.style.color = "#facc15";
  if (typeof runPython === "function") {
    const res = await runPython(code);
    outBox.textContent = `[Cell ${i + 1}]\n` + res;
    outBox.style.color = res && String(res).startsWith("❌") ? "#f87171" : "#4ade80";
  } else {
    outBox.textContent = "Python engine not ready. Wait a moment and try again.";
    outBox.style.color = "#f87171";
  }
}

async function runAllNotebookCells() {
  document.querySelectorAll(".nb-cell-input").forEach((ta) => {
    const idx = parseInt(ta.dataset.cellIndex, 10);
    if (!isNaN(idx)) nbCells[idx] = ta.value;
  });
  // Join with blank lines so indentation blocks stay separate and valid
  const code = getAllCellsCode();
  const outBox = document.getElementById("pbCodeOutput");
  if (!outBox) return;
  outBox.textContent = "⏳ Running all cells...";
  outBox.style.color = "#facc15";

  // Keep hidden input synced
  const hidden = document.getElementById("pbCodeInput");
  if (hidden) hidden.value = code;

  if (typeof runPython === "function") {
    const res = await runPython(code);
    outBox.textContent = res;
    outBox.style.color = res && String(res).startsWith("❌") ? "#f87171" : "#4ade80";

    // Award points if coding task completed (same as original executePBCodeModal logic)
    if (typeof currentModalCodeQuestion !== "undefined" && currentModalCodeQuestion && typeof addStudentPoints === "function") {
      if (res && !String(res).startsWith("❌")) {
        addStudentPoints(50, null, currentModalCodeQuestion.id);
      }
    }
  } else {
    outBox.textContent = "Python engine not ready. Wait a moment and try again.";
    outBox.style.color = "#f87171";
  }
}

function resetNotebookCells() {
  if (typeof currentModalCodeQuestion !== "undefined" && currentModalCodeQuestion) {
    const starter = currentModalCodeQuestion.starterCode || currentModalCodeQuestion.solution || "";
    nbCells = splitCodeIntoCells(starter);
  } else {
    nbCells = [""];
  }
  renderNotebookCells();
  const outBox = document.getElementById("pbCodeOutput");
  if (outBox) {
    outBox.textContent = "Code reset to starter template.";
    outBox.style.color = "#94a3b8";
  }
}

function injectNotebookHost() {
  // Replace the single textarea area with notebook host if modal exists
  const modal = document.getElementById("pbCodeModal");
  if (!modal) return;
  const oldInput = document.getElementById("pbCodeInput");
  if (!oldInput) return;
  // If already injected, skip
  if (document.getElementById("pbNotebookHost")) return;

  const parent = oldInput.parentNode;
  // Hide old textarea but keep it for compatibility
  oldInput.style.display = "none";
  oldInput.id = "pbCodeInput"; // keep id

  // Hide old run/reset row if present (we'll use cell toolbar)
  const oldBtns = parent.querySelectorAll("button");
  // Don't hide all buttons - only the ones next to the textarea in the old layout
  // Safer: insert host before textarea, leave old buttons but our Run All covers it

  const host = document.createElement("div");
  host.id = "pbNotebookHost";
  host.style.cssText = "margin-bottom:8px";
  parent.insertBefore(host, oldInput);

  // Update label
  const labels = parent.querySelectorAll("div");
  labels.forEach((d) => {
    if (d.textContent && d.textContent.includes("Write Python Code")) {
      d.innerHTML = '📓 Jupyter-style cells — write code below:';
    }
  });
}

// Override open / run / reset for Practice Book code modal
window.openPBCodeModal = function (qId) {
  const allCoding =
    typeof getAllPracticeBookCoding === "function" ? getAllPracticeBookCoding() : [];
  const q = allCoding.find((item) => item.id === qId);
  if (!q) return;

  window.currentModalCodeQuestion = q;
  currentModalCodeQuestion = q;

  const titleEl = document.getElementById("pbModalTitle");
  const descEl = document.getElementById("pbModalDesc");
  if (titleEl) titleEl.textContent = `Practice: ${q.id} (${q.marks} Marks)`;
  if (descEl) descEl.textContent = q.question;

  injectNotebookHost();

  const starter = q.starterCode || q.solution || "";
  nbCells = splitCodeIntoCells(starter);
  renderNotebookCells();

  const outBox = document.getElementById("pbCodeOutput");
  if (outBox) {
    outBox.textContent = "Click ▶ Run on a cell or Run All Cells to test output...";
    outBox.style.color = "#4ade80";
  }

  const modal = document.getElementById("pbCodeModal");
  if (modal) modal.style.display = "flex";
};

window.executePBCodeModal = function () {
  return runAllNotebookCells();
};

window.resetPBCodeModal = function () {
  resetNotebookCells();
};

window.closePBCodeModal = function () {
  const modal = document.getElementById("pbCodeModal");
  if (modal) modal.style.display = "none";
};

// Expose cell helpers globally
window.addNotebookCell = addNotebookCell;
window.deleteNotebookCell = deleteNotebookCell;
window.runNotebookCell = runNotebookCell;
window.runAllNotebookCells = runAllNotebookCells;
window.resetNotebookCells = resetNotebookCells;

// ============================================================
// INIT
// ============================================================
function initFixes() {
  rebuildLearningSidebar();
  normalizePracticeBookOptions();
  patchPBRender();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initFixes, 100);
  });
} else {
  setTimeout(initFixes, 100);
}

setTimeout(rebuildLearningSidebar, 500);
setTimeout(rebuildLearningSidebar, 1500);
setTimeout(normalizePracticeBookOptions, 300);
setTimeout(normalizePracticeBookOptions, 1000);
setTimeout(patchPBRender, 400);

console.log("✅ app-fixes.js v6 – Jupyter cells + MCQ options fix");
