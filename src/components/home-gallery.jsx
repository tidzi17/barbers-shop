import React from 'react';
import data from '../data/gallery.json';
import '.././index.css';
import { Link } from 'react-router-dom';
import Button from './button';


export default function HomeGallery(){
    const galleryImages = data.gallery;

    return(
        <div id="home-gallery-section" className='w-full h-[80vh] mt-20 bg-zinc-300'>
           <div className='w-full h-full flex'>
           <div className='w-1/2 h-full p-10'>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='mt-2 text-5xl font-alumni'>Explore our work</h2>
            <h3 className=' mt-2 text-4xl font-alumni'>Check out our portfolio gallery!</h3>
            <p className='mt-4 text-base mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati, accusantium quasi quam suscipit voluptate fugit odio unde, libero dolor ratione enim hic, eum inventore repellendus. Voluptatibus nisi tenetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum reprehenderit tempora voluptatem modi in vel laudantium distinctio atque natus iste minima eaque fuga a illo quaerat, possimus magni beatae.</p>
            <Button text="Explore"/>
           </div>
           <div className='w-1/2 h-full grid grid-cols-3 grid-rows-3  gap-2 p-10 overflow-hidden  relative'>
            {galleryImages.slice(5, 14).map((image, index) => (
                <Link target='blank' to="/gallery">
                 <img key={index} src={image} alt='gallery-img' className="w-full overflow-hidden h-full object-cover transition-transform duration-500 ease-in-out  transform hover:scale-105 grayscale cursor-pointer"/>
                 </Link>
            ))}
           </div>

           </div>
        </div>
    )
}