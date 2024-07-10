import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConexionApi } from './conexion-api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedStatus = localStorage.getItem('isLoggedIn');
    return storedStatus === 'true';
  });
  const navigate = useNavigate();
  const { loginApi } = ConexionApi();
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);
  const login = async (username, password) => {
    try {
      const userData = await loginApi(username, password);
      console.log(userData);

      if (userData) {
        setIsLoggedIn(true);
        navigate('/home');
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
