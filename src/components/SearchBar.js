import { useRef, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const searchRef = useRef();

  // Tự động focus vào ô tìm kiếm khi mở trang
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleChange = () => {
    onSearch(searchRef.current.value);
  };

  return (
    <div className="search-bar">
      <label>Search Movie: </label>
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
