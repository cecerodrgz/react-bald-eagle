import * as React from 'react';
 import TodoList from './TodoList';
 import AddTodoForm from './AddTodoForm';
 import {useState} from 'react'; 
 import { useEffect } from 'react';

 const useSemiPersistentState = () =>{
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) ?? []);
  

   useEffect(() =>{
    console.log('render')
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])

  return [todoList, setTodoList]
 }

  function App(){
    const [todoList, setTodoList] = useSemiPersistentState();
    const addTodo = (newTodo) =>{
      setTodoList([...todoList, newTodo]);
     }

    return (
      <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
      </div>
  )
  
}

export default App;
