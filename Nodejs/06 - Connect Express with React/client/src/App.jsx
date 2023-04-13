import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, SetUsers] = useState([]);

  const LoadUsers = async () => {
    try {
      let res = await fetch('http://localhost:5008/api/users');
      let data = await res.json();
      SetUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LoadUsers();
  }, []);

  return (
    <div className="App">
      {
        users.map(user => <div>
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
        </div>)
      }
    </div>
  )
}

export default App
