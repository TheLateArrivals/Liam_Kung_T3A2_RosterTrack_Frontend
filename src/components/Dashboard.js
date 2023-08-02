import React, { useContext } from 'react';
import Auth from './Auth';

const Dashboard = () => {
  const { setIsLoggedIn } = useContext(Auth);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div className="dashboard-content">
        {/* Dashboard Content Goes Here */}
      </div>
    </div>
  );
};

export default Dashboard;
