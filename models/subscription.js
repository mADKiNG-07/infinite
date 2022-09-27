const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var subscriptionSchema = new Schema({}, { strict: false });

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;