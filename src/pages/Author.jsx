import React from 'react'
import {storeData} from '../data'
import Authors from '../components/Authors'

function Author() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
   <div className='flex flex-col lg:grid lg:grid-cols'>
   <Authors storeData={storeData} />
    </div>
    </div>
  )
}

export default Author