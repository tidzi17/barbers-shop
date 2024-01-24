import React, { useState, useEffect } from 'react';
/* import bgImage from '../assets/landing.png'; */
import bgVideo from '../media/bgVideo.mp4';
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
          <video src={bgVideo} autoPlay loop muted className="w-full h-full object-cover  grayscale brightness-50" alt="Background" />
        </div>
        <div className="landing-header absolute overflow-hidden  top-0 flex flex-col w-2/3 ml-20 mt-64">
       <h1 className="font-alumni text-7xl  text-zinc-300 z-10 md1200:text-5xl">
       Crafting Timeless Styles Since '95. <br></br> Discover the Expertise of Masters Barbershop.
          </h1>
          <p className='w-1/2 mt-5 text-md font-sans text-zinc-200 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, omnis ratione labore nam sed consequatur laborum in, maxime minima tempore aspernatur nobis, beatae quod repellat quae vitae! Omnis, excepturi nam.</p>
          <div className='flex gap-10 mt-10'>
          <button onClick={handleScroll} className=' px-3 py-3 border-[1px] border-zinc-200 text-zinc-200 text-base'>Book Apointment</button>
      <Link to="/services"><button   className=' px-3 py-3 border-[1px] border-zinc-200 text-zinc-200 text-base'>Our Services</button> </Link>
          </div>
        </div>
      </div>
    )
}

export default  HomeLanding;