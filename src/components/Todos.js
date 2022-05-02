import React, { useContext } from "react";
import { REMOVE_TODO } from "../context/action.types";
import { TodoContext } from "../context/TodoContext";
import { AiFillDelete } from "react-icons/ai";

const Todos = () => {
  const [todos, dispatch] = useContext(TodoContext);

  return (
    <div className="display">
      {todos.map((todo) => (
        <div>
          <div key={todo.id} className="list">
            {todo.todoString}
          </div>
          <span
            style={{ float: "right" }}
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              });
            }}
          >
            <AiFillDelete />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Todos;
