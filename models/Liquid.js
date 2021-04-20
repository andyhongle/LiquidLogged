const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LiquidSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = Liquid = mongoose.model('liquid', LiquidSchema);