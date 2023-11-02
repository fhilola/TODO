import './TodoContainer.scss'
import TodoAdder from '../todo-adder/TodoAdder'
import Todolist from '../todolist/Todolist'
import { useState } from 'react'

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  console.log(todos);
  return (
    <div className='todo-container'>
        <TodoAdder todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoContainer