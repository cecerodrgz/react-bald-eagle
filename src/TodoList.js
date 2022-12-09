import React from "react";
 import TodoListItem from "./TodoListItem";


 export default function Todolist(todoList) {
    console.log(todoList)
    return(
        <ul>
          { todoList.todoList.map(item => { 
          return <TodoListItem key={item.id} item={item} /> 
        })}
        </ul>
       )
 };
