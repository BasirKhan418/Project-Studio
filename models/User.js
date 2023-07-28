import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    bio:{type:String,default:''},
    username:{type:String,default:''},
    country:{type:String,default:''},
    college:{type:String,default:''},
    img:{type:String,default:''},
},{timestamps:true})
mongoose.models={}
export default mongoose.model('User',UserSchema);