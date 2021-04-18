import { useSelector } from 'react-redux'
import { selectTodos } from '../../reducers/todosReducer'

const TodosRemaining = ({ count }) => {
  const suffix = count === 1 ? '' : 's'
  return (
    <div className="remaining">
      <h3>Remaining Todos</h3>
      <p><strong>{count}</strong> item{suffix} left</p> 
    </div>
  );
}

const Footer = (props) => {
  const todosRemaining = useSelector(state => {
    const uncompleted = selectTodos(state).filter(todo => !todo.completed)
    return uncompleted.length
  })

  return (
    <section className="todo__footer">
      <div className="actions">
        <h3>Actions</h3>
        <button>Mark All Completed</button>
        <button>Clear Completed</button>
      </div>
      <TodosRemaining count={todosRemaining}/>
    </section>
  );
};

export default Footer;