const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/route.js')


const server = express()
mongoose.connect('mongodb://127.0.0.1:27017/merkato')
        .then(() => console.log('MongoDB connected!'))
        .catch((err) => console.log(err))


server.use('/', routes)


server.listen(5000, () => console.log('Server started at port 5000'))