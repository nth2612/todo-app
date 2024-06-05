import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import ListTodo from './components/ListTodo'
import { v4 as uuidv4 } from 'uuid';

export interface TodoType {
  id : string,
  name : string,
  isCompleted : boolean
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

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }
  const handleSubmit = () =>{
    const newTodo : TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false
    }
    setTodoList((prev)=>{
      const newList = [newTodo,...prev];
      return newList;
    })
    setNewTodoString('')
  }
  const updateCompleted = (todoId:string) => {
    setTodoList((prev)=>{
      return prev.map(todo =>{
        if(todo.id === todoId){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    })
  }

  return (
    <div className='container'>
      <h1 style={{textAlign:'center',marginBottom:'18px'}}>Todo-list</h1>
      <CreateTodo
      newTodoString={newTodoString}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      <ListTodo list={todoList} updateCompleted={updateCompleted} />
    </div>
  )
}

export default App
