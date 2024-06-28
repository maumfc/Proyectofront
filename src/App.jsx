import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Contacto from './pages/contacto';
import About from './pages/about';
import Login from './pages/login';
import Productos from './pages/productos';
import Navbar from './componentes/commons/navbar';
//import { AuthProvider, AuthContext } from './hooks/auth-context';
 
const ProtectedRoute = ({ element }) => {
  const  isLoggedIn  = true; //useContext(AuthContext);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  // const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    // <AuthProvider>
      <Router>
        <div>
        <Navbar />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/about" element={<ProtectedRoute element={<About />} />} />
            <Route path="/contact" element={<ProtectedRoute element={<Contacto />} />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/productos" element={<ProtectedRoute element={<Productos />} />} />
          </Routes>
        </div>
      </Router>
    // </AuthProvider>
  );
};

export default App;
