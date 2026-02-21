import React from 'react'
import Electronics from '../assets/electronics.avif'
import { Link } from 'react-router-dom'


const Slide = ({ category }) => {
  return (
    <Link to={'/category'} className='flex flex-col items-center'>
        <div className='border rounded-full w-24 h-24 flex items-center justify-center'>
            <img src={category.img} alt="electronics_image" className='w-full h-full border rounded-full' />
        </div>

        <h2 className='ml-2'>{category.title}</h2>
    </Link>
  )
}

export default Slide