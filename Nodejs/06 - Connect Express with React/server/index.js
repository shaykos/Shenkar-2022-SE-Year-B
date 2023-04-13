//ייבוא חבילות
const express = require('express');
const path = require('node:path');
const cors = require('cors');

//הגדרת פורט
const PORT = process.env.PORT || 5008;

//ייצור השרת
const server = express();

//json הפעלת האפשרות לקבל 
server.use(express.json());

//אפשרות לגשת לשרת מכתובת אחרת
server.use(cors());

//יצירת נתיבים
server.get('/', async (req, res) => {
    res.send('home');
});

//שימוש בנתיב ייחודי עבור משתמשים. הקוד נכתב בקובץ נפרד אותו מייבאים
server.use('/api/users', require('./routes/users'));

//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));