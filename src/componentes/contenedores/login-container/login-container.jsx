import React, { useState } from 'react';
import './login.css'; // Asegúrate de importar el archivo CSS correctamente

const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar la lógica para iniciar sesión
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="login-form-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;