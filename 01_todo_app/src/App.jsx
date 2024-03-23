import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import Header from "./Components/Headers/Header";
import Overview from "./Components/Overview/Overview";
import TodoDisplay from "./Components/TodoDisplay/TodoDisplay";

export const TodoContext= React.createContext()

function App() {

const [value, setValue] = useState("");
const [todos, setTodos] = useState([]);

function addTask() {
  const newTask = {
    id: todos.length == 0 ? 1 : todos.length + 1,
    taskName: value,
    isDone: false,
  };
  setTodos([...todos, newTask]);
}

function deleteTask(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function markDone(id) {
  
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
  );
} 

  return (
    <div className="">
      <TodoContext.Provider value={{value1:[value,setValue],value2:[todos,setTodos],addTask,deleteTask,markDone}}>
        <Header />
        <Overview />
        <TodoDisplay />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
