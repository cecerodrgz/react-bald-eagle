import React from "react";
import TodoListItem from "./TodoListItem";


 export default function Todolist({todoList, onRemoveTodo}) {
    return(
        <ul>
          { todoList.map((todoListItem) => 
          <TodoListItem 
          key={todoList.id} 
          todoList={todoListItem}
          onRemoveTodo={onRemoveTodo} 
          /> 
        )}        
        </ul>
       )
 };