// Runs Python in a disposable Web Worker so long loops never block the interface.
self.onmessage = async ({data}) => {
  let pyodide;
  try {
    self.postMessage({type:'status',text:'Downloading Python runtime…'});
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js');
    pyodide=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'});
    const output=[];
    pyodide.setStdout({batched:text=>output.push(text)});
    pyodide.setStderr({batched:text=>output.push(text)});
    const packages=[];
    if(/(?:import numpy|from numpy)/.test(data.code))packages.push('numpy');
    if(/(?:import matplotlib|from matplotlib)/.test(data.code))packages.push('matplotlib');
    if(packages.length){self.postMessage({type:'status',text:'Loading '+packages.join(', ')+'…'});await pyodide.loadPackage(packages);}
    for(const file of data.files||[])if(/^[A-Za-z0-9_. -]+$/.test(file.name)&&!file.name.startsWith('.'))pyodide.FS.writeFile('/home/pyodide/'+file.name,file.content);
    for(const module of data.modules||[])if(data.modules.length>1)pyodide.FS.writeFile('/home/pyodide/'+module.name,module.content);
    pyodide.globals.set('__input_text',data.inputs);
    await pyodide.runPythonAsync(`import builtins, os, sys\nos.chdir('/home/pyodide')\nsys.path.insert(0, '/home/pyodide')\n__answers = iter(__input_text.splitlines())\ndef __answer(prompt=''):\n    try:\n        value = next(__answers)\n    except StopIteration:\n        raise EOFError('Not enough input lines. Enter one answer per prompt.')\n    print(prompt + value)\n    return value\nbuiltins.input = __answer`);
    if(packages.includes('matplotlib'))await pyodide.runPythonAsync("import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nplt.show = lambda: None");
    self.postMessage({type:'status',text:'Running…'});
    const code=data.modules?.length>1?data.modules.find(m=>m.name==='main.py').content:data.code;
    let error=null;try{await pyodide.runPythonAsync(code);}catch(e){error=String(e);}
    let plots=[];
    if(packages.includes('matplotlib')){
      const proxy=await pyodide.runPythonAsync("import io, base64\n__plots = []\nfor __number in plt.get_fignums():\n    __buffer = io.BytesIO()\n    plt.figure(__number).savefig(__buffer, format='png', bbox_inches='tight')\n    __plots.append(base64.b64encode(__buffer.getvalue()).decode('ascii'))\nplt.close('all')\n__plots");
      plots=proxy.toJs();proxy.destroy();
    }
    self.postMessage({type:'result',output:output.join('\n'),error,plots});
  } catch(e) {self.postMessage({type:'result',output:'',error:'Python runtime could not start: '+String(e),plots:[]});}
};
