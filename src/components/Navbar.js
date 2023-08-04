import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
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
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/scheduler">Scheduler</Link></li>
          <li><Link to="/my-team">My Team</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/shifts">Shifts</Link></li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
