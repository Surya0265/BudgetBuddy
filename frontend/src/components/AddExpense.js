import React from "react";
import { useState } from "react";
import axios from "axios";



const AddExpense=()=>{




const [amount,setAmount]=useState('')
const [category,setCategory]=useState('')


const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await axios.post('/api/expense',{amount,category},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}` }})
    console.log(res.data)
}


return(

     <div className="add-expense">
        <form onSubmit={handleSubmit}>
            <input type='number'value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" required/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                <option value=''>Select Category</option> 
                <option value='food'>Food</option>
                <option value='shopping'>shopping</option>
                <option value='rent'>Rent</option>
                <option value='groceries'>Groceries</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
     </div>



)
}