import { useState } from 'react'
import { formatData } from '../../helpers/format'
import './TodoItem.scss'
const TodoItem = ({ id, todoname, isCompleted, isEdited, isEditing, date, alarm, setTodos, todos }) => {
  const [todoActions, setTodoActions] = useState(false)
  formatData(date)
  const { hours, minutes } = formatData(date)
  const handleCompleteTask = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }
  return (
    <div className='todo-item' onClick={() => setTodoActions(!todoActions)}>
      <div className={`item__content-wrapper ${isCompleted && 'item__content-wrapper--active'}`}>
        <h3>{todoname}</h3>
        <p className='item__data'>{`${hours} : ${minutes}`}</p>
      </div>
      <div onClick={e => e.stopPropagation()} className={todoActions ? "item__actions item__actions--active" : "item__actions"}>
        <button onClick={() => handleCompleteTask(id)}>Complete</button>
        <button>Edit</button>
        <button onClick={() => setTodos(todos.filter(todo => todo.id !== id && todo))}>Delete</button>
      </div>
    </div>
  )
}
export default TodoItem