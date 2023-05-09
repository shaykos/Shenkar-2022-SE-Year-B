
const database = 'Legend';

// The current database to use.
use(database);

//מיון חדי הקרן לפי משקל בסדר יורד
// db.unicorns.find({}, { vampires: 1, _id: 0 }).sort({ weight: -1 });

//מיון חדי הקרן לפי הערפדים שניצחו
// db.unicorns.find({ vampires: { $exists: true } }, { vampires: 1, _id: 0 }).sort({ vampires: -1 });


/*
יש למצוא את כל חדי הקרן שלא ניצחו אף ערפד ולהוסיפם לאוסף של אימונים

שלב 1: יצירת אוסף לאימונים
שלב 2: לבצע שליפה של הנתונים
שלב 3: לרשום פונקציה להעתקה של הנתונים לאוסף המתאים
שלב 4: להציג את הנתונים מהאוסף החדש
*/
// db.practice.drop();
// db.createCollection('practice');
// db.unicorns.find({ vampires: { $exists: false } }).forEach((doc)=>{
//     db.practice.insertOne(doc);
// });
// db.practice.find();


/*
יש למצוא את כל חדי הקרן ששוקלים מעל 550 ולהמליץ להם על פעילות גופנית

שלב 1: יצירת אוסף לאימונים
שלב 2: לבצע שליפה של הנתונים
שלב 3: לרשום פונקציה להעתקה של הנתונים לאוסף המתאים
שלב 4: להציג את הנתונים מהאוסף החדש
*/
// db.practice.drop();
// db.createCollection('practice');
// db.unicorns.find({ weight:{$gte: 550} }, {_id:1}).forEach((doc)=>{
//     db.practice.insertOne(doc);
// });
// db.practice.find();

db.practice.renameCollection('newCollection')





