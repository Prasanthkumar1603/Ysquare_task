const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pk16032002:NQgRCyMqdH2RoVTR@thambi.zfpsvw7.mongodb.net/Thambi');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
