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
    <div>
      <div className="dashboard-content">
        {/* Display Shifts */}
        <h1>Shifts</h1>
        <ul>
          {shifts.map(shift => (
            <li key={shift._id}>
              {/* Display shift details */}
              Day: {shift.day}<br />
              Date: {shift.date}<br />
              Employee ID: {shift.employee_id}<br />
              Start Time: {shift.startTime}<br />
              End Time: {shift.endTime}<br />
              Location: {shift.location}
              <hr />
            </li>
          ))}
        </ul>


      </div>
    </div>
  );
};

export default Dashboard;
