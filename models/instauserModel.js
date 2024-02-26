import mongoose from 'mongoose'
import dbconnect from '../mongoose.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
dbconnect()
const instaUserSchema=new mongoose.Schema({
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
    avatar:{
     public_id:"String",
     secure_URL:"String"
    },
    bio:{
        type:"String"
    },
forgetPassword:"String",
forgetPasswordExfire:Date,
resetpasswordToken:'String',

},{
timestamps:true
})
instaUserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password=await bcrypt.hash(this.password,10)
    return next()
}),
instaUserSchema.methods={
    validator: async function(password,hashPasswor){
        return await bcrypt.compare(password,hashPasswor)
      }}
export default new mongoose.model('instaUsers',instaUserSchema)