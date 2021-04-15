import TodoItem from "./TodoItem/TodoItem";
import './todo-list.css';

const TodoList = (props) => {
  const { todos, removeTodo } = props;
  return (
    <ul className="todolist__content">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
};

export default TodoList;
