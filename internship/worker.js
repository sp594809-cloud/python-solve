/* Persistent Pyodide runtime; fresh globals for each run, sequential jobs. */
let runtime;
self.onmessage=async({data})=>{
 const {id,code,tests,packages}=data;let output='';
 const emit=value=>{if(output.length<18000)output+=String(value)+'\n'};
 try{
  if(!runtime){self.postMessage({id,type:'status',message:'Loading Python runtime (first run may take a minute)…'});importScripts('https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js');runtime=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/'});}
  runtime.setStdout({batched:emit});runtime.setStderr({batched:emit});
  runtime.setStdin({stdin:()=>{throw new Error('This exercise uses functions. Add print(your_function(...)) to see an output; input() is not supported here.')}});
  const allowed=(packages||[]).filter(p=>['scikit-learn','numpy','sqlite3'].includes(p));
  if(allowed.length){self.postMessage({id,type:'status',message:'Loading model packages…'});await runtime.loadPackage(allowed);}
  const globals=runtime.runPython('dict()');let results=[];
  try{
   await runtime.runPythonAsync(code,{globals});
   const studentOutput=output.trim();
   for(const test of tests||[]){try{if('outputEquals' in test){if(studentOutput!==test.outputEquals)throw new Error('Expected output: '+test.outputEquals+'; received: '+studentOutput);}else await runtime.runPythonAsync(test.code,{globals});results.push({label:test.label,pass:true});}catch(e){results.push({label:test.label,pass:false,error:String(e).slice(-1800)});}}
  }finally{globals.destroy();}
  self.postMessage({id,type:'done',output,results});
 }catch(e){self.postMessage({id,type:'error',error:String(e).slice(-3000),output});}
};
