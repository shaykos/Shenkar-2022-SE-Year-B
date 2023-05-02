

const database = 'Library';
const collection = 'books';

// The current database to use.
use(database);

// Create a new collection.
//db.createCollection(collection);

//insert
// db.books.insertMany([
//   {
//     "_id": "62680265b0233155a5dda5d7",
//     "name": "harry potter",
//     "author": "J.K Rolling",
//     "genre": "Fantasy",
//     "isActive": true,
//     "createdAt": "2022-04-26T14:32:05.825Z",
//     "__v": 0
//   },
//   {
//     "_id": "626802ed456890abc4706bc7",
//     "name": "harry potter 2",
//     "author": "J.K Rolling",
//     "genre": "Fantasy",
//     "isActive": true,
//     "createdAt": "2022-04-26T14:34:21.258Z",
//     "__v": 0
//   }
// ]);

//find
//db.books.find({isActive:false}, {name:1});
