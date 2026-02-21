import React from 'react'
import IPhone from '../assets/iphone_17.png'

const OrderSummary = () => {
  const products = [
    { id: 1, title: 'IPhone 17', price: 90000, qty: 1, img: IPhone },
    { id: 2, title: 'IPhone 17 Pro', price: 120000, qty: 1, img: IPhone },
  ]

  const subtotal = products.reduce((acc, item) => acc + item.price * item.qty, 0)
  const shipping = 1500
  const tax = Math.round(subtotal * 0.15)
  const total = subtotal + shipping + tax

  const format = (n) => n.toLocaleString()

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-14 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Order Summary
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* Products */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Items</h2>

            <div className="space-y-6">
              {products.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain h-full w-full"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.qty}
                    </p>
                  </div>

                  <div className="font-semibold text-gray-900">
                    {format(item.price * item.qty)} Birr
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <p className="text-gray-700">Yonatan Fisuhu</p>
            <p className="text-gray-600 text-sm">Bole Sub City, Woreda 03</p>
            <p className="text-gray-600 text-sm">Addis Ababa, Ethiopia</p>
            <p className="text-gray-600 text-sm">+251 9XX XXX XXX</p>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-700">Cash on Delivery</p>
              <span className="text-sm text-green-600 font-medium">
                Selected
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - TOTAL */}
        <aside className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 h-max sticky top-6">
          <h2 className="text-xl font-semibold mb-6">Order Total</h2>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{format(subtotal)} Birr</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{format(shipping)} Birr</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (15%)</span>
              <span>{format(tax)} Birr</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-200 my-6"></div>

          <div className="flex justify-between items-baseline">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-gray-900">
              {format(total)} Birr
            </span>
          </div>

          <button className="w-full mt-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
            Confirm Order
          </button>
        </aside>

      </div>
    </div>
  )
}

export default OrderSummary