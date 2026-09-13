// ============================================================
// STUDENT AUTHENTICATION, LEADERBOARD & ANTI-PASTE ENGINE
// ============================================================

let currentStudent = null;

// Initialize Student Session on App Startup
function initStudentSession() {
  currentStudent = getLocalStudentData();
  
  if (!currentStudent) {
    showLoginModal();
  } else {
    updateTopNavStudentInfo();
  }
}

// Show Student Login Modal
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
          Enter your college Enrollment Number (exactly 14 characters) & Name to compete on the Live Class Leaderboard!
        </p>

        <form onsubmit="handleStudentLogin(event)">
          <div style="text-align: left; margin-bottom: 14px">
            <label style="color: #c7d2fe; font-size: 0.85rem; font-weight: 600; display: block; margin-bottom: 6px">Enrollment Number <span style="color:#f87171">*</span></label>
            <input type="text" id="loginEnrollment" required 
                   placeholder="e.g. 22012011001234" 
                   maxlength="14"
                   minlength="14"
                   pattern="[A-Za-z0-9]{14}"
                   style="width: 100%; padding: 12px 16px; background: #020617; border: 1px solid #334155; border-radius: 10px; color: #f8fafc; font-size: 1rem; font-family: inherit; letter-spacing: 1px" />
            <div id="enrollError" style="color:#f87171; font-size:0.78rem; margin-top:5px; display:none">Enrollment must be exactly 14 characters (letters or numbers).</div>
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

    // Live validation
    const enrollInput = document.getElementById("loginEnrollment");
    enrollInput.addEventListener("input", function() {
      const val = this.value.trim();
      const err = document.getElementById("enrollError");
      if (val.length > 0 && val.length !== 14) {
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

// Handle Login Form Submission
function handleStudentLogin(e) {
  e.preventDefault();
  const enrollment = document.getElementById("loginEnrollment").value.trim();
  const name = document.getElementById("loginName").value.trim();

  if (!enrollment || !name) return;

  // Strict 14 character rule
  if (enrollment.length !== 14) {
    const err = document.getElementById("enrollError");
    if (err) err.style.display = "block";
    document.getElementById("loginEnrollment").style.borderColor = "#ef4444";
    showToast("Enrollment number must be exactly 14 characters!");
    return;
  }

  const existing = getLocalStudentData();
  currentStudent = {
    enrollment: enrollment,
    name: name,
    points: existing && existing.enrollment === enrollment ? (existing.points || 0) : 0,
    mcqsSolved: existing && existing.enrollment === enrollment ? (existing.mcqsSolved || 0) : 0,
    codeCompleted: existing && existing.enrollment === enrollment ? (existing.codeCompleted || 0) : 0,
    solvedMcqIds: existing && existing.enrollment === enrollment ? (existing.solvedMcqIds || []) : [],
    completedCodeIds: existing && existing.enrollment === enrollment ? (existing.completedCodeIds || []) : []
  };

  syncStudentToCloud(currentStudent);
  updateTopNavStudentInfo();

  const modal = document.getElementById("studentLoginModal");
  if (modal) modal.style.display = "none";

  showToast(`Welcome ${name}! Logged in with Enrollment ${enrollment} 🎉`);
}

// Update Top Bar with Student Badge & Points
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

  infoBadge.innerHTML = `
    <span style="color:#c7d2fe; font-weight:700">👤 ${currentStudent.name.split(' ')[0]}</span>
    <span style="background:#4f46e5; color:#fff; padding:2px 7px; border-radius:99px; font-size:0.72rem">${currentStudent.enrollment}</span>
    <span style="color:#facc15; font-weight:800">⭐ ${currentStudent.points || 0}</span>
  `;
}

// Add Points when student solves a question
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
      showToast(`+${pts} Points earned! 🎯`);
    }
  } else if (codeId) {
    if (!currentStudent.completedCodeIds) currentStudent.completedCodeIds = [];
    if (!currentStudent.completedCodeIds.includes(codeId)) {
      currentStudent.completedCodeIds.push(codeId);
      currentStudent.codeCompleted = (currentStudent.codeCompleted || 0) + 1;
      currentStudent.points = (currentStudent.points || 0) + pts;
      showToast(`🎉 Coding Task Completed! +${pts} Points!`);
    }
  } else {
    currentStudent.points = (currentStudent.points || 0) + pts;
    showToast(`+${pts} Points earned!`);
  }

  syncStudentToCloud(currentStudent);
  updateTopNavStudentInfo();
}

