import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='p-4 bg-linear-to-r from-green-500 to-green-800 text-white'>
        {/* Logo */}
        <Link to="/admin/home">
            <h1 className='text-4xl flex items-center'>Merkato</h1>
        </Link>

    </header>
  )
}

export default Header