import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppHeader from './components/AppHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path='' element={<div><h1>Home</h1></div>}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
