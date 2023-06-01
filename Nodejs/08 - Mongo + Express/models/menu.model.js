const DB = require('../utils/db');

class MenuModel {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //פעולות נוספות

    //הוספה 
    //עריכה
    //מחיקה
    //שליפה
    static async GetAllItems() {
        return await new DB().FindAll('Menu');
    }

    static async FindByPrice(max_price) {
        let query = { price: { $lte: max_price } };
        return await new DB().FindAll('Menu', query);
    }

    static async UpdateItemPrice(id, doc) {
        return await new DB().UpdateById('Menu', id, doc);
    }


}

module.exports = MenuModel;