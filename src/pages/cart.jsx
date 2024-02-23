import CartItems from "../components/shopcomponents/cart";
import landingimage from '../assets/landing.jpg'
import TrendingProducts from "../components/shopcomponents/trendingProducts";

export default function Cart(){
    return(
        <div className='overflow-hidden'>
        <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[40vh] object-cover grayscale relative"/>
        </div>
        <div className="bg-zinc-200">
        <CartItems />
        <TrendingProducts />
        </div>
        
       
        </div>
    )
}