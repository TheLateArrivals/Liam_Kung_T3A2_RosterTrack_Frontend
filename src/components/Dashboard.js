import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const Dashboard = () => {
  const localizer = momentLocalizer(moment);
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    day: '',
    date: '',
    employee_id: '',
    startTime: '',
    endTime: '',
    location: '',
  });
  const [filteredEmployee, setFilteredEmployee] = useState('');
  const [filteredShifts, setFilteredShifts] = useState([]);
  const [shiftsTomorrow, setShiftsTomorrow] = useState([]);
  const [selectedShift, setSelectedShift] = useState(null);

  useEffect(() => {
    // Fetch shifts from the backend
    axios.get('/shifts') 
      .then(response => {
        setShifts(response.data);
        setFilteredShifts(response.data); // Initialize filtered shifts with all shifts

        // Calculate and filter shifts for tomorrow
        const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
        const shiftsForTomorrow = response.data.filter(shift => shift.date === tomorrow);
        setShiftsTomorrow(shiftsForTomorrow);
      })
      .catch(error => {
        console.error('Error fetching shifts:', error);
      });
  }, []);

  useEffect(() => {
    // Filter shifts when the filteredEmployee value changes
    if (filteredEmployee) {
      const filtered = shifts.filter(shift => shift.employee_id.includes(filteredEmployee));
      setFilteredShifts(filtered);
    } else {
      setFilteredShifts(shifts);
    }
  }, [filteredEmployee, shifts]);

  const handleEmployeeFilterChange = event => {
    const { value } = event.target;
    setFilteredEmployee(value);
  };

  const events = filteredShifts.map(shift => ({
    id: shift._id,
    title: shift.employee_id,
    start: new Date(shift.date), 
    end: new Date(shift.date),
  }));

  const handleEventSelect = event => {
    const selectedShiftData = filteredShifts.find(shift => shift._id === event.id);
    setSelectedShift(selectedShiftData);
  };

  const handleCloseShiftDetails = () => {
    setSelectedShift(null);
  };


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="dashboard-content" style={{ width: '50%', height: '50vh', textAlign: 'center', backgroundColor: '#21226a', color: '#fff' }}>
        <h2>Leave Requests</h2>
      </div>
      <div className="dashboard-content" style={{ width: '50%', height: '50vh', textAlign: 'center', backgroundColor: '#dd293c' }}>
        <h2>My Team's Calendar</h2>
        {/* Calendar */}
        <div style={{ position: 'relative', height: 300, backgroundColor: '#ddd' }}>
          <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" onSelectEvent={handleEventSelect} />
         
        </div>
      </div>
      <div className="dashboard-content" style={{ width: '50%', height: '50vh', textAlign: 'center', backgroundColor: '#1e9174' }}>
        <h2>Shifts Tomorrow</h2>
        {shiftsTomorrow.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {shiftsTomorrow.map(shift => (
              <li key={shift._id} style={{ margin: '10px 0' }}>
                {/* Display shift details */}
                <strong>Employee:</strong> {shift.employee_id}<br />
                <strong>Start Time:</strong> {shift.startTime}<br />
                <strong>End Time:</strong> {shift.endTime}
              </li>
            ))}
          </ul>
        ) : (
          <p>No shifts scheduled for tomorrow.</p>
        )}
      </div>
      <div className="dashboard-content" style={{ width: '50%', height: '50vh', textAlign: 'center', backgroundColor: '#f1ae2e' }}>
        <h2>Settings</h2>
        {/* Your settings content */}
      </div>
    </div>
  );
};

export default Dashboard;
