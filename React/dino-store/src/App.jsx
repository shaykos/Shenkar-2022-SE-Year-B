import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

function App() {

  return (
    <>
      <BrowserRouter>

        <AppHeader />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product' element={<Product />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <AppFooter />

      </BrowserRouter>
    </>
  )
}

export default App
