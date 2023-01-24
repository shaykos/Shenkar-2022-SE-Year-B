import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import UserContextProvider from './Context/UserContext';

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Hi</h1>} />
            <Route path="/login" element={
              <UserContextProvider>
                <LoginPage />
              </UserContextProvider>
            }/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
