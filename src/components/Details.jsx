import React from "react";
import { assets } from "../assets/assets";

const Details = () => {
  const detailsData = [
    {
      id: 1,
      imageSrc: assets.enrolled,
      count: "50+",
      label: "GYM Enrolled",
    },
    {
      id: 2,
      imageSrc: assets.hourglass,
      count: "250+",
      label: "Users Enroll",
    },
    {
      id: 3,
      imageSrc: assets.sessions,
      count: "60+",
      label: "Workout Sessions",
    },
  ];

  return (
    <div className="relative w-full h-auto bg-white mx-auto">
      <div className="h-[155.66px] w-[80%] flex justify-between mx-auto mt-20 relative z-10">
        {detailsData.map((detail) => (
          <div
            key={detail.id}
            className="h-[153.74px] w-[201.61px] flex flex-col gap-8 justify-center items-center"
          >
            <div className="flex gap-[24px] items-center">
              <img
                className="h-[100.64px] w-[100.64px] object-contain"
                src={detail.imageSrc}
                alt={detail.label}
              />
              <p className="font-semibold text-5xl font-poppins">
                {detail.count}
              </p>
            </div>
            <div className="w-72 p-2 flex flex-nowrap justify-end">
              <p className="font-semibold text-2xl font-opensans">
                {detail.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 w-full h-auto">
        <svg
          viewBox="0 0 1400 340"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M780.127 23.385C1008.74 -20.426 1280.65 2.81075 1434.96 47.9033C1451.14 52.6324 1461.5 68.0101 1460.76 84.8541L1447.58 387.513C1446.7 407.838 1429.96 423.86 1409.62 423.86H-25C-45.9868 423.86 -63 406.847 -63 385.86V91.0811C-63 59.4697 -25.7456 40.6601 2.17175 55.4892C221.545 172.015 529.425 115.524 693.712 50.9661C721.96 39.8656 750.318 29.0974 780.127 23.385Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Details;
