import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoListItem.module.css"

 export default function Todolist({todoList, onRemoveTodo}) {
    return(
        <ul className={style.ListItem}>
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
 