const Expense=require('../models/Expense')

exports.addExpense=async(req,res)=>{
    const {amount,category}=req.body
    try{
        const expense=await Expense.create({
            user:req.user.id,
            amount,category
        })
        res.status(201).json(expense)
    }

    catch(error){
        
        res.status(400).json({error:error.message})
    }
}
exports.getExpenses=async(req,res)=>{
    try{
        const expenses= await Expense.find({user:req.user.id})
        res.json(expenses)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}