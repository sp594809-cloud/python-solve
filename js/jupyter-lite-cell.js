/** In-browser Python cells (Pyodide) – Jupyter-like, zero server */
(function () {
  var pyodideReady = null;
  function loadPyodideOnce() {
    if (pyodideReady) return pyodideReady;
    if (typeof loadPyodide !== "function") return Promise.reject(new Error("Pyodide not loaded"));
    pyodideReady = loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/" });
    return pyodideReady;
  }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  window.mountPythonCell = function (container, opts) {
    opts = opts || {};
    var id = "jl-" + Math.random().toString(36).slice(2, 9);
    container.innerHTML =
      '<div class="jl-cell" id="' + id + '">' +
      '<div class="jl-cell-header"><span>' + escapeHtml(opts.title || "Python cell · runs in your browser") +
      '</span><button type="button" class="jl-run" data-run="' + id + '">▶ Run</button></div>' +
      '<textarea class="jl-input" id="' + id + '-in" spellcheck="false">' +
      escapeHtml(opts.code || 'print("Hello from LJIET Hub")\nfor i in range(3):\n    print(i)') +
      '</textarea><div class="jl-output" id="' + id + '-out">Press Run to execute…</div></div>';
    container.querySelector("[data-run='" + id + "']").onclick = function () { runCell(id); };
  };
  async function runCell(id) {
    var input = document.getElementById(id + "-in");
    var out = document.getElementById(id + "-out");
    if (!input || !out) return;
    out.textContent = "Running…";
    try {
      var py = await loadPyodideOnce();
      await py.runPythonAsync("import sys\nfrom io import StringIO\nsys.stdout = StringIO()\nsys.stderr = sys.stdout\n");
      try { await py.runPythonAsync(input.value); }
      catch (err) { out.textContent = String(err); return; }
      var printed = py.runPython("sys.stdout.getvalue()");
      out.textContent = printed || "(no output)";
    } catch (e) { out.textContent = "Error: " + e; }
  }
  window.runPythonCellById = runCell;
  window.ensureCodeStepHasCell = function () {
    var content = document.getElementById("stepContent");
    if (!content || content.querySelector(".jl-cell")) return;
    var holder = document.createElement("div");
    holder.style.marginTop = "16px";
    content.appendChild(holder);
    mountPythonCell(holder, {
      title: "Try it here (in-browser · no server)",
      code: 'name = "LJIET"\nprint("Hello", name)\nprint(2 + 2)'
    });
  };
  console.log("jupyter-lite-cell ready (Pyodide)");
})();
