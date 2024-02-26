import productSchema from '../models/productModel.js'
const welcome=async(req,res)=>{
 try {
    const product=await productSchema.find({})
    return res.status(200).json({
        success:true,
        message:"Wlcome to men & women product ",
        product
      })
 } catch (error) {
    return res.status(404).json({
        success:false,
        message:"Unable to fetch all products",
        product
      })
 }
}
const product=async(req,res)=>{
try {
    const {
        name,brand,price,color,size,category
    }=req.body
    const product=await productSchema.create(req.body)
    product.save()
   return res.status(200).json({
        success:true,
        message:product
    }) 
} catch (error) {
   return res.status(200).json({
        success:false,
        message:"Unable to create product"
    }) 
}
}
const menProduct=async(req,res)=>{
   try {
    const product=await productSchema.find({category:"men"})
   return res.status(200).json({
        success:true,
        message:product
    })
   } catch (error) {
    return res.status(404).json({
        success:false,
        message:"product not found"
    })
   }
}
const womenProduct=async(req,res)=>{
    try {
     const product=await productSchema.find({category:"women"})
   return res.status(200).json({
         success:true,
         message:product
     })
    } catch (error) {
        return res.status(404).json({
         success:false,
         message:"!product not found"
     })
    }
 }
 export {product,menProduct,womenProduct,welcome}