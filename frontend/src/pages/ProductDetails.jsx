import React, { useState } from 'react'
import IPhone from '../assets/iphone_17.png'

const ProductDetails = () => {
    const product = {
        title: 'IPhone 17',
        price: 90000,
        img: IPhone,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a quam lacus. Mauris quam leo, accumsan eu vehicula quis, ornare sit amet urna. Aenean pretium, elit a luctus aliquet, leo libero faucibus nulla, blandit tempus ligula purus sit amet massa.'
    }

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const [reviews, setReviews] = useState([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !comment || rating === 0) return

        const newReview = { name, comment, rating }
        setReviews([newReview, ...reviews])
        setName('')
        setComment('')
        setRating(0)
    }

    return (
        <div className='max-w-7xl mx-auto px-6 md:px-14 py-12 space-y-16'>
            {/* Product Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='bg-gray-50 rounded-3xl p-8 shadow-lg flex items-center justify-center'>
                    <img
                        src={product.img}
                        alt={product.title}
                        className='max-h-[500px] object-contain rounded-2xl transition-transform duration-300 hover:scale-105'
                    />
                </div>

                <div className='space-y-6'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
                        {product.title}
                    </h1>

                    <p className='text-gray-600 leading-relaxed text-lg'>
                        {product.description}
                    </p>

                    <p className='text-2xl font-semibold text-green-600'>
                        {product.price} Birr
                    </p>

                    <button className='mt-4 px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:cursor-pointer hover:shadow-lg transition-all duration-300'>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className='max-w-3xl'>
                <h2 className='text-2xl font-bold mb-6'>Customer Reviews</h2>

                {/* Review Form */}
                <form onSubmit={handleSubmit} className='space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md'>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Your Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                            placeholder='Enter your name'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>Your Rating</label>
                        <div className='flex gap-1'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type='button'
                                    key={star}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(null)}
                                    className={`text-2xl ${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>Your Review</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows='4'
                            className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                            placeholder='Write your review here...'
                        />
                    </div>

                    <button
                        type='submit'
                        className='px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition'>
                        Submit Review
                    </button>
                </form>

                {/* Review List */}
                <div className='mt-8 space-y-4'>
                    {reviews.length === 0 && (
                        <p className='text-gray-500'>No reviews yet. Be the first to review!</p>
                    )}

                    {reviews.map((review, index) => (
                        <div key={index} className='border border-gray-200 rounded-xl p-4 shadow-sm'>
                            <div className='flex justify-between items-center mb-2'>
                                <h3 className='font-semibold'>{review.name}</h3>
                                <div className='text-yellow-400'>
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                            <p className='text-gray-600'>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
