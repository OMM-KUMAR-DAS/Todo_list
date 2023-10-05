const Tod=require("../models/tods")


exports.deleteidd=async(req,res)=>{
    try{
        const resp=await Tod.findByIdAndDelete({_id:req.params.id})
        
        res.status(200).json({
            data:resp,
            message:"records deleted succesfully",
        })
    }catch(error)
    {
        res.status(404).json({
            message:"failure",
        })
    }
} 