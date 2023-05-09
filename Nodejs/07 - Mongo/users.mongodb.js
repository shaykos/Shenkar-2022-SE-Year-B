const database = 'test2';

// The current database to use.
use(database);

//copy to another collection
// db.createCollection('users2');

// db.users.find().forEach((doc)=>{db.users2.insertOne(doc)});

//db.users.deleteOne({"address.city": "TLV"});

//db.users.deleteMany({ phone: { $exists: false } });

//db.users.deleteMany({})

// db.users.insertMany([
//     { name: "tom", age: 25 },
//     { name: "bob", status: "P" },
//     { name: "dana", age: 31 },
//     { name: "lilah", age: 25, status: "A" }
// ])

// db.users.deleteMany({status:{$exists: false}});
// db.users.deleteMany({age:{$gte:25}});
// db.users.countDocuments();

//name עדכן את כל המסמכים שיש להם את התכונה 
// עם הערך 70 age ותוסיף להם את התכונה 
// db.users2.updateMany({ name: { $exists: true } }, {
//     $set: {
//         age: 70
//     }
// });

// db.createCollection('a4');
// db.a4.insertMany([
//     {_id:1, arr:[1,2,3,4]},
//     {_id:2, arr:[1,3,5,7]},
//     {_id:3, arr:[3,5,4,7]},
//     {_id:4, arr:[10,13,4,7]}
// ])

db.a4.updateMany({}, {$pull:{arr:{$gte:7}}})
//מחיקת האיבר האחרון
db.a4.updateOne({_id: 1}, {$pop:{arr:1}})

//מחיקת האיבר הראשון 
db.a4.updateOne({_id: 2}, {$pop:{arr:-1}})
