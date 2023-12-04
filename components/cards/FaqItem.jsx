import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const FaqItem = ({ item, active, click }) => {
  const handleClick = () => {
    click();
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col w-full items-center  border-b-2 cursor-pointer"
    >
      <div
        className={`w-full h-[55px]   mt-7 ${
         active
            ? "lg:h-60 h-80  lg:pb-5 pb-0 transition-all duration-1000"
            : ""
        }  transition-all duration-1000`}
      >
        <h1 className="pb-[20px] text-[14px] lg:text-[1rem]  flex justify-between font-bold tracking-wide  ">
          {item.title}
          <div
            className={`lg:w-9 lg:h-9 w-9 h-9 rounded-full  flex items-center bg-white  justify-center transition-all duration-500 
           ${!active ? " " : "!bg-jobsborder  "}
            
            `}
          >
            <div className="w-9 h-9 flex justify-center items-center"> 
            <BiSolidDownArrow
              className={`text-white transition-all duration-1000  
            ${active ? " rotate-180 " : "!text-jobsborder  "}`}
            />
            </div>
          </div>
        </h1>
        {active && (
          <p className="block w-full transition-all duration-1000  text-[13px] lg:text-[1rem] ">
            {item.text}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
