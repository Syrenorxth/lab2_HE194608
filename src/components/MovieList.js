import MovieItem from './MovieItem';

function MovieList({ movies, favoriteIds, onToggleFavorite, onViewDetail }) {
  if (movies.length === 0) {
    return <p>Không tìm thấy phim nào.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favoriteIds.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
}

export default MovieList;
