import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { saveNewTodo } from "../../reducers/todosReducer";

const TodoForm = (props) => {
  const [text, setText] = useState('')
  const [color, setColor] = useState(null)
  const dispatch = useDispatch()

  const update = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = text.trim()
    // creates newTodo from form values
    const newTodo = {
      title, 
      completed: false,
      color, 
    }
    await dispatch(saveNewTodo(newTodo))
    
    setText('')
  };

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        placeholder="What needs to be done?"
        value={text}
        onChange={update}
      ></input>

      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
