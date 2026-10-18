function MovieDetail({ movie, onClose }) {
  return (
    <div className="movie-detail">
      <h3>Movie Details</h3>
      <p>Title: {movie.title}</p>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Director: {movie.director}</p>
      <p>Duration: {movie.duration} minutes</p>
      <p>Description: {movie.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MovieDetail;
