import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Scheduler = () => {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    day: '',
    date: new Date(), // Set initial date to today
    employee_name: '',
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
        employee_name: '',
        startTime: '',
        endTime: '',
        location: '',
      });
    } catch (error) {
      console.error('Error creating shift:', error);
    }
  };

  return (
    <><div className="heading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
      <h2>Create New Shift</h2>
    </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="scheduler-content">
          {/* Create New Shift Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', width: '100%' }}>
              <label>
                Day:
                <input type="text" name="day" value={newShift.day} readOnly />
              </label>
              <label>
                Date:
                <DatePicker selected={newShift.date} onChange={handleDateChange} />
              </label>
              <label>
                Employee Name:
                <input type="text" name="employee_name" value={newShift.employee_name} onChange={handleInputChange} />
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', width: '100%' }}>
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
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <button type="submit">Create Shift</button>
            </div>
          </form>
        </div>
      </div></>
  
  );
};

export default Scheduler;
