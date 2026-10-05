import MovieItem from './MovieItem';

function MovieList({ movies, onViewDetail }) {
  if (movies.length === 0) {
    return <p>Không tìm thấy phim nào.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onViewDetail={onViewDetail} />
      ))}
    </div>
  );
}

export default MovieList;
