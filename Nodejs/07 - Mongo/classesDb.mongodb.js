use('MR_DB');
// db.classes.drop()
// db.createCollection("classes")
// //
// db.classes.insertOne({ 
//   class : "Databases",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Netanel" , lname: "Berman" , age: 26},
//    {fname: "Aviv" , lname: "Levi" , age: 24}
//    ],
//    cost: 1450 ,
//    professor: "Tami Zukerman" ,
//    topics: "MongoDb, Sql_Server, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0321814061" ,
//      title: "Big Data" ,
//      price: 130.65 
//    } })
// //
// db.classes.insertOne({ 
//   class : "Programing",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Maya" , lname: "Cohen" , age: 24},
//    {fname: "Yoav" , lname: "Yaari" , age: 26},
//    {fname: "Rina" , lname: "Kedem" , age: 24}
//    ],
//    cost: 2540 ,
//    professor: "Anita Ulman" ,
//    topics: "Paython, C#, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0245789" ,
//      title: "Programing" ,
//      price: 250.25 
//    } })
// //
// db.classes.insertOne({ 
//   class : "Internet",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Yossi" , lname: "Cohen" , age: 24},
//    {fname: "Shula" , lname: "Vies" , age: 26},
//    {fname: "Shai" , lname: "Vies" , age: 26},
//    {fname: "Rachel" , lname: "Man" , age: 24}
//    ],
//    cost: 4350 ,
//    professor: "Shai Avraham" ,
//    topics: "C++, C#, My_Sql, React" ,
//    book:
//    {
//      isbn: "12457896" ,
//      title: "Application" ,
//      price: 187.25 
//    } })
// //
// db.classes.insertOne({ 
//   class : "React",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Maya" , lname: "Cohen" , age: 24},
//    {fname: "Yoav" , lname: "Yaari" , age: 26},
//    {fname: "Rina" , lname: "Kedem" , age: 24}
//    ],
//    cost: 2540 ,
//    professor: "Nir Chen" ,
//    topics: "Paython, C#, My_Sql, React" ,
//    book:
//    {
//      isbn: "0245789" ,
//      title: "Programing" ,
//      price: 250.25 
//    } })
// //
// db.classes.insertOne({ 
//   class : "Math",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Maya" , lname: "Cohen" , age: 24},
//    {fname: "Yoav" , lname: "Yaari" , age: 26},
//    {fname: "Rina" , lname: "Kedem" , age: 24}
//    ],
//    cost: 2540 ,
//    professor: "Sakman Maklada" ,
//    topics: "C++, C#, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0245789" ,
//      title: "Programing" ,
//      price: 155.45 
//    } })
// //
// db.classes.insertOne({ 
//   class : "MongoDb",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Netanel" , lname: "Berman" , age: 26},
//    {fname: "Aviv" , lname: "Levi" , age: 24}
//    ],
//    cost: 2540 ,
//    professor: "Tami Zukerman" ,
//    topics: "MongoDb, Sql_Server, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0321814061" ,
//      title: "Big Data" ,
//      price: 130.65 
//    } })
// //
// db.classes.insertOne({ 
//   class : "Sql Server",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Netanel" , lname: "Berman" , age: 26},
//    {fname: "Aviv" , lname: "Levi" , age: 24}
//    ],
//    cost: 1250 ,
//    professor: "Tami Zukerman" ,
//    topics: "MongoDb, Sql_Server, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0321814061" ,
//      title: "Big Data" ,
//      price: 130.65 
//    } })
// //
// db.classes.insertOne({ 
//   class : "Java",
//   startDate : new Date(2021, 10 , 21) ,
//   students : [
//    {fname: "Tal" , lname: "Geriman" , age: 28},
//    {fname: "Maya" , lname: "Cohen" , age: 24},
//    {fname: "Yoav" , lname: "Yaari" , age: 26},
//    {fname: "Rina" , lname: "Kedem" , age: 24}
//    ],
//    cost: 2540 ,
//    professor: "Sakman Maklada" ,
//    topics: "C++, C#, My_Sql, Casandra" ,
//    book:
//    {
//      isbn: "0245789" ,
//      title: "Programing" ,
//      price: 255.45 
//    } })
// //

//Q1
/* This code is performing an aggregation operation on the "classes" collection in MongoDB. It is using
the aggregate method to apply a pipeline of operations to the collection. */
db.classes.aggregate([
  {$match:{class: {$exists: true}}},
  {$group: {_id: null, total_courses: {$sum: 1}}}
]);

/* This code is finding all documents in the "classes" collection where the "class" field exists and
then returning the count of those documents. */
db.classes.find({class: {$exists: true}}).count();

//Q2
use('MR_DB')
db.classes.aggregate([
  {$match: {students: {$exists: true}}},
  {$group: {_id: null, total_courses: {$sum:1}}}
]);

use('MR_DB')
db.classes.find({students: {$exists: true}}).count();

//Q3
use('MR_DB')
db.classes.aggregate([
  {$match: {book: {$exists: false}}},
  {$group: {_id: null, total_courses_without_books: {$sum:1}}}
]);

use('MR_DB')
db.classes.find({book: {$exists: false}}).count();