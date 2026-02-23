import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  const categories = [
    { id: 1, name: "Electronics", products: 50 },
    { id: 2, name: "Home", products: 50 },
    { id: 3, name: "Fashion", products: 32 },
  ]

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Categories
            </h2>
            <p className="text-sm text-gray-500">
              Manage your product categories
            </p>
          </div>

          <Link to={'/admin/add-category'} className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
            Add
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm tracking-wider">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Products</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">
                    {category.name}
                  </td>
                  <td className="px-6 py-4">
                    {category.products}
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

export default Categories