const mongoose=require("mongoose")


const todoSchema = new mongoose.Schema({
    item:String,
    time:String,
    date:String,
    user:{
      ref:"user",
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      default:""
    }
  }) 

  const todoModel=mongoose.model('todos', todoSchema)
 
  module.exports={todoModel}