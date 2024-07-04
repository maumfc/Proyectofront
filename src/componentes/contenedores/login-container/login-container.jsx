import React, { useContext, useState } from 'react';
import './login.css'; // Asegúrate de importar el archivo CSS correctamente
import { AuthContext } from '../../../hooks/auth-context';
const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext)

  
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Inicio de Sesión</h2>
        <form >
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-form-input"
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-form-input"
              required
            />
          </label>
          <button type="button" className="login-form-button" onClick={() => { login(username, password) }}>Iniciar Sesión</button>
          <button type="button" className="" onClick={() => { login(username, password) }}>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;