import React from 'react'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 md:px-14 py-12'>
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Shipping Address
      </h1>

      <div className="max-w-3xl bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
        <form className="space-y-6">

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="f_name"
                id="f_name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="l_name"
                id="l_name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="tel_no"
              id="tel_no"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter phone number"
            />
          </div>

          {/* Sub City & Woreda */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Sub City
              </label>
              <input
                type="text"
                name="sub_city"
                id="sub_city"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter sub city"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Woreda
              </label>
              <input
                type="text"
                name="woreda"
                id="woreda"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Enter woreda"
              />
            </div>
          </div>

          {/* Submit */}
          <Link
            to={'/order-summary'}
            type="submit"
            className="w-full mt-4 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 hover:cursor-pointer flex justify-center"
          >
            Proceed
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Address