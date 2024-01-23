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
        <Parallax bgImage={bgImage} strength={300} className='h-[65vh] w-full grayscale brightness-50 '>
            <div className='w-full h-full flex flex-col items-center  text-zinc-200'>
                <div className='w-fit h-auto flex flex-col items-center mt-5'>
                <div className='w-[70px] h-[2px] bg-zinc-200 self-center'></div>
                <h2 className='mt-2 text-5xl font-alumni'>Why Masters?</h2>
                </div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className="w-11/12 h-full m-auto flex justify-between  gap-5 mt-20">
                    <div className='w-1/3 h-[20vh]  flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-4xl pr-5'>{couterOn && <CountUp start={0} end={20} duration={4} delay={0}/>}+</p>
                        </div>
                        <div className='w-1/2 h-full  flex items-center'>
                            <p className='text-4xl font-aboreto pl-5'>Years of <br></br>Service</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-[20vh] flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-4xl pr-5'> {couterOn && <CountUp start={0} end={5000} duration={2} delay={0}/>}+</p>
                        </div>
                        <div className='w-1/2 h-full  flex items-center'>
                            <p className='text-4xl font-aboreto pl-5'>Satisfied <br></br>Customers</p>
                        </div>
                    </div>
                    <div className='w-1/3 h-[20vh]  flex'>
                        <div className='w-1/2 h-full border-r-[1px] border-white flex items-center'>
                            <p className='float-right ml-auto font-aboreto text-4xl pr-5'> {couterOn && <CountUp start={0} end={200} duration={2} delay={0}/>}+</p>
                        </div>
                        <div className='w-1/2 h-full flex items-center'>
                            <p className='text-4xl font-aboreto pl-5'>Diplomas &<br></br>Awards</p>
                        </div>
                    </div>
                  
                </ScrollTrigger>
                <div className='mt-36'>
                <Button onClick={handleScroll} text="Book An Appointment" textColor="text-white"/>
                </div>
            </div>
        </Parallax>
    )
}