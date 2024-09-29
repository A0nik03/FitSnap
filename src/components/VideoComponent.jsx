import React from "react";
import { assets } from "../assets/assets";

const VideoComponent = () => {
  return (
    <div className="w-screen h-screen relative">
      <video
        src={assets.banner}
        autoPlay
        muted
        loop
        className="object-cover w-full h-full absolute top-0 left-0"
      />

      <div className="h-full w-full bg-[#00000033] absolute flex items-center justify-center">
        <div className="flex flex-col gap-4 text-wrap items-center justify-center text-center mx-auto px-4">
          <p className="text-3xl sm:text-5xl font-extrabold italic font-montserrat text-white">
            Fitsnap for GYM
          </p>
          <p className="text-lg sm:text-xl italic font-poppins text-white">
            Welcome to the next generation of fitness! At FitSnap, we are
            thrilled <br /> to introduce the power of Artificial Intelligence
            (AI) to revolutionize <br /> your gym experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
