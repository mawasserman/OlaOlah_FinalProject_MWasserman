import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Adjust if your CSS file is named differently

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches the ID in index.html
);
