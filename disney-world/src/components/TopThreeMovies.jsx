import React from 'react'
import MovieCard from './MovieCard'

export default function TopThreeMovies() {

  const topMovies = [
    {
      name: 'Peter Pan',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_peterpan_19755_96e77c5b.jpeg',
      details: "Peter Pan is a 1953 American animated adventure fantasy film produced by Walt Disney Productions and based on the 1904 play Peter Pan, or The Boy Who Wouldn't Grow Up by J. M. Barrie. Directed by Clyde Geronimi, Hamilton Luske and Wilfred Jackson, it is the 14th Disney animated feature film.",
      link: 'https://www.imdb.com/title/tt0046183/?ref_=fn_al_tt_3'
    },
    {
      name: 'Lilo and Stitch',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg?region=0%2C0%2C540%2C810',
      details: "Lilo & Stitch is a 2002 American animated science fiction comedy-drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures.[2] The 42nd Disney animated feature film, it was written and directed by Chris Sanders and Dean DeBlois (in their directorial debuts) and produced by Clark Spencer.",
      link: 'https://www.imdb.com/title/tt0275847/?ref_=nv_sr_srsg_0'
    },
    {
      name: 'Moana',
      image: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1000_.jpg',
      details: "Moana (also known as Vaiana or Oceania in some markets) is a 2016 American computer-animated musical adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
      link: 'https://www.imdb.com/title/tt3521164/?ref_=nv_sr_srsg_0'
    }
  ]

  return (
    <>
      <h2 id="top3-header">Top Three Movies</h2>
      <section id="top-three-movies" className="grid">
        {
          topMovies.map((item) => <MovieCard {...item} />)
        }
      </section>
    </>
  )
}
