const express = require('express');
const dotenv = require('dotenv');

// Load config.env file
dotenv.config({ path: './config/config.env' });

const app = express();

const jwtSecret = process.env.JWT_SECRET;
console.log(`JWT Secret: ${jwtSecret}`);

// Your routes and middleware here

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
