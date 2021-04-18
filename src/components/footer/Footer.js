import { useDispatch, useSelector } from "react-redux";

import {
  selectTodos,
  allTodosCompleted,
  completedTodosCleared,
} from "../../reducers/todosReducer";
import StatusFilter from "./filters/StatusFilter";
import ColorFilters from "./filters/ColorFilters";

const TodosRemaining = ({ count }) => {
  const suffix = count === 1 ? "" : "s";
  return (
    <div className="flex-1">
      <h3 className="text-lg text-center">Remaining Todos</h3>
      <p>
        <strong>{count}</strong> item{suffix} left
      </p>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const { status, colors } = useSelector((state) => state.filters);

  const todosRemaining = useSelector((state) => {
    const uncompleted = selectTodos(state).filter((todo) => !todo.completed);
    return uncompleted.length;
  });

  const handleMarkAllCompleted = () => {
    dispatch(allTodosCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(completedTodosCleared());
  };

  return (
    <section className="todo__footer flex">
      <div className="flex-1">
        <h3 className="text-lg text-center">Actions</h3>
        <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <TodosRemaining count={todosRemaining} />
      <StatusFilter value={status} />
      <ColorFilters value={colors} />
    </section>
  );
};

export default Footer;
