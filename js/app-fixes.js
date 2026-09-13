// ============================================================
// BUG FIXES (loaded AFTER app.js)
// Learn modules open DIRECTLY from Home/sidebar
// ============================================================

function showConceptScreen() {
  // Clear ALL screens then show concept
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
    s.style.removeProperty("display");
  });
  const concept = document.getElementById("conceptScreen");
  if (concept) {
    concept.classList.add("active");
  }
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
  if (tabs) {
    tabs.style.display = show ? "flex" : "none";
  }
  if (nav) {
    nav.style.display = show ? "flex" : "none";
  }
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

    // Switch to concept screen IMMEDIATELY (works from Home)
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

    if (typeof renderStep === "function") {
      renderStep();
    } else {
      console.error("renderStep missing");
    }
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
    // Capture index in closure
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

// Override home button to clear inline styles
window.openWelcomeScreen = function () {
  showWelcomeScreenFixed();
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
};

// Build sidebar after everything is ready
function initFixes() {
  rebuildLearningSidebar();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initFixes, 100);
  });
} else {
  setTimeout(initFixes, 100);
}

// Also rebuild after a short delay in case CONCEPTS loads late
setTimeout(rebuildLearningSidebar, 500);
setTimeout(rebuildLearningSidebar, 1500);

console.log("✅ app-fixes.js v4 – Learn opens from Home directly");
