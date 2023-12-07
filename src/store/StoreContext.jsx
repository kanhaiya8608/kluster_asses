import { createContext, useReducer, useEffect } from 'react';
import { StoreReducer, initialState } from './reducer';
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  useEffect(() => {
    // Retrieve the cart data from local storage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({
        type: 'add',
        payload: parsedCart.products,
      });
      dispatch({
        type: 'update price',
        payload: parsedCart.total,
      });
    }
  }, []); // Empty dependency array ensures this effect runs only on mount

  const saveToLocalStorage = (products, total) => {
    // Save the cart data to local storage
    const cartData = {
      products,
      total,
    };
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const addToBasket = (product) => {
    const updatedBasket = [...state.products];
    const existingProduct = updatedBasket.find(
      (currentProduct) => currentProduct.name === product.name
    );

    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      updatedBasket.push({ ...product, count: 1 });
    }

    updatePrice(updatedBasket);

    dispatch({
      type: 'add',
      payload: updatedBasket,
    });

    saveToLocalStorage(updatedBasket, state.total);
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

    saveToLocalStorage(updatedBasket, state.total);
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

    saveToLocalStorage(updatedBasket, state.total);
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

  const removeAll = () => {
    updatePrice([]);
    dispatch({
      type: 'removeAll',
    });

    // Clear the cart data from local storage when removing all items
    localStorage.removeItem('cart');
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    updateCount,
    removeAll,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};