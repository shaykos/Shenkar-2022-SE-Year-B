const MenuModel = require('../models/menu.model');

const MenuRoute = require('express').Router();

//Create (using http post)

//Read (using http get)
MenuRoute.get('/', async (req, res) => {
    try {
        let data = await MenuModel.GetAllItems();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});

MenuRoute.get('/:max_price', async (req, res) => {
    try {
        let { max_price } = req.params;
        let data = await MenuModel.FindByPrice(Number(max_price));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

//Update (using http put)
MenuRoute.put('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let { price } = req.body;
        
        let data = await MenuModel.UpdateItemPrice(id, { price });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});


//Delete (using http delete)



module.exports = MenuRoute;