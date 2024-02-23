import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProductCard from './productCard';
import { CartState } from '../../context/Context';


const ProductsLayout = () => {
  const { state: { products  }} = CartState();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
  ? products
  : products.filter(prod => prod.cathegory === selectedCategory);

  return (
    <div  className='mb-10  md:gap-5 px-3 py-36  lg:px-10 xl:px-24 '>
      <div>
      <div className='w-full flex justify-between text-zinc-800 text-xs md:text-2xl mb-4'>
            <p>Filter products</p>
            <div className='flex gap-6'>
            <Link to="/products/all" onClick={() => setSelectedCategory('all')}>All</Link>
        <Link to="/products/hair" onClick={() => setSelectedCategory('hair')}>Hair</Link>
        <Link to="/products/beard" onClick={() => setSelectedCategory('beard')}>Beard</Link>
        <Link to="/products/body" onClick={() => setSelectedCategory('body')}>Body</Link>
        <Link to="/products/face" onClick={() => setSelectedCategory('face')}>Face</Link>
            </div>
      </div>
      {/* grid grid-cols-2  min375:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5  */}
      <div className='w-full flex justify-center  m-auto '>
    <div className=' flex flex-wrap justify-between items-left  m-auto'>
    {
            filteredProducts.map((prod) => {
               return <ProductCard
                prod={prod}
                 key={prod.id}
                 containerClassName="border-transparent shadow-zinc-300 shadow-lg m-2"
                imageContainerClassName="shadow-zinc-200 shadow-lg border-[1px]"
                titleClassName="text-zinc-800"
                priceClassName="text-zinc-700"
                />
            })
        }
    </div>
   </div>
      </div>
    
    </div>
  )
}

export default ProductsLayout





/* const ProductsLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');


  const data = products;


  const filteredProducts = selectedCategory === 'all'
    ? data.products
    : data.products.filter(product => product.cathegory === selectedCategory);

  return (
    <div className='lg:w-10/12 m-auto  md:gap-5 px-3 py-36  lg:px-10 xl:px-24 '>
    
      <div className='flex gap-6 text-white text-2xl mb-4'>
        <Link to="/products/all" onClick={() => setSelectedCategory('all')}>All</Link>
        <Link to="/products/hair" onClick={() => setSelectedCategory('hair')}>Hair</Link>
        <Link to="/products/beard" onClick={() => setSelectedCategory('beard')}>Beard</Link>
        <Link to="/products/body" onClick={() => setSelectedCategory('body')}>Body</Link>
        <Link to="/products/face" onClick={() => setSelectedCategory('face')}>Face</Link>
      </div>
     
      
      
      <div className='grid grid-cols-2 min375:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  justify-between items-center gap-2'>
     
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductsLayout; */