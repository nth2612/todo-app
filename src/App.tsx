import { ChangeEvent, useEffect, useState, useRef } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import ListTodo from './components/ListTodo'
import { v4 as uuidv4 } from 'uuid';

export interface TodoType {
  id : string,
  name : string,
  isCompleted : boolean,
  isEditing: boolean
}

function App() {
  const [todoList,setTodoList] = useState<Array<TodoType>>(
    //Lấy list todo từ local storage
    ()=>{
      const listTodo = JSON.parse(localStorage.getItem("todo") ?? '[]')
      if(listTodo?.length !== 0){
        return listTodo
      }
      return []
    }
  )

  const [newTodoString,setNewTodoString] = useState('')
  //Khi todoList thay đổi, cập nhật lại trong local storage
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todoList))
  },[todoList])
  
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef.current);
  

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }
  const handleSubmit = () =>{
    if(newTodoString){
      const newTodo : TodoType = {
        id: uuidv4(),
        name: newTodoString,
        isCompleted: false,
        isEditing: false
      }
      setTodoList((prev)=>{
        const newList = [newTodo,...prev];
        return newList;
      })
      setNewTodoString('')
      if(inputRef.current){
        inputRef.current.focus();
      }
    }
  }
  const updateCompleted = (todoId:string) => {
    setTodoList((prev)=>{
      const output = sortTodo(prev.map(todo =>{
        if(todo.id === todoId){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      }))
      return output
    })
  }
  const sortTodo = (list : TodoType[]) => {
    return list.sort((a,b)=>{
      if(a.isCompleted === b.isCompleted) {
        return 0
      }
      else if(a.isCompleted){
        return 1
      }
      else{
        return -1
      }
    })
  }
  const deleteTodo = (todoId:string) =>{
    setTodoList(prev =>{
      return prev.filter(todo => todo.id !== todoId)
    })
  }
  const editTodo = (todoId : string, nameTodo? : string) => {
    setTodoList(prev => {
      return prev.map(todo => {
        if(todo.id === todoId){
          if(nameTodo){
            return {...todo, isEditing : !todo.isEditing, name : nameTodo}
          }
          else{
            return {...todo, isEditing : !todo.isEditing}
          }
        }
        return todo;
      })
    })
  }
  return (
    <div className='container'>
      <h1 style={{textAlign:'center',marginBottom:'18px'}}>Todo-list</h1>
      <CreateTodo
      ref={inputRef}
      newTodoString={newTodoString}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      <ListTodo list={todoList} updateCompleted={updateCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}

export default App
