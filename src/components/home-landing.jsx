import React, { useState, useEffect } from 'react';
import bgImage from '../assets/landing.png';
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
        <div className='w-full h-100vh overflow-hidden relative'>
        <div
          className={`w-full h-100vh overflow-hidden ${
            zoomIn ? 'zoom-in-animation' : ''
          }`}
        >
          <img src={bgImage} className="w-full h-full object-cover" alt="Background" />
        </div>

        <div className="absolute top-0 flex flex-col w-full h-full justify-center items-center text-center">
          <h1 className="animate glow delay-1 font-karantina text-9xl text-gray-300 z-10" style={{ opacity: 0.57 }}>
            Crafting Confidence, <br></br>One Cut at a Time.
          </h1>
          <p className="animate glow delay-2 text-primaryOrange font-allison text-7xl -mt-40 z-20" style={{ opacity: 0.37 }}>Masters</p>
        </div>
      </div>
    )
}

export default  HomeLanding;