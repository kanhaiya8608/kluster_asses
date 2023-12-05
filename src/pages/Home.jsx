import React from 'react'
import {storeData} from '../data'
import Authors from '../components/Authors'
function Home() {
  return (
    <div>
   <div className='container mx-auto flex flex-col lg:grid lg:grid-cols'>
   <Authors storeData={storeData} />
    </div>
    </div>
  )
}

export default Home