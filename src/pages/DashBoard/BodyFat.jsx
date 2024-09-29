import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BodyFat = () => {
  const percentage = 12;

  return (
    <div className="w-[23%] h-[360px] p-4 bg-white shadow-md rounded-md flex flex-col items-center">
      <h4 className="mb-10 font-normal text-4xl self-start">Body Fat</h4>

      <div className="relative w-full flex justify-center font-inter">
        <div style={{ width: '50vw', maxWidth: '200px', height: '50vw', maxHeight: '200px' }}>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: "#f97316",
              textColor: "#000",
              trailColor: "#d6d6d6",
              pathTransitionDuration: 0.5,
              textSize: "24px",
              trailWidth: 8,
              pathWidth: 10,
            })}
          />
          <div
            className="absolute w-full h-24 mt-40 bg-white flex flex-col items-center"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              transform: "rotate(180deg)",
              transformOrigin: "center",
            }}
          >
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-gray-500 mt-6 opacity-[40%]" />
              <div className="h-2 w-2 rounded-full bg-orange-500 mt-6 opacity-1" />
              <div className="h-2 w-2 rounded-full bg-gray-500 mt-6 opacity-[40%]" />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-normal">{`${percentage}%`}</span>
            <p className="mt-1 text-center font-normal text-2xl">Legs Fat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFat;
