import ContactSection from "../components/contact-page/contactSection";
import Map from "../components/contact-page/map";
import landingimage from '../assets/landing.jpg'
import { Link } from "react-router-dom";
import MotionDiv from '../components/animation';
import { SlideXLeft } from '../components/animation';


export default function Contact(){
    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <MotionDiv className="w-full absolute top-0 text-white flex flex-col items-center transform mt-64 gap-5 "
        animationVariants={SlideXLeft}
        viewport={
            {once: true} 
          }>
            <p className='font-alumni text-4xl md:text-6xl uppercase '>Contact Us</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-xl md:text-2xl'>Home</Link>
        </MotionDiv>
        </div>
        <ContactSection />
        <Map />
        </div>
    )
}