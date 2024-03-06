import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../context/Context";
import img from '../../assets/emptycart.png';
import Button from "../button";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

const CartItems = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      const [total, setTotal] = useState();
    
      useEffect(() => {
        const newTotal = cart.reduce(
          (acc, curr) => acc + parseFloat(curr.price) * curr.qty,
          0
        );
        setTotal(newTotal.toFixed(2)); 
      }, [cart]);
      
      
    

  console.log(total)

  return (
    <div className="w-full m-auto pt-10 pb-20 px-10 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-[70%] flex flex-col">
        <div className="w-full flex flex-col gap-4">
          {cart.map((prod) => (
            <div key={prod.id} className="border-y-[1px] border-zinc-700 px-1" >
              <div className="flex items-center md:justify-between h-[180px] md:h-[140px]">
                
                <div className="h-full">
                <a  href={`/products/${prod.cathegory}/${prod.id}`} className="flex items-center justify-center h-full mr-5 md:mr-0 ">
                  <img src={prod.url} alt={prod.title} className="h-[80%] " />
                  {/* className="w-[130px] md:w-[120px]"  */}
                </a>
                </div>

                <div className="flex flex-col md:flex-row gap-3 sm:min-w-[20%]  md:justify-between md:w-[90%] xl:w-[70%]">
                  
                <div className="md:min-w-[400px]">
                  <span className="text-zinc-800 ">{prod.title}</span>
                </div>

               
               <div className="text-zinc-800">${prod.price}</div>
               
              <div className="flex gap-4 items-center">
              <div >
               <select
                 as="select"
                 value={prod.qty}
                 className="border-[1px] border-zinc-700 w-14 xl:w-20 rounded-lg px-1"
                 onChange={(e) =>
                   dispatch({
                     type: "CHANGE_CART_QTY",
                     payload: {
                       id: prod.id,
                       qty: e.target.value,
                     },
                   })
                 }
               >
                 {[...Array(prod.inStock).keys()].map((x) => (
                   <option clas key={x + 1} >{x + 1}</option>
                 ))}
               </select>
               </div>
               <div >
                 <button
                   type="button"
                   onClick={() =>
                     dispatch({
                       type: "REMOVE_FROM_CART",
                       payload: prod,
                     })
                   }
                 >
                   <AiFillDelete fontSize="20px" className="text-zinc-800 transform-all ease-in-out duration-300 hover:scale-105 hover:text-red-900" />
                 </button>
               </div>
              </div>

               </div>
                </div>

              </div>
            
          ))}
        </div>
      </div>
      { cart.length > 0
      ?(


    
    <div className="w-full lg:w-[25%] h-[290px] md:h-[380px] lg:border-l-[1px] border-black mt-14 lg:mt-0  text-zinc-800 pl-2  flex flex-col justify-between ">

    <p className="text-lg md:text-xl font-sans font-medium pb-2">Your shopping cart: ({cart.length}) </p>
    <div className="border-y-[1px] border-zinc-800 py-4">
    <div className="w-full flex justify-between py-2">
    <span className="font-bold text-lg md:text-2xl" >Order total:</span><span> ${total}</span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span>Delivery cost:</span><span>$0.00</span>
    </div>
    </div>
       
    <div className="w-full flex justify-between ">
    <span className="font-bold text-xl md:text-2xl" >Total:</span><span> ${total}</span>
    </div>


      <div className="flex items-center justify-center">
      <button type="button" disabled={cart.length === 0}
        className="bg-zinc-400 p-2 rounded-lg font-medium text-base md:text-lg">
          Proceed to Checkout
        </button>
      </div>

      </div>
      )
    :(
      <div className="w-full m-auto">
        <div className="flex flex-col gap-10 ">
          <p className="text-lg md:text-2xl uppercase tracking-widest">Empty Cart!</p>
          <img src={img} alt="empty cart" className="w-44 h-44"/>
          <Link to="/products"><Button text="Explore our shop"/></Link>
        </div>
      </div>
    )
    }
     
    </div>
  );
};

export default CartItems;


