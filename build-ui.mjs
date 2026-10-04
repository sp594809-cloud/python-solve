// Build the static distribution from the current source; omit authoring data/tools.
import {cpSync,rmSync,mkdirSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const file of ['index.html','loops-adventure.html','service-worker.js','manifest.json','css','js','icons','python'])cpSync(file,'dist/'+file,{recursive:true});
mkdirSync('dist/probability/data',{recursive:true});
for(const file of ['index.html','app.js','styles.css','practice-book.pdf','chapter-4.html'])cpSync('probability/'+file,'dist/probability/'+file);
cpSync('probability/data/chapter-3.js','dist/probability/data/chapter-3.js');
console.log('Built shared UI and Chapter 3 reader');
cpSync('probability/data/chapter-4.js','dist/probability/data/chapter-4.js');

mkdirSync('dist/maths/data',{recursive:true});
for(const file of ['index.html','app.js','styles.css','practice-book.pdf','coverage.json','pages'])cpSync('maths/'+file,'dist/maths/'+file,{recursive:true});
cpSync('maths/data/solutions.js','dist/maths/data/solutions.js');
console.log('Built Mathematics I Chapters 6–8 reader');
