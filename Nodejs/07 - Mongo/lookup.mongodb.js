/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'store';
const userCollection = 'users';
const salesCollection = 'sales';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(userCollection);
db.createCollection(salesCollection);

use('store');
db.users.insertMany([
    {
        name: 'kuku', userId: 1, address: {
            city: 'TLV',
            street: 'Haim Levanon',
            number: 10
        }
    },
    {
        name: 'lulu', userId: 2, address: {
            city: 'TLV',
            street: 'Haim Levanon',
            number: 30
        }
    },
    {
        name: 'momo', userId: 3, address: {
            city: 'Haifa',
            street: 'Dror',
            number: 2
        }
    },
    {
        name: 'yoyo', userId: 4, address: {
            city: 'Haifa',
            street: 'Dror',
            number: 13
        }
    },
]);

use('store');
db.sales.insertMany([
    {
        date: new Date(), by: 1, items: ["milk", "cheese", "tomatos", "cucumbers"]
    },
    {
        date: new Date(), by: 1, items: ["cake", "chocolate"]
    },
    {
        date: new Date(), by: 2, items: ["potatos", "cheese"]
    },
]);

//מציאת כל ההזמנות שמשתמש מסוים ביצע
use('store');
db.users.aggregate([
    {
        $lookup: {
            from: 'sales',
            localField: 'userId',
            foreignField: 'by',
            as: 'sales'
        }
    },
    {
        $match: { sales: { $exists: true, $ne: [] } }
    },
    {
        $project: { address: 0, "sales._id": 0, "sales.by": 0 }
    },
    {
        $out: 'users_sales'
    }
]);
db.users_sales.find();