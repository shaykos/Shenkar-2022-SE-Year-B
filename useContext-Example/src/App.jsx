import React from 'react'
import Users from './Components/Users'
import UserContextProvider from './Context/UserContext'

export default function App() {
  return (
    <>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    </>
  )
}
