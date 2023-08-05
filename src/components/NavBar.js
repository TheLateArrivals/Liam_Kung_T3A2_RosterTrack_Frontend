import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../docs/logo.png';

const Navbar = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="navbar-logo" />

        {/* Hamburger Menu Icon for Mobile */}
        <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-list ${open ? 'open' : ''}`}>
          <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
          <li><Link to="/scheduler" onClick={closeMenu}>Scheduler</Link></li>
          <li><Link to="/my-team" onClick={closeMenu}>My Team</Link></li>
          <li><Link to="/message" onClick={closeMenu}>Message</Link></li>
          <li><Link to="/shifts" onClick={closeMenu}>Shifts</Link></li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
