const mongoose = require('mongoose')

const OrderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity: Number,
    priceAtPurchase: Number
})

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    items: [OrderItemSchema],
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema)