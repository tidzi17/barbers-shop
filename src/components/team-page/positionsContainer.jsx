import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RxCross1 } from "react-icons/rx";

export default function PositionsContainer({title,  requirements, description, benefits, index}){
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    
    return(
        <div  className='relative'>
            <div className='flex justify-between border-[1px] bg-black/50 text-zinc-300 border-black  px-3 py-2'>
                <p className='text-base md:text-2xl font-sans font-light '>{title}</p>
                <button onClick={toggleVisibility} className='font-mono text-base md:text-3xl transition-all duration-500 ease-in  hover:rotate-90'>+</button>
            </div>
            {isVisible && (
        <div className='fixed h-screen w-screen  bg-black/50 backdrop-blur-sm top-0 right-0 z-40 scroll-m-0 flex items-center justify-center'>
          <div className='w-[95%] h-[90%] lg:w-2/5 lg:h-5/6 absolute bg-white m-auto '>
            <div className='flex flex-col px-4 py-3'>
            <RxCross1 onClick={toggleVisibility} className='text-black text-base font-bold md:text-2xl ml-auto  cursor-pointer' />
            <div className=' ml-3 md:ml-5  flex flex-col gap-5 h-full'>
                <div className='w-fit border-b-[1px] border-black pb-2'>
                <h2 className='text-xl lg:text-2xl font-athiti font-bold mt-1 '>{title}</h2>
                </div>
                <div className='mt-1 md:ml-3'>
                    <h3 className='text-base lg:text-xl font-athiti font-bold'>Requirements</h3>
                    <ul className='list-disc mt-3 text-sm lg:text-base font-athiti font-bold'>
                  {requirements.map((requirement, index) => (
                    <li  key={index}>{requirement}</li>
                  ))}
                </ul>
                </div>
                <div>
                    <h3 className='text-base lg:text-xl font-athiti font-bold'>Description</h3>
                    <p className='mt-3 text-sm lg:text-base font-athiti font-bold'>{description}</p>
                </div>
                <div className='md:ml-3'>
                    <h3 className='text-base lg:text-xl font-athiti font-bold'>Benefits</h3>
                    <ul className='list-disc  mt-3 text-sm lg:text-base font-athiti font-bold'>
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                </div>
            </div>
            <button disabled className='border-2 border-black px-1 py-1 text-base lg:text-2xl font-mono w-2/5 cursor-pointer self-center mt-12 md:mt-10 transition-all duration-500 ease-in-out  hover:bg-black hover:text-white'>Apply Now</button>

            </div>
          </div>
        </div>
      )}
        </div>
    )
}

PositionsContainer.propTypes = {
    title: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
};