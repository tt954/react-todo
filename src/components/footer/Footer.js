import { useDispatch, useSelector } from 'react-redux'

import {
  selectTodos,
  allTodosCompleted,
  completedTodosCleared,
} from "../../reducers/todosReducer";
import StatusFilter from './filters/StatusFilter'

const TodosRemaining = ({ count }) => {
  const suffix = count === 1 ? '' : 's'
  return (
    <div className="remaining">
      <h3>Remaining Todos</h3>
      <p><strong>{count}</strong> item{suffix} left</p> 
    </div>
  );
}

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector(state => {
    const uncompleted = selectTodos(state).filter(todo => !todo.completed)
    return uncompleted.length
  })

  const handleMarkAllCompleted = () => {
    dispatch(allTodosCompleted())
  }

  const handleClearCompleted = () => {
    dispatch(completedTodosCleared())
  }

  return (
    <section className="todo__footer">
      <div className="actions">
        <h3>Actions</h3>
        <button onClick={handleMarkAllCompleted}>Mark All Completed</button>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <TodosRemaining count={todosRemaining}/>
      <StatusFilter />
    </section>
  );
};

export default Footer;