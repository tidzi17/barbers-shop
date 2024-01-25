import landingimage from '../assets/landing.png'
import MasterSection from '../components/aboutus-page/mastersection'
import AboutFirstSection from '../components/aboutus-page/firstsection'
import FeaturesSection from '../components/aboutus-page/features'
import HomePricesMenu from '../components/home-prices-section'
import { Link } from 'react-router-dom'
import SecondSectionA from '../components/aboutus-page/secondsection'

export default function About(){
    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <div className="w-full absolute top-0 text-white flex flex-col items-center transform translate-y-64 gap-5 ">
            <p className='font-alumni text-6xl uppercase '>About Us</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-2xl'>Home</Link>
        </div>
        </div>
        <AboutFirstSection />
        <SecondSectionA />
        <FeaturesSection/>
       
        <MasterSection />
       
        </div>
    )
}