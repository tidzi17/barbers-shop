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
        autoplaySpeed: 1000,
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
    <div className='w-full lg:px-24 px-6 py-20'>
        <div>
        <div className='w-[70px] h-[2px] bg-zinc-900'></div>
        <h2 className='text-zinc-800 font-alumni text-3xl md:text-5xl mt-2'>Trending Products</h2>
        </div>
        <Slider {...settings} className='w-full flex justify-between mt-10 '>
        {
            products.slice(21, 31).map((prod) => {
               return <ProductCard
                 prod={prod}
                key={prod.id}
                containerClassName="border-transparent shadow-zinc-300 shadow-lg m-2"
                imageContainerClassName="shadow-zinc-300 shadow-lg"
                titleClassName="text-zinc-800"
                priceClassName="text-zinc-700"
                />
            })
        }
        </Slider>
   
      
    </div>
  )
}

export default TrendingProducts
