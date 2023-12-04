import Image from 'next/image'
import React from 'react'
import SupportItem from './SupportItem'

const GetSupport = () => {
  return (
    <section className='mt-36 mb-24 flex lg:flex-row flex-col lg:gap-1 gap-5 justify-center   '>
      
    
        <SupportItem>  <Image className='h-16 mb-5 '  src={"/images/benefit-1.webp"} width={62} height={62} />
           <div className='flex flex-col  '> <h1 className='text-[18px] font-bold w-full text-start '>15 Gün İçinde İade İmkanı</h1>
            <p className='text-[16px] text-start'>15 Gün İçinde İade İmkanı</p></div></SupportItem>
        <SupportItem>   <Image className='h-16 mb-5'  src={"/images/benefit-2.webp"} width={62} height={62} />
            <div className='flex flex-col  '> <h1 className='text-[18px] font-bold text-start  '>Güvendesiniz, Endişelenmeyin</h1>
            <p className='text-[16px] text-start'>Terapizone kişisel bilgilerinizi ve video görüşmelerinizi kayıt altına almaz.</p></div></SupportItem>
        
        <SupportItem> <Image className='h-16 mb-5'  src={"/images/benefit-3.webp"} width={62} height={62} />
            <div className='flex flex-col  '><h1 className='text-[18px] font-bold text-start '>24 Saate Sadar Seans İptali</h1>
            <p className='text-[16px] text-start'>Planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz.</p></div> </SupportItem>
            <SupportItem>  <Image className='h-16 mb-5'  src={"/images/benefit-4.webp"} width={62} height={62} />
            <div className='flex flex-col  '> <h1 className='text-[18px] font-bold text-start '>15 Gün İçinde İade İmkanı</h1>
            <p className='text-[16px] text-start'>15 Gün İçinde İade İmkanı</p></div></SupportItem>
    </section>
  )
}

export default GetSupport