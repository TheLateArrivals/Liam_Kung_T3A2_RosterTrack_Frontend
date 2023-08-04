import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => { // Receive the onLogin prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different pages

  const handleLogin = async (e) => {
    e.preventDefault();
    try {      
      const response = await axios.post('/users/login', {
        username,
        password,
      });

      // If login is successful, set user details and navigate to dashboard
      if (response.data.token) {
        const userDetails = {
          name: username, // You can replace this with actual data from the response
          // Add other details as needed
        };
        onLogin(userDetails); // Call onLogin prop with user details
        navigate('/dashboard');
      }
  
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {errorMessage && <p>Sorry, wrong username or password</p>}
    </div>
  );
};

export default Login;
