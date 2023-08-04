
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Scheduler = () => {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    day: '',
    date: new Date(), // Set initial date to today
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

  const handleDateChange = date => {
    // Set the selected date
    setNewShift(prevShift => ({ ...prevShift, date }));
    
    // Automatically set the day based on the selected date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = days[date.getDay()];
    setNewShift(prevShift => ({ ...prevShift, day: selectedDay }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('/shifts', {
        ...newShift,
        startTime: new Date(newShift.startTime), // Convert to Date object
        endTime: new Date(newShift.endTime), // Convert to Date object
      });
      setShifts(prevShifts => [...prevShifts, response.data]);
      setNewShift({
        day: '',
        date: new Date(),
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
      <div className="scheduler-content">
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
            <DatePicker selected={newShift.date} onChange={handleDateChange} />
          </label>
          <label>
            Employee Name:
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
            <select name="location" value={newShift.location} onChange={handleInputChange}>
    <option value="">Select a Location</option>
    <option value="Room A">Room A</option>
    <option value="Room B">Room B</option>
    <option value="Room C">Room C</option>
    <option value="Room D">Room D</option>
    <option value="Room E">Room E</option>
    <option value="Room F">Room F</option>
    <option value="Room G">Room G</option>
    <option value="Kitchen">Kitchen</option>
    <option value="Office">Office</option>
  </select>
          </label>
          <button type="submit">Create Shift</button>
        </form>
      </div>
    </div>
  );
};

export default Scheduler;
