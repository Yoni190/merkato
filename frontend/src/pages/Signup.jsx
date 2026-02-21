import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div>
        <div className='border rounded shadow-xl mx-auto max-w-lg p-5 mt-5 mb-5'>
            <h1 className='text-2xl font-semibold text-center mb-3'>Get Started</h1>
            <form action="" className='flex flex-col gap-5'>

                <input
                    type="text"
                    name="f_name"
                    id="f_name"
                    className='border outline-none p-3 rounded'
                    placeholder='First Name' />
                <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    className='border outline-none p-3 rounded'
                    placeholder='Last Name' />
                <input
                    type="email"
                    name="email"
                    id="email"
                    className='border outline-none p-3 rounded'
                    placeholder='Email Address' />
                <input
                    type="password"
                    name="password"
                    id="password"
                    className='border outline-none p-3 rounded'
                    placeholder='Password' />

                <button className='border p-3 bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 mb-3'>Sign Up</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup