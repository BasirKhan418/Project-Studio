import mongoose from "mongoose";
const Chatmodel=mongoose.Schema({
    chatName:{type:String,trim:true},
    isGroupchat:{type:Boolean,default:false},
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    latestMessage:{type:mongoose.Schema.Types.ObjectId,ref:'Message'},
    groupAdmin:{type:mongoose.Schema.Types.ObjectId,ref:'User'},

},{timestamps:true})
mongoose.models={}
export default mongoose.model('Chat',Chatmodel);