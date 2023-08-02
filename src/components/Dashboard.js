import React from 'react';

const Dashboard = ({ userDetails }) => { // Accept userDetails prop
  return (
    <div>        
      <div className="dashboard-content">
        {/* dashboard Content Goes Here */}
        <h1>Under Construction</h1>
        {userDetails && (
          <div>
            <h2>Welcome, {userDetails.name}</h2>
            {/* You can add more details here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
