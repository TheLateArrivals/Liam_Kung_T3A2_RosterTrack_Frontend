import React from 'react';
import { render, act } from '@testing-library/react';
import Scheduler from '../components/Scheduler';
import axios from 'axios';

test('Scheduler component renders without crashing', async () => {
  // Manually mock the axios.get function for this test
  axios.get = jest.fn().mockResolvedValue({ data: 'some data' });

  // Wrap the render inside the act function
  await act(async () => {
    render(<Scheduler />);
  });
});
