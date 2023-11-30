import Image from "next/image";
import Link from "next/link";
import React from "react";
import Howtouse from "../howtouse";

const Index = () => {
  return (
    
      <>
      <React.Fragment>
        <div className="bg-bgpurple -mt-[147px] top-0 h-screen w-screen flex justify-around px-64 items-center ">
          <div className="home-left text-primary w-96 ">
            <h1 className="font-bold text-5xl pb-5">
              Online terapi ile değişimi başlat!
            </h1>
            <p className="font-bold text-xl  pb-3">
              Hemen sana en uygun online psikolog ile eşleş ve değişime başla
            </p>
            
              <Link className="text-white flex items-center justify-center bg-primary w-44 h-12  rounded-2xl text-2xl" href="#">
                Hemen Başla
              </Link>
            
          </div>
          
          <div className="home-rihgt">
            <Image src="/images/slider.webp" alt="slider" width={443} height={463} />
          </div>
        </div>
      </React.Fragment>
      <Howtouse/>
</>
    
  );
};

export default Index;
