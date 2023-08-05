// Import necessary tools for testing
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Auth from '../components/Auth';
import React from 'react';

// A test to make sure the user is initially not logged in
test('Auth context has correct initial state', () => {
  // Create a dummy component that shows whether the user is logged in
  const { getByText } = render(
    <Auth.Consumer>{(value) => <div>{String(value.isLoggedIn)}</div>}</Auth.Consumer>
  );

  // Make sure the component correctly shows that the user is not logged in
  expect(getByText('false')).toBeInTheDocument();
});

// A test to make sure the app can change the user's logged-in status
test('Auth context provides expected default function', () => {
  // Create a dummy component that shows whether the app can change the user's logged-in status
  const { getByText } = render(
    <Auth.Consumer>{(value) => <div>{String(typeof value.setIsLoggedIn === 'function')}</div>}</Auth.Consumer>
  );

  // Make sure the component correctly shows that the app can change the user's logged-in status
  expect(getByText('true')).toBeInTheDocument();
});
