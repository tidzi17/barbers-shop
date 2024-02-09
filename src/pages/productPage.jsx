import React from 'react';
import landingimage from '../assets/landing.jpg'
import ProductDetails from '../components/shopcomponents/product-details';
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import TrendingProducts from '../components/shopcomponents/trendingProducts';




function ProductPage() {
  return (
    <div className=''>
         <div>
        <img src={landingimage} alt="landingimage" className="w-full h-[30vh] object-cover grayscale relative"/>
        </div>
        <a href='/products' className='text-white flex items-center gap-3'><span className='text-white'><LiaLongArrowAltLeftSolid /></span><p>Back</p></a>
    <ProductDetails />
    <div className='mt-36'>
        <TrendingProducts />
    </div>
           </div>
  )
}

export default ProductPage;
