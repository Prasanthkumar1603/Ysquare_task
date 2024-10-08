// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['New', 'Old'], required: true },
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
