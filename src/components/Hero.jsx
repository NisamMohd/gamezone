import React from 'react'
import home1 from "../assets/home1.png";


function Hero() {
  return (
    <div className='flex-1 min-h-screen w-full'>
        <img src={home1} alt="image1" style={{height:"100vh"}} className='w-full object-cover' />
    </div>
  )
}

export default Hero