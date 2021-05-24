import React from "react";

import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App h-screen py-10 px-20 flex justify-center">
      <main className="sm:w-1/1 md:w-3/4 lg:w-3/5 my-5 px-10 rounded-xl shadow-lg bg-white">
        <header className="">
          <h1 className="heading text-2xl pt-8">TODAY</h1>
        </header>

        <TodoForm />
        <TodoList />
        <Footer />
      </main>
    </div>
  );
};

export default App;
