import React from "react";
import {useState} from 'react'; 

export default function AddTodoForm({ onAddTodo }){
    const [todoTitle, setTodoTitle] = useState('');
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }
     const handleAddTodo = (event) =>{
         event.preventDefault();
            const todoObject = {
                title: todoTitle, 
                id: Date.now()
            }

            onAddTodo(todoObject);
            setTodoTitle('');
     };

     return (
         <form onSubmit={handleAddTodo}>
             <label htmlFor="todoTitle">Title</label>
             <input 
             type='text' 
             id="TodoTitle" 
             name="title"
             value={todoTitle}
             onChange={handleTitleChange}
             />
             <button type="submit">Add</button>
         </form>
     )
 }
