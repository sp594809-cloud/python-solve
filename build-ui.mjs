// Build the static distribution from the current source; omit authoring data/tools.
import {cpSync,rmSync,mkdirSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const file of ['index.html','loops-adventure.html','service-worker.js','manifest.json','css','js','icons'])cpSync(file,'dist/'+file,{recursive:true});
mkdirSync('dist/probability/data',{recursive:true});
for(const file of ['index.html','app.js','styles.css','practice-book.pdf'])cpSync('probability/'+file,'dist/probability/'+file);
cpSync('probability/data/chapter-3.js','dist/probability/data/chapter-3.js');
console.log('Built shared UI and Chapter 3 reader');
