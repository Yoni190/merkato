const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})