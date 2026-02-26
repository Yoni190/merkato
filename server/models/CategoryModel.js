const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
}, { timestamps: true })

module.exports = mongoose.model('Category', CategorySchema)