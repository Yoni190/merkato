import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductsContainer from '../components/ProductsContainer'
import Iphone from '../assets/iphone_17.png'
import Mac from '../assets/macbook.jpg'

const Home = () => {
  const dummyData = [{
    title: 'Featured Products',
    products: [
      {title: 'Iphone 17', price: 22900, img: Iphone},
      {title: 'Iphone 17', price: 22900, img: Iphone},
      {title: 'Iphone 17', price: 22900, img: Iphone},
      {title: 'Iphone 17', price: 22900, img: Iphone},
      {title: 'Iphone 17', price: 22900, img: Iphone},
    ]
  },
  {
    title: 'New Arrivals',
    products: [
      {title: 'Macbook Air 13"', price: 200000, img: Mac},
      {title: 'Macbook Air 13"', price: 200000, img: Mac},
      {title: 'Macbook Air 13"', price: 200000, img: Mac},
      {title: 'Macbook Air 13"', price: 200000, img: Mac},
      {title: 'Macbook Air 13"', price: 200000, img: Mac},
    ]
  },

]
  return (
    <div>
        <Hero />
        <Categories />
        {dummyData.map((data, i) => 
          <ProductsContainer
            key={i}
            title={data.title}
            products={data.products} />
        )}
    </div>
  )
}

export default Home