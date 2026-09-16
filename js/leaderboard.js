// ============================================================
// STUDENT AUTHENTICATION, LEADERBOARD & ANTI-PASTE ENGINE
// Login: Mobile + Name | Permanent Account ID | Name lock
// ============================================================

let currentStudent = null;

async function initStudentSession() {
  currentStudent = getLocalStudentData();

  if (!currentStudent) {
    showLoginModal();
    return;
  }

  try {
    const cloud = await fetchStudentFromCloud(currentStudent.enrollment);
    if (cloud) {
      currentStudent.points = Math.max(currentStudent.points || 0, cloud.points || 0);
      currentStudent.mcqsSolved = Math.max(currentStudent.mcqsSolved || 0, cloud.mcqsSolved || 0);
      currentStudent.codeCompleted = Math.max(currentStudent.codeCompleted || 0, cloud.codeCompleted || 0);
      if (cloud.name && cloud.name.trim()) {
        currentStudent.name = cloud.name;
      }
      if (cloud.accountId) {
        currentStudent.accountId = cloud.accountId;
      } else if (!currentStudent.accountId && typeof generateAccountId === "function") {
        currentStudent.accountId = generateAccountId();
      }
      saveLocalStudentData(currentStudent);
    }
  } catch (e) {
    console.warn("Could not refresh student from cloud", e);
  }

  updateTopNavStudentInfo();
  try { checkAndUpdateStreak("session"); } catch (e) { console.warn(e); }
}

