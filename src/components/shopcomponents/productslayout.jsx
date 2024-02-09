import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import products from '../../data/products.json'
import ProductCard from './productCard';


const ProductsLayout = () => {
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

export default ProductsLayout;