import { useSelector } from 'react-redux';

import TodoItem from "./todoitem/TodoItem";
import { selectFilteredTodoIds } from '../../reducers/todosReducer';
import './todo-list.css';

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)

  return (
    <section className="h-96">
      <ul>
        {todoIds.map((todoId) => (
          <TodoItem key={todoId} id={todoId} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
