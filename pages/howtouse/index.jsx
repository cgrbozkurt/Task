import React, { useState } from "react";
import { howDoc } from "../api/howdocument";
import HowtoCard from "./Card";
import Image from "next/image";

const Howtouse = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className="h-screen w-full gradient-background font-brandon flex justify-center lg:pt-20  ">
      <div className="how-to-use flex flex-col lg:flex-row justify-around gap-5 lg:gap-16 mx-36 w-full h-full   ">
      <div className="how-left flex flex-col lg:w-[564px] lg:h-[677px] h-auto   mt-10">
        <div className="ht-top lg:w-[564px] lg:h-[74px] w-full h-full t mb-5 text-[32px] flex justify-center lg:justify-start bg text-howtoh1">
          <p  className="flex ">Nasıl Kullanırım ?</p>
        </div>
        <div className="ht-bottom flex lg:flex-col lg:w-full gap-x-6  w-full items-start">
          {howDoc.map((item, index) => (
            <HowtoCard
              key={item.id}
              item={item}
              isActive={index === selectedCard}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="how-right  w-full lg:py-10  ">
        <Image src={`${howDoc[selectedCard].webp  }`}  width={550} height={35} />
      </div>
    </div>
    </section>
  );
};

export default Howtouse;
