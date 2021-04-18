import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectTodoById,
  todoToggled,
  todoColorSelected,
  todoDeleted,
} from "../../../reducers/todosReducer";
import { filters } from "../../../reducers/filtersReducer";
import { capitalize } from "../../../utils/helpers";

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { title, completed, color } = todo
  const dispatch = useDispatch();

  const handleCompletedToggle = () => {
    dispatch(todoToggled(id));
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch(todoColorSelected(id, color))
  };

  const onDelete = () => {
    dispatch(todoDeleted(id));
  };

  const colorOptions = filters.availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li className="todolist__content-item">
      <div className="segment__label">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedToggle}
        />
        <span>{title}</span>
      </div>
      <div className="segment__buttons">
        <select
          name=""
          id=""
          value={color}
          style={{ color }}
          onChange={handleColorChange}
        >
          <option value=""></option>
          {colorOptions}
        </select>
        <button onClick={onDelete}>X</button>
      </div>
    </li>
  );
};

export default TodoItem;
