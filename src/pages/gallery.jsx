import { Link } from 'react-router-dom'
import landingimage from '../assets/landing.png'


export default function Gallery(){
    return(
        <div>
         <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <div className="w-full absolute top-0 text-white flex flex-col items-center transform translate-y-64 gap-5 ">
            <p className='font-alumni text-6xl uppercase '>Gallery</p>
            <div className='w-[50px] h-[2px] bg-white'></div>
            <Link to="/" className='font-mono uppercase text-2xl'>Home</Link>
        </div>
        </div>
        </div>
    )
}