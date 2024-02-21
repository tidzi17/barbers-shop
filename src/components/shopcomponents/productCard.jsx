import { CartState } from "../../context/Context";
import { AddToCartButton, RemoveFromCartButton } from "./cartButtons";

const ProductCard = ( { prod } ) => {

    const { state: { cart }, dispatch, } = CartState();
    return(
        <div className="border-[1px] border-zinc-900 min375:w-[140px] min375:h-[220px] h-[250px] w-[160px]  md:h-[300px] md:w-[190px] xl:h-[350px] xl:w-[220px] rounded-2xl flex flex-col overflow-hidden ">
               <a  href={`/products/${prod.cathegory}/${prod.id}`}   className='product-img-container h-[50%] md:h-[60%] border-b-[1px] rounded-2xl  border-black'>
                <img src={prod.url} alt="" className=' h-full transform duration-500 ease-in-out hover:scale-110'/>
                </a>
                <div className='px-2 py-2 flex flex-col justify-between h-1/2 md:[40%]'>
                <p className='min375:text-[0.6rem] text-xs md:text-sm font-sans font-bold text-zinc-300'>{prod.title}</p>
                <p className='text-base md:text-lg text-zinc-300 '>{prod.price}</p>


              <div className="flex ">
              {
            cart.some(p => p.id === prod.id) 
            ? (
        <RemoveFromCartButton prod={prod}/>
            )
            : (
            <AddToCartButton prod={prod}/>
            )
        }
                
              </div>

                </div>
        </div>
    )
}

export default ProductCard;

