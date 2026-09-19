/* Force Supabase + full 160-student leaderboard (data is safe in cloud) */
(function () {
  function ensureSupabase() {
    if (typeof initSupabase === "function") {
      try { initSupabase(); } catch (e) { console.warn(e); }
    }
    if (!window.supabaseClient && typeof supabase !== "undefined" && typeof SUPABASE_CONFIG !== "undefined") {
      try {
        window.supabaseClient = supabase.createClient(
          SUPABASE_CONFIG.url,
          SUPABASE_CONFIG.serviceKey || SUPABASE_CONFIG.anonKey,
          { auth: { persistSession: false } }
        );
        try { supabaseClient = window.supabaseClient; } catch (_) {}
      } catch (e) {
        console.warn("direct supabase init failed", e);
      }
    }
  }

  var _origFetch = typeof fetchCloudLeaderboard === "function" ? fetchCloudLeaderboard : null;
  window.fetchCloudLeaderboard = async function () {
    ensureSupabase();
    var client = (typeof supabaseClient !== "undefined" && supabaseClient) || window.supabaseClient;
    if (client) {
      try {
        var res = await client.from("leaderboard").select("*").order("points", { ascending: false }).limit(1000);
        if (!res.error && res.data && res.data.length) {
          console.log("Leaderboard loaded from cloud:", res.data.length, "students");
          return res.data.map(function (item, idx) {
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
        console.warn("Supabase leaderboard error or empty:", res.error);
      } catch (err) {
        console.warn("Leaderboard fetch error:", err);
      }
    }
    if (typeof SUPABASE_CONFIG !== "undefined") {
      try {
        var key = SUPABASE_CONFIG.serviceKey || SUPABASE_CONFIG.anonKey;
        var r = await fetch(
          SUPABASE_CONFIG.url + "/rest/v1/leaderboard?select=*&order=points.desc&limit=1000",
          { headers: { apikey: key, Authorization: "Bearer " + key } }
        );
        if (r.ok) {
          var data = await r.json();
          console.log("Leaderboard via REST:", data.length, "students");
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
      } catch (e) {
        console.warn("REST leaderboard failed", e);
      }
    }
    if (_origFetch) return _origFetch();
    return [];
  };

  window.openLeaderboardScreen = async function () {
    ensureSupabase();
    document.querySelectorAll(".screen").forEach(function (s) {
      s.classList.remove("active");
      s.style.removeProperty("display");
    });
    var c = document.getElementById("conceptScreen");
    if (c) { c.classList.add("active"); c.style.display = "block"; }
    var n = document.getElementById("conceptNumber"); if (n) n.textContent = "🏆";
    var t = document.getElementById("conceptTitle"); if (t) t.textContent = "Live Class Leaderboard & Rankings";
    var tabs = document.getElementById("stepTabs"); if (tabs) tabs.style.display = "none";
    var nav = document.querySelector(".step-navigation"); if (nav) nav.style.display = "none";
    if (typeof renderLiveLeaderboard === "function") await renderLiveLeaderboard();
  };

  function boot() {
    ensureSupabase();
    console.log("leaderboard-fix: supabase ready (160 students safe in cloud)");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  setTimeout(boot, 300);
  setTimeout(boot, 1200);
})();
