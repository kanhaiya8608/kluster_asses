// Product.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store/StoreContext';

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div>
      <div>
        <img src={item.image} className='w-60' alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <Link to={`/product/${item.name}/${item.productId}`}>View Details</Link>
      <button onClick={handleAdd}>Add to Basket</button>
    </div>
  );
};

export default Product;
