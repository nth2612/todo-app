import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function EditDeleteTodo({
  todoId,
  deleteTodo,
  editTodo,
} : {
  todoId : string,
  deleteTodo : (todoId:string) => void,
  editTodo : (todoId:string) => void
}) {
  return (
    <div style={{marginRight:'4px'}}>
      <span onClick={() => editTodo(todoId)}>
        <EditIcon/>
      </span>
      <span onClick={() => deleteTodo(todoId) }>
        <DeleteIcon/>
      </span>
    </div>
  )
}
