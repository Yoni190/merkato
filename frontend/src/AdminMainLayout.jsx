import React from 'react'
import Header from './components/admin/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/admin/Sidebar'


const AdminMainLayout = () => {
  return (
    <div>
        <Header />

        <div className="grid grid-cols-5">
            <Sidebar />
            <main className="flex-grow col-span-4">
                <Outlet />
            </main>
        </div>


    </div>
  )
}

export default AdminMainLayout