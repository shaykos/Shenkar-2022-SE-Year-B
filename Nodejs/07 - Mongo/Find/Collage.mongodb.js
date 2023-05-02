/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'Collage';
const collection = 'Shenkar';

// Create a new database.
use(database);

// Create a new collection.
// db.createCollection(collection);

// db.Collage.insertMany([
//     { "_id": 1, "semester": 1, "grades": [70, 87, 90] },
//     { "_id": 2, "semester": 1, "grades": [90, 88, 92] },
//     { "_id": 3, "semester": 1, "grades": [85, 100, 90] },
//     { "_id": 4, "semester": 1, "grades": [70, 77, 60] },
//     { "_id": 5, "semester": 2, "grades": [90, 88, 92] },
//     { "_id": 6, "semester": 2, "grades": [65, 70, 90] }

// ]);

// db.Collage.find()

//הצג את כל המסמכים של סמסטר ראשון ושהסטודנט קיבל את הציון 92 ומעלה לפחות פעם אחת
// db.Collage.find({semester:1, grades:{$gte:92}});

//הצג את כל המסמכים של סמסטר ראשון ושהסטודנט קיבל את הציון 85 ומעלה לפחות פעם אחת
//ההבדל בין הדוגמאות הוא שכאן אנו מבקשים להציג רק את הציון הראשון שמתאים לתנאי
// db.Collage.find({semester:1, grades:{$gte:85}}, {"grades.$":1});

//כמה סטודנטים מצטיינים יש בסמסטר הראשון - מצטיין קיבל מעל 95
// db.Collage.find({semester:1, grades:{$gte:95}}).count();

//יש להציג את כל המסמכים לפי הסמסטר בסדר יורד
//db.Collage.find().sort({semester:-1});

