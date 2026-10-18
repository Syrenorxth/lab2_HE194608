function GenreFilter({ genre, onChange }) {
  return (
    <div>
      <label>Genre: </label>
      <select value={genre} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All Genres</option>
        <option value="Action">Action</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  );
}

export default GenreFilter;
