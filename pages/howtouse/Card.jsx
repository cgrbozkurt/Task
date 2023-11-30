import Image from "next/image";
import { useState } from "react";

const HowtoCard = ({ item, onClick, isActive }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[564px] h-[174px]  font-brandon p-5 flex gap-5 rounded-xl justify-between ${
        isActive ? "!bg-howtoactive " : ""
      } `}
    >
      <Image src={item.img} width={32} height={32} className={`${isActive ? "text-howtoh1": ""}`} />
      <div className="htcard ">
        <h1 className={`flex text-start text-[1.5rem] ${isActive ? "text-howtoh1": ""}`}>{item.title}</h1>
        <p className="flex justify-start text-start">{item.text}</p>
      </div>
    </button>
  );
};

export default HowtoCard;
