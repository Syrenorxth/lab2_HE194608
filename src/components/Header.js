import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>Mini Movie Manager</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}

export default Header;
