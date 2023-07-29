import React, { useState, useEffect } from 'react';

function Shifts() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    // Function to fetch shifts data from the backend
    const fetchShiftsData = async () => {
      try {
        const response = await fetch('/api/shifts'); // Make a GET request to the backend API route
        if (!response.ok) {
          throw new Error('Failed to fetch shifts data');
        }
        const data = await response.json(); 
        setShifts(data); 
      } catch (error) {
        console.error(error);
      }
    };

    
    fetchShiftsData();
  }, []);

  return (
    <div className="shifts">
      <h2>Shifts Page</h2>
      <ul>
        {shifts.map((shift) => (
          <li key={shift._id}>
            {/* Display the shift details */}
            <p>Day: {shift.day}</p>
            <p>Date: {shift.date}</p>
            <p>Start Time: {shift.startTime}</p>
            <p>End Time: {shift.endTime}</p>
            <p>Location: {shift.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shifts;
