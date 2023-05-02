/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'Search';
const collection = 'stam';

// Create a new database.
use(database);

// Create a new collection.
// db.createCollection(collection);

// db.stam.insertMany([
//     { "arr": [1, 2, 3, 4] },
//     { "arr": [1, 3, 5, 7] },
//     { "arr": [3, 5, 4, 7] },
//     { "arr": [10, 13, 4, 7] }
// ]);

//find
//db.stam.find();
// קיים הערך 1 arr בתוך התכונה 
// db.stam.find({arr:{$in:[1]}});

// //לא קיים הערך 1 arr בתוך התכונה 
// db.stam.find({arr:{$nin:[1]}});

//גדול מ-4 וקטן מ-6 arr שליפת המסמכים בהם לפחות אחד מהערכים במערך  
// db.stam.find({arr:{$elemMatch:{$gt:4, $lt:6}}});
