// src/components/CountBox/CountBox.jsx
import React from "react";
import img from "../../assets/vector1.png";

const CountBox = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="mx-auto md:container max-w-11/12 flex justify-between gap-6 px-4 ">
        {/* In-progress card */}
        <div className="rounded-lg flex-1 h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative flex">
          <div className="w-1/2 h-full bg-cover bg-center">
            <img src={img} alt="" />
          </div>

          <div className="w-1/2 h-full bg-cover bg-center scale-x-[-1]">
            <img src={img} alt="" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <p className="w-[300px] text-[28px] text-center font-medium">In-progress</p>
            <h1 className="text-6xl font-semibold">{inProgressCount}</h1>
          </div>
        </div>

        {/* Resolved card */}
        <div className="rounded-lg flex-1 h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] relative flex">
          <div className="w-1/2 h-full bg-cover bg-center">
            <img src={img} alt="" />
          </div>

          <div className="w-1/2 h-full bg-cover bg-center scale-x-[-1]">
            <img src={img} alt="" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <p className="w-[300px] text-[28px] text-center font-medium">Resolved</p>
            <h1 className="text-6xl font-semibold">{resolvedCount}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountBox;