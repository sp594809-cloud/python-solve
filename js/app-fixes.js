// ============================================================
// BUG FIXES (loaded AFTER app.js)
// 1. Learn modules open DIRECTLY from sidebar (even from Home)
// 2. Daily Mission opens the real task
// 3. Step tabs show/hide correctly
// ============================================================

function showConceptScreen() {
  const welcome = document.getElementById("welcomeScreen");
  const concept = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (concept) {
    concept.classList.add("active");
    concept.style.display = "block";
  }
  if (welcome) welcome.style.display = "none";
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
      console.warn("openConcept: invalid index", index);
      showToast("Concept not found");
      return;
    }

    currentConceptIndex = index;
    currentStep = "why";

    // CRITICAL: switch from Home/Practice to concept screen
    showConceptScreen();
    showStepTabs(true);

    // Mark active in learning list only
    document.querySelectorAll("#conceptList li").forEach((li) => li.classList.remove("active"));
    const items = document.querySelectorAll("#conceptList li");
    // items[0] = Think Lab, items[1] = first concept ...
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
    if (typeof updateStepIndicator === "function") updateStepIndicator();

    if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();

    // Scroll main content to top on mobile
    const main = document.getElementById("mainContent");
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
  } catch (err) {
    console.error("openConcept error:", err);
    showToast("Could not open concept – try again");
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
    console.error("openPracticeBook error:", err);
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
  showToast("🎯 " + m.text);
  try {
    m.action();
  } catch (e) {
    console.warn("Daily mission error:", e);
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

// Rebuild sidebar with correct handlers (runs after override)
function rebuildLearningSidebar() {
  const list = document.getElementById("conceptList");
  if (!list || typeof CONCEPTS === "undefined") return;

  const p = typeof loadProgress === "function" ? loadProgress() : { completed: {} };
  list.innerHTML = "";

  const thinkLi = document.createElement("li");
  thinkLi.textContent = "🧠 Think Lab";
  thinkLi.style.cursor = "pointer";
  thinkLi.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    openThinkLab();
  });
  list.appendChild(thinkLi);

  CONCEPTS.forEach((c, i) => {
    const li = document.createElement("li");
    const done = p.completed && p.completed[c.id];
    li.innerHTML = (done ? "✅ " : "") + c.number + "  " + c.title.split("–")[0].trim();
    li.style.cursor = "pointer";
    if (done) li.classList.add("completed");
    li.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openConcept(i);
    });
    list.appendChild(li);
  });
}

// Run after DOM + after original buildSidebar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(rebuildLearningSidebar, 50);
  });
} else {
  setTimeout(rebuildLearningSidebar, 50);
}

console.log("✅ app-fixes.js loaded – Learn opens directly from Home");
