//ייבוא ספריות
const express = require('express');

//הגדרת פורט
const PORT = process.env.PORT || 8000;

//יצירת השרת
const server = express();

//json הוספת האפשרות לקבל 
server.use(express.json());

//some routes
server.use(`/api/users`, require('./Routes/users'));


//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));