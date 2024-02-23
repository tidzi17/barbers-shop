import CartItems from "../components/shopcomponents/cart";
import landingimage from '../assets/landing.jpg'
import TrendingProducts from "../components/shopcomponents/trendingProducts";
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia'

export default function Cart(){
    return(
        <div className='overflow-hidden'>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[40vh] object-cover grayscale relative"/>
        </div>
        <div className="bg-zinc-200 pt-10">
        <a href='/products' className='text-zinc-800  ml-10 flex items-center gap-3 text-base md:text-xl border-b-2 border-transparent hover:border-black w-fit h-fit pb-1 transform-all ease-in-out duration-500 hover:scale-95'><span className='text-zinc-800'><LiaLongArrowAltLeftSolid/></span><p>Back to shop</p></a>
        <CartItems />
        <TrendingProducts />
        </div>
        
       
        </div>
    )
}