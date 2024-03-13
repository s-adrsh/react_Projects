import React from "react";
import OverviewCard from "./OverviewCard";

function Overview() {
  const details = [
    { color: "card1", process: "On Going" },
    {
      color: "card2",
      process: "In Process",
    },
    {
      color: "card3",
      process: "Completed",
    },
    {
      color: "card4",
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
