import { createContext } from 'react';

const Auth = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default Auth;
