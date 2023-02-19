import React from "react";
import { PropTypes } from "prop-types";
import { func } from "prop-types";

export default function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li>
      {todo.fields.Name}
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </li>
  );
}

func.ReactPropTypes = {
 TodoListItem: PropTypes.func,
 onClick: PropTypes.func,
 onRemoveTodo: PropTypes.func,
 todo: PropTypes.obj 
}
