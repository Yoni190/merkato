import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <ul className='text-lg pt-5 bg-zinc-200 border h-screen flex flex-col items-center gap-5'>
            <li>
              <Link to={'/admin/home'}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/admin/categories'}>Categories</Link>
            </li>
            <li>
              <Link to={'/admin/products'}>Products</Link>
            </li>
            <li>Users</li>
            <li>
              <Link to={'/admin/settings'}>Settings</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar