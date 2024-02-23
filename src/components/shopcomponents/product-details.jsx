import React, { useState }  from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { AddToCartButton, RemoveFromCartButton } from './cartButtons';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CartState } from "../../context/Context";

function ProductDetails() {
    const { id } = useParams();
    const { state: { cart } } = CartState();
    const [product] = useState(products.find(product => product.id === id));

    const [showDescription, setShowDescription] = useState(true);
    const [showUsage, setShowUsage] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleUsage = () => {
        setShowUsage(!showUsage);
    };

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };

    const handleScroll = () => {
        const section = document.getElementById('description');
        section.scrollIntoView({ behavior: 'smooth' });
    };

  
    if (!product) {
        return <div><p className='text-white text-8xl'>Product not found</p></div>;
    }
    
  
    const isInCart = cart.some(p => p.id === product.id);

  return (
    <div className=''>
          <div className=' w-full px-3 lg:px-24  xl:px-64 pt-5 '>

       <div className=''>
      <div className='flex flex-col md:flex-row'>

        <div className='shadow-zinc-400 shadow-xl md:w-1/2 h-[300px] lg:h-[550px] rounded-xl bg-zinc-300'>
            <img src={product.url} alt="" className='h-full'/>
        </div>

        <div className='md:w-1/2 text-zinc-900 flex flex-col md:justify-around md:px-10'>
            <div><h1 className='font-inika mt-2 md:mt-0 text-xl md:text-2xl lg:text-3xl'>{product.title}</h1></div>

            <div className='font-sans py-5 md:py-0 flex flex-col mt-3 md:mt-0 gap-1 md:gap-2  border-b-[1px] border-white md:border-none'>
            <p onClick={handleScroll} className="text-zinc-700 text-sm cursor-pointer">See description</p>
            <p className='text-zinc-800 text-xl md:text-2xl lg:text-3xl text-bold'>${product.price}</p>
            <p className='text-sm'>{product.cardDescription}</p>
            </div>

            <div className='  md:text-xl mt-7 md:mt-0'>
            {isInCart 
            ? <RemoveFromCartButton prod={product} addButtonStyle="bg-red-600 rounded-lg px-4 py-1 text-xl text-zinc-300 border-[2px] border-transparent"/> 
            : <AddToCartButton prod={product} addButtonStyle="bg-black rounded-lg px-4 py-1 text-xl text-zinc-200 border-[2px] border-transparent transform-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black"/>}
            </div>
        </div>

      </div>

{/* Description section */}

      <div className=' w-full py-2 flex flex-col gap-3 mt-12'>
                        <div id='description' className='w-full h-fit bg-zinc-200 p-2 rounded-lg shadow-zinc-300 shadow-lg border-[1px] border-zinc-300'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleDescription}>
                                <p className='text-zinc-900'>Description</p>
                                {showDescription ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showDescription && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-bellefair'>{product.pageDescription}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit bg-zinc-200 shadow-zinc-300 shadow-lg p-2 rounded-lg border-[1px] border-zinc-300'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleUsage}>
                                <p className='text-zinc-900'>How to use</p>
                                {showUsage ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showUsage && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-bellefair'>{product.usage}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit bg-zinc-200 shadow-zinc-300 shadow-lg p-2 rounded-lg border-[1px] border-zinc-300'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-zinc-900 font-average' onClick={toggleIngredients}>
                                <p className='text-zinc-900'>Ingredients</p>
                                {showIngredients ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showIngredients && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-800 tracking-wider font-bellefair'>{product.ingredients}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

      
           </div>
    </div>
  )
}

export default ProductDetails
