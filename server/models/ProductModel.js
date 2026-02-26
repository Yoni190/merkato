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
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    favorites: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Favorite'}],
})

module.exports = mongoose.model('Product', ProductSchema)