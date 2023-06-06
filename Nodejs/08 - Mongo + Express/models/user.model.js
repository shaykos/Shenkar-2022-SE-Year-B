const DB = require('../utils/db');
const bcrypt = require('bcrypt');
const { users } = require('../utils/mockdata');

class UserModel {

    _id;
    username;
    email;
    password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }


    //פעולות נוספות

    //הוספה 
    static async Register(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = await bcrypt.hash(password, 10);
        return await new DB().Insert('Users', { ...this });
    }

    //עריכה
    //מחיקה
    //שליפה
    static async Login(email, password) {
        let query = { email: email }
        let user = await new DB().FindOne("Users", query);
        if (!user || !(await bcrypt.compare(password, user.password)))
            return null;

        return {
            _id: user._id,
            username: user.username,
            email: user.email
        };
    }



    // static async FindAllUsers() {
    //     return await new DB().FindAll('users');
    // }

    // static async FindByCity(city) {
    //     let query = { "address.city": city }
    //     return await new DB().FindAll('users', query);
    // }
}

module.exports = UserModel;