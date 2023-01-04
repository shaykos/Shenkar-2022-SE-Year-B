export default function MovieCard({ image, name, details, link }) {

  const ShowDetails = () => {
    if (!details) // if details is undefined
      alert('error');
    else
      alert(details);
  }

  const GoToMoviePage = () => {
    window.open(link, '_blank');
  }


  return (
    <>
      <div className="movie-card">
        <img src={image} alt="" onClick={() => ShowDetails()} />
        <p onClick={() => GoToMoviePage()}>{name}</p>
      </div>
    </>
  )
}
