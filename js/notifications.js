// ============================================================
// LJIET Learning Hub – Notifications
// Rank changes, MCQ solve, streak/challenge reminders
// ============================================================

const NOTIF_PREF_KEY = "ljiet_notif_enabled";
const NOTIF_RANK_KEY = "ljiet_last_rank_snapshot";
const NOTIF_LAST_REMINDER_KEY = "ljiet_last_mcq_reminder";

function notifEnabled() {
  try {
    const v = localStorage.getItem(NOTIF_PREF_KEY);
    if (v === null) return true;
    return v === "1";
  } catch (e) {
    return true;
  }
}

function setNotifEnabled(on) {
  try {
    localStorage.setItem(NOTIF_PREF_KEY, on ? "1" : "0");
  } catch (e) {}
}

function notifSupported() {
  return typeof window !== "undefined" && "Notification" in window;
}

async function ensureNotifPermission() {
  if (!notifSupported()) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  try {
    const res = await Notification.requestPermission();
    return res === "granted";
  } catch (e) {
    return false;
  }
}

async function showAppNotification(title, body, opts) {
  if (!notifEnabled()) return;
  const ok = await ensureNotifPermission();
  if (!ok) return;

  const options = Object.assign(
    {
      body: body || "",
      icon: "./icons/icon-192.png",
      badge: "./icons/icon-192.png",
      tag: (opts && opts.tag) || "ljiet-hub",
      renotify: !!(opts && opts.renotify),
      data: (opts && opts.data) || { url: "./index.html" },
      requireInteraction: !!(opts && opts.requireInteraction)
    },
    opts || {}
  );

  try {
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      const reg = await navigator.serviceWorker.ready;
      if (reg.showNotification) {
        await reg.showNotification(title, options);
        return;
      }
    }
  } catch (e) {
    console.warn("SW notification failed", e);
  }

  try {
    new Notification(title, options);
  } catch (e) {
    console.warn("Notification failed", e);
  }
}

function loadRankSnapshot() {
  try {
    return JSON.parse(localStorage.getItem(NOTIF_RANK_KEY) || "null");
  } catch (e) {
    return null;
  }
}

function saveRankSnapshot(snap) {
  try {
    localStorage.setItem(NOTIF_RANK_KEY, JSON.stringify(snap));
  } catch (e) {}
}

async function checkAndNotifyRank(list, me) {
  if (!me || !me.enrollment || !Array.isArray(list) || list.length === 0) return;

  const sorted = list
    .slice()
    .sort((a, b) => (b.points || 0) - (a.points || 0));
  const myIdx = sorted.findIndex((x) => x.enrollment === me.enrollment);
  if (myIdx < 0) return;

  const myRank = myIdx + 1;
  const myPoints = sorted[myIdx].points || 0;
  const prev = loadRankSnapshot();

  let ahead = null;
  if (myIdx > 0) {
    ahead = sorted[myIdx - 1];
  }

  const snap = {
    rank: myRank,
    points: myPoints,
    aheadEnrollment: ahead ? ahead.enrollment : null,
    aheadName: ahead ? ahead.name : null,
    aheadPoints: ahead ? ahead.points || 0 : null,
    ts: Date.now()
  };

  if (!prev) {
    saveRankSnapshot(snap);
    return;
  }

  if (myRank < prev.rank) {
    await showAppNotification(
      "🏆 Rank up! You are #" + myRank,
      "Great work — you moved from #" + prev.rank + " to #" + myRank + " with " + myPoints + " pts.",
      { tag: "ljiet-rank-up", renotify: true, data: { url: "./index.html", action: "leaderboard" } }
    );
  } else if (myRank > prev.rank) {
    const gapMsg = ahead
      ? ahead.name + " is ahead of you with " + (ahead.points || 0) + " pts."
      : "Keep solving to climb back.";
    await showAppNotification(
      "📉 Your rank is now #" + myRank,
      gapMsg + " You have " + myPoints + " pts.",
      { tag: "ljiet-rank-down", renotify: true, data: { url: "./index.html", action: "leaderboard" } }
    );
  } else if (ahead && prev.aheadEnrollment && ahead.enrollment !== prev.aheadEnrollment) {
    await showAppNotification(
      "⚡ " + ahead.name + " is ahead of you",
      "They have " + (ahead.points || 0) + " pts · You are #" + myRank + " with " + myPoints + " pts.",
      { tag: "ljiet-ahead", renotify: true, data: { url: "./index.html", action: "leaderboard" } }
    );
  } else if (
    ahead &&
    prev.aheadEnrollment === ahead.enrollment &&
    typeof prev.aheadPoints === "number" &&
    (ahead.points || 0) - prev.aheadPoints >= 20 &&
    (ahead.points || 0) > myPoints
  ) {
    const gap = (ahead.points || 0) - myPoints;
    await showAppNotification(
      "👀 " + ahead.name + " pulled ahead",
      "Gap is now " + gap + " points. Solve a few MCQs to catch up!",
      { tag: "ljiet-gap", renotify: true, data: { url: "./index.html", action: "leaderboard" } }
    );
  }

  saveRankSnapshot(snap);
}

