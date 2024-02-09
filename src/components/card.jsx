import PropTypes from 'prop-types';

export default function Card({ id, cathegory, title, url, price, cardDescription,   }){

    return(
        <div className=" border-[1px] border-zinc-900 h-[350px] w-[220px] rounded-2xl flex flex-col overflow-hidden">
                <div id='card-img-container'  className='h-[60%] border-b-[1px] rounded-2xl  border-black'>
                    <img src={url} alt="" className=' h-full transform duration-500 ease-in-out hover:scale-110'/>
                </div>
                <div className='px-2 py-2 flex flex-col gap-2'>
                <p className='text-sm font-sans font-bold text-zinc-300'>{title}</p>
                <p className='text-lg text-zinc-300 '>{price}</p>
               <button className='w-1/2 bg-black text-white text-sm rounded-base p-1 border-[1px] border-transparent transform-all duration-500 ease-in-out hover:bg-zinc-300 hover:text-black hover:border-black'>Add to cart</button>
                </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cathegory: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
   
};