import React from 'react'; // Importación de React desde 'react'
import LoginContainer from '../componentes/contenedores/login-container/login-container'; // Importación del componente LoginContainer desde '../componentes/contenedores/login-container/login-container'

const Login = () => { // Definición del componente funcional Login
  return (
    <div> {/* Contenedor principal */}
      <LoginContainer /> {/* Renderiza el componente LoginContainer */}
    </div>
  );
};

export default Login; // Exportación del componente Login para su uso en otras partes de la aplicación
