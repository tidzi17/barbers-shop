import first from '../assets/service1.png';
import second from '../assets/service2.png';
import third from '../assets/service3.png';
import '../index.css';

export default function Services(){
    return(
        <div className="w-full h-100vh flex">
            <div className="group h-full w-1/3  cursor-pointer relative overflow-hidden">
                <img src={first} alt='service1' className='w-full h-full object-cover  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
                <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85 transition-opacity duration-500 ease-in-out  group-hover:opacity-50 group-hover:scale-105'></div>
                 </div>
            <div className="group h-full w-1/3  cursor-pointer relative overflow-hidden">
            <img src={second} alt='service2' className='w-full h-full object-cover  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85  transition-opacity duration-500 ease-in-out  group-hover:opacity-50 '></div>
             </div>
            <div className="group h-full w-1/3  cursor-pointer relative overflow-hidden">
            <img src={third} alt='service3' className='w-full h-full object-cover  transition-transform duration-500 ease-in-out transform group-hover:scale-105'/>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-85  transition-opacity duration-500 ease-in-out  group-hover:opacity-50 '></div>
                 </div>
            
        </div>
    )
}