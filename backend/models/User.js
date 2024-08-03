const mongoose=require('mongoose')
const bycrpt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt=await bycrpt.genSalt(10)
    this.password=await bycrpt.hash(this.password,salt)
})
const User=mongoose.model('User',userSchema)
module.exports=User