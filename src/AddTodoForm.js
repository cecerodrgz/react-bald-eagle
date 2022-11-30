import React from "react";
import {useState} from 'react'; 

 const AddTodoForm = (props) => {
    const [todoTitle, setTodoTitle] = useState("");
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }
     const handleAddTodo = (event) =>{
         event.preventDefault();
         props.onAddTodo(todoTitle);
         event.target.reset();
        //  event.target.title.value="";


     };

     return (
         <form onSubmit={handleAddTodo}>
             <label htmlFor="todoTitle">Title</label>
             <input 
             type='text' 
             id="TodoTitle" 
             name="title"
             value={todoTitle}
             onChange={(e) => handleTitleChange(e)}
             />
             <button type="submit">Add</button>
         </form>
     )
 }

 export default AddTodoForm;
