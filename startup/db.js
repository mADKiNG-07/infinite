const winston = require('winston');
const mongoose = require('mongoose');
require('dotenv').config();


module.exports = function () {
    const dbURI = process.env.DB;
    mongoose.connect(dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connected to MongoDB'));

}
