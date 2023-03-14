import {useContext} from 'react'
import { UserContext } from '../Context/UserContext';

export default function Users() {
    //context ייבוא של המשתנים והפונקציות מתוך ה 
    const {users, SetUsers} = useContext(UserContext);

  return (
    <div>
        {
            users.map((item)=><p key={item.id}>{item.fullname}</p>)
        }
    </div>
  )
}
