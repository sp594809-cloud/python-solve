/* Requires npm package pyodide@0.26.2; CLI validation of the worker itself. */
const fs=require('fs'),vm=require('vm'),path=require('path');
const {loadPyodide}=require('pyodide');
const root=path.resolve(__dirname,'..');
(async()=>{const course=JSON.parse(fs.readFileSync(path.join(root,'curriculum.json'),'utf8'));let messages=[];const sandbox={self:{postMessage:m=>messages.push(m)},importScripts:()=>{},loadPyodide:()=>loadPyodide()};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(root,'worker.js'),'utf8'),sandbox);let checks=0;
for(const [i,l] of course.lessons.entries()){if(l.language!=='python')continue;messages=[];await sandbox.self.onmessage({data:{id:i,code:l.reference,tests:l.tests,packages:l.packages}});const result=messages.find(m=>m.type==='done');if(!result||!result.results.every(r=>r.pass))throw Error(l.id+': '+JSON.stringify(messages));checks+=result.results.length;}
// Check stdout, fresh globals and failure reporting through the real worker.
messages=[];await sandbox.self.onmessage({data:{id:100,code:'print("student code")\nsecret_marker = 10',tests:[],packages:[]}});if(!messages.find(m=>m.type==='done').output.includes('student code'))throw Error('Missing stdout');
messages=[];await sandbox.self.onmessage({data:{id:101,code:'assert "secret_marker" not in globals()',tests:[{label:'Expected failure',code:'assert False'}],packages:[]}});if(messages.find(m=>m.type==='done').results[0].pass)throw Error('Failure was marked passed');
console.log(`PASS: actual reusable Pyodide worker, ${checks} reference cases, stdout, isolated globals, failing assertion reporting`);
})().catch(e=>{console.error(String(e));process.exit(1)});
