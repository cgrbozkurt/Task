import React, { useState } from "react";
import { howDoc } from "./howdocument";
import HowtoCard from "./Card";
import Image from "next/image";

const Howtouse = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className="h-screen w-screen gradient-background font-brandon flex justify-center  ">
      <div className="how-to-use flex justify-around gap-5 w-[1268px] h-[693px] -ms-10 ">
      <div className="how-left flex flex-col w-[564px] h-[677px] mt-10">
        <div className="ht-top w-[564px] h-[74px] mb-5 text-[32px] bg text-howtoh1">
          <p >Nasıl Kullanırım ?</p>
        </div>
        <div className="ht-bottom flex flex-col items-start">
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
      <div className="how-right mt-5">
        <Image src={`${howDoc[selectedCard].webp  }`}  width={720} height={655} />
      </div>
    </div>
    </section>
  );
};

export default Howtouse;
