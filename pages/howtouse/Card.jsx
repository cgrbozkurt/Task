import Image from "next/image";
import { useState } from "react";

const HowtoCard = ({ item, onClick, isActive }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`  w-full h-full font-brandon lg:p-5 lg:gap-5 rounded-xl flex lg:flex-row flex-col lg:items-start items-center justify-between
       ${        isActive ? "!bg-howtoactive " : "" } `}
    >
      <Image src={item?.img || item.current} width={32} height={32} className={`text-[5rem]  ${isActive ? "fill-howtoh1": ""} `} />
      
      <div className="htcard w-full h-full ">
        <h1 className={`flex  text-[1.5rem] ${isActive ? "text-howtoh1": ""}`}>{item.title}</h1>
        <p className=" justify-start text-start hidden lg:flex">{item.text}</p>
      </div>
    </button>
  );
};

export default HowtoCard;
