import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Mi Proyecto</h1>
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
