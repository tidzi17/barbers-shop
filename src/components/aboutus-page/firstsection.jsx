import { Link } from 'react-router-dom';
import image from '../../assets/chair.webp';
import Button from '../button';

export default function AboutFirstSection(){
    return(
        <div className='w-full h-[85vh]  p-10 '>
        <div className="flex  w-full h-full justify-around mt-5">
        <div className='w-1/2 h-full py-10 text-zinc-300'>
        <div className='w-[70px] h-[2px] bg-zinc-300'></div>
        <h2 className='mt-2 text-5xl font-alumni'>About Us!</h2>
        <h3 className=' mt-2 text-4xl font-alumni'>Learn more about your favorite Barber Shop!</h3>
        <p className='mt-4 text-base mb-10 font-sans font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati, accusantium quasi quam suscipit voluptate fugit odio unde, libero dolor ratione enim hic, eum inventore repellendus. Voluptatibus nisi tenetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum reprehenderit tempora voluptatem modi in vel laudantium distinctio atque natus iste minima eaque fuga a illo quaerat, possimus magni beatae.</p>
        <p className='mt-4 text-base mb-10 font-sans font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati, accusantium quasi quam suscipit voluptate fugit odio unde, libero dolor ratione enim hic, eum inventore repellendus. Voluptatibus nisi tenetur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum reprehenderit tempora voluptatem modi in vel laudantium distinctio atque natus iste minima eaque fuga a illo quaerat, possimus magni beatae.</p>
       
       </div>
            <div className='w-1/3 h-full'>
                <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
            </div>
       
        </div>
    </div>
    )
}