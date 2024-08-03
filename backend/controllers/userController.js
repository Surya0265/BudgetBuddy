const User=require('../models/User')
const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


exports.registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const user=await User.create({name,email,password})
        res.status(201).json({message:"registered user "})

    }
    catch(error){
        res.status(400).json({message:"error user not created"})
    }


    }
exports.loginUser=async(req,res)=>{
    
        const {email,password}=req.body
        try{

            const user=await User.findOne({email})
            if(user&&(await bycrypt.compare(password,user.password))){
                const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
                res.json({token})
            }
            else{
                res.status(400).json({error:'invalid'})
            }
        }
            catch(error){
               res.status(400).json({error:error.message})
            }
    };
