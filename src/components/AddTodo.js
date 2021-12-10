import React from "react";
import "../styles/addtodo.css";
import useStore from "../store";
import { v4 } from "uuid";

const AddTodo = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = React.useState("");

  const add = (e) => {
    e.preventDefault();
    addTodo({
      id: v4(),
      text,
      completed: false,
    });
    setText("");
  };

  return (
    <form onSubmit={(e) => add(e)}>
      <input
        type="text"
        placeholder="Add Todo"
        className="inputbox"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="submitbtn">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
