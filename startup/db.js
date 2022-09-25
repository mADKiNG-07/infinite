const winston = require('winston');
const mongoose = require('mongoose');


module.exports = function () {
    const dbURI = process.env.DB;
    mongoose.connect(dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connected to MongoDB'));

}
