import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Auth from '../components/Auth';
import React from 'react';

test('Auth context has correct initial state', () => {
  // Render a component that uses the Auth context to access its value
  const { getByText } = render(
    <Auth.Consumer>{(value) => <div>{String(value.isLoggedIn)}</div>}</Auth.Consumer>
  );

  // Check that isLoggedIn is initially false
  expect(getByText('false')).toBeInTheDocument();
});

test('Auth context provides expected default function', () => {
  // Render a component that uses the Auth context to access its value
  const { getByText } = render(
    <Auth.Consumer>{(value) => <div>{String(typeof value.setIsLoggedIn === 'function')}</div>}</Auth.Consumer>
  );

  // Check that setIsLoggedIn is a function
  expect(getByText('true')).toBeInTheDocument();
});
