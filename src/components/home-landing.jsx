import React, { useState, useEffect } from 'react';
import bgVideo from '../media/bgVideoShorted.mp4';
import '../index.css';
import { Link } from 'react-router-dom';

const HomeLanding = () => {
    const [zoomIn, setZoomIn] = useState(true);

    const handleScroll = () => {
      const section = document.getElementById('booking-section');
      section.scrollIntoView({ behavior: 'smooth' });
    };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setZoomIn(true);
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

    return(
        <div className='w-full h-[100vh] overflow-hidden relative'>
        <div
          className={`w-full h-100vh overflow-hidden ${
            zoomIn ? 'zoom-in-animation' : ''
          }`}
        >
          <video src={bgVideo}  controls={false} autoPlay={true} loop muted playsInline className="w-full h-full object-cover  grayscale brightness-50" alt="Background" />
         
        </div>
        <div className="landing-header absolute overflow-hidden top-[25%] md:top-[30%] w-full flex flex-col px-6  py-6 lg:py-6 lg:px-24">
       <h1 className="font-alumni text-3xl md:text-5xl lg:text-7xl  text-zinc-300 z-10 ">
       Crafting Timeless Styles Since '95. <br></br> Discover the Expertise of Masters Barbershop.
          </h1>
          <p className='w-full lg:w-1/2 md:w-2/3 mt-5 text-md font-sans text-zinc-200 font-light text-xs md:text-base'>Unveil the mastery behind each haircut at Masters Barbershop. With dedication and precision, our skilled barbers have been crafting impeccable styles since 1995. Our commitment to excellence ensures that every client receives the finest grooming experience possible.</p>
          <div className='flex gap-5 md:gap-10 mt-10'>
          <button onClick={handleScroll} className='px-3 py-3 border-[1px] border-zinc-200 text-zinc-200 text-xs md:text-base transform-all duration-200 ease-in hover:bg-zinc-200 hover:border-black hover:text-black'>Book Apointment</button>
      <Link to="/services"><button   className='px-3 py-3 border-[1px] border-zinc-200 text-zinc-200 text-xs md:text-base transform-all duration-200 ease-in hover:bg-zinc-200 hover:border-black hover:text-black'>Our Services</button> </Link>
          </div>
        </div>
      </div>
    )
}

export default  HomeLanding;