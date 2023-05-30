const UserModel = require('../models/user');
const UsersRoutes = require('express').Router();

UsersRoutes.get('/', async (req, res) => {
    try {
        let data = await UserModel.FindAllUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

UsersRoutes.get('/:city', async (req, res) => {
    try {
        let { city } = req.params;
        let data = await UserModel.FindByCity(city);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = UsersRoutes;