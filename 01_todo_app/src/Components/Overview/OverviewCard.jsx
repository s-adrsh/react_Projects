import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faClock,
  faFileCircleCheck,
  faFileCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const OverviewCard = ({ color, process }) => {
  return (
    <div
      className={`flex py-2 px-6 rounded-xl h-20 items-center gap-x-4 bg-${color}`}
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
        <p className="text-sm text-gray-600"> 25 tasks</p>
      </div>
    </div>
  );
};

export default OverviewCard;
