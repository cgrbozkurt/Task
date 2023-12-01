import React from 'react'
import JobsCard from './jobscard'
import psychologists from '../api/jobs/psychologists'



const Psychologists = () => {
  return (
    <section className='flex  flex-col items-center h-screen w-screen'>
      <div className=''>asdf</div>
      <div className='flex gap-5 items-center w-[1200px] h-[557px]  overflow-x-scroll overflow-x-auto '>
      {psychologists.map((item)=>
        <JobsCard item={item} />
        )}
      </div>
      <div className=''>asdfasdf</div>
    </section>
  )
}

export default Psychologists