import React from "react";
import "./App.css";

import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";
import Footer from "./components/footer/Footer";

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
        <TodoForm />
        <TodoList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
