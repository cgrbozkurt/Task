import React, { useState } from 'react'
import { svg } from './svg'
import { SlArrowDown } from "react-icons/sl";


const LanguageButton = () => {

const [active,SetActive]=useState(false);
const [language , setLanguage]=useState("TR")
const a=active===false;
const handleClick=()=>{
    SetActive(!active);
    setLanguage()
}
console.log(language)

  return (
    <div  className={`h-[51px] flex flex-col justify-between w-[94px] rounded-xl  border-[1px] border-black ${!a?"h-full ":""}`}>
       <button onClick={handleClick} className=" flex  gap-2 justify-center items-center h-[51px]  ">
              {svg[1].item}
              <span>{language}</span>
              <SlArrowDown className='' />
            </button>
       <button className={`flex  gap-2 justify-center items-center h-[51px] ${a?"hidden":""}`}>
              {svg[1].item}
              <span>{language==="TR"&&"EN"||"TR"}</span>
              
            </button>
    
    </div>
  )
}

export default LanguageButton