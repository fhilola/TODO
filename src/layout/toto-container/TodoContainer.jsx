import './TodoContainer.scss'
import TodoAdder from '../todo-adder/TodoAdder'
import Todolist from '../todolist/Todolist'

const TodoContainer = () => {
  return (
    <div className='todo-container'>
        <TodoAdder/>
        <Todolist/>
    </div>
  )
}

export default TodoContainer