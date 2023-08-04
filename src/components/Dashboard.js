import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    day: '',
    date: '',
    employee_id: '',
    startTime: '',
    endTime: '',
    location: '',
  });

  useEffect(() => {
    // Fetch shifts from the backend
    axios.get('/shifts') 
      .then(response => {
        setShifts(response.data);
      })
      .catch(error => {
        console.error('Error fetching shifts:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="dashboard-content" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        {/* Display Shifts */}
        <h1>Shifts</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {shifts.map(shift => (
            <li key={shift._id} style={{ margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              {/* Display shift details */}
              <strong>Day:</strong> {shift.day}<br />
              <strong>Date:</strong> {shift.date}<br />
              <strong>Employee:</strong> {shift.employee_id}<br />
              <strong>Start Time:</strong> {shift.startTime}<br />
              <strong>End Time:</strong> {shift.endTime}<br />
              <strong>Location:</strong> {shift.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
