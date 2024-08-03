const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.DB_URL, {
      // This is still valid for backward compatibility but can be omitted in future versions
    });
    console.log(`Connected to MongoDB at ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectDB;
