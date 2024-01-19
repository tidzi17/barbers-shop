import BookingSection from "../components/bookingSection";
import landingimage from '../assets/landing.png'
import TeamSection from "../components/team-page/teamsection";
import CareerSection from "../components/team-page/career-section";

export default function Team(){
    return(
        <div>
        <div>
        <img src={landingimage} className="w-full h-[70vh] object-cover grayscale relative"/>
        <p className="absolute top-0 text-white mt-64 ml-12 font-mono text-8xl ">Team & <br></br> Careers</p>
        </div>
        <TeamSection />
        <CareerSection />
        <BookingSection />
        </div>
    )
}