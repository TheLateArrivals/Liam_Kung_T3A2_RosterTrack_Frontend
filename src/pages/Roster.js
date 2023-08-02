import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const RosterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%; /* Set the height to 100% of the container */
`;

function Roster() {
  const [rosters, setRosters] = useState([]);

  useEffect(() => {
    // Function to fetch rosters data from the backend
    const fetchRostersData = async () => {
      try {
        const response = await fetch('/api/rosters'); // Make a GET request to the backend API route
        if (!response.ok) {
          throw new Error('Failed to fetch rosters data');
        }
        const data = await response.json(); // Parse the response JSON
        setRosters(data); // Update the state with the fetched rosters data
      } catch (error) {
        console.error(error);
      }
    };

    fetchRostersData();
  }, []);

  return (
    <RosterContainer>
      <Navbar />
      <h2>Roster Calendar View</h2>
      <CalendarContainer>
        <StyledCalendar />
      </CalendarContainer>
      {/* Display roster data here */}
      <ul>
        {rosters.map((roster) => (
          <li key={roster._id}>
            <p>Month: {roster.month}</p>
            <p>Year: {roster.year}</p>
            <p>User: {roster.user.name}</p>
            <p>Shift: {roster.shift.day}</p>
          </li>
        ))}
      </ul>
      {/* Your footer component here (outside the .roster component) */}
    </RosterContainer>
  );
}

export default Roster;
