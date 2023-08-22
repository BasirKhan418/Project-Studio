import connectDb from "../../middleware/mongoose";
import Todo from "../../../models/Todo";
const handler = async (req, res) => {
if(req.method=='POST'){
    if(req.body.message=="getall"){
    let todo= await Todo.find({user:req.body.user});
    res.status(200).json(todo);
    }
    else if(req.body.message=="addtodo"){
        const{title,user}=req.body;
        const todo=new Todo({
            title:title,
            user:user
        })
        let a= await todo.save();
        res.status(200).json({message:'Todo added successfully'})
    }
    else if(req.body.message=="update"){
     let {id,title}=req.body;
     let todo=await Todo.findOneAndUpdate({_id:id},{title:title});
        res.status(200).json({message:'Todo updated successfully'})
    }
    else if(req.body.message=="complete"){
        if(req.body.res==true){
            let {id}=req.body;
            let todo=await Todo.findOneAndUpdate({_id:id},{completed:true});
               res.status(200).json({message:'Todo completed successfully'})
        }
        else{
            let {id}=req.body;
        let todo=await Todo.findOneAndUpdate({_id:id},{completed:false});
           res.status(200).json({message:'Todo undo successfully'})
        }
        
       }
    else{
    let {id}=req.body;
    let todo=await Todo.findOneAndDelete({_id:id});
    res.status(200).json({message:'Todo deleted successfully'})
    }

}
else{
    res.status(400).json({message:"This method is not allowed"})
}
}
export default connectDb(handler);