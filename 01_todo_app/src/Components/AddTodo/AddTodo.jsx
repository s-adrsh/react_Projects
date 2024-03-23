import React, { useContext } from "react";
import { TodoContext } from "../../App";
import { ContainerWithChildren } from "postcss/lib/container";

function AddTodo() {
  const contextValues = useContext(TodoContext);
  const {
    value1: [value, setValue],
    value2: [todos, setTodos],
    addTask,
    deleteTask,
    markDone,
  } = contextValues



  return (
    <section className=" ">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" onClick={addTask}>
        Add Task
      </button>
    </section>
  );
}

export default AddTodo;
