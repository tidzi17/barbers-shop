import React from 'react';
import data from '../data/services.json';
import { Link } from 'react-router-dom';
import bgImage from '../assets/whitewood.jpg';
import { Parallax } from 'react-parallax';
import Button from './button';


export default function HomePricesMenu(){
    return(
        <Parallax bgImage={bgImage} strength={300} className='w-full  brightness-100 py-5 md:p-10  lg:p-20 mb-[50vh]'>
            <div   className='w-full h-full flex flex-col items-center'>
                <div className='w-fit self-center flex flex-col items-center '>
                    <div className='w-[80px] h-[2px] bg-black '></div>
                    <h2 className='text-black font-alumni text-3xl md:text-4xl'>Newest services & prices</h2>
                </div>
                <div className='w-full mt-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-full h-full p-10 '>
                      {data.services.slice(16, 34).map((service, index) => (
                       <div key={index} className='w-full h-fit flex justify-between items-center border-b-[1px] border-dashed border-black'>
                       <p className='w-full text-zinc-700 font-inika text-sm md:text-base'>{service.name}</p>
                      <p className='text-black text-xs md:text-base font-semibold'>${service.price}</p>
                  </div>
                     ))}
                     </div>
                </div>
                <Link target='blank' to="/services">  <Button text="View All" /></Link>
            </div>
        </Parallax>
    )
}

