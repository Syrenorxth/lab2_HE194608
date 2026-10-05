import { useRef } from 'react';

function SearchBar({ onSearch }) {
  const searchRef = useRef();

  const handleChange = () => {
    onSearch(searchRef.current.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm tên phim..."
        ref={searchRef}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
