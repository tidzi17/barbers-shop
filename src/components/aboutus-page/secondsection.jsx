import image from '../../assets/exterior.png';

export default function SecondSectionA(){
    return(
        <div className='about-section-second w-full h-[85vh]  p-10  bg-zinc-300'>
        <div className="flex  w-full h-full justify-around m-auto">
        <div className='w-1/2 flex flex-col py-10 items-end text-right'>
        <div className='w-[70px] h-[2px] bg-black'></div>
        <h2 className='mt-2 text-5xl font-alumni'>29 Years!</h2>
        <h3 className=' mt-2 text-4xl font-alumni'>At your service since 1995!!</h3>
        <p className='mt-4 text-base mb-10 font-sans font-light'>For over two decades, Masters has stood as a beacon of excellence in the grooming industry. Since our inception, we have remained committed to delivering unparalleled service, tailored to meet the unique preferences of each client. Join us in celebrating 29 years of craftsmanship, professionalism, and timeless style.</p>
        <p className='mt-4 text-base mb-10 font-sans font-light'>Our journey over the past 29 years has been marked by dedication, passion, and a relentless pursuit of perfection. From our humble beginnings to becoming a renowned establishment, we have upheld the highest standards of quality and innovation. As we look towards the future, we remain steadfast in our mission to redefine grooming experiences and set new benchmarks of excellence. Join us as we continue to shape the landscape of the grooming industry for years to come.</p>
       
       </div>
            <div className='w-1/3 h-full order-first'>
                <img src={image} alt="someimage" className='object-cover w-full h-full grayscale'/>
            </div>
       
        </div>
    </div>
      
    )
}
