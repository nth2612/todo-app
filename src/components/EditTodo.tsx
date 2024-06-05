import { TextField,Button } from '@mui/material'

export default function EditTodo({todoName} : {todoName:string}) {
  return (
    <div style={{display: 'flex'}}>
        <TextField fullWidth value={todoName} size='small' style={{flex:1}} />
        <Button variant='contained'>Edit</Button>
    </div>
  )
}
