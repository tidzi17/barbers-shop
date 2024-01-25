import first from '../assets/service1.png';
import second from '../assets/service2.png';
import third from '../assets/service3.png';
import '../index.css';

export default function Services(){
    return(
        <div className="w-full">
            <div className='w-full flex flex-col items-center py-20'>
            <div className='m-auto flex flex-col items-center gap-3'>
                <div className='w-[50px] h-[2px] bg-white'></div>
                <h2 className='text-4xl text-white uppercase font-alumni'>Popular Services</h2>
            </div>
            <div className='w-full'>
                <div className='w-3/4  flex justify-center gap-7 m-auto mt-14 text-white'>
                    {PopularServices.map((item, index) => (
                    <div key={index} id='card' className='group w-1/4 h-[400px] bg-black flex flex-col text-center overflow-hidden relative rounded-lg shadow-sm shadow-zinc-900'>
                    <img src={item.image} alt='service1' className='h-1/2 w-full object-cover grayscale opacity-85  transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-50 cursor-pointer'/>
                    <h3 className='font-alumni text-2xl mt-5 mb-2'>{item.title}</h3>
                    <div className='w-8/12 h-[1px] bg-white self-center mb-2'></div>
                    <p className='text-base text-zinc-500 w-11/12 self-center'>{item.text}</p>
                    </div>
                    ))}
                 
                </div>
            </div>
            </div>
        </div>
    )
}


const PopularServices = [
    {
        image: first,
        title: "Classic Haircut",
        text: "Our Classic Haircut service offers precision and style, ensuring a sharp and timeless look tailored to your preferences."
    },
    {
        image: second,
        title: "Beard Trim",
        text: "Experience our Beard Trim service for a groomed and polished appearance. Our expert barbers will shape and style your beard to perfection."
    },
    {
        image: third,
        title: "Skin Fade",
        text: "Elevate your hairstyle with our Skin Fade service, creating a sleek and modern appearance with expert blending and precision cutting techniques."
    },
    
]


  {/*   <div className='flex w-full gap-6 mt-6 justify-center '>
            <div className="group h-full w-1/3  cursor-pointer relative overflow-hidden">
                <img src={first} alt='service1' className='w-full h-full object-cover grayscale hover:grayscale-0  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
                {<div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85 transition-opacity duration-500 ease-in-out  group-hover:opacity-50 group-hover:scale-105'></div>}
                 </div>
            <div className="group h-full w-1/4  cursor-pointer relative overflow-hidden">
            <img src={second} alt='service2' className='w-full h-full object-cover  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85  transition-opacity duration-500 ease-in-out  group-hover:opacity-50 '></div>
             </div>
            <div className="group h-full w-1/4  cursor-pointer relative overflow-hidden">
            <img src={third} alt='service3' className='w-full h-full object-cover  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85  transition-opacity duration-500 ease-in-out  group-hover:opacity-50 '></div>
                 </div>
            </div> */}