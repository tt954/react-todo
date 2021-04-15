import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilters';

const App = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__heading">To Do List </h1>
      </header>
      <main className="content">
        <TodoForm />
        <TodoList todos={todos}/>
        <TodoFilters />
      </main>
    </div>
  )
}

export default App;
