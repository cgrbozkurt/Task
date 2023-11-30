import Image from 'next/image'
import React from 'react'

const Howtouse = () => {
  return (
    
      
      <div className='how-to-use h-screen w-screen gradient-background'>
 <div className='how-left flex flex-col items-center w-[564px]  '>
<div className="ht-top">
  <p>Nasıl Kullanırım ?</p>
</div>
<div className="ht-bottom flex flex-col items-center ">
  <button className='flex w-[564px] h-[174px] p-8 gap-2 bg-cyan-400'>
    <div className=''><Image src="/images/ht1.svg" width={50} height={50}    /></div>
    <div className="therapist flex flex-col  text-start text-primary">
      <h1 className='font-bold '>Terapistinizle Eşleşin</h1>
      <p>Hangi konuda terapi almak istediğinizi belirleyin. Başvuru nedenine özel olarak yardım edebilecek terapistlerimizin içinden
        , kendiniz için en uygun olanını ile eşleşin.
      </p>
    </div>
  </button>
  <button>
    <Image src="/images/ht2.svg" width={50} height={50}  />
    <div className="therapist">
      <h1>Terapistinizle Eşleşin</h1>
      <p>Hangi konuda terapi almak istediğinizi belirleyin. Başvuru nedenine özel olarak yardım edebilecek terapistlerimizin içinden
        , kendiniz için en uygun olanını ile eşleşin.
      </p>
    </div>
  </button>
  <button>
    <Image src="/images/ht3.svg" width={50} height={50}  />
    <div className="therapist">
      <h1>Terapistinizle Eşleşin</h1>
      <p>Hangi konuda terapi almak istediğinizi belirleyin. Başvuru nedenine özel olarak yardım edebilecek terapistlerimizin içinden
        , kendiniz için en uygun olanını ile eşleşin.
      </p>
    </div>
  </button>
  </div> 
 </div>
 
</div>

  )
}

export default Howtouse