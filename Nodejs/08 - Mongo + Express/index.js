//ייבוא ואתחול
const express = require('express');
const path = require('node:path');
const cors = require('cors');
const PORT = 5500;

//יצירת השרת
let server = express();
server.use(cors());


//ניתוב
server.use('/api/users', require('./routes/users.route'));


//הפעלת השרת
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
