import React from "react";
import { assets } from "../assets/assets";
import RunVec from "../components/Vector/RunVec";

const ThingsYouNeed = () => {
  const marking = [
    {
      text: "HeadPhones",
      top: "10%",
      left: "25%",
    },
    {
      text: "A Tab With FitSnap",
      top: "66.8%",
      left: "66%",
    },
    {
      text: "FitnessBand",
      top: "95%",
      left: "22%",
    },
  ];

  return (
    <div className="w-screen h-[1056px] mt-36 font-montserrat mb-10">
      <p className="text-center font-medium text-7xl mb-16">THINGS YOU NEED</p>
      <div className="w-screen h-[925.3px] overflow-hidden relative">
        <img className="h-full w-full object-cover" src={assets.run} alt="" />

        <div className="absolute w-full h-full top-0 left-0">
          {marking.map((data, index) => (
            <div
              key={index}
              className="absolute"
              style={{ top: data.top, left: data.left }}
            >
              <RunVec text = {data.text} />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
      </div>
    </div>
  );
};

export default ThingsYouNeed;
