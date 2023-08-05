// Import necessary tools for testing
import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

// A test to make sure the main part of the app doesn't have any problems starting up
test('App component renders without crashing', () => {
  // Try to display the main part of the app
  render(<App />);
});
