import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // Import this to use `toBeInTheDocument`
import Register from '../components/Register';

// Tests for Register
describe('Register', () => {
  // Check if Register shows up
  test('renders Register component without crashing', () => {
    render(<Register />);
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
  });

  // Check if form can be filled
  test('allows the user to fill out the form', () => {
    render(<Register />);
    userEvent.type(screen.getByPlaceholderText(/Username/i), 'myusername'); // Changed from getByLabelText
    userEvent.type(screen.getByPlaceholderText(/Password/i), 'mypassword'); // Changed from getByLabelText
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeEnabled();
  });
});
