const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true,
    },
    l_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, red: 'Order'}],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'}],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart'},
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema)