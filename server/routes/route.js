const express = require('express')
const userController = require('../controllers/UserController.js')

const router = express.Router()

router.post('/register', userController.register)

router.get('/test', (req, res) => {
    return res.json({ message: 'Test was successful'})
})

module.exports = router