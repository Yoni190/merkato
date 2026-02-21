import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OrderSuccessful = () => {
  const orderNumber = "ORD-2026-1042"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-16">
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-6 rounded-full">
            <FaCheckCircle className="text-green-600 text-6xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been confirmed and is being processed.
        </p>

        {/* Order Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Order Number</span>
            <span className="font-semibold text-gray-900">{orderNumber}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="font-medium text-gray-900">2–4 Business Days</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-medium text-gray-900">Cash on Delivery</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={'/'} className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300">
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  )
}

export default OrderSuccessful