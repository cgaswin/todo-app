import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import { TodoContext } from "./context/TodoContext";
import { useReducer } from "react";
import todoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, dispatch }}>
        <TodoForm />
        <Todos />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
