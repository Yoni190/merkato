import React from 'react'
import Products from './Products'

const ProductsContainer = ({ title, products }) => {
  return (
    <div className='max-w-7xl mx-auto md:px-10 mb-8'>
        <h2 className='text-2xl'>{title}</h2>

        <div className='flex gap-5'>
          {products.map((product, i) =>
            <Products
              key={i}
              product={product}
            />
          )}
        </div>
        

    </div>
  )
}

export default ProductsContainer