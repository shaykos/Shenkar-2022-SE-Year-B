import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ExterminatorDetails from '../components/ExterminatorDetails';


export default function Details() {

    const [exterminator, SetExterminator] = useState({});
    
    //id תפיסת ערך ה 
    const { id } = useParams();

    async function LoadExterminator() {
        try {
            //API יצירת קישור דינאמי לבקשה ה 
            let api_url = `https://data.gov.il/api/3/action/datastore_search?resource_id=4941fd97-9f9f-4e45-b117-9f71735e9845&q=${id}`

            //fetch ביצוע פעולת ה 
            let res = await fetch(api_url);

            //שליפת המידע מתוך התשובה
            let data = await res.json();

            SetExterminator(data.result.records[0]);
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        LoadExterminator()
    }, []);


    return (
        <>
        <div className="card grid">
            <ExterminatorDetails {...exterminator} />
        </div>
        </>
    )
}
