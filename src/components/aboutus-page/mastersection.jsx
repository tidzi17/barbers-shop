import image from '../../assets/founder.png';
import MotionDiv from '../../components/animation';
import { SlideXLeft } from '../../components/animation';
import { SlideXRight } from '../../components/animation';

export default function MasterSection(){
    return(
        <div className='w-full h-[120vh]  md:h-[85vh] bg-zinc-300 p-6 overflow-hidden'>
            <div className="flex flex-col md:flex-row  w-full h-full justify-around">
            <MotionDiv className='w-full md:w-1/2 md:h-full md:py-10 mb-3 md:mb-0'
            animationVariants={SlideXLeft}>
            <div className='w-[70px] h-[2px] bg-black'></div>
            <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>John Barberfield</h2>
            <h3 className=' md:mt-2 text-2xl md:text-4xl font-alumni'>Owner and Founder of "Masters" & Head Barber</h3>
            <p className='md:mt-4 text-xs md:text-base mb-2 md:mb-10'>Meet John Barberfield, the visionary behind Masters Barbershop. As the inheritor of his father's legacy, John has continued the tradition of excellence, infusing it with his own passion and expertise. With over two decades of experience, John leads our team of dedicated barbers with a commitment to precision, innovation, and customer satisfaction. Experience the artistry of John and his team at Masters, where every haircut is a masterpiece.</p>
           <h1 className='font-allison text-xl md:text-5xl lg:text-8xl mt-3 font-light text-zinc-800'>John  Barberfield</h1>
           </MotionDiv>                       
                <MotionDiv className='w-full h-2/3 md:w-1/2 md:p-10 lg:p-0 lg:w-1/3 md:h-full'
                animationVariants={SlideXRight}>
                    <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
                </MotionDiv>
           
            </div>
        </div>
    )
}