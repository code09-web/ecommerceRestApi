import { string } from "joi";
import  mongoose  from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
     type:String,
     required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'customer'
    }
},{timeslambs:true})

export default mongoose.model('users',userSchema)