import React from 'react';
import { CartState } from '../../context/Context';

const AddToCartButton = ({ prod }) => {
  const { dispatch } = CartState();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: prod,
    });
  };

  return (
    <button
      onClick={addToCart}
      disabled={!prod.inStock}
      className='w-2/3 md:w-1/2 bg-black text-white text-xs md:text-sm rounded-base p-1 border-[1px] border-transparent transform-all duration-500 ease-in-out hover:bg-zinc-300 hover:text-black hover:border-black'>
      {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
    </button>
  );
};

const RemoveFromCartButton = ({ prod }) => {
  const { dispatch } = CartState();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: prod,
    });
  };

  return (
    <button
      onClick={removeFromCart}
      className='w-2/3 md:w-1/2 bg-white text-black text-xs md:text-sm rounded-base p-1 border-[1px] border-transparent transform-all duration-500 ease-in-out hover:bg-zinc-300 hover:text-black hover:border-black'>
      Remove from cart
    </button>
  );
};

export { AddToCartButton, RemoveFromCartButton };