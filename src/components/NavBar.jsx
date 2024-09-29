import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [activeOption, setActiveOption] = useState(null);
  const navigate = useNavigate();
  const options = [
    "Home",
    "About",
    "Fitness Tracker",
    "Contact",
  ];

  const handleClick = (index) => {
    setActiveOption(index);
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-4 py-2 z-50 bg-gray-200 bg-opacity-50">
      <div className="h-12 w-full md:w-[20%] flex items-center z-30">
        <img
          src="/logo.png"
          className="h-full w-36 object-cover cursor-pointer"
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-lg md:text-2xl font-normal z-50 mr-20">
        {options.map((item, index) => (
          <p
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer transition-colors duration-300 font-inter ${
              activeOption === index ? "text-[#13118F]" : "text-black"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="border border-[#13118F] rounded-full py-1 px-3 text-base md:text-xl text-[#13118F] font-normal z-50 cursor-pointer">
        Contact Us
      </div>
    </div>
  );
};

export default NavBar;