function showLoginModal() {
  let modal = document.getElementById("studentLoginModal");
  if (!modal) {
    const div = document.createElement("div");
    div.id = "studentLoginModal";
    div.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(12px);
      z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;
    `;
    div.innerHTML = `
      <div style="background: #0f172a; border: 1px solid #6366f1; border-radius: 20px; width: 100%; max-width: 480px; padding: 28px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8); text-align: center">
        <div style="font-size: 2.8rem; margin-bottom: 10px">🐍</div>
        <h2 style="color: #f8fafc; font-size: 1.5rem; margin-bottom: 6px">LJIET Python Hub Login</h2>
        <p style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 22px">
          Enter your Mobile Number & Name. You get a permanent Account ID.
        </p>
        <form onsubmit="handleStudentLogin(event)">
          <div style="text-align: left; margin-bottom: 14px">
            <label style="color: #c7d2fe; font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px">Mobile Number <span style="color:#f87171">*</span></label>
            <input type="tel" id="loginMobile" required
                   placeholder="e.g. 9876543210"
                   maxlength="10" minlength="10" pattern="[0-9]{10}" inputmode="numeric"
                   style="width: 100%; padding: 12px 16px; background: #020617; border: 1px solid #334155; border-radius: 10px; color: #f8fafc; font-size: 1rem; font-family: inherit; letter-spacing: 1px" />
            <div id="mobileError" style="color:#f87171; font-size:0.78rem; margin-top:5px; display:none">Mobile number must be exactly 10 digits.</div>
          </div>
          <div style="text-align: left; margin-bottom: 22px">
            <label style="color: #c7d2fe; font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px">Student Full Name</label>
            <input type="text" id="loginName" required placeholder="e.g. Rahul Sharma" style="width: 100%; padding: 12px 16px; background: #020617; border: 1px solid #334155; border-radius: 10px; color: #f8fafc; font-size: 1rem; font-family: inherit" />
          </div>
          <button type="submit" class="btn-primary" style="width: 100%; padding: 13px; font-size: 1.05rem; font-weight: 700; background: linear-gradient(135deg, #4f46e5, #2563eb); border: none; border-radius: 10px; cursor: pointer">
            🚀 Enter LJIET Learning Hub
          </button>
        </form>
      </div>
    `;
    document.body.appendChild(div);
    const mobileInput = document.getElementById("loginMobile");
    mobileInput.addEventListener("input", function() {
      this.value = this.value.replace(/\D/g, '').slice(0, 10);
      const val = this.value.trim();
      const err = document.getElementById("mobileError");
      if (val.length > 0 && val.length !== 10) {
        err.style.display = "block";
        this.style.borderColor = "#ef4444";
      } else {
        err.style.display = "none";
        this.style.borderColor = "#334155";
      }
    });
  } else {
    modal.style.display = "flex";
  }
}

async function handleStudentLogin(e) {
  e.preventDefault();
  const mobile = document.getElementById("loginMobile").value.trim();
  const name = document.getElementById("loginName").value.trim();
  if (!mobile || !name) return;
  if (!/^[0-9]{10}$/.test(mobile)) {
    const err = document.getElementById("mobileError");
    if (err) err.style.display = "block";
    document.getElementById("loginMobile").style.borderColor = "#ef4444";
    showToast("Mobile number must be exactly 10 digits!");
    return;
  }
  const btn = e.target.querySelector('button[type="submit"]');
  const originalBtnText = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = '⏳ Restoring progress…'; }
  try {
    const localExisting = getLocalStudentData();
    const cloudExisting = await fetchStudentFromCloud(mobile);
    let base = {
      enrollment: mobile,
      name: name,
      accountId: null,
      points: 0,
      mcqsSolved: 0,
      codeCompleted: 0,
      solvedMcqIds: [],
      completedCodeIds: [],
      streak: 0,
      lastStreakDate: null,
      longestStreak: 0
    };
    if (localExisting && localExisting.enrollment === mobile) {
      base.points = localExisting.points || 0;
      base.mcqsSolved = localExisting.mcqsSolved || 0;
      base.codeCompleted = localExisting.codeCompleted || 0;
      base.solvedMcqIds = localExisting.solvedMcqIds || [];
      base.completedCodeIds = localExisting.completedCodeIds || [];
      base.streak = localExisting.streak || 0;
      base.lastStreakDate = localExisting.lastStreakDate || null;
      base.longestStreak = localExisting.longestStreak || 0;
      base.accountId = localExisting.accountId || null;
      if (localExisting.name) base.name = localExisting.name;
    }
    if (cloudExisting) {
      base.points = Math.max(base.points, cloudExisting.points || 0);
      base.mcqsSolved = Math.max(base.mcqsSolved, cloudExisting.mcqsSolved || 0);
      base.codeCompleted = Math.max(base.codeCompleted, cloudExisting.codeCompleted || 0);
      // NAME LOCK: existing cloud name always wins
      if (cloudExisting.name && cloudExisting.name.trim()) {
        base.name = cloudExisting.name.trim();
      }
      if (cloudExisting.accountId) {
        base.accountId = cloudExisting.accountId;
      }
    }
    if (!base.accountId && typeof generateAccountId === "function") {
      base.accountId = generateAccountId();
    }
    currentStudent = base;
    await syncStudentToCloud(currentStudent);
    updateTopNavStudentInfo();
    const modal = document.getElementById("studentLoginModal");
    if (modal) modal.style.display = "none";
    const ptsMsg = currentStudent.points > 0 ? ` Restored ${currentStudent.points} points from previous device.` : '';
    const idMsg = currentStudent.accountId ? ` Account ID: ${currentStudent.accountId}` : '';
    showToast(`Welcome ${currentStudent.name}!${idMsg}${ptsMsg} 🎉`);
    try { checkAndUpdateStreak("login"); } catch (e) {}
  } catch (err) {
    console.error("Login error:", err);
    showToast("Login issue – using local data. Check internet.");
    currentStudent = {
      enrollment: mobile, name,
      accountId: (typeof generateAccountId === "function" ? generateAccountId() : null),
      points: (getLocalStudentData()?.enrollment === mobile ? (getLocalStudentData().points || 0) : 0),
      mcqsSolved: 0, codeCompleted: 0, solvedMcqIds: [], completedCodeIds: [],
      streak: 0, lastStreakDate: null, longestStreak: 0
    };
    saveLocalStudentData(currentStudent);
    updateTopNavStudentInfo();
    const modal = document.getElementById("studentLoginModal");
    if (modal) modal.style.display = "none";
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = originalBtnText; }
  }
}

const STREAK_DAILY_POINTS = 5;
const STREAK_WEEKLY_BONUS = 15;

function todayDateKey() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function yesterdayDateKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function checkAndUpdateStreak(reason) {
  if (!currentStudent) return null;
  const today = todayDateKey();
  const yesterday = yesterdayDateKey();
  let streak = currentStudent.streak || 0;
  const last = currentStudent.lastStreakDate || null;
  let awarded = 0;
  let bonus = 0;

  if (last === today) {
    return { streak: streak || 1, awarded: 0, bonus: 0, alreadyToday: true };
  }
  if (last === yesterday) {
    streak = (streak || 0) + 1;
  } else if (!last) {
    streak = 1;
  } else {
    streak = 1;
  }

  currentStudent.streak = streak;
  currentStudent.lastStreakDate = today;
  currentStudent.longestStreak = Math.max(currentStudent.longestStreak || 0, streak);

  awarded = STREAK_DAILY_POINTS;
  currentStudent.points = (currentStudent.points || 0) + awarded;
  if (streak > 0 && streak % 7 === 0) {
    bonus = STREAK_WEEKLY_BONUS;
    currentStudent.points = (currentStudent.points || 0) + bonus;
  }

  saveLocalStudentData(currentStudent);
  if (typeof syncStudentToCloud === "function") syncStudentToCloud(currentStudent);
  updateTopNavStudentInfo();

  if (bonus > 0 && typeof showToast === "function") {
    showToast("🔥 " + streak + "-day streak! +" + awarded + " pts + " + bonus + " week bonus!");
  } else if (awarded > 0 && typeof showToast === "function") {
    showToast("🔥 Day " + streak + " streak! +" + awarded + " points");
  }
  return { streak, awarded, bonus, alreadyToday: false };
}

function updateTopNavStudentInfo() {
  if (!currentStudent) return;
  const navContainer = document.querySelector(".top-nav");
  if (!navContainer) return;
  let infoBadge = document.getElementById("navStudentBadge");
  if (!infoBadge) {
    infoBadge = document.createElement("div");
    infoBadge.id = "navStudentBadge";
    infoBadge.style.cssText = "display: flex; align-items: center; gap: 8px; background: #1e1b4b; border: 1px solid #4338ca; padding: 4px 10px; border-radius: 99px; cursor: pointer; font-size:0.8rem;";
    infoBadge.onclick = openStudentProfileModal;
    navContainer.appendChild(infoBadge);
  }
  const streak = currentStudent.streak || 0;
  const streakHtml = streak > 0
    ? "<span style=\"color:#fb923c; font-weight:800\" title=\"Daily streak\">🔥 " + streak + "</span>"
    : "";
  infoBadge.title = currentStudent.accountId ? ("Account ID: " + currentStudent.accountId) : "Student profile";
  infoBadge.innerHTML =
    "<span style=\"color:#c7d2fe; font-weight:700\">👤 " + currentStudent.name.split(" ")[0] + "</span>" +
    streakHtml +
    "<span style=\"color:#facc15; font-weight:800\">⭐ " + (currentStudent.points || 0) + "</span>";
}

function addStudentPoints(pts, mcqId = null, codeId = null) {
  if (!currentStudent) {
    showLoginModal();
    return;
  }
  if (mcqId) {
    if (!currentStudent.solvedMcqIds) currentStudent.solvedMcqIds = [];
    if (!currentStudent.solvedMcqIds.includes(mcqId)) {
      currentStudent.solvedMcqIds.push(mcqId);
      currentStudent.mcqsSolved = (currentStudent.mcqsSolved || 0) + 1;
      currentStudent.points = (currentStudent.points || 0) + pts;
      showToast("+" + pts + " Points earned! 🎯");
    }
  } else if (codeId) {
    if (!currentStudent.completedCodeIds) currentStudent.completedCodeIds = [];
    if (!currentStudent.completedCodeIds.includes(codeId)) {
      currentStudent.completedCodeIds.push(codeId);
      currentStudent.codeCompleted = (currentStudent.codeCompleted || 0) + 1;
      currentStudent.points = (currentStudent.points || 0) + pts;
      showToast("🎉 Coding Task Completed! +" + pts + " Points!");
    }
  } else {
    currentStudent.points = (currentStudent.points || 0) + pts;
    showToast("+" + pts + " Points earned!");
  }
  try { checkAndUpdateStreak("solve"); } catch (e) {}
  syncStudentToCloud(currentStudent);
  updateTopNavStudentInfo();
}

async function renderLiveLeaderboard() {
  const content = document.getElementById("stepContent");
  if (!content) return;
  content.innerHTML = `
    <div style="background: linear-gradient(135deg, #1e1b4b, #0f172a); border: 1px solid #4338ca; border-radius: 16px; padding: 20px; margin-bottom: 20px">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px">
        <div>
          <h2 style="color: #c7d2fe; font-size: 1.35rem; margin-bottom: 4px">🏆 LJIET Class Leaderboard</h2>
          <p style="color: #94a3b8; font-size: 0.88rem">Real-time rankings · Open daily for 🔥 streak points</p>
        </div>
        <button onclick="renderLiveLeaderboard()" class="btn-primary" style="background:#2563eb; font-size:0.82rem; padding:8px 16px">🔄 Refresh</button>
      </div>
    </div>
    <div style="background: #0f172a; border: 1px solid #334155; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5)">
      <div id="leaderboardLoading" style="padding: 40px; text-align: center; color: #94a3b8">⏳ Loading rankings...</div>
      <div id="leaderboardTableBox" style="display:none; overflow-x:auto">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width: 600px">
          <thead>
            <tr style="background: #1e293b; color: #a5b4fc; border-bottom: 1px solid #334155">
              <th style="padding: 12px 14px; width: 70px">Rank</th>
              <th style="padding: 12px 14px">Name</th>
              <th style="padding: 12px 14px">Mobile Number</th>
              <th style="padding: 12px 14px; text-align: center">MCQs</th>
              <th style="padding: 12px 14px; text-align: center">Code</th>
              <th style="padding: 12px 14px; text-align: right">Points</th>
            </tr>
          </thead>
          <tbody id="leaderboardBody"></tbody>
        </table>
      </div>
    </div>`;

  let list = await fetchCloudLeaderboard();
  if (currentStudent && currentStudent.enrollment) {
    const meIdx = list.findIndex(i => i.enrollment === currentStudent.enrollment);
    if (meIdx === -1) {
      list.push({
        enrollment: currentStudent.enrollment,
        name: currentStudent.name,
        points: currentStudent.points || 0,
        mcqsSolved: currentStudent.mcqsSolved || 0,
        codeCompleted: currentStudent.codeCompleted || 0
      });
    } else {
      list[meIdx].points = Math.max(list[meIdx].points || 0, currentStudent.points || 0);
      list[meIdx].mcqsSolved = Math.max(list[meIdx].mcqsSolved || 0, currentStudent.mcqsSolved || 0);
      list[meIdx].codeCompleted = Math.max(list[meIdx].codeCompleted || 0, currentStudent.codeCompleted || 0);
    }
    list.sort((a, b) => (b.points || 0) - (a.points || 0));
    list = list.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }

  const loading = document.getElementById("leaderboardLoading");
  const box = document.getElementById("leaderboardTableBox");
  const body = document.getElementById("leaderboardBody");
  if (!loading || !box || !body) return;
  loading.style.display = "none";
  box.style.display = "block";

  let html = "";
  list.forEach((item) => {
    const isMe = currentStudent && currentStudent.enrollment === item.enrollment;
    let rankBadge = "#" + item.rank;
    if (item.rank === 1) rankBadge = "🥇 #1";
    else if (item.rank === 2) rankBadge = "🥈 #2";
    else if (item.rank === 3) rankBadge = "🥉 #3";
    html += `<tr style="border-bottom: 1px solid #1e293b; ${isMe ? 'background: rgba(99, 102, 241, 0.15);' : ''}">
      <td style="padding: 12px 14px; font-weight: 800; color: ${item.rank <= 3 ? '#facc15' : '#94a3b8'}">${rankBadge}</td>
      <td style="padding: 12px 14px; font-weight: 700; color: #f8fafc">
        ${item.name} ${isMe ? '<span style="font-size:0.7rem; background:#4f46e5; color:#fff; padding:2px 6px; border-radius:4px; margin-left:4px">YOU</span>' : ''}
      </td>
      <td style="padding: 12px 14px; color: #94a3b8; font-family: monospace; font-size:0.85rem">${item.enrollment}</td>
      <td style="padding: 12px 14px; text-align: center; color: #38bdf8">${item.mcqsSolved}</td>
      <td style="padding: 12px 14px; text-align: center; color: #4ade80">${item.codeCompleted}</td>
      <td style="padding: 12px 14px; text-align: right; font-weight: 800; color: #facc15">⭐ ${item.points}</td>
    </tr>`;
  });
  body.innerHTML = html || `<tr><td colspan="6" style="padding:30px;text-align:center;color:#94a3b8">No students yet. Solve some questions!</td></tr>`;
}

function attachAntiPasteProtection(textareaElement) {
  if (!textareaElement) return;
  textareaElement.addEventListener("paste", function (e) {
    e.preventDefault();
    showToast("⚠️ Copy-paste disabled! Type code manually 💪");
    return false;
  });
  textareaElement.addEventListener("contextmenu", function (e) {
    showToast("💡 Type the code line-by-line!");
  });
}

function openStudentProfileModal() {
  if (!currentStudent) return;
  let modal = document.getElementById("studentProfileModal");
  if (!modal) {
    const div = document.createElement("div");
    div.id = "studentProfileModal";
    div.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;`;
    document.body.appendChild(div);
    modal = div;
  }
  modal.style.display = "flex";
  const st = currentStudent.streak || 0;
  const best = currentStudent.longestStreak || 0;
  modal.innerHTML = `
    <div style="background: #0f172a; border: 1px solid #3b82f6; border-radius: 20px; width: 100%; max-width: 440px; padding: 22px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8)">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px">
        <h3 style="color:#60a5fa">👤 Student Profile</h3>
        <button onclick="document.getElementById('studentProfileModal').style.display='none'" style="background:none; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer">&times;</button>
      </div>
      <div style="background:#1e293b; border-radius:12px; padding:14px; margin-bottom:14px">
        <div style="font-size:1.15rem; font-weight:700; color:#f8fafc">${currentStudent.name}</div>
        <div style="color:#94a3b8; font-size:0.88rem; font-family:monospace; margin-top:4px">Mobile Number: ${currentStudent.enrollment}</div>
        <div style="color:#a5b4fc; font-size:0.95rem; font-family:monospace; margin-top:8px; font-weight:800; letter-spacing:0.5px">🆔 Account ID: ${currentStudent.accountId || "—"}</div>
        <div style="color:#64748b; font-size:0.75rem; margin-top:4px">Permanent ID — name cannot be changed by others</div>
        <div style="color:#fb923c; font-size:0.9rem; margin-top:8px; font-weight:700">🔥 Streak: ${st} day${st === 1 ? "" : "s"}${best > st ? " (best " + best + ")" : ""}</div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px">
        <div style="background:#020617; padding:12px; border-radius:10px; text-align:center; border:1px solid #1e293b">
          <div style="font-size:1.3rem; font-weight:800; color:#facc15">⭐ ${currentStudent.points || 0}</div>
          <div style="font-size:0.78rem; color:#94a3b8">Total Points</div>
        </div>
        <div style="background:#020617; padding:12px; border-radius:10px; text-align:center; border:1px solid #1e293b">
          <div style="font-size:1.3rem; font-weight:800; color:#38bdf8">${currentStudent.mcqsSolved || 0}</div>
          <div style="font-size:0.78rem; color:#94a3b8">MCQs Solved</div>
        </div>
      </div>
      <p style="color:#64748b; font-size:0.8rem; margin-bottom:12px">Open daily for streak. +5 pts/day · +15 every 7 days. Keep your Account ID private.</p>
      <button onclick="showLoginModal(); document.getElementById('studentProfileModal').style.display='none'" style="width:100%; padding:10px; background:#334155; color:#e2e8f0; border:none; border-radius:8px; cursor:pointer">
        🔄 Switch Account / Re-login
      </button>
    </div>`;
}
