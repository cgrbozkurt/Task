import { setConfig } from "next/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { svg } from "../svg";
import LanguageButton from "./LanguageButton";



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
      className={`${scrollPosition === 0 ? "" : " px-5   "} top-0 transition-all  duration-700 fixed  z-50 w-full
          ${openMenu===true?"p-5":""}   `}
    >
      <div
        className={`${ scrollPosition === 0   ? "rounded-3xl p-10  "
            : "bg-white transition-all duration-400 mt-5   rounded-[5.21rem]  "
        } ${openMenu?"bg-white h-[580px] w-full  !rounded-3xl flex-col ":""} text-primary lg:p-8 p-4 lg:h-[152]  gap-5
       transition-all flex items-center duration-700    lg:mx-auto `}
      >
        <div className="headerleft   text-primary lg:w-auto w-full flex justify-between  ">
          <Link href="/" className="items-center text-[1.25rem]">
            {svg[0].terappin}
          </Link>
          <button onClick={()=>setOpenMenu(!openMenu)} className="lg:hidden block cursor-pointer ">
            <LuMenu className="w-7 h-7" />
          </button >
        </div>
        
          
        
        <div className={`headerright hidden lg:flex  justify-between w-full lg:gap-0 gap-8 items-center
        ${openMenu?"!flex flex-col lg:flex-row  ":""}
        `}        >
          <div className="list  ">
            <ul className="flex flex-col lg:flex-row text-[1rem] items-center  font-medium shadow-sm pt-2   gap-[10px] font-sans  ">
              <Link onClick={()=>setOpenMenu(false)} className="" href="/howtouse">NASIL ÇALIŞIR</Link>
              <Link onClick={()=>setOpenMenu(false)} href="/about">HAKKIMIZDA</Link>
              <Link onClick={()=>setOpenMenu(false)} href="/therapists">PSİKOLOGLARIMIZ</Link>
              <Link onClick={()=>setOpenMenu(false)} href="/faq">S.S.S.</Link>
              <Link onClick={()=>setOpenMenu(false)} href="/tests">
                TESTLER{" "}
                <span className="text-[.75rem] font-brandon bg-purple-100   px-1   rounded-lg  w-9  ">
                  Yeni
                </span>
              </Link>
            </ul>
          </div>
          <div className={`login flex flex-col lg:flex-row gap-2 relative justify-between items-center
          ${openMenu?"!gap-10":""}
          `}>
           <div className="w-24">
           <LanguageButton/>
           </div>
            <a href="https://app.terappin.com/account/login" className=" bg-bgpurple flex items-center justify-center text-2xl h-[51px] w-[126px] rounded-[20px] ">
              Giriş Yap
            </a>
            <a href="https://app.terappin.com/account/login" className="text-white bg-secondary flex justify-center items-center h-[51px] px-5 rounded-[20px] font-semibold">
              HEMEN KAYDOL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;