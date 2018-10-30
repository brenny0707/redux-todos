import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};

  const root = document.getElementById('content');
  ReactDOM.render(<h1>Todos App</h1>, root);
});