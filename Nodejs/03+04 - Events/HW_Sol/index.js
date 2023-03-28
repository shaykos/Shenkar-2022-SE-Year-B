const { EventHandler } = require('./models/EventHandler');
const { Create, Read, GetRandNumber } = require('./functions');

async function Main() {

    //יצירת הקבצים
    for (let i = 1; i <= 5; i++) {
        await Create(i, `text${i} text${i} text${i}`);
    }

    //יצירה של אובייקט המטפל באירועים
    const myHandler = new EventHandler();

    //שיוך אירוע 
    myHandler.on('ReadFile', async function () {
        let n = GetRandNumber();
        let txt = await Read(n);
        console.log(`txt from ReadFile Event`, txt);

        //הפעלת אירוע
        myHandler.emit(`EndProgram`);
    });

    //שיוך אירוע 
    myHandler.on('EndProgram', async function () {
        for (let i = 1; i <= 5; i++) {
            let txt = await Read(i);
            console.log(`${txt}\n**********`);
        }
    });

    //הפעלת אירוע לאחר זמן מסויים
    let t = 1;
    let interval = setInterval(() => {
        console.log(t++);
        if(t == 4){
            //הפעלת האירוע של קריאת קובץ
            myHandler.emit('ReadFile');
            //הפסקת הזמן
            clearInterval(interval);
        }
    }, 1000);

}

Main();