import React, {useState} from "react";
import { InputWithLabel } from "./InputWithLabel";
import style from './AddTodoForm.module.css'
import { PropTypes } from "prop-types";
import { func } from "prop-types";

export default function AddTodoForm({ onAddTodo, setTodoList, todoList }) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = async (event) => {
    event.preventDefault();
    const newTodo = await onAddTodo({Name: todoTitle}); 
    const newTodoList = ([...newTodo.records, ...todoList]);
    setTodoList(newTodoList)
    setTodoTitle('');
  }

  return (
    <form className={style.taskInput} onSubmit={handleAddTodo}>
        <InputWithLabel
           todoTitle={todoTitle}
           handleTitleChange={handleTitleChange}
           onChange={(e) => setTodoTitle(e.target.value)}
           >
               <b className={style.Title}>Title:</b>
           </InputWithLabel>
        <button type="submit" className={style.btn}>Add</button>
    </form>
)
}

func.ReactPropTypes = {
  onAddTodo: PropTypes.func,
  todoTitle: PropTypes.object,
  onSubmit: PropTypes.func
}
