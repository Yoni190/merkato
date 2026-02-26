const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

exports.register = async (req, res) => {
    try {
        const { f_name, l_name, email, password } = req.body

        if(!f_name || !l_name || !email || !password) {
            return res.status(400).json({ message: 'Missing Data!' })
        }

        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({ message: 'Email already exists' })
        }

        

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            f_name,
            l_name,
            email,
            password: hashedPassword,
            role: 1
        })

        return res.status(200).json({ message: 'User registered successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error}` })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing Data!' })
        }

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ message: 'User not registered' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ message: 'Wrong Credentials' })
        }

        return res.status(200).json({ message: 'User logged in successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error}` })
    }
}