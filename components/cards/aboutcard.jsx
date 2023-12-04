import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Aboutcard = ({item}) => {
  console.log(item)
  return (
    <div className=' border-t-[10px] w-full h-full border-orangeabout 
     rounded-b-2xl bg-white font-medium flex flex-col justify-center items-center gap-4 lg:p-5  '>
<Image src={`${item.img}`}  width={195} height={195}  alt= {`${item.img}`}  />
        <h4 className='lg:text-[1.375rem] text-sm text-about'>{item.title}</h4>
        <Link className='text-[0.8rem] border-b border-black ' href={`${item.link}`} >DAHA FAZLA</Link>
    </div>
  )
}

export default Aboutcard