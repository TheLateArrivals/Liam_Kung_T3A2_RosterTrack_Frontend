import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

axios.defaults.baseURL = url;

// Calls ReactDOM.render to render the App component into the div with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
