import { Parallax } from 'react-parallax';
import bgImage from '../assets/chair.png';

export default function WorkingHoursSection(){
    return(
        <Parallax
        bgImage={bgImage}
        strength={300}
        className='h-550px w-full object-cover'
        >
            <div className='w-full flex flex-col justify-center items-center mt-10'>
                <h3 className='font-alumni font-bold text-primaryOrange text-4xl'>Working Hours</h3>
                <div className='text-white w-1/2 flex flex-col  gap-20 border-y-2 border-slate-500 py-10 my-5'>
                    <div className='flex text-center justify-around w-full font-alumni font-thin'>
                        <div>
                            <p className='text-3xl'>Monday-Friday</p>
                            <p className='text-2xl'>07-22h</p>
                        </div>
                        <div>
                            <p className='text-3xl'>Saturday</p>
                            <p className='text-2xl'>07-20h</p>
                        </div>
                        <div>
                            <p className='text-3xl'>Sunday</p>
                            <p className='text-2xl'>07-17h</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center font-alumni'>
                        <p className='font-regular text-3xl'>Call Us</p>
                        <p className='font-thin text-2xl'>+367 25 765 8746</p>
                    </div>
                </div>
                <button className='text-white font-alumni font-thin bg-black opacity-30 px-5 py-2 mt-5 text-3xl'>Book Apointment</button>
            </div>
            
        </Parallax>
    )
}