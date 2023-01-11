import { useState, useEffect } from 'react';
import toysData from '../data/toys.json';
import Toy from '../components/Toy'

export default function Store() {

  //יצירת משתנה שיכול להשפיע על האלמנטים בדף
  const [toys, SetToys] = useState([]);

  //json file פונקציה לטעינת הצעצועים מתוך ה 
  //const LoadToys = () =>{}
  function LoadToys() {
    SetToys(toysData);
  }

  //מה קורה בטעינה הראשונה של הדף- Effect
  useEffect(()=>{
    LoadToys();
  }, []);

  return (
    <>
      <section className="grid toys-holder">
        {
          toys.map((item)=><Toy key={item.name} {...item} />)
        }
      </section>
    </>
  )
}
