import React from 'react';
import data from '../data/home-menu.json';
import { Link } from 'react-router-dom';
import bgImage from '../assets/whitewood.jpg';
import { Parallax } from 'react-parallax';

export default function HomePricesMenu(){
    return(
        <Parallax bgImage={bgImage} strength={300} className='w-full h-[600px]   mb-20 brightness-100 py-7'>
            <div className='w-full h-full flex flex-col items-center'>
                <div className='w-fit self-center flex flex-col items-center '>
                    <div className='w-[80px] h-[2px] bg-black '></div>
                    <h2 className='text-black font-alumni text-4xl'>Newest services & prices</h2>
                </div>
                <div className=' w-10/12 h-[400px] mt-10'>
                <div className='grid grid-cols-3 gap-7 w-full h-full p-10 '>
                      {data.services.slice(0, 18).map((service, index) => (
                       <div key={index} className='w-full h-fit flex justify-between items-center border-b-[1px] border-dashed border-black'>
                       <p className='w-full text-zinc-700 font-inika text-base'>{service.name}</p>
                      <p className='text-black text-base font-semibold'>${service.price}</p>
                  </div>
                     ))}
                     </div>
                </div>
            </div>
          
            {/* <Link target='blank' to="/services"><button  className='text-white bg-primaryOrange text-2xl px-20 py-2 rounded-3xl mt-5'>Explore all services and prices</button></Link> */}
        </Parallax>
    )
}


{/* <h2 className='text-5xl font-inika mt-7 mb-5 text-white'>Newest services</h2>
<div className="h-2/3 w-[620px] bg-beige shadow-lg">
    <div className='flex flex-col justify-around px-4 py-3 w-full h-full'>
   {data.services.map((service, index) => (
    <div key={index} className='w-full flex  justify-between'>
        <p className='w-full text-black font-inika text-base'>{service.name}</p>
        <div className='w-full -ml-30 border-b-[1px]  border-dashed border-black'></div>
        <p className='text-black text-base'>${service.price}</p>
    </div>
   ))}
   </div>
</div> */}