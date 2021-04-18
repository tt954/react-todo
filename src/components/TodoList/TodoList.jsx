import { useSelector } from 'react-redux';

import TodoItem from "./todoitem/TodoItem";
import { selectTodos } from '../../reducers/todosReducer';
import './todo-list.css';

const TodoList = (props) => {
  const todos = useSelector(state => selectTodos(state))

  return (
    <section className="todo__content">
      <ul>
        {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo}/>
        )}
      </ul>
    </section>
  );
};

export default TodoList;
