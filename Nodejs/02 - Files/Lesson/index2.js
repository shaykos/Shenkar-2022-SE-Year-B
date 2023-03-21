//import 
const fs = require('node:fs');
const path = require('node:path');


// let p = path.join(__dirname, 'files', 'first.txt');
// console.log(p);


//read file
fs.readFile(path.join(__dirname, 'files', 'first.txt'), (err, data) => {
    if (err) throw err;

    console.log(data.toString());
});

//write file
fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'some text to insert', (err)=>{
    if(err) throw err;

    console.log('write is done');
});

//delete file
fs.unlink(path.join(__dirname, 'files', 'new.txt'), (err)=>{
    if(err) throw err;
    
    console.log('delete is done');
});

//update file
fs.appendFile(path.join(__dirname, 'files', 'first.txt'), '\nMufash Is THE KINGGG!!', (err)=>{
    if(err) throw err;

    console.log('update is done');
});


fs.appendFile(path.join(__dirname, 'files', 'second.txt'), 'Mufash Is THE KINGGG!!', (err)=>{
    if(err) throw err;

    console.log('update is done');
});



