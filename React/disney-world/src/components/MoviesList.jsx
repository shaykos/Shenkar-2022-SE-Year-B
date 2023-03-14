import React from 'react'

export default function MoviesList({ movies }) {
  return (
    <>
      <ul id="movies-list" className="grid">
        {
          movies.map((item, index) => <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
          )
        }
      </ul>
    </>
  )
}
