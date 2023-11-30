import Image from 'next/image'
import React from 'react'
import HowtoCard from './Card'
import { howDoc } from './howdocument'

const Howtouse = () => {
  return (
    
      
      <div className='how-to-use h-screen w-screen gradient-background font-brandon'>
 <div className='how-left flex flex-col  w-[564px] h-[677px]  '>
<div className="ht-top w-[564px] h-[74px] text-[32px] bg text-howtoh1 " >
  <p>Nasıl Kullanırım ?</p>
</div>
<div className="ht-bottom flex flex-col items-start ">
  
{howDoc.map((item)=>
<HowtoCard item={item} />)}

  </div> 
 </div>
 
</div>

  )
}

export default Howtouse