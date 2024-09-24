const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  
const Sale = require('./model/salesModel');
const Customer = require('./model/customersModel');
const Stock = require('./model/stockModel');

const app = express();
app.use(express.json());
app.use(cors());

 connectDB();

// 1. GET Today's Sales
app.get('/sales/today', async (req, res) => {
  const today = new Date();
  try {
    const sales = await Sale.find({
      date: { $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()) }
    });
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. GET Sale Details
app.get('/sales/details', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. GET Stock
app.get('/stock', async (req, res) => {
  try {
    const stock = await Stock.find();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. GET Customers
app.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. POST - Add new Sale
app.post('/sales', async (req, res) => {
  const { itemNo, itemDescription, price, weeklySales } = req.body;
  try {
    const newSale = new Sale({
      itemNo,
      itemDescription,
      price,
      weeklySales,
    });
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 6. POST - Add new Customer
app.post('/customers', async (req, res) => {
  const { name, type } = req.body; // 'New' or 'Old'
  try {
    const newCustomer = new Customer({
      name,
      type,
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 7. POST - Add new Stock Item
app.post('/stock', async (req, res) => {
  const { itemNo, itemDescription, quantity, price } = req.body;
  try {
    const newStock = new Stock({
      itemNo,
      itemDescription,
      quantity,
      price,
    });
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

 app.listen(5000, () => console.log('Server running on port 5000'));
