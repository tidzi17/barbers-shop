import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.items) || [];

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className='w-[50vw] h-[50vh] bg-gray-400 text-white'>
      <h1>Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button>Remove</button>
        </div>
      ))}
      <p>Total: ${calculateTotalPrice(cartItems)}</p>
    </div>
  );
};

export default CartItems;


