
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from "./pages/Details";
import Home from "./pages/Home";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exterminator/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

