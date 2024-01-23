import ContactSection from "../components/contact-page/contactSection";
import Map from "../components/contact-page/map";
import landingimage from '../assets/landing.png'

export default function Contact(){
    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <p className="absolute top-0 text-white mt-64 ml-12 font-mono text-8xl ">Contact Us</p>
        </div>
        <ContactSection />
        <Map />
        </div>
    )
}