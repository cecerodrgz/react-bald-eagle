import React from "react";

 export default function TodoListItem({todoList, onRemoveTodo}){
    console.log(todoList)
    return (<li>
        {todoList.title }
        <button type="button" onClick={() => onRemoveTodo(todoList.id)}>Remove</button>
        </li>);  
 }