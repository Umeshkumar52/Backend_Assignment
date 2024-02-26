import mongoose from "mongoose";
const url='mongodb://localhost:27017/users'
const dbconnect=async()=>{
   await mongoose.connect(url)
} 
export default dbconnect;