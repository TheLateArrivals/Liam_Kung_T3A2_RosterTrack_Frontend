import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const MyTeam = () => {
  const localizer = momentLocalizer(moment);
  const [shifts, setShifts] = useState([]);

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
    title: `Shift - ${shift.employee_id}`,
    start: new Date(shift.date), // Assuming date is in ISO8601 format (e.g., "2023-08-05T10:00:00Z")
    end: new Date(shift.date),
  }));

  return (
    <div>
      <div className="my-team-content">
        {/* MyTeam Content Goes Here */}
        <h1>My Team's Calendar</h1>
        <div style={{ height: 600 }}>
          <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
