const express = require('express')
const mongoose = require('mongoose')


const server = express()
mongoose.connect('mongodb://127.0.0.1:27017/merkato')
        .then(() => console.log('MongoDB connected!'))
        .catch((err) => console.log(err))


server.listen(5000, () => console.log('Server started at port 5000'))