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
      <h3 className="heading">Remaining Todos</h3>
      <p className="text-center">
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
    <footer className="flex flex-wrap space-x-5 pt-4 pb-8 border-t border-gray">
      <div className="flex-1 flex flex-col">
        <h3 className="heading">Actions</h3>
        <button className="btn-blue mb-2" onClick={handleMarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="btn-blue" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
      <TodosRemaining count={todosRemaining} />
      <StatusFilter value={status} />
      <ColorFilters value={colors} />
    </footer>
  );
};

export default Footer;
