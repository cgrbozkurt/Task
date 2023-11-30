import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Aboutcard = ({item}) => {
  return (
    <div className='w-[262px] h-[358px] border-t-[10px] border-orangeabout 
     rounded-b-2xl bg-white font-medium flex flex-col justify-center items-center gap-4 p-5  '>
<Image src={`${item.img}`}  width={195} height={195}  alt='#'  />
        <h4 className='text-[1.375rem] text-about'>{item.title}</h4>
        <Link className='text-[14px] border-b border-black ' href={`${item.link}`} >DAHA FAZLA</Link>
    </div>
  )
}

export default Aboutcard