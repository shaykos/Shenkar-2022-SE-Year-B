//ייבוא של הפונקציות
const { MaxNum, PrintXTimes, DigitsAfterDot, DigitsAfterDotString } = require('./functions');

//Main יצירת ה 
function Main() {
    console.log('Max = ', MaxNum(1, 2, 3));
    PrintXTimes("Hello", 4);
    console.log('Digits After Dot = ', DigitsAfterDot(71.3456));
    let res = DigitsAfterDotString(7.1341561);
    console.log('DigitsAfterDotString =', res);
}

//Main הפעלת ה
Main();
