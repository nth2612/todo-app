import { Button, TextField } from '@mui/material'
import { ChangeEvent } from 'react'

export default function CreateTodo({
    newTodoString,
    handleChange,
    handleSubmit
} : {
    newTodoString:string,
    handleChange: (e:ChangeEvent<HTMLInputElement>)=> void,
    handleSubmit: ()=>void
}) {
  return (
    <div style={{display: 'flex'}}>
      <TextField size='small' value={newTodoString} onChange={handleChange} placeholder='Hôm nay bạn muốn làm gì' error={false} helperText='' style={{flex:1}} />
      <Button variant='contained' onClick={handleSubmit}>Add</Button>
    </div>
  )
}
