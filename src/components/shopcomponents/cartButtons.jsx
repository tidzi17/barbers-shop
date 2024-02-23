import React from 'react';
import { CartState } from '../../context/Context';

const AddToCartButton = ({ prod,  addButtonStyle  }) => {
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
      className={addButtonStyle}>
      {!prod.inStock ? 'Out of Stock' : 'Add to cart'}
    </button>
  );
};

const RemoveFromCartButton = ({ prod,  addButtonStyle  }) => {
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
      className={addButtonStyle}>
      Remove from cart
    </button>
  );
};

export { AddToCartButton, RemoveFromCartButton };