import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css"
import { PropTypes } from "prop-types";
import { func } from "prop-types";

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

 func.ReactPropTypes = {
  todoList: PropTypes.func,
  todoListItem: PropTypes.obj

}
 