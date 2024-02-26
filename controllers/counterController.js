import couterSchema from '../models/couterModel.js'

const counter=async(req,res)=>{
 try {
    const counter=await couterSchema.find()
    return res.status(200).json({
        success:true,
        message:counter
    })
 } catch (error) {
    return res.status(404).json({
        success:false,
        message:"Unable to get couter detail"
    })
 }
}
const counterInc=async(req,res)=>{
    const {counter}=req.body
   try {
    const prevCounter=await couterSchema.find()
        const newCounter=prevCounter[0].counter+counter
        const updateCopunter=await couterSchema.updateOne(
            {counter:prevCounter[0].counter},{$set:{counter:newCounter}}
        )
        return res.status(200).json({
            success:true,
            message:updateCopunter
        })
    // }
   } catch (error) {
    return res.status(404).json({
        success:false,
        message:"unable to update increment couter"
    })
   }
}
const counterDec=async(req,res)=>{
    const {counter}=req.body
   try {
    const prevCounter=await couterSchema.find()
        const newCounter=prevCounter[0].counter-counter;
        console.log(prevCounter[0].counter,counter,newCounter);
        const updateCopunter=await couterSchema.updateOne(
            {counter:prevCounter[0].counter},{$set:{counter:newCounter}}
        )
        return res.status(200).json({
            success:true,
            message:updateCopunter
        })
   } catch (error) {
    return res.status(404).json({
        success:false,
        message:"unable to update decrement couter"
    })
   }
}
export {counter,counterDec,counterInc}