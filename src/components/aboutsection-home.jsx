import { Link } from 'react-router-dom';
import image from '../assets/first.jpeg';
import Button from './button';



export default function AboutSectionHome(){
    return(
        <div className='w-full h-[120vh]  md:h-[85vh] bg-zinc-300 p-6 mb-[50vh]'>
            <div className="flex flex-col md:flex-row  w-full h-full justify-around">
            <div className='w-full md:w-1/2 md:h-full md:py-10 mb-3 md:mb-0'>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>Meet our Team!</h2>
            <h3 className='md:mt-2 text-2xl md:text-4xl font-alumni'>Check out our team members and explore career!</h3>
            <p className='md:mt-4 text-xs md:text-base mb-2 md:mb-10'>Get to know the talented individuals who bring passion and expertise to Masters Barbershop. Our team members are dedicated to providing exceptional service and creating confident looks for our clients. Explore career opportunities with us and join a team that values creativity, professionalism, and a commitment to excellence. At Masters Barbershop, we're not just a team; we're a family, united by our love for the craft of barbering.</p>
           <Link target='blank' to="/team"><Button text="Explore"/></Link> 
           </div>
                <div className='w-full h-2/3 md:w-1/2 md:p-10 lg:p-0 lg:w-1/3 md:h-full'>
                    <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
                </div>
           
            </div>
        </div>
    )
}