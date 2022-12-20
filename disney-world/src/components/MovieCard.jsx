import React from 'react'

export default function MovieCard({image, name}) {
  return (
    <>
        <div className="movie-card">
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    </>
  )
}
