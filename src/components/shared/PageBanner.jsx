/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import '../../Styles/PageBanner.scss'
export default function PageBanner({bgimg,polygon ,children}) {
  return (
    <div style={{background:`url(${bgimg})`,clipPath:"polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0% 0%)",backgroundAttachment:"fixed", backgroundPosition : "center"}} className='relative min-h-[400px] py-[150px]  pagebanner'> 
     <div className="pagebanneroverly">
      </div>
       <div className='relative h-full w-full flex items-center justify-center z-10'>
          {children}  
      </div>              
    </div>
  )
}
