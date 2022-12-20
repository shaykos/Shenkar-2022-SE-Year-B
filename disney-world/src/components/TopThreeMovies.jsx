import React from 'react'
import MovieCard from './MovieCard'

export default function TopThreeMovies() {
  return (
    <>
      <h2 id="top3-header">Top Three Movies</h2>
      <section id="top-three-movies" className="grid">
        
        <MovieCard
          image="https://lumiere-a.akamaihd.net/v1/images/p_peterpan_19755_96e77c5b.jpeg"
          name="Peter Pan"
        />

        <MovieCard
          image="https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg?region=0%2C0%2C540%2C810"
          name="Lilo and Stitch"
        />

        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg"
          name="Moana"
        />

      </section>
    </>
  )
}
