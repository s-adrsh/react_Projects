import React, { useContext } from "react";
import { TodoContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Card = ({ item: { id, taskName, isDone } }) => {
  const contextValues = useContext(TodoContext);
  const {
    value1: [value, setValue],
    value2: [todos, setTodos],
    addTask,
    deleteTask,
    markDone,
  } = contextValues;

  return (
    <div className="bg-white p-6 rounded-lg m-4 shadow-md flex justify-between">
      <div className="flex ">
        <input type="checkbox" onChange={(e)=> markDone(id)}/>
        <div className="mx-4">
          <div>{taskName}</div>
        </div>
      </div>
      <button className="mx-4" onClick={() => deleteTask(id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Card;
