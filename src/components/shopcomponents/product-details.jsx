import React, { useState }  from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ProductDetails() {
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

    const { id } = useParams();
    const product = products.products.find(product => product.id === id);

    if (!product) {
        return <div><p className='text-white text-8xl'>Product not found</p></div>;
    }

  return (
    <div className=''>
          <div className=' w-full px-3 lg:px-24  xl:px-64 pt-5 pb-28'>

       <div className=''>
      <div className='flex flex-col md:flex-row'>

        <div className='product-img-container md:w-1/2 h-[300px] lg:h-[550px] rounded-xl'>
            <img src={product.url} alt="" className='h-full'/>
        </div>

        <div className='md:w-1/2 text-white flex flex-col md:justify-around md:px-10'>
            <div><h1 className='font-inika mt-2 md:mt-0 text-xl md:text-2xl lg:text-3xl'>{product.title}</h1></div>

            <div className='font-sans py-5 md:py-0 flex flex-col mt-3 md:mt-0 gap-1 md:gap-2  border-b-[1px] border-white md:border-none'>
            <p onClick={handleScroll} className="text-zinc-700 text-sm cursor-pointer">See description</p>
            <p className='text-xl md:text-2xl lg:text-3xl'>{product.price}</p>
            <p className='text-sm'>{product.cardDescription}</p>
            </div>

            <div className='flex gap-8  md:text-xl mt-7 md:mt-0'> 
            <p className='text-lg md:text-2xl'>-   1   +</p>
            <button className='bg-white text-black px-1 md:px-3 py-1 rounded-lg md:text-lg text-base'>Add to cart</button>
            </div>
        </div>

      </div>

{/* Description section */}

      <div className=' w-full py-2 flex flex-col gap-3 mt-12'>
                        <div id='description' className='w-full h-fit bg-zinc-900 p-2 rounded-lg'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-white font-average' onClick={toggleDescription}>
                                <p>Description</p>
                                {showDescription ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showDescription && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-400 tracking-wider font-bellefair'>{product.pageDescription}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit bg-zinc-900 p-2 rounded-lg'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-white font-average' onClick={toggleUsage}>
                                <p>How to use</p>
                                {showUsage ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showUsage && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-400 tracking-wider font-bellefair'>{product.usage}</p>
                                </div>
                            )}
                        </div>


                        <div className='w-full h-fit bg-zinc-900 p-2 rounded-lg'>
                            <div className='flex justify-between items-center text-base md:text-xl lg:text-2xl text-white font-average' onClick={toggleIngredients}>
                                <p>Ingredients</p>
                                {showIngredients ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            {showIngredients && (
                                <div className='my-5'>
                                    <p className='text-sm md:text-base lg:text-lg text-zinc-400 tracking-wider font-bellefair'>{product.ingredients}</p>
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
