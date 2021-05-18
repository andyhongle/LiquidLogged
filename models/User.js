const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dailyGoal: {
        type: Number,
        default: 2000
    }
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);