async function notifyMcqSolved(pts, extra) {
  if (!pts) return;
  if (document.visibilityState === "visible") return;
  await showAppNotification(
    "✅ +" + pts + " points!",
    (extra && extra.message) || "MCQ solved on LJIET Learning Hub. Keep going!",
    { tag: "ljiet-mcq", renotify: false }
  );
}

async function notifyChallenge(title, body) {
  await showAppNotification(title || "🎯 Challenge time!", body || "A new challenge is live. Open LJIET Learning Hub.", {
    tag: "ljiet-challenge",
    renotify: true,
    requireInteraction: true,
    data: { url: "./index.html", action: "challenge" }
  });
}

async function maybeDailyMcqReminder() {
  if (!notifEnabled()) return;
  if (Notification.permission !== "granted") return;

  const today = new Date();
  const key =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  try {
    if (localStorage.getItem(NOTIF_LAST_REMINDER_KEY) === key) return;
  } catch (e) {}

  const hour = today.getHours();
  const student = typeof getLocalStudentData === "function" ? getLocalStudentData() : null;
  const lastStreak = student && student.lastStreakDate;
  const inactiveToday = !lastStreak || lastStreak !== key;

  if (inactiveToday && (hour >= 10 || hour <= 1)) {
    await showAppNotification(
      "📘 Time to solve MCQs",
      inactiveToday
        ? "Protect your streak 🔥 — solve a few Python or SE questions now."
        : "Quick practice on LJIET Learning Hub keeps your rank strong.",
      { tag: "ljiet-daily", renotify: true, data: { url: "./index.html", action: "practice" } }
    );
    try {
      localStorage.setItem(NOTIF_LAST_REMINDER_KEY, key);
    } catch (e) {}
  }
}

