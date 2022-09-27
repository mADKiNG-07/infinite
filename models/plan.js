const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var planSchema = new Schema({}, { strict: false });

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;