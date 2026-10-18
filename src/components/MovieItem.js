import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

function MovieItem({ movie, isFavorite, onToggleFavorite, onViewDetail }) {
  return (
    <div className="movie-item">
      <span>
        {movie.title} | {movie.genre} | {movie.year} | {movie.rating}
      </span>
      <div>
        <button onClick={() => onToggleFavorite(movie.id)}>
          {isFavorite ? (
            <>
              <FaStar /> Unfavorite
            </>
          ) : (
            <>
              <CiStar /> Favorite
            </>
          )}
        </button>
        <button onClick={() => onViewDetail(movie)}>View Details</button>
      </div>
    </div>
  );
}

export default MovieItem;
