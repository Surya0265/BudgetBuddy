const express=require('express')
const {addExpense,getExpense}=require('../controllers/expenseController')
const {protect}=require('../middleware/authMiddleware')