import { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

export default function LoginPage() {
  //context שימוש ב 
  const { Login } = useContext(UserContext)

  //states שימוש ב 
  const [username, SetUserName] = useState('');
  const [password, SetPassword] = useState('');

  const LoginUser = (event) => {
    event.preventDefault();
    let u = Login(username, password);
    if(u != undefined)
      alert(`hello ${u.fullname}`);
    else  alert('user not found')
  }


  return (
    <>
      <form onSubmit={LoginUser}>
        <input type="text" placeholder='username' onChange={(event) => SetUserName(event.target.value)} />
        <input type="password" placeholder='password' onChange={(event) => SetPassword(event.target.value)} />
        <button>Login</button>
      </form>
    </>
  )
}
