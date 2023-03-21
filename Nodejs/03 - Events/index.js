const { EventHandler } = require('./models/EventHandler');
const { PrintKuku, WriteLogError } = require('./functions');

function Main() {

    // //יצירת אובייקט האחראי להגדרת אירועים והפעלתם
    let myEventHandler = new EventHandler();

    // //kuku מגדיר אירוע שקוראים לו 
    // //PrintKuku כל פעם שאירוע זה מתקיים תפעל הפונקציה
    // myEventHandler.on('kuku', PrintKuku);

    // setTimeout(() => {
    //     //kuku הפעלת אירוע בשם 
    //     myEventHandler.emit('kuku', 'some text');
    // }, 1000 * 7)

    // console.log('new Date()', new Date().toLocaleString())


    myEventHandler.on('LogError', WriteLogError);

    setTimeout(() => {

        myEventHandler.emit('LogError', 'Error while fetching data from SQL server');
    }, 1000 * 3)



}

Main();
