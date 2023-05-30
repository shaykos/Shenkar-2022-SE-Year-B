const DB = require('../utils/db');

class User {
    name;
    userId;
    address;

    constructor(name, userId, address) {
        this.address = address;
        this.userId = userId;
        this.name = name;
    }


    //פעולות נוספות

    //הוספה 
    //עריכה
    //מחיקה
    //שליפה
    static async FindAllUsers() {
        return await new DB().FindAll('users');
    }

    static async FindByCity(city) {
        let query = { "address.city": city }
        return await new DB().FindAll('users', query);
    }
}

module.exports = User;