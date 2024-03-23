import React from "react";
import OverviewCard from "./OverviewCard";

function Overview() {
  const details = [
    { color: "#5694F2", process: "On Going" },
    {
      color: "#FEC347",
      process: "In Process",
    },
    {
      color: "#53C2C5",
      process: "Completed",
    },
    {
      color: "#F26E56",
      process: "Cancelled",
    },
  ];

  return (
    <section className="my-8 grid gap-5 grid-cols-2 grid-rows-2">
      {details.map((detail, key) => {
        return (
          <OverviewCard
            color={detail.color}
            process={detail.process}
            symbol={detail.symbol}
            key={key}
          />
        );
      })}
    </section>
  );
}

export default Overview;
