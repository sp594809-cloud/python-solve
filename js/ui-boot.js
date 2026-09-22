/** UI boot – fix missing handlers so buttons work */
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
  window.openWelcomeScreen = window.openWelcomeScreen || function () {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.remove("active");
      s.style.removeProperty("display");
    });
    var w = document.getElementById("welcomeScreen");
    if (w) { w.classList.add("active"); w.style.display = "block"; }
    closeSidebarOnMobile();
  };
  window.selectPythonSubject = window.selectPythonSubject || function () {
    if (typeof openSem1PracticeBook === "function") openSem1PracticeBook();
    else if (typeof openPracticeBook === "function") openPracticeBook();
  };
  window.selectSESubject = window.selectSESubject || function () {
    if (typeof openSEPracticeBook === "function") openSEPracticeBook();
  };
  window.openLearningPathNav = window.openLearningPathNav || function () {
    if (typeof startLearning === "function") startLearning();
    else toggleSidebar();
  };
  window.handleInstallClick = window.handleInstallClick || function () {
    if (window.deferredPrompt) window.deferredPrompt.prompt();
    else if (typeof showToast === "function") showToast("Use browser menu → Install app");
    else alert("Use browser menu → Install app / Add to Home Screen");
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
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      if (typeof initStudentSession === "function") {
        Promise.resolve(initStudentSession()).then(function () { refreshHomeProfile(); });
      } else refreshHomeProfile();
    }, 500);
  });
  console.log("ui-boot ready");
})();
