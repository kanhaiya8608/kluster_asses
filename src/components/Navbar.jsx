import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium'>
    <Link to="/product">Home</Link>
    <Link to="/basket">Basket</Link>
    </div>
  )
}

export default Navbar