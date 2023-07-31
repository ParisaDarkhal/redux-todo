import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/actions/todoActions";

function App() {
  const [todo, setTodo] = useState();
  const todoList = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  console.log("todoList :>> ", todoList);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: todo, text: todo }));
  };
  return (
    <div className="App">
      <header>Todo App</header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todoList && todoList.map((item, i) => <div key={i}>{item.text} </div>)}
    </div>
  );
}

export default App;
