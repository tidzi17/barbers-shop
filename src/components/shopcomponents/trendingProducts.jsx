import React from 'react'
import data from '../../data/products.json'
import ProductCard from './productCard'

function TrendingProducts() {
  return (
    <div className='w-full lg:px-24 px-6'>
        <div>
        <div className='w-[70px] h-[2px] bg-white'></div>
        <h2 className='text-white font-alumni text-3xl md:text-5xl mt-2'>Trending Products</h2>
        </div>
        <div className='w-full flex justify-between mt-10'>
            {data.products.slice(21, 26).map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
   
      
    </div>
  )
}

export default TrendingProducts
