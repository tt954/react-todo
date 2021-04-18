import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTodoById,
  todoDeleted,
  todoToggled,
} from '../../../reducers/todosReducer';
import { filters } from '../../../reducers/filtersReducer';
import { capitalize } from '../../../utils/helpers';

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(todoToggled(todo.id));
  };
  const onDelete = () => {
    dispatch(todoDeleted(todo.id));
  };

  const colorOptions = filters.availableColors.map((color) => 
    <option key={color} value={color}>{capitalize(color)}</option>
  )

  return (
    <li className="todolist__content-item">
      <div className="segment__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleCompleted}
        />
        <span>{todo.title}</span>
      </div>
      <div className="segment__buttons">
        <select name="" id="">
            <option value=""></option>
            {colorOptions}
        </select>
        <button onClick={onDelete}>X</button>
      </div>
    </li>
  );
};

export default TodoItem;
