import mongoose from "mongoose";
const TodoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    completed:{type:Boolean,default:false}
},{timestamps:true})
mongoose.models={}
export default mongoose.model('Todo',TodoSchema);