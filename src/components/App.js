import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useStore from "../store";

const App = () => {
  const setTodos = useStore((state) => state.setTodos);

  useEffect(setTodos);

  return (
    <div className="app">
      <h1>ZUSTODO: A Zustand.JS LocalStorage Todo App</h1>
      <img
        src="/zustand.png"
        alt="zustand logo"
        height="15%"
        style={{
          borderRadius: "50%",
        }}
      />
      <br />
      <AddTodo />
      <br />
      <TodoList />
    </div>
  );
};

export default App;
