import data from '../../data/services.json'

export default function ServicesSection(){
    return(
        <div className="">
            <div className='px-10 py-10'>
            <div className='w-1/2 m-auto text-zinc-300 flex flex-col items-center justify-center h-fit text-center'>
                <div className='w-[70px] h-[2px] bg-zinc-300 '></div>
        <h2 className='mt-2 text-5xl font-alumni self-center m-auto'>Our Services</h2>
        <h3 className=' mt-2 text-4xl font-alumni'>All prices and services</h3>
        <p className='mt-4 text-base mb-10 font-sans font-light'>At Masters Barbershop, we prioritize your comfort and satisfaction above all else. Our skilled barbers are dedicated to providing you with a personalized experience that leaves you looking and feeling your absolute best. Explore our services menu below and treat yourself to the ultimate grooming experience.</p>
                </div>
            <div className='grid grid-cols-2 gap-7 w-full h-full p-10 '>
                      {data.services.map((service, index) => (
                       <div key={index} className='w-full h-fit flex justify-between items-center border-b-[1px] border-dashed border-zinc-500'>
                       <p className='w-full text-zinc-200 font-inika text-base'>{service.name}</p>
                      <p className='text-zinc-400 text-base font-semibold'>${service.price}</p>
                  </div>
                     ))}
                     </div>
            </div>
        </div>
    )
}