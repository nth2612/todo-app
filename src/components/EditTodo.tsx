import { TextField,Button } from '@mui/material'
import { useState } from 'react'

export default function EditTodo({todoName,editTodo, todoId} : {todoName:string, editTodo : (todoId:string, nameTodo: string) => void, todoId: string}) {
  const [nameTodo,setNameTodo] = useState(todoName)
  return (
    <div style={{display: 'flex'}}>
        <TextField
        fullWidth
        value={nameTodo}
        size='small'
        style={{flex:1}}
        onChange={(e) => setNameTodo(e.target.value)}
        />
        <Button
        variant='contained'
        onClick={()=> editTodo(todoId, nameTodo)}
        >
          Edit
        </Button>
    </div>
  )
}
