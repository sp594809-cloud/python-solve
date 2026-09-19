// SUPABASE DATABASE INTEGRATION - LJIET Learning Hub
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
      window.supabaseClient = supabaseClient;
      console.log("Supabase connected - leaderboard ready");
    } catch (e) {
      console.warn("Supabase init warning:", e);
    }
  }
}

function generateAccountId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return "PY-" + id;
}

async function fetchStudentFromCloud(mobile) {
  if (!supabaseClient || !mobile) return null;
  try {
    const { data, error } = await supabaseClient
      .from("leaderboard")
      .select("*")
      .eq("enrollment", mobile)
      .maybeSingle();
    if (error || !data) return null;
    return {
      enrollment: data.enrollment,
      name: data.name || "",
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

async function syncStudentToCloud(studentData) {
  if (!studentData || !studentData.enrollment) return;
  saveLocalStudentData(studentData);
  if (!supabaseClient) return;
  try {
    const existing = await fetchStudentFromCloud(studentData.enrollment);
    const finalPoints = Math.max(studentData.points || 0, (existing && existing.points) || 0);
    const finalMcqs = Math.max(studentData.mcqsSolved || 0, (existing && existing.mcqsSolved) || 0);
    const finalCode = Math.max(studentData.codeCompleted || 0, (existing && existing.codeCompleted) || 0);
    studentData.points = finalPoints;
    studentData.mcqsSolved = finalMcqs;
    studentData.codeCompleted = finalCode;
    const lockedName = (existing && existing.name && existing.name.trim())
      ? existing.name.trim()
      : (studentData.name || "Student");
    studentData.name = lockedName;
    let accountId = studentData.accountId || (existing && existing.accountId) || null;
    if (!accountId) accountId = generateAccountId();
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
    const { error } = await supabaseClient.from("leaderboard").upsert(payload, { onConflict: "enrollment" });
    if (error) console.warn("Supabase sync notice:", error.message);
    else console.log("Score synced. Points:", finalPoints);
  } catch (err) {
    console.warn("syncStudentToCloud failed:", err);
  }
}

async function fetchCloudLeaderboard() {
  if (!supabaseClient && typeof initSupabase === "function") initSupabase();
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("leaderboard")
        .select("*")
        .order("points", { ascending: false })
        .limit(1000);
      if (!error && data && data.length > 0) {
        console.log("Cloud leaderboard:", data.length, "students");
        return data.map(function (item, idx) {
          return {
            rank: idx + 1,
            enrollment: item.enrollment,
            name: item.name,
            points: item.points || 0,
            mcqsSolved: item.mcqs_solved || 0,
            codeCompleted: item.code_completed || 0
          };
        });
      }
    } catch (err) {
      console.warn("Using local fallback leaderboard");
    }
  }
  return getCombinedLocalLeaderboard();
}

function getLocalStudentData() {
  try {
    const data = localStorage.getItem("ljiet_student_profile");
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function saveLocalStudentData(studentData) {
  localStorage.setItem("ljiet_student_profile", JSON.stringify(studentData));
  let globalList = JSON.parse(localStorage.getItem("ljiet_all_students_registry") || "[]");
  const idx = globalList.findIndex(function (s) { return s.enrollment === studentData.enrollment; });
  if (idx >= 0) globalList[idx] = Object.assign({}, globalList[idx], studentData);
  else globalList.push(studentData);
  localStorage.setItem("ljiet_all_students_registry", JSON.stringify(globalList));
}

function getCombinedLocalLeaderboard() {
  let list = JSON.parse(localStorage.getItem("ljiet_all_students_registry") || "[]");
  if (!list.length) {
    list = [];
  }
  list.sort(function (a, b) { return (b.points || 0) - (a.points || 0); });
  return list.map(function (item, idx) {
    return {
      rank: idx + 1,
      enrollment: item.enrollment,
      name: item.name,
      points: item.points || 0,
      mcqsSolved: item.mcqsSolved || 0,
      codeCompleted: item.codeCompleted || 0
    };
  });
}

// AUTO_INIT – so all 160 students load (never delete cloud data)
(function autoInit() {
  function go() {
    if (typeof initSupabase === "function") initSupabase();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
  else go();
  setTimeout(go, 200);
  setTimeout(go, 800);
})();
