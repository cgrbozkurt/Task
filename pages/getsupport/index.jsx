import Image from 'next/image'
import React from 'react'

const GetSupport = () => {
  return (
    <section className='mt-16 mb-16 grid grid-cols-4 justify-start '>
        <div className="support h-[198px] w-[312px] flex flex-col gap-2 items-center  ">
            <Image className='mb-5'  src={"/images/benefit-1.webp"} width={62} height={62} />
            <h1 className='text-[18px] font-bold text-center '>15 Gün İçinde İade İmkanı</h1>
            <p className='text-[16px]  text-center'>15 Gün İçinde İade İmkanı</p>
        </div>
        <div className="support h-[198px] w-[312px] flex flex-col gap-2 items-center ">
            <Image className='mb-5'  src={"/images/benefit-2.webp"} width={62} height={62} />
            <h1 className='text-[18px] font-bold  '>Güvendesiniz, Endişelenmeyin</h1>
            <p className='text-[16px] text-center '>Terapizone kişisel bilgilerinizi ve video görüşmelerinizi kayıt altına almaz.</p>
        </div>
        <div className="support h-[198px] w-[312px] flex flex-col gap-2 items-center ">
            <Image className='mb-5'  src={"/images/benefit-3.webp"} width={62} height={62} />
            <h1 className='text-[18px] font-bold text-center '>24 Saate Sadar Seans İptali</h1>
            <p className='text-[16px]  text-center'>Planlarda değişiklik olduğunda, seansınıza 24 saat kalana kadar iptal edebilirsiniz.</p>
        </div>
        <div className="support h-[198px] w-[312px] flex flex-col gap-2 items-center ">
            <Image className='mb-5'  src={"/images/benefit-4.webp"} width={62} height={62} />
            <h1 className='text-[18px] font-bold text-center '>15 Gün İçinde İade İmkanı</h1>
            <p className='text-[16px] text-center '>15 Gün İçinde İade İmkanı</p>
        </div>
    </section>
  )
}

export default GetSupport