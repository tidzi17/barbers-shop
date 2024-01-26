import ContactSection from "../components/contact-page/contactSection";
import Map from "../components/contact-page/map";
import landingimage from '../assets/landing.png'
import { Link } from "react-router-dom";


export default function Contact(){
    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <div className="w-full absolute top-0 text-white flex flex-col items-center transform translate-y-64 gap-5 ">
            <p className='font-alumni text-4xl md:text-6xl uppercase '>Contact Us</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-xl md:text-2xl'>Home</Link>
        </div>
        </div>
        <ContactSection />
        <Map />
        </div>
    )
}