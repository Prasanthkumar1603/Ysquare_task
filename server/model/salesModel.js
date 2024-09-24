// models/Sale.js
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  itemNo: { type: String, required: true },
  itemDescription: { type: String, required: true },
  price: { type: Number, required: true },
  weeklySales: { type: [Number], required: true },
  date: { type: Date, default: Date.now }
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
