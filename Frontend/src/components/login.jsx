import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear error message on submit

    try {
      const response = await axios.post('http://localhost:3000/api/login', { username, password });
      if (response.data.success) {
        const token = response.data.token;
        document.cookie = `token=${encodeURIComponent(token)}; path=/;`; // set cookie with path attribute for all routes
        console.log('Login successful!');
        // Replace with your desired redirect logic
        navigate('/students');
      }
      // Login successful
    } catch (error) {
      setErrorMessage("Wrong Username or Password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Login</h1>
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        {/* {successMessage && <p className="alert alert-success">successMessage</p>} */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
