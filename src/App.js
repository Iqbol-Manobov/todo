import React from "react";
import { useState } from "react";
import Button from "./Button/Button";
import "./App.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.length <= 2) {
      setError("You need at least 2 words");
      return;
    }
    const isExist = todos.some((t) => t === todo);
    if (isExist) {
      setError("This task is avaible");
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
    setError("");
  };

  const handleRemove = (str) => {
    const updatedTodos = todos.filter((t) => t !== str);
    setTodos(updatedTodos);
  };

  return (
    <div className="releative_container">
      <div className="none">
        <div className="input">
          <input
            type={"text"}
            placeholder="Enter text"
            onChange={handleChange}
            value={todo}
          ></input>
          <Button type="submit" onClick={handleSubmit}>Add Task</Button>

          <p className="error"> {error}</p>
        </div>
        <div className="list">
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  {" "}
                  {index + 1}.{todo}
                  <Button className="kitob" onClick={() => handleRemove(todo)}>REMOVE</Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;