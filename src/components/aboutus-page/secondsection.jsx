import image from '../../assets/exterior.jpg';
import MotionDiv from '../../components/animation';
import { SlideXLeft } from '../../components/animation';
import { SlideXRight } from '../../components/animation';

export default function SecondSectionA(){
    return(
        <div className='about-section-second w-full  h-[110vh]  md:h-[85vh]   p-6 md:p-10 bg-zinc-300 overflow-hidden'>
        <div className="flex flex-col md:flex-row  w-full h-full justify-around m-auto">
        <MotionDiv className='w-full h-fit md:w-1/2 flex flex-col py-10 md:items-end md:text-right'
        animationVariants={SlideXLeft}>
        <div className='w-[70px] h-[2px] bg-black'></div>
        <h2 className='md:mt-2 text-3xl md:text-5xl font-alumni'>29 Years!</h2>
        <h3 className='md:mt-2 text-2xl md:text-4xl  font-alumni'>At your service since 1995!!</h3>
        <p className='md:mt-4 text-xs lg:text-base mb-2 lg:mb-10  font-sans font-light'>For over two decades, Masters has stood as a beacon of excellence in the grooming industry. Since our inception, we have remained committed to delivering unparalleled service, tailored to meet the unique preferences of each client. Join us in celebrating 29 years of craftsmanship, professionalism, and timeless style.</p>
        <p className='lg:mt-4 text-xs lg:text-base mb-2 md:mb-10 font-sans font-light'>Our journey over the past 29 years has been marked by dedication, passion, and a relentless pursuit of perfection. From our humble beginnings to becoming a renowned establishment, we have upheld the highest standards of quality and innovation. As we look towards the future, we remain steadfast in our mission to redefine grooming experiences and set new benchmarks of excellence. Join us as we continue to shape the landscape of the grooming industry for years to come.</p>
       
       </MotionDiv>
            <MotionDiv className='w-full h-2/3 md:w-1/2 md:p-10 lg:p-0 lg:w-1/3 md:h-full md:order-first'
            animationVariants={SlideXRight}>
                <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
            </MotionDiv>
       
        </div>
    </div>
      
    )
}
