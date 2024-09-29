import React from "react";

const Sided = ({ data }) => {
  const { Compo, heading, para, color, left } = data;

  const isVideo = Compo.endsWith(".mp4");

  return (
    <div className="h-[514px] flex w-full">
      {left ? (
        <>
          <div className="w-[50%]">
            {isVideo ? (
              <video className="w-full h-full object-cover">
                <source src={Compo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img className="w-full h-full object-cover" src={Compo} alt="" />
            )}
          </div>
          <div
            className="w-[50%] flex flex-col gap-8 justify-center p-20"
            style={{ backgroundColor: color }}
          >
            <h2 className="font-semibold text-6xl text-white font-lato">{heading}</h2>
            <p className="font-normal text-2xl text-white font-lato">{para}</p>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[50%] flex flex-col gap-8 justify-center p-20"
            style={{ backgroundColor: color }}
          >
            <h2 className="font-semibold text-6xl text-white font-lato">{heading}</h2>
            <p className="font-normal text-2xl text-white font-lato">{para}</p>
          </div>
          <div className="w-[50%]">
            {isVideo ? (
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src={Compo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img className="w-full h-full object-cover" src={Compo} alt="" />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Sided;
