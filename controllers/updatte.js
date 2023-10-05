const Tod=require("../models/tods")


exports.updateid=async(req,res)=>{
    try{

        const{title,disc}=req.body
        const response=await Tod.findByIdAndUpdate({_id:req.params.id},{title,disc})

    
            res.status(200).json({
            data:response,
            message:"records updated successfully",
        })
    }catch(error)
    {
        res.status(404).json({
            message:"failure",
        })
    }
} 