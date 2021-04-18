import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { saveNewTodo } from "../../reducers/todosReducer";

const TodoForm = (props) => {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  const update = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const title = text.trim()
    // creates newTodo from form values
    const newTodo = {
      title, 
      completed: false,
    }
    await dispatch(saveNewTodo(newTodo))
    
    setText('')
    setStatus('idle')
  };

  let isLoading = status === 'loading'
  let placeholder = isLoading ? "" : 'What needs to be done?';
  let loader = isLoading ? 'loading...' : null

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        value={text}
        onChange={update}
      ></input>
      {loader}
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
