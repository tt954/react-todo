import React from 'react';
import { useDispatch } from 'react-redux';

import { todoDeleted } from '../../../reducers/todosReducer';

const TodoItem = props => {
    const { todo } = props
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(todoDeleted(todo.id))
    }

    return (
        <li className="todolist__content-item">
            <span>{todo.title}</span>
            <button onClick={onDelete}>X</button>
        </li>
    );
}

export default TodoItem;