//ייבוא חבילות
const express = require('express');
const path = require('node:path');

//הגדרת הפורט
const PORT = process.env.PORT || 8000;

//יצירת המופע השרת עצמו
const server = express();

//מבקש את הדף הראשי
server.get('^/$|index(.html)?', (req, res) => {
    //console.log(req);
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.get('/kuku(.html)?', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'kuku.html'));
});

server.get('/users', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'data', 'users.json'));
})

server.get('/users2', (req, res) => {
    let users = [
        {
            "id": 1,
            "name": "user 1"
        },
        {
            "id": 2,
            "name": "user 2"
        },
    ]
    res.status(200).json(users);
})

server.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


//הפעלת השרת
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});