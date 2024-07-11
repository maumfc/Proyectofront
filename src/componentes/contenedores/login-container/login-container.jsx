import React, { useContext, useState } from 'react'; // Importación de React, useContext y useState desde 'react'
import './login.css'; // Importación del archivo de estilos 'login.css'. Asegúrate de que la ruta al archivo CSS sea correcta.
import { AuthContext } from '../../../hooks/auth-context'; // Importación del contexto de autenticación desde '../../../hooks/auth-context'
import { useNavigate } from 'react-router-dom'; // Importación de useNavigate desde 'react-router-dom'

const LoginContainer = () => { // Definición del componente funcional LoginContainer
  const [username, setUsername] = useState(''); // Estado local para almacenar el nombre de usuario
  const [password, setPassword] = useState(''); // Estado local para almacenar la contraseña
  const { login, error } = useContext(AuthContext); // Extracción de la función login desde el contexto de autenticación
  const navigate = useNavigate(); // Obtención de la función navigate desde 'react-router-dom'

  return (
    <div className="login-form-container"> {/* Contenedor principal del formulario de inicio de sesión */}
      <div className="login-form"> {/* Formulario de inicio de sesión */}
        <h2>Inicio de Sesión</h2> {/* Título del formulario */}
        <form> {/* Formulario */}
          <label>
            Usuario: {/* Etiqueta para el campo de usuario */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Manejador de cambio para actualizar el estado 'username'
              className="login-form-input" // Clase CSS para estilización del input
              required // Campo requerido
            />
          </label>
          <label>
            Contraseña: {/* Etiqueta para el campo de contraseña */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Manejador de cambio para actualizar el estado 'password'
              className="login-form-input" // Clase CSS para estilización del input
              required // Campo requerido
            />
          </label>
          {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si existe */}
          <button type="button" className="login-form-button" onClick={() => { login(username, password) }}>Iniciar Sesión</button> {/* Botón para iniciar sesión que llama a la función 'login' con los datos de usuario y contraseña */}
          <button type="button" className="btn-registrar" onClick={() => { navigate('/registrousuario'); }}>Registro</button> {/* Botón para redirigir al usuario a la página de registro */}
        </form>
      </div>
    </div>
  );
};

export default LoginContainer; // Exportación del componente LoginContainer para su uso en otras partes de la aplicación
