import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import farmaTechLogo from '../assets/logos/cropped-cropped-Logo-See-Thru-1.png';
import './styles/navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <Link to="/">
        <img src={farmaTechLogo} alt="Farma Tech Logo" />
      </Link>
      {isMobile && (
        <button
          className="navbar-toggle"
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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
