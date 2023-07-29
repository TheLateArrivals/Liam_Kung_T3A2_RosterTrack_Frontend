import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register'; // Import the Register component
import Login from './Login'; // Import the Login component
import logo from '../docs/logo.png'; // Import the logo.png file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Redirect the user to the dashboard after login
      return <Navigate to="/dashboard" />;
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="app">
        <header className="header">
          {/* Header content goes here */}
        </header>
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <div className="section-1">
                <div className="logo-title">
                  <img src={logo} alt="RosterTrack Logo" className="logo" />
                  <h1 className="title">RosterTrack</h1>
                </div>
              </div>
              <div className="section-2">
                <h2 className="intro">Simplifying team scheduling. Transform your rostering experience today.</h2>
                <div className="sign-up-form">
                  <Register />
                  <p className="login-link">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          }/>
          <Route path="/login" element={<Login />} />
        </Routes>      
        {/* Your app's footer goes here (if needed) */}
        <footer className="footer">
          {/* Footer content goes here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
