import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

const store = configureStore();

import { allTodos } from './reducers/selectors';
window.store = store;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});