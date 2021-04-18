import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectTodoById,
  todoDeleted,
  todoToggled,
} from "../../../reducers/todosReducer";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
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
