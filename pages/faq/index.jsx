import Link from "next/link";
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { faqapi } from "./faqapi";

const Sss = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const itemClick = (index) => {
    if(selectedItem===index){setSelectedItem("")}
    else {setSelectedItem(index);}
  };

  return (
    <div className=" w-[screen] bg-faqbg  sm:h-screen ">
      <div className="sm:mx-[209px] mx-12 items-center sm:items-start pt-20 flex flex-col  gap-10   sm:flex-row  ">
        <div className="faq-left sm:w-[35%] w-full flex">
          <div className="sm:w-[270px] w-full  flex flex-col items-center sm:items-start">
            <h3 className="text-[28px]  w-full sm:text-start text-center font-semibold sm:tracking-wide ">
              Sıkça sorulan sorular
            </h3>
            <p className="text-[15px] my-[30px] sm:text-start text-center tracking-wide">
              BulutKlinik Hakkında sık sorulan sorular
            </p>
            <button
              className="bg-faqbtn px-[28px] text-[14px] w-[139px] h-[55px] rounded-2xl  hidden sm:block "
              href={"https://bulutklinik.com/support"}
            >
              Tümünü Gör
            </button>
          </div>
        </div>
        <div className="item-contain flex -mt-4 w-full sm:w-[65%]">
          <div className="flex-col w-full items-center">
          {faqapi.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              active={index === selectedItem}
              click={() => itemClick(index)}
            />
          ))}
          </div>
          
        </div>
        <button
              className="bg-faqbtn px-[28px] text-[14px] w-[139px] h-[55px] rounded-2xl  sm:hidden block "
              href={"https://bulutklinik.com/support"}
            >
              Tümünü Gör
            </button>
        
      </div>
    </div>
  );
};

export default Sss;
