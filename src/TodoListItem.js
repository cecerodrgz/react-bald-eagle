import React from "react";

 export default function TodoListItem({todo, onRemoveTodo}){
    // console.log(todoList)
    return (<li>
        {todo.fields.Name}
        <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>);  
 }