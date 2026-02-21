import React from 'react'
import { FaHeart } from "react-icons/fa";
import IPhone from '../assets/iphone_17.png'

const Favorites = () => {
    const products = [
        {
            title: 'IPhone 17',
            price: 90000,
            img: IPhone,
        },
        {
            title: 'IPhone 17 Pro',
            price: 120000,
            img: IPhone,
        },
        {
            title: 'IPhone 17',
            price: 90000,
            img: IPhone,
        },
        {
            title: 'IPhone 17 Pro',
            price: 120000,
            img: IPhone,
        },
        {
            title: 'IPhone 17',
            price: 90000,
            img: IPhone,
        },
        {
            title: 'IPhone 17 Pro',
            price: 120000,
            img: IPhone,
        },
    ]

    return (
        <div className='max-w-7xl mx-auto px-6 md:px-14 py-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-10'>
                Your Favorites
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {products.map((product, i) => (
                    <div
                        key={i}
                        className='group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'
                    >
                        <div className='relative bg-gray-50 p-6 flex items-center justify-center'>
                            <img
                                src={product.img}
                                alt={product.title}
                                className='h-48 object-contain transition-transform duration-300 group-hover:scale-105'
                            />

                            <button className='absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:scale-110 transition'>
                                <FaHeart className='text-red-500 text-lg' />
                            </button>
                        </div>

                        <div className='p-6 space-y-2'>
                            <h2 className='text-lg font-semibold text-gray-800'>
                                {product.title}
                            </h2>

                            <h3 className='text-xl font-bold text-green-600'>
                                {product.price} Birr
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites