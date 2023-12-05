// BasketProduct.js
import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreContext';

const BasketProduct = ({ item }) => {
  const { removeFromBasket, updateCount } = useContext(StoreContext);

  const handleIncreaseCount = () => {
    const newCount = (item.count ?? 0) + 1;
    updateCount(item, newCount);
  };

  const handleDecreaseCount = () => {
    const newCount = Math.max((item.count ?? 1) - 1, 1); // Ensure count doesn't go below 1
    updateCount(item, newCount);
  };

  const handleRemove = () => {
    removeFromBasket(item);
  };

  const handleRemoveAll = () => {
    removeAllOfType(item);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      <div className="flex items-center">
        <img
          className="mr-4"
          src={item.image}
          alt={item.name}
          style={{ width: '100px', height: '100px' }}
        />
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
    
      <div className="flex items-center">
        <p className="mr-4">Count: {item.count ?? 1}</p>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleIncreaseCount}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;
