/** UI boot – SEM-3 always works + helpers */
(function () {
  window.toggleSidebar = window.toggleSidebar || function () {
    document.body.classList.toggle("sidebar-open");
    var sb = document.getElementById("sidebar");
    if (sb) sb.classList.toggle("open");
  };
  window.closeSidebarOnMobile = window.closeSidebarOnMobile || function () {
    document.body.classList.remove("sidebar-open");
    var sb = document.getElementById("sidebar");
    if (sb) sb.classList.remove("open");
  };
  window.openWelcomeScreen = function () {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.remove("active");
      s.style.removeProperty("display");
    });
    var w = document.getElementById("welcomeScreen");
    if (w) { w.classList.add("active"); w.style.display = "block"; }
    closeSidebarOnMobile();
  };
  window.selectPythonSubject = function () {
    if (typeof openSem1PracticeBook === "function") openSem1PracticeBook();
    else if (typeof openPracticeBook === "function") openPracticeBook();
  };
  window.selectSESubject = function () {
    if (typeof openSEPracticeBook === "function") openSEPracticeBook();
  };
  window.openLearningPathNav = function () {
    if (typeof startLearning === "function") startLearning();
    else toggleSidebar();
  };
  window.showToast = window.showToast || function (msg) {
    var t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.hidden = false;
    t.textContent = msg;
    t.style.display = "block";
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(function () {
      t.style.display = "none";
      t.hidden = true;
    }, 2800);
  };
  window.refreshHomeProfile = function () {
    var el = document.getElementById("bwAvatar");
    var pts = document.getElementById("bwPoints");
    var name = document.getElementById("bwUserName");
    var st = window.currentStudent;
    if (st) {
      if (el) el.textContent = (st.name || "?").charAt(0).toUpperCase();
      if (name) name.textContent = (st.name || "Student").split(" ")[0];
      if (pts) pts.textContent = String(st.points || 0);
    }
  };

  function showSem3Screen() {
    window.pbActiveBook = "sem3";
    window.pbCurrentUnit = window.pbCurrentUnit || "all";
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
    closeSidebarOnMobile();
    if (typeof window.renderPracticeBookHub === "function") {
      window.renderPracticeBookHub();
    } else {
      var content = document.getElementById("stepContent");
      if (content) content.innerHTML = "<p style='padding:24px'>Loading SEM-3… hard refresh if stuck.</p>";
    }
  }

  window.openSem3PracticeBook = showSem3Screen;

  window.openSem1PracticeBook = function () {
    window.pbActiveBook = "sem1";
    window.pbCurrentUnit = "all";
    var w = document.getElementById("welcomeScreen");
    var c = document.getElementById("conceptScreen");
    if (w) { w.classList.remove("active"); w.style.removeProperty("display"); }
    if (c) { c.classList.add("active"); c.style.display = "block"; }
    var num = document.getElementById("conceptNumber");
    var title = document.getElementById("conceptTitle");
    if (num) num.textContent = "📘";
    if (title) title.textContent = "LJIET Practice Book – SEM-I";
    var tabs = document.getElementById("stepTabs"); if (tabs) tabs.style.display = "none";
    var nav = document.querySelector(".step-navigation"); if (nav) nav.style.display = "none";
    closeSidebarOnMobile();
    if (typeof window.renderPracticeBookHub === "function") window.renderPracticeBookHub();
    else if (typeof openPracticeBook === "function") openPracticeBook();
  };

  window.addEventListener("load", function () {
    setTimeout(function () {
      window.openSem3PracticeBook = showSem3Screen;
      if (typeof refreshHomeProfile === "function") refreshHomeProfile();
    }, 400);
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      if (typeof initStudentSession === "function") {
        Promise.resolve(initStudentSession()).then(function () { refreshHomeProfile(); });
      } else refreshHomeProfile();
    }, 500);
  });

  console.log("ui-boot ready");
})();
