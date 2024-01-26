import first from '../assets/beard.webp';
import second from '../assets/art.webp'
import third from '../assets/service3.png'
import forth from '../assets/service2.png'


export default function ImageBanner(){
    return(
        <div className="w-full h-[20vh] md:h-[30vh] flex">
  <div className="w-full h-full">
    <img src={first} alt="Left Image" className="w-full h-full object-cover grayscale" />
  </div>

  <div className="w-full h-full">
    <img src={second} alt="Middle Image" className="w-full h-full object-cover grayscale" />
  </div>

  <div className="w-full h-full">
    <img src={third} alt="Right Image" className="w-full h-full object-cover grayscale" />
  </div>
  <div className="w-full h-full">
    <img src={forth} alt="Right Image" className="w-full h-full object-cover grayscale" />
  </div>
</div>
    )
}