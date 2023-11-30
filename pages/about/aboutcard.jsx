import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Aboutcard = () => {
  return (
    <div className='w-[195px] h-[318px] border-t-8 border-orangeabout bg-white flex flex-col gap-5 p-5  '>
<Image src={`${item.img}`}  width={195} height={195}  alt='#'  />
        <h4>{item.title}</h4>
        <Link>Daha Fazla</Link>
    </div>
  )
}

export default Aboutcard