const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
    }
    // country
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;