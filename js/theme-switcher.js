:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --bg: #0f172a;
  --bg-card: #1e293b;
  --bg-elevated: #334155;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --border: #334155;
  --radius: 16px;
  --shadow: 0 10px 40px rgba(0,0,0,0.4);
}

body[data-theme="light"] {
  --primary: #4f46e5;
  --primary-dark: #4338ca;
  --success: #16a34a;
  --warning: #d97706;
  --danger: #dc2626;
  --bg: #f8fafc;
  --bg-card: #ffffff;
  --bg-elevated: #e2e8f0;
  --text: #0f172a;
  --text-muted: #475569;
  --border: #dbe5ef;
  --shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.5;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.15rem;
}
.logo-icon { font-size: 1.5rem; }

.nav-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--primary-dark); }
.btn-primary.small { padding: 6px 12px; font-size: 0.8rem; }

.btn-secondary {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.btn-secondary:hover { color: var(--text); border-color: var(--primary); }
.btn-secondary.small { padding: 6px 12px; font-size: 0.8rem; }

.nav-main-btn { white-space: nowrap; }

.app-container {
  display: flex;
  min-height: calc(100vh - 56px);
}

.sidebar {
  width: 270px;
  background: var(--bg-card);
  border-right: 1px solid var(--border);
  padding: 16px 0;
  overflow-y: auto;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  z-index: 90;
}

.phase-header {
  padding: 10px 18px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 8px;
}

.concept-list { list-style: none; }

.concept-list li {
  padding: 11px 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.15s;
  border-left: 3px solid transparent;
  font-size: 0.92rem;
  min-height: 44px;
  touch-action: manipulation;
}

.concept-list li:hover { background: rgba(99, 102, 241, 0.1); }
.concept-list li.active {
  background: rgba(99, 102, 241, 0.15);
  border-left-color: var(--primary);
  color: #a5b4fc;
}

.main-content {
  flex: 1;
  padding: 24px 20px;
  overflow-y: auto;
  max-width: 1100px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.screen { display: none; }
.screen.active { display: block; }

.step-content {
  background: var(--bg-card);
  border-radius: var(--radius);
  padding: 20px;
  border: 1px solid var(--border);
  min-height: 200px;
}

.pb-opt-btn {
  display: block;
  width: 100%;
  text-align: left;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: border-color 0.15s;
}
.pb-opt-btn:hover:not(:disabled),
.pb-opt-btn:active:not(:disabled) {
  border-color: var(--primary);
}

.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg-elevated);
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  z-index: 9999;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  transition: opacity 0.3s;
}

.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  z-index: 150;
  padding: 6px 0 calc(6px + env(safe-area-inset-bottom));
  justify-content: space-around;
}
.mobile-nav-item {
  background: none;
  border: none;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  font-size: 1.2rem;
  cursor: pointer;
  touch-action: manipulation;
  min-width: 64px;
}

@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: min(300px, 85vw);
    transform: translateX(-100%);
    box-shadow: 8px 0 30px rgba(0,0,0,0.5);
    z-index: 200;
  }
  .sidebar.open { transform: translateX(0); }
  .main-content { padding: 16px 12px; }
  .mobile-bottom-nav { display: flex; }
  .nav-progress .nav-main-btn { display: none; }
  .logo-text { font-size: 1rem; }
  body { padding-bottom: 70px; }
}

@media (min-width: 901px) {
  body { padding-bottom: 0; }
  .mobile-bottom-nav { display: none; }
  .sidebar {
    position: relative;
    transform: none !important;
  }
}
