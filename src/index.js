import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import store from './store/store';

import reportWebVitals from './reportWebVitals';

import { getTodos, addTodo, removeTodo } from './api/todoAPI';
import { fetchTodos } from './reducers/todosReducer';

document.addEventListener('DOMContentLoaded', () => {
  window.getTodos = getTodos;
  window.addTodo = addTodo;
  window.removeTodo = removeTodo;
  window.fetchTodos = fetchTodos;

  window.store = store;

  ReactDOM.render(
    // <Provider store={store}>
    //   <App />
    // </Provider>,
    <h1>hello world</h1>,
    document.getElementById('root')
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
