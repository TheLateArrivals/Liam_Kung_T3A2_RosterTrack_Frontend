import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        {/* Header content goes here */}
      </header>
      <div className="main-content">
        <div className="left-section">
          <div className="logo-title">
            <img src="logo.png" alt="RosterTrack Logo" className="logo" />
            <h1 className="title">RosterTrack</h1>
          </div>
        </div>
        <div className="right-section">
          <h2 className="main-heading">Simplifying team scheduling.</h2>
          <p className="sub-heading">Transform your rostering experience today.</p>
          <div className="sign-in-section">
            {/* Your sign-in form goes here */}
          </div>
        </div>
      </div>
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
