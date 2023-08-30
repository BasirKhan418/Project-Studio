import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
import  jwt  from "jsonwebtoken";
const handler = async (req, res) => {
    if(req.method=="POST"){
        try{
            let user = await User.findByIdAndUpdate({_id:req.body.id},{bio:req.body.bio,img:req.body.url})
            console.log(user.email,user.name)
            const token = jwt.sign({email:user.email,name:user.name}, process.env.JWT_SECRET);
            console.log(token);
            
        }
        catch(err){
            res.status(200).json({success:false ,message:"Something went wrong please try again later. Internal server error"});
        }
}

    else{
        res.status(200).json({ message: 'This method is not allowed' })
    }
res.status(200).json({ name: 'John Doe' })
}
export default connectDb(handler);