// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register'; // Import the Register component
import Login from './Login';
import logo from '../docs/logo.png'; // Import the logo.png file

function App() {
  return (
    <div className="app">
      {/* Your app's header goes here (if needed) */}
      <header className="header">
        {/* Header content goes here */}
      </header>
      {/* Main content section */}
      <Router> {/* Wrap your content with Router */}
        <div className="main-content">
          {/* Left section */}
          <div className="section-1">
            <div className="logo-title">
              {/* Your logo image goes here */}
              <img src={logo} alt="RosterTrack Logo" className="logo" />
              {/* Your app title goes here */}
              <h1 className="title">RosterTrack</h1>
            </div>
          </div>
          {/* Right section */}
          <div className="section-2">
            {/* Introduction text */}
            <h2 className="intro">Simplifying team scheduling. Transform your rostering experience today.</h2>
            {/* Sign-up and Login forms */}
            <div className="sign-up-form">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      {/* Your app's footer goes here (if needed) */}
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}


export default App;
