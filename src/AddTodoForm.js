import React from "react";
import {useState} from 'react'; 
import { InputWithLabel } from "./InputWithLabel";
import style from './AddTodoForm.module.css'

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
             <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                >
                    <b className={style.Title}>Title:</b>
                </InputWithLabel>
             <button type="submit" className={style.btn}>Add</button>
         </form>
     )
 }
