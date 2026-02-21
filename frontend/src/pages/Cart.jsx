import React, { useState } from 'react'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import IPhone from '../assets/iphone_17.png'
import { Link } from 'react-router-dom'

const Cart = () => {
  // initial products (you provided these)
  const initial = [
    { id: 1, title: 'IPhone 17', price: 90000, img: IPhone, qty: 1 },
    { id: 2, title: 'IPhone 17 Pro', price: 120000, img: IPhone, qty: 1 },
    { id: 3, title: 'IPhone 17', price: 90000, img: IPhone, qty: 1 },
    { id: 4, title: 'IPhone 17 Pro', price: 120000, img: IPhone, qty: 1 },
    { id: 5, title: 'IPhone 17', price: 90000, img: IPhone, qty: 1 },
    { id: 6, title: 'IPhone 17 Pro', price: 120000, img: IPhone, qty: 1 },
  ]

  const [products, setProducts] = useState(initial)

  const changeQty = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
    )
  }

  const removeItem = (id) => setProducts((prev) => prev.filter((p) => p.id !== id))

  const subtotal = products.reduce((acc, p) => acc + p.price * p.qty, 0)
  const shipping = products.length > 0 ? 1200 : 0
  const tax = Math.round(subtotal * 0.15) // pretend 15% VAT
  const total = subtotal + shipping + tax

  const format = (n) => n.toLocaleString() // simple formatting

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-14 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      {products.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 shadow text-center">
          <p className="text-gray-600">Your cart is empty — add something nice ✨</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center p-3">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="object-contain h-full w-full"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">Model: {product.title.split(' ').slice(-1)}</p>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1">
                      <button
                        onClick={() => changeQty(product.id, -1)}
                        aria-label="Decrease"
                        className="p-2 rounded-md hover:bg-gray-100"
                      >
                        <FaMinus className="text-sm text-gray-600" />
                      </button>

                      <div className="w-10 text-center font-medium">{product.qty}</div>

                      <button
                        onClick={() => changeQty(product.id, 1)}
                        aria-label="Increase"
                        className="p-2 rounded-md hover:bg-gray-100"
                      >
                        <FaPlus className="text-sm text-gray-600" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="text-lg font-bold text-green-600">{format(product.price)} Birr</div>
                      <div className="text-sm text-gray-400">Total: {format(product.price * product.qty)} Birr</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-2 rounded-md hover:bg-gray-100"
                    title="Remove"
                  >
                    <FaTrash className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="rounded-2xl bg-white p-6 shadow-md h-max sticky top-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>{format(subtotal)} Birr</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `${format(shipping)} Birr`}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Tax (15%)</span>
              <span>{format(tax)} Birr</span>
            </div>

            <div className="border-t border-dashed border-gray-200 my-4" />

            <div className="flex justify-between items-baseline">
              <div>
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-2xl font-bold text-gray-900">{format(total)} Birr</div>
              </div>
            </div>

            <div className='flex flex-col'>
                <Link className="w-full mt-6 px-4 py-3 bg-green-600 text-white rounded-xl font-semibold shadow hover:bg-green-700 transition hover:cursor-pointer text-center">
                  Checkout
                </Link>
                <Link to={'/'} className="w-full mt-3 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition hover:cursor-pointer text-center">
                  Continue shopping
                </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart