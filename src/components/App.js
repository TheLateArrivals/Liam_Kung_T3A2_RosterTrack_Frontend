import React, { useState } from 'react';
import Auth from './Auth';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import MyTeam from './MyTeam';
import Scheduler from './Scheduler';
import Settings from './Settings';
import Message from './Message';
import logo from '../docs/logo.png';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* Header goes here (if needed) */}
        <header className="header">
          {/* Header content goes here */}
        </header>
        {/* Main content section */}
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
                    Already have an account? <a href="/login">Log in</a>
                  </p>
                </div>
              </div>
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={
            <Auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>
              <NavBar handleLogout={() => setIsLoggedIn(false)} />
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="my-team" element={<MyTeam />} />
                <Route path="scheduler" element={<Scheduler />} />
                <Route path="settings" element={<Settings />} />
                <Route path="message" element={<Message />} />
              </Routes>
            </Auth.Provider>
          } />
        </Routes>
        {/* Footer goes here */}
        <footer className="footer">
          {/* Footer content goes here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
