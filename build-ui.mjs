// Build the static distribution from the current source; omit authoring data/tools.
import {cpSync,rmSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
execFileSync(process.execPath,['scripts/build-study-index.cjs'],{stdio:'inherit'});
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const file of ['index.html','loops-adventure.html','service-worker.js','manifest.json','css','js','icons','python','assets','study'])cpSync(file,'dist/'+file,{recursive:true});
mkdirSync('dist/probability/data',{recursive:true});
for(const file of ['index.html','app.js','styles.css','practice-book.pdf','chapter-4.html'])cpSync('probability/'+file,'dist/probability/'+file);
cpSync('probability/data/chapter-3.js','dist/probability/data/chapter-3.js');
console.log('Built shared UI and Chapter 3 reader');
cpSync('probability/data/chapter-4.js','dist/probability/data/chapter-4.js');

mkdirSync('dist/maths/data',{recursive:true});
for(const file of ['index.html','app.js','styles.css','practice-book.pdf','coverage.json','pages'])cpSync('maths/'+file,'dist/maths/'+file,{recursive:true});
cpSync('maths/data/solutions.js','dist/maths/data/solutions.js');
console.log('Built Mathematics I Chapters 6–8 reader');

cpSync('maths/share','dist/maths/share',{recursive:true});
cpSync('probability/share','dist/probability/share',{recursive:true});

mkdirSync("dist/internship/projects",{recursive:true});
for(const file of ["index.html","styles.css","app.js","worker.js","curriculum.js","learning-ui.js"])cpSync("internship/"+file,"dist/internship/"+file);
cpSync("internship/projects","dist/internship/projects",{recursive:true});
console.log("Built Python for Internship: 16 weeks, 112 lessons, 16 project kits and JupyterLite");

cpSync("internship/notebook-content","dist/internship/notebook-content",{recursive:true});
cpSync("internship/notebooks","dist/internship/notebooks",{recursive:true});
