import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>Something can probably go here.</p>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/roster">Roster</Link>
          </li>
          <li>
            <Link to="/dashboard/shifts">Shifts</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
