import React from 'react';
import data from '../data/home-menu.json';
import { Link } from 'react-router-dom';

export default function HomePricesMenu(){
    return(
        <div id='home-menu-container' className='w-full h-[650px] flex flex-col items-center'>
            <h2 className='text-5xl font-inika mt-7 mb-5 text-white'>Newest services</h2>
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
            </div>
            <Link to="/services"><button  className='text-white bg-primaryOrange text-2xl px-20 py-2 rounded-3xl mt-5'>Explore all services and prices</button></Link>
        </div>
    )
}