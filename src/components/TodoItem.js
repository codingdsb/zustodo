import React from "react";
import CustomCheckBox from "./CustomCheckBox";
import "../styles/todoitem.css";
import useStore from "../store";

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useStore((state) => state);

  return (
    <div className="todoitem">
      <div className="left">
        <CustomCheckBox
          checked={todo.completed}
          style={{
            cursor: "pointer",
          }}
          onClick={() => toggleTodo(todo.id)}
        />
        &nbsp; &nbsp;
        <span>{todo.completed ? <del>{todo.text}</del> : todo.text}</span>
      </div>
      <button className="deletebtn" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
