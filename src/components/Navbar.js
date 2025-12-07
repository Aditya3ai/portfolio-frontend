import React, { useState, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoRocketRef = useRef(null);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  const handleNavClick = (e) => {
    // close mobile menu
    handleLinkClick();

    // wave effect on clicked link
    const el = e.currentTarget;
    el.classList.add('nav-wave');
    window.setTimeout(() => el.classList.remove('nav-wave'), 900);

    // rocket boost on logo
    const rk = logoRocketRef.current;
    if (rk) {
      rk.classList.add('rocket-boost');
      window.setTimeout(() => rk.classList.remove('rocket-boost'), 900);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Aditya's Portfolio
          <span className="logo-rocket" ref={logoRocketRef} aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nr" x1="0" x2="1"><stop offset="0" stopColor="#00e0c0"/><stop offset="1" stopColor="#00c2ff"/></linearGradient>
              </defs>
              <path d="M12 2c-1 0-3 1-5 3s-3 4-3 5 2 4 3 5 4 2 5 2 3-1 5-3 3-4 3-5-2-4-3-5-4-2-5-2z" fill="url(#nr)" opacity="0.95" />
              <path d="M9 15c0 0 1 2 3 2s3-2 3-2" stroke="#fff" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.2"/>
            </svg>
          </span>
        </div>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#internships" onClick={handleNavClick}>Internships</a></li>
          <li><a href="#certifications" onClick={handleNavClick}>Certifications</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>

        <div className="nav-controls">
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
