import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo_curalink.jpeg" alt="CuraLink" />
      </div>
      <div className="navbar-title">
        <h1>CuraLink</h1>
        </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/registro">Registrarse</Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
