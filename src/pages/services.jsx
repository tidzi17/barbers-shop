import { Link } from 'react-router-dom'
import landingimage from '../assets/landing.png'
import ServicesSection from '../components/services-page/services'



export default function Services(){
    return(
        <div>
           <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <div className="w-full absolute top-0 text-white flex flex-col items-center transform translate-y-64 gap-5 ">
            <p className='font-alumni text-4xl md:text-6xl uppercase '>Services</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-xl md:text-2xl'>Home</Link>
        </div>
        </div>
        <ServicesSection />
      
        </div>
    )
}