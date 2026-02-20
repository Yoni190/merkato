import React from 'react'

const Header = () => {
  return (
    <header className='grid grid-cols-3 p-4 bg-linear-to-r from-green-500 to-green-800 text-white'>
        {/* Logo */}
        <h1 className='text-4xl flex items-center'>
            Merkato
        </h1>

        {/* Search */}
        <div>
            <input
                type="text"
                name="search"
                id="search"
                placeholder='Type to search...' 
                className='p-2 w-full outline-none border'/>
        </div>

        <div className='flex justify-center gap-5'>
            <button
                className='border rounded py-2 px-3 bg-white text-black hover:cursor-pointer hover:bg-gray-200'>
                Sign Up
            </button>
            <button 
                className='border rounded py-2 px-4 bg-gray-900 text-white hover:cursor-pointer hover:bg-gray-700'>
                Log In
            </button>
        </div>
    </header>
  )
}

export default Header