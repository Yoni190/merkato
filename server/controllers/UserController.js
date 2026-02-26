const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

exports.register = async (req, res) => {
    try {
        const { f_name, l_name, email, password, role } = req.body

        if(!f_name || !l_name || !email || !password || !role) {
            return res.status(400).json({ error: 'Missing Data!' })
        }

        const existingUser = await User.findOne({ email })
        if(existingUser) {
            return res.status(400).json({ error: 'Email already exists' })
        }

        

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            f_name,
            l_name,
            email,
            password: hashedPassword,
            role
        })

        return res.status(200).json({ message: 'User registered successfully!' })
    } catch (error) {
        return res.status(500).json({ error: `Error: ${error}` })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Missing Data!' })
        }

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ error: 'User not registered' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ error: 'Wrong Credentials' })
        }

        return res.status(200).json({ message: 'User logged in successfully!' })
    } catch (error) {
        return res.status(500).json({ error: `Error: ${error}` })
    }
}