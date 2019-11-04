import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// ReactDOM.render method
// 1. first parameter is the WHAT (to be rendered to the page)
//   - has to be one element
// 2. second parameter is WHERE (to be rendered to the page)
//   - I grab the div from my index.html, and 'fill it up' with my components

// I 'collected' every component in the App.js, built up my page, and here
// I only have to pass my App component to the ReactDOM.Render method

ReactDOM.render(
  <App />,
  document.getElementById('react-container')
);