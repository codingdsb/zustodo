import React from "react";
import useStore from "../store";
import TodoItem from "./TodoItem";
import "../styles/todolist.css";

const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
