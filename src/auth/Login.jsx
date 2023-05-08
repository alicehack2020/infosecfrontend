import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import {url} from "../constants/constants.js"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${url}/user/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      setError('');
      navigate("/")
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const handleRegister=() => {
    navigate("/register")
  }
  return (
    <div className="login-container">
      <div>
      <h1>Login</h1>
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p  className="change" onClick={handleRegister}>Register</p>
        {error && <div className="error">{error}</div>}
      </div>
      </div>
      
    </div>
  );
};

export default Login