import { Link } from 'react-router-dom';
import image from '../assets/first.jpeg';
import Button from './button';



export default function AboutSectionHome(){
    return(
        <div className='w-full h-[85vh] bg-zinc-300 p-6'>
            <div className="flex  w-full h-full justify-around">
            <div className='w-1/2 h-full py-10'>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='mt-2 text-5xl font-alumni'>Meet our Team!</h2>
            <h3 className=' mt-2 text-4xl font-alumni'>Check out our team members and explore career!</h3>
            <p className='mt-4 text-base mb-10'>Get to know the talented individuals who bring passion and expertise to Masters Barbershop. Our team members are dedicated to providing exceptional service and creating confident looks for our clients. Explore career opportunities with us and join a team that values creativity, professionalism, and a commitment to excellence. At Masters Barbershop, we're not just a team; we're a family, united by our love for the craft of barbering.</p>
           <Link target='blank' to="/team"><Button text="Explore"/></Link> 
           </div>
                <div className='w-1/3 h-full'>
                    <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
                </div>
           
            </div>
        </div>
    )
}