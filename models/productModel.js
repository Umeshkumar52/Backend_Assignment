import mongoose from "mongoose";
import dbconnect from "../mongoose.js";
dbconnect()
const productSchema=new mongoose.Schema({
    name:{
        type:"String"
    },
    brand:{
        type:"String"
    },
    color:{
        type:"String"
    },
    size:{
        type:"String"
    },
    category:{
        type:"String"
    },
    price:{
        type:"Number"
    }
})
export default new mongoose.model("product",productSchema)