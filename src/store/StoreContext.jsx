// StoreContext.js
import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = [...state.products];
    const existingProduct = updatedBasket.find(
      (currentProduct) => currentProduct.name === product.name
    );

    if (existingProduct) {
      // If product already exists, increase count
      existingProduct.count += 1;
    } else {
      // If it's a new product, add it with count 1
      updatedBasket.push({ ...product, count: 1 });
    }

    updatePrice(updatedBasket);

    dispatch({
      type: 'add',
      payload: updatedBasket,
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatePrice(updatedBasket);

    dispatch({
      type: 'remove',
      payload: updatedBasket,
    });
  };

  const updateCount = (product, newCount) => {
    const updatedBasket = state.products.map((p) =>
      p.name === product.name ? { ...p, count: newCount } : p
    );

    updatePrice(updatedBasket);

    dispatch({
      type: 'update count',
      payload: updatedBasket,
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.count;
    });

    dispatch({
      type: 'update price',
      payload: total,
    });
  };


  const removeAllOfType = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatePrice(updatedBasket);

    dispatch({
      type: 'remove',
      payload: updatedBasket,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    updateCount,
    removeAllOfType,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
