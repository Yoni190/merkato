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

    const [errors, setErrors] = useState({})

    const register = async (e) => {
        e.preventDefault()
        setErrors({})

        const newErrors = {}

        if(!formData.f_name) {
            newErrors.f_name = 'Please enter your first name'
        }
        if(!formData.l_name) {
            newErrors.l_name = 'Please enter your last name'
        }
        if(!formData.email) {
            newErrors.email = 'Please enter your email address'
        }
        if(!formData.password) {
            newErrors.password = 'Please enter your password'
        }
        if(formData.password && formData.password.length < 8) {
            newErrors.password = 'Password length must be at least 8 characters'
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

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

                    {errors.f_name && <p className='text-red-600'>{errors.f_name}</p>}
                <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    className='border outline-none p-3 rounded'
                    placeholder='Last Name' 
                    value={formData.l_name}
                    onChange={(e) => setFormData({...formData, l_name: e.target.value})} />

                    {errors.l_name && <p className='text-red-600'>{errors.l_name}</p>}
                <input
                    type="email"
                    name="email"
                    id="email"
                    className='border outline-none p-3 rounded'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />

                    {errors.email && <p className='text-red-600'>{errors.email}</p>}
                <input
                    type="password"
                    name="password"
                    id="password"
                    className='border outline-none p-3 rounded'
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})} />

                    {errors.password && <p className='text-red-600'>{errors.password}</p>}

                <button className='border p-3 bg-green-600 text-white hover:cursor-pointer hover:bg-green-800 mb-3'>Sign Up</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup