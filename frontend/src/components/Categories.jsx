import React from 'react'
import Slide from './Slide'
import Electronics from '../assets/electronics.avif'
import Home from '../assets/home.jpg'
import Books from '../assets/books.jpg'
import Personal from '../assets/personal.jpg'
import Clothes from '../assets/clothes.avif'


const Carousel = () => {
  const categories = [
    {img: Electronics, title: 'Electronics'},
    {img: Home, title: 'Home'},
    {img: Books, title: 'Books'},
    {img: Personal, title: 'Personal Care'},
    {img: Clothes, title: 'Fashion'},
  ]
  return (
    <div className='max-w-7xl mx-auto md:px-10 mb-4'>
        <div className='flex justify-between'>
                {categories.map((x, i) =>
                    <Slide
                      key={i}
                      category={categories[i]} />
                )}
                
            </div>
    </div>
  )
}

export default Carousel