import BookingSection from "../components/bookingSection";
import landingimage from '../assets/landing.png'
import ImageBanner from "../components/imagebanner";


export default function Services(){
    return(
        <div>
           <div>
        <img src={landingimage} className="w-full h-[70vh] object-cover grayscale relative"/>
        <p className="absolute top-0 text-white mt-64 ml-12 font-mono text-8xl ">Our Services</p>
        </div>
      
        </div>
    )
}