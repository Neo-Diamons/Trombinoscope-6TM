// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/Header'; // Update the path based on your project structure
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement your login logic here
    console.log(`Login with ${username} and ${password}`);
  };

  return (
    <div className="login-page">
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="white-input"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="white-input"
                placeholder="Mot de passe"
              />
            </div>
            <Link to="/forgot-password" className="forgot-password-link">
              Utilisateur ou mot de passe oublié
            </Link>
            <br />
            <br />
            <button type="button" onClick={handleLogin} className="login-button">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
