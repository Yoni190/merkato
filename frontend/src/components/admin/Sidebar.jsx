import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <ul className='text-lg pt-5 bg-zinc-200 border h-screen flex flex-col items-center gap-5'>
            <li>Dashboard</li>
            <li>Categories</li>
            <li>Products</li>
            <li>Users</li>
            <li>Settings</li>
        </ul>
    </div>
  )
}

export default Sidebar