// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { AuthContext } from '../../hooks/auth-context';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  if (!isLoggedIn) {
    return null;
  }
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Descripcion</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contactos</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/productos" className="nav-link">Productos</Link>
        </li>
        {isLoggedIn ? (
          <li className="nav-item" onClick={logout}>
            <Link to="/login" className="nav-link">Logout</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
