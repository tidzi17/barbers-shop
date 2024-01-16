import { Parallax } from 'react-parallax';
import bgImage from '../assets/cutting.png';
import { Link } from 'react-router-dom';


export default function GalleryParallax(){
    return(
        <Parallax
        bgImage={bgImage} 
        strength={300}
        className='h-550px w-full'
        >
            <div className='flex flex-col justify-center items-center translate-y-48 gap-12'>
                <p className='font-antonio font-light text-white text-3xl '>Exlore our work</p>
                <p className='w-1/2 font-antonio font-regular text-white text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laborum veniam? Ipsam quibusdam unde rerum magni eligendi in fugit exercitationem totam veniam, perferendis officia, obcaecati dolorum sit nobis facilis minus!</p>
                <Link to="/gallery"><button className='font-antonio font-light text-white w-44 h-10 bg-primaryOrange bg-opacity-50 text-xl'>Gallery</button></Link>
            </div>
        </Parallax>
    )
}