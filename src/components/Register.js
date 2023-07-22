// Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/users/register', userData);
      const token = response.data;
      console.log('Received token:', token);
      setShowSuccess(true);
      setErrorMessage(''); // Clear any previous error message on successful registration
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
        setErrorMessage(error.response.data.data || 'An error occurred during registration.');
      } else if (error.request) {
        console.error('No Response:', error.request);
        setErrorMessage('No response from the server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      {showSuccess ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>Congratulations! You have successfully signed up.</p>
          <p>You can now login using your email and password.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password input field */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* "Sign Up" button */}
          <button type="submit">Sign Up</button>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}

export default Register;
