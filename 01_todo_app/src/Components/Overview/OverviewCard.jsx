import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faClock,
  faFileCircleCheck,
  faFileCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../App";

const OverviewCard = ({ color, process }) => {
  
  const contextValues = useContext(TodoContext);
  const {
    value1: [value, setValue],
    value2: [todos, setTodos],
    addTask,
    deleteTask,
    markDone,
  } = contextValues;

  const taskDone = () => todos.filter((todo) => todo.isDone);

  return (
    <div
      className={`flex py-2 px-6 rounded-xl h-20 items-center gap-x-4 shadow-md`}
      style={{ backgroundColor: color }}
    >
      <div>
        <FontAwesomeIcon
          icon={
            process === "On Going"
              ? faRotate
              : process === "In Process"
              ? faClock
              : process === "Completed"
              ? faFileCircleCheck
              : faFileCircleXmark
          }
          size="xl"
          className="text-white"
        />
      </div>
      <div>
        <h2 className="text-lg font-medium">{process}</h2>
        <p className="text-sm text-gray-600">
          {" "}
          {process === "On Going"
            ? todos.length
            : process === "In Process"
            ? "Maintanance"
            : process === "Completed"
            ? taskDone().length
            : "Maintance"}
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
