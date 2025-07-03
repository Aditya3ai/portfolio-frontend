import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import './Navbar.css';

const Navbar = ({ isDarkMode, onToggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Aditya's Portfolio</div>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#internships" onClick={handleLinkClick}>Internships</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        <div className="nav-controls">
          <ToggleSwitch isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle navigation"
            title="Toggle navigation"
            type="button"
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
