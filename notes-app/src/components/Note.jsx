import React from 'react'

export default function Note({title, text, date}) {
  return (
    <div className="note">
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{date}</p>
    </div>
  )
}
