const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    f_name: String,
    l_name: String,
    email: String,
    password: String,
    role: Number
})