//ייבוא ספריה או מודול
const os = require('node:os');
//const funcs = require('./functions');
const {Sum, Divider} = require('./functions');

//Main יצירה של פונקציית 
function Main() {
    console.log(os.type());
    console.log(os.version());
    console.log(os.homedir());

    // __dirname --> משתנה קבוע המצביע לתיקייה הנוכחית של הפרויקט
    // __filename --> משתנה קבוע המצביע לקובץ הנוכחי 
    console.log('__dirname =', __dirname);
    console.log('__filename =', __filename);

    console.log(Sum(7, 9));
    console.log(Divider(9, 18));
}

//Main הרצת ה 
Main();



