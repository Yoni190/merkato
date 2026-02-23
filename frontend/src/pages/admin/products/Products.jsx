import React from 'react'
import IPhone from '../../../assets/iphone_17.png'
import { Link } from 'react-router-dom'

const Products = () => {
     const products = [
    { id: 1, name: "IPhone 17", quantity: 100, img: IPhone },
    { id: 2, name: "IPhone 17", quantity: 100, img: IPhone },
    { id: 3, name: "IPhone 17", quantity: 100, img: IPhone },
  ]

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Products
            </h2>
            <p className="text-sm text-gray-500">
              Manage your products
            </p>
          </div>

          <Link to={'/admin/add-product'} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
            Add
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <img src={product.img} alt={`${product.name} image`} width={100} />
                  </td>
                  <td className="px-6 py-4">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  )
}

export default Products