import mongoose from "mongoose";
const MessageSchema=new mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String,trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:'Chat'},
    readBy:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
},{timestamps:true})
mongoose.models={}
export default mongoose.model('Message',MessageSchema);