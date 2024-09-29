import React from "react";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="py-1 px-2 rounded-md bg-white flex justify-between items-center font-inter"
      style={{
        boxShadow: "0px 8px 2px 0px #2B2D3703",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_1_119)">
            <path
              d="M0.753113 7.00342H16.8416"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g filter="url(#filter1_b_1_119)">
            <path
              d="M0.753113 1.64062H16.8416"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g filter="url(#filter2_b_1_119)">
            <path
              d="M0.753113 12.3662H16.8416"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1_119"
              x="-9.9469"
              y="-3.69659"
              width="37.4885"
              height="21.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_119"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_119"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_1_119"
              x="-9.9469"
              y="-9.05939"
              width="37.4885"
              height="21.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_119"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_119"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_1_119"
              x="-9.9469"
              y="1.6662"
              width="37.4885"
              height="21.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_119"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_119"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <p className="font-normal text-2xl ml-1 mb-3">Hide Menu</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7328 17.7665H18.4857L18.0436 17.3402C19.5907 15.5406 20.5221 13.2042 20.5221 10.6627C20.5221 4.9954 15.9283 0.401611 10.261 0.401611C4.59379 0.401611 0 4.9954 0 10.6627C0 16.3299 4.59379 20.9237 10.261 20.9237C12.8026 20.9237 15.139 19.9923 16.9386 18.4453L17.3648 18.8873V20.1344L25.2579 28.0117L27.6101 25.6596L19.7328 17.7665ZM10.261 17.7665C6.33027 17.7665 3.15724 14.5934 3.15724 10.6627C3.15724 6.73189 6.33027 3.55886 10.261 3.55886C14.1918 3.55886 17.3648 6.73189 17.3648 10.6627C17.3648 14.5934 14.1918 17.7665 10.261 17.7665Z"
              fill="#3D73AF"
            />
          </svg>
          <input
            type="text"
            className="p-2 pl-10 w-[487px] h-[61px] border border-gray-300 rounded-md"
            placeholder="Search client by name"
          />
        </div>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <g filter="url(#filter0_b_1_128)">
            <path
              d="M13.6623 20.1144H8.19727C8.19727 21.6173 9.42689 22.8469 10.9298 22.8469C12.4327 22.8469 13.6623 21.6173 13.6623 20.1144Z"
              fill="#3D73AF"
            />
          </g>
          <g filter="url(#filter1_b_1_128)">
            <path
              d="M20.4938 16.0155H19.8107C18.8543 15.0591 17.7613 13.6929 17.7613 11.9168V7.81801C17.7613 3.99251 14.7555 0.986755 10.93 0.986755C7.10452 0.986755 4.09876 3.99251 4.09876 7.81801V11.9168C4.09876 13.6929 3.00576 15.0591 2.04938 16.0155H1.36625C0.546501 16.0155 0 16.562 0 17.3818C0 18.2015 0.546501 18.748 1.36625 18.748H20.4938C21.3135 18.748 21.8601 18.2015 21.8601 17.3818C21.8601 16.562 21.3135 16.0155 20.4938 16.0155Z"
              fill="#3D73AF"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_1_128"
              x="-1.80273"
              y="10.1144"
              width="25.465"
              height="22.7325"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_128"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_128"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_1_128"
              x="-10"
              y="-9.01324"
              width="41.86"
              height="37.7613"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_128"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_128"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="flex items-center pr-16">
          <img
            className="w-12 h-16 object-cover"
            src={assets.carolina}
            alt="User profile"
          />
          <span className="ml-2 text-[#767575] font-normal text-2xl">
            Caroline <br /> Bing
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
