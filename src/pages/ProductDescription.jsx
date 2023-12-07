import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../store/StoreContext';
import { storeData } from '../data';

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
    <div className="flex min-h-screen container mx-auto">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl md:text-6xl py-2 font-semibold mb-4">{productDetails.name}</h2>
        <div className="grid grid-cols-1 content-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display image on the left for desktop and on top for mobile */}
          <div className="flex flex-col items-center">
            <img src={productDetails.image} alt={productDetails.name} className="rounded-md w-full h-84 mb-4" />
          </div>
          <div className="flex flex-col text-base md:text-lg justify-center col-span-2 lg:col-span-2">
            <p className="text-gray-600 mb-2"><span className='font-bold'>ID:</span> {productDetails.productId}</p>
            <p className="mb-2"><span className='font-bold'>Genre:</span> {productDetails.genre}</p>
            <p className="mb-2"><span className='font-bold'>Author:</span> {productDetails.author}</p>
            <p className="mb-2"><span className='font-bold'>Price:</span> {productDetails.price}</p>
            <p className="mb-4 text-justify"><span className='font-bold'>Description:</span> {productDetails.description}</p>
            <button
  onClick={handleAddToBasket}
  className="w-full sm:w-60 ml-{n2} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
