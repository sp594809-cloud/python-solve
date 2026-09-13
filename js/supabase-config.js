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

// Initialize Supabase Client (uses serviceKey for direct full RLS bypass permissions)
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

// Save or Update Student Profile & Score in Database
async function syncStudentToCloud(studentData) {
  if (!studentData || !studentData.enrollment) return;

  // Always update local storage first
  saveLocalStudentData(studentData);

  // Sync to Supabase cloud if connected
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('leaderboard')
        .upsert({
          enrollment: studentData.enrollment,
          name: studentData.name,
          points: studentData.points || 0,
          mcqs_solved: studentData.mcqsSolved || 0,
          code_completed: studentData.codeCompleted || 0,
          updated_at: new Date().toISOString()
        }, { onConflict: 'enrollment' });

      if (error) {
        console.warn("Supabase sync notice:", error.message);
      } else {
        console.log("☁️ Score synced to Supabase Cloud Leaderboard!");
      }
    } catch (err) {
      console.warn("Cloud sync offline fallback active:", err);
    }
  }
}

// Fetch Global Class Leaderboard from Supabase
async function fetchCloudLeaderboard() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('leaderboard')
        .select('*')
        .order('points', { ascending: false })
        .limit(100);

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

  // Fallback to local combined leaderboard
  return getCombinedLocalLeaderboard();
}

// Local Storage Fallback Engine
function getLocalStudentData() {
  const data = localStorage.getItem('ljiet_student_profile');
  return data ? JSON.parse(data) : null;
}

function saveLocalStudentData(studentData) {
  localStorage.setItem('ljiet_student_profile', JSON.stringify(studentData));
  
  // Update mock global registry for local demo
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
      { enrollment: "22012011001", name: "Rahul Sharma", points: 840, mcqsSolved: 62, codeCompleted: 8 },
      { enrollment: "22012011045", name: "Priya Patel", points: 790, mcqsSolved: 55, codeCompleted: 9 },
      { enrollment: "22012011112", name: "Aman Verma", points: 650, mcqsSolved: 48, codeCompleted: 6 },
      { enrollment: "22012011089", name: "Neha Shah", points: 580, mcqsSolved: 42, codeCompleted: 5 },
      { enrollment: "22012011204", name: "Karan Mehta", points: 490, mcqsSolved: 35, codeCompleted: 4 }
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
