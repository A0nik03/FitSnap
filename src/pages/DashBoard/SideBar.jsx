import React, { useState } from "react";
import { assets } from "../../assets/assets";
import {color} from '../../assets/color'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const sideMenu = [
    { field: "DashBoard", icon: color.dash },
    { field: "My Profile", icon: color.profile },
    { field: "My Client", icon: color.client },
    { field: "Report", icon: color.report },
    { field: "My Diet Plans", icon: color.diet },
    { field: "Create Diet Plan", icon: color.plan },
    { field: "Chat", icon: color.chat},
    { field: "Search Food", icon: color.search_food },
    { field: "Settings", icon: color.setting },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-full bg-white p-4 shadow-md font-inter">
      <button onClick={handleLogoClick} className="h-10 w-full bg-orange-500 mb-10">
        <h2 className="font-normal text-3xl text-center text-white">DietSnap</h2>
      </button>
      
      <div className="h-10 w-full bg-orange-500 mb-10 rounded-lg flex items-center justify-around shadow-[0px_5px_4.5px_0px_rgba(0,0,0,0.29)] backdrop-blur-[10px]">
        <img src={assets.plus} alt="Add Entry" />
        <h2 className="font-normal text-2xl text-white">Add new Entry</h2>
      </div>
      
      <div className="flex flex-col w-full gap-10 ml-3">
        {sideMenu.map((menu, index) => {
          const isActive = index === activeIndex;
          const iconColor = isActive ? "#F8B546" : "#74798C"; 

          const IconComponent = menu.icon;

          return (
            <div
              key={index}
              className="flex gap-8 w-full items-center cursor-pointer"
              onClick={() => handleMenuClick(index)}
            >
              <IconComponent color={iconColor} /> 
              <h2 className={`font-normal text-2xl ${isActive ? 'text-[#F8B546]' : 'text-[#74798C]'}`}>
                {menu.field}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
