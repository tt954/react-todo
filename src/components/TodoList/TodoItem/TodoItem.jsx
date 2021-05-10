import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

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
  const { title, completed, color } = todo;
  const dispatch = useDispatch();

  const handleCompletedToggle = () => {
    dispatch(todoToggled(id));
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch(todoColorSelected(id, color));
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
    <li className="todo-item">
      <div className="todo__main flex items-center">
        <div className="bg-white border rounded-full border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
          <input
            type="checkbox"
            className="opacity-0 absolute cursor-pointer"
            checked={completed}
            onChange={handleCompletedToggle}
          />
          <svg
            className={`fill-current ${
              completed ? "" : "hidden"
            } w-3 h-3 text-indigo-600 pointer-events-none`}
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>

        <span>{title}</span>
      </div>
      <div className="todo__actions flex gap-1.5">
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
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={onDelete}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
