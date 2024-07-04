import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Contacto from './pages/contacto';
import About from './pages/about';
import Login from './pages/login';
import Productos from './pages/productos';
import Navbar from './componentes/commons/navbar';
import { AuthProvider, AuthContext } from './hooks/auth-context';
import ProductoForm from './componentes/contenedores/agregar-productos/guardar-productos';
import './App.css'
import RegistroUsuario from './componentes/contenedores/registro/RegistroUsuario';
 
const ProtectedRoute = ({ element }) => {
  const  isLoggedIn  = useContext(AuthContext);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {


  return (
      <Router>
     <AuthProvider>
       
        <Navbar />

          <Routes>
            <Route path="/login" element={<Login />} />
           
            <Route path="/" element={<ProtectedRoute element={<Login />} />} />
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/contact" element={<ProtectedRoute element={<Contacto />} />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/productos" element={<ProtectedRoute element={<Productos />} />} />
            <Route path="/productoform" element={<ProtectedRoute element={<ProductoForm />} />} />
            <Route path="/edit-product/:id" element={<ProtectedRoute element={<ProductoForm />} />} />
            <Route path="/registrousuario" element={<ProtectedRoute element={<RegistroUsuario/>} />} />
          </Routes>
          <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Vínculo Encantado. Todos los derechos reservados.</p>
      </footer> 
     </AuthProvider>
      </Router>
  );
};

export default App;
