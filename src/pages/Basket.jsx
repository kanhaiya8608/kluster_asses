import React, { useContext } from 'react'
import { StoreContext } from '../store/StoreContext'
import BasketProduct from '../components/BasketProduct';
import Navbar from '../components/Navbar';
function Basket() {
  const{products, total, removeAllOfType}= useContext(StoreContext);

  const handleRemoveAll = () => {
    // Call the function to remove all occurrences of all product types from the cart
    products.forEach((product) => removeAllOfType(product));
  };
  return (
    <div>
      <Navbar/>
<h3>Your Basket</h3>

<p>Total :{total}</p>    
{products.map((product,i)=>
<BasketProduct
key={i}
item={product}/>
)}
 <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={handleRemoveAll}
      >
        Remove All
      </button>
</div>
  )
}

export default Basket