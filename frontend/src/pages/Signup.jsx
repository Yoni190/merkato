import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        email: '',
        password: ''
    })

    const register = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://127.0.0.1:5000/register', formData)
            console.log(res.data.message)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
  return (
    <div>
        <div className='border rounded shadow-xl mx-auto max-w-lg p-5 mt-5 mb-5'>
            <h1 className='text-2xl font-semibold text-center mb-3'>Get Started</h1>
            <form onSubmit={register} className='flex flex-col gap-5'>

                <input
                    type="text"
                    name="f_name"
                    id="f_name"
                    className='border outline-none p-3 rounded'
                    placeholder='First Name'
                    value={formData.f_name}
                    onChange={(e) => setFormData({...formData, f_name: e.target.value})} />
                <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    className='border outline-none p-3 rounded'
                    placeholder='Last Name' 
                    value={formData.l_name}
                    onChange={(e) => setFormData({...formData, l_name: e.target.value})} />
                <input
                    type="email"
                    name="email"
                    id="email"
                    className='border outline-none p-3 rounded'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input
                    type="password"
                    name="password"
                    id="password"
                    className='border outline-none p-3 rounded'
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})} />

                <button className='border p-3 bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 mb-3'>Sign Up</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup