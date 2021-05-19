const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timeElapsed = Date.now() - 7 * 60 * 60 * 1000
const today = new Date(timeElapsed)
currentDate = today.toISOString().split('T')[0]

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
        default: () => Date.now() - 7 * 60 * 60 * 1000
    },
    date: { 
        type: String,
        default: currentDate
    }
});
module.exports = Liquid = mongoose.model('liquid', LiquidSchema);