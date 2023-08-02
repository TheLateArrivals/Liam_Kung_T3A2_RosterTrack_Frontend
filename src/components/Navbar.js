// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Navbar = () => {
  const { setIsLoggedIn } = useContext(Auth);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Menu Icon for Mobile */}
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className="nav-list">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/scheduler">Scheduler</Link></li>
          <li><Link to="/my-team">My Team</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
