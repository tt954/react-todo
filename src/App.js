import React from "react";

import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App py-10 px-20 flex justify-center">
      <main className="w-3/4 px-10 rounded-xl shadow-lg bg-white">
        <header className="">
          <h1 className="heading pt-6">TODO</h1>
        </header>
        <TodoForm />
        <TodoList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
