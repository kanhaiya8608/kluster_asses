import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../store/StoreContext';
import { storeData } from '../data';
import Navbar from '../components/Navbar';


const ProductDescription = () => {
  const { id } = useParams();
  const { addToBasket } = useContext(StoreContext);

  // Fetch the product details based on the id (replace this with your actual data fetching)
  const productDetails = storeData.find((product) => product.productId === parseInt(id));

  if (!productDetails) {
    return <div>Loading...</div>; // Handle the case when the product is not found
  }
  const handleAddToBasket = () => {
    addToBasket(productDetails);
    alert('Product added to basket!');
  };

  return (
    <div>
        <Navbar/>
      <h2>Product Description Page</h2>
      <p>Product ID: {productDetails.productId}</p>
      <p>Name: {productDetails.name}</p>
      <p>Genre: {productDetails.genre}</p>
      <p>Author: {productDetails.author}</p>
      <p>Price: {productDetails.price}</p>
      <img src={productDetails.image} alt={productDetails.name} />
      <p>Description: {productDetails.description}</p>
      {/* Display other product details here */}
      <button onClick={handleAddToBasket}>Add to Basket</button>
    </div>
  );
};

export default ProductDescription;
