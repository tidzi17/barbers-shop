import landingimage from '../assets/landing.png'

export default function About(){
    return(
        <div>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[70vh] object-cover grayscale relative"/>
        <p className="absolute top-0 text-white mt-64 ml-12 font-mono text-8xl ">About Us</p>
        </div>
        </div>
    )
}