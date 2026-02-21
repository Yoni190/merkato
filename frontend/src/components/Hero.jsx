import React from 'react'
import Iphone from '../assets/iphone_17.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 bg-linear-to-r from-green-500 to-green-800 text-white max-w-7xl mx-auto md:px-14 mt-4 mb-4 border rounded-xl'>

        <div className='p-15'>
            <h1 className='text-4xl font-semibold'>Discover, Shop, <br />Connect. All in One Place</h1>
            <button className='border rounded-4xl py-2 px-3 mt-4 bg-linear-to-r from-green-600 to-green-900 hover:cursor-pointer'>Shop Now</button>
        </div>

        <div>
            <img src={Iphone} alt="" width={500} />
        </div>
    </div>
  )
}

export default Hero