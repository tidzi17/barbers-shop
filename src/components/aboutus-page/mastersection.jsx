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
            <p className='mt-4 text-base mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati, accusantium quasi quam suscipit voluptate fugit odio unde, libero dolor ratione enim hic, eum inventore repellendus. Voluptatibus nisi tenetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum reprehenderit tempora voluptatem modi in vel laudantium distinctio atque natus iste minima eaque fuga a illo quaerat, possimus magni beatae.</p>
           <h1 className='font-allison text-8xl mt-3 font-light text-zinc-800'>John  Barberfield</h1>
           </div>                       
                <div className='w-1/3 h-full'>
                    <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
                </div>
           
            </div>
        </div>
    )
}