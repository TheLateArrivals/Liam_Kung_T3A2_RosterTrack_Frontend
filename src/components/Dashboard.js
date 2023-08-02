import React, { useContext } from 'react';
import Auth from './Auth';
import Navbar from './NavBar';

const Dashboard = () => {
  const { setIsLoggedIn } = useContext(Auth);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="dashboard-content">
        {/* Dashboard Content Goes Here */}
      </div>
    </div>
  );
};

export default Dashboard;
