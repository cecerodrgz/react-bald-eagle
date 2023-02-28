import * as React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Name&sort[0][direction]=asc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.sort((a, b) => {
          if (a.fields.Name < b.fields.Name) return -1;
          else if (a.fields.Name > b.fields.Name) return 1;
          return 0;
        });
        console.log(result);
        setTodoList(result.records);
        setIsLoading(false);
      });
  }, []);

  const deleteTableData = async (id) => {
    const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
    {
        method: 'DELETE',
        headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

  const addTableData = async (newFields) => {
  const res = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
          method: "POST",
          headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              records: [
                  {
                      fields: {
                          ...newFields,
                      },
                  },
              ],
          }),
      }
  );
  const data = await res.json();
  return data;
};

const removeTodo = async (id) => {
    await deleteTableData(id);
    const newTodoList = todoList.filter(
    (todo) => todo.id !== id
    );
    setTodoList(newTodoList);
};
  

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // const addTodo = (newTodo) => {
  //   setTodoList([...todoList, newTodo]);
  // };


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className={style.Background}>
                <h1 className={style.todoList}>Todo List</h1>
                <AddTodoForm onAddTodo={addTableData} 
                todoList={todoList}
                setTodoList={setTodoList}/>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo}
                  />
                )}
              </div>
            }
          ></Route>
          <Route path="/new" exact element={<h2>New Todo List</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
