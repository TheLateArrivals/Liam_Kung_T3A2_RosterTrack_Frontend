import React, { useState, useEffect } from 'react';
import axios from 'axios'; // We import axios to make HTTP requests

const MyTeam = () => {
  // These are boxes where we can keep and change our data
  const [staffList, setStaffList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

    // Fetch all staff members from the server when the component mounts
    useEffect(() => {
      const fetchStaffMembers = async () => {
        try {
          const response = await axios.get('http://localhost:3000/user/staff');
          setStaffList(response.data);
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchStaffMembers();
    }, []);
  

  // This does something when we click the "Add Staff" button
  const handleAddStaff = async (e) => {
    e.preventDefault(); // This stops the page from refreshing
    const newStaffMember = { firstName, lastName, email }; // This is the new staff member we want to add
    setStaffList([...staffList, newStaffMember]); // Adds the new staff member to our list
    setFirstName(''); // Clears the first name box
    setLastName(''); // Clears the last name box
    setEmail(''); // Clears the email box

    try {
      // This sends the new staff member to our server to be saved in the database
      await axios.post('http://localhost:3000/user/staff', newStaffMember);
    } catch (err) {
      console.error(err); // If something goes wrong, we log the error
    }
  };

    // Define handleDeleteStaff here
  const handleDeleteStaff = (index) => {
    const newStaffList = [...staffList];
    newStaffList.splice(index, 1);
    setStaffList(newStaffList);
  };

  
  return (
    <div>
      <h2>My Team</h2>
      <form onSubmit={handleAddStaff}> 
        {/* Input boxes */}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        {/* Add Staff"button */}
        <button type="submit">Add Staff</button>
      </form>
      {/* List of staff members */}
      <ul>
        {staffList.map((staff, index) => (
          <li key={index}>
            {staff.firstName} {staff.lastName} - {staff.email}
            <button onClick={() => handleDeleteStaff(index)}>Delete Staff</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTeam;
