import React from "react";

import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="px-20 h-screen w-screen">
      <header className="header">
        <h1 className="header__heading">Done</h1>
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/todolist">Main List</a>
        </nav>
      </header>
      <main className="px-10 w-full rounded-xl shadow-lg bg-white">
        <h2>Todos</h2>
        <TodoForm />
        <TodoList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
