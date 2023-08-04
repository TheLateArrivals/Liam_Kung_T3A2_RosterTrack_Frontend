import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shifts = () => {
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

  useEffect(() => {
    // Fetch shifts from the backend
    axios.get('/shifts') 
      .then(response => {
        setShifts(response.data);
        setFilteredShifts(response.data); // Initialize filtered shifts with all shifts
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="shifts-content" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        {/* Employee Filter */}
        <label>
          Filter by Employee:
          <input type="text" value={filteredEmployee} onChange={handleEmployeeFilterChange} />
        </label>
        {/* Display Shifts */}
        <h1>Shifts</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredShifts.map(shift => (
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

export default Shifts;
