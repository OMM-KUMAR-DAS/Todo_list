const Tod=require("../models/tods")


exports.getTodosid=async(req,res)=>{
    try{
        const response=await Tod.findById({_id:req.params.id})

        if(!response)
        {
            return res.status(500).json({
                message:"wrong input provided"
            })
        }
         return res.status(200).json({
            data:response,
            message:"success",
        })
    }catch(error)
    {
        res.status(404).json({
            message:"failure",
        })
    }
} 