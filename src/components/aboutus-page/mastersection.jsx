import { Link } from 'react-router-dom';
import image from '../../assets/founder.png';
import Button from '../button';



export default function MasterSection(){
    return(
        <div className='w-full h-[85vh] bg-zinc-300 p-6 '>
            <div className="flex  w-full h-full justify-around">
            <div className='w-1/2 h-full py-10'>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='mt-2 text-5xl font-alumni'>John Barberfield</h2>
            <h3 className=' mt-2 text-4xl font-alumni'>Owner and Founder of "Masters" & Head Barber</h3>
            <p className='mt-4 text-base mb-10'>Meet John Barberfield, the visionary behind Masters Barbershop. As the inheritor of his father's legacy, John has continued the tradition of excellence, infusing it with his own passion and expertise. With over two decades of experience, John leads our team of dedicated barbers with a commitment to precision, innovation, and customer satisfaction. Experience the artistry of John and his team at Masters, where every haircut is a masterpiece.</p>
           <h1 className='font-allison text-8xl mt-3 font-light text-zinc-800'>John  Barberfield</h1>
           </div>                       
                <div className='w-1/3 h-full'>
                    <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
                </div>
           
            </div>
        </div>
    )
}