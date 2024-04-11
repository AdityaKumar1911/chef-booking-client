import React, { useState } from 'react';
import axios from 'axios';
import '../Form/Form.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Show a success message or redirect the user to a new page
      alert('Login successful');
    } catch (err) {
      console.error('Login failed:', err.response.data.error);
      setError(err.response.data.error);
    }
  };

  return (
    <div className="loginform">
      <div className="form-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
