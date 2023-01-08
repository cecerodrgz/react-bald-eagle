import * as React from 'react';
 import TodoList from './TodoList';
 import AddTodoForm from './AddTodoForm';
 import {useState} from 'react'; 
 import { useEffect } from 'react';

  function App(){
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
        new Promise((resolve) => {
        setTimeout(() => resolve ({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) ?? [],
        }}),
          2000
        )
      }).then((result) =>{
        setTodoList([...result.data.todoList]);
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
      <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading ? (<p>Loading...</p>) : (
           <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        )}
      </div>
  )
}

export default App;