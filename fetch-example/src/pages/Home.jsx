import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    const [exterminators, SetExterminators] = useState([]);

    async function LoadData() {
        try {
            let res = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=4941fd97-9f9f-4e45-b117-9f71735e9845&limit=100');
            //console.log('res', res);
            let data = await res.json();
            //console.log('data => ', data.result.records);
            //console.table(data.result.records);
            SetExterminators(data.result.records);
        } catch (error) {
            console.error(error);
        }
    }

    //יצירת אפקט שפועל בעינה ראשונה של הקומפוננטה
    useEffect(() => {
        LoadData();
    }, []);

    return (
        <>
            <h1>רשימת מדבירים</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>מס' רשיון</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th>טלפון</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exterminators.map((item) =>
                            <tr key={item._id}>
                                <td>{item.LicenseNumber}</td>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Telephone}</td>
                                <td><Link to={`/exterminator/${item.LicenseNumber}`}>מידע נוסף</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}