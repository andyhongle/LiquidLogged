import React from 'react';
import ReactDOM from 'react-dom';

// We will create this component shortly
import Root from './components/root';
import './normalize.css';


document.addEventListener('DOMContentLoaded', () => {
  
  ReactDOM.render(<Root />, document.getElementById("root"));
});


