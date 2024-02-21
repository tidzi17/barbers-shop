import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../context/Context";


const CartItems = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      const [total, setTotal] = useState();
    
      useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.qty, 0)
        );
      }, [cart]);
      
      
    

  console.log(total)

  return (
    <div className="w-11/12 m-auto ">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-4">
          {cart.map((prod) => (
            <div key={prod.id} >
              <div className="flex items-center justify-between">
                <div >
                  <img src={prod.url} alt={prod.title} className="w-[100px]" />
                </div>
                <div >
                  <span className="text-white">{prod.title}</span>
                </div>
                <div className="text-white">${prod.price}</div>
               
                <div >
                <select
                  as="select"
                  value={prod.qty}
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
                    <option clas key={x + 1}>{x + 1}</option>
                  ))}
                </select>
                </div>
                <div >
                  <button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      { cart.length > 0
      ?(
        <div className=" border-2 border-black text-white">
        <span className="title">Subtotal ({cart.length}) items</span>
        <p style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</p>
        <button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
      )
    :(
      <div>
        <p className="text-7xl text-white">Cart is Empty</p>
      </div>
    )
    }
     
    </div>
  );
};

export default CartItems;


