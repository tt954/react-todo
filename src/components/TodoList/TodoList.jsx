import { useSelector } from 'react-redux';

import TodoItem from "./TodoItem/TodoItem";
import { selectTodos } from '../../reducers/todosReducer';
import './todo-list.css';

const TodoList = (props) => {
  const todos = useSelector(state => selectTodos(state))

  return (
    <ul className="todolist__content">
      {todos.map(todo => 
        <TodoItem key={todo.id} todo={todo}/>
      )}
    </ul>
  );
};

export default TodoList;
