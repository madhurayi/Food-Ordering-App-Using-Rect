import React from "react";

export const ShimmerMenu = () => {
  return (
    <div>
      <div className="justify-center flex flex-row m-2">
        <div className="  border-0 w-[200px] h-[2px] rounded-lg border-gray-200   bg-gray-100 m-2 p-2"></div>
      </div>
      <div className="shimmer-container flex flex-row flex-wrap m-2 justify-center">
        <div className="flex flex-col justify-start">
          <div className="shimmer-cards  border-0 w-[286px] h-[191px] rounded-lg border-gray-200   bg-gray-100 m-2 p-4"></div>
          <div className="  border-0 w-[200px] h-[2px] rounded-lg border-gray-200   bg-gray-100 m-2 p-2"></div>
          <div className="  border-0 w-[150px] h-[2px] rounded-lg border-gray-200   bg-gray-100 m-2 p-2"></div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="shimmer-cards  border-0 w-[286px] h-[191px] rounded-lg border-gray-200   bg-gray-100 m-2 p-4"></div>
          <div className="  border-0 w-[200px] h-[2px] rounded-lg border-gray-200   bg-gray-100 m-2 p-2"></div>
          <div className="  border-0 w-[150px] h-[2px] rounded-lg border-gray-200   bg-gray-100 m-2 p-2"></div>
        </div>
      </div>
    </div>
  );
};
