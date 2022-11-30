import React from "react";
 import TodoListItem from "./TodoListItem";


 const Todolist = (props) => {
    return (
     <ul>
        {props.map((todo) =>(
         <TodoListItem key={todo.id} todo={todo} />
       ))}
     </ul>
    )
 };

 export default Todolist;