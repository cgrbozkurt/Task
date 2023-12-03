import React from 'react'

const SupportItem = ({supportLink,supporTitle,supportText,children}) => {
  return (
    <div>
         <div className="support lg:h-[198px] lg:w-[252px] flex lg:flex-col flex-row lg:justify-start gap-2 items-center ">
          {children}
           
        </div>
    </div>
  )
}

export default SupportItem