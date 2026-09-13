// ============================================================
// INTERACTIVE PLAYGROUNDS
// ============================================================

let pyodide = null;

async function initPyodide() {
  if (pyodide) return pyodide;
  try {
    pyodide = await loadPyodide();
    console.log("Pyodide ready");
    return pyodide;
  } catch (e) {
    console.error("Pyodide failed to load", e);
    return null;
  }
}

async function runPython(code) {
  const p = await initPyodide();
  if (!p) return "⚠️ Python engine not ready yet. Please wait a moment and try again.";
  try {
    // Capture print output
    p.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
    `);
    p.runPython(code);
    const output = p.runPython("sys.stdout.getvalue()");
    return output || "(no output)";
  } catch (err) {
    return "❌ Error:\n" + err.message;
  }
}

// ---------- VARIABLE BOX PLAYGROUND ----------
function renderVariablePlayground(container, data) {
  const vars = data.initial || [{ name: "age", value: 19 }];
  let html = `<div class="playground-container">
    <div class="playground-title">🖐 Play with Magic Boxes</div>
    <div class="var-box-area" id="varBoxArea">`;

  vars.forEach((v, i) => {
    html += `
      <div class="var-box" data-index="${i}">
        <div class="var-name">${v.name}</div>
        <div class="var-value" id="varValue${i}">${v.value}</div>
      </div>`;
  });

  html += `</div>
    <div class="var-controls">
      <input type="text" id="newVarValue" placeholder="New value" />
      <button onclick="changeVarValue()">Change Value</button>
      <button onclick="addNewVar()" style="background:#22c55e">+ New Box</button>
    </div>
    <p style="text-align:center;color:#94a3b8;margin-top:12px;font-size:0.9rem">
      Change the number and watch the box update. This is exactly what a variable does!
    </p>
  </div>`;

  container.innerHTML = html;
  window._currentVars = vars;
}

window.changeVarValue = function () {
  const input = document.getElementById("newVarValue");
  const val = input.value.trim();
  if (!val) return;
  const el = document.getElementById("varValue0");
  if (el) {
    el.textContent = isNaN(val) ? `"${val}"` : val;
    el.style.transform = "scale(1.2)";
    setTimeout(() => (el.style.transform = "scale(1)"), 300);
  }
};

window.addNewVar = function () {
  const area = document.getElementById("varBoxArea");
  const name = "box" + (area.children.length + 1);
  const div = document.createElement("div");
  div.className = "var-box";
  div.innerHTML = `
    <div class="var-name">${name}</div>
    <div class="var-value">?</div>`;
  area.appendChild(div);
};

// ---------- STRING STRIP ----------
function renderStringPlayground(container, data) {
  const str = data.initial || "PYTHON";
  let html = `<div class="playground-container">
    <div class="playground-title">🖐 Character Strip – Click any letter</div>
    <div class="string-strip" id="stringStrip">`;

  for (let i = 0; i < str.length; i++) {
    html += `
      <div class="char-box" onclick="highlightChar(${i})" data-index="${i}">
        <div class="char-value">${str[i]}</div>
        <div class="char-index">${i}</div>
      </div>`;
  }

  html += `</div>
    <p style="text-align:center;color:#94a3b8;margin-top:16px" id="stringInfo">
      Click a letter to see its position (index)
    </p>
  </div>`;

  container.innerHTML = html;
  window._currentString = str;
}

window.highlightChar = function (index) {
  document.querySelectorAll(".char-box").forEach((b) => b.classList.remove("highlight"));
  const box = document.querySelector(`.char-box[data-index="${index}"]`);
  if (box) box.classList.add("highlight");
  const ch = window._currentString[index];
  document.getElementById("stringInfo").innerHTML =
    `You clicked index <strong>${index}</strong> → character = <strong>"${ch}"</strong><br>
     In Python this is written as: <code>name[${index}]</code>`;
};

// ---------- LIST CONTAINER ----------
function renderListPlayground(container, data) {
  let items = data.initial ? [...data.initial] : [10, 20, 30];
  window._listItems = items;

  function draw() {
    let html = `<div class="playground-container">
      <div class="playground-title">🖐 Interactive List – Add, change, remove</div>
      <div class="list-container" id="listContainer">`;

    items.forEach((val, i) => {
      html += `
        <div class="list-item">
          <div class="value">${val}</div>
          <div class="index">${i}</div>
        </div>`;
    });

    html += `</div>
      <div class="list-controls">
        <input type="text" id="listInput" placeholder="Value" />
        <button onclick="listAdd()">+ Add</button>
        <button onclick="listPop()" style="background:#ef4444">Remove Last</button>
        <button onclick="listSort()" style="background:#22c55e">Sort</button>
      </div>
      <p style="text-align:center;color:#94a3b8;margin-top:12px;font-size:0.9rem">
        Current list length: <strong>${items.length}</strong> &nbsp;|&nbsp;
        In Python: <code>mylist.append(value)</code>
      </p>
    </div>`;

    container.innerHTML = html;
  }

  window.listAdd = function () {
    const input = document.getElementById("listInput");
    const val = input.value.trim();
    if (!val) return;
    items.push(isNaN(val) ? val : Number(val));
    draw();
  };

  window.listPop = function () {
    if (items.length) {
      items.pop();
      draw();
    }
  };

  window.listSort = function () {
    items.sort((a, b) => (typeof a === "number" ? a - b : String(a).localeCompare(String(b))));
    draw();
  };

  draw();
}

// ---------- DECISION TREE ----------
function renderDecisionTree(container, data) {
  let html = `<div class="playground-container">
    <div class="playground-title">🖐 Decision Tree – Change the value and watch the path</div>
    <div class="decision-tree">
      <div class="tree-node" id="treeStart">age = <span id="treeAgeVal">20</span></div>
      <div style="font-size:1.5rem;color:#64748b">↓</div>
      <div class="tree-node condition" id="treeCondition">${data.condition || "age >= 18"}?</div>
      <div class="tree-branches">
        <div class="tree-branch">
          <div class="branch-label yes">YES</div>
          <div class="tree-node" id="treeYes">${data.true_path || "Allow entry"}</div>
        </div>
        <div class="tree-branch">
          <div class="branch-label no">NO</div>
          <div class="tree-node" id="treeNo">${data.false_path || "Reject"}</div>
        </div>
      </div>
    </div>
    <div class="tree-input-area">
      <label>Try different age:</label>
      <input type="number" id="treeAgeInput" value="20" />
      <button class="btn-primary" onclick="runDecision()" style="padding:10px 18px">Test</button>
    </div>
  </div>`;

  container.innerHTML = html;
  window.runDecision = function () {
    const age = Number(document.getElementById("treeAgeInput").value);
    document.getElementById("treeAgeVal").textContent = age;
    const yesNode = document.getElementById("treeYes");
    const noNode = document.getElementById("treeNo");
    yesNode.classList.remove("active-yes");
    noNode.classList.remove("active-no");

    if (age >= 18) {
      yesNode.classList.add("active-yes");
    } else {
      noNode.classList.add("active-no");
    }
  };
  // run once
  setTimeout(runDecision, 100);
}

// ---------- LOOP ANIMATOR ----------
function renderLoopAnimator(container, data) {
  const start = data.start || 1;
  const end = data.end || 5;
  let current = start - 1;
  let running = false;

  let html = `<div class="playground-container">
    <div class="playground-title">🖐 Loop Visualizer – Watch it step by step</div>
    <div class="loop-animator">
      <div class="loop-status" id="loopStatus">Press Play or Step</div>
      <div class="loop-visual" id="loopVisual"></div>
      <div class="loop-controls">
        <button onclick="loopPlay()">▶ Play</button>
        <button onclick="loopStep()">Step →</button>
        <button onclick="loopReset()" style="background:#64748b">Reset</button>
      </div>
    </div>
  </div>`;

  container.innerHTML = html;

  function drawSteps() {
    const visual = document.getElementById("loopVisual");
    visual.innerHTML = "";
    for (let i = start; i < end; i++) {
      const div = document.createElement("div");
      div.className = "loop-step-box" + (i === current ? " active" : "");
      div.id = "loopStep" + i;
      div.textContent = `i = ${i}  →  print(${i})`;
      visual.appendChild(div);
    }
  }

  window.loopStep = function () {
    if (current < end - 1) {
      current++;
      document.getElementById("loopStatus").textContent = `Current: i = ${current}`;
      drawSteps();
    } else {
      document.getElementById("loopStatus").textContent = "Loop finished!";
    }
  };

  window.loopReset = function () {
    current = start - 1;
    running = false;
    document.getElementById("loopStatus").textContent = "Press Play or Step";
    drawSteps();
  };

  window.loopPlay = async function () {
    if (running) return;
    running = true;
    loopReset();
    for (let i = start; i < end; i++) {
      if (!running) break;
      current = i;
      document.getElementById("loopStatus").textContent = `Current: i = ${current}`;
      drawSteps();
      await new Promise((r) => setTimeout(r, 700));
    }
    document.getElementById("loopStatus").textContent = "Loop finished!";
    running = false;
  };

  drawSteps();
}

// ---------- FUNCTION MACHINE ----------
function renderFunctionMachine(container, data) {
  const name = data.name || "double";
  const process = data.process || "x * 2";

  let html = `<div class="playground-container">
    <div class="playground-title">🖐 Function Machine – Put a number in, get a result out</div>
    <div class="function-machine">
      <div class="machine-io">
        <div class="label">INPUT</div>
        <div class="value-box" id="machineInput">10</div>
      </div>
      <div class="machine-arrow">→</div>
      <div class="machine-body">
        <div class="name">${name}()</div>
        <div class="process">${process}</div>
      </div>
      <div class="machine-arrow">→</div>
      <div class="machine-io">
        <div class="label">OUTPUT</div>
        <div class="value-box" id="machineOutput">20</div>
      </div>
    </div>
    <div class="machine-controls">
      <input type="number" id="machineInVal" value="10" />
      <button onclick="runMachine()">Run Machine</button>
    </div>
  </div>`;

  container.innerHTML = html;

  window.runMachine = function () {
    const val = Number(document.getElementById("machineInVal").value);
    document.getElementById("machineInput").textContent = val;
    // simple evaluation for demo
    let result = val;
    if (process.includes("* 2")) result = val * 2;
    else if (process.includes("+ 10")) result = val + 10;
    document.getElementById("machineOutput").textContent = result;
    document.getElementById("machineOutput").style.transform = "scale(1.2)";
    setTimeout(() => {
      document.getElementById("machineOutput").style.transform = "scale(1)";
    }, 300);
  };
}

// ---------- CODE RUNNER COMPONENT ----------
function renderCodeRunner(container, examples = []) {
  const first = examples[0] || { title: "Try it", code: "print('Hello')" };
  let html = `<div class="code-area">
    <div class="code-header">
      <span>💻 ${first.title}</span>
      <button onclick="runCurrentCode()" class="btn-primary" style="padding:6px 14px;font-size:0.85rem">▶ Run</button>
    </div>
    <textarea class="code-editor" id="codeEditor">${first.code}</textarea>
    <div class="output-area" id="codeOutput">Output will appear here...</div>
  </div>`;

  if (examples.length > 1) {
    html += `<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">`;
    examples.forEach((ex, i) => {
      html += `<button class="btn-secondary" style="padding:6px 12px;font-size:0.85rem" onclick="loadExample(${i})">${ex.title}</button>`;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
  window._codeExamples = examples;

  window.loadExample = function (i) {
    document.getElementById("codeEditor").value = examples[i].code;
    document.getElementById("codeOutput").textContent = "Output will appear here...";
  };

  window.runCurrentCode = async function () {
    const code = document.getElementById("codeEditor").value;
    const out = document.getElementById("codeOutput");
    out.textContent = "Running...";
    const result = await runPython(code);
    out.textContent = result;
  };
}

// ---------- DICTIONARY TABLE ----------
function renderDictionaryPlayground(container, data) {
  const initial = data.initial || { name: "Rahul", age: 19, marks: 82 };
  let entries = Object.entries(initial);

  function draw() {
    let html = `<div class="playground-container">
      <div class="playground-title">🖐 Dictionary – Click a key to highlight its value</div>
      <table style="width:100%;border-collapse:collapse;margin:16px 0">
        <thead>
          <tr style="background:#1e293b">
            <th style="padding:12px;text-align:left;border:1px solid #334155">KEY (name tag)</th>
            <th style="padding:12px;text-align:left;border:1px solid #334155">VALUE</th>
          </tr>
        </thead>
        <tbody id="dictBody">`;

    entries.forEach(([k, v], i) => {
      html += `<tr class="dict-row" onclick="highlightDict(${i})" style="cursor:pointer">
        <td style="padding:12px;border:1px solid #334155;color:#a5b4fc">${k}</td>
        <td style="padding:12px;border:1px solid #334155" id="dictVal${i}">${v}</td>
      </tr>`;
    });

    html += `</tbody></table>
      <div class="list-controls">
        <input type="text" id="dictKey" placeholder="New key" style="width:100px" />
        <input type="text" id="dictVal" placeholder="New value" style="width:100px" />
        <button onclick="dictAdd()" style="background:#22c55e">+ Add</button>
      </div>
      <p style="text-align:center;color:#94a3b8;margin-top:12px;font-size:0.9rem" id="dictInfo">
        Click any row. In Python you write: <code>student["key"]</code>
      </p>
    </div>`;
    container.innerHTML = html;
  }

  window.highlightDict = function (i) {
    document.querySelectorAll(".dict-row").forEach(r => r.style.background = "");
    const rows = document.querySelectorAll(".dict-row");
    if (rows[i]) rows[i].style.background = "rgba(99,102,241,0.25)";
    const [k, v] = entries[i];
    document.getElementById("dictInfo").innerHTML =
      `Key <strong>"${k}"</strong> → Value <strong>${v}</strong> &nbsp;|&nbsp; Python: <code>student["${k}"]</code>`;
  };

  window.dictAdd = function () {
    const k = document.getElementById("dictKey").value.trim();
    const v = document.getElementById("dictVal").value.trim();
    if (!k) return;
    entries.push([k, isNaN(v) ? v : Number(v)]);
    draw();
  };

  draw();
}

function renderWhileDemo(container) {
  container.innerHTML = `<div class="playground-container">
    <div class="playground-title">🖐 While Loop Idea</div>
    <p style="text-align:center;padding:20px;line-height:1.7">
      Condition is True? → Do action → Check condition again → … → Stop when False<br><br>
      <strong>Example:</strong> Keep asking the user until they type "quit"
    </p>
  </div>`;
}

function renderClassDemo(container) {
  container.innerHTML = `<div class="playground-container">
    <div class="playground-title">🖐 Class = Factory</div>
    <div style="text-align:center;padding:20px">
      <div style="display:inline-block;background:#6366f1;padding:16px 28px;border-radius:16px;margin-bottom:16px">
        <strong>Dog Factory (Class)</strong><br>
        <small>blueprint: name + bark()</small>
      </div>
      <div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap">
        <div class="var-box"><div class="var-name">dog1</div><div class="var-value">Buddy</div></div>
        <div class="var-box"><div class="var-name">dog2</div><div class="var-value">Lucy</div></div>
      </div>
      <p style="color:#94a3b8;margin-top:16px">One factory can make many objects. Each object has its own data.</p>
    </div>
  </div>`;
}

function renderFileDemo(container) {
  container.innerHTML = `<div class="playground-container">
    <div class="playground-title">🖐 File = Notebook on the computer</div>
    <p style="text-align:center;padding:20px;line-height:1.8">
      Open notebook → Write something → Close it<br>
      Later → Open again → Read what you wrote<br><br>
      That is how programs save data forever.
    </p>
  </div>`;
}

function renderSystemDemo(container) {
  container.innerHTML = `<div class="playground-container">
    <div class="playground-title">🖐 Talking to folders & files</div>
    <p style="text-align:center;padding:20px;line-height:1.8">
      Python can ask the computer:<br>
      “What files are here?” &nbsp;•&nbsp; “Does this file exist?” &nbsp;•&nbsp; “Make a new folder”<br><br>
      This is the beginning of real system tools (from Book A).
    </p>
  </div>`;
}

function renderGuiDemo(container) {
  container.innerHTML = `<div class="playground-container">
    <div class="playground-title">🖐 GUI = Window with buttons</div>
    <div style="background:#1e293b;border:2px solid #475569;border-radius:12px;padding:24px;max-width:320px;margin:20px auto;text-align:center">
      <div style="font-weight:700;margin-bottom:16px">My First Window</div>
      <button style="background:#6366f1;color:white;border:none;padding:10px 24px;border-radius:8px;cursor:pointer">Click me</button>
      <p style="color:#94a3b8;margin-top:16px;font-size:0.9rem">This is the idea of a GUI (from Book A)</p>
    </div>
  </div>`;
}
