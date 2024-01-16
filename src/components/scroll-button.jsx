
import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 200);  
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed z-30 bottom-4 right-4 p-4 bg-black  border-[1px] border-grey-200 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUpLong className='font-thin text-white' />
    </button>
  );
};

export default ScrollButton;
