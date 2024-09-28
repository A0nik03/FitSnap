import React from "react";
import { assets } from "../../assets/assets";

const RunVec = (props) => {
  return (
    <div>
      <div className="absolute inset-0 flex justify-center items-center h-[44.92px] w-[800px] z-10">
        <img
          src={assets.outer}
          alt="Outer"
          className="absolute h-full w-full object-contain right-1/4 mr-5"
        />

        <div className="absolute inset-0 flex justify-center items-center right-1/2">
          <img
            src={assets.eclipse}
            alt="Eclipse"
            className="h-[65%] w-[30%]-500 object-contain mr-10"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[22%] h-[5px] bg-black mb-5"></div>
      </div>

      <div className="absolute w-80 h-10 ml-14 inset-1.8 z-10 -inset-x-96 flex flex-col">
        <p className="font-semibold text-3xl self-end">{props.text}</p>
      </div>
    </div> 
  );
};

export default RunVec;
