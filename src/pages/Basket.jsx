// Basket.jsx
import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreContext';
import BasketProduct from '../components/BasketProduct';

function Basket() {
  const { products, total, removeAll } = useContext(StoreContext);

  const handleRemoveAll = () => {
    // Call the function to remove all items from the cart
    removeAll();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Your Basket</h3>

        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {products.map((product, i) => (
              <BasketProduct key={i} item={product} />
            ))}

            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">Total: ₹ {total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleRemoveAll}
              >
                Remove All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;
