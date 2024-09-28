import React from "react";
import { assets } from "../assets/assets";

const SquatCompo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-20">
      <h1 className="font-medium text-7xl">LOREM IPSUM</h1>
      <p className="font-medium text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      <div className="w-full h-[40%] bg-[#5E9ED7] flex justify-center items-center gap-20 p-20">
        <div>
          <h2 className="font-medium text-7xl mr-5">LOREM IPSUM <br/> DOLOR SIT AMET,</h2>
        </div>
        <div className="flex items-center">
          <div className="p-2 bg-white rounded-md">
            <div className="w-96 h-64 rounded-md flex flex-col items-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/xqvCmoLULNY"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ml-4 mt-5 flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Exercise Tutorial</p>
              <button className="border border-black rounded-full w-6 h-6 flex justify-center items-center text-lg">
                i
              </button>
            </div>
            <div className="ml-4 mt-2 mb-4 flex gap-2">
              <img src={assets.youtube} className="h-5 w-5" alt=""/>
              <p className="text-sm font-normal text-gray-400">YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquatCompo;
