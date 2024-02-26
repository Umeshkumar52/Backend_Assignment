import mongoose from "mongoose";
import dbconnect from '../mongoose.js'
dbconnect()
const couterSchema=new mongoose.Schema({
    counter:"Number"
})
export default new mongoose.model('counter',couterSchema)