import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';

// We will create this component shortly
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(<Root />, root);
});
