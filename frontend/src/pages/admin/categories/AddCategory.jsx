import React from 'react'

const AddCategory = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex p-6">
      <div className="w-full bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Add New Category
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Create a new product category
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Category Name */}
          <div className="flex flex-col">
            <label 
              htmlFor="category_name" 
              className="text-sm font-medium text-gray-600 mb-2"
            >
              Category Name
            </label>
            <input
              type="text"
              name="category_name"
              id="category_name"
              placeholder="Enter category name"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-2">
              Category Image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="category_image"
              className="text-sm text-gray-600 
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-medium
                         file:bg-gray-100 file:text-gray-700
                         hover:file:bg-gray-200 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition duration-200 shadow-md"
          >
            Add Category
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddCategory