import React from 'react'

export default function MovieCard({ image, name, details }) {


  const ShowDetails = () => {
    if (!details) // if details is undefined
      alert('error');
    else
      alert(details);
  }


  return (
    <>
      <div className="movie-card">
        <img src={image} alt="" onClick={() => ShowDetails()} />
        <p>{name}</p>
      </div>
    </>
  )
}
