import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import movies from '../data/topThreeMovies.json';

export default function TopThreeMovies() {

  //const [name, set function] = useState(init value);
  /*
    topThree יצירת משתנה חדש בשם 
    SetTopThree יצירת פונקציה שתעדכן את המשתנה שיצרנו בשם 
    אתחול הערך ההתחלתי של המשתנה במערך ריק
  */
  const [topThree, SetTopThree] = useState([]);

  //useEffect הפעלת 
  /*
    topThree בכל טעינה של הקומפוננטה, תבצע השמה לתוך המשתנה 
    topThreeMovies.json במקרה זה המידע שנשמר הוא המערך שרשום בקובץ 
  */
  useEffect(() => {
    SetTopThree(movies)
  }, []);

  return (
    <>
      <h2 id="top3-header">Top Three Movies</h2>
      <section id="top-three-movies" className="grid">
        {
          //תנאי מקוצר. במידה ואין סרטים במערך תוצג הודעה מתאימה
          topThree.length == 0 ?
            <h2>no movies found</h2>
            :
            topThree.map((item, index) => <MovieCard key={index} {...item} />)
        }
      </section>
    </>
  )
}
