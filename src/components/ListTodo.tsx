import { Button } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditTodo from './EditTodo';
import { TodoType } from '../App';
import EditDeleteTodo from './EditDeleteTodo';

const Icon = ({
  isCompleted,
  updateCompleted,
  todoId
} : {
  isCompleted: boolean,
  updateCompleted: (todoId:string)=> void,
  todoId: string
}) => {
    return <div onClick={() => updateCompleted(todoId)}>
        {isCompleted ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </div>
}

export default function ListTodo({
  list,
  updateCompleted,
  deleteTodo,
  editTodo
} : {
  list: TodoType[],
  updateCompleted: (todoId:string)=> void,
  deleteTodo : (todoId:string) => void,
  editTodo : (todoId:string) => void
}) {

  return (
    <div style={{marginTop:'24px'}}>
      {list.map(todo => {
        return todo.isEditing ? (<EditTodo todoId={todo.id} editTodo={editTodo} key={todo.id} todoName={todo.name}/>) : (
          <Button
          key={todo.id}
          style={{justifyContent:'space-between'}}
          fullWidth
          startIcon={
          <Icon
          isCompleted={todo.isCompleted}
          updateCompleted={updateCompleted}
          todoId={todo.id} />}
          endIcon={
          <EditDeleteTodo
          key={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          todoId={todo.id} />}
          >
          <span style={{wordBreak: 'break-word',flex: 1}}>
          {todo.name}
          </span>
          </Button>
    )
      })}
    </div>
  )
}
