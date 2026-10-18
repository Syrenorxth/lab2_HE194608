import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loaded, setLoaded] = useState(false);

  // Load dữ liệu từ localStorage khi ứng dụng bắt đầu
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      setValue(JSON.parse(saved));
    }
    setLoaded(true);
  }, [key]);

  // Lưu dữ liệu vào localStorage mỗi khi value thay đổi
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, loaded]);

  return [value, setValue];
}

export default useLocalStorage;
