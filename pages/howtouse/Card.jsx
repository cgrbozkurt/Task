import Image from 'next/image'
import React from 'react'
const 
HowtoCard = ({item}) => {
  return (
    <button className='w-[564px] h-[174px] bg-howtopas  font-brandon flex gap-5 justify-between '>
        <Image src={`${item.img}`} width={32} height={32} />
        <div className="htcard flex flex-col text[1rem] items-start">
            <h1 className='text-[24px]'>{item.title}</h1>
            <p className='flex text-start'>{item.text} </p>

        </div>
        
    </button>
  )
}

export default 
HowtoCard