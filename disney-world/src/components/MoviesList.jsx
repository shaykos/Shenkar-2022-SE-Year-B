import React from 'react'

export default function MoviesList({ movies }) {
  return (
    <>
      <ul id="movies-list" className="grid">
        {
          movies.map((item) => <li>{item}</li>)
        }
      </ul>
    </>
  )
}