function showNotifSoftPrompt() {
  if (!notifSupported()) return;
  if (Notification.permission !== "default") return;
  if (document.getElementById("ljietNotifPrompt")) return;
  try {
    if (sessionStorage.getItem("ljiet_notif_prompt_shown")) return;
    sessionStorage.setItem("ljiet_notif_prompt_shown", "1");
  } catch (e) {}

  const div = document.createElement("div");
  div.id = "ljietNotifPrompt";
  div.style.cssText =
    "position:fixed;bottom:80px;left:12px;right:12px;max-width:420px;margin:0 auto;z-index:250;" +
    "background:#1e293b;border:1px solid #6366f1;border-radius:14px;padding:14px 16px;" +
    "box-shadow:0 10px 40px rgba(0,0,0,0.5);color:#e2e8f0;font-size:0.9rem;";
  div.innerHTML =
    '<div style="font-weight:700;color:#a5b4fc;margin-bottom:6px">🔔 Rank & challenge alerts</div>' +
    '<div style="color:#94a3b8;margin-bottom:12px;line-height:1.4">Get notified when your rank changes, someone is ahead, or it is time to solve MCQs.</div>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    '<button type="button" id="ljietNotifAllow" class="btn-primary small" style="flex:1;min-width:120px">Allow</button>' +
    '<button type="button" id="ljietNotifLater" class="btn-secondary small" style="flex:1;min-width:100px">Later</button>' +
    "</div>";
  document.body.appendChild(div);

  document.getElementById("ljietNotifAllow").onclick = async function () {
    const ok = await ensureNotifPermission();
    setNotifEnabled(!!ok);
    div.remove();
    if (ok && typeof showToast === "function") {
      showToast("Notifications on — rank & MCQ alerts enabled 🔔");
    }
  };
  document.getElementById("ljietNotifLater").onclick = function () {
    div.remove();
  };
}

function wrapPointsForNotif() {
  if (typeof window.addStudentPoints !== "function") return;
  if (window.addStudentPoints._ljietNotifWrapped) return;
  const original = window.addStudentPoints;
  window.addStudentPoints = function (pts, mcqId, codeId) {
    const result = original.apply(this, arguments);
    try {
      if (pts && mcqId) notifyMcqSolved(pts, { message: "Keep solving to climb the leaderboard." });
      setTimeout(function () {
        refreshRankAndNotify();
      }, 1500);
    } catch (e) {}
    return result;
  };
  window.addStudentPoints._ljietNotifWrapped = true;
}

async function refreshRankAndNotify() {
  try {
    const me = typeof getLocalStudentData === "function" ? getLocalStudentData() : null;
    if (!me) return;
    let list = [];
    if (typeof fetchCloudLeaderboard === "function") {
      list = (await fetchCloudLeaderboard()) || [];
    }
    if (!list.length && typeof getCombinedLocalLeaderboard === "function") {
      list = getCombinedLocalLeaderboard() || [];
    }
    if (me.enrollment && !list.find(function (x) {
      return x.enrollment === me.enrollment;
    })) {
      list.push({
        enrollment: me.enrollment,
        name: me.name,
        points: me.points || 0,
        mcqsSolved: me.mcqsSolved || 0,
        codeCompleted: me.codeCompleted || 0
      });
    }
    await checkAndNotifyRank(list, me);
  } catch (e) {
    console.warn("rank notify", e);
  }
}

function wrapLeaderboardRender() {
  if (typeof window.renderLiveLeaderboard !== "function") return;
  if (window.renderLiveLeaderboard._ljietNotifWrapped) return;
  const original = window.renderLiveLeaderboard;
  window.renderLiveLeaderboard = async function () {
    const result = await original.apply(this, arguments);
    try {
      setTimeout(function () {
        refreshRankAndNotify();
      }, 800);
    } catch (e) {}
    return result;
  };
  window.renderLiveLeaderboard._ljietNotifWrapped = true;
}

window.notifyLJIETChallenge = function (title, body) {
  return notifyChallenge(title, body);
};

window.ljietRequestNotifications = async function () {
  const ok = await ensureNotifPermission();
  setNotifEnabled(!!ok);
  if (ok && typeof showToast === "function") showToast("Notifications enabled 🔔");
  return ok;
};

function initNotifications() {
  if (!notifSupported()) return;
  wrapPointsForNotif();
  wrapLeaderboardRender();

  setTimeout(function () {
    if (Notification.permission === "default") showNotifSoftPrompt();
  }, 4000);

  setTimeout(function () {
    refreshRankAndNotify();
    maybeDailyMcqReminder();
  }, 5000);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      setTimeout(refreshRankAndNotify, 1000);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(initNotifications, 600);
  });
} else {
  setTimeout(initNotifications, 600);
}

console.log("✅ notifications.js ready");
