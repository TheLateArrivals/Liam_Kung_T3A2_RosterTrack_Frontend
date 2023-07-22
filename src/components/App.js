// App.js
import React from 'react';
import './App.css';
import Register from './Register'; // Import the Register component

function App() {
  return (
    <div className="app">
      {/* Your app's header goes here (if needed) */}
      <header className="header">
        {/* Header content goes here */}
      </header>
      {/* Main content section */}
      <div className="main-content">
        {/* Left section */}
        <div className="section-1">
          <div className="logo-title">
            {/* Your logo image goes here */}
            <img src="logo.png" alt="RosterTrack Logo" className="logo" />
            {/* Your app title goes here */}
            <h1 className="title">RosterTrack</h1>
          </div>
        </div>
        {/* Right section */}
        <div className="section-2">
          {/* Introduction text */}
          <h2 className="intro">Simplifying team scheduling. Transform your rostering experience today.</h2>
          {/* Sign-up form */}
          <div className="sign-up-form">
            <Register /> {/* Render the Register component here */}
          </div>
        </div>
      </div>
      {/* Your app's footer goes here (if needed) */}
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
