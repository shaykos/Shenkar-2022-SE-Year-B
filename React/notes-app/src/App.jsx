import { useState, useEffect } from 'react';
import Note from './components/Note';
import allNotes from './data/notes.json'

export default function App() {

  //יצירת משתנים ושיטות להשמה
  const [title, SetTitle] = useState('');
  const [text, SetText] = useState('');
  const [date, SetDate] = useState('');
  const [notesList, SetNotesList] = useState([]);

  //זיהוי טעינת האתר
  useEffect(() => {
    SetNotesList(allNotes);
  }, []);

  //מעקב אחר שינוי השדה תאריך בטופס
  useEffect(() => {
    if(date == '')
      return;
      
    let today = new Date();
    let noteDate = new Date(date);
    if (noteDate - today < 0) {
      alert('invalid date');
      SetDate('');
    }
  }, [date]);

  //פונקציה להוספת "פתק" חדש. הפונקציה מקבלת את אירוע שליחת הטופס
  const AddNewNote = (event) => {
    //ביטול פעולת ברירת המחדל של הטופס - ביטול רענון הדף
    event.preventDefault();

    //יצירת "פתק" חדש כאובייקט
    let note = { title, text, date };

    //הוספת ה"פתק" החדש לרשימת הפתקים
    SetNotesList((currentNotes) => [...currentNotes, note]);

    //הפעלת פונקציה לניקוי הטופס
    ClearForm();
  }

  //פונקציה לניקוי הטופס
  const ClearForm = () => {
    SetDate('')
    SetTitle('')
    SetText('')
  }

  return (
    <div className="App">
      <form onSubmit={(event) => AddNewNote(event)}>
        <div className="form-item">
          <label>Note Title</label>
          <input type="text" value={title} onChange={(event) => SetTitle(event.target.value)} />
        </div>
        <div className="form-item">
          <label>Note Text</label>
          <textarea value={text} onChange={(event) => SetText(event.target.value)}></textarea>
        </div>
        <div className="form-item">
          <label>Note Date</label>
          <input type="date" value={date} onChange={(event) => SetDate(event.target.value)} />
        </div>
        <div className="form-item">
          <button>Add Note</button>
        </div>
      </form>
      <hr />
      <div>
        <h1>My Notes</h1>
        <div className="grid notes-container">
          {
            notesList.length == 0 ? <p>empty notes :(</p>
              :
              notesList.map((item, index) => <Note key={index} {...item} />)
          }
        </div>
      </div>
    </div>
  )
}


