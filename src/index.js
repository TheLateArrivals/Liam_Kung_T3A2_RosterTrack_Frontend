import React from 'react'; // Imports the React library
import ReactDOM from 'react-dom'; // Imports the ReactDOM library, which provides DOM-specific methods
import App from './components/App'; // Imports the App component

// Calls ReactDOM.render to render the App component into the div with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);