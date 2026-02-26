const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
})

module.exports = mongoose.model('Product', ProductSchema)