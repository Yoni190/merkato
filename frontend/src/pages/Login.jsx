import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div>
        <div className='border rounded shadow-xl mx-auto max-w-lg p-5 mt-5 mb-5'>
            <h1 className='text-2xl font-semibold text-center mb-3'>Welcome Back</h1>
            <form action="" className='flex flex-col gap-5'>
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

                <button className='border p-3 bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 mb-3'>Login</button>
            </form>
            <p className='text-center'>Don't have an account? <Link to="/signup" className='underline text-blue-500'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login