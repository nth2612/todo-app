import { Button } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditTodo from './EditTodo';
import { TodoType } from '../App';
import EditDeleteTodo from './EditDeleteTodo';

const Icon = ({isCompleted,updateCompleted,todoId} : {isCompleted: boolean,updateCompleted: (todoId:string)=> void, todoId: string}) => {
    return <div onClick={() => updateCompleted(todoId)}>
        {isCompleted ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </div>
}

export default function ListTodo({list,updateCompleted} : {list: TodoType[],updateCompleted: (todoId:string)=> void}) {
    const wtf:boolean = false;
  return (
    <div style={{marginTop:'24px'}}>
    {wtf ? <EditTodo todoName='what the heck'/> : <></>}
      {list.map(todo => (
            <Button
            key={todo.id}
            style={{justifyContent:'space-between'}}
            fullWidth
            startIcon={<Icon isCompleted={todo.isCompleted} updateCompleted={updateCompleted} todoId={todo.id} />}
            endIcon={[<EditDeleteTodo key={todo.id} />]}
            >
            {todo.name}
            </Button>
      ))}
    </div>
  )
}
