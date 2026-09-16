// ============================================================
// SUPABASE DATABASE INTEGRATION ENGINE
// LJIET Python Practice Hub - Realtime Class Sync & Leaderboard
// ============================================================

// Supabase Project Credentials
const SUPABASE_CONFIG = {
  url: "https://hyrhnhnwykfmtycfpjcz.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmhuaG53eWtmbXR5Y2ZwamN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwODM2NTMsImV4cCI6MjA5ODY1OTY1M30.lNzQLiJ0vm8iCtz6oSPii14yplhsXQHuWKV3qSa8zCI",
  serviceKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cmhuaG53eWtmbXR5Y2ZwamN6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzA4MzY1MywiZXhwIjoyMDk4NjU5NjUzfQ.l4id9N2aV56xo0uT2C086FakRLq1pU-aivVMRaw1MC4"
};

let supabaseClient = null;

function initSupabase() {
  const activeKey = SUPABASE_CONFIG.serviceKey || SUPABASE_CONFIG.anonKey;
  if (typeof supabase !== "undefined" && SUPABASE_CONFIG.url && activeKey) {
    try {
      supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, activeKey, {
        auth: { persistSession: false }
      });
      console.log("⚡ Supabase database connected successfully with JWT authentication!");
    } catch (e) {
      console.warn("Supabase init warning:", e);
    }
  }
}

/** Generate permanent Account ID (hard to guess) e.g. PY-K7M2NQ */
function generateAccountId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return "PY-" + id;
}

/**
 * Fetch a single student record from Supabase by mobile number.
 * (Stored in the 'enrollment' column which is the unique key)
 */
async function fetchStudentFromCloud(mobile) {
  if (!supabaseClient || !mobile) return null;
  try {
    const { data, error } = await supabaseClient
      .from('leaderboard')
      .select('*')
      .eq('enrollment', mobile)
      .maybeSingle();

    if (error || !data) return null;

    return {
      enrollment: data.enrollment,
      name: data.name || '',
      accountId: data.account_id || null,
      points: data.points || 0,
      mcqsSolved: data.mcqs_solved || 0,
      codeCompleted: data.code_completed || 0,
      solvedMcqIds: [],
      completedCodeIds: []
    };
  } catch (err) {
    console.warn("fetchStudentFromCloud failed:", err);
    return null;
  }
}

/**
 * Save / update student. Always keeps the HIGHER points value.
 * NAME LOCK: once name exists in cloud, cannot be overwritten by another login.
 * Account ID is generated once and permanent.
 */
async function syncStudentToCloud(studentData) {
  if (!studentData || !studentData.enrollment) return;

  saveLocalStudentData(studentData);

  if (!supabaseClient) return;

  try {
    const existing = await fetchStudentFromCloud(studentData.enrollment);
    const finalPoints = Math.max(
      studentData.points || 0,
      (existing && existing.points) || 0
    );
    const finalMcqs = Math.max(
      studentData.mcqsSolved || 0,
      (existing && existing.mcqsSolved) || 0
    );
    const finalCode = Math.max(
      studentData.codeCompleted || 0,
      (existing && existing.codeCompleted) || 0
    );

    studentData.points = finalPoints;
    studentData.mcqsSolved = finalMcqs;
    studentData.codeCompleted = finalCode;

    // NAME LOCK: once a name exists in cloud, never let another login overwrite it
    const lockedName = (existing && existing.name && existing.name.trim())
      ? existing.name.trim()
      : (studentData.name || 'Student');
    studentData.name = lockedName;

    // Permanent Account ID: keep existing, or create once
    let accountId = studentData.accountId || (existing && existing.accountId) || null;
    if (!accountId) {
      accountId = generateAccountId();
    }
    studentData.accountId = accountId;

    saveLocalStudentData(studentData);

    const payload = {
      enrollment: studentData.enrollment,
      name: lockedName,
      points: finalPoints,
      mcqs_solved: finalMcqs,
      code_completed: finalCode,
      updated_at: new Date().toISOString()
    };
    if (accountId) payload.account_id = accountId;

    const { error } = await supabaseClient
      .from('leaderboard')
      .upsert(payload, { onConflict: 'enrollment' });

    if (error) {
      console.warn("Supabase sync notice:", error.message);
    } else {
      console.log("☁️ Score synced to Supabase Cloud Leaderboard! Points:", finalPoints, "ID:", accountId);
    }
  } catch (err) {
    console.warn("Cloud sync offline fallback active:", err);
  }
}

async function fetchCloudLeaderboard() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('leaderboard')
        .select('*')
        .order('points', { ascending: false })
        .limit(1000);

      if (!error && data && data.length > 0) {
        return data.map((item, idx) => ({
          rank: idx + 1,
          enrollment: item.enrollment,
          name: item.name,
          points: item.points || 0,
          mcqsSolved: item.mcqs_solved || 0,
          codeCompleted: item.code_completed || 0
        }));
      }
    } catch (err) {
      console.warn("Using local fallback leaderboard");
    }
  }
  return getCombinedLocalLeaderboard();
}

function getLocalStudentData() {
  try {
    const data = localStorage.getItem('ljiet_student_profile');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function saveLocalStudentData(studentData) {
  localStorage.setItem('ljiet_student_profile', JSON.stringify(studentData));
  let globalList = JSON.parse(localStorage.getItem('ljiet_all_students_registry') || '[]');
  const idx = globalList.findIndex(s => s.enrollment === studentData.enrollment);
  if (idx >= 0) {
    globalList[idx] = studentData;
  } else {
    globalList.push(studentData);
  }
  localStorage.setItem('ljiet_all_students_registry', JSON.stringify(globalList));
}

function getCombinedLocalLeaderboard() {
  let list = JSON.parse(localStorage.getItem('ljiet_all_students_registry') || '[]');
  if (list.length === 0) {
    list = [
      { enrollment: "9876543210", name: "Rahul Sharma", points: 840, mcqsSolved: 62, codeCompleted: 8 },
      { enrollment: "9123456780", name: "Priya Patel", points: 790, mcqsSolved: 55, codeCompleted: 9 },
      { enrollment: "9988776655", name: "Aman Verma", points: 650, mcqsSolved: 48, codeCompleted: 6 },
      { enrollment: "9012345678", name: "Neha Shah", points: 580, mcqsSolved: 42, codeCompleted: 5 },
      { enrollment: "9876501234", name: "Karan Mehta", points: 490, mcqsSolved: 35, codeCompleted: 4 }
    ];
  }
  list.sort((a, b) => (b.points || 0) - (a.points || 0));
  return list.map((item, index) => ({
    rank: index + 1,
    enrollment: item.enrollment,
    name: item.name,
    points: item.points || 0,
    mcqsSolved: item.mcqsSolved || 0,
    codeCompleted: item.codeCompleted || 0
  }));
}
