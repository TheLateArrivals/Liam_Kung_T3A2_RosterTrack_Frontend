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
    <div className="main-content">
      <div className="section-2">
        <h2 className="intro">Login to your account</h2>
        <div className="sign-up-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Login</button>
            </div>
          </form>
          {errorMessage && <p>Sorry, wrong username or password</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
