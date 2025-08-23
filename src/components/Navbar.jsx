import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import farmaTechLogo from '../assets/logos/cropped-cropped-Logo-See-Thru-1.png';
import './styles/navbar.css';
import { useMobile } from '../context/MobileContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <img src={farmaTechLogo} alt="Farma Tech Logo" />
      </Link>
      {isMobile && (
        <button
          className={`navbar-toggle${
            isMobile && mobileMenuOpen ? ' mobile-active' : ''
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      )}
      <nav className="navbar">
        <ul
          className={`nav-menu${
            isMobile && mobileMenuOpen ? ' mobile-active' : ''
          }`}
        >
          <li>
            <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
