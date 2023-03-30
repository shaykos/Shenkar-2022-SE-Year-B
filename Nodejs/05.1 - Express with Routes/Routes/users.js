//ייבוא חבילות
const express = require('express');

//יצירת הראוטר
const UsersRouter = express.Router();

//הגדרת פעולות גט ופוסט
UsersRouter.get('/', async (req, res) => {
    let users = [
        { id: 1, name: "kuku" },
        { id: 2, name: "lulu" }
    ]

    res.status(200).json(users);
});

UsersRouter.get(`/:name`, async (req, res) => {
    //שליפת הפרמטר שנשלח
    let { name } = req.params;

    //דימוי מסד נתונים באמצעות מערך
    let users = [
        { id: 1, name: "kuku" },
        { id: 2, name: "lulu" }
    ];

    //שליפת היוזר המתאים
    let user = users.find((u) => u.name == name);

    //שליחת התשובה לקליינט
    if (user)
        res.status(200).json(user);
    else
        res.status(404).json({ msg: "user not found" });

});

UsersRouter.post(`/add`, async (req, res) => {
    try {
        //שליפת המידע שנשלח
        let { id, name } = req.body;
        // let id = req.body.id;

        //דימוי מסד נתונים באמצעות מערך
        let users = [
            { id: 1, name: "kuku" },
            { id: 2, name: "lulu" }
        ];

        //יצירת היוזר המתאים
        let user = { id, name };

        //הוספת היוזר למאגר
        users.push(user);

        //שליחת התשובה לקליינט
        res.status(201).json(users);

    } catch (error) {
        res.status(500).json({ error });
    }



});

//ייצוא הראוטר
module.exports = UsersRouter;