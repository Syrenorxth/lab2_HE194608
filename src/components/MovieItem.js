function MovieItem({ movie, onViewDetail }) {
  return (
    <div className="movie-item">
      <span>
        {movie.title} | {movie.genre} | {movie.year} | {movie.rating}
      </span>
      <div>
        <button>Favourite</button>
        <button onClick={() => onViewDetail(movie)}>View Details</button>
      </div>
    </div>
  );
}

export default MovieItem;
