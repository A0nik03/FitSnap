import React from "react";
import { assets } from "../assets/assets";

const Revolutionize = () => {
  const data = [
    {
      text: "24*7 AI Trainer",
      icon: assets.check,
    },
    {
      text: "Unlimited Access",
      icon: assets.check,
    },
    {
      text: "150+ Exercise",
      icon: assets.check,
    },
    {
      text: "Customized Plans",
      icon: assets.check,
    },
    {
      text: "Advanced AI Camera",
      icon: assets.check,
    },
    {
      text: "Voice Feedback",
      icon: assets.check,
    },
    {
      text: "Complete Plans",
      icon: assets.check,
    },
    {
      text: "Real Time Feedback",
      icon: assets.check,
    },
    {
      text: "Rep Counter",
      icon: assets.check,
    },
    {
      text: "Saved Workout Videos",
      icon: assets.check,
    },
    {
      text: "Activity History",
      icon: assets.check,
    },
    {
      text: "Voice Commands",
      icon: assets.check,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="w-full mt-4">
        <p className="ml-5 font-light text-8xl italic tracking-[12px] leading-tight">
          REVOLUTIONIZE YOUR GYM
        </p>
      </div>
      <div className="w-[75%]  flex flex-col gap-5 justify-center items-center">
        <p className="text-7xl font-medium">LOREM IPSUM</p>
        <div className="flex w-full gap-10 bg-blue-60 p-5">
          <div className="w-[33%] flex flex-col p-5 gap-4 rounded-2xl border border-[#13118F]">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <p className="font-medium text-[17.3px]">{item.text}</p>
                  <img src={item.icon} alt="" />
                </div>
              );
            })}
          </div>
          <div className="w-[67%] flex justify-center items-center">
            <div className="w-[67%] h-[35%] p-1 flex flex-col justify-between gap-4">
              <p className="font-medium text-xl">
                To benefits of all the features of FitSnap, the ideal tablet
                featuring 8GB RAM and an immersive 11-inch screen should offer a
                balance of performance, display quality
              </p>
              <div className="w-64 p-2.5 rounded-full border border-[#1E1C95] flex justify-between items-center mt-10">
                <p className="text-[#1E1C95] font-medium text-xl">
                  Download Brochure
                </p>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M1.66895 0.69873V2.69873H10.2589L0.668945 12.2887L2.07895 13.6987L11.6689 4.10873V12.6987H13.6689V0.69873H1.66895Z"
                    fill="#13118F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolutionize;
