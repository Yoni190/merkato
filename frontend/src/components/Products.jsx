import React from 'react'

const Products = ({ product }) => {
  return (
   <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-64 mb-5">

  {/* Image Section */}
  <div className="bg-gray-100 flex items-center justify-center h-56 overflow-hidden">
    <img
      src={product.img}
      alt={product.title}
      className="h-44 object-contain transition-transform duration-300"
    />
  </div>

  {/* Content Section */}
  <div className="p-4 space-y-2">
    <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
      {product.title}
    </h3>

    <div className="flex items-center justify-between">
      <p className="text-lg font-semibold text-green-600">
        {product.price} Birr
      </p>

      <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
        Add
      </button>
    </div>
  </div>
</div>
  )
}

export default Products