import { Button, TextField } from '@mui/material'
import { ChangeEvent, forwardRef} from 'react'

interface CreateTodoProps {
  newTodoString:string,
  handleChange: (e:ChangeEvent<HTMLInputElement>)=> void,
  handleSubmit: ()=>void,
}

const CreateTodo = forwardRef<HTMLInputElement,CreateTodoProps>(({newTodoString, handleChange, handleSubmit},ref) => {
  //Nhấn enter thêm task
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === "Enter"){
      handleSubmit()
    }
  }

  return (
  <div style={{display: 'flex'}}>
    <TextField
    onKeyDown={handleKeyDown}
    inputRef={ref}
    size='small'
    value={newTodoString}
    onChange={handleChange}
    placeholder='Hôm nay bạn muốn làm gì'
    style={{flex:1}} />
    <Button variant='contained' onClick={handleSubmit}>Add</Button>
  </div>
)
})

export default CreateTodo;
