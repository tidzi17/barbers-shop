import landingimage from '../assets/landing.jpg'
import MotionDiv from '../components/animation';
import { SlideXLeft } from '../components/animation';
import { Link } from 'react-router-dom'
import data from '../data/products.json';
import ProductCard from '../components/shopcomponents/productCard';


export default function Shop(){

    

    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <MotionDiv className="w-full absolute top-0 text-white flex flex-col items-center transform mt-64 gap-5 "
        animationVariants={SlideXLeft}
        viewport={
            {once: true} 
          }>
            <p className='font-alumni text-4xl md:text-6xl uppercase '>Barbers Shop</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-xl md:text-2xl'>Home</Link>
        </MotionDiv>
        </div>


        <div className=''>
            <div className='lg:w-10/12 m-auto grid grid-cols-2 min375:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  justify-between items-center gap-2 md:gap-5 px-3 py-36  lg:px-10 xl:px-24 '>
        {data.products.map((product, index) => (
            <ProductCard key={index} {...product}/>
        ))}
        </div>
        </div>
        </div>
    )
}