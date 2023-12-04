import Image from "next/image";
import Link from "next/link";
import React from "react";
import Howtouse from "../howtouse";
import About from "../about";
import GetSupport from "../tests";
import Psychologists from "../therapists";
import Sss from "../faq";


const Index = () => {
  return (
    
      <div className="w-full">
      
        <div className="bg-bgpurple w-full  h-screen flex justify-around lg:px-64 items-center  lg:pt-0  pt-32 px-10">
          <div className="home-left text-primary lg:w-[24rem] ">
            <h1 className="font-bold lg:text-5xl text-xl pb-5">
              Online terapi ile değişimi başlat!
            </h1>
            <p className="font-bold lg:text-xl  pb-3">
              Hemen sana en uygun online psikolog ile eşleş ve değişime başla
            </p>
            <Image className="flex lg:hidden justify-center items-center  " src="/images/slider.webp" alt="slider" width={343} height={463} />
             <div className="w-full lg:w-44 flex items-center justify-center  pb-24">
             <Link className="text-white flex items-center justify-center bg-primary w-44 h-12 hover:opacity-90 
              rounded-2xl text-2xl" href="https://app.terappin.com/account/login">
                Hemen Başla
              </Link>
             </div>
            
          </div>
          
          <div className="home-rihgt hidden lg:flex">
            <Image src="/images/slider.webp" alt="slider" width={443} height={463} />
          </div>
        </div>
      
      <Howtouse/>
      <About/>
      <GetSupport/>
      <Psychologists/>
      <Sss/>
</div>
    
  );
};

export default Index;
