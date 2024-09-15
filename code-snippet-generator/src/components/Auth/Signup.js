// src/components/Auth/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/auth/register', { email, password });
      window.location.href = '/login'; // Redirect to login after successful signup
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
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
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;
