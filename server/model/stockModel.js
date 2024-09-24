// models/Stock.js
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  itemNo: { type: String, required: true },
  itemDescription: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
