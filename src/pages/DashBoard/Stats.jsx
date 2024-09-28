import React from "react";
import { assets } from "../../assets/assets";

const Stats = () => {
  const stats = [
    {
      label: "Avg. Calories",
      value: "1,930",
      icon: assets.fire,
      color: "rgba(87, 165, 250, 1)",
    },
    {
      label: "Avg. Proteins",
      value: 155,
      icon: assets.guitar,
      color: "rgba(74, 184, 255, 0.1)",
    },
    {
      label: "Avg. Carbs",
      value: 290,
      icon: assets.apple,
      color: "rgba(254, 250, 241, 1)",
    },
    {
      label: "Avg. Fats",
      value: 50,
      icon: assets.burger,
      color: "rgba(250, 205, 87, 1)",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-md flex">
          <div
            style={{ backgroundColor: stat.color }}
            className={`relative z-0 rounded-md h-[77px] w-[77px] flex justify-center items-center mr-5`}
          >
            <img src={stat.icon} className="absolute z-10  object-contain" alt="" />
          </div>
          <div>
            <p className="text-4xl font-normal">{stat.value}</p>
            <h4 className="text-[#767575] text-2xl font-normal w-1/2">{stat.label}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
