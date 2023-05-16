/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'shopDB';
const collection = 'sales';

// The current database to use.
use(database);

// Create a new collection.
//db.createCollection(collection);

// db.sales.insertMany([
//     {status: 'A', cust_id: 111, amonut: 3},
//     {status: 'A', cust_id: 111, amonut: 3},
//     {status: 'B', cust_id: 111, amonut: 10},
//     {status: 'C', cust_id: 222, amonut: 3},
//     {status: 'A', cust_id: 222, amonut: 1},
//     {status: 'A', cust_id: 333, amonut: 30},
//     {status: 'B', cust_id: 222, amonut: 300},
// ])


/* This code is performing an aggregation operation on the "sales" collection in the "shopDB" database.
It is filtering the documents where the "status" field is equal to "A" using the  stage. Then,
it groups the filtered documents by the "cust_id" field and calculates the sum of the "amount" field
for each group using the  stage. The result is a list of documents that contain the "_id"
field (which is the "cust_id" value) and the "total" field (which is the sum of the "amount" values
for that "cust_id"). */
// db.sales.aggregate([
//     {$match: { status: 'A'}},
//     {$group: {_id: "$cust_id", total: {$sum: "$amonut"}}}
// ]);


/* This code is performing an aggregation operation on the "sales" collection in the "shopDB" database.
It is filtering the documents where the "status" field is equal to "A" using the `` stage.
Then, it groups the filtered documents by the "cust_id" field and calculates the sum of the "amount"
field for each group using the `` stage. The result is a list of documents that contain the
"_id" field (which is the "cust_id" value) and the "total" field (which is the sum of the "amount"
values for that "cust_id"). Finally, it filters the result again using the `` stage to only
include documents where the "total" field is greater than or equal to 6. */
// db.sales.aggregate([
//     {$match: { status: 'A'}},
//     {$group: {_id: "$cust_id", total: {$sum: "$amonut"}}},
//     {$match: {total: {$gte: 6}}}
// ]);


//status = A || amonut > 1
// db.sales.aggregate([
//     {$match: {
//       $or: [{status: 'A'}, {amonut: {$gt: 1}}]
//     }},
//     {$group: {_id: null, count: {$sum: 1}}}
// ]);

db.sales.find({
    $or: [{status: 'A'}, {amonut: {$gt: 1}}]
}).count();


