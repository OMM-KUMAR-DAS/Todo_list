const Tod=require("../models/tods")


exports.getTodos=async(req,res)=>{
    try{
        // const response=await Tod.find({title:req.params.nam},{disc:1})

        // const response_2=await Tod.find().select('title')    //include

        // const response_3=await Tod.find().select({title:0})  //exclude

        const response=await Tod.find()

        res.status(200).json({response})
    }catch(error)
    { 
        res.status(404).json({
            message:"failure",
        })
    }
} 