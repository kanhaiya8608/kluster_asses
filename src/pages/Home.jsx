import React from 'react'
import Navbar from '../components/Navbar'
import {storeData} from '../data'
import Product from '../components/Product'
function Home() {
  return (
    <div>
   <Navbar/>
   <div className='flex flex-col lg:grid lg:grid-cols'>
   {storeData.map((item,i)=>
    <Product key={i} item={item}/>
   
    )}
    </div>
    </div>
  )
}

export default Home