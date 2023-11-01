import TodoItem from '../../components/todo-item/TodoItem';
import './Todolist.scss'
import PropTypes from 'prop-types'

const Todolist = ({todos}) => {
  return (
    <div className='todo-list'>
      {
        todos.map(({id, todoname, isCompleted, isEdited, isEditing, date, alarm}) => {
        return   <TodoItem key={id} todoname={todoname} isCompleted={isCompleted} isEdited={isEdited} isEditing={isEditing} date={date} alarm={alarm}/>
        })
      }
    </div>
  )
}


Todolist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    todoname: PropTypes.string,
    isCompleted: PropTypes.bool,
    isEdited: PropTypes.bool,
    isEditing: PropTypes.bool,
    date: PropTypes.object,
    alarm: PropTypes.number
  }))
}
export default Todolist