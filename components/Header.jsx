import { setConfig } from "next/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { LuMenu } from "react-icons/lu";
import { svg } from "./svg";



const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openMenu,setOpenMenu]=useState(false);

  console.log(openMenu)
  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll position state
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener to the scroll event on mount
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scrollPosition === 0 ? "" : "  "}top-0  fixed  lg:w-full w-full   `}
    >
      <div
        className={`${ scrollPosition === 0   ? "rounded-3xl p-10 "
            : "bg-white transition-all duration-400 mt-5  rounded-[5.21rem]  "
        } ${openMenu?"bg-white h-[580px] w-full flex flex-col ":""} text-primary p-8   bg-bgpurple 
       transition-all flex items-center duration-700    lg:mx-auto `}
      >
        <div className="headerleft pe-10   text-primary lg:w-auto w-full flex justify-between  ">
          <Link href="/" className="items-center text-[1.25rem]">
            {svg[0].terappin}
          </Link>
          <button onClick={()=>setOpenMenu(!openMenu)} className="lg:hidden block ">
            <LuMenu />
          </button >
        </div>
        
          
        
        <div className={`headerright hidden lg:flex  justify-between w-full lg:gap-2 gap-8 items-center
        ${openMenu?"!flex flex-col lg:flex-row  ":""}
        `}        >
          <div className="list  ">
            <ul className="flex flex-col lg:flex-row text-[1rem] items-center  font-medium shadow-sm pt-2 ml-1  gap-[10px] font-sans  ">
              <Link href="/howtouse">NASIL ÇALIŞIR</Link>
              <Link href="/about">HAKKIMIZDA</Link>
              <Link href="/therapists">PSİKOLOGLARIMIZ</Link>
              <Link href="/faq">S.S.S.</Link>
              <Link href="/tests">
                TESTLER{" "}
                <span className="text-[.75rem] font-brandon bg-purple-100   px-1   rounded-lg  w-9  ">
                  Yeni
                </span>
              </Link>
            </ul>
          </div>
          <div className="login flex flex-col lg:flex-row gap-5 justify-between items-center">
            <button className=" flex  gap-2 justify-center items-center border-[1px] border-black  h-[51px] w-[94px] rounded-xl ">
              {svg[1].item}
              <span>TR</span>
              <SlArrowDown />
            </button>
            <button className="  text-2xl h-[51px] w-[126px] rounded-[20px] ">
              Giriş Yap
            </button>
            <button className="text-white bg-secondary h-[51px] w-[176px] rounded-[20px] font-semibold">
              HEMEN KAYDOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
