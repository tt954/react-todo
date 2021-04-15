import React from 'react';

const TodoItem = props => {
    const { todo, removeTodo } = props;
    return (
        <li className="todolist__content-item">
            <span>{todo.title}</span>
            <button onClick={removeTodo}>X</button>
        </li>
    );
}

export default TodoItem;