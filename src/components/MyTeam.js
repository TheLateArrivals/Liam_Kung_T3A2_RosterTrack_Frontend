import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const MyTeam = () => {
  const localizer = momentLocalizer(moment);
  const [shifts, setShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);

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

  const events = shifts.map(shift => ({
    id: shift._id,
    title: shift.employee_id,
    start: new Date(shift.date), 
    end: new Date(shift.date),
  }));

  const handleEventSelect = event => {
    const selectedShiftData = shifts.find(shift => shift._id === event.id);
    setSelectedShift(selectedShiftData);
  };

  const handleCloseShiftDetails = () => {
    setSelectedShift(null);
  };

  const shiftDetailsStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    transition: 'transform 0.6s ease',
    transform: selectedShift ? 'scale(2)' : 'scale(0)',
    transformOrigin: 'top right',
  };

  return (
    <div>
      <div className="my-team-content">
        {/* MyTeam Content Goes Here */}
        <h1>My Team's Calendar</h1>
        <div style={{ position: 'relative', height: 600 }}>
          <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" onSelectEvent={handleEventSelect} />
          <div style={shiftDetailsStyle}>
            {selectedShift && (
              <div>
                <button onClick={handleCloseShiftDetails} style={{ position: 'absolute', top: '5px', right: '5px' }}>
                  X
                </button>
                <h2>Selected Shift</h2>
                <p><strong>Day:</strong> {selectedShift.day}</p>
                <p><strong>Date:</strong> {selectedShift.date}</p>
                <p><strong>Employee:</strong> {selectedShift.employee_id}</p>
                <p><strong>Start Time:</strong> {selectedShift.startTime}</p>
                <p><strong>End Time:</strong> {selectedShift.endTime}</p>
                <p><strong>Location:</strong> {selectedShift.location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
