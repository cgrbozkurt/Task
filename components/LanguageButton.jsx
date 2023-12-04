import React, { useState } from 'react'
import { svg } from './svg'
import { SlArrowDown } from "react-icons/sl";


const LanguageButton = () => {

const [active,SetActive]=useState(false);
const [language , setLanguage]=useState("TR")
const a=active===false;
const handlerClick=(a)=>{
    SetActive(!active);
    setLanguage(a);
    
}
console.log(language)

  return (
    <div className='relative '>
        <div  className={`h-[51px] flex flex-col justify-between w-[94px] rounded-2xl absolute top-0 bottom-0 right-0 -mt-6
           border-[1px] border-black transition-all duration-200 ${!a?"h-[104px]":"h-[51px]"}`}>
       <button onClick={()=>SetActive(!active)} className={`flex  gap-2 justify-center items-center h-[51px] font-bold rounded-t-2xl  ${a?"":"bg-gray-100"}`}>
              {svg[1].item}
              <span>{language}</span>
              <SlArrowDown className='' />
            </button>
       <button 
       onClick={()=>handlerClick("TR")}
        className={`flex  gap-2 justify-center rounded-b-2xl items-center h-[51px] ${a?"hidden":""}
        ${a?"":"bg-white"}
        ${language==="TR"?"hidden":""}`}>
             
              <span>TR</span>
              
            </button>
    
       <button 
       onClick={()=>handlerClick("EN")}

        className={`flex  gap-2 justify-center rounded-b-2xl items-center h-[51px] ${a?"hidden":""}
        ${a?"":"bg-white"}

        ${language==="EN"?"hidden":""}`}>
           
              <span>EN</span>
              
            </button>
    
    </div>
    </div>
  )
}

export default LanguageButton