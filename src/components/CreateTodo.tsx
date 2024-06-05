import { Button, TextField } from '@mui/material'
import { ChangeEvent, forwardRef } from 'react'

interface CreateTodoProps {
  newTodoString:string,
  handleChange: (e:ChangeEvent<HTMLInputElement>)=> void,
  handleSubmit: ()=>void,
}
const CreateTodo = forwardRef<HTMLInputElement,CreateTodoProps>(
  ({newTodoString, handleChange, handleSubmit},ref) => {
  return (
  <div style={{display: 'flex'}}>
    <TextField inputRef={ref} size='small' value={newTodoString} onChange={handleChange} placeholder='Hôm nay bạn muốn làm gì' error={false} helperText='' style={{flex:1}} />
    <Button variant='contained' onClick={handleSubmit}>Add</Button>
  </div>
)
})

export default CreateTodo;
