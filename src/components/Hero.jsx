import React, { useState, useEffect } from 'react'
import home1 from "../assets/hero.jpg";
import titlenew from "../assets/titlenew.png";

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative flex-1 min-h-screen w-full overflow-hidden'>
      <img
        src={home1}
        alt="image1"
        style={{ height: "100vh" }}
        className='w-full object-cover'
      />

      <img
        src={titlenew}
        alt="title"
        className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-1000 ease-out
          ${animate ? "translate-x-[-50%] opacity-100" : "translate-x-[-150%] opacity-0"}`}
      />
    </div>
  )
}

export default Hero