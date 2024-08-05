const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors');
const { protect } = require('./middleware/authMiddleware'); 


dotenv.config({ path: './config/config.env' });

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

const jwtSecret = process.env.JWT_SECRET;


app.use('/api/users', userRoutes);
app.use('/api/expenses', protect,expenseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
