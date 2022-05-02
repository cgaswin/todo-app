import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("enter a todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <div className="form">
      <input
        type="text"
        name="todo"
        id="todo"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
        placeholder="Enter a todo"
        style={{ width: "200px", height: "20px", padding: "5px" }}
      />

      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          backgroundColor: "orange",
          fontSize: "20px",
          padding: "5px",
          borderStyle: "none",
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoForm;
