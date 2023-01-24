//react ייבוא הפונקציות מתוך 
import { createContext, useState, useEffect } from "react";

//יצירת האובייקט המתאים
export const UserContext = createContext();

//יצירת הקומפוננטה המכילה את המשתנים והפונקציות הגלובליות
export default function UserContextProvider({ children }) {

    const [users, SetUsers] = useState([]);

    //טעינת כל היוזרים מתוך מסד הנתונים (דמו)
    const LoadUsers = async () => {
        try {
            let res = await fetch("./Data/UsersDb.json");
            let data = await res.json();
            SetUsers(data)
        } catch (err) {
            console.error(err);
        }
    }

    //בדיקה שיש יוזר עם שם משתמש וסיסמה כמו שהתקבלו
    const Login = (username, password) => {
        let user = users.find((u) => u.username == username && u.password == password)
        return user;
    }


    //בטעינה ראשונה של הקונטקסט
    useEffect(() => {
        LoadUsers();
    }, []);

    //משתנה שיכיל את כל הדברים שאני רוצה לשתף
    const value = {
        users,
        SetUsers, 
        Login
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>

    )
}