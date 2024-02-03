import first from '../assets/service1.jpg';
import second from '../assets/service2.jpg';
import third from '../assets/service3.jpg';
import '../index.css';
import MotionDiv from '../components/animation';
import { SlideY } from '../components/animation';

export default function Services(){
    return(
        <div className="w-full">
            <div className='w-full flex flex-col items-center  py-14 md:py-20'>
            <div className='m-auto flex flex-col items-center gap-3'>
                <div className='w-[50px] h-[2px] bg-white'></div>
                <h2 className='text-4xl text-white uppercase font-alumni'>Popular Services</h2>
            </div>
            <div className='w-full '>
                <MotionDiv className='w-full items-center  md:px-16 lg:w-3/4 h-full flex flex-col md:flex-row justify-center gap-5 m-auto  mt-5 md:mt-14 text-white'
                animationVariants={SlideY}>
                    {PopularServices.map((item, index) => (
                    <div key={index} id='card' className='group w-64 md:w-80 h-80 md:h-96 lg:h-[30rem] mb-10  bg-black flex flex-col text-center overflow-hidden relative rounded-lg shadow-sm shadow-zinc-900'>
                    <img src={item.image} alt='service1' className='h-1/2 w-full object-cover grayscale opacity-85  transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-50 cursor-pointer'/>
                    <h3 className='font-alumni text-xl lg:text-2xl mt-5 mb-2'>{item.title}</h3>
                    <div className='w-8/12 h-[1px] bg-white self-center mb-2'></div>
                    <p className='text-xs lg:text-base text-zinc-500 w-11/12 self-center'>{item.text}</p>
                    </div>
                    ))}
                 
                </MotionDiv>
            </div>
            </div>
        </div>
    )
}


const PopularServices = [
    {
        image: first,
        title: "Classic Haircut",
        text: "Our Classic Haircut service offers precision and style, ensuring a sharp and timeless look tailored to your preferences."
    },
    {
        image: second,
        title: "Beard Trim",
        text: "Experience our Beard Trim service for a groomed and polished appearance. Our expert barbers will shape and style your beard to perfection."
    },
    {
        image: third,
        title: "Skin Fade",
        text: "Elevate your hairstyle with our Skin Fade service, creating a sleek and modern appearance with expert blending and precision cutting techniques."
    },
]
