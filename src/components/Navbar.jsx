import React from 'react';
import { Link } from 'react-router-dom';
import farmaTechLogo from '../assets/logos/cropped-cropped-Logo-See-Thru-1.png';
import './styles/navbar.css';

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src={farmaTechLogo} alt="Farma Tech Logo" />
      </Link>
      <nav className="navbar">
        <ul className="nav-menu">
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
