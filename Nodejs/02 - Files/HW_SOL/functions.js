//import 
const { mkdir, appendFile, readFile, unlink, rename } = require('node:fs/promises');
const { existsSync } = require('fs');
const path = require('node:path');


async function Create(n, text) {
    //check if the folder exists
    if (!existsSync(path.join(__dirname, 'files'))) {
        await mkdir(path.join(__dirname, 'files'));
    }

    //create the file
    await appendFile(path.join(__dirname, 'files', `file${n}.txt`), text);
    console.log(`created file${n}`);
}

async function Read(n) {
    try {
        let data = await readFile(path.join(__dirname, 'files', `file${n}.txt`));
        return data.toString();
    } catch (err) {
        console.error(err);
    }
}

function GetRandNumber() {
    const MAX = 5, MIN = 1;
    //Math.randon() * (MAX - MIN) + MIN
    return Math.round(Math.random() * (MAX - MIN) + MIN);
}

async function ConcatFiles() {
    try {
        //delete file
        if (existsSync(path.join(__dirname, 'files', 'concatTextFile.txt')))
            await unlink(path.join(__dirname, 'files', 'concatTextFile.txt'));

        //get random number between 1 and 5
        let n = GetRandNumber();

        //read files 
        for (let i = 1; i <= n; i++) {
            let text = await Read(i);
            await appendFile(path.join(__dirname, 'files', 'stringtxt.txt'), `${text}\n`);
        }

        //change file name
        await rename(path.join(__dirname, 'files', 'stringtxt.txt'), path.join(__dirname, 'files', 'concatTextFile.txt'));
        console.log(`created concatTextFile until n = ${n}`)

    } catch (err) {
        console.error(err);
    }
}


module.exports = { Create, ConcatFiles }