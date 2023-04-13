//ייבוא הספריות והגדרת האובייקט 
// const express = require('express');
// const UsersRoute = express.Router();
const UserRouter = require('express').Router();

//יצירת מערך של יוזרים
let users = [
    { id: 1, name: 'koko' },
    { id: 2, name: 'lolo' },
    { id: 3, name: 'momo' }
]

UserRouter.get(`/`, async (req, res) => {
    res.status(200).json(users);
});

UserRouter.get(`/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        let u = users.find((user) => user.id == id);
        if (u) // if(u != null || u != undefined)
            res.status(200).json(u);
        else
            res.status(404).json({ msg: 'user not found' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

UserRouter.post('/add', async (req, res) => {
    try {
        const { id, name } = req.body;
        users.push({ id, name });
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = UserRouter;

