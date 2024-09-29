import React from "react";
import { assets } from "../assets/assets";

const ClientSay = () => {
  const testimonies = [
    {
      description:
        "I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
      image: assets.testPic,
      name: "Riya Awasthi",
    },
    {
      description:
        "I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
      image: assets.testPic,
      name: "Riya Awasthi",
    },
    {
      description:
        "I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
      image: assets.testPic,
      name: "Riya Awasthi",
    },
  ];
  return (
    <div className="h-[80%] w-full p-5 mx-auto mt-10 font-montserrat">
      <div className=" text-center mt-20 mb-8">
        <p className="font-medium text-7xl">
          WHAT OUR CLIENTS SAY <br /> ABOUT US
        </p>
      </div>
      <div className="flex gap-3">
      {testimonies.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[494px] w-[35%] border border-black p-8 flex flex-col justify-between font-poppins"
          >
            <p className="font-normal text-xl">{item.description}</p>
            <div className="h-16 w-full flex gap-4 items-end">
              <div className=" rounded-full h-16 w-16">
                <img
                  src={item.image}
                  className="h-full w-full object-cover rounded-full"
                  alt=""
                />
              </div>
              <p className="self-center font-normal text-xl">{item.name}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default ClientSay;
