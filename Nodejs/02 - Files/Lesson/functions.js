const fs = require('node:fs/promises');
const path = require('node:path');

// async function HandleFiles(){}
exports.HandleFiles = async () => {
    /*
     ** Read
     ** Delete 
     ** Write to new file
     ** Append some more text
     ** Rename the file 
     */

    let data = await fs.readFile(path.join(__dirname, 'files', 'first2.txt'));
    await fs.unlink(path.join(__dirname, 'files', 'first2.txt'));
    await fs.writeFile(path.join(__dirname, 'files', 'myFile.txt'), data);
    await fs.appendFile(path.join(__dirname, 'files', 'myFile.txt'), '\n\nBooo!!');
    await fs.rename(path.join(__dirname, 'files', 'myFile.txt'), path.join(__dirname, 'files', 'new.txt'));
}

//module.exports = {HandleFiles};