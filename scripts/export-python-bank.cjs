// Export classic-script databases for validation without opening a browser.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context={console:{log(){}}};context.window=context;vm.createContext(context);
for(const name of ['practice-book-questions.js',...Array.from({length:10},(_,i)=>`sem3-unit${i+1}.js`),'sem3-practice-book.js'])vm.runInContext(fs.readFileSync(path.join(root,'js',name),'utf8'),context);
process.stdout.write(vm.runInContext('JSON.stringify({sem1:PRACTICE_BOOK,sem3:PRACTICE_BOOK_SEM3})',context));
