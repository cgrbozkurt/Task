import Link from "next/link";
import React, { useState } from "react";
import FaqItem from "../../components/cards/FaqItem";
import { faqapi } from "../api/faqapi";

const Sss = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const itemClick = (index) => {
    if(selectedItem===index){setSelectedItem("")}
    else {setSelectedItem(index);}
  };

  return (
    <div className=" w-[screen] bg-faqbg  xl:h-screen h-full lg:p-20 p-5 pt-16 lg:pt-20  lg:mb-0   ">
      <div className="lg:mx-[209px] mx-12 items-center sm:items-start lg:pt-20 pt-5 flex flex-col  gap-10   sm:flex-row  ">
        <div className="faq-left sm:w-[35%] w-full flex">
          <div className="sm:w-[270px] w-full  flex flex-col items-center sm:items-start">
            <h3 className="text-[28px]  w-full sm:text-start text-center font-semibold sm:tracking-wide ">
              Sıkça sorulan sorular
            </h3>
            <p className="text-[15px] my-[30px] sm:text-start text-center tracking-wide">
              BulutKlinik Hakkında sık sorulan sorular
            </p>
            <div className="bg-faqbtn px-[28px] text-[14px] w-[139px] h-[55px]  rounded-2xl lg:flex lg:justify-center items-center font-bold  text-white hidden sm:block ">
            <Link
              
              href="https://bulutklinik.com/support"
            >
              Tümünü Gör
            </Link>
            </div>
           
          </div>
        </div>
        <div className="item-contain flex -mt-4 w-full h-full lg:w-[65%]">
          <div className="flex-col w-full h-full items-center">
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
        <Link href={"https://bulutklinik.com/support"}
              className="bg-faqbtn px-[28px] text-[14px] w-[139px] h-[55px]  text-white font-bold 
               rounded-2xl  sm:hidden flex justify-center items-center mt-12" >
              Tümünü Gör
            </Link>
        
      </div>
    </div>
  );
};

export default Sss;
