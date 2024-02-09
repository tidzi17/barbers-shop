import React from 'react';
import data from '../data/gallery.json';
import '.././index.css';
import { Link } from 'react-router-dom';
import Button from './button';
import MotionDiv from '../components/animation';
import { SlideXLeft } from '../components/animation';
import { SlideXRight } from '../components/animation';


export default function HomeGallery(){
    
    const galleryImages = data.gallery;

    return(
        <div id="home-gallery-section" className='overflow-hidden w-full h-[78vh] mg:h-[65vh] lg:h-[80vh] mt-20 bg-zinc-300'>
           <div className='w-full h-full flex flex-col md:flex-row'>
           <MotionDiv className='w-full md:w-1/2 h-full px-3 pt-5 md:p-10'
           animationVariants={SlideXLeft}>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>Explore our work</h2>
            <h3 className=' md:mt-2 text-2xl md:text-4xl font-alumni'>Check out our portfolio gallery!</h3>
            <p className='md:mt-4 text-xs md:text-base mb-2 md:mb-10'>Dive into the artistry and precision of our work by exploring our portfolio gallery. From classic cuts to modern styles, our portfolio showcases the expertise and creativity of our talented barbers. Discover inspiration for your next haircut and see why Masters Barbershop is trusted by clients for crafting confident looks, one cut at a time. Experience the difference with Masters Barbershop and schedule your appointment today.</p>
           <Link target='blank' to="/gallery"><Button text="Explore"/></Link> 
           </MotionDiv>
           <MotionDiv id="home-gallery-section-images" className='home-gallery-section-images w-full md:w-1/2 h-full grid grid-cols-3 grid-rows-3  gap-2 p-3 md:p-10 overflow-hidden  relative'
           animationVariants={SlideXRight}>
            {galleryImages.slice(5, 14).map((image, index) => (
                <Link key={index} target='blank' to="/gallery">
                 <img  src={image} alt='' className="w-full overflow-hidden h-full object-cover transition-transform duration-500 ease-in-out  transform hover:scale-105 grayscale cursor-pointer"/>
                 </Link>
            ))}
           </MotionDiv>

           </div>
        </div>
    )
}