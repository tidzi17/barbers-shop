import data from '../../data/careers.json';
import PositionsContainer from './positionsContainer';
import bgImage from '../../assets/pexels-photo-668196.jpeg';
import { Parallax } from 'react-parallax';

export default function CareerSection(){

    return(
        <Parallax  
        bgImage={bgImage} 
        strength={300}>
        <div  className="w-full px-5 py-16 lg:p-28 text-black">
            <div className="flex h-full ">
            <div className="w-full lg:w-1/2 m-auto">
                <div className='w-fit m-auto text-center text-white mb-10'>
                <div className='w-[70px] h-[2px] bg-white m-auto'></div>
                    <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>Interested in Joining Us?</h2>
                    <h2 className='md:mt-2 text-2xl md:text-4xl  font-alumni'>Check out open positions!</h2>
             </div>
             <div className='flex flex-col gap-6 mt-8'>
             {data.careers.map((career, index) => (
            <PositionsContainer key={index} {...career} />
        ))}
             </div>
         
            </div>
           {/*  <div className=' flex justify-center text-center text-black'>
                <p className='w-1/2 m-auto font-serif italic text-3xl'>“Success is not final, failure is not fatal: It is the courage to continue that counts.”<br></br>- Winston Churchill</p>
            </div> */}
            </div>
        </div>
        </Parallax>
    )
}