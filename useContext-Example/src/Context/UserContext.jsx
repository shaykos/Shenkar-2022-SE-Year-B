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

    //בטעינה ראשונה של הקונטקסט
    useEffect(() => {
        LoadUsers();
    }, []);

    //משתנה שיכיל את כל הדברים שאני רוצה לשתף
    const value = {
        users,
        SetUsers
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>

    )
}