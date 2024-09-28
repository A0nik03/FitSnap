import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import Miles from "./Miles";
import FoodEntries from "./FoodEntries";
import Stats from "./Stats";
import BodyWeight from "./BodyWeight";
import BodyFat from "./BodyFat";

const Final = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 pr-8">
      <div className="w-[356.68px]">
        <Sidebar />
      </div>

      <div className="w-full p-4">
        <Header />
        <Stats />
        <div className="w-full flex justify-between mt-10">
          <BodyWeight />
          <BodyFat />
        </div>
        <div className="w-full flex justify-between mt-10">
          <FoodEntries />
          <Miles />
        </div>
      </div>
    </div>
  );
};

export default Final;
