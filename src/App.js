import { useState, useContext, useMemo } from 'react';
import './App.css';
import { movies } from './datas/movies';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function MovieApp() {
  const { theme } = useContext(ThemeContext);
  const [keyword, setKeyword] = useState('');
  const [genre, setGenre] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favoriteIds, setFavoriteIds] = useLocalStorage('movie_favorites', []);

  // Thêm / bỏ phim khỏi danh sách yêu thích
  const toggleFavorite = (id) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const finalMovies = useMemo(() => {
    let result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (genre !== 'All') {
      result = result.filter((movie) => movie.genre === genre);
    }

    if (sortBy === 'high') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'low') {
      result = [...result].sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [keyword, genre, sortBy]);

  return (
    <div className={'app ' + theme}>
      <div className="container">
        <Header />
        <SearchBar onSearch={setKeyword} />

        <div className="filter-row">
          <GenreFilter genre={genre} onChange={setGenre} />

          <div>
            <label>Sort by: </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="high">Rating: High → Low</option>
              <option value="low">Rating: Low → High</option>
            </select>
          </div>
        </div>

        <p>
          Total Movies: {finalMovies.length} | Favorites: {favoriteIds.length}
        </p>

        <div className="content">
          <div className="list-section">
            <MovieList
              movies={finalMovies}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onViewDetail={setSelectedMovie}
            />
          </div>

          {selectedMovie && (
            <MovieDetail
              movie={selectedMovie}
              onClose={() => setSelectedMovie(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MovieApp />
    </ThemeProvider>
  );
}

export default App;
