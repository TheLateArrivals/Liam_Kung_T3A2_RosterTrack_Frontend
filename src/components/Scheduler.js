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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewShift(prevShift => ({ ...prevShift, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('/shifts', newShift);
      setShifts(prevShifts => [...prevShifts, response.data]);
      setNewShift({
        day: '',
        date: '',
        employee_id: '',
        startTime: '',
        endTime: '',
        location: '',
      });
    } catch (error) {
      console.error('Error creating shift:', error);
    }
  };

  return (
    <div>
      <div className="dashboard-content">
        {/* Display Shifts */}
        

        {/* Create New Shift Form */}
        <h2>Create New Shift</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Day:
            <input type="text" name="day" value={newShift.day} onChange={handleInputChange} />
          </label>
          <label>
            Date:
            <input type="text" name="date" value={newShift.date} onChange={handleInputChange} />
          </label>
          <label>
            Employee ID:
            <input type="text" name="employee_id" value={newShift.employee_id} onChange={handleInputChange} />
          </label>
          <label>
            Start Time:
            <input type="text" name="startTime" value={newShift.startTime} onChange={handleInputChange} />
          </label>
          <label>
            End Time:
            <input type="text" name="endTime" value={newShift.endTime} onChange={handleInputChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={newShift.location} onChange={handleInputChange} />
          </label>
          <button type="submit">Create Shift</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
