import React, { createContext, useEffect, useState } from 'react'; // Importación de React, createContext, useEffect y useState desde 'react'
import { useNavigate } from 'react-router-dom'; // Importación de useNavigate desde 'react-router-dom'
import { ConexionApi } from './conexion-api'; // Importación de ConexionApi desde './conexion-api'

export const AuthContext = createContext(); // Creación del contexto de autenticación

export const AuthProvider = ({ children }) => { // Definición del componente AuthProvider que recibe children como prop
  const [error, setError] = useState(''); // Estado local para manejar el mensaje de error
  const [isLoggedIn, setIsLoggedIn] = useState(() => { // Estado para indicar si el usuario está autenticado
    const storedStatus = localStorage.getItem('isLoggedIn'); // Obtención del estado de inicio de sesión almacenado en localStorage
    return storedStatus === 'true'; // Devuelve true si el estado almacenado es 'true', de lo contrario false
  });

  const navigate = useNavigate(); // Obtención de la función navigate desde 'react-router-dom'
  const { loginApi } = ConexionApi(); // Extracción de la función loginApi desde ConexionApi

  useEffect(() => { // Efecto secundario para almacenar el estado de isLoggedIn en localStorage
    localStorage.setItem('isLoggedIn', isLoggedIn); // Almacena el estado actual de isLoggedIn en localStorage
  }, [isLoggedIn]); // Se ejecuta cuando el estado isLoggedIn cambia

  const login = async (username, password) => { // Función para iniciar sesión
    try {
      const userData = await loginApi(username, password); // Llama a loginApi para autenticar al usuario con username y password
      console.log(userData); // Imprime los datos del usuario (puedes personalizar esta parte según tus necesidades)

      if (userData) { // Si userData existe (es decir, si la autenticación fue exitosa)
        setIsLoggedIn(true); // Establece isLoggedIn en true
        setError('')
        navigate('/home'); // Redirige al usuario a la página de inicio ('/home')
      } else {
        setError('Credenciales incorrectas');
        console.log("Credenciales incorrectas"); // Mensaje de error si las credenciales son incorrectas
      }
    } catch (error) {
      setError('Error en el inicio de sesión. Por favor, inténtelo de nuevo.');
      console.error("Error en el inicio de sesión:", error); // Manejo de errores si ocurre algún problema en el inicio de sesión
    }
  };

  const logout = () => { // Función para cerrar sesión
    setIsLoggedIn(false); // Establece isLoggedIn en false
    navigate('/login'); // Redirige al usuario a la página de inicio de sesión ('/login')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, error }}> {/* Proveedor de contexto de autenticación */}
      {children} {/* Renderiza los componentes hijos envueltos por el contexto de autenticación */}
    </AuthContext.Provider>
  );
};
