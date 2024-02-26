import mongoose from 'mongoose'
import dbconnect from '../mongoose.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
dbconnect()
const userSchema=new mongoose.Schema({
    FullName:{
        type:"String",
        required:[true,'Mandatory'],
        trim:true
    },
    Email:{
       type: "String",
        required:[true,'Mandatory'],
        unique:[true,'Email allready register '],
        trim:true
    },
    password:{
        type: "String",
        required:[true,'Mandatory'],
        trim:true
    },
    bio:{
        type:"String"
    },
    avatar:{
     public_id:"String",
     secure_URL:"String"
    },
forgetPassword:"String",
forgetPasswordExfire:Date,
resetpasswordToken:'String',

},{
timestamps:true
})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password=await bcrypt.hash(this.password,10)
    return next()
}),
userSchema.methods={
    validator: async function(password,hashPasswor){
        return await bcrypt.compare(password,hashPasswor)
      }}
export default new mongoose.model('users',userSchema)