import React from 'react';
import landingimage from '../assets/landing.jpg'
import ProductDetails from '../components/shopcomponents/product-details';
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import TrendingProducts from '../components/shopcomponents/trendingProducts';




function ProductPage() {
  return (
    <div className='bg-zinc-200'>
         <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[30vh] object-cover grayscale relative"/>
        </div>
        <a href='/products' className='text-zinc-800 ml-3 lg:ml-24  xl:ml-52 mt-10 flex items-center gap-3 text-base md:text-xl border-b-2 border-transparent hover:border-black w-fit h-fit pb-1 transform-all ease-in-out duration-500 hover:scale-95'><span className='text-zinc-800'><LiaLongArrowAltLeftSolid/></span><p>Back</p></a>
    <ProductDetails />
    <div className='mt-10 md:mt-28  mb-28'>
        <TrendingProducts />
    </div>
           </div>
  )
}

export default ProductPage;
