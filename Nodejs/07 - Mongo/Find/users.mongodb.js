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

db.users.deleteMany({status:{$exists: false}});
db.users.deleteMany({age:{$gte:25}});
db.users.countDocuments();