// Render Live Leaderboard Screen
async function renderLiveLeaderboard() {
  const content = document.getElementById("stepContent");
  if (!content) return;

  content.innerHTML = `
    <div style="background: linear-gradient(135deg, #1e1b4b, #0f172a); border: 1px solid #4338ca; border-radius: 16px; padding: 20px; margin-bottom: 20px">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px">
        <div>
          <h2 style="color: #c7d2fe; font-size: 1.35rem; margin-bottom: 4px">🏆 LJIET Class Leaderboard</h2>
          <p style="color: #94a3b8; font-size: 0.88rem">Real-time rankings synced via Supabase</p>
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
              <th style="padding: 12px 14px">Enrollment</th>
              <th style="padding: 12px 14px; text-align: center">MCQs</th>
              <th style="padding: 12px 14px; text-align: center">Code</th>
              <th style="padding: 12px 14px; text-align: right">Points</th>
            </tr>
          </thead>
          <tbody id="leaderboardBody"></tbody>
        </table>
      </div>
    </div>
  `;

  const list = await fetchCloudLeaderboard();
  const loading = document.getElementById("leaderboardLoading");
  const box = document.getElementById("leaderboardTableBox");
  const body = document.getElementById("leaderboardBody");

  if (!loading || !box || !body) return;

  loading.style.display = "none";
  box.style.display = "block";

  let html = "";
  list.forEach((item) => {
    const isMe = currentStudent && currentStudent.enrollment === item.enrollment;
    let rankBadge = `#${item.rank}`;
    if (item.rank === 1) rankBadge = "🥇 #1";
    else if (item.rank === 2) rankBadge = "🥈 #2";
    else if (item.rank === 3) rankBadge = "🥉 #3";

    html += `
      <tr style="border-bottom: 1px solid #1e293b; ${isMe ? 'background: rgba(99, 102, 241, 0.15);' : ''}">
        <td style="padding: 12px 14px; font-weight: 800; color: ${item.rank <= 3 ? '#facc15' : '#94a3b8'}">${rankBadge}</td>
        <td style="padding: 12px 14px; font-weight: 700; color: #f8fafc">
          ${item.name} ${isMe ? '<span style="font-size:0.7rem; background:#4f46e5; color:#fff; padding:2px 6px; border-radius:4px; margin-left:4px">YOU</span>' : ''}
        </td>
        <td style="padding: 12px 14px; color: #94a3b8; font-family: monospace; font-size:0.85rem">${item.enrollment}</td>
        <td style="padding: 12px 14px; text-align: center; color: #38bdf8">${item.mcqsSolved}</td>
        <td style="padding: 12px 14px; text-align: center; color: #4ade80">${item.codeCompleted}</td>
        <td style="padding: 12px 14px; text-align: right; font-weight: 800; color: #facc15">⭐ ${item.points}</td>
      </tr>
    `;
  });

  body.innerHTML = html;
}

// Anti-Paste Protection Helper
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

// Student Profile Modal
function openStudentProfileModal() {
  if (!currentStudent) return;

  let modal = document.getElementById("studentProfileModal");
  if (!modal) {
    const div = document.createElement("div");
    div.id = "studentProfileModal";
    div.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
      z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;
    `;
    document.body.appendChild(div);
    modal = div;
  }

  modal.style.display = "flex";
  modal.innerHTML = `
    <div style="background: #0f172a; border: 1px solid #3b82f6; border-radius: 20px; width: 100%; max-width: 440px; padding: 22px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8)">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px">
        <h3 style="color:#60a5fa">👤 Student Profile</h3>
        <button onclick="document.getElementById('studentProfileModal').style.display='none'" style="background:none; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer">&times;</button>
      </div>

      <div style="background:#1e293b; border-radius:12px; padding:14px; margin-bottom:14px">
        <div style="font-size:1.15rem; font-weight:700; color:#f8fafc">${currentStudent.name}</div>
        <div style="color:#94a3b8; font-size:0.88rem; font-family:monospace; margin-top:4px">Enrollment: ${currentStudent.enrollment}</div>
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

      <button onclick="showLoginModal(); document.getElementById('studentProfileModal').style.display='none'" style="width:100%; padding:10px; background:#334155; color:#e2e8f0; border:none; border-radius:8px; cursor:pointer">
        🔄 Switch Account / Re-login
      </button>
    </div>
  `;
}
