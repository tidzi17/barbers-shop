import landingimage from '../assets/landing.jpg'
import MasterSection from '../components/aboutus-page/mastersection'
import AboutFirstSection from '../components/aboutus-page/firstsection'
import FeaturesSection from '../components/aboutus-page/features'
import { Link } from 'react-router-dom'
import SecondSectionA from '../components/aboutus-page/secondsection'
import MotionDiv from '../components/animation';
import { SlideXLeft } from '../components/animation';

export default function About(){
    return(
        <div className='overflow-hidden'>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <MotionDiv className="w-full absolute top-0 text-white flex flex-col items-center transform mt-64 gap-5 "
        animationVariants={SlideXLeft}
        viewport={
            {once: true} 
          }>
            <p className='font-alumni text-4xl md:text-6xl uppercase '>About Us</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-xl md:text-2xl'>Home</Link>
        </MotionDiv>
        </div>
        <AboutFirstSection />
        <SecondSectionA />
        <FeaturesSection/>
       
        <MasterSection />
       
        </div>
    )
}