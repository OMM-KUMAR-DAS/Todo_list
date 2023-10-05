const mongoose = require("mongoose");


const todoschem=new mongoose.Schema(
    {
        title:{type:String,required:true,maxlength:60},

        disc:{type:String,required:true,maxlength:100},

        createdAt:{type:Date,required:true,default:Date.now()},

        updatedAt:{type:Date,required:true,default:Date.now()}
    }
)

module.exports=mongoose.model("Tod",todoschem)


