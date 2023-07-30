import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function Profile() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Function to fetch user/staff details from the backend
    const fetchProfileData = async () => {
      try {
        // GET request to the backend endpoint
        const response = await fetch('/api/users/profile', {
          method: 'GET',
          headers: {
            // authentication headers (JWT)
           
          },
        });

        if (!response.ok) {
          // Handle error cases 
          throw new Error('Failed to fetch profile data');
        }

        
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchProfileData function to initiate the API request
    fetchProfileData();
  }, []);

  return (
    <div className="profile">
       <Navbar />
      <h2>Profile</h2>
      {profileData ? (
        <div>
        
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
}

export default Profile;
