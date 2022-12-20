import React from 'react'

/*
title הקומפוננטה מקבלת פרמטר שנקרא 
h1 ומשתמשת בו בתגית 
*/
export default function Header({title}) {
  return (
    <>
      <header id="header">
        <h1>{title}</h1>
      </header>
    </>
  )
}
