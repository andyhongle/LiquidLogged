import React from 'react';
import ReactDOM from 'react-dom';

// We will create this component shortly
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
