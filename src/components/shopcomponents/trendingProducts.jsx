import React from 'react'

import ProductCard from './productCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartState } from '../../context/Context';


function TrendingProducts() {
  const { state: { products } } = CartState();
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500, 
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
              },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 510,
                settings: {
                  slidesToShow: 2,
                },
              },
          ],
       
    };

  return (
    <div className='w-full lg:px-24 px-6'>
        <div>
        <div className='w-[70px] h-[2px] bg-white'></div>
        <h2 className='text-white font-alumni text-3xl md:text-5xl mt-2'>Trending Products</h2>
        </div>
        <Slider {...settings} className='w-full flex justify-between mt-10'>
        {
            products.slice(21, 31).map((prod) => {
               return <ProductCard  prod={prod} key={prod.id}/>
            })
        }
        </Slider>
   
      
    </div>
  )
}

export default TrendingProducts
