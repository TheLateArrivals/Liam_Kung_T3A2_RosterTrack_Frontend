// Register.js
import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config();


function Register() {
  // State variables to store user input for username, email, and password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State variables for success and error messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the sign-up form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behaviour ie a full page reload

    // Create an object with the user's username, email, and password data
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    // Error Handling when registration requirements are not met
    try {
      // Make a POST request to the backend API endpoint '/users/register'
      // Send 'userData' to the server for registration
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL, userData);
      const token = response.data; // Get the token from the response data received from the server
      console.log('Received token:', token); // Log the received token to the console
      setShowSuccess(true); // Display success message on successful registration
      setErrorMessage(''); // Clear any previous error message on successful registration
    } catch (error) {
      // Handle errors that occurred during registration
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
  // Successful Registration Message
  return (
    <div>
      {showSuccess ? ( // If registration was successful, display success message
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
            onChange={(e) => setUsername(e.target.value)} // Update 'username' state with user input
          />
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update 'email' state with user input
          />
          {/* Password input field */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update 'password' state with user input
          />
          {/* "Sign Up" button */}
          <button type="submit">Sign Up</button>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message if present */}
        </form>
      )}
    </div>
  );
}

export default Register;
