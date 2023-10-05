//import the model
// const mongoose = require("mongoose");

const Tod=require("../models/tods")


exports.createtodos=async(req,res)=>{
    try{
        const{title,disc}=req.body
        const response=await Tod.create({title,disc})

        res.status(200).json({
           response
        })
    }catch(error)
    {
        res.status(404).json({
            message:"failure",
        })
    }
} 