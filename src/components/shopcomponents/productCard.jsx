import PropTypes from 'prop-types';

export default function ProductCard({ id, cathegory, title, url, price, cardDescription,   }){

    return(
        <div className="border-[1px] border-zinc-900 min375:w-[140px] min375:h-[220px] h-[250px] w-[160px]  md:h-[300px] md:w-[190px] xl:h-[350px] xl:w-[220px] rounded-2xl flex flex-col overflow-hidden">

                <a href={`/products/${id}`}   className='product-img-container h-[50%] md:h-[60%] border-b-[1px] rounded-2xl  border-black'>
                <img src={url} alt="" className=' h-full transform duration-500 ease-in-out hover:scale-110'/>
                </a>
                <div className='px-2 py-2 flex flex-col justify-between h-1/2 md:[40%]'>
                <p className='min375:text-[0.6rem] text-xs md:text-sm font-sans font-bold text-zinc-300'>{title}</p>
                <p className='text-base md:text-lg text-zinc-300 '>{price}</p>
                <button className='w-2/3 md:w-1/2 bg-black text-white text-xs md:text-sm rounded-base p-1 border-[1px] border-transparent transform-all duration-500 ease-in-out hover:bg-zinc-300 hover:text-black hover:border-black'>Add to cart</button>

                </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    cathegory: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
   
};