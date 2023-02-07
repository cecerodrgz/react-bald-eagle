import * as React from 'react';
 import TodoList from './TodoList';
 import AddTodoForm from './AddTodoForm';
 import {useState} from 'react'; 
 import { useEffect } from 'react';
 import style from './App.module.css'
 

  function App(){
    const [todoList, setTodoList] = useState([]);
    console.log(todoList)
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
        method: 'GET',
        headers: {
         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
      }).then((response) => response.json())
      .then((result) =>{
        setTodoList(result.records);
        setIsLoading(false)
      })
     }, [])

     useEffect(() => {
      if(!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }}, [todoList, isLoading])
     
  
    const addTodo = (newTodo) =>{
      setTodoList([...todoList, newTodo]);
     }
     const removeTodo = (id) => {
      const newTodoList = todoList.filter((Todo)  => id !== Todo.id);
      setTodoList(newTodoList);
    }
    
    return (
      <div className={style.Background}>
        <h1 className={style.todoList}>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading ? (<p>Loading...</p>) :           
         <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        }
      </div>
  )
}

export default App;