import React, { useState } from 'react'
import IPhone from '../assets/iphone_17.png'
import Products from '../components/Products'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const Category = () => {
    const products = [
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
        {title: 'IPhone 17', price: 90000, img: IPhone },
    ]

    const [value, setValue] = useState([0, 100])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-5'>
        <div>
            <h2 className='text-2xl mt-5'>Filter</h2>
            <div>
                {/* Price */}
                <div>
                    <p className='text-xl mt-3'>Price Range</p>
                    <Box sx={{ width: 175 }}>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </div>
                {/* Condition */}
                <div>
                    <p className='text-xl mt-3'>Condition</p>
                    <div>
                        <input type="checkbox" name="new" id="new" />
                        New
                    </div>
                    <div>
                        <input type="checkbox" name="new" id="new" />
                        Used
                    </div>
                    <div>
                        <input type="checkbox" name="new" id="new" />
                        Renewed
                    </div>
                </div>

                <button className='border rounded py-1 px-3 bg-green-600 text-white mt-3 hover:cursor-pointer hover:bg-green-800'>Filter</button>
            </div>
        </div>
        <div className='col-span-4'>
            <h1 className='text-2xl mb-5 mt-5'>Electronics</h1>
            <div className='grid grid-cols-3'>
                {products.map((product, i) =>
                    <Products
                        key={i}
                        product={product}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default Category