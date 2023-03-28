const { existsSync } = require('node:fs');
const { appendFile, mkdir } = require('node:fs/promises');
const path = require('path');

async function WriteLogError(msg) {
    try {
        if (!existsSync(path.join(__dirname, 'files')))
            await mkdir(path.join(__dirname, 'files'));
        /*
        log יצירת ההודעה שתתווסף לקובץ 
        new Date() --> תאריך נוכחי
         */
        let logMsg = `${new Date().toISOString()}\tuser__name\t${num}\t${msg}\n-----------------------\n\n`;
        await appendFile(path.join(__dirname, 'files', 'log.txt'), logMsg);
    } catch (error) {
        console.error(error);
    }

}


function PrintKuku(txt) {
    console.log(txt);
}

module.exports = { PrintKuku, WriteLogError }