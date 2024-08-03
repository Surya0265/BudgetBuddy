const mongoose=require('mongoose')


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            newUrlParser:true,
            useUnifiedTopology:true
        }).then((con)=>{
            console.log("connected:"+con.connection.host)
        })
    }
    catch(error){
        console.log("database:",error)
    }
}
module.exports=connectDB