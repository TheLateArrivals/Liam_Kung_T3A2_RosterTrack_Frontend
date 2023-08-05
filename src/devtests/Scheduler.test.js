// Import necessary tools for testing
import React from 'react';
import { render, act } from '@testing-library/react';
import Scheduler from '../components/Scheduler';
import axios from 'axios';

// A test to make sure the Scheduler part of the app doesn't have any problems starting up
test('Scheduler component renders without crashing', async () => {
  // Try to display the Scheduler part of the app
  await act(async () => {
    render(<Scheduler />);
    
  // Pretend we're making a successful data request
  axios.get = jest.fn().mockResolvedValue({ data: 'some data' });
  });
});
