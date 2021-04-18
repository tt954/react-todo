import React from "react";
import { useDispatch } from "react-redux";

import { todoDeleted, todoToggled } from "../../../reducers/todosReducer";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(todoToggled(todo.id));
  };
  const onDelete = () => {
    dispatch(todoDeleted(todo.id));
  };

  return (
    <li className="todolist__content-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      ></input>
      <span>{todo.title}</span>
      <button onClick={onDelete}>X</button>
    </li>
  );
};

export default TodoItem;
