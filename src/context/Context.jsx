import React, { createContext, useContext, useReducer, useState, useEffect } from "react";
import productsData from '../data/products.json';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
  const cartFromStorage = localStorage.getItem('cart');
  const initialState = {
    products: productsData,
    cart: cartFromStorage ? JSON.parse(cartFromStorage) : [], 
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart)); 
  }, [state.cart]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

