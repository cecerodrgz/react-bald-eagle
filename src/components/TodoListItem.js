import React, {useState} from "react";
import { PropTypes } from "prop-types";
import { func } from "prop-types";
import style from "./TodoListItem.module.css"

export default function TodoListItem({ 
  todo, 
  onRemoveTodo
   }) {
    const [isToggle, setIsToggle] = useState(false);

  return (
    <li className={style.todoList}>
      <input className={style.checkedBtn}
      type="checkbox"
      onChange={() => setIsToggle(!isToggle)}
      checked={isToggle}
      />
  
      {todo.fields.Name}
      <button className={style.deleteBtn}
      type="button" 
      onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
}

func.ReactPropTypes = {
 TodoListItem: PropTypes.func,
 onClick: PropTypes.func,
 onRemoveTodo: PropTypes.func,
 todo: PropTypes.obj,
 toggleComplete: PropTypes.func
}
