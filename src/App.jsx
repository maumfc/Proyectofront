import React, { useContext } from 'react'; // Importación de React y useContext desde 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importación de BrowserRouter, Route, Routes y Navigate desde 'react-router-dom'
import Home from './pages/home'; // Importación del componente Home desde './pages/home'
import Contacto from './pages/contacto'; // Importación del componente Contacto desde './pages/contacto'
import About from './pages/about'; // Importación del componente About desde './pages/about'
import Login from './pages/login'; // Importación del componente Login desde './pages/login'
import Productos from './pages/productos'; // Importación del componente Productos desde './pages/productos'
import Navbar from './componentes/commons/navbar'; // Importación del componente Navbar desde './componentes/commons/navbar'
import { AuthProvider, AuthContext } from './hooks/auth-context'; // Importación del AuthProvider y AuthContext desde './hooks/auth-context'
import ProductoForm from './componentes/contenedores/agregar-productos/guardar-productos'; // Importación del componente ProductoForm desde './componentes/contenedores/agregar-productos/guardar-productos'
import './App.css'; // Importación del archivo de estilos 'App.css'
import RegistroUsuario from './componentes/contenedores/registro/RegistroUsuario'; // Importación del componente RegistroUsuario desde './componentes/contenedores/registro/RegistroUsuario'

const ProtectedRoute = ({ element }) => { // Definición de ProtectedRoute como un componente funcional que recibe props 'element'
  const { isLoggedIn } = useContext(AuthContext); // Extracción de isLoggedIn desde AuthContext usando el hook useContext
  return isLoggedIn ? element : <Navigate to="/login" />; // Renderiza el elemento si el usuario está autenticado, de lo contrario redirige a '/login'
};

const App = () => { // Definición del componente funcional App

  return (
    <Router> {/* Componente Router envuelve la aplicación */}
      <AuthProvider> {/* Componente AuthProvider envuelve la aplicación para proporcionar el contexto de autenticación */}
        <Navbar /> {/* Renderiza el componente Navbar para la navegación */}
        <div className="main-content"> {/* Contenedor principal para el contenido */}
          <Routes> {/* Componente Routes para definir las rutas de la aplicación */}
            <Route path="/login" element={<Login />} /> {/* Ruta para la página de inicio de sesión, renderiza el componente Login */}
            <Route path="/" element={<ProtectedRoute element={<Home />} />} /> {/* Ruta protegida para la página de inicio, renderiza el componente Home */}
            <Route path="/about" element={<ProtectedRoute element={<About />} />} /> {/* Ruta protegida para la página Acerca de, renderiza el componente About */}
            <Route path="/contact" element={<ProtectedRoute element={<Contacto />} />} /> {/* Ruta protegida para la página de contacto, renderiza el componente Contacto */}
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} /> {/* Ruta protegida para la página de inicio, renderiza el componente Home */}
            <Route path="/productos" element={<ProtectedRoute element={<Productos />} />} /> {/* Ruta protegida para la página de productos, renderiza el componente Productos */}
            <Route path="/productoform" element={<ProtectedRoute element={<ProductoForm />} />} /> {/* Ruta protegida para la página de formulario de producto, renderiza el componente ProductoForm */}
            <Route path="/edit-product/:id" element={<ProtectedRoute element={<ProductoForm />} />} /> {/* Ruta protegida para la edición de producto, renderiza el componente ProductoForm */}
            <Route path="/registrousuario" element={<RegistroUsuario />} /> {/* Ruta para la página de registro de usuario, renderiza el componente RegistroUsuario */}
            <Route path="/*" element={<ProtectedRoute element={<Login />} />} />
          </Routes>
        </div>
        <footer className="footer"> {/* Pie de página */}
          <p>&copy; {new Date().getFullYear()} Vínculo Encantado. Todos los derechos reservados.</p> {/* Texto de derechos de autor */}
        </footer>
      </AuthProvider>
    </Router>
  );
};

export default App; // Exportación del componente App para su uso en otras partes de la aplicación
