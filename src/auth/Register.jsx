import axios from 'axios';
import React, { useState } from 'react'
import '../App.css';
import {url} from "../constants/constants.js"
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${url}/user/register`, {
        email,
        password,
        fullName,
      });

      localStorage.setItem('token', response.data.token);
      navigate("/login")
      setError('');
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const handleLogin=() => {
    navigate("/login")
  }

  return (
    <div className="register-container">
      <div>
      <h1>Register</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
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
        <button onClick={handleRegister}>Register</button>
        <p className='change' onClick={handleLogin}>login</p>
        {error && <div className="error">{error}</div>}
      </div>
     </div>
      
    </div>
  );
};


export default Register