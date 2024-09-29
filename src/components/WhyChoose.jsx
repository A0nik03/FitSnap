import React from "react";
import Sided from "./WhyChooseContainer/Sided";
import { assets } from "../assets/assets";

const WhyChoose = () => {
  const data = [
    {
      Compo: assets.left1,
      heading: "Enhanced Focus On Individual Needs",
      para: `FitSnap: Ditch Bad Form, Embrace Perfect Workouts. AI Analyzes Your Moves In Real-Time For Flawless Fitness.`,
      color: "#7D8DC7",
      left: true,
    },
    {
      Compo: assets.right1,
      heading: `Data-Driven Insights`,
      para: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,consectetur",
      color: "#5E9ED7",
      left: false,
    },
    {
      Compo: assets.left2,
      heading: "Efficient Workouts",
      para: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      color: "#C46DA0",
      left: true,
    },

    {
      Compo: assets.right2,
      heading: `Preventing Injuries`,
      para: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      color: "#69996A",
      left: false,
    },
  ];

  return (
    <div className="m-10 flex flex-col justify-center items-center mt-36 mb-20">
      <div className="flex flex-col gap-6 justify-center items-center mb-10">
        <h1 className="font-semibold text-6xl font-montserrat">WHY CHOOSE FITSNAP</h1>
        <h4 className="font-medium text-2xl font-montserrat">GET REALTIME UPDATE WITH AI</h4>
      </div>
      <div>
        {data.map((item, index) => (
          <Sided key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
