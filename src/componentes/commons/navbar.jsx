// src/components/Navbar.js
// Importación de React y del hook useContext desde la biblioteca 'react'
import React, { useContext } from 'react';
// Importación del componente Link desde 'react-router-dom' para la navegación
import { Link } from 'react-router-dom';
// Importación del archivo de estilos 'navbar.css'
import './navbar.css';
// Importación del contexto de autenticación desde '../../hooks/auth-context'
import { AuthContext } from '../../hooks/auth-context';

// Definición del componente funcional Navbar
const Navbar = () => {
  // Desestructuración del contexto de autenticación: isLoggedIn y logout
  const { isLoggedIn, logout } = useContext(AuthContext);
  
  // Condición: Si el usuario no está autenticado, se retorna null (no se muestra el navbar)
  if (!isLoggedIn) {
    return null;
  }

  // Renderizado del navbar si el usuario está autenticado
  return (
    <nav className="navbar"> {/* Contenedor principal del navbar */}
      <ul className="navbar-nav"> {/* Lista no ordenada de elementos del navbar */}
        {/* Elemento del navbar con enlace a '/home' */}
        <li className="nav-item">
          <Link to="/home" className="nav-link">Inicio</Link>
        </li>
        {/* Elemento del navbar con enlace a '/about' */}
        <li className="nav-item">
          <Link to="/about" className="nav-link">Descripción</Link>
        </li>
        {/* Elemento del navbar con enlace a '/contact' */}
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contacto</Link>
        </li>
        {/* Elemento del navbar con enlace a '/productos' */}
        <li className="nav-item">
          <Link to="/productos" className="nav-link">Productos</Link>
        </li>
        {/* Condición: Si el usuario está autenticado, muestra el botón de Logout */}
        {isLoggedIn ? (
          <li className="nav-item" onClick={logout}> {/* Manejador de evento onClick que llama a la función logout */}
            <Link to="/login" className="nav-link">Logout</Link>
          </li>
        ) : (
          null // Si no está autenticado, no muestra nada (aunque este caso es redundante aquí)
        )}
      </ul>
      <p>Vínculo Encantado</p> {/* Párrafo adicional fuera de la lista de navegación */}
    </nav>
  );
};

// Exportación del componente Navbar para ser utilizado en otros componentes
export default Navbar;
