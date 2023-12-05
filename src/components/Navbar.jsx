import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";


function Navbar() {
  return (
    <div className='flex flex-row justify-around bg-white text-lg font-medium p-6'>
    <Link id='logo' to="/">Bookswaala</Link>
    <Link to="/product">Books</Link>
    <Link to="/author">Authors</Link>
    <Link className='flex justify-between' to="/basket"><BsCart4 className='mx-4' size={24}/>
Basket</Link>
    </div>
  )
}

export default Navbar