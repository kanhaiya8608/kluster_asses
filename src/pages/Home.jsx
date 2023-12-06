import React from 'react'
import {storeData} from '../data'
import Carousel1 from '../components/Carousel/Carousel1'
import Hero from '../components/Hero'
function Home() {
  return (
    <div>
      <Hero/>
    <div className=' container mx-auto my-8 rounded-md'>
   <div className='bg-white p-8 rounded-md'>
   <h3 className='text-4xl font-bold'>Featured collection</h3>
   <Carousel1/>
    </div>
    </div>
    </div>
  )
}

export default Home