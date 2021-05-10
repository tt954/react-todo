import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { saveNewTodo } from "../../reducers/todosReducer";

const TodoForm = (props) => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useDispatch();

  const update = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const title = text.trim();
    // creates newTodo from form values
    const newTodo = {
      title,
      completed: false,
    };
    await dispatch(saveNewTodo(newTodo));

    setText("");
    setStatus("idle");
  };

  let isLoading = status === "loading";
  let placeholder = isLoading ? "" : "What needs to be done?";
  let loader = isLoading ? "loading..." : null;

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          className="px-5 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
          placeholder={placeholder}
          value={text}
          onChange={update}
          disabled={isLoading}
          required
        />
        {loader}
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-2 pr-5 py-3">
          <button className="p-1 rounded-full hover:bg-gray-100" type="submit">
            <FaPlus />
          </button>
        </span>
      </div>
    </form>
  );
};

export default TodoForm;
