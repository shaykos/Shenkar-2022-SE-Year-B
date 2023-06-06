const UserModel = require('../models/user.model');
const UsersRoutes = require('express').Router();

UsersRoutes.post('/register', async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = await UserModel.Register(username, email, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error });
    }
});

UsersRoutes.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.Login(email, password);
        if (!user) // if(user == null || user == undefined)
            res.status(401).json({ msg: "incorrect details" });
        else
            res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = UsersRoutes;