import React from "react";
import TodoListItem from "./TodoListItem";


 export default function Todolist({todoList, onRemoveTodo}) {
    return(
        <ul>
          { todoList.map((todoListItem) => 
          <TodoListItem 
          key={todoListItem.id} 
          todo={todoListItem}
          onRemoveTodo={onRemoveTodo} 
          /> 
        )}       
        </ul>
       )
 };