import React from 'react';
import './App.css';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilters';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__heading">Done</h1>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/todolist">Main List</a>
        </nav>
      </header>
      <main className="content">
        <h2>Todos</h2>
        <section>
          <TodoForm />
          <TodoList/>
          <TodoFilters />
        </section>
      </main>
    </div>
  )
}

export default App;
