import React, { useState, useEffect } from 'react';
import bgImage from '../assets/landing.png';
import bgVideo from '../media/bgVideo.mp4';
import '../index.css';

const HomeLanding = () => {
    const [zoomIn, setZoomIn] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setZoomIn(true);
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

    return(
        <div className='w-full h-[90vh] overflow-hidden relative'>
        <div
          className={`w-full h-100vh overflow-hidden ${
            zoomIn ? 'zoom-in-animation' : ''
          }`}
        >
          <video src={bgVideo} autoPlay loop muted className="w-full h-full object-cover  grayscale brightness-50" alt="Background" />
        </div>
        <div className="absolute top-0 flex flex-col w-full h-full mt-72">
       {/*  <h1 className="uppercase animate glow delay-1 ml-5  font-karantina text-9xl text-gray-300 z-10 md1200:text-5xl">
            Elevate Your <span className='text-zinc-800'>Style</span>
          </h1> */}
          {/* <h1 className="uppercase animate glow delay-1 ml-10  font-karantina text-[10rem] text-zinc-800 z-10 md1200:text-5xl" >
           Mastered with Precision
          </h1> */}
        </div>
      </div>
    )
}

export default  HomeLanding;