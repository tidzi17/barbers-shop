import { Link } from 'react-router-dom';
import image from '../../assets/chair.webp';
import Button from '../button';

export default function AboutFirstSection(){
    return(
        <div className='w-full  h-[140vh]  md:h-[85vh] p-6 md:p-10 '>
        <div className="flex flex-col md:flex-row  w-full h-full justify-around m-auto">
        <div className='w-full md:w-1/2 md:h-full md:py-10 mb-3 md:mb-0  text-zinc-300'>
        <div className='w-[70px] h-[2px] bg-zinc-300'></div>
        <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>About Us!</h2>
        <h3 className='md:mt-2 text-2xl md:text-4xl font-alumni'>Learn more about your favorite Barber Shop, Masters!</h3>
        <p className='md:mt-4 text-xs lg:text-base mb-2 lg:mb-10 font-sans font-light'>Established in 1995, Masters has been a cornerstone of quality grooming and exceptional service for nearly three decades. From classic cuts to modern styles, our skilled barbers are dedicated to providing you with the finest haircuts and grooming experiences. Step into our welcoming atmosphere and discover why Masters is not just a barbershop but a tradition.</p>
        <p className='lg:mt-4 text-xs lg:text-base mb-2 md:mb-10 font-sans font-light'>Our commitment to excellence extends beyond the barber's chair. At Masters, we pride ourselves on creating a community where every client feels valued and respected. Whether you're a regular or a first-time visitor, our friendly staff ensures that your experience is nothing short of exceptional. Join us in celebrating the art of grooming, where every visit is an opportunity to indulge in luxury and style.</p>
       
       </div>
            <div className='w-full h-2/3 md:w-1/2 md:p-10 lg:p-0 lg:w-1/3 md:h-full'>
                <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
            </div>
       
        </div>
    </div>
    )
}