import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:'user'},
    bio:{type:String,default:''},
},{timestamps:true})
mongoose.models={}
export default mongoose.model('User',UserSchema);