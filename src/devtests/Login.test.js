// Import the tools we need for testing
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // We need this because the Login component uses routing
import Login from '../components/Login';

// This test checks if the Login part of the app can start up without any problems
test('Login component renders without crashing', () => {
  // Try to display the Login part of the app
  // We have to put it inside a "MemoryRouter" because it uses routing
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
});
