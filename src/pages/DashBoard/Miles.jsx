import React from 'react';

const Miles = () => {
  const milesWalked = "17,34"; 
  const daysData = [12, 28, 29, 33, 47, 59, 44, 54, 52, 38, 45, 38, 26, 10];
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F'];

  const currentDayIndex = new Date().getDay() - 1; 
  const markerPosition = {
    x: (currentDayIndex * (100 / (daysData.length - 1))), 
    y: 70 - (daysData[currentDayIndex] / 60) * 70, 
  };

  return (
    <div
      className="relative mx-auto w-[23%] h-[343.04px] bg-[#3D73AF] rounded-lg p-4 text-white font-inter shadow-lg backdrop-blur-sm ml-8">
      <h2 className="text-4xl font-normal">Miles Walked</h2>
      <div className="flex items-center my-4">
        <span className="text-3xl font-normal">{milesWalked}</span>
      </div>
      <div className="relative mt-4">
        <svg viewBox="0 0 120 70" className="w-full h-3/5 z-10">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: "#FFFFFF", stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <polygon 
            fill="url(#gradient)" 
            points={daysData.map((data, index) => `${index * (120 / (daysData.length - 1))},${70 - (data / 60) * 70}`).join(' ')} 
          />
          <polyline
            fill="none"
            stroke="orange"
            strokeWidth="1.5"
            points={daysData.map((data, index) => `${index * (120 / (daysData.length - 1))},${70 - (data / 60) * 70}`).join(' ')}
          />
        </svg>

        <div
          className="absolute bg-white rounded-full w-4 h-4 border-2 border-blue-500"
          style={{
            left: `calc(${markerPosition.x}%)`,
            top: `${markerPosition.y}px`,
            bottom: 15
          }}
        ></div>
      </div>

      <div className="px-8 flex justify-between text-2xl font-normal mt-10">
        {daysOfWeek.map((day, index) => (
          <span key={index} className={`transition-opacity duration-300 ${index === currentDayIndex ? 'opacity-100' : 'opacity-50'}`}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Miles;
