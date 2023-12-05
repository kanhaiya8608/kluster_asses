import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from '../store/StoreContext';

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
    toast.success(`${item.name} added to basket!`, {
      position: 'top-right',
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-white p-4 mb-4 flex flex-col shadow-md rounded-md">
      <div className="mb-4">
        <div className="flex flex-col items-center">
          <img src={item.image} className="h-80 object-cover" alt={item.name} />
        </div>
        <div className='grid mt-4'>
          <div>
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
            <p className="text-gray-700 font-bold">
              <span className='text-black'>₹</span> {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
      <div className='flex items-center justify-between mt-2'>
        <Link
          to={`/product/${encodeURIComponent(item.name)}/${item.productId}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Basket
        </button>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Product;
