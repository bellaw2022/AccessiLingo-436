import React from 'react';
import { useTheme } from '../ThemeContext'; 

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    // Perform language change logic : mock -> only choose one lang to demo
    console.log(`Selected language: ${selectedLanguage}`);
  };

  return (
    <div className={`header ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="header-button">
        <select onChange={handleLanguageChange}>
          <option value="changelanguage">Change Language</option>
          <option value="chinese">Chinese</option>
          <option value="korean">Korean</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
      <div className="header-button">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
