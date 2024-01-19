import data from '../../data/careers.json';
import PositionsContainer from './positionsContainer';
import bgImage from '../../assets/pexels-photo-668196.jpeg';
import { Parallax } from 'react-parallax';

export default function CareerSection(){

    return(
        <Parallax  
        bgImage={bgImage} 
        strength={300}>
        <div  className="w-full bg-white/50 border-y-[1px] border-zinc-500  text-black">
            <div className="flex h-full">
            <div className="w-1/2 m-20">
                <div>
                    <h2 className='text-3xl font-inika'>Interested in Joining Us?</h2>
                    <h2 className='text-5xl font-inika'>Check out open positions!</h2>
             </div>
             <div className='flex flex-col gap-6 mt-8'>
             {data.careers.map((career, index) => (
            <PositionsContainer key={index} {...career} />
        ))}
             </div>
         
            </div>
            <div className=' flex justify-center text-center bg-black/90 text-white'>
                <p className='w-1/2 m-auto font-serif italic text-3xl'>“Success is not final, failure is not fatal: It is the courage to continue that counts.”<br></br>- Winston Churchill</p>
            </div>
            </div>
        </div>
        </Parallax>
    )
}