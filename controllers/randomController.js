const random=async(req,res)=>{
const randomNum=(Math.random()*1000000).toString().slice(0,6)
return res.status(200).json({
    success:true,
    message:randomNum
})
}
export {random}