import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
          <li><Link to="/dashboard/home">Home</Link></li>
          <li><Link to="/dashboard/scheduler">Scheduler</Link></li>
          <li><Link to="/dashboard/my-team">My Team</Link></li>
          <li><Link to="/dashboard/message">Message</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
