import bgImage from '../../assets/art.webp';
import { Parallax } from 'react-parallax';
import Button from '../button';
import React, {  useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



export default function FeaturesSection(){
    const [couterOn, setCounterOn] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('booking-section');
        section.scrollIntoView({ behavior: 'smooth' });
      };
      
    return(
        <Parallax bgImage={bgImage} strength={300} className='w-full py-5    md:py-10 grayscale brightness-50 '>
            <div className='w-full h-full flex flex-col items-center  text-zinc-200'>
                <div className='w-fit h-auto flex flex-col items-center mt-5'>
                <div className='w-[70px] h-[2px] bg-zinc-200 self-center'></div>
                <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>Why Masters?</h2>
                </div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className="w-full h-full m-auto flex flex-col md:flex-row md:justify-around  gap-5 my-20 md:my-36">
                    <div className='flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-xl md:text-2xl lg:text-4xl pr-5'>{couterOn && <CountUp start={0} end={29} duration={4} delay={0}/>}</p>
                        </div>
                        <div className=' h-full  flex items-center'>
                            <p className='text-xl md:text-2xl lg:text-4xl font-alumni pl-5'>Years of Service</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-xl md:text-2xl lg:text-4xl pr-5'> {couterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}+</p>
                        </div>
                        <div className='w-1/2 h-full  flex items-center'>
                            <p className='text-xl md:text-2xl lg:text-4xl font-alumni pl-5'>Satisfied <br></br>Customers</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-xl md:text-2xl lg:text-4xl pr-5'> {couterOn && <CountUp start={0} end={200} duration={2} delay={0}/>}+</p>
                        </div>
                        <div className=' h-full flex items-center'>
                            <p className='text-xl md:text-2xl lg:text-4xl font-alumni pl-5'>Diplomas & Awards</p>
                        </div>
                    </div>
                  
                </ScrollTrigger>
                <div className=''>
                <Button onClick={handleScroll} text="Book An Appointment" textColor="text-white"/>
                </div>
            </div>
        </Parallax>
    )
}