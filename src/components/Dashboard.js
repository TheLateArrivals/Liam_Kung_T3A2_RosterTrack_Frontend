import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const { setIsLoggedIn } = useContext(Auth);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar />
      
      <div className="dashboard-content">
        {/* Your Dashboard Content Goes Here */}
      </div>
    </div>
  );
};

export default Dashboard;
