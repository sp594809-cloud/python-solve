// ============================================================
// BUG FIXES - loaded after app.js (overrides broken functions)
// - Daily Mission opens the real task (not only toast)
// - Learn path shows concept screen + step tabs correctly
// - Sidebar closes on mobile after navigation
// ============================================================

function openDailyMission() {
  const m = getDailyMission();
  const welcome = document.getElementById("welcomeScreen");
  const concept = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (concept) concept.classList.add("active");
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
  showToast("🎯 " + m.text);
  try {
    m.action();
  } catch (e) {
    console.warn("Daily mission error:", e);
    if (typeof openPracticeBook === "function") openPracticeBook();
  }
}

function openConcept(index) {
  currentConceptIndex = index;
  currentStep = "why";

  // Always show concept screen (fixes glitch after Practice Book / Home)
  const welcome = document.getElementById("welcomeScreen");
  const conceptScreen = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (conceptScreen) conceptScreen.classList.add("active");

  // Show step tabs again (hidden by Practice Book / Leaderboard)
  const tabs = document.getElementById("stepTabs");
  const nav = document.querySelector(".step-navigation");
  if (tabs) tabs.style.display = "flex";
  if (nav) nav.style.display = "flex";

  // Sidebar active state (only #conceptList items)
  document.querySelectorAll("#conceptList li").forEach((li) => li.classList.remove("active"));
  const items = document.querySelectorAll("#conceptList li");
  if (items[index + 1]) items[index + 1].classList.add("active");

  if (typeof CONCEPTS === "undefined" || !CONCEPTS[index]) return;
  const concept = CONCEPTS[index];
  const numEl = document.getElementById("conceptNumber");
  const titleEl = document.getElementById("conceptTitle");
  if (numEl) numEl.textContent = concept.number;
  if (titleEl) titleEl.textContent = concept.title;

  document.querySelectorAll(".step-tab").forEach((t) => t.classList.remove("active"));
  const whyTab = document.querySelector('.step-tab[data-step="why"]');
  if (whyTab) whyTab.classList.add("active");

  if (typeof renderStep === "function") renderStep();
  if (typeof updateStepIndicator === "function") updateStepIndicator();
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
}

function openPracticeBook() {
  const welcome = document.getElementById("welcomeScreen");
  const concept = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (concept) concept.classList.add("active");

  const numEl = document.getElementById("conceptNumber");
  const titleEl = document.getElementById("conceptTitle");
  if (numEl) numEl.textContent = "📘";
  if (titleEl) titleEl.textContent = "LJIET Practice Book – Digital Practice & Code Hub";

  const tabs = document.getElementById("stepTabs");
  const nav = document.querySelector(".step-navigation");
  if (tabs) tabs.style.display = "none";
  if (nav) nav.style.display = "none";

  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();
  if (typeof renderPracticeBookHub === "function") renderPracticeBookHub();
}

function startLearning() {
  const welcome = document.getElementById("welcomeScreen");
  const concept = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (concept) concept.classList.add("active");
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();

  const p = loadProgress();
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
  const welcome = document.getElementById("welcomeScreen");
  const concept = document.getElementById("conceptScreen");
  if (welcome) welcome.classList.remove("active");
  if (concept) concept.classList.add("active");

  const numEl = document.getElementById("conceptNumber");
  const titleEl = document.getElementById("conceptTitle");
  if (numEl) numEl.textContent = "🧠";
  if (titleEl) titleEl.textContent = "Think Lab – Pure Problem Solving";

  const tabs = document.getElementById("stepTabs");
  const nav = document.querySelector(".step-navigation");
  if (tabs) tabs.style.display = "none";
  if (nav) nav.style.display = "none";
  if (typeof closeSidebarOnMobile === "function") closeSidebarOnMobile();

  // Keep original Think Lab rendering if present
  const content = document.getElementById("stepContent");
  if (!content || typeof THINK_LAB === "undefined") return;

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

// Safer sidebar build
const _origBuildSidebar = typeof buildSidebar === "function" ? buildSidebar : null;
function buildSidebar() {
  const list = document.getElementById("conceptList");
  if (!list) return;
  if (_origBuildSidebar) {
    try {
      _origBuildSidebar();
      return;
    } catch (e) {
      console.warn("buildSidebar fallback", e);
    }
  }
  list.innerHTML = "";
  const p = loadProgress();
  const thinkLi = document.createElement("li");
  thinkLi.innerHTML = `🧠 Think Lab`;
  thinkLi.onclick = () => openThinkLab();
  list.appendChild(thinkLi);
  if (typeof CONCEPTS === "undefined") return;
  CONCEPTS.forEach((c, i) => {
    const li = document.createElement("li");
    const done = p.completed && p.completed[c.id];
    li.innerHTML = `${done ? "✅ " : ""}${c.number}  ${c.title.split("–")[0].trim()}`;
    li.onclick = () => openConcept(i);
    if (done) li.classList.add("completed");
    list.appendChild(li);
  });
}

console.log("✅ app-fixes.js loaded – Daily Mission + Learn UI fixed");